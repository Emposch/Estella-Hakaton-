import React from 'react'
import brazo_de_gintano from '../Picture/Dessert_jpg/brazo de gitano.jpg'
import chizkeik from "../Picture/Dessert_jpg/Chizkeik.jpg"
import dobosh from "../Picture/Dessert_jpg/dobosh.jpg"
import dusel from "../Picture/Dessert_jpg/Dusel de che le.jpg"
import galal from ".././Picture/Dessert_jpg/Galabudjun.jpg"
import knaffe from ".././Picture/Dessert_jpg/knaffe.jpg"
import kranahan from '.././Picture/Dessert_jpg/Kranahan.jpg'
import mazariner from ".././Picture/Dessert_jpg/Mazariner.jpg"
import panetonne from ".././Picture/Dessert_jpg/Panetonne.jpg"
import pavlova from ".././Picture/Dessert_jpg/Pavlova.jpg"
import diavol from ".././Picture/Dessert_jpg/Pisha diavola.jpg"
import profitr from ".././Picture/Dessert_jpg/Profitrols.jpg"
import puding from ".././Picture/Dessert_jpg/Puding.jpeg"
import roky from ".././Picture/Dessert_jpg/Rokki roud.jpg"
import tiramesu from ".././Picture/Dessert_jpg/Tiramesu.jpg"
import turon from ".././Picture/Dessert_jpg/Turron.jpg"
import vinartetta from ".././Picture/Dessert_jpg/Vinarterta.jpg"
import "./Dessert.css"

export default function Dessert() {
  return (
    <div className='Dessert_conteiner'>
        <div className='Desserts'>
        <img src={brazo_de_gintano} alt="" />
        <h1>Brazo de gintano</h1>
        <h3>120c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={chizkeik} alt="" />
        <h1>Чизкейк</h1> 
        <h3>150c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={dobosh} alt="" />
        <h1>Добош</h1>
        <h3>220c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={dusel} alt="" />
        <h1>Дусел де че ле</h1>
        <h3>230c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={galal} alt="" />
        <h1>Галабуджун</h1>
        <h3>150c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={knaffe} alt="" />
        <h1>Кнаффе</h1>
        <h3>250c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={kranahan} alt="" />
        <h1>Кранахан</h1>
        <h3>350c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={mazariner} alt="" />
        <h1>Мазаринер</h1>
        <h3>320c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={panetonne} alt="" />
        <h1>Панетонне</h1>
        <h3>360c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={pavlova} alt="" />
        <h1>Павлова</h1>
        <h3>200c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={diavol} alt="" />
        <h1>Пища Дьявола</h1>
        <h3>200c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={profitr} alt="" />
        <h1>Профитроли</h1>
        <h3>220c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={puding} alt="" />
        <h1>Пудинг</h1>
        <h3>255c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={roky} alt="" />
        <h1>Рокки Роуд</h1>
        <h3>355c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={tiramesu} alt="" />
        <h1>Тираммису</h1>
        <h3>320c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={turon} alt="" />
        <h1>Турон</h1>
        <h3>230c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts'>
        <img src={turon} alt="" />
        <h1>Турон</h1>
        <h3>230c</h3>
        <button>Заказать</button>
        </div>
        <div className='Desserts-2'>
        <img src={vinartetta} alt="" />
        <h1>Винартетта</h1>
        <h3>280c</h3>
        <button>Заказать</button>
        </div>
    </div>
  )
}
