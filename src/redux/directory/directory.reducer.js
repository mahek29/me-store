const INITIAL_STATE ={
    sections : [
        {
            title : 'hats',
            imageUrl : 'https://external-preview.redd.it/ejsHl2LoJV2AkePgnchmtzhDdRkoQB6MAKqTnww_lvs.png?auto=webp&s=2e4b46835061fa0c66f66368c6cbb73aca6c0602',
            id : 1,
            linkUrl: 'shop/hats'
        },
        {
         title : 'sneakers',
         imageUrl : 'https://i.insider.com/5b71921c959f341c008b4efe?width=1200&format=jpeg',
         id : 2,
         linkUrl: 'shop/sneakers'
        },
        {
         title : 'jackets',
         imageUrl : 'https://c4.wallpaperflare.com/wallpaper/250/784/45/ian-somerhalder-men-s-black-and-green-leather-double-rider-jacket-and-brown-crew-neck-shirt-wallpaper-preview.jpg',
         id : 3,
         linkUrl : 'shop/jackets'
        },
        {
         title : 'womens',
         imageUrl : 'https://www.geo.tv/assets/uploads/updates/2020-07-06/296528_5631001_updates.jpg',
         size : 'large',
         id : 4,
         linkUrl:'shop/womens'
        
        },
        {
         title : 'mens',
         imageUrl : 'https://media.gq.com/photos/57aa22b9e24316960be637e1/4:3/w_2664,h_1998,c_limit/zayn-malik-gq-style-0816-06.jpg',
         size :'large',
         id : 5,
         linkUrl: 'shop/mens'
         
        }

    ]
};

const directoryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type)
    {
        default:
            return state;
    }
};

export default directoryReducer;