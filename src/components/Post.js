import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className="post">
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWev-srOmWWaf_kjYfPsZEy9WjaUfroioNR1y-HsHk42x1OWGTmQ" alt="alt" name="Jack" min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    Some account
                </div>
                <div className="post__descr">
                    Lorem ipsum, dolor sit amest consectetur adipisicing elit. Modi aspernatur nesciunt fugiat error reprehenderit animi quia consectetur minus debitis sit quis fugit, atque, consequuntur deleniti temporibus architecto non ad sunt.
                </div>
            </div>
        )
    }
}