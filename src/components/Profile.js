import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWev-srOmWWaf_kjYfPsZEy9WjaUfroioNR1y-HsHk42x1OWGTmQ" 
                alt="alt" 
                name="Jack"/>
            <Palette/>
        </div>
    )
}

export default Profile;
