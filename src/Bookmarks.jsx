import React from 'react'
import './Styles/bookmarks.css'
import Bookmarkscard from './Bookmarkscard'
import { useState  , useEffect} from 'react'

export default function Bookmarks() {
  
  const [showBookmark, setShowBookmark] = useState(false)
  const [Bookmarks , setBookmarks] = useState([])


  useEffect(() => {
    const bookmarksFromLocalStorage = JSON.parse(localStorage.getItem('bookmarks')) || [];
    console.log(bookmarksFromLocalStorage)
    setBookmarks(bookmarksFromLocalStorage);
  }, []);

  const handleRemoveBookmark = (index) => {
    const updatedBookmarks = [...Bookmarks];
    console.log("deleting")
    updatedBookmarks.splice(index, 1);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <div className="bookmarks_tag" onClick={() => { setShowBookmark(true) }}>Bookmarks</div>
      {showBookmark ? <div className="bookmarks">
        <div className="bookmarks_page">
        <div className="scrollable-container">
          <h1 className='bookmarks_heading'>Bookmarks</h1>
          <div className="bookmarks_close" onClick={() => { setShowBookmark(false) }}>X</div>
         <div className="bookmarks_main">
         {Bookmarks?.map((i , index) => (
            <Bookmarkscard
              image={i.image}
              key={index}
              source={i.source}
              title={i.title}
              url={i.url}
              handleremoveBookmark = {() => handleRemoveBookmark(index)}
            />
          ))
          }
         </div>
         </div>
          </div>
        </div>
        : null

      }

    </div>
  )
}
