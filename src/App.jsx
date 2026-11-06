import React from 'react'

const App = () => {
  return (
    <nav className="container">
      <div className="logo">
        <a href="https://www.awwwards.com/sites/viv">
          <svg width="30" height="16" viewBox="0 0 30 16">
            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z" />
          </svg>
        </a>
      </div>

      <ul>
        <li className="exp">
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z" />
          </svg>
        </li>
        <li>Directory</li>
        <li>Academy</li>
        <li>Jobs</li>
        <li>Market</li>
      </ul>

      <div className="search">
        <svg className="serch_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
        </svg>
        <input type="text" placeholder="Search by Inspiration" />
      </div>

      <div className="login">
        <a href="#"><button className="same">Log in</button></a>
        <a href="#"><button className="same">Sign up</button></a>
        <a href="#"><button className="btn">Be Pro</button></a>
        <a href="#"><button className="btn2">Submeat Website</button></a>
      </div>
    </nav>
  )
}

export default App