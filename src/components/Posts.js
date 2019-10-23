import React, {Component} from 'react';
import Post from "./Post"

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg" alt="second"/>
                <Post src="https://www.gameawards.ru/images/articles/article_w830_5ad11cb656eda0min.jpg" alt="inst"/>
                
            </div>
        )
    }
}