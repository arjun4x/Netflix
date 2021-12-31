import React from 'react'
import './Banner.css' 

export default function () {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="Banner-button">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </h1>
                <div className="fade-bottom"></div>
        </div>
        </div>
    )
}
