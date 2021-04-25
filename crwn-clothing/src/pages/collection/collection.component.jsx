import React from 'react';
import {connect} from 'react-redux'

// import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollectionCategory} from '../../redux/shop/shop.selector.js'

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const {items,title} = collection;
    return (
        // {console.log(collection)}
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/> )
                }
            </div>
        </div>
    )
}

//ownProps -> props of component that we are wrapping with connect
const mapStateToProps = (state,ownProps) =>({
    collection: selectCollectionCategory(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);