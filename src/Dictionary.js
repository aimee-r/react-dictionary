import React, { useState } from 'react';
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import './Dictionary.css'

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);
    let [photos, setPhoto] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

     function handlePexelsResponse(response) {
        setPhoto(response.data.photos);
    }

    function searchKeyword(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        
        let pexelsApiKey = "563492ad6f91700001000001806f9bed4be043d2b4e98eb06e907ada";
        
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};

        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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

        <Photos photos={photos} />

        </div>
    )

}