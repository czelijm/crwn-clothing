import React from 'react';
import {withRouter} from 'react-router-dom'; //higher order component - function(component) return modyfiedComponent

import './menu-tem.styles.scss'

//desturcture our props.
//we can use history because we use withRouter
const MenuItem = ({title,subtitle,imageUrl,size,linkUrl,history, match}) =>(
    <div 
        className={` ${size}  menu-item`}
        //e.x. '/' + 'shop/Hats' this is new URL 
        onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >

    <div className='background-image'     
        style={{
            backgroundImage: `url(${imageUrl})`
    }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle}</span>
        </div>
    </div>
)

export default withRouter(MenuItem); 