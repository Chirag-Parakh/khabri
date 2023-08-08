import React from 'react'
import './Styles/profile.css'
import Edit from './edit'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Profile() {

  const [profileJson , setprofileJson] = useState([])

  useEffect(() => {
    const profile = localStorage.getItem('userinfo')
    setprofileJson(JSON.parse(profile))
  } , [])

  const name = profileJson?.name;
  const mail = profileJson?.mail;
  const number = profileJson?.number;
  const profilepicURL = profileJson?.profilepic;
  const [showLoginCard, setShowLoginCard] = useState(false)
  const handleShowLoginCard = () => {
    setShowLoginCard(prevState => !prevState)
  }



  return (
    <div>
      <img src={profilepicURL} alt="Login" className='header_img' onClick={handleShowLoginCard} />

      {showLoginCard ? <div className="profile">
      <div className="profile_card">
        <p className='profile_close' onClick={() => { setShowLoginCard(false) }} >
          X
        </p>

        <img src={profilepicURL} alt=" no image found" className='profile_profilepic' />
        <div className="profilecard_info">{name} </div>
        <div className="profilecard_info">{mail} </div>
        <div className="profilecard_info">{number}</div>
        <Edit />
        <button className="profilecard_delete" onClick={() => {localStorage.removeItem("userinfo")}}> Delete Info</button>
      </div> 
      </div>: null}


    </div>
  )
}
