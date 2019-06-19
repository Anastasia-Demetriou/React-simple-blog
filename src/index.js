import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import faker from 'faker';
import ApprovalCard from './ApprovalCard.js';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 04:44 PM" 
                blogComment="Cool blog!!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 02:00 AM" 
                blogComment="I like your blog"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesteday at 6:00 PM"
                blogComment="Very interesting blog"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    );
}; 

ReactDOM.render(<App />, document.querySelector('#root')) 