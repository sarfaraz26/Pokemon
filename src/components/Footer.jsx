import React from 'react'


const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <footer className="my-3">
            <div className="container text-center text-light">
                <small>
                    &copy; PoKeMoN {year}   
                </small>
            </div>
        </footer>
    )
}

export default Footer;