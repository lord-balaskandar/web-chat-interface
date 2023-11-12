import profilePic from './../../pp.jpg'
import './header.css'

function Header() {
return <div className='header'>
      <div className="backButton">{" <"}</div>
          <div className='details'>
          <img className="pp" src={profilePic}/>

<div className = "recipientName">
  Thanushen
</div>
          </div>
          <div className="backButton">{"..."}</div>

      </div>
}

export default Header