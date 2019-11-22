import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview';
import './collections-overview.scss'

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	collections: Object.keys(state.shop.collections).map(key=> state.shop.collections[key])
})

export default connect(mapStateToProps)(CollectionsOverview);
