import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Grid, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

export default function SuperCard(){
    return(
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:10, mb:10}}>
        <Grid item xs={1}>
            </Grid>

        <Grid item xs={3} sx={{border:1, borderRadius:7}}>

        <Typography variant='h5' sx={{textAlign:'center', color:"rgb(25,118,210)", fontFamily:"Raleway"}}>
            
        <BusinessCenterIcon/>
        </Typography>
        

        <Typography sx={{color:'rgb(46, 139, 87)', fontSize:'24px', textAlign:'center'}}>25+</Typography>
        <Typography variant='h5' sx={{textAlign:'center', color:"rgb(25,118,210)", fontFamily:"Raleway"}}>
            Years of Experience</Typography>
        </Grid>
        <Grid item xs={0.5}
        ></Grid>
        <Grid item xs={3} sx={{border:1, borderRadius:7}}>
        <Typography variant='h5' sx={{textAlign:'center', color:"rgb(25,118,210)", fontFamily:"Raleway"}}>
       <GroupIcon/>
       </Typography>
        <Typography  sx={{color:'rgb(46, 139, 87)', fontSize:'24px', textAlign:'center'}}>55+</Typography>
        <Typography variant='h5' sx={{textAlign:'center',  color:"rgb(25,118,210)",  fontFamily:'Raleway'}}>Valuebale Happy Clients across India </Typography>
        </Grid>
        <Grid item xs={0.5}
        ></Grid>
        <Grid item xs={3} sx={{border:1, borderRadius:7}}>
        <Typography variant='h5' sx={{textAlign:'center', color:"rgb(25,118,210)", fontFamily:"Raleway"}}>
      <BusinessCenterIcon/>
       </Typography>
        <Typography  sx={{color:'rgb(46, 139, 87)', fontSize:'24px', textAlign:'center'}}>Wide Range of Products</Typography>
        <Typography variant='h5' sx={{textAlign:'center', color:"rgb(25,118,210)", fontFamily:"Raleway"}}>You Name it, We Supply it</Typography>
        </Grid>
       
        </Grid>
        </>
    )
}