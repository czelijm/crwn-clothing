import React from 'react';
import {withRouter} from 'react-router-dom'; //higher order component - function(component) return modyfiedComponent

//import './menu-tem.styles.scss'
import {MenuItemContainer,BackgroundImageContainer,ContentContainer,TitleContainer,SubtitleContainer} from './menu-item.styles'

//desturcture our props.
//we can use history because we use withRouter
const MenuItem = ({title,subtitle,imageUrl,size,linkUrl,history, match}) =>(
    <MenuItemContainer className={` ${size}`}
        //e.x. '/' + 'shop/Hats' this is new URL 
        onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >

    <BackgroundImageContainer className='image' imageUrl={imageUrl}/>
    
        <ContentContainer className='content'>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>{subtitle}</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem); 