import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
   return(
    <nav>
        <ul style={{
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: "hidden",
      backgroundColor: "#333"
    }}>
      <li style={{
        float: 'left',
      }}><Link to='/' className='menu' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}><i className="ri-home-4-fill" style={{marginRight: 5}}></i>Home</Link>
      </li>
      <li style={{
        float: 'left'
      }}><Link to='/about' className='menu' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}><i className="ri-discuss-fill" style={{marginRight: 5}}></i>About</Link>
      </li>
      <li style={{
        float: 'left'
      }}><Link to='/gallery' className='menu' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}><i className="ri-gallery-fill" style={{marginRight:5}}></i>Gallery</Link>
      </li>
      <li style={{
        float: 'left'
      }}><Link to='/contact-us' className='menu' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}><i className="ri-phone-fill" style={{marginRight: 5}}></i>Contact Us</Link>
      </li>
    </ul>
    </nav>
   )
}
export default Navbar