import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-light d-flex justify-content-between fw-bold text-black p-3 mt-5" >
                <div>
                    &copy;
                    <span> {new Date().getFullYear()}</span>
                    <span> CST-326</span>

                </div>
            </div>

        </>
    )
}

export default Footer;