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

// ============================================================================
//  CATEGORÍAS — filtro de la sección "Para llevar" (la usa Catalog.jsx).
// ============================================================================

export const categorias = [
  { id: 'todos', label: 'Todo el catálogo' },
  { id: 'barras', label: 'Barras de cereal' },
  { id: 'granola', label: 'Granola' },
  { id: 'untables', label: 'Untables' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
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
    desc: 'Hojuelas de avena horneadas con miel, semillas y frutos secos. Receta clásica SaBïa.',
    precio: 1.5,
    img: '/img/barra-regular.jpg',
    badge: 'Sin azúcar añadida',
  },
  {
    id: 'barra-cacao',
    categoria: 'barras',
    canal: 'ambos',
    nombre: 'Barra de Cacao al 70%',
    desc: 'Receta regular con un toque de chocolate ecuatoriano sin azúcar añadido y miel de abeja.',
    precio: 1.5,
    img: '/img/barra-cacao.jpg',
    badge: 'Sin azúcar añadida',
  },
  {
    id: 'barra-ajonjoli-coco',
    categoria: 'barras',
    canal: 'ambos',
    nombre: 'Barra de Ajonjolí con Coco',
    desc: 'Receta regular añadido ajonjolí y coco fresco.',
    precio: 1.5,
    img: '/img/barra-ajonjoli-coco-nueva.jpg',
    badge: 'Sin azúcar añadida',
  },

  // B) GRANOLA
  {
    id: 'granola-regular',
    categoria: 'granola',
    canal: 'ambos',
    nombre: 'Granola Regular 1lb',
    desc: 'Avena horneada con miel de panela, con semillas y frutos secos.',
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
    img: '/img/granola-cacao-nueva.jpg',
    badge: '1 lb',
  },

  // C) UNTABLES
  {
    id: 'mantequilla-mani',
    categoria: 'untables',
    canal: 'ambos',
    nombre: 'Mantequilla de Maní natural 350gr',
    desc: 'Maní tostado y molido con un toque de sabor casero, sin azúcares ni aditivos.',
    precio: 5,
    img: '/img/mantequilla-mani.jpg',
    imgPos: '65%',
    badge: 'Sin aditivos',
  },
  {
    id: 'miel-pura',
    categoria: 'untables',
    canal: 'ambos',
    nombre: 'Miel de abeja pura 350gr',
    desc: 'Miel de abeja pura, dorada y sin procesar. Naturalmente deliciosa.',
    precio: 6,
    img: '/img/miel.jpg',
    imgPos: '80%',
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
    img: '/img/kombucha-500-nueva.jpg',
    imgPos: '20%',
    badge: 'Probiótico',
  },
  {
    id: 'kombucha-litro',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Kombucha 1 litro',
    desc: 'Té fermentado, burbujeante y probiótico. Presentación familiar.',
    precio: 7.5,
    img: '/img/kombucha-litro.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kefir-500',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Yogurt de Kéfir 500ml',
    desc: 'Bebida fermentada rica en probióticos. Cuida tu digestión.',
    precio: 4,
    img: '/img/yogurt-kefir-500.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kefir-litro',
    categoria: 'bebidas',
    canal: 'ambos',
    nombre: 'Yogurt de Kéfir 1 litro',
    desc: 'Bebida fermentada rica en probióticos. Presentación familiar.',
    precio: 8,
    img: '/img/kefir-litro-nueva.jpg',
    badge: 'Probiótico',
  },

  // E) POSTRES
  {
    id: 'parfait',
    categoria: 'postres',
    canal: 'local',
    nombre: 'Parfait',
    desc: 'Capas de pudín de chía, frutas y yogur con nuestra granola artesanal. Un postre rico y saludable.',
    precio: 3.0,
    img: '/img/parfait.jpg',
    badge: 'Postre',
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
    desc: 'Espinaca, banana, kiwi, aguacate, semillas de chía, yogurt de kéfir.',
    precioMediano: 5.0,
    precioGrande: 6.0,
    img: '/img/bowl-verde.jpg',
  },
  {
    id: 'bowl-tropical-mango',
    canal: 'local',
    nombre: 'Tropical Mango Bowl',
    desc: 'Mango (por temporada), piña, coco, banana, yogurt de kéfir.',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-tropical-mango.jpg',
  },
  {
    id: 'bowl-choco-peanut',
    canal: 'local',
    nombre: 'Choco Peanut Bowl',
    desc: 'Banana, mantequilla de maní, cacao en polvo, leche de almendras, yogurt de kéfir.',
    precioMediano: 5.0,
    precioGrande: 6.0,
    img: '/img/bowl-choco-peanut.jpg',
  },
  {
    id: 'bowl-berris-lover',
    canal: 'local',
    nombre: 'Berris Lover Bowl',
    desc: 'Mix de moras, arándanos, fresa, banana, semillas de chía, miel (opcional), yogurt de kéfir.',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-berris-lover-nueva.jpg',
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
    desc: 'Piña, manzana verde, jugo de naranja, sábila, espinaca, pepino, yogurt de kéfir.',
    img: '/img/smoothie-green-citrus-nueva.jpg',
  },
  {
    id: 'smoothie-tropical-dream',
    canal: 'local',
    nombre: 'Tropical Dream',
    desc: 'Mango, piña, banana, yogurt de kéfir.',
    img: '/img/smoothie-tropical-dream.jpg',
  },
  {
    id: 'smoothie-very-berry',
    canal: 'local',
    nombre: 'Very Berry',
    desc: 'Fresas, arándanos, mora, banana, miel (opcional), yogurt de kéfir.',
    img: '/img/smoothie-very-berry.jpg',
  },
  {
    id: 'smoothie-stand-up',
    canal: 'local',
    nombre: 'Stand-Up',
    desc: 'Banana, fresas, avena, semillas de chía, yogurt de kéfir.',
    img: '/img/smoothie-stand-up.jpg',
  },
  {
    id: 'smoothie-playa',
    canal: 'local',
    nombre: 'Playa',
    desc: 'Mango, fresas, piña, jugo de naranja, banana, yogurt de kéfir.',
    img: '/img/smoothie-playa.jpg',
  },
  {
    id: 'smoothie-spinach-crush',
    canal: 'local',
    nombre: 'Spinach Crush',
    desc: 'Espinaca, aguacate, piña, mango (por temporada), banana, yogurt de kéfir.',
    img: '/img/smoothie-spinach-crush.jpg',
  },
  {
    id: 'smoothie-digestiva-vida',
    canal: 'local',
    nombre: 'Digestiva Vida',
    desc: 'Papaya, manzana, avena, banana, yogurt de kéfir.',
    img: '/img/smoothie-digestiva-vida.jpg',
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
    'Kiwi',
  ],
  verduras: ['Espinaca', 'Pepino', 'Sábila'],
  liquidos: ['Kéfir', 'Jugo de naranja', 'Leche de almendras'],
  otros: [
    'Jengibre',
    'Semillas de chía',
    'Semillas de linaza',
    'Cacao en polvo',
    'Mantequilla de maní',
    'Miel',
    'Pasas',
    'Avena',
  ],
  // Límite de selección por grupo (además del máximo total del tamaño elegido).
  limites: { Frutas: 3, Verduras: 1, Líquidos: 1 },
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
    desc: 'Pan de masa madre, mantequilla de maní, fresas y banana, acompañado de semillas de chía y miel de abeja.',
    precio: 4.0,
    img: '/img/tostada-peanut.jpg',
  },
  {
    id: 'toast-mushrooms',
    canal: 'local',
    nombre: 'Mushrooms Toast',
    desc: 'Pan de masa madre, mix de quesos maduros con hierbas, hongos salteados y tomates confitados.',
    precio: 4.5,
    img: '/img/tostada-queso-hongos.jpg',
  },
  {
    id: 'toast-tomatoe',
    canal: 'local',
    nombre: 'Tomatoe Toast',
    desc: 'Pan de masa madre, mix de quesos maduros con hierbas, mix de tomates cherry, vinagre balsámico.',
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
    { id: 'cafe-honey-cinnamon-latte', canal: 'local', nombre: 'Honey-Cinnamon Latte', precio: 3.5, img: '/img/cafe-honey-cinnamon-latte.jpg' },
    { id: 'cafe-iced-coffee', canal: 'local', nombre: 'Iced Coffee', precio: 3.5, img: null },
    { id: 'cafe-iced-latte', canal: 'local', nombre: 'Iced Latte', precio: 3.5, img: '/img/cafe-iced-latte.jpg' },
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
      lineas.push('');
      lineas.push('✅ Pedido confirmado en firme — ya lo empezamos a preparar.');
      break;
    }
    case 'llevar': {
      lineas.push('*🥡 PEDIDO – PARA LLEVAR – SaBïa*');
      lineas.push('');
      lineas.push(`👤 ${pedido.nombre}`);
      lineas.push('');
      pushItems(pedido.items);
      pushExtrasYTotal();
      lineas.push('');
      lineas.push('✅ Pedido en firme. Te avisamos cuando esté listo.');
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
      lineas.push('✅ Pedido en firme. Te avisamos cuando esté listo.');
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
