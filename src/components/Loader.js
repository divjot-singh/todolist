import React from 'react';
import { connect } from 'react-redux';

function Loader(props){
    if(props.loading){
        return (
            <div className="popupcontainer"> 
                <div className="loader"></div>
            </div>
        )
    }
    else{
        return null
    }
}
function mapStatetoProps(state){
    return {
        loading:state.notereducer.loading
    }
}
export default connect(mapStatetoProps)(Loader);