import React from 'react';
import Modalpopup from './Modalpopup';
import {connect} from 'react-redux';
import {loadNotes} from '../actions/homeactioncreater';
import {deleteNote} from '../actions/noteactioncreater';
import ShowNotes from './Shownotes';
import Notelist from './Notelist';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.dbRef !== "")
        this.props.loadNotes(this.props.dbRef);
    }
    render(){
        const NoteListComponent = ShowNotes(<Notelist notes={this.props.notes} deleteNote={this.props.deleteNote} user={this.props.user} />,this.props.notes.length > 0,"There are no notes right now. Please add a note.");
        return (
            <React.Fragment>
                <div className="container">
                        <NoteListComponent />
                        {this.props.showPopup && <Modalpopup />}
                        <Link to="/note"><span className="addNote"><i className="fa fa-plus"></i></span></Link>

                </div>
            </React.Fragment>
        )
    }
}

function mapStatetoProps(state){
    return {
        notes:state.notereducer.notes,
        showPopup:state.notereducer.showPopup,
        dbRef:state.appReducer.databaseRef
    }
}
function mapDispatchtoProps(dispatch){
    return {
        loadNotes: (dbRef) => dispatch(loadNotes(dbRef)),
        deleteNote: (id,user) => dispatch(deleteNote(id,user))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Home)