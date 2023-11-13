import profilePic from './../../pp.jpg'
import './header.css'

function Header() {
return <div className="headerContainer">  <div className='header'>
      <button className="backButton">{" <"}</button>
          <div className='details'>
          <img className="pp" src={profilePic}/>

<div className = "recipientName">
  Thanushen
</div>
          </div>
          <button className="backButton">{"..."}</button>

      </div>      </div>

}

export default Header