import React from 'react';
import FallbackComponent from './FallbackComponent';

export default function ShowNotes(Component,condition,fallback){
    if(condition){
        return class extends React.Component {
            render(){
                return Component;
            }
        }
    }
    else{
        return class extends React.Component {
            render(){
                return <FallbackComponent fallback={fallback} />;
            }
        }
    }
}