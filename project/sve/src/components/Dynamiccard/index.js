import {Grid, Typography} from '@mui/material'
import { grey } from '@mui/material/colors'


export default function (){{
    return(
        <>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:10, mb:10}}>
       <Grid item xs={1}>
       </Grid>
        <Grid item xs={3} sx={{border:1, borderRadius:5}}>
       
       <Typography variant='h3'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black", fontSize:"24px"}} >
       T Satish Babu
         </Typography>
       <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.6)", fontSize:"24px"}} >
       Manager - Maintenance & Production
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black"}} >
         "I am very satisfied with the service provided by this company. The team was very professional and responsive to my needs."
         </Typography>
  </Grid>
  <Grid item xs={0.5}>
       </Grid>
  <Grid item xs={3} sx={{border:1, borderRadius:5}}>


 
  <Typography variant='h3'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black", fontSize:"24px"}} >
  Vrushali Pol 
         </Typography>
  <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.6)", fontSize:"24px"}} >
  Manager - Enterprise Sales
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black"}} >
        
"I have been a customer of this company for several years now and I have always been impressed with their pompt reply, commited work & good with market price."
         </Typography>
         </Grid>
         <Grid item xs={0.5}>
       </Grid>
         <Grid item xs={3} sx={{border:1, borderRadius:5}}>


  <Typography variant='h3'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black", fontSize:"24px"}} >
  J Praven Kumar Reddy
         </Typography>
  
  <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.6)", fontSize:"24px"}} >
  Junior Engineer - Mechanical
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black"}} >
         

"The firm so supportive, creative and spontaneous to work. They support us 24/7, even in odd times and their creativeness is so amazing. Thanks for the support."
         </Typography>
         </Grid>


         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:10, mb:10}}>
         <Grid item xs={3}>
       </Grid>
         <Grid item xs={3} sx={{border:1, borderRadius:5, borderBlockColor:grey}}>

 <Typography variant='h3'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black", fontSize:"24px"}} >
 Subramanian Viswanathan
        </Typography>
 
 <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.6)", fontSize:"24px"}} >
 Production Manager
        </Typography>
        <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black"}} >
        "I have been a client to this firm from a long time. Almost all products & services will be available at very reasonable prices."
        </Typography>
        </Grid>
        <Grid item xs={0.5}>
       </Grid>

        <Grid item xs={3} sx={{border:1, borderRadius:5}}>

 <Typography variant='h3'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black", fontSize:"24px"}} >
 G Shivanand Basavaraj
        </Typography>
 
 <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.6)", fontSize:"24px"}} >
 Manager - Purchase
        </Typography>
        <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"Black"}} >
"The team over there has always been proactive in answering us & maintaining a good relation with us. Thanks for the services."
        </Typography>
        </Grid>
        
        </Grid>
         </Grid>
        
        </>
    )
}}