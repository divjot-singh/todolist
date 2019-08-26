import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Note from './components/Note';
import NoteEditor from './components/NoteEditor';
import Home from './components/Home';
import Loader from './components/Loader';
import Header from './components/Header';
import Login from './components/login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import {providers,firebaseAppAuth} from './firebase';
import {connect} from 'react-redux';
import {setUser} from './actions/appActionCreater';





function App(props) {
  const {user, signOut, signInWithGoogle,} = props;
  if(user !== undefined && user !== null){
    props.setUser(user.email.split(/[\[\].#$]/).join(""));
  }
  const signIn = () => {
    signInWithGoogle().then(function(userobj){
      if(userobj){
      props.setUser(userobj.user.email.split(/[\[\].#$]/).join(""));
      }
    })
  }
  const signOutHandler = () => {
    signOut().then(function(userObj){
      props.setUser("");
    });
  }
  return (
    <React.Fragment>
      {props.currentUser && user && 
      <React.Fragment>
        <Header signOutHandler={signOutHandler} user={user.displayName.split(" ").reduce((str,elem) => str+=elem.charAt(0),"") } />
        <BrowserRouter>
          <Route path="/" exact component={Home}  />
          <Route path="/note" component={Note} />
          <Route path="/noteeditor/:id" component={NoteEditor} />
          <Route path="/abcd" exact component={Home} />
        </BrowserRouter>
      </React.Fragment>
      }
      {!props.currentUser && <Login signIn={signIn} signOut={signOutHandler} />}
    <Loader />
    </React.Fragment>
  );
}
function mapStatetoProps(state){
  return {
    currentUser:state.appReducer.currentuser
  }
}
function mapDispatchToProps(dispatch){
  return {
    setUser: (user) => {dispatch(setUser(user))}
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App));
