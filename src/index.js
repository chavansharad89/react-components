import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
     <div className="ui container comments">
        <CommentDetail 
            author="Sam" 
            timeAgo="Today 6:15PM" 
            comment="Wooo..." 
            image={faker.image.avatar()}
        />
        <CommentDetail 
            author="Alex" 
            timeAgo="Today 8:15PM" 
            comment="Nice Post" 
            image={faker.image.avatar()}
        />
        <CommentDetail 
            author="John" 
            timeAgo="Today 10:00PM" 
            comment="Thanks a lot!" 
            image={faker.image.avatar()}
        />
     </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)