import React from 'react'

import './directory.styles.scss'
import { render } from '@testing-library/react';

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections: [
                {
                  title: 'Bonés',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jaquetas',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'calçados',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Mulheres',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Homens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }]
        }
    }


render(){
    return(
        <div className='directory-menu'>
            {
                this.state.sections.map(({title,imageUrl,id, size})=> (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
        </div>
    )}
}

export default Directory