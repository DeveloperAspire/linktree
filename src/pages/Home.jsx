import '../index.css'
import React from 'react'

function Home() {
  return (
    <div className='Wrapper'>
        <div id='slack'>
            VoN
        </div>
        <div className='share'>
            <img src="/img/share-dsk.svg" alt="" className='share-desktop' />
            <img src="/img/share-mob.svg" alt="" className='share-mobile' />
        </div>
        <div className='AviWrapper'>
            <img src='/img/von.jpg' alt="" id='profile__img' className='avi'/>
            <img src="/img/hover-img.svg" alt="upload" className='upload' />
        </div>

        <h3 className='my-name'>VoN</h3>

        <div className='ButtonsWrapper'>
            <a href="https://twitter.com/imrvon" id='twitter'>Twitter Link</a>
            <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
            <a href="http://books.zuri.team/" id='books'>Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id='book__python'>Python Books</a>
            <a href="https://background.zuri.team/" id='pitch'>Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
        </div>

        <div className='slack-git'>
            <img src="/img/slack.svg" alt="" />
            <img src="/img/github.svg" alt="" />
        </div>

        <hr />

        <footer>
            <div><img src="/img/zuri.svg" alt="Zuri" /></div>
            <div><p>HNG Internship 9 Frontend Task</p></div>
            <div><img src="/img/I4G.svg" alt="Ingressive4Good" /></div>
        </footer>
    </div>
  )
}

export default Home