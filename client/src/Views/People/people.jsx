import React from 'react'
import style from './people.module.css'
import { NavLink } from 'react-router-dom'
import gerenteImg1 from '../../Images/gerente1.jpg'
import gerenteImg2 from '../../Images/gerente2.jpg'

export default function People() { 

    return (
        <section className={style.containerPeople}>
        <div className={style.container}>
            <div className={style.infoPeople}>
            <h2 className={style.title}>Our People</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            <article className={style.cardPeople}>
            <img src={gerenteImg1} />
            <h3>Rasmus D. Nielsen</h3>
            <p>CEO-Founder who makes easy to change and easy to create new elemnets</p>
            <p>@achoo</p>
            </article>

            <article className={style.cardPeople}>
            <img src={gerenteImg2} className={style.image}/>
            <h3>Rasmus D. Nielsen</h3>
            <p>CEO-Founder who makes easy to change and easy to create new elemnets</p>
            <p>@achoo</p>
            </article>

            <article className={style.cardPeople}>
            <img src={gerenteImg1} className={style.image}/>
            <h3>Rasmus D. Nielsen</h3>
            <p>CEO-Founder who makes easy to change and easy to create new elemnets</p>
            <p>@achoo</p>
            </article>
            
        </div>
        </section>
    )
}