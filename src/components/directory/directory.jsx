import { render } from '@testing-library/react';
import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor() {
        super();
    
    this.state = {
       sections : [
           {
               title : 'handbags',
               imageUrl : 'https://img.buzzfeed.com/buzzfeed-static/static/2019-08/21/22/campaign_images/dcc19a023a72/30-handbags-that-look-way-more-expensive-than-the-2-5353-1566425218-0_dblbig.jpg?resize=1200:*',
               id : 1
           },
           {
            title : 'accessories',
            imageUrl : 'https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/130517740_1496335577239614_15966051253653561_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=RvGWfSE83vgAX_s5CAB&_nc_ht=scontent.flko7-1.fna&oh=b301e1c70bd0208d7e1a3dc50fd16338&oe=60C2E3CF',
            id : 2
           },
           {
            title : 'footwear',
            imageUrl : 'https://www.apetogentleman.com/wp-content/uploads/2019/01/best-chunky-sneakers-men.jpg',
            id : 3
           },
           {
            title : 'womens',
            imageUrl : 'https://www.geo.tv/assets/uploads/updates/2020-07-06/296528_5631001_updates.jpg',
            size : 'large',
            id : 4
           
           },
           {
            title : 'Mens',
            imageUrl : 'https://media.gq.com/photos/57aa22b9e24316960be637e1/4:3/w_2664,h_1998,c_limit/zayn-malik-gq-style-0816-06.jpg',
            size :'large',
            id : 5
            
           }

       ]
    };
  }


render() {
    return(
        <div className='directory-menu'>
        {
            this.state.sections.map( ({title,imageUrl,id,size}) => (
                < MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            )
          
          )
        }
    </div>
    )
   
}
}
export default Directory;