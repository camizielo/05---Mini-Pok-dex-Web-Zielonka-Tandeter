const input = document.getElementById("inputPokemon");
const btn = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");
const loading = document.getElementById("loading");

btn.addEventListener("click", buscarPokemon);

async function buscarPokemon() {
  const nombre = input.value.toLowerCase().trim();

  if (nombre === "") {
    error.textContent = "Escribí un Pokémon";
    return;
  }

  error.textContent = "";
  resultado.innerHTML = "";
  loading.textContent = "Cargando...";

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!res.ok) {
      throw new Error("El Pokémon no existe");
    }

    const data = await res.json();

    mostrarPokemon(data);

  } catch (err) {
    error.textContent = err.message;
  } finally {
    loading.textContent = "";
  }
}

function mostrarPokemon(pokemon) {
  const tipos = pokemon.types
    .map(t => t.type.name)
    .join(", ");

  resultado.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" />
    <p><strong>Tipo:</strong> ${tipos}</p>
    <p><strong>Peso:</strong> ${pokemon.weight}</p>
    <p><strong>Altura:</strong> ${pokemon.height}</p>
  `;
}