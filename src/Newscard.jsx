import React from 'react'
import { BsBookmarkFill } from 'react-icons/bs';
import not_available from './assets/not_available.png'

export default function Newscard({ image, index, title, url, description, source, content }) {


    const add_to_bookmark = (news) => {
        let bookmarks = localStorage.getItem("bookmarks")
        if (bookmarks == null) {
            let articles = []
            let article = { image, index, title, url, source };
            articles.push(article)
            localStorage.setItem("bookmarks", JSON.stringify(articles))
        }
        else {
            let articles = JSON.parse(bookmarks)
            let oldarticle = articles.find((item) => item.url === url)
            if (oldarticle) {
                alert("Article already saved")
            }
            else {
                let article = { image, index, title, url, source };
                articles.push(article)
                localStorage.setItem("bookmarks", JSON.stringify(articles))
            }
        }
    }

    return (
        <div className="box">
            <div key={index} className="news_card">
                <div className="left_news_card">
                    <a href={url} target="blank" className='url'>
                        {image ? <img src={image} alt="not available" maxheight={100} width={300} /> :
                            <img src={not_available} alt="not available" maxheight={100} width={300} />
                        }
                        <p className='title'>{title}</p>
                    </a>
                <div className="middle_news_card">
                    <div>
                        <BsBookmarkFill onClick={add_to_bookmark} className="bookmark" />
                    </div>
                    <p className="source">
                        published by : {source.name}
                    </p>
                </div>
                </div>
                <div className="right_news_card">
                    <p className="description">
                        {description}
                    </p>
                    <p className="content">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
