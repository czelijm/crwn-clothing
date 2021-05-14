import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop = (state)=>state.shop;

export const selectCollection = createSelector(
    [selectShop],
    (shop) => shop.collection
);

export const selectCollectionForPreview = createSelector(
    [selectCollection],
    (collections) => collections ? Object.keys(collections).map(key=>collections[key]) : []
)

export const selectCollectionCategory = collectionUrlParam => createSelector(
    [selectCollection],
    collections => collections ? collections[collectionUrlParam] : null //.find(collection => collection.id===COLLECTION_ID_MAP[collectionUrlParam])
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collection
)