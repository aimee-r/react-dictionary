import React from 'react'

export default function Definitions(props) {
    if (props.results) {
        return 
        <div className="Definitions">
            Hey I am the result
        </div>
    } else {
        return null;
    }
}