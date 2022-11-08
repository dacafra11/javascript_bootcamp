pokemon = [
    {
        nombre: "pikachu", 
        tipodepokemon:"fuego"
    },
    {
        nombre: "bulbasur", 
        tipodepokemon:"fuego"
    },
    {
        nombre: "gato", 
        tipodepokemon:"tierra"
    }
]
pokemon.some(pokemon=> pokemon.tipodepokemon ==="fuego")
    console.log("Es un pokemon de fuego")

