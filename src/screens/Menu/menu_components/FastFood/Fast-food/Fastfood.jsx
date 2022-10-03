import React from 'react'
import "./Fast-food.css"
import bogam_oladi from "../Fast-food_jpg/Bogam oladii.jpg"
import brazil_pel from "../Fast-food_jpg/Brazilien pelmen.jpg"
import burito from "../Fast-food_jpg/Burito.jpg"
import poutin from "../Fast-food_jpg/Canad Poutine.jpg"
import burger from "../Fast-food_jpg/CHizburger.jpg"
import choripan from "../Fast-food_jpg/Choripan.jpg"
import falavel from "../Fast-food_jpg/Falavel.jpg"
import hachapuri from "../Fast-food_jpg/Hachapuri.jpeg"
import hot_dog from "../Fast-food_jpg/Hot dog.jpg"
import kessadilia from "../Fast-food_jpg/Kesadilia.jpg"
import nagets from "../Fast-food_jpg/Nagets.png"
import panini from "../Fast-food_jpg/Panini.jpg"
import shaurma from "../Fast-food_jpg/Shaurma.jpg"
import samsa from "../Fast-food_jpg/Samsa.jpg"

export default function Fastfood() {
  return (
     <div className='food_cont'>
<div className='foods'>
 <img src={bogam_oladi} alt="" />
 <h1>Богамские олади</h1>
 <h3>150c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={brazil_pel} alt="" />
 <h1>Богамские олади</h1>
 <h3>120c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={burito} alt="" />
 <h1>Бурито</h1>
 <h3>180c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={poutin} alt="" />
 <h1>Канадский Путин </h1>
 <h3>180c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={burger} alt="" />
 <h1>Чизбургер </h1>
 <h3>120c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={choripan} alt="" />
 <h1>Чорипан </h1>
 <h3>190c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={falavel} alt="" />
 <h1>Фалавел</h1>
 <h3>150c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={hachapuri} alt="" />
 <h1>Хачапури</h1>
 <h3>250c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={hot_dog} alt="" />
 <h1>Хот-дог</h1>
 <h3>90c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={kessadilia} alt="" />
 <h1>Кессадилия</h1>
 <h3>250c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={nagets} alt="" />
 <h1>Нагетсы</h1>
 <h3>350c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={panini} alt="" />
 <h1>Панини</h1>
 <h3>300c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={panini} alt="" />
 <h1>Панини</h1>
 <h3>320c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={shaurma} alt="" />
 <h1>Шаурма</h1>
 <h3>150c</h3>
 <button>Заказать</button>
</div>
<div className='foods'>
 <img src={samsa} alt="" />
 <h1>Самса</h1>
 <h3>50c</h3>
 <button>Заказать</button>
</div>
    </div>
  )
}
