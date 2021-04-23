import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        <CollectionOverview/>
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