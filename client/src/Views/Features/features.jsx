import React from 'react'
import style from './features.module.css'
import Navbar from '../../Components/Navbar/navbar'
import imgFeature from '../../Images/feature.svg'
import Footer from '../../Components/Footer/footer'

export default function Feature(){

    return (
        <div className={style.container}>
          <Navbar/>
            <div className="container py-5 mt-3" id="featured-3">
  <h2 className="pb-2 border-bottom">Featured</h2>
  <div className="row g-5 py-5">

    <div className="feature col-md-4">
      <div className="feature-icon" className={style.cor} >
      <img src={imgFeature} className={style.logoFeature}/>
      </div>
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link" className={style.textCor}>
        Call to action
      </a>
    </div>

    <div className="feature col-md-4">
      <div className="feature-icon" className={style.cor}>
        <img src={imgFeature} className={style.logoFeature}/>
      </div>
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link" className={style.textCor}>
        Call to action
      </a>
    </div>

    <div className="feature col-md-4">
      <div className="feature-icon" className={style.cor}>
        <img src={imgFeature} className={style.logoFeature}/>
      </div>
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link" className={style.textCor}>
        Call to action
      </a>
    </div>

  </div>
</div>
<Footer/>
        </div>
    )
}