import React from 'react';

const Card = ({user}) => {
    return (
        <div className="card">
            <div className='title'>
                TITLE:- {user.username}
            </div>
            <div className='name'>
                NAME:- {user.name}
            </div>
        </div>
    )
};

export default Card;