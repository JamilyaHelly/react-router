import React from 'react';
import {  useNavigate } from "react-router-dom";





const Contact= ()=>{
    let navigate = useNavigate();
    
        setTimeout(() => {navigate('/about')}, 2000)
    return(
        <div
         className='ui raised very padded text container segment'
         style={{marginTop:'80px'}}
         >
             <h3 className='ui header'>Contact</h3>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                  et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
    )
}
export default Contact;