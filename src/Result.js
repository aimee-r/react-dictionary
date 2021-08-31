import React from 'react'
import Definitions from './Definitions';

export default function Results(props) {
    if (props.results) {
        return (
        <div className="Results">
           <h2 style={{ textTransform: 'uppercase'}}>{props.results.word}</h2>
               {props.results.meanings.map(function(meaning, index) {
                   return (
                   <div key={index}>
                   <Definitions meaning={meaning} />
                   </div>
                   );
               })}
        </div>
        )
    } else {
        return null;
    }
}