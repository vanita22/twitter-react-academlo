import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    return (
        <div>
            <div className="s-buscador">
                <input placeholder=' Buscar en twitter'></input>
            </div>
            <div className="s-row">                
                <div className="s-title">
                    <h3>Qué está pasando</h3>
                </div>
                <div className="search">
                    <div className="s-search">
                        <div className="s-tend">
                            <h5>Elecciones en EEUU . </h5>
                            <p> En Directo</p>
                        </div>                        
                        <p>Elecciones EE.UU.: votantes esperan resultados en estados claves mientras continúa el conteo de votos.</p>
                        <div className="s-footer">
                            <h5>Tendencias sobre </h5>
                            <h6>Biden -264, Trump 214</h6>
                        </div>                        
                    </div>
                    <div className="s-imagen">
                        <img src={props.newProfileUrl}  alt="profile" />
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default SearchBar;