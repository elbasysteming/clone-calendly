import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.css";

export const TestApi = () => {
    const [data, setData] = useState([]);

    const getNews = () => {
        const apiKey = "67636d167d7840d0ad97162c41d6cd33";

        fetch(
            `https://newsapi.org/v2/everything?q=tesla&from=2022-11-04&sortBy=publishedAt&apiKey=${apiKey}`
        )
            .then(response => response.json())
            .then(data => setData(data));
    };

    useEffect(getNews, []);

    return data.articles ? (
        <div className="container">
            {data.articles.map((element, index) => {
                return (
                    <div key={index} className="article">
                        <h1>{element.author}</h1>
                        <div>{element.title}</div>
                        <div>{element.description}</div>
                    </div>
                );
            })}
        </div>
    ) : (
        "<h1>No hay datos</h1>"
    );
};
