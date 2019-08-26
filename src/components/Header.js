import React from 'react';
import Avatar from './Avatar';

export default function Header(props){
    console.log(props.user);
    return (
        <header>To Do List <Avatar user={props.user} signOutHandler={props.signOutHandler} /></header>
    );
}