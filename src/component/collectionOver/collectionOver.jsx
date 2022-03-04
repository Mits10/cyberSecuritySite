import { Grid } from "@mui/material";
import React,{useState} from 'react';
import './collectionOver.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cv1 from './../../assets/images/4.png';
import cv2 from './../../assets/images/5.png';
import cv3 from './../../assets/images/6.png';
import cv4 from './../../assets/images/7.png';
import tco1 from './../../assets/images/14.png';
import tco2 from './../../assets/images/15.png';
import tco3 from './../../assets/images/16.png';
import tco4 from './../../assets/images/17.png';
import tco5 from './../../assets/images/18.png';
const CollectionOver=()=>{
    const items1=
        {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv1 
         }
    
    const [items2,setItem2]=useState([

        {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv2
         },
         {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv3
         },
         {
            id:1,
            title: 'The Futr Abstr',
            quantity: '1 0f 8',
            status: 'Place a bid',
            img: cv4
         }
    ])
    const topCollectionsItem =[
        {
            id:1,
            title: 'CryptoFunks',
            quantity: '10769.39',
            status: '+26.52%',
            img: tco1
        },
        {
            id:2,
            title: 'CryptoFunks',
            quantity: '10769.39',
            status: '+26.52%',
            img: tco2
        },
        {
            id:3,
            title: 'CryptoFunks',
            quantity: '10769.39',
            status: '+26.52%',
            img: tco3
        },
        {
            id:4,
            title: 'CryptoFunks',
            quantity: '10769.39',
            status: '+26.52%',
            img: tco4
        },
        {
            id:5,
            title: 'CryptoFunks',
            quantity: '10769.39',
            status: '+26.52%',
            img: tco5
        }
    ]
    return(
    <Grid container >
        <Grid item container md={4}>
            <Grid item xs={12}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                    </Avatar>
                }
                title={items1.title}
                subheader={items1.quantity}
                />
                <CardMedia
                component="img"
                height="194"
                image={items1.img}
                alt="Paella dish"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {items1.status}
                </Typography>
                </CardContent>
                
                              
                            </Card>
            </Grid>
        </Grid>
        <Grid item container md={4}>
            <Grid item xs={12}>
            
            <ul>
            {items2.map((item)=>{
                return(
                    
                        <li> <div className='secondaryCollectionContainer'>
                            <div><img src={item.img} alt=""/></div>
                            <div className='innerContainer'>
                                <h2>{item.title}</h2>
                                <div className='innerContainerA'>
                                <div><Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar></div>
                                <div><button> <h3>0.25 ETH</h3></button></div>
                                <div><h4>{item.quantity}</h4></div>
                                </div>
                                <button className='primary'>{item.status}</button>     
                            </div>
                            </div> </li>  
                    
                )
                            })}</ul>
                            
            </Grid>
        </Grid>
        <Grid item container md={4}>
            <Grid item xs={12}>
            <div>
                <h2>TOP COLLECTIONS OVER</h2>
                <h3>Last 7 Days</h3>
                <ul>
                    {topCollectionsItem.map((item)=>{
                    return(
                    <li><div className='thirdCollectionContainer'>
                        <h2>{item.id}</h2>
                        <div><img src={item.img} alt=""/></div>
                        <div><h3>{item.title}</h3><h4>{item.quantity}</h4></div>
                        <div><h2>{item.status}</h2></div>
                        
                    </div></li>)})}
                </ul>
            </div>
            </Grid>
        </Grid>
    </Grid>
    );
}
export default CollectionOver;