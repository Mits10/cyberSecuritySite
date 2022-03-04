import { Grid } from "@mui/material";
import './signUpNFT.css';
const SignUpNFT=()=>{
return(
    <>
    <div className='signUpNFTContainer'>
    <Grid container justifyContent='center'>
        <Grid item md={6}>
            <Grid item xs={12}>
                <div className='signUpImageContainer'>
                    <div className='signUpImageContainerA'></div>
                    <div className='signUpImageContainerB'></div>
                    <div className='signUpImageContainerC'></div>
                </div>
            </Grid>
        </Grid>
        <Grid item md={6}>
            <Grid item xs={12}>
                <div>
                <h2>CREATE AND SELL YOUR NFTS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer id tortor nisl. Mauris a egestas odio.
                Nulla posuere est id luctus pharetra.
                Etiam tincidunt sapien at orci viverra egestas.</p>
                <button>Sign Up Now</button>
                </div>
            </Grid>
        </Grid>
    </Grid>
    </div>
    </>
);
}
export default SignUpNFT;