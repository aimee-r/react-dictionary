import React from 'react'

export default function Results(props) {
    if (props.results) {
        return (
        <div className="Definitions">
           <h2>{props.results.word}</h2>
        </div>
        )
    } else {
        return null;
    }
}