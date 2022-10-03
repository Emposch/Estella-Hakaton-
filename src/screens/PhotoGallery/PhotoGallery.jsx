import React, { memo } from 'react'
import './PhotoGallery.css'
import adob from './../../images/Picture/Chiken/Adob.jpg'
import buldak from './../../images/Picture/Chiken/Buldak.jpg'
import riggi from './../../images/Picture/Chiken/Riggi.jpg'
import tacuda from './../../images/Picture/Chiken/Tacuda.jpg'
import karbonaro from './../../images/Picture/Pizza/Pizza-karbonaro.jpg'
import season4 from '../../images/Picture/Pizza/Pizza-4sezon.jpg'
import ortolana from '../../images/Picture/Pizza/Pizza-ortolana.jpg'
import emilia from '../../images/Picture/Pizza/Pizza-emilia.jpg'
import diavola from '../../images/Picture/Pizza/Pizza-diavola.jpg'
import futomaki from '../../images/Picture/Sushi/Futomaki.jpg'
import hosomaki from '../../images/Picture/Sushi/Hosomaki.jpg'
import maki from '../../images/Picture/Sushi/Maki.jpg'
import temaki from '../../images/Picture/Sushi/Temaki.jpg'

import caesar from '../../images/Picture/Salad/Cezar.jpg'
import grenki from '../../images/Picture/Salad/Grenki.jpg'
import mimosa from '../../images/Picture/Salad/Mimoza.jpg'
import olivier from '../../images/Picture/Salad/Olivie.jpg'
import kisir from '../../images/Picture/Salad/Kysyr.jpg'


export default function PhotoGallery() {
  return (
    <div className='photo'>
        <div className="photo_container">
            <div className='photo_chicken'>
                <h1 className='photo_title'>Chicken</h1>
                <div className='three_chicken'>
                    <div className='chicken_name'>
                        <img className='chicken3' src={adob} alt="" />
                        <h1>Adob</h1>
                    </div>
                    <div className='chicken_name'>
                        <img className='chicken3' src={buldak} alt="" />
                        <h1>Buldak</h1>
                    </div>
                    <div className='chicken_name'>
                        <img className='chicken3' src={riggi} alt="" />
                        <h1>Riggi</h1>
                    </div>
                </div>
                <div className='last_chicken_name'>
                    <img className='last_chicken' src={tacuda} alt="" />
                    <h1>Tacuda</h1>
                </div>                
            </div>
            <div className="line"></div>
            <div className="photo_pizza">
                <h1 className='photo_title'>Pizza</h1>
                <div className='pizzas_photo'>
                    <div className='karbonaro'>
                    <img className='pizza_firstphoto' src={karbonaro} alt="" />
                    <h1>Karbonaro</h1>
                    <img className='pizza_firstphoto' src={diavola} alt="" />
                    <h1>Diavola</h1>
                    </div>
                    <div className='pizzas_3'>
                        <img className='pizzas' src={season4} alt="" />
                        <h1>4 season</h1>
                        <img className='pizzas' src={ortolana} alt="" />
                        <h1>Ortolana</h1>
                        <img className='pizzas' src={emilia} alt="" />
                        <h1>Emilia</h1>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="photo_sushi">
                <h1 className='photo_title'>Sushi</h1>
                <div className="four_picture">
                    <div className='sushi_twoPhoto_row'>
                        <div className='sushi_1block'>
                            <img className='sushi' src={futomaki} alt="" />
                            <h1>Futomaki</h1>
                        </div>
                        <div className='sushi_1block'>
                            <img className='sushi' src={maki} alt="" />
                            <h1>Maki</h1>
                        </div>
                    </div>
                    <div className='sushi_twoPhoto_row'>
                        <div className='sushi_1block'>
                            <img className='sushi' src={hosomaki} alt="" />
                            <h1>Hosomaki</h1>
                        </div>
                        <div className='sushi_1block'>
                            <img className='sushi' src={temaki} alt="" />
                            <h1>Temaki</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="photo_salad">
                <h1 className='photo_title'>Salad</h1>
                <div className="pictures_salad">
                    <div className='salad_3photo'>
                        <div className='salad_caesar'>
                            <img className='salad' src={caesar} alt="" />
                            <h1>Caesar</h1>
                        </div>
                        <div  className='salad_grenki'>
                            <img className='salad' src={grenki} alt="" />
                            <h1>Grenki</h1>
                        </div>
                        <div className='salad_mimosa'>
                            <img className='salad' src={mimosa} alt="" />
                            <h1>Mimosa</h1>
                        </div>
                    </div>
                    <div className='salad_2photo'>
                        <div className='salad_oliv'>
                            <img className='salad_twoph' src={olivier} alt="" />
                            <h1>Olivier</h1>
                        </div>
                        <div className='salad_kis'>
                            <img className='salad_twoph' src={kisir} alt="" />
                            <h1>Kisir</h1>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}
