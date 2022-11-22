import React from 'react';
import './Home.css';
import Product from '../Product/Product';

export default function Home() {
    return (
        <div className="home">
            
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />
            

            <div className="home__row">
                <Product id="121314" 
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                price={19.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                rating={5} />
                

                <Product id="121315" 
                title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included" 
                price={8.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/71jiGaztijL._AC_SX679_.jpg"
                rating={5} />

                </div>

                <div className="home__row">
                <Product 
                id="121316"
                title="Kenwood kMix Stand Mixer for Baking , Stylis Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre 
                Lass Bowl"
                price={199.9}
                image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
                rating={4}
                />
                

                <Product 
                id="121317"
                title="Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5"
                price={199.9}
                image="https://images-na.ssl-images-amazon.com/images/I/41yVqjvkLcL._AC_.jpg"
                rating={4}
                />

<Product 
                id="121318"
                title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                
                price={15.25}
                image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
                rating={5}
                />


                    </div>

            <div className="home__row">
            <Product 
                id="121319"
                title="Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor"
                price={250.9}
                image="https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SL1500_.jpg"
                rating={4}
                />                
                </div>
        </div>
        </div>
    )
}
