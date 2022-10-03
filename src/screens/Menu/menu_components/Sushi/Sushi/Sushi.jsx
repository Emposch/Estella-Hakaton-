import React from 'react'
import "./Sushi.css"
import futomaki from "../Sushi_png/Futomaki.jpg"
import hosomaki from '../Sushi_png/Hosomaki.jpg'
import maki from "../Sushi_png/Maki.jpg"
import nigiri from "../Sushi_png/Nigiri.jpg"
import sashimi from "../Sushi_png/Sashimi.png"
import spring from "../Sushi_png/Spring roll.jpg"
import uramaki from "../Sushi_png/Uramaki.jpg"
import temaki from "../Sushi_png/Temaki.jpg"
import chirasi from "../Sushi_png/Chirashi sushi.jpg"


export default function Sushi() {
  return (
    <div className='Sushi_cont'>
        <div className='Sushis'>
        <img src={futomaki} alt="" />
        <h1>Futomaki</h1>
        <h3>280c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={hosomaki} alt="" />
        <h1>Hosomaki</h1>
        <h3>180c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={maki} alt="" />
        <h1>Maki</h1>
        <h3>250c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={nigiri} alt="" />
        <h1>Nigiri</h1>
        <h3>380c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={sashimi} alt="" />
        <h1>Sashimi</h1>
        <h3>340c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={spring} alt="" />
        <h1>Spring roll</h1>
        <h3>240c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={uramaki} alt="" />
        <h1>Uramaki</h1>
        <h3>150c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={temaki} alt="" />
        <h1>Temaki</h1>
        <h3>450c</h3>
        <button>Заказать</button>
        </div>
        <div className='Sushis'>
        <img src={chirasi} alt="" />
        <h1>Chirashi sushi</h1>
        <h3>550c</h3>
        <button>Заказать</button>
        </div>
    </div>
  )
}
