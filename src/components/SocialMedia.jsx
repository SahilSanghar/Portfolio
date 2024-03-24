import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
return (
    <div className='app__social'>
        
        <div>
            <a href="https://github.com/SahilSanghar" target='blank'>
                <FiGithub />
            </a>
        </div>

        <div>
            <a href="https://www.instagram.com/thats.__.sahil/" target='blank'>
                <BsInstagram />
            </a>
        </div>

        <div>
            <a href="https://www.linkedin.com/in/sahilsanghar/" target='blank'>
                <FaLinkedinIn />
            </a>
        </div>
    </div>
)
}

export default SocialMedia