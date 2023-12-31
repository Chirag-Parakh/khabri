import { useEffect, useState } from "react";
import React from "react";
import Newscard from "./Newscard";
import Header from "./Header";
import './Styles/app.css'
import './Styles/login.css'
import './Styles/header.css'

export default function App() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("news");
    const handlesearchChange = (topic) => {
        setSearch(topic);
    }

    useEffect(() => {
        const fetchdata = async () => {
            try {
                // const api_data = await fetch(`https://vercel-cors-anywhere.vercel.app/api/?url=https://newsapi.org/v2/top-headlines?q=${search}&apiKey=bee6b861d1034e998290d0edd7bf7a5b`)
                const mydata = await fetch ('https://cors-silk-five.vercel.app/' , {
                    method :"POST",
                    body : {
                        'my-url':'https://newsapi.org/v2/top-headlines?q=${search}&apiKey=bee6b861d1034e998290d0edd7bf7a5b'
                    }
                })
                const api_json = await mydata.json();
                setData(api_json.articles);
                console.log(api_json);
            }
            catch {
                console.log("could not fetch data")
            }
        }
        fetchdata();
    }, [search])

    return (
        <div className="App">
            <Header
                onsearchChange={handlesearchChange}
            />
            <div className="margin"></div>
            {data?.map((i, index) => (
                <Newscard
                    search={search}
                    index={index}
                    image={i.urlToImage}
                    title={i.title}
                    url={i.url}
                    description={i.description}
                    source={i.source}
                    content={i.content}
                />
            ))}
        </div>
    );
}


