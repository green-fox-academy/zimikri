import { Pokemon } from './Pokemon'


// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!
// Which pokemon should Ash use?

const wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

printWhichPokemonShouldAshUseAgainst(wildPokemon);

function printWhichPokemonShouldAshUseAgainst(wildPokemon: Pokemon) {
    const pokemonOfAsh: Pokemon[] = initializePokemon();
    const effectivePokemonNames: string[] = getEffectivePokemonNames(pokemonOfAsh, wildPokemon);

    if (effectivePokemonNames.length > 0) {
        console.log('I choose you:', effectivePokemonNames.join(', '));
    } else {
        console.log('I can\'t choose anyone :(');
    }
}

function getEffectivePokemonNames(pokemonOfAsh: Pokemon[], wildPokemon: Pokemon): string[] {
    let effectivePokemonNames: string[] = [];
    pokemonOfAsh.forEach((pokemon) => {
        if (pokemon.isEffectiveAgainst(wildPokemon)) {
            effectivePokemonNames.push(pokemon.name);
        }
    });

    return effectivePokemonNames; 
}

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

