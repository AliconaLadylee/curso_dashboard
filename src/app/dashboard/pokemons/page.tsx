import { PokemonsResponse, SimplePokemon } from "@/app/pokemons/interfaces";
import PokemonsGrid from "../../pokemons/components/PokemonsGrid";



const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((response) => response.json())

    const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
        id: pokemon.url.split("/").at(-2) ?? "",
        name: pokemon.name,
    }));

    return pokemons;
}


export default async function PokemosPage() {

    const pokemons = await getPokemons(500);

    return (
        <div className="flex flex-col ">
            <h1 className="text-3xl ">Listado de Pokemons estaticos</h1>
            <PokemonsGrid pokemons={pokemons} />
        </div>
    );
}