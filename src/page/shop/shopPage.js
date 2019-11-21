import React from 'react';
// import CollectionPreview from '../../components/collection-preview/collection-preview.js';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectShopCollections} from '../../redux/shop/shop-selector'
import CollectionsOverview from '../../components/collections-overview/collections-overview.js';
import {Route} from 'react-router-dom'
import Collection from '../collection/collection';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections:selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);
