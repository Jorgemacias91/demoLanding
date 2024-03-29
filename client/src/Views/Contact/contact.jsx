import React from 'react'
import style from './contact.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'

export default function Contact(){

    return (
        <div>
             <Navbar />
            <main className="px-3 mt-5 mb-5">
                <h1>Contact.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </main>
            <Footer/>
            
        </div>
    )
}