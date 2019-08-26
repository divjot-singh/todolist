import React from 'react';
import Note from './Note';

export default function NoteEditor (props){
    console.log(props);
    return (
        <Note notetitle={props.location.state.note.title} notecontent={props.location.state.note.content} noteid={props.match.params.id}/>
    )
}