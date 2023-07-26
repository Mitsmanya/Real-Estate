import { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className='h-wrapper'>
      <div className="h-container flexCenter paddings innerWidth">
        <img src='https://i.tracxn.com/logo/company/Selection_999_628__91e87047-b098-4c64-8fb0-5dccafd9beae.png?height=120&width=120' alt='logo' />

      <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
      <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
        <a href="">Residencies</a>
        <a href="">Our Value</a>
        <a href="">Contact Us</a>
        <a href="">Get Started</a>
        <button className='button'>
          <a href="">Contact</a>
        </button>
      </div>
      </OutsideClickHandler>
      <div className="menu-icon" onClick={() => setMenuOpened((prev) =>(!prev))}>
        <BiMenuAltRight size={30} />
      </div>   
      </div>
    </section>
  )
}

export default Header