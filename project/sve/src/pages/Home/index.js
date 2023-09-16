import { Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Cardcomponent from "../../components/Cardcomponent";
import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';

import { NavLink } from 'react-router-dom'
import SuperCard from "../../components/SuperCard";
import Dynamiccard from "../../components/Dynamiccard";

export default function Home(){

   const heroStyle = {
      minHeight: '100vh',
      // marginLeft: '10px',
      // marginTop: '30px',
      backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-digital-low-poly-connection-banner-design_1017-32434.jpg?w=1380&t=st=1683438889~exp=1683439489~hmac=699e1a300b6a9b8e68578f96475c34a4a3c4c0aeb67ffbea64490330022b1a81)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

  };

  const heroTextStyle = {
      color: 'white',
      textAlign: 'center',
  };

  const actionButtonStyle = {
      margin: '16px',
  };
    return(
        <>
        <div>
           <Grid container style={heroStyle}>
               <Grid item xs={12}>
                   <div style={heroTextStyle}>
                       <Typography variant="h3"
                           sx={{ color: "White", fontFamily: "raleway", marginBottom: "10px" }}
                       >Welcome to Sri Venkateswara Enterprises
                       </Typography>
                       <Typography variant="h6" color="lightcyan" fontFamily="raleway">We offer a wide range of Products & Services for all your Business Needs</Typography>
                       <NavLink to="/Contact Us">
                       <Button variant="contained" color="success" style={actionButtonStyle}>
                       
                           Contact Us
                          
                       </Button>
                       </NavLink>
                   </div>
               </Grid>
           </Grid>
       </div>
       
       <SuperCard/>
          
        <Typography variant='h4' sx={{color:"orangered", fontFamily:"Raleway", textAlign:"center"}}>
            Our Products and Services
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:3}}>
          <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
     heading="hand tools"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
     heading="Fabrications & welding"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/04/16/23/60/240_F_416236080_iUvBR5Z3rpYoCF0SPQF9Tk41uXIDcn8B.jpg"
     heading="Bearings and power Transmission"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/00/82/26/31/240_F_82263145_ileEZAdzH62kC1heFapQmfbO7azXBbxj.jpg"
     heading="Hydraulics"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
     heading="All types of pipes and fittings"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
     heading="MS Sturcutre steel"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
     heading="Industrial Chemicals"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
     heading="Industrial lubricants"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
     heading="General stationary"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/00/86/09/02/240_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
     heading="Security"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
     heading="Pumps & Motors"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
     heading="Hardware"
        />
        </Grid>
        </Grid>
<Dynamiccard/>
        </>
    )
} 