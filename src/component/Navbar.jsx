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
      }}><Link to='/' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}>Home</Link>
      </li>
      <li style={{
        float: 'left'
      }}><Link to='/about' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}>About</Link>
      </li>
      <li style={{
        float: 'left'
      }}><Link to='/gallery' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}>Gallery</Link>
      </li>
      <li style={{
        float: 'left'
      }}><Link to='/contact-us' style={{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      }}>Contact Us</Link>
      </li>
    </ul>
    </nav>
   )
}
export default Navbar