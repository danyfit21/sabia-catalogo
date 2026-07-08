# SaBïa · Catálogo web

Catálogo web premium one-page para **SaBïa — la sabiduría de lo natural**, marca
ecuatoriana de alimentos naturales y saludables en Cuenca.

Construido con **Vite + React + Tailwind CSS + Framer Motion**.

## 🚀 Cómo correrlo

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compila a /dist para producción
npm run preview  # previsualiza el build de producción
```

> Requiere Node 18+.

## 📦 Despliegue (Vercel / Netlify)

El proyecto es 100% estático. En cualquiera de las dos plataformas:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Importa el repo y listo. No requiere variables de entorno.

## ✏️ Cómo editar contenido

Todo el contenido editable está centralizado:

| Qué cambiar | Archivo |
| --- | --- |
| Productos, precios, descripciones, categorías | `src/data/products.js` |
| WhatsApp, Instagram, Facebook, dirección, mapa | `src/data/products.js` → objeto `site` |
| Colores de marca y fuentes | `tailwind.config.js` |
| Imágenes | `public/img/` |

### Cambiar el número de WhatsApp

En `src/data/products.js`, edita el campo `whatsapp` del objeto `site`
(formato internacional, sin `+` ni espacios). Ejemplo: `593987654321`.

### Cambiar precios

Cada producto en `productos[]` tiene un campo `precio` (número en USD).
Los precios actuales son **referenciales / placeholders**.

## 🎨 Identidad

- **Paleta:** vino `#6E2251`, marigold `#F4A11E`, crema `#EFE6D0`,
  violeta `#803E8E`, carbón `#2B2326`, kraft `#B07B4F`.
- **Tipografías:** Fredoka (títulos), Poppins (cuerpo), Caveat (lema en script).
- **Elementos de marca:** semilla/hoja del logo como separadores SVG, blobs
  orgánicos, patrón de semillas tono sobre tono y textura de grano artesanal.

## 🗂️ Estructura

```
public/img/          imágenes optimizadas (logo, productos, bowls, tostadas)
src/
  data/products.js   ← datos centralizados (productos, precios, contacto)
  components/         secciones y piezas reutilizables
  App.jsx            ensamblado de la página
  index.css          estilos base + utilidades de marca (patrón, grano)
tailwind.config.js   colores y fuentes de marca
```

## 🧩 Secciones

Nav fija translúcida · Hero animado · Tira de valores · Catálogo con filtro ·
Barras (sabores + beneficios) · SaBïa Bowls · Historia de marca · Visítanos
(mapa) · CTA + contacto · Footer.

---

Hecho con ♥ y la sabiduría de lo natural.
