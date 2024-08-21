import {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";



const Nav = () => {
  const [inputValue, setInput] = useState('');

  return (
    <>
      <nav className="nav">
      <a href="" className="site-title">CellphoneB</a>
      <div className='search-box'>
        <CiSearch className='button'/>
        <input  type='text' value={inputValue} placeholder='Enter The Product Name' onChange={e => setInput(e.target.value)} />
      </div>
      <ul>
          <li >
            <a style={{display:"none"}}>Hi Bin</a>
          </li>
          <li>
            <FiShoppingCart size={35} className='cartIcon'/>
          </li>
      </ul>
     </nav>
     <div className='header'>
      <div className='container'>
        <div className='nav-below'>
            <ul>
              <li>
                <Link to="/" className='link'>Home</Link>
              </li>
              <li>
                <Link to="/Categories" className='link'>Category</Link>
              </li>
              <li>
                <Link to="/" className='link'>Contact</Link>
              </li>
            </ul>
            <div className='auth'>
              <CiLogin size={35} className='icon'/>
              <CiLogout size={35} className='icon'/>
            </div>
        </div>
      </div>
        
     </div>
    </>
   
  )
}

export default Nav