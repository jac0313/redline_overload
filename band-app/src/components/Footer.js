import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () =>{
    
    return(
        <>
            <footer className="bg-black p-3">
                <div className='contact'>
                    <FontAwesomeIcon icon={ faEnvelope } size='2x'/> <h4>redlineoverloadllc@gmail.com</h4>
                </div>
            </footer>
        </>
    )
}
    
export default Footer