import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


export default function ({showMenu, toggleMenu}) {
    
  return (      
    <>
        {
            showMenu ? 
                <>
                    <div id='desktop-nav' className="d-flex ml-2">
                        <button className="btn">Features</button>
                        <button className="btn">Pricing</button>
                        <button className="btn">Community</button>
                        <button className="btn">Support</button>
                        <button className="btn">Contact Us</button>
                        <button id="jumbo-last" className="btn" type="submit">Join Today</button> 
                    </div>
                    {/* <p onClick={toggleMenu} className={showMenu && 'close'}> */}
                       <AiOutlineClose onClick={toggleMenu} className={showMenu && 'close'} />
                    {/* </p> */}
                </>
                :
                
                <div className="d-flex ml-2 desktopnav-class">
                    <button className="btn">Features</button>
                    <button className="btn">Pricing</button>
                    <button className="btn">Community</button>
                    <button className="btn">Support</button>
                    <button className="btn">Contact Us</button>
                    <button id="jumbo-last" className="btn" type="submit">Join Today</button> 
                </div>
                
        }
        
    </>
  )
}
