import React, { useState } from 'react'
import { HiOutlineLogin } from 'react-icons/hi';
import user from './assets/user.jpeg'

export default function Logincard() {

  const [profilepicurl, setProfilepicurl] = useState(null)
  const [showlogin, setShowlogin] = useState(false)
  const [formdata, setFormdata] = useState({
    name: '',
    mail: '',
    number: '',
    profilepic: '',
  });

  const handleprofilepic = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log(file)
      setProfilepicurl(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        try {
          setFormdata((prevData) => ({
            ...prevData,
            profilepic: base64,
          }))
          console.log(base64)
        } catch (error) {
          alert("LocalStorage quota exceeded:", error.message);
        }
      }
      reader.readAsDataURL(file);
    }
  }

  const handleinputchanges = (event) => {
    const { name, value } = event.target
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleformsubmit = (e) => {
    // e.preventDefault();
    const formdataJSON = JSON.stringify(formdata);
    localStorage.setItem("userinfo", formdataJSON);
    setShowlogin(false)
    console.log(formdata);
  }
  return (
    <div>
      <div className='react_icons' onClick={() => { setShowlogin(true) }}>
        <p className="login_heading">Log in</p>
        <HiOutlineLogin />
      </div>
      {showlogin ? <div className="loginpage">
        <div className="logincard">
          <p className='login_close' onClick={() => { setShowlogin(false) }} >
            X
          </p>
          <h1>Save your Info</h1>
          <form action="" className='login_form' onSubmit={handleformsubmit} >
            <div className="login_image">
              <label htmlFor="input-file" className='image_label'>

                {profilepicurl ?
                  (<img src={profilepicurl} alt="not available" className='user_image' id='profile-pic' />)
                  : (<img src={user} alt="not available" className='user_image' id='profile-pic' />)
                }
              </label>
            </div>
            <input
              type="text"
              placeholder='Enter your name'
              className='login_input'
              name='name'
              value={formdata.name}
              onChange={handleinputchanges}
            />
            <input
              type="email"
              placeholder='Enter your mail id'
              className='login_input'
              name='mail'
              value={formdata.mail}
              onChange={handleinputchanges}
            />
            <input
              type="digit"
              placeholder='Enter your phone number'
              className='login_input'
              name='number'
              value={formdata.number}
              onChange={handleinputchanges}
            />

            <input
              type="file"
              accept='image/png , image/jpeg , image/jpg'
              id='input-file'
              name='profilepic'
              onChange={handleprofilepic}
            />

            <input type="submit" value="Save" className='signin_button' />
          </form>
        </div>
      </div>
        : null}

    </div>
  )
}
