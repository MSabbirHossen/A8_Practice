import React from 'react';

const User = ({User}) => {
    console.log(User);
    return (
        <div>
            single user data.
            {User.name}
        </div>
    );
};

export default User;