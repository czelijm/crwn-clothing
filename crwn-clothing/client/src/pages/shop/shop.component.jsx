import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container';


//we can use match because inside App.js ShopPage is nested in the route and route Passes 3 objects (mach, location. and history ) as props
const ShopPage = ({fetchCollectionsStart,match}) => {

    useEffect(()=>{
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    // const {match} = this.props;
    // const {loading} = this.state;
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            {/* <CollectionOverview/> */}
        </div>
    )
    
}

// const mapStateToProps = createStructuredSelector({
//     isCollectionLoaded: selectIsCollectionLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
}) 

export default connect(null,mapDispatchToProps)(ShopPage);