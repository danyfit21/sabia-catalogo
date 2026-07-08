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

// --- Categorías (orden + etiqueta del filtro) ------------------------------
export const categorias = [
  { id: 'todos', label: 'Todo el catálogo' },
  { id: 'barras', label: 'Barras de cereal' },
  { id: 'granola', label: 'Granola' },
  { id: 'untables', label: 'Untables' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'bowls', label: 'SaBïa Bowls' },
  { id: 'tostadas', label: 'Tostadas' },
];

// --- Productos --------------------------------------------------------------
// precio en USD (placeholder editable). img relativa a /public.
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
  {
    id: 'smoothie-verde',
    categoria: 'bebidas',
    nombre: 'Smoothie verde',
    desc: 'Frutas y vegetales frescos licuados al momento. Pura vitalidad.',
    precio: 4.0,
    img: '/img/smoothie-verde.jpg',
    badge: 'Recién hecho — menú de local',
  },

  // E) SABïA BOWLS (menú de local — precios por confirmar)
  {
    id: 'bowl-verde',
    categoria: 'bowls',
    nombre: 'Bowl Verde',
    desc: 'Kiwi, mango, granola, coco y chía sobre base verde.',
    precio: 6.5,
    img: '/img/bowl-verde.jpg',
    badge: 'Menú de local',
  },
  {
    id: 'bowl-acai-power',
    categoria: 'bowls',
    nombre: 'Bowl Açaí Power',
    desc: 'Granada, chocolate, coco y almendras. Energía intensa.',
    precio: 6.9,
    img: '/img/bowl-acai-power.jpg',
    badge: 'Menú de local',
  },
  {
    id: 'bowl-clasico',
    categoria: 'bowls',
    nombre: 'Bowl Clásico',
    desc: 'Banana, frutilla, chocolate y granola. El favorito de siempre.',
    precio: 6.0,
    img: '/img/bowl-clasico.jpg',
    badge: 'Menú de local',
  },

  // F) TOSTADAS ARTESANALES (menú de local — precios por confirmar)
  {
    id: 'tostada-frutos-rojos',
    categoria: 'tostadas',
    nombre: 'Tostada de Frutos Rojos',
    desc: 'Pan artesanal con mantequilla de maní, frutilla y arándanos.',
    precio: 5.0,
    img: '/img/tostada-frutos-rojos.jpg',
    badge: 'Menú de local',
  },
  {
    id: 'tostada-aguacate-huevo',
    categoria: 'tostadas',
    nombre: 'Tostada de Aguacate & Huevo',
    desc: 'Aguacate, huevo y ajonjolí negro sobre pan integral.',
    precio: 5.5,
    img: '/img/tostada-aguacate-huevo.jpg',
    badge: 'Menú de local',
  },
  {
    id: 'tostada-tomates-asados',
    categoria: 'tostadas',
    nombre: 'Tostada de Tomates Asados',
    desc: 'Tomates asados con quesos maduros y albahaca fresca.',
    precio: 5.5,
    img: '/img/tostada-tomates-asados.jpg',
    badge: 'Menú de local',
  },
  {
    id: 'tostada-queso-hongos',
    categoria: 'tostadas',
    nombre: 'Tostada de Queso & Hongos',
    desc: 'Crema de queso, hongos salteados y ajonjolí blanco.',
    precio: 5.5,
    img: '/img/tostada-queso-hongos.jpg',
    badge: 'Menú de local',
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
