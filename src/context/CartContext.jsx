import { createContext, useContext, useMemo, useReducer } from 'react'

// ============================================================================
//  Carrito SaBïa — estado en memoria (sin localStorage, por diseño).
//  Un ítem se identifica por id + tamaño (una Barra Regular y una Granola
//  conviven; un bowl Mediano y el mismo bowl Grande son líneas distintas).
//
//  `modo`: 'local' (con precios) | 'productos' (sin precios — el flujo de
//  pedido de productos oculta subtotales y total; el precio se conversa).
// ============================================================================

const CartContext = createContext(null)

const keyOf = (item) => `${item.id}::${item.tamano ?? ''}`

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const key = keyOf(action.item)
      const existente = state.items.find((i) => i.key === key)
      const items = existente
        ? state.items.map((i) =>
            i.key === key
              ? { ...i, cantidad: i.cantidad + (action.item.cantidad || 1) }
              : i,
          )
        : [
            ...state.items,
            { ...action.item, key, cantidad: action.item.cantidad || 1 },
          ]
      return { ...state, items }
    }
    case 'remove':
      return { ...state, items: state.items.filter((i) => i.key !== action.key) }
    case 'setQty': {
      const cantidad = Math.max(0, action.cantidad)
      if (cantidad === 0)
        return { ...state, items: state.items.filter((i) => i.key !== action.key) }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, cantidad } : i,
        ),
      }
    }
    case 'clear':
      return state.items.length === 0 ? state : { ...state, items: [] }
    // Idempotentes: devolver el mismo objeto evita re-renders en cascada.
    case 'modo':
      return state.modo === action.modo ? state : { ...state, modo: action.modo }
    case 'open':
      return state.abierto ? state : { ...state, abierto: true }
    case 'close':
      return state.abierto ? { ...state, abierto: false } : state
    // Abre el drawer con un tipo de pedido ya elegido (desde el Kit de Muestra).
    case 'openTipo':
      return {
        ...state,
        abierto: true,
        preTipo: action.tipo,
        modo: action.tipo === 'productos' ? 'productos' : 'local',
      }
    case 'clearPreTipo':
      return state.preTipo == null ? state : { ...state, preTipo: null }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    preTipo: null,
    modo: 'local',
    abierto: false,
  })

  // `dispatch` es estable, así que estas acciones nunca cambian de identidad.
  const acciones = useMemo(
    () => ({
      add: (item) => dispatch({ type: 'add', item }),
      remove: (key) => dispatch({ type: 'remove', key }),
      setQty: (key, cantidad) => dispatch({ type: 'setQty', key, cantidad }),
      clear: () => dispatch({ type: 'clear' }),
      setModo: (modo) => dispatch({ type: 'modo', modo }),
      open: () => dispatch({ type: 'open' }),
      close: () => dispatch({ type: 'close' }),
      openConTipo: (tipo) => dispatch({ type: 'openTipo', tipo }),
      clearPreTipo: () => dispatch({ type: 'clearPreTipo' }),
    }),
    [],
  )

  const value = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.cantidad, 0)
    const total = state.items.reduce((s, i) => s + (i.precio || 0) * i.cantidad, 0)
    return {
      ...state,
      count,
      total,
      sinPrecios: state.modo === 'productos',
      ...acciones,
    }
  }, [state, acciones])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
