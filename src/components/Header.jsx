import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Link to="/">
            <div className="container my-3 text-center">
                <img src="/img/pokeball.png" alt="PokeBall" height="70"/>
                <img src="/img/poketext.jpg" alt="PokeText" height="70"/>
            </div>
        </Link>
    )
}

export default Header;