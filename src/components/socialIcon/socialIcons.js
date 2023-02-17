import classes from '../socialIcon/socialIcons.module.css'
import Facebook from '../../assets/images/desktop/icon-facebook.svg'
import Instagram from '../../assets/images/desktop/icon-twitter.svg'
import Pininterest from '../../assets/images/desktop/icon-pinterest.svg'
import Twitter from '../../assets/images/desktop/icon-instagram.svg'
const SocialIcons = () => {
  return (
      <div className={classes.main}>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Pininterest} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="" />
          </a>
      </div>
  )
}

export default SocialIcons;