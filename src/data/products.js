// ============================================================================
//  SaBïa — Datos centralizados del catálogo
//  Edita aquí precios, textos, imágenes y enlaces. Nada más que tocar.
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
//  CATÁLOGO "PARA LLEVAR" — productos físicos que se elaboran y se venden
//  para consumir en casa (barras, granola, untables, bebidas embotelladas).
//  Esto NO incluye lo que se prepara y sirve únicamente en el local — eso
//  vive en la sección "MENÚ DEL LOCAL" más abajo.
// ============================================================================

// --- Categorías (orden + etiqueta del filtro) ------------------------------
export const categorias = [
  { id: 'todos', label: 'Todo el catálogo' },
  { id: 'barras', label: 'Barras de cereal' },
  { id: 'granola', label: 'Granola' },
  { id: 'untables', label: 'Untables' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
];

// --- Productos para llevar ---------------------------------------------------
// precio en USD. img relativa a /public.
export const productos = [
  // A) BARRAS DE CEREAL ARTESANALES
  {
    id: 'barra-regular',
    categoria: 'barras',
    nombre: 'Barra Regular',
    desc: 'Avena y semillas horneadas con miel. La receta clásica SaBïa.',
    precio: 1.5,
    img: '/img/barras-surtido.jpg',
    badge: '100% natural',
  },
  {
    id: 'barra-cacao',
    categoria: 'barras',
    nombre: 'Barra de Cacao al 70%',
    desc: 'Cacao ecuatoriano de intenso sabor, sin azúcar añadida refinada.',
    precio: 1.5,
    img: '/img/barras-detalle.jpg',
    badge: '100% natural',
  },
  {
    id: 'barra-ajonjoli-coco',
    categoria: 'barras',
    nombre: 'Barra de Ajonjolí con Coco',
    desc: 'Ajonjolí tostado y coco en hojuelas. Crujiente y aromática.',
    precio: 1.5,
    img: '/img/barras-surtido.jpg',
    badge: '100% natural',
  },

  // B) GRANOLA
  {
    id: 'granola-regular',
    categoria: 'granola',
    nombre: 'Granola Regular 1lb',
    desc: 'Avena, semillas y frutos horneados con miel. Presentación de 1 libra.',
    precio: 5,
    img: '/img/granola-bolsa.jpg',
    badge: '1 lb',
  },
  {
    id: 'granola-cacao',
    categoria: 'granola',
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
    nombre: 'Mantequilla de Maní natural 350gr',
    desc: 'Solo maní tostado y molido. Sin aceites ni azúcares añadidos.',
    precio: 5,
    img: '/img/mantequilla-mani.jpg',
    badge: 'Sin aditivos',
  },
  {
    id: 'miel-pura',
    categoria: 'untables',
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
    nombre: 'Té de Kombucha 500ml',
    desc: 'Té fermentado, burbujeante y probiótico. Buena energía para el día.',
    precio: 3.5,
    img: '/img/kombucha.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kombucha-litro',
    categoria: 'bebidas',
    nombre: 'Té de Kombucha 1 litro',
    desc: 'Té fermentado, burbujeante y probiótico. Presentación familiar.',
    precio: 7.5,
    img: '/img/kombucha.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kefir-500',
    categoria: 'bebidas',
    nombre: 'Yogurth de Kéfir 500ml',
    desc: 'Bebida fermentada rica en probióticos. Cuida tu digestión.',
    precio: 4,
    img: '/img/kombucha.jpg',
    badge: 'Probiótico',
  },
  {
    id: 'kefir-litro',
    categoria: 'bebidas',
    nombre: 'Kéfir 1 litro',
    desc: 'Bebida fermentada rica en probióticos. Presentación familiar.',
    precio: 8,
    img: '/img/kombucha.jpg',
    badge: 'Probiótico',
  },

  // E) POSTRES
  {
    id: 'parfait',
    categoria: 'postres',
    nombre: 'Parfait',
    desc: 'Capas de yogurt, granola y fruta fresca. Dulce y ligero.',
    precio: 3.0,
    img: '/img/granola-bolsa.jpg',
    badge: 'Foto próximamente',
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
//  MENÚ DEL LOCAL — solo se prepara y se sirve dentro de SaBïa Bowls.
//  No son productos "para llevar" empacados; por eso viven separados del
//  catálogo de arriba. Precios y recetas tomados del menú físico del local.
// ============================================================================

// --- Bowls (tamaño Mediano = 3 toppings · Grande = 5 toppings) -------------
export const menuBowls = [
  {
    id: 'bowl-green-detox',
    nombre: 'Green Detox Bowl',
    desc: 'Espinaca, banana, yogurt de kéfir, kiwi, aguacate, semillas de chía.',
    precioMediano: 5.0,
    precioGrande: 6.0,
    img: '/img/bowl-verde.jpg',
  },
  {
    id: 'bowl-tropical-mango',
    nombre: 'Tropical Mango Bowl',
    desc: 'Mango (por temporada), yogurt de kéfir, piña, coco, banana, miel (opcional).',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-clasico.jpg',
    fotoPendiente: true,
  },
  {
    id: 'bowl-choco-peanut',
    nombre: 'Choco Peanut Bowl',
    desc: 'Banana, mantequilla de maní, cacao en polvo, leche de almendras.',
    precioMediano: 5.0,
    precioGrande: 6.0,
    img: '/img/bowl-acai-power.jpg',
    fotoPendiente: true,
  },
  {
    id: 'bowl-berris-lover',
    nombre: 'Berris Lover Bowl',
    desc: 'Mix de moras, arándanos, fresa, banana, yogurt de kéfir, semillas de chía, miel (opcional).',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-acai-power.jpg',
    fotoPendiente: true,
  },
  {
    id: 'bowl-sunrise',
    nombre: 'Sunrise Bowl',
    desc: 'Maracuyá, fresas, banana, yogurt de kéfir.',
    precioMediano: 4.5,
    precioGrande: 5.5,
    img: '/img/bowl-clasico.jpg',
    fotoPendiente: true,
  },
];

// Arma tu propio bowl
export const armaTuBowl = {
  mediano: { label: 'Mediano', desc: '1 base + 3 toppings' },
  grande: { label: 'Grande', desc: '1 base + 5 toppings' },
  basesDesc: 'Escoge tres frutas + banana + miel (opcional).',
  precioExtra: 1.5,
};

// --- Smoothies (receta fija — Mediano $3.00 · Grande $3.50 para todos) -----
export const preciosSmoothieFijo = { mediano: 3.0, grande: 3.5 };

export const menuSmoothies = [
  {
    id: 'smoothie-green-citrus',
    nombre: 'Green Citrus',
    desc: 'Piña, manzana verde, toronja, sábila, espinaca, pepino.',
    img: '/img/smoothie-green-citrus.jpg',
  },
  {
    id: 'smoothie-tropical-dream',
    nombre: 'Tropical Dream',
    desc: 'Yogurt de kéfir, mango, piña, banana.',
    img: '/img/smoothie-tropical-dream.jpg',
  },
  {
    id: 'smoothie-very-berry',
    nombre: 'Very Berry',
    desc: 'Fresas, arándanos, mora, banana, yogurt de kéfir, miel.',
    img: '/img/smoothie-very-berry.jpg',
  },
  {
    id: 'smoothie-stand-up',
    nombre: 'Stand-Up',
    desc: 'Yogurt de kéfir, banana, fresas, avena, semillas de chía.',
    img: '/img/smoothie-stand-up.jpg',
  },
  {
    id: 'smoothie-playa',
    nombre: 'Playa',
    desc: 'Mango, fresas, piña, jugo de naranja, miel.',
    img: '/img/smoothie-playa.jpg',
  },
  {
    id: 'smoothie-spinach-crush',
    nombre: 'Spinach Crush',
    desc: 'Espinaca, aguacate, piña, mango, banana, yogurt de kéfir.',
    img: '/img/smoothie-green-citrus.jpg',
    fotoPendiente: true,
  },
  {
    id: 'smoothie-digestiva-vida',
    nombre: 'Digestiva Vida',
    desc: 'Papaya, manzana, yogurt de kéfir, avena, banana.',
    img: '/img/smoothie-stand-up.jpg',
    fotoPendiente: true,
  },
];

// Arma tu propio smoothie
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
    nombre: 'Avocado Toast',
    desc: 'Pan de masa madre, aguacate, huevo, semillas de ajonjolí.',
    precio: 4.0,
    img: '/img/tostada-aguacate-huevo.jpg',
  },
  {
    id: 'toast-peanut',
    nombre: 'Peanut Toast',
    desc: 'Pan de masa madre, miel, mantequilla de maní, semillas de chía, acompañada de fresas y banana.',
    precio: 4.0,
    img: '/img/tostada-frutos-rojos.jpg',
    fotoPendiente: true,
  },
  {
    id: 'toast-mushrooms',
    nombre: 'Mushrooms Toast',
    desc: 'Pan de masa madre, tomates hidratados, hongos salteados, mix de quesos maduros con hierbas.',
    precio: 4.5,
    img: '/img/tostada-queso-hongos.jpg',
  },
  {
    id: 'toast-tomatoe',
    nombre: 'Tomatoe Toast',
    desc: 'Pan de masa madre, mix de tomates cherries, vinagre balsámico, albahaca, queso.',
    precio: 4.5,
    img: '/img/tostada-tomates-asados.jpg',
  },
];

// --- Cafés calientes y fríos -------------------------------------------------
export const menuCafes = {
  calientes: [
    { nombre: 'Cappuccino', precio: 3.5 },
    { nombre: 'Mocca', precio: 3.5 },
    { nombre: 'Americano', precio: 2.5 },
    { nombre: 'Espresso', precio: 2.0 },
    { nombre: 'Macchiato', precio: 2.5 },
  ],
  frios: [
    { nombre: 'Brown Sugar Latte', precio: 3.5 },
    { nombre: 'Honey-Cinnamon Latte', precio: 3.5 },
    { nombre: 'Iced Coffee', precio: 3.5 },
    { nombre: 'Iced Latte', precio: 3.5 },
  ],
};
