import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import {selectCollection} from '../../redux/shop/shop.selector';

import './collection-overview.component';


const CollectionOverview = ({collections}) => (
    
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollection
});

export default connect(mapStateToProps)(CollectionOverview);