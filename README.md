# Special Moments

Una SPA estática y configurable para crear experiencias digitales para momentos especiales. Incluye dos demostraciones construidas con el mismo núcleo: un regalo romántico y una invitación elegante.

## Modos y presets

- **Digital Gift** (`?experience=romantic`): dedicatoria, recuerdos, ambiente de corazones, música opcional y CTA de WhatsApp.
- **Event Invitation** (`?experience=invitation`): anfitriones, fecha, cuenta regresiva, ubicación, dress code, galería opcional y RSVP.

No es un SaaS: no incluye backend, cuentas, editor, pagos ni almacenamiento remoto.

## Arquitectura de configuración

Las experiencias viven en `src/config/experiences.js`. Cada preset declara solamente sus datos: `mode`, `theme`, `reveal`, `identity`, `hero`, `gallery`, `music`, `cta`, `effects` y, para invitaciones, `event`.

Los componentes leen esa configuración y sólo renderizan las secciones pertinentes al modo y a los bloques habilitados. La selección usa el parámetro `experience`; no se necesita React Router.

## Cómo crear una nueva experiencia

1. Duplica uno de los objetos en `src/config/experiences.js` y asigna un `id` único.
2. Elige `mode: 'gift'` o `mode: 'invitation'` y un tema (`romantic` o `elegant`).
3. Completa el contenido del hero e identidad; añade sólo los bloques opcionales necesarios.
4. Para galería, define uno o más objetos `{ src, alt }`; para música, habilita `music` y proporciona `src`.
5. Configura el CTA con `kind: 'whatsapp'` y un número, o `kind: 'rsvp'` y una URL HTTPS. El mensaje se codifica de forma segura.
6. Abre `?experience=<id>` y añade el preset al selector si debe ser una demo pública.

## Requisitos e instalación

Node.js 20+ y npm.

```bash
npm ci
npm run dev
```

Vite mostrará la URL local. Prueba las demostraciones en `?experience=romantic` y `?experience=invitation`.

## Calidad

```bash
npm test
npm run lint
npm run build
npm run preview
```

Las pruebas cubren selección de preset, render por modo, secciones opcionales, reveal accesible, galería, música, CTA y cuenta regresiva.

## Limitaciones

La configuración vive en código y los assets son locales. Para cambiar contenido se edita el preset y se vuelve a compilar. El CTA abre servicios externos; no envía mensajes ni procesa RSVP dentro de la aplicación.
