import React from 'react';
import Noteitem from './Noteitem';

export default function Notelist(props){
    return (
        <div className="notescontainer">
            {props.notes.map( (note) => {
                return (
                <Noteitem note={note} key={note.id} user={props.user} onDelete={props.deleteNote} />
                )
            })}
        </div>
    );
}