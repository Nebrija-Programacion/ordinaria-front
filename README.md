# Examen: Sitio Web de Personajes de Harry Potter

La siguiente prueba consiste en clonar y mejorar la web disponible en [https://ordinaria-limonera.deno.dev](https://ordinaria-limonera.deno.dev). Deberás replicar sus funcionalidades siguiendo las instrucciones que se describen a continuación.

## Funcionalidades a implementar

1. **Ruta `/`**
   - Muestra la lista completa de personajes.
   - Cada personaje debe tener un botón o icono para marcarlo o desmascarlo como favorito (FAV). Al marcarlo, la estrella se vuelve amarilla.
   - El nombre o imagen del personaje debe enlazar a su página de detalle.
2. **Ruta `/characters/[id]`**
   - Presenta la información de un personaje concreto.
   - Indica si el personaje ya es favorito y permite tanto marcarlo como desmarcarlo.
   - Debe existir un enlace para volver a la página principal.
3. **Ruta `/favorites`**
   - Muestra únicamente los personajes marcados como favoritos.

**Todas las rutas deben renderizarse en el servidor**. La selección de favoritos debe almacenarse en una _cookie_ para que se mantenga entre visitas.

## Puntuación del examen

- Ruta `/`: **2 puntos**
- Ruta `/characters/[id]`: **2 puntos**
- Ruta `/favorites`: **2 puntos**
- Funcionamiento completo de FAV (marcar y desmarcar favoritos): **4 puntos**

## Rúbrica de evaluación

- El código no funciona o no realiza lo solicitado: **0%**.
- El código funciona parcialmente y faltan funcionalidades o tiene errores graves de código: **30%**.
- El código cumple todas las funcionalidades pero presenta errores leves de código o problemas de estilo: **70%**.
- El código cumple todo lo solicitado y está correctamente estructurado y sin errores: **100%**.

## Normas

**Se pueden visitar las siguientes páginas web**
- [Deno Deploy](https://deno.com/deploy)
- [Fresh](https://fresh.deno.dev/)
- [Preact](https://preactjs.com/)
- [HP API](https://hp-api.onrender.com/)
- [MDN Web Docs](https://developer.mozilla.org/)


* Se puede llevar una chuleta de una cara escrita a mano (sin fotocopias ni impresiones).
* No se permite el uso de github copilot, chatgpt o cualquier otra IA generativa.
* Se debe grabar en todo momento la pantalla completa del ordenador.

## Entrega
 * Enlace a la release de GitHub con el código del examen.
 * Archivo comprimido generado en la release de GitHub.
 * Enlace al proyeto desplegado en Deno Deploy.
