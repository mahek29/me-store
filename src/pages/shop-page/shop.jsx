import React from 'react';
import ShopData from './shopdata.js';
import CollectionPreview from '../../components/preview/collections.jsx';

class ShopPage extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            collections : ShopData
            
        }
    }
    render(){
      const {collections} = this.state;
      return (
        <div>{
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
        </div> 
      )
    }
}
export default ShopPage;