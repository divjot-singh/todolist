import React from 'react';

export default function FallbackComponent(props){
    return (
        <div className="fallback">
            {props.fallback}
        </div>
    )
}