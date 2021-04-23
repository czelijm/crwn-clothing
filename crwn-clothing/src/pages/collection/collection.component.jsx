import React from 'react';
import {connect} from 'react-redux'

// import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollectionCategory} from '../../redux/shop/shop.selector.js'

import './collection.styles.scss';

const CollectionPage = ({collection}) => (
    // {console.log(collection)}
    <div className='collection-page'>
    COLLECTION 
    </div>
)

//ownProps -> props of component that we are wrapping with connect
const mapStateToProps = (state,ownProps) =>({
    collection: selectCollectionCategory(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);