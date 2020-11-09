import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

class Tweet extends React.Component{
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h5>{this.props.username}</h5>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row">
                    <div className="icon-tweet">
                        <div className="c1">
                            <FontAwesomeIcon icon={faComment} />
                            <p>{this.props.comments}</p>
                        </div>
                        <div className="c2">
                            <FontAwesomeIcon icon={faRetweet} />
                            <p>{this.props.retweets}</p>
                        </div>
                        <div className="c3">
                            <FontAwesomeIcon icon={faHeart} />
                            <p>{this.props.likes}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.