import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className='footer_subscribe'>
                <h1>Subscribe for hot updates</h1>
                <div className='subscribe'>
                    <input className='subscribe_input' type="text" placeholder='Enter your email here' />
                    <button className='subscribe_btn'>Submit</button>
                </div>
            </div>
            <div className="footer_socia">
                <h1 className='socia_text'>Follow us on socials!</h1>
                <div className='socias'>
                    <a target="_blank" href="https://www.facebook.com">
                        <img className='facebook' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt="" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/estella_restobar/">
                        <img className='inst' src="https://oneprogs.ru/wp-content/uploads/instagram-logo.png" alt="" />
                    </a>
                    <a target="_blank" href="https://web.whatsapp.com/">
                        <img className='whatsapp' src="https://cdn2.downdetector.com/static/uploads/logo/whatsapp-messenger.png" alt="" />
                    </a>
                    <a target='_blank' href="https://web.telegram.org/">
                        <img className='telegram' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png" alt="" />
                    </a>
                    <a href="https://twitter.com/?lang=ru">
                        <img className="twitter" src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="" />
                    </a>
                    <a href="https://github.com/Emposch">
                        <img className='github' src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png" alt="" />
                    </a>
                    <a href="https://github.com/">
                        <img className='github' src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png" alt="" />
                    </a>
                    <a href="https://github.com/roniXX77">
                        <img className='github' src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png" alt="" />
                    </a>
                </div>
            </div>
            <p className='footer_created'>©2022 by ESTELLA LTD.</p>
        </div>
    </div>
  )
}
