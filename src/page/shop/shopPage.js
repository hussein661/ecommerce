import React, { Component } from 'react';
import SHOP_DATA from './shopdata.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.js';

class ShopPage extends Component {
    state = {
        collections:SHOP_DATA
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {collections.map(({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;

