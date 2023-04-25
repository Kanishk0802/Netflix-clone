import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = ()=>{
    if(window.scrollY>100)
      handleShow(true);
    else
      handleShow(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return ()=> window.removeEventListener("scroll", transitionNavBar)
  }, []); 
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={()=>{navigate("/")}}
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt="Netflix-logo"
        />
        <img
          onClick={()=>{navigate("/profile")}}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
          alt="netflix-avatar"
        />
        
      </div>
    </div>
  );
}

export default Nav;
