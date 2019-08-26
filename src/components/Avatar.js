import React from 'react';
export default function Avatar(props){
    const [showMenu,setShowMenu] = React.useState(false);
    return (<span className="avatarComponent" onClick={() => setShowMenu(!showMenu)}>
        {props.user}
        {showMenu && <ul>
            <li onClick={props.signOutHandler}>Logout</li>
        </ul>}
    </span>);
}