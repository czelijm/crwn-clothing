import {compose} from 'redux'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching, // the name must be matching with name in WithSpinner
});

//compose from right to left
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
