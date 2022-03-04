import { Grid } from "@mui/material";
import Container from '@mui/material/Container';
import './hero.css';
const Hero =()=>{
    return(
        <>
        <div className='hero'>
        
        <Grid container >
            <Grid item md={6}>
                <Grid item xs={12}>
                <div >
                    <div className='hero_1'>
                    <h2>DISCOVER, AND COLLECT <br/> DIGITAL
                     ART NFTS</h2>
                     <p>The world's First and largest digital marketplace
                    for <br/> crypto collectibles and non-fungible
                    tokens(NFTs).<br/>
                    Buy,sell, and discover exclusive digital items</p>
                    <button>Explore now</button>
                    </div>
                    <div className='hero_2'>
                    <div><h1>98k+</h1><h4>Artwork</h4></div>
                    <div><h1>12k+</h1><h4>Auction</h4></div>
                    <div><h1>15k+</h1><h4>Artist</h4></div>
                    </div>
                 </div>
                </Grid>
            </Grid>
            <Grid item md={6}>
                <Grid item xs={12}>
                <div className='splashP' >
                <div className='splash'>
                    <div className='splash1'>
                        <div className='txt_s'>
                        <h2>Abstr Gradient NFT</h2>
                        <h3>Arkhan17</h3>
                        </div>
                        <div className='txt'>
                            <li><span>Current Bid</span><span>Ends in</span></li>
                            <li><span>0.25ETH</span><span>12h 43m 42s</span></li>
                        </div> 
                    </div>
                    <div className='splash2'></div>
                    <div className='splash3'></div>
                </div>  
                </div>

                </Grid>
            </Grid>
        </Grid>
      
        </div>
        </>
    );
}
export default Hero;