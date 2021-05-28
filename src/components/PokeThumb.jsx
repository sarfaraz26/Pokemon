import React from 'react'
import {Link} from 'react-router-dom';

const PokeThumb = ({img, name, id}) => {
    return (
        <div className="col bg-light text-center mx-3 my-2">
            <Link to={`/pokescreen/${id}`}>
                <div className="poke-card">
                    <img src={img} className="py-2" alt={name} height="150"/>
                    <h5 className="text-center py-2">{name}</h5>
                </div>
            </Link>
        </div>
    )
}

export default PokeThumb;