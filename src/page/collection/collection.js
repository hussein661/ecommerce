import React from 'react';
import './collection.scss'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop-selector'
// import collectionItem from '../../components/collection-item/collection-item';

const Collection = ({collection}) => {
    console.log(collection)
    return (
        <div className='collection'>
            <h2>categort page</h2>
        </div>
    );
};

const mapStateToProps = (state,ownProps) =>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);