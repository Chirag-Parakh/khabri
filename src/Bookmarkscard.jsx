import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import not_available from './assets/not_available.png'


export default function Bookmarkscard({image , source , title , url , handleremoveBookmark}) {


  return (
    <div>
        <div className="bookmarks_card">
            <div className="bookamrks_delete"><RiDeleteBin5Line onClick={handleremoveBookmark}/></div>
        <a href={url} target="blank" className='url'>
            <div className="bookmarks_image">
              {image ? 
              <img src={image} alt="not available" width="270px"/> 
              :
              <img src={not_available} alt="not available" width="270px"/> 
              }
            </div>
        </a>
            <div className="bookmarks_title">{title}</div>
            <div className="bookmarks_source">Source: {source.name}</div>
        </div>
    </div>
  )
}
