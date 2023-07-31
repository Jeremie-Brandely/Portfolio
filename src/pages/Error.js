import React from 'react';
import "../style/Error.css";

const Error = () => {
    return (
        <div className='error'>
            <div className='infos-error'>
                <h1 className='info-error-title'> 404</h1>
                <p className='info-error-contenu'> Oups! La page que vous recherchez n'existe pas.</p>
            </div>
            <a className='return' href="/"> Retourner sur la page d'accueil</a>
        </div>
    );
};

export default Error;