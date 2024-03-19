import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
return (
    <div className='app__social'>
        
        <div>
            <FiGithub />
        </div>

        <div>
            <BsInstagram />
        </div>

        <div>
            <FaLinkedinIn />
        </div>
    </div>
)
}

export default SocialMedia