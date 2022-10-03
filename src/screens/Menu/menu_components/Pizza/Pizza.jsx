import React from 'react'
import syra from "../../Picture/Pizza_jpg/syra.jpg"
import pizza_ferm  from "../../Picture/Pizza_jpg/Ferm-Pizza.jpg"
import pizza_tunec from "../../Picture/Pizza_jpg/Pizza s tuncom.jpg"
import pizza_4sezon from "../../Picture/Pizza_jpg/Pizza-4sezon.jpg"
import pizza_americano from "../../Picture/Pizza_jpg/Pizza-americano.jpg"
import pizza_apulesky from "../../Picture/Pizza_jpg/Pizza-apuliesky.jpeg"
import pizza_diavol from "../../Picture/Pizza_jpg/Pizza-diavola.jpg"
import pizza_emilia from "../../Picture/Pizza_jpg/Pizza-emilia.jpg"
import pizza_kalconne from "../../Picture/Pizza_jpg/Pizza-kalconne.jpg"
import pizza_karbonaro from "../../Picture/Pizza_jpg/Pizza-karbonaro.jpg"
import pizza_margarita from "../../Picture/Pizza_jpg/pizza-margarita-цена 420сом.jpg"
import pizza_krudo from "../../Picture/Pizza_jpg/Pizza-krudo.jpg"
import pizza_marinara from "../../Picture/Pizza_jpg/Pizza-Marinara.jpg"
import pizza_montanara from "../../Picture/Pizza_jpg/Pizza-montanara.jpeg"
import pizza_moreproduct from "../../Picture/Pizza_jpg/Pizza-moreproduct.jpg"
import pizza_napoleon from "../../Picture/Pizza_jpg/Pizza-napoleon.jpg"
import pizza_ortolana from "../../Picture/Pizza_jpg/Pizza-ortolana.jpg"
import pizza_rim from "../../Picture/Pizza_jpg/Pizza-Rim.jpg"
import "./Pizza.css"

export default function Pizza() {
  return (
    <div className='Pizza_conteiner'> 
      <div className='pizzas'>
    <img  src={syra} alt=""/>
    <h2>Пицца 4-сыра</h2>
    <h3>450c</h3>
    <button>Заказать</button>
    </div>
    <div className='pizzas'>
    <img src={pizza_ferm} alt="" />
     <h2>Пицца Фермерская</h2>
     <h3>320c</h3>
     <button>Заказать</button>
    </div>
    <div className='pizzas'>
    <img src={pizza_tunec} alt="" />
     <h2>Пицца с тунцом</h2>
     <h3>350c</h3>
     <button>Заказать</button>
    </div>
     <div className='pizzas'>
     <img src={pizza_4sezon} alt="" />
     <h2>Пицца 4-сезона</h2>
     <h3>420c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_americano} alt="" />
     <h2>Пицца Американо</h2>
     <h3>440c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_apulesky} alt="" />
     <h2>Пицца по Аппулейскии</h2>
     <h3>490c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_diavol} alt="" />
     <h2>Пицца Диявола</h2>
     <h3>410c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_emilia} alt="" />
     <h2>Пицца Эмилия</h2>
     <h3>415c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_kalconne} alt="" />
     <h2>Пицца Калконне</h2>
     <h3>405c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_karbonaro} alt="" />
     <h2>Пицца Карбонаро</h2>
     <h3>490c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_krudo} alt="" />
     <h2>Пицца Крудо</h2>
     <h3>500c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_margarita} alt="" />
     <h2>Пицца Маргарита</h2>
     <h3>520c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_marinara} alt="" />
     <h2>Пицца Маринара</h2>
     <h3>510c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_montanara} alt="" />
     <h2>Пицца Монтанара</h2>
     <h3>500c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_moreproduct} alt="" />
     <h2>Пицца с морепродуктами </h2>
     <h3>520c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_napoleon} alt="" />
     <h2>Пицца Наполеон</h2>
     <h3>550c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_ortolana} alt="" />
     <h2>Пицца Ортолано </h2>
     <h3>545c</h3>
     <button>Заказать</button>
     </div>
     <div className='pizzas'>
     <img src={pizza_rim} alt="" />
     <h2>Пицца Рим </h2>
     <h3>565c</h3>
     <button>Заказать</button>
     </div>
    </div>
   
  )
}
