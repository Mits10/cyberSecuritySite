import React,{useState} from 'react';
import collectionA from './../../assets/images/4.png';
import collectionB from './../../assets/images/10.png';
import collectionC from './../../assets/images/8.png';
import collectionD from './../../assets/images/9.png';
import collectionE from './../../assets/images/3.png';
import collectionF from './../../assets/images/11.png';
import collectionG from './../../assets/images/12.png';
import collectionH from './../../assets/images/13.png';
import collectionI from './../../assets/images/6.png';
import { Grid } from '@mui/material';
import './collectionNFT.css';
const CollectionNFT=()=>{
    const [collections,setCollection]=useState([
        {
            id:1,
            title:'Amazing Collection',
            author: 'Arkan',
            imgA: collectionA,
            imgB: collectionB,
            imgC: collectionC,
            imgD: collectionD
        },
        {
            id:1,
            title:'Amazing Collection',
            author: 'Arkan',
            imgA: collectionE,
            imgB: collectionC,
            imgC: collectionB,
            imgD: collectionF
        },
        {
            id:1,
            title:'Amazing Collection',
            author: 'Arkan',
            imgA: collectionI,
            imgB: collectionH,
            imgC: collectionG,
            imgD: collectionB
        }
    ]);
    return(
        <>
        <h2>COLLECTION FEATURED NFTS</h2>
        <Grid container spacing={2}>
            {collections.map((collection)=>{
                return(
                <Grid item md={4}>
                    <Grid item xs={12}>
                    <div>
                       <div className='grid-container'>
                            <div className='item1'><img src={collection.imgA} alt=""/></div>
                            <div className='item2'><img src={collection.imgB} alt="" /></div>
                            <div className='item2'><img src={collection.imgC} alt=""/></div>
                            <div className='item2'><img src={collection.imgD} alt=""/></div>
                        </div>
                        <div className='innerCollectionContainer'>
                            <div>
                                <h3>{collection.title}</h3>
                                <h3>by {collection.author}</h3>
                            </div>
                            <div className='collectionNFTButton'>
                                <button> Total 54 items</button>
                            </div>
                        </div>
                        </div>
                    </Grid>
                </Grid>
                )
            })}
        </Grid>
        </>
    );
}
export default CollectionNFT;