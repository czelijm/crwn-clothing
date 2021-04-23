import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';

//we can use match because inside App.js ShopPage is nested in the route and route Passes 3 objects (mach, location. and history ) as props
const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        {/* <CollectionOverview/> */}
    </div>
)

export default ShopPage;
// class ShopPage extends React.Component{
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }
    
//     render(){
//         const {collections} = this.state;
//         return(
//             <div className='shop-page'>
//                 {
//                     collections.map(({id, ...otherCollectionProps})=>(
//                         <CollectionPreview key={id} {...otherCollectionProps} />
//                     ))
//                 }
//             </div>
//         );
//     }
// }

// export default ShopPage;