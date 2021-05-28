import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import {useParams} from 'react-router-dom';

const PokeScreen = () => {
    const {id} = useParams();
    const [caughtPokemon, setCaughtPokemon] = useState({});

    useEffect(()=>{
        fetch('/data/data.json')
        .then(res=>res.json())
        .then(data =>{
            setCaughtPokemon(data.pokemon[id-1]);
        })
    },[])

    return(
        <>
            <Header />
            <div className="container text-center">
                <div className="row bg-light mx-2 py-3 poke-container">
                    <div className="col">
                        <img src={caughtPokemon.img} height="300" alt="Bulbasaur" />
                    </div>
                    <div className="col text-left pt-4">
                        <h2>Name : <span className="badge badge-pill badge-secondary">{caughtPokemon.name}</span></h2>
                        <h2>Type : <span className="badge badge-pill badge-success">
                                     { caughtPokemon.type }
                                   </span>
                        </h2>
                        <h2>Height : <span className="badge badge-pill badge-warning">{caughtPokemon.height}</span></h2>
                        <h2>Weight : <span className="badge badge-pill badge-info">{caughtPokemon.weight}</span></h2>
                        <h2>Spawns : <span className="badge badge-pill badge-danger">{caughtPokemon.avg_spawns}</span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokeScreen;