import React from 'react';
import {Link} from 'react-router-dom';
import {saveNoteinFileStorage} from '../actions/noteactioncreater.js'
import {showModal} from '../actions/homeactioncreater.js'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modalpopup from './Modalpopup';

 function Note (props)  {
    const [note,setNote] = React.useState({title:props.notetitle || "",content:props.notecontent || ""});
    const checkData = (e) =>{
        if(note.title !== "" || note.content !== ""){
            e.preventDefault();
            props.showModal("confirm-dialog")
        }else{
            props.history.goBack();
        }
    };
    const onChangeTitle= (e) =>{
        setNote({...note,title:e.target.value});
    }
    const onChangeContent= (e) =>{
        setNote({...note,content:e.target.value});
    }
    const saveData = (e) => {
        if(props.noteid){
            note.id=props.noteid;
        }
        props.saveNote(note,props.dbRef);
        //this.history.pushState(null,'/');
        e.preventDefault();
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="form-group" onSubmit={(e) => {e.preventDefault()}}>
                        <div className="notecontrols">
                            <Link to="/" onClick={(e) => checkData(e)}><button className="back"><i className="fa fa-arrow-left"></i></button></Link>
                            <button className="save" onClick={(e) => saveData(e,props.dbRef)}><i className="fa fa-check"></i></button>
                        </div>
                        <input type="text" id="notetitle" className="form-control note-input" name="title" placeholder="Title" onChange={(e) => onChangeTitle(e)} value={note.title}></input>
                        <textarea id="notecontent" className="form-control note-input" name="content" placeholder="Content" value={note.content} onChange={(e) => onChangeContent(e)}></textarea>
                    </form>
                </div>
            </div>
            {props.showPopup && props.popuptype === "confirm-dialog" && <Modalpopup text="Your data may be lost. Do you wish to continue?" onRedirect={() => {props.history.goBack();}} />}
            {props.showPopup && props.popuptype === 'popup' && <Modalpopup />}
        </div>
    )
}

function mapStatetoProps(state){
    return {
        showPopup:state.notereducer.showPopup,
        popuptype:state.notereducer.popuptype,
        dbRef:state.appReducer.databaseRef
    }
}
function mapDispatchtoProps(dispatch){
    return {
        saveNote:(note,dbRef) => {dispatch(saveNoteinFileStorage(note,dbRef))},
        showModal:(type) => {dispatch(showModal(type))}
    }
    
}

export default withRouter(connect(mapStatetoProps,mapDispatchtoProps)(Note));