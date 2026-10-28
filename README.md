# Mendoza Construcciones

Web completa en HTML, CSS y JavaScript, adaptada a pantallas grandes y móviles.

## Publicar en GitHub Pages
1. Subí el contenido de esta carpeta a la raíz de tu repositorio.
2. En Settings → Pages, seleccioná Deploy from a branch.
3. Elegí main y / (root), y guardá.

No necesita instalación ni compilación. Para verla localmente podés abrir index.html.

## Contenido
- index.html: inicio, servicios, galería de trabajos y parallax.
- servicios.html: construcción y albañilería, reformas y ampliaciones, terminaciones.
- contacto.html: formulario para preparar una consulta por WhatsApp y mapa del centro de Rosario.
- app.js: encabezado, footer, menú móvil y conexión con WhatsApp.
- style.css: diseño y adaptación móvil.
- assets/: logo proporcionado y fotos descargadas directamente de Instagram.

WhatsApp: +54 9 341 610-7230.
Instagram: https://www.instagram.com/mendoza_contrucciones.1/
El mapa indica el centro de Rosario como zona de referencia a pedido del usuario, no una oficina física confirmada.
El formulario prepara el mensaje y abre WhatsApp. El visitante lo revisa y lo envía; no hay almacenamiento ni envío de emails.
La trayectoria de más de 15 años proviene de la biografía de Instagram. Las descripciones de servicios son textos de presentación para revisar con la empresa.
Las imágenes son archivos de publicaciones y portadas de reels de la cuenta, sin capturas de la interfaz de Instagram. Los encuadres se adaptan con CSS sin deformar las imágenes. La resolución disponible depende de la publicación original.
El mapa usa Google Maps y las tipografías Google Fonts; requieren conexión. El parallax pasa a una imagen estática en móviles y cuando se solicita movimiento reducido.
Footer: Diseñado por NG Software.

## Actualización visual v2
Logo original adjunto conservado con canal alfa transparente. En Inicio se oculta únicamente el logo del encabezado; permanece en el hero, loader y footer. Servicios y Contacto conservan el logo en el encabezado.
El inicio muestra un loader animado mientras se prepara la imagen principal, con un límite de espera de cuatro segundos. Si JavaScript no carga, no aparece un loader que bloquee la página.
Hero y parallax utilizan dos renders nuevos generados en alta calidad, disponibles en assets/hero-mendoza.png y assets/parallax-mendoza.png. Las fotos de trabajos de Instagram se mantienen en la galería.
responsive.css contiene los ajustes finales para móviles, tabletas y movimiento reducido. Revisión visual de las tres páginas a 320, 375 y 390 píxeles; menú móvil probado.
