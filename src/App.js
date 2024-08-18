
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'
import Gallery from './component/Gallery'
import ContactUs from './component/ContactUs'
import Notfound from './component/Notfound'
import 'remixicon/fonts/remixicon.css'
const App = ()=>{
 return (
  <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='*' element={<Notfound />} />
       </Routes>
  </BrowserRouter>
 
 )
}
export default App