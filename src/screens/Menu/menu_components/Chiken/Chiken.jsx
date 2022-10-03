import React from 'react'
import "./Chiken.css"
import adop from "../Chiken_jpg/Adob.jpg"
import afritada from "../Chiken_jpg/Afritada.jpg"
import buldak from "../Chiken_jpg/Buldak.jpg"
import charga from "../Chiken_jpg/Charga.jpg"
import chettinnad from "../Chiken_jpg/Chetinnad.jpg"
import chigiritma from "../Chiken_jpg/Chigiritma.jpeg"
import chimac from "../Chiken_jpg/Chimac.jpg"
import chuan from "../Chiken_jpg/Chuan.jpg"
import karahari from "../Chiken_jpg/Karahari.jpg"
import karri from "../Chiken_jpg/Karri.jpeg" 
import koksinia from "../Chiken_jpg/Koksinia.jpg"
import lahori from "../Chiken_jpg/Lahori.jpg"

export default function Chiken() {
  return (
    <div className='chicken_cont'>
<div className='chickens'>
<img src={adop} alt="" />
<h1>Adop</h1>
<h3>240c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={afritada} alt="" />
<h1>Afritada</h1>
<h3>250c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={buldak} alt="" />
<h1>Buldak</h1>
<h3>180c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={charga} alt="" />
<h1>Charga</h1>
<h3>150c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={chettinnad} alt="" />
<h1>Chetinnad</h1>
<h3>350c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={chigiritma} alt="" />
<h1>Chigiritma</h1>
<h3>220c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={chimac} alt="" />
<h1>Chimac</h1>
<h3>280c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={chuan} alt="" />
<h1>Chuan</h1>
<h3>380c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={karahari} alt="" />
<h1>Karahari</h1>
<h3>580c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={karri} alt="" />
<h1>Karri</h1>
<h3>350c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={koksinia} alt="" />
<h1>Koksinia</h1>
<h3>300c</h3>
<button>Заказать</button>
</div>
<div className='chickens'>
<img src={lahori} alt="" />
<h1>Lahori</h1>
<h3>330c</h3>
<button>Заказать</button>
</div>
    </div>
  )
}
