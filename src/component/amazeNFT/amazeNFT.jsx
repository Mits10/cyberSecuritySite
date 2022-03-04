import { Grid } from "@mui/material";

const AmazeNFT =()=>{
return(
    <>
    <div className='wrapper'>
    <Grid container>
        <Grid item md={4}>
            <Grid item xs={12}>
                <h2>THE AMAZING NFT ART <br/>
                OF THE WORLD HERE</h2>
            </Grid>
        </Grid>
        <Grid item md={4}>
            <Grid item xs={12}>
                <h3>Fast Transaction</h3>
                <p>Suspendisse ac velit mauris.
                     Proin egestas aliquam nisl, vel tempor diam tincidunt vel.
                     Donec metus diam, hendrerit vitae ante et, tincidunt euismod massa.</p>
            </Grid>
        </Grid>
        <Grid item md={4}>
            <Grid item xs={12}>
                <h3>Growth Transaction</h3>
                <p>Nullam ornare quam sed maximus lacinia.
                    Ut pretium hendrerit scelerisque.
                    Cras sit amet lobortis turpis.
                    Nam rhoncus ligula odio, venenatis consequat nibh aliquam id.
                    Etiam egestas ligula vel orci volutpat vehicula.
                    </p>
            </Grid>
        </Grid>
    </Grid>
    </div>
    </>
);
}
export default AmazeNFT;