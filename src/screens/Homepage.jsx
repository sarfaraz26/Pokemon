import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => {
    return(
        <div className="container text-center mt-5 mb-3">
                <img src="/img/pokeBall.png" alt="PokeBall" height="250"/>
                <img src="/img/poketext.jpg" alt="PokeText" height="200"/>
            <div>
                <Link className="btn btn-light" id="view-pokedex" to="/pokelist">
                    <img src="/img/pokedex.png" alt="PokeDex" height="20" className="mr-2"/>
                    View PokeDex
                </Link>
            </div>
        </div>
    )
}

export default Homepage;