import React from 'react'
import Synonyms from './Synonyms'

export default function Definitions(props) {
    return (
        <div className="Definitions">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index)
            { return (
            <div key={index}>
                <p>
                    {index + 1}. {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                </p>
                </div>
                );
            })}
        </div>
    )
}