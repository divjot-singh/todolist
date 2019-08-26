import React from 'react';
import {Link} from 'react-router-dom';

export default function Noteitem(props){
    const [showmenu, setShowmenu] = React.useState(false);
    return (
        <div className="noteitem">
            <span onClick={() => setShowmenu(!showmenu)}><i className={showmenu? "fa fa-times" : "fa fa-bars"}></i>
            {showmenu && <ul>
                    <li><Link to={{
                            pathname:`/noteeditor/${props.note.id}`,
                            state:{note:props.note}
                        }}><i className="fa fa-edit"></i>Edit</Link></li>
                    <li onClick={() => props.onDelete(props.note.id,props.user)}><i className="fa fa-trash"></i>Delete</li>
                </ul>
            }
            </span>
            <h1>{props.note.title}</h1>
            <p>{props.note.id}</p>
            <p>{props.note.content}</p> 
        </div>
    );
}