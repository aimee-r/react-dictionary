import React, { useState } from 'react';
import axios from "axios";
import './Dictionary.css'

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function searchKeyword(event) {
        event.preventDefault();
        alert("I am searching...")

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

        <div className="Header">
            <h3>{keyword}</h3>
        </div>
        </div>
    )

}