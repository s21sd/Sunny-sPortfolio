import React, { ReactEventHandler } from 'react'
import './Social.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const SocialMedia = () => {
    const router = useRouter();

    return (
        <div>
            <div className="main">

                <div className="card ">
                    <FaLinkedin onClick={() => router.push("https://www.linkedin.com/in/sunny-srivastava-a82996244/")} className='instagram' color='blue' size={30} />
                </div>
                <div className="card">
                    <SiLeetcode onClick={() => router.push("https://leetcode.com/u/sunnysrivastava258/")} className='instagram' size={30} color='orange' />
                </div>
                <div className="card ">
                    <FaInstagram onClick={() => router.push("https://www.instagram.com/sunnysrivastava8063/?igshid=ZDdkNTZiNTM%3D")} className='instagram' color='pink' size={30} />
                </div>
                <div className="card">
                    <FaGithub onClick={() => router.push("https://github.com/s21sd")} className='instagram' color='black' size={30} />
                </div>
                <div className="card">
                    <Image onClick={() => router.push("https://www.geeksforgeeks.org/user/sunnysrivazg0p/")} className='instagram' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt='gfg' width={20} height={20} />
                </div>

                <div className="card">
                    <IoMdMail onClick={() => router.push("/contact")} className='instagram' color='red' size={30} />
                </div>

                <p className="text">HOVER<br /><br />FOR<br /><br />SOCIAL</p>
                <div className="main_back"></div>
            </div>

        </div>
    )
}

export default SocialMedia
