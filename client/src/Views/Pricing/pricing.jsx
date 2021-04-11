import React from 'react'
import style from './pricing.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'

export default function Pricing(){

    return (
        <div>
            <Navbar/>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center mt-5">
    <h1 className="display-4 fw-normal">Pricing</h1>
    <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
  </div>

  <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100" className={style.btnCor}>Sign up for free</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100" className={style.btnCor}>Get started</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-white" className={style.cor}>
            <h4 className="my-0 fw-normal" >Enterprise</h4>
          </div>
          <div Name="card-body">
            <h1 className="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100" className={style.btnCor}>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
 
        </div>
    )
}