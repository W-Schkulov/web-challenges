import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  const handleNextPage = () => {
    if (next) {
      setOffset(offset + 20);
    }
  };
  const handlePreviousPage = () => {
    if (previous) {
      setOffset(offset - 20);
    }
  };

  return (
    <main>
      <button type="button" onClick={handlePreviousPage} disabled={!previous}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage} disabled={!next}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
