import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Cardcomponent from "../../components/Cardcomponent";

export default function BasicAccordion() {
  return (
    <div>
        <Typography variant='h4' sx={{color:"orangered", fontFamily:"Raleway", textAlign:"center"}}>
        Our Wide Range of Product Categories
        </Typography>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:2}}>
    <Grid item xs={2}>
    
  </Grid>
    <Grid item xs={8}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Safety & PPE Supplies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/05/82/22/72/240_F_582227263_3e6aG2CwHm53ShqywUAhpMf8FZhO7fLS.jpg"
     heading="Saftey Shoes"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/05/90/74/90/240_F_590749025_nkEOqP1l6EvjyQZhDnduUw1NnTAtsUss.jpg"
     heading="Saftey Helmet"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://as2.ftcdn.net/v2/jpg/03/51/52/61/1000_F_351526174_EJSazJjyd12klMvuOc6ZkTqpmnvN0Na4.jpg"
     heading="Fall Protection"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/05/61/53/76/240_F_561537683_UvnOaE3F3ugsaxCjpYBaGouI2SMLoGvi.jpg"
     heading="Saftey Gloves"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/04/10/32/14/240_F_410321402_uu46OX2pCBhmtC1Lsy4qjZS5x5rw06Lk.jpg"
     heading="Saftey Signs & signals"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Industrial Tools & Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/02/90/34/69/240_F_290346916_8os97QFBEY9xtmeIiTt7xIrtUTXbmiql.jpg"
     heading="Power Tools"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
     heading="Hand Tools"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
     heading="Welding"
        />als
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/03/97/70/71/240_F_397707191_4BowDKeoRINhbK6h8UhIzox8YAHiC2c6.jpg"
     heading="Material Handling"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Electrical Tools & Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
     heading="Pumps & Motors"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/01/52/77/05/240_F_152770580_QB4k26Zk5zQQCtFPbJ92JM3AyOsuuIOB.jpg"
     heading="LED & Lighting"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://www.sve.enterprises/static/media/it.85adb7e9bc7816eb913a.jpg"
     heading="Electrical Insturments"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Office Stationery & Supplies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
     heading="General Stationery"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/04/40/07/32/240_F_440073209_G5zCsw04ViEwTwapmeMjendrNaqGODTU.jpg"
     heading="Office Furniture & Motors"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/00/86/09/02/240_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
     heading="Security"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Building & Construction Supplies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/01/99/81/09/240_F_199810981_ASJTsuwwKNLwArWdzLbHUe4YDUCJRKFS.jpg"
     heading="Plumbling & Bathroom Fittings"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
     heading="Hardware"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/00/81/88/78/240_F_81887818_ipbvkxdwi0ZumGjLbscOipfLs0FlaPp9.jpg"
     heading="Painting & Coatings"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Measurment & Testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/03/88/50/61/240_F_388506139_xOgN8Etv2okLytpSjp8AG16wQIRLVwfJ.jpg"
     heading="Weighing Scales"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/05/93/43/95/240_F_593439577_ntzSLYgXENQT7mfEK4m8fwBU9H1fkNLk.jpg"
     heading="Measuring Precision Tools"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/01/94/70/52/240_F_194705222_TEponA3UPJkqYHFfk3VI99roL7we5k1P.jpg"
     heading="Water Meters"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Oils& Lubricants</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
     heading="Industrial Oils"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/03/63/79/56/240_F_363795677_aWyGg1hxUw7HUFKCJM7YfqSVT83HHlBi.jpg"
     heading="Industrial Greases"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Reagents & Catalysts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
     heading="Industrial Chemicals"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/05/48/54/87/240_F_548548708_hodxOSmnKLEyMckHXbJcm7WeSR1GAlUu.jpg"
     heading="Industrial Acids"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://as1.ftcdn.net/v2/jpg/02/39/02/36/1000_F_239023615_XQirlmSPCqr0LcouLgcs57ccNGHm2fuP.jpg"
     heading="Industrial Solvents"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/04/17/30/44/240_F_417304464_PDWZc6Wu5ftgH5Qh0vCHhg2vfKe5LHHb.jpg"
     heading="Food chemicals"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Iron & Steel Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/02/91/80/10/240_F_291801030_Ru6TBwFwoPmCwbpms7beFrcNFg2e0dzH.jpg"
     heading="All types of sheets"
        />
        </Grid>
          <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/01/38/96/20/240_F_138962090_kfVaHPPDVzyr74nHjp5F5ziBm7cTssSS.jpg"
     heading="All types of Rods"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
     heading="All types of Pipes & Fittings"
        />
        </Grid>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
     heading="MS Structural Steel"
        />
        </Grid>
        </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item xs={2}>
    
    </Grid>
      </Grid>
      {/* <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5, textDecoration:'1'}}>
    <Grid item xs={0.8}>
  </Grid>
     <footer>
        <p> Copy right &copy; <a href = 'www.google.com'>Sri Venkateswara Enterprises </a> {new Date().getFullYear()} </p>
        </footer>
        <Grid item xs={4.8}>
  </Grid>
     <footer>
        <p> Powered By &copy; <a href = 'www.google.com'>6i cube Techno Consultants Pvt.Ltd </a> {new Date().getFullYear()} </p>
        </footer>
      </Grid>
    </div>
    */}
   </div>
  );
  }