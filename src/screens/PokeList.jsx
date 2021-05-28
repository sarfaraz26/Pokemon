import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import PokeThumb from '../components/PokeThumb'; 

const PokeList = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [input, setInput] = useState("");

    useEffect(()=>{
        fetch('/data/data.json')
        .then(res=>res.json())
        .then(data =>{
            const pokemons = data.pokemon;
            setPokemonData([...pokemons]);
        })
    },[]);

    const filteredData = pokemonData.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(input.toLowerCase())
    })


    return (
        <>
            <Header />
            <div className="container text-center">
                <input type="text" name="text" value={input} id="text" placeholder="Pokemon name" onChange={(e)=>{setInput(e.target.value)}} />
            </div>

            <div className="container my-3">
                <div className="row">
                    {filteredData.map((pokemon, index)=>{
                        const {id, name, img} = pokemon
                        return(
                            <PokeThumb key={id} name={name} img={img} id={id} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PokeList;