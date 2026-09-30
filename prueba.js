const {
    getAllPokemons,
    getPokemonById,
    getPokemonsAbility,
    getPokemonType,
    getPokemonAbility
} = require("./api");

async function probarFunciones() {

    try {

        console.log("===== 1. TODOS LOS POKÉMON =====");

        const pokemons = await getAllPokemons();

        console.log("Cantidad:", pokemons.length);
        console.log("Primeros 5:", pokemons.slice(0, 5));


        console.log("\n===== 2. POKÉMON POR ID =====");

        const pokemon = await getPokemonById(25);

        console.log("Nombre:", pokemon.name);
        console.log("ID:", pokemon.id);


        console.log("\n===== 3. POKÉMON POR HABILIDAD =====");

        const habilidad = await getPokemonsAbility("static");

        console.log("Cantidad:", habilidad.length);
        console.log("Primeros 5:", habilidad.slice(0, 5));


        console.log("\n===== 4. POKÉMON POR TIPO =====");

        const tipo = await getPokemonType("fire");

        console.log("Cantidad:", tipo.length);
        console.log("Primeros 5:", tipo.slice(0, 5));


        console.log("\n===== 5. HABILIDAD DE UN POKÉMON =====");

        const habilidadPokemon = await getPokemonAbility(25, "static");

        console.log(habilidadPokemon);


    } catch (error) {

        console.error("ERROR:", error.message);

    }
}

probarFunciones();