import {React,useState} from 'react'
import "../../css/navBar.css";
function NavBar(props){
    const setSearchText = props.setSearchText;
    const [text, setText] = useState("");
    const handleChange = (event)=>{
         setText(event.target.value);
    }
    const update = ()=>{
        setSearchText(text);
    }
    return(
        <nav>
        <nav className="navbar">
            <div className="home">
                <a href="https://www.udemy.com"><img src="/images/Udemy_logo.png" alt="udemy_logo"/></a>
            </div>
            <div>
                <div><button><a href="example.com">Categories</a></button></div>
            </div>
            <div className="sr">
            <div className="sr">
                <input className="sr srbox" id="myInput" type="text" placeholder="Search for anything" value = {text} onChange={handleChange}/>
                <button id = "src-btn" className="search-icon fa-solid fa-magnifying-glass" type="submit" onClick={update}></button>
            </div>
            </div>
            <div className="bsns">
                <div><button><a href="example.com">Udemy Business</a></button></div>
            </div>
            <div className="teach">
                <div><button><a href="example.com">Teach on Udemy</a></button></div>
            </div>
            <div className="cart">
                <button className="fa-solid fa-cart-shopping"></button>
            </div>
            <div className="login">
                <div>
                    <a href="https://www.udemy.com/join/login-popup">Log in</a>
                </div>
            </div>
            <div className="signup">
                <div><a href="https://www.udemy.com/join/signup-popup">Sign up</a></div>
            </div>
            <div className="langbtn">
                <button>
                    <i className="fa-solid fa-globe"></i>
                </button>
            </div>
        </nav>
         <nav className="mininav navbar">
         <div className="dropdown  h-100%">
             <div className="nav-link  toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                 <button><img src="/images/toggle.png" alt="menu"/></button>
             </div>
             <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="example.com">Action</a></li>
                 <li><a className="dropdown-item" href="example.com">Another action</a></li>
                 <li><a className="dropdown-item" href="example.com">Something else here</a></li>
                 <li><a className="dropdown-item" href="example.com">Separated link</a></li>
             </ul>
         </div>
         <div className="minihome">
             <a href="https://www.udemy.com"><img src="/images/Udemy_logo.png" alt="Udemy Logo" /></a>
         </div>
     </nav>
     </nav>
    );
}

export default NavBar;