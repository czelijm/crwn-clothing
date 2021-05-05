import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect'

// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


// import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// import moduleName from '../../redux/shop/shop.selector'

//we can use match because inside App.js ShopPage is nested in the route and route Passes 3 objects (mach, location. and history ) as props
class ShopPage extends React.Component{
    state = {
        loading:true
    }

    unsubcribeFormSnapshot = null;

    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
        // const {updateCollections} = this.props;
        // const collectionRef = firestore.collection('collections'); 

        //onSnapshot - whenever collectionRef updates or it is run for the first time this collectionRef will send us the snapShot 
        //representing the code of our collections objects array at the time this code renders
        // collectionRef.onSnapshot( async snapshot =>{
        //     // console.log(snapshot);
        //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
        //     console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({loading:false})
        // } );
        
        // //Amother way
        // collectionRef.get().then(
        //     snapshot =>{
        //         // console.log(snapshot);
        //         const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
        //         console.log(collectionsMap);
        //         updateCollections(collectionsMap);
        //         this.setState({loading:false})
        //     }
        // );
        
        // // //yet another way
        // const url = 'https://firestore.googleapis.com/v1/projects/crwn-db-c4a71/databases/(default)/documents/collection'
        // fetch(url)
        // .then(response => response.json())
        // .then(collections => console.log(collections));

    } 

    render() {
        const {match} = this.props;
        // const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                {/* <CollectionOverview/> */}
            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     isCollectionLoaded: selectIsCollectionLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
}) 

export default connect(null,mapDispatchToProps)(ShopPage);
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