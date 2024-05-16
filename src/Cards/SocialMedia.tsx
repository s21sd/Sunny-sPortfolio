import React from 'react'
import './Social.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'next/image';
const SocialMedia = () => {
    return (
        <div>
            <div className="main">

                <div className="card ">
                    <FaLinkedin className='instagram' color='blue' size={30} />
                </div>
                <div className="card">
                    <SiLeetcode className='instagram' size={30} color='orange' />
                </div>
                <div className="card ">
                    <FaInstagram className='instagram' color='pink' size={30} />
                </div>
                <div className="card">
                    <Image className='instagram' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt='gfg' width={20} height={20} />
                </div>
                <div className="card">
                    <FaGithub className='instagram' size={30} />
                </div>
                <div className="card">
                    <IoMdMail className='instagram' color='red' size={30} />
                </div>
                
                <p className="text">HOVER<br /><br />FOR<br /><br />SOCIAL</p>
                <div className="main_back"></div>
            </div>

        </div>
    )
}

export default SocialMedia
