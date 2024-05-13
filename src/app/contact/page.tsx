import React from 'react'
import './contact.css'
const page = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 ">

            <div className='mt-20'>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">Contact us </h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[13%]"></div>
            </div>

            <div className="form-card1 mt-10 ">
                <div className="form-card2">
                    <form action="mailto:sunnysrivastava359@gmail.com" target="_blank" method="post" encType="text/plain" className="form p-10">
                        <div className="form-field">
                            <input placeholder="Name" className="input-field" type="text" />
                        </div>

                        <div className="form-field">
                            <input

                                placeholder="Email"
                                className="input-field"
                                type="email"
                            />
                        </div>

                        <div className="form-field">
                            <input

                                placeholder="Subject"
                                className="input-field"
                                type="text"
                            />
                        </div>

                        <div className="form-field">
                            <textarea

                                placeholder="Message"
                                cols={30}
                                rows={3}
                                className="input-field"
                            ></textarea>
                        </div>

                        <button className="sendMessage-btn">Send Message</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default page
