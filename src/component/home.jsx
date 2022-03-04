import React,{useEffect} from 'react';
import Header from "./header/header";
import Hero from "./hero/hero";
import Product from "./product/product";
import Footer from "./footer/footer";
import AmazeNFT from "./amazeNFT/amazeNFT";
import CollectionOver from "./collectionOver/collectionOver";
import './style.css'
import CollectionNFT from "./collectionNFT/collectionNFT";
import SignUpNFT from "./signUpNFT/signUpNFT";
import Aos from 'aos';
import "aos/dist/aos.css";

const Home=()=>{

   useEffect(() => {
       Aos.init({ duration: 2000});
   }, []) 
    return(
    <>
        <Header/>
        <div className='home'>
        <div data-aos='fade-up' className='collectionOver'><Hero/></div>
        <div data-aos='fade-up' className='amazeNFT'><AmazeNFT/></div>
        <div data-aos='fade-up' className='collectionOver'><CollectionOver/></div>
        <div data-aos='fade-up' className='amazeNFT'><CollectionNFT/></div>
        <div data-aos='fade-up' className='collectionOver'><SignUpNFT/></div>
        <div data-aos='fade-up' className='amazeNFT'><Product/></div>
        
        <div data-aos='fade-up' className='collectionOver'><Footer/></div>
        </div>
    </>
    );
}
export default Home;