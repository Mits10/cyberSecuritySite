import Header from "./header/header";
import Hero from "./hero/hero";
import Product from "./product/product";
import Footer from "./footer/footer";
import AmazeNFT from "./amazeNFT/amazeNFT";
import CollectionOver from "./collectionOver/collectionOver";
import './style.css'
import CollectionNFT from "./collectionNFT/collectionNFT";
import SignUpNFT from "./signUpNFT/signUpNFT";

const Home=()=>{
    return(
    <>
        <Header/>
        <Hero/>
        <div className='amazeNFT'><AmazeNFT/></div>
        <div className='collectionOver'><CollectionOver/></div>
        <div className='amazeNFT'><CollectionNFT/></div>
        <div className='collectionOver'><SignUpNFT/></div>
        <div className='amazeNFT'><Product/></div>
        
        <div className='collectionOver'><Footer/></div>
       
    </>
    );
}
export default Home;