import React, { useState } from 'react'
import './Dictionary.css'

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")

    function searchKeyword(event) {
        event.preventDefault();
        alert("I am searching...")
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