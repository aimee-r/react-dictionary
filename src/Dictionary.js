import React, { useState } from 'react';
import axios from "axios";
import Result from "./Result";
import './Dictionary.css'

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function searchKeyword(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function changeKeyword(event) {
    setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={searchKeyword}>
            <input type="search" onChange={changeKeyword}/>
            <button>Search</button>
        </form>

        <div className="Result">
            <Result results={result}/>
        </div>

        </div>
    )

}