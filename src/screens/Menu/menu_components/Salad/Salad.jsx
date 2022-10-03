import React from 'react'
import "./Salad.css"
import budha_bovl from "../Salad_jpg/Budha bowl.jpg"
import cezar from "../Salad_jpg/Cezar.jpg"
import grech from "../Salad_jpg/Grechesky salad.jpg"
import grenki from "../Salad_jpg/Grenki.jpg"
import kachumbari from "../Salad_jpg/Kachumbari.jpg"
import kapreze from "../Salad_jpg/Kapreze.jpg"
import karedok from "../Salad_jpg/Karedok.jpg"
import kysyr from "../Salad_jpg/Kysyr.jpg"
import matbuha from "../Salad_jpg/Matbuha.jpg"
import mimoza from "../Salad_jpg/Mimoza.jpg"
import namasu from "../Salad_jpg/Namasu.jpg"
import olivie from "../Salad_jpg/Olivie.jpg"
import salad_tunec from "../Salad_jpg/Salad c tuncom.jpg"
import salad_kob from "../Salad_jpg/salad kob.jpeg"
import salad_shizari from "../Salad_jpg/Shizari salad.jpg"


export default function Salad() {
  return (
    <div className='salad_cont'>
     <div className='salads'>
     <img src={budha_bovl} alt="" />
     <h1>Будха Бовл</h1>
     <h3>230c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={cezar} alt="" />
     <h1>Цезарь</h1>
     <h3>130c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={grech} alt="" />
     <h1>Греческий салат </h1>
     <h3>120c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={grenki} alt="" />
     <h1>Гренки </h1>
     <h3>100c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={kachumbari} alt="" />
     <h1>Качумбари</h1>
     <h3>170c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={kapreze} alt="" />
     <h1>Капрезе </h1>
     <h3>220c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={karedok} alt="" />
     <h1>Каредок </h1>
     <h3>250c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={kysyr} alt="" />
     <h1>Кисир</h1>
     <h3>200c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={matbuha} alt="" />
     <h1>Матбуха</h1>
     <h3>130c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={mimoza} alt="" />
     <h1>Мимоза</h1>
     <h3>250c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={namasu} alt="" />
     <h1>Намасу</h1>
     <h3>150c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={olivie} alt="" />
     <h1>Оливье</h1>
     <h3>130c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={salad_tunec} alt="" />
     <h1>Салат с тунцом</h1>
     <h3>130c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={salad_kob} alt="" />
     <h1>Сатал Коб</h1>
     <h3>180c</h3>
     <button>Заказать</button>
     </div>
     <div className='salads'>
     <img src={salad_shizari} alt="" />
     <h1>Салат Шизари</h1>
     <h3>130c</h3>
     <button>Заказать</button>
     </div>
    </div>
  )
}
