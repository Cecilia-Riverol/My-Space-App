import React, { useState, useEffect } from 'react';
import './Apod.css'; 

const App = () => {
    const [apod, setApod] = useState({});

    useEffect(() => {
        const req = new XMLHttpRequest();
        const url = "https://api.nasa.gov/planetary/apod?api_key=";
        const api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

        req.open("GET", url + api_key);
        req.send();

        req.addEventListener("load", () => {
            if(req.status === 200 && req.readyState === 4){
                const response = JSON.parse(req.responseText);
                setApod(response);
            }
        });
    }, []);

    return (
        <div className="container">
            <h1>NASA Astronomy Picture of the Day</h1>
            <h2 className='ApodText'>{apod.title}</h2>
            <h3 className='ApodText'>{apod.date}</h3>
            <img src={apod.hdurl} alt={apod.title} className="APODImg" />
            <p className='ApodText'>{apod.explanation}</p>
        </div>
    );
};

export default App;
