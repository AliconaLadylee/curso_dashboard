import { SimplePokemon } from "@/app/pokemons/interfaces";
import PokemonCard from "./PokemonCard";

export default function PokemonsGrid({ pokemons }: { pokemons: SimplePokemon[] }) {
    return (
        <div className="flex flex-wrap  gap-10 items-center justify-center">
            {
                pokemons.map((pokemon, index) => (
                  <PokemonCard key={index} pokemon={pokemon} />
                ))
            }
        </div>
    )
}