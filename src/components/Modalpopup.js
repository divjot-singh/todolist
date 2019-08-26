import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/homeactioncreater';
import { withRouter } from 'react-router-dom';

function Modalpopup (props){
    const closeCurrentModal = () =>{
        props.closeModal();
        props.history.push('/');
    }
    return(
        <div className="popupcontainer">
            <div className="popupcontent">
                <p><i className="fa fa-right"></i>{props.text ? props.text : "Your note has been saved" }</p>
                {props.text && <button className="btn btn-primary" onClick={ () => {props.closeModal(); props.onRedirect()}}>Yes</button>}
                {props.text && <button className="btn btn-danger" onClick={() => props.closeModal()}>No</button>}
                {!props.text && <button className="btn btn-primary" onClick={closeCurrentModal}>OK</button>}
            </div>
        </div>
    );

}

function mapDispachtoProps(dispatch){
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(null,mapDispachtoProps)(Modalpopup));