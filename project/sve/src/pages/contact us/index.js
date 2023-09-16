import { Grid } from "@mui/material";
import Formcomponent from "../../components/Formcomponent";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Contactus(){
  return(
    <>
    <div style={{alignItems:"centre",display:"flex",justifyContent:"center",marginTop:"5px"}}>
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1683726977~exp=1683727577~hmac=9893196b239ec6fcceaf168e2acd2092f515124eb5b133d859a87fd54c6e02cd"
          width="700px"
          height="700px"
          />
          </div>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
    <Typography variant='h4'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(156, 39, 176)",fontsize:"2.125rem"}} >
    Connect     
     </Typography>
     <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Roboto, Helvetica, Arial, sans-serif", color:"orangered",fontsize:" 1.5rem", fontWeight:"700  "}} >
    
      Sri Venkateswara Enterprises   
     </Typography>
     <Typography sx={{textAlign:"center"}}>
           <CallIcon/>
            </Typography>
     <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(46, 125, 50)",fontsize:"rgb(46, 125, 50)"}} >
     Call Us  
     </Typography>
     <Typography variant='body1'  sx={{ textAlign:"center", fontFamily:"Roboto, Helvetica, Arial, sans-serif", color:"black",fontsize:"1rem"}} >
     +919849044476    
     </Typography>
     <Typography sx={{textAlign:"center"}}>
            <EmailIcon/>
            </Typography>
     <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(46, 125, 50)",fontsize:"rgb(46, 125, 50)"}} >
     Email     
     </Typography>
     <Typography variant='body1'  sx={{ textAlign:"center", fontFamily:"Roboto, Helvetica, Arial, sans-serif", color:"black",fontsize:"1rem"}} >
     enquiry@sve.enterprises  
     </Typography>
     <Typography sx={{textAlign:"center"}}>
            <LocationOnIcon/>
            </Typography>
            <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgb(46, 125, 50)",fontsize:"rgb(46, 125, 50)"}} >
            Regd. Office     
     </Typography>
     <Typography variant='body1'  sx={{ textAlign:"center", fontFamily:"Roboto, Helvetica, Arial, sans-serif", color:"black",fontsize:"1rem"}} >
     12-1-508/89/5, Laxminagar, North Lallaguda, Hyderabad, Telangana - 500017, India   
     </Typography>
      </Grid>
<Grid item xs={6}>



    <Formcomponent/>
    </Grid>
     </Grid>
    </>
  )
}