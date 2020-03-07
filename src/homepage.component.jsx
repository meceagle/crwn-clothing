import React from 'react'
import './homepage.styles.scss'

const HomePage =() =>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'> CHAPÉUS</h1>
                    <span className='subtitle'>Comprar Agora!</span>
                </div>
            </div>     
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'> JAQUETAS</h1>
                    <span className='subtitle'>Comprar Agora!</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'> TENIS</h1>
                    <span className='subtitle'>Comprar Agora!</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'> FEMININO</h1>
                    <span className='subtitle'>Comprar Agora!</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>MASCULINO</h1>
                    <span className='subtitle'>Comprar Agora!</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage
