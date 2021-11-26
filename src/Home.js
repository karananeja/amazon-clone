import React, { useState } from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/71vq-HPj+5L._SX3000_.jpg'
        />
        <div className='home__row'>
          {/* product */}
          <Product
            id='12321341'
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={1680}
            image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg'
            rating={5}
          />
          <Product
            id='23445930'
            title='Amazon Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal'
            price={3199}
            image='https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          {/* product */}
          <Product
            id='49538094'
            title='Inalsa Stand Mixer Kratos-1000W | 100% Pure Copper Motor| 5L SS Bowl| 8 Speed Control| Tilt Head| Includes Whisking Cone, Mixing Beater & Dough Hook| 2 Years Warranty, (Champagne)'
            price={9499}
            image='https://m.media-amazon.com/images/I/61oscgd0KXL._AC_UY218_.jpg'
            rating={4}
          />
          <Product
            id='90829332'
            title='LG 24 inch (60.45 cm) Gaming 4K UHD LED Monitor - 4K UHD, IPS Panel with HDMI, Display, Audio Out, Heaphone Ports - 24UD58 (Black)'
            price={25999}
            image='https://m.media-amazon.com/images/I/81cr9WX6jJL._AC_UY218_.jpg'
            rating={4}
          />
          <Product
            id='32543243'
            title='2020 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Green (4th Generation)'
            price={63900}
            image='https://m.media-amazon.com/images/I/71wm6xK34sL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          {/* product */}
          <Product
            id='4903850'
            title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
            price={159000}
            image='https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
