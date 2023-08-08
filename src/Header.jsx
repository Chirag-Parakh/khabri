import React, { useState } from 'react';
import Profile from './profile';
import Logincard from './Logincard';
import Bookmarks from './Bookmarks';

function Header({ onsearchChange }) {


  const handleSearch = (topic) => {
    onsearchChange(topic);
  }
  // const [showLoginCard, setShowLoginCard] = useState(false)
  // const handleShowLoginCard = () => {
  //   setShowLoginCard(prevState => !prevState)
  // }

  
  const profile = localStorage.getItem('userinfo')
  const profileJson = profile ? JSON.parse(profile) : null;
  const profilepicURL = profileJson ? profileJson.profilepic : null;


  const [showMenu , setshowMenu] = useState(false)

  const tooglemenu = ()=> {
    setshowMenu(!showMenu)
  }

  return (
    <>
      <div className='header'>
        <div className="header_logo">
          KHABRI
        </div>
        <div className="tooglelogo" onClick={tooglemenu}>
          <div className={`bar ${showMenu ? 'change' : ''}`} ></div>
          <div className={`bar ${showMenu ? 'change' : ''}`} ></div>
          <div className={`bar ${showMenu ? 'change' : ''}`} ></div>
        </div>
      <div className={`header_topics ${showMenu ? 'change' : ''}`}>
        <ul className={`topics_list ${showMenu ? 'change' : ''}`}>
          <h1 className='categories'>Categories:</h1>
          <li className="topic_items" onClick={() => handleSearch("world")}> World</li>
          <li className="topic_items" onClick={() => handleSearch("india")}> India</li>
          <li className="topic_items" onClick={() => handleSearch("ai")}>  AI</li>
          <li className="topic_items" onClick={() => handleSearch("jobs")}> Jobs</li>
          <li className="topic_items" onClick={() => handleSearch("science")}> Science</li>
          <li className="topic_items" onClick={() => handleSearch("movies")}> Movies</li>
          <li className="topic_items" onClick={() => handleSearch("nasa")}> Nasa</li>
          <li className="topic_items" onClick={() => handleSearch("education")}> Education</li>
          <li className="topic_items" onClick={() => handleSearch("politics")}> Politics</li>
          <li className="topic_items" onClick={() => handleSearch("sports")}> Sports</li>
          <li className="topic_items" onClick={() => handleSearch("sports")}> <Bookmarks /></li>
        </ul>
        <div className="header_icon">
            {profilepicURL ?
              <Profile  /> 
              :
              <Logincard />
}
        </div>
      </div>
    </div>
    </>
  );

}

export default Header;

export const search = "world";
export const setSearch = () => { };

