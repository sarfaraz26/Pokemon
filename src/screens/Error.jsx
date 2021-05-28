import React from 'react'
import Header from '../components/Header';

const Error = () => {
    return(
        <>
            <Header />
            <div className="container text-center text-light">
                <img src="/img/duck.png" alt="Psiduck" height="250" />  
                <h1>Error 404 !!</h1>
                <h4>Page Not found</h4>
                <br />
            </div>
        </>
    )
}

export default Error;