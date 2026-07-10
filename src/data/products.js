// ============================================================================
//  SaBïa — Datos centralizados del catálogo
//  Edita aquí precios, textos, imágenes y enlaces. Nada más que tocar.
//
//  `canal` por producto:
//    'productos' → solo en el flujo "Pedido de productos" (sin precio visible)
//    'local'     → solo en el menú/pedido del local
//    'ambos'     → aparece en los dos flujos
// ============================================================================

// --- Configuración de marca / contacto (editable) -------------------------
export const site = {
  nombre: 'SaBïa',
  lemaPrincipal: 'la sabiduría de lo natural',
  lemaSecundario: 'comer sano no es aburrido',
  // Número oficial en formato internacional (sin espacios ni +).
  whatsapp: '593996243246',
  whatsappTexto: 'Hola SaBïa 👋 quiero hacer un pedido:',
  instagram: 'https://instagram.com/sabia_bowls',
  instagramHandle: '@sabia_bowls',
  facebook: 'https://facebook.com/SaBiabowls',
  facebookHandle: 'SaBiabowls',
  direccion: 'Av. 12 de Abril y Agustín Cueva',
  lugar: 'Dentro de La Esquina de las Artes',
  ciudad: 'Cuenca, Ecuador',
  referencia: 'Frente al Teatro Carlos Cueva Tamariz · Universidad de Cuenca',
  // Embed de Google Maps (La Esquina de las Artes, Cuenca)
  mapaEmbed:
    'https://www.google.com/maps?q=La%20Esquina%20de%20las%20Artes%2C%20Av.%2012%20de%20Abril%20y%20Agust%C3%ADn%20Cueva%2C%20Cuenca%2C%20Ecuador&output=embed',
};

// Genera el enlace de WhatsApp para un producto concreto (o pedido general).
export const waLink = (producto) => {
  const base = `https://wa.me/${site.whatsapp}?text=`;
  const msg = producto
    ? `${site.whatsappTexto} *${producto}*`
    : site.whatsappTexto;
  return base + encodeURIComponent(msg);
};

// ============================================================================
//  CATEGORÍAS
//  - `categorias`: filtro de la sección "Para llevar" actual (NO tocar hasta
//    que la UI del pedido esté lista — la usa Catalog.jsx).
//  - `categoriasPedido`: filtro unificado del futuro sistema de pedidos.
// ============================================================================

export const categorias = [
  { id: 'todos', label: 'Todo el catálogo' },
  { id: 'barras', label: 'Barras de cereal' },
  { id: 'granola', label: 'Granola' },
  { id: 'untables', label: 'Untables' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
];

export const categoriasPedido = [
  { id: 'productos-sabia', label: 'Productos SaBïa' },
  { id: 'bowls', label: 'Smoothie Bowls' },
  { id: 'smoothies', label: 'Smoothies' },
  { id: 'tostadas', label: 'Tostadas' },
  { id: 'cafes', label: 'Cafés' },
  { id: 'parfait', label: 'Parfait' },
];

// ============================================================================
//  LÍNEA SaBïa — productos empacados (canal 'ambos').
//  En "Pedido de productos" se muestran SIN precio; el precio aplica solo
//  al flujo del local/retail.
// ============================================================================

export const productos = [
  // A) BARRAS DE CEREAL ARTESANALES
  {
    id: 'barra-regular',
    categoria: 'barras',
    canal: 'ambos',
    nombre: 'Barra Regular',
    desc: 'Avena y semillas horneadas con miel. La receta clásica SaBïa.',
    precio: 1.5,
    img: '/img/barra-regular.jpg',
    badge: '100% natural',
  },
  {
    id: 'barra-cacao',
    categoria: 'barras',
    canal: 'ambos',
    nombre: 'Barra de Cacao al 70%',
    desc: 'Cacao ecuatoriano de intenso sabor, sin azúcar añadida refinada.',
    precio: 1.5,
    img: '/img/barra-cacao.jpg',
    badge: '100% natural',
  },
  {
    id: 'barra-ajonjoli-coco',
    categoria: 'barras',
    canal: 'ambos',
    nombre: 'Barra de Ajonjolí con Coco',
    desc: 'Ajonjolí tostado y coco en hojuelas. Crujiente y aromática.',
    precio: 1.5,
    img: '/img/barra-ajonjoli-coco.jpg',
    badge: '100% natural',
  },

  // B) GRANOLA
  {
    id: 'granola-regular',
    categoria: 'granola',
    canal: 'ambos',
    nombre: 'Granola Regular 1lb',
    desc: 'Avena, semillas y frutos horneados con miel. Presentación de 1 libra.',
    precio: 5,
    img: '/img/granola-bolsa.jpg',
    badge: '1 lb',
  },
  {
    id: 'granola-cacao',
    categoria: 'granola',
    canal: 'ambos',
    nombre: 'Granola de Cacao 1lb',
    desc: 'La misma receta artesanal con cacao ecuatoriano. Presentación de 1 libra.',
    precio: 6,
    img: '/img/granola-granel.jpg',
    badge: '1 lb',
  },

  // C) UNTABLES
  {
    id: 'mantequilla-mani',
    categoria: 'untables',
    canal: 'ambos',
    nombre: 'Mantequilla de Maní natural 350gr',
    desc: 'Solo maní tostado y molido. Sin aceites ni azúcares añadidos.',
    precio: 5,
    img: '/img/mantequilla-mani.jpg',
    badge: 'Sin aditivos',
  },
  {
    id: 'miel-pura',
    categoria: 'untables',
    canal: 'ambos',
    nombre: 'Miel de abeja pura 350gr',
    desc: 'Miel de abeja pura, dorada y sin procesar. Dulzor honesto.',
    precio: 6,
    img: '/img/miel.jpg',
    badge: 'Pura',
  },

  // D) BEBIDAS
  {
    id: 'kombucha-500',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Té de Kombucha 500ml',
    desc: 'Té fermentado, burbujeante y probiótico. Buena energía para el día.',
    precio: 3.5,
    img: '/img/kombucha.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kombucha-litro',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Kombucha 1 litro',
    desc: 'Té fermentado, burbujeante y probiótico. Presentación familiar.',
    precio: 7.5,
    img: '/img/kombucha.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kefir-500',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Yogurt de Kéfir 500ml',
    desc: 'Bebida fermentada rica en probióticos. Cuida tu digestión.',
    precio: 4,
    img: '/img/kefir.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kefir-litro',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Kéfir 1 litro',
    desc: 'Bebida fermentada rica en probióticos. Presentación familiar.',
    precio: 8,
    img: '/img/kefir.jpg',
    badge: 'Probiótico',
  },

  // E) POSTRES
  {
    id: 'parfait',
    categoria: 'postres',
    canal: 'local',
    nombre: 'Parfait',
    desc: 'Capas de yogurt, granola y fruta fresca. Dulce y ligero.',
    precio: 3.0,
    img: '/img/parfait.jpg',
    badge: 'Postre',
  },
];

// --- Beneficios de las barras (sección editorial) --------------------------
export const beneficiosBarras = [
  {
    id: 'energia',
    titulo: 'Energía sostenida',
    desc: 'Reponen energía antes o después de entrenar.',
    icon: 'bolt',
  },
  {
    id: 'saciedad',
    titulo: 'Saciedad',
    desc: 'Previenen picar entre horas gracias a su fibra.',
    icon: 'leaf',
  },
  {
    id: 'digestiva',
    titulo: 'Salud digestiva',
    desc: 'La fibra ayuda a mantener el tránsito regular.',
    icon: 'belly',
  },
  {
    id: 'practicidad',
    titulo: 'Practicidad',
    desc: 'Fáciles de llevar y consumir en cualquier lugar.',
    icon: 'bag',
  },
];

// Sabores de barra para el bloque editorial
export const saboresBarras = [
  { nombre: 'Regular', color: '#B07B4F' },
  { nombre: 'Cacao al 70%', color: '#6E2251' },
  { nombre: 'Ajonjolí con Coco', color: '#B07B4F' },
];

// ============================================================================
//  MENÚ DEL LOCAL — solo se prepara y se sirve dentro de SaBïa Bowls
//  (canal 'local'). Precios y recetas tomados del menú físico del local.
// ============================================================================

// --- Smoothie Bowls (tamaños: Mediano / Grande) ------------------------------
export const menuBowls = [
  {
    id: 'bowl-green-detox',
    canal: 'local',
    nombre: 'Green Detox Bowl',
    desc: 'Espinaca, banana, yogurt de kéfir, kiwi, aguacate, semillas de chía.',
    precioMediano: 5.0,
    precioGrande: 6.0,
    img: '/img/bowl-verde.jpg',
  },
  {
    id: 'bowl-tropical-mango',
    canal: 'local',
    nombre: 'Tropical Mango Bowl',
    desc: 'Mango (por temporada), yogurt de kéfir, piña, coco, banana, miel (opcional).',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-tropical-mango.jpg',
  },
  {
    id: 'bowl-choco-peanut',
    canal: 'local',
    nombre: 'Choco Peanut Bowl',
    desc: 'Banana, mantequilla de maní, cacao en polvo, leche de almendras.',
    precioMediano: 5.0,
    precioGrande: 6.0,
    img: '/img/bowl-choco-peanut.jpg',
  },
  {
    id: 'bowl-berris-lover',
    canal: 'local',
    nombre: 'Berris Lover Bowl',
    desc: 'Mix de moras, arándanos, fresa, banana, yogurt de kéfir, semillas de chía, miel (opcional).',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-berris-lover.jpg',
  },
  {
    id: 'bowl-sunrise',
    canal: 'local',
    nombre: 'Sunrise Bowl',
    desc: 'Maracuyá, fresas, banana, yogurt de kéfir.',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-sunrise.jpg',
  },
];

// Arma tu propio bowl (config del constructor)
export const armaTuBowl = {
  mediano: { label: 'Mediano', desc: '1 base + 3 toppings' },
  grande: { label: 'Grande', desc: '1 base + 5 toppings' },
  basesDesc: 'Escoge tres frutas + banana + miel (opcional).',
  precioExtra: 1.5,
  precioPendiente: true,
};

// --- Smoothies (receta fija — Mediano $3.00 · Grande $3.50 para todos) -----
export const preciosSmoothieFijo = { mediano: 3.0, grande: 3.5 };

export const menuSmoothies = [
  {
    id: 'smoothie-green-citrus',
    canal: 'local',
    nombre: 'Green Citrus',
    desc: 'Piña, manzana verde, toronja, sábila, espinaca, pepino.',
    img: '/img/smoothie-green-citrus.jpg',
  },
  {
    id: 'smoothie-tropical-dream',
    canal: 'local',
    nombre: 'Tropical Dream',
    desc: 'Yogurt de kéfir, mango, piña, banana.',
    img: '/img/smoothie-tropical-dream.jpg',
  },
  {
    id: 'smoothie-very-berry',
    canal: 'local',
    nombre: 'Very Berry',
    desc: 'Fresas, arándanos, mora, banana, yogurt de kéfir, miel.',
    img: '/img/smoothie-very-berry.jpg',
  },
  {
    id: 'smoothie-stand-up',
    canal: 'local',
    nombre: 'Stand-Up',
    desc: 'Yogurt de kéfir, banana, fresas, avena, semillas de chía.',
    img: '/img/smoothie-stand-up.jpg',
  },
  {
    id: 'smoothie-playa',
    canal: 'local',
    nombre: 'Playa',
    desc: 'Mango, fresas, piña, jugo de naranja, miel.',
    img: '/img/smoothie-playa.jpg',
  },
  {
    id: 'smoothie-spinach-crush',
    canal: 'local',
    nombre: 'Spinach Crush',
    desc: 'Espinaca, aguacate, piña, mango, banana, yogurt de kéfir.',
    img: '/img/smoothie-spinach-crush.jpg',
  },
  {
    id: 'smoothie-digestiva-vida',
    canal: 'local',
    nombre: 'Digestiva Vida',
    desc: 'Papaya, manzana, yogurt de kéfir, avena, banana.',
    img: '/img/smoothie-digestiva-vida.jpg',
  },
];

// Ítems "arma el tuyo" — para listarlos en el sistema de pedidos sin romper
// las grillas actuales de bowls/smoothies (no tienen foto: img null → la UI
// del pedido usará el fallback de marca).
export const armaTuyoItems = [
  {
    id: 'bowl-arma-el-tuyo',
    canal: 'local',
    tipo: 'bowl',
    nombre: 'Arma tu propio bowl',
    desc: 'Mediano: 1 base + 3 toppings · Grande: 1 base + 5 toppings.',
    precioPendiente: true,
    img: null,
  },
  {
    id: 'smoothie-arma-el-tuyo',
    canal: 'local',
    tipo: 'smoothie',
    nombre: 'Arma tu propio smoothie',
    desc: 'Mediano: 7 ingredientes · Grande: 9 ingredientes. Tú eliges la mezcla.',
    precioMediano: 3.75,
    precioGrande: 4.0,
    img: null,
  },
];

// Arma tu propio smoothie (config del constructor)
export const armaTuSmoothie = {
  mediano: { label: 'Mediano', ingredientes: 7, precio: 3.75 },
  grande: { label: 'Grande', ingredientes: 9, precio: 4.0 },
  frutas: [
    'Piña',
    'Banana',
    'Mix de frutos rojos',
    'Papaya',
    'Mango',
    'Melón',
    'Maracuyá',
    'Naranjilla',
    'Aguacate',
  ],
  verduras: ['Espinaca', 'Kale', 'Apio'],
  otros: [
    'Jengibre',
    'Semillas de chía',
    'Semillas de linaza',
    'Cacao en polvo',
    'Mantequilla de maní',
    'Yogurt de Kéfir',
    'Miel',
    'Dátiles',
  ],
};

// --- Tostadas con pan de masa madre -----------------------------------------
export const menuTostadas = [
  {
    id: 'toast-avocado',
    canal: 'local',
    nombre: 'Avocado Toast',
    desc: 'Pan de masa madre, aguacate, huevo, semillas de ajonjolí.',
    precio: 4.0,
    img: '/img/tostada-aguacate-huevo.jpg',
  },
  {
    id: 'toast-peanut',
    canal: 'local',
    nombre: 'Peanut Toast',
    desc: 'Pan de masa madre, miel, mantequilla de maní, semillas de chía, acompañada de fresas y banana.',
    precio: 4.0,
    img: '/img/tostada-peanut.jpg',
  },
  {
    id: 'toast-mushrooms',
    canal: 'local',
    nombre: 'Mushrooms Toast',
    desc: 'Pan de masa madre, tomates hidratados, hongos salteados, mix de quesos maduros con hierbas.',
    precio: 4.5,
    img: '/img/tostada-queso-hongos.jpg',
  },
  {
    id: 'toast-tomatoe',
    canal: 'local',
    nombre: 'Tomatoe Toast',
    desc: 'Pan de masa madre, mix de tomates cherry, vinagre balsámico, albahaca, queso.',
    precio: 4.5,
    img: '/img/tostada-tomates-asados.jpg',
  },
];

// --- Cafés calientes y fríos -------------------------------------------------
// Sin foto propia: img null → la UI usa un fallback de marca (color + logo).
export const menuCafes = {
  calientes: [
    { id: 'cafe-cappuccino', canal: 'local', nombre: 'Cappuccino', precio: 3.5, img: null },
    { id: 'cafe-mocca', canal: 'local', nombre: 'Mocca', precio: 3.5, img: null },
    { id: 'cafe-americano', canal: 'local', nombre: 'Americano', precio: 2.5, img: null },
    { id: 'cafe-espresso', canal: 'local', nombre: 'Espresso', precio: 2.0, img: null },
    { id: 'cafe-macchiato', canal: 'local', nombre: 'Macchiato', precio: 2.5, img: null },
  ],
  frios: [
    { id: 'cafe-brown-sugar-latte', canal: 'local', nombre: 'Brown Sugar Latte', precio: 3.5, img: null },
    { id: 'cafe-honey-cinnamon-latte', canal: 'local', nombre: 'Honey-Cinnamon Latte', precio: 3.5, img: null },
    { id: 'cafe-iced-coffee', canal: 'local', nombre: 'Iced Coffee', precio: 3.5, img: null },
    { id: 'cafe-iced-latte', canal: 'local', nombre: 'Iced Latte', precio: 3.5, img: null },
  ],
};

// ============================================================================
//  SISTEMA DE PEDIDOS
// ============================================================================

// Extras que se sugieren al final del pedido del local (añadibles en 1 toque).
// `conFoto: true` → se muestra como cuadrado con la imagen y el nombre encima.
// El resto se muestra como chip de solo texto.
export const extrasUpsell = [
  { id: 'barra-cacao', conFoto: true },
  { id: 'parfait', conFoto: true },
  { id: 'kombucha-500', conFoto: true },
  { id: 'barra-regular' },
  { id: 'barra-ajonjoli-coco' },
  { id: 'granola-regular' },
  { id: 'granola-cacao' },
];

export const pedidoConfig = {
  // Entrega SOLO en estos 3 puntos (selector, sin GPS).
  puntosEntrega: [
    'Universidad de Cuenca (Campus Central)',
    'Hospital Santa Inés',
    'Colegio Benigno Malo',
  ],
  // Tipos de pedido, en primera persona. El `id` es el que entiende
  // buildPedidoWA; el `label` es lo que ve el cliente.
  tiposPedido: [
    { id: 'comer', label: 'Quiero comer en el local' },
    { id: 'llevar', label: 'Quiero pedir para llevar' },
    { id: 'entrega', label: 'Quiero entrega cerquita del local' },
    { id: 'productos', label: 'Quiero pedir productos SaBïa para mi negocio' },
  ],
  // Kit de Muestra — única salida directa a WhatsApp fuera del carrito.
  // SIN precio: se conversa por WhatsApp. No renderizar precio en la UI.
  paqueteMuestra: {
    nombre: 'Kit de Muestra SaBïa',
    precio: null,
    incluye: 'toda la línea SaBïa',
    detalle: [
      'Granola regular y de cacao',
      'Barras: regular, cacao 70% y ajonjolí con coco',
      'Mantequilla de maní y miel de abeja',
      'Té de kombucha y yogurt de kéfir',
    ],
    img: '/img/productos-linea.jpg',
    mensajeWA:
      'Hola SaBïa 👋 Quiero el Kit de Muestra con toda la línea de productos. ¿Me cuentas cómo funciona?',
  },
  // Horarios de atención (aplican a pedidos en local y entrega cerquita).
  horarios: {
    semana: 'Martes a Sábado de 8h30 a 20h00',
    domingo: 'Domingos de 12h00 a 18h00',
    texto: 'Mar–Sáb 8h30–20h00 · Dom 12h00–18h00',
  },
};

// ----------------------------------------------------------------------------
// buildPedidoWA(pedido) → URL de wa.me con el mensaje del pedido ya armado.
// ÚNICO generador de mensajes: clasifica según pedido.tipo.
//
// pedido = {
//   tipo: 'comer' | 'llevar' | 'entrega' | 'productos',   // id de tiposPedido
//   nombre: string,                     // obligatorio en todos los tipos
//   negocio?: string,                   // tipo 'productos' (opcional)
//   direccion?: string,                 // tipo 'productos'
//   puntoEntrega?: string,              // tipo 'entrega' (uno de puntosEntrega)
//   detalleEntrega?: string,            // tipo 'entrega' (aula/piso/oficina)
//   items: [{ nombre, cantidad, tamano?, nota? }],
//   extras?: [{ nombre, cantidad }],    // tipos del local
//   total?: number,                     // tipos del local (nunca en 'productos')
// }
// ----------------------------------------------------------------------------
// Enlace del Kit de Muestra: invita a conversar, nunca menciona precio.
export const waKitMuestra = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    pedidoConfig.paqueteMuestra.mensajeWA,
  )}`;

export const buildPedidoWA = (pedido) => {
  const lineas = [];

  const pushItems = (items) => {
    items.forEach((it) => {
      const tam = it.tamano ? ` (${it.tamano})` : '';
      lineas.push(`• ${it.cantidad} × ${it.nombre}${tam}`);
      if (it.nota) lineas.push(`   ↳ ${it.nota}`);
    });
  };

  const pushExtrasYTotal = () => {
    if (pedido.extras?.length) {
      lineas.push('');
      lineas.push('✨ Extras:');
      pedido.extras.forEach((ex) => lineas.push(`• ${ex.cantidad} × ${ex.nombre}`));
    }
    if (typeof pedido.total === 'number') {
      lineas.push('');
      lineas.push(`💰 Total: $${pedido.total.toFixed(2)}`);
    }
  };

  switch (pedido.tipo) {
    case 'comer': {
      lineas.push('*🍽️ PEDIDO – COMER EN EL LOCAL – SaBïa*');
      lineas.push('');
      lineas.push(`👤 ${pedido.nombre}`);
      lineas.push('');
      pushItems(pedido.items);
      pushExtrasYTotal();
      break;
    }
    case 'llevar': {
      lineas.push('*🥡 PEDIDO – PARA LLEVAR – SaBïa*');
      lineas.push('');
      lineas.push(`👤 ${pedido.nombre}`);
      lineas.push('');
      pushItems(pedido.items);
      pushExtrasYTotal();
      break;
    }
    case 'entrega': {
      lineas.push('*🛵 PEDIDO – ENTREGA CERCANA – SaBïa*');
      lineas.push('');
      const detalle = pedido.detalleEntrega ? ` · ${pedido.detalleEntrega}` : '';
      lineas.push(`📍 ${pedido.puntoEntrega}${detalle}`);
      lineas.push(`👤 ${pedido.nombre}`);
      lineas.push('');
      pushItems(pedido.items);
      pushExtrasYTotal();
      lineas.push('');
      lineas.push('Sujeto a confirmación 💛');
      break;
    }
    case 'productos': {
      lineas.push('*📦 PEDIDO DE PRODUCTOS – SaBïa*');
      lineas.push('');
      const quien = pedido.negocio
        ? `${pedido.nombre} · ${pedido.negocio}`
        : pedido.nombre;
      lineas.push(`👤 ${quien}`);
      if (pedido.direccion) lineas.push(`📍 ${pedido.direccion}`);
      lineas.push('');
      // Sin precios ni total: el precio se conversa por WhatsApp.
      pedido.items.forEach((it) => {
        lineas.push(`• ${it.cantidad} × ${it.nombre}`);
      });
      lineas.push('');
      lineas.push('Coordinamos precio y entrega por aquí 💛');
      break;
    }
    default:
      lineas.push(site.whatsappTexto);
  }

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lineas.join('\n'))}`;
};
