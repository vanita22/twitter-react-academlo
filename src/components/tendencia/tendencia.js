import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class Tendencia extends React.Component{
    render(){
        return (
            <div className="tend-container">
                <div className="tend-row">
                    <div className="c1">
                        <h6>{this.props.category}</h6>
                        <div className="tend-icon"><FontAwesomeIcon icon={faEllipsisH} /></div>                        
                    </div>
                    <div className="c2">
                        <h5>{this.props.title}</h5>
                        <h6>{this.props.noTweets}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tendencia;

// ellipsis-h-alt