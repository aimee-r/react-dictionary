import React from 'react'

export default function Synonym(props) {
    if (props.synonyms) {
        
        return (
            <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
            return (
                <li style={{textAlign: 'left'}}>
                <div key={index}>
                    {synonym}
                </div>
                 </li>
            );
            })}
        </ul>
        )
    } else {
    return null;
}
}