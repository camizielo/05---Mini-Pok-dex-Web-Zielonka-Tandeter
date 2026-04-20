# 05---Mini-Pok-dex-Web-Zielonka-TandeterMini Pokédex
Aplicación web que permite buscar un Pokémon por nombre utilizando la PokéAPI.

Endpoints utilizados
- https://pokeapi.co/api/v2/pokemon/{name}

Estructura del proyecto
- index.html: estructura
- style.css: estilos
- app.js: lógica y consumo de API

Tecnologías
- HTML
- CSS
- JavaScript

Funcionalidades
- Buscar Pokémon
- Mostrar nombre, imagen, tipo, peso y altura
- Manejo de errores
- Indicador de carga

Decisiones tomadas
Se utilizó fetch con async/await para simplificar el manejo de promesas y mejorar la legibilidad del código.

Dificultades encontradas
- Comprender la estructura del JSON
- Manejar errores cuando el Pokémon no existe