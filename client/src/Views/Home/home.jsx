import React from 'react'
import style from './home.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import { Link } from 'react-router-dom'
import People from '../../Views/People/people'



export default function Home() {

    return (
        <div>
            <Navbar />
            <section className={style.container}>
                <article className={style.heroImage} >
                    <aside className={style.heroImageOpacity}>
                        <div className={style.heroImageContent}>
                            <h2 className={style.heroImageTitle}>
                                A Powerful Influencer Marketing <br />
                                Platform for Advertisers<br />
                                <Link to="/" className={style.btn}>START YOUR FREE TRIAL</Link>
                            </h2>
                        </div>
                    </aside>
                </article>
            </section>
            <div className={style.mision}>
            <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">Our Mision</h5>
                    <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                </div>
            </div>
            <People/>
      <div className={style.message}>
        <p>No obligations or contracts. Achoo influneter Platform is avaliable to all advertisers</p>
        <button className={style.btnMessage}>START YOUR FREE TRIAL </button>
      </div>
      
      <Footer/>
            
        </div>
    )
}