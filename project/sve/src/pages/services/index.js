import Grid from '@mui/material/Grid';
import Cardcomponent from "../../components/Cardcomponent";
import { Typography } from '@mui/material';

export default function Services(){
    return(
        <>
        {/* <div sx={{mt:2}}>
          <img  sx={{ alignItems:'center',display:'flex', justifycontent:"center"}}
          src="https://img.freepik.com/premium-vector/teamwork-finding-new-ideas-little-people-launch-mechanism-search-new-solutions-vector_566886-659.jpg?size=626&ext=jpg&ga=GA1.1.206460874.1683438467&semt=sph"
          width="600px"
          height="600px"
          alt="Not Found"
          />
          </div> */}


          <div style={{alignItems:"center",display:"flex", justifyContent:"center", marginTop:"5px"}}>
            <img 
            src="https://img.freepik.com/premium-vector/teamwork-finding-new-ideas-little-people-launch-mechanism-search-new-solutions-vector_566886-659.jpg?size=626&ext=jpg&ga=GA1.1.206460874.1683438467&semt=sph"
            width="700px"
            height="700px"
            />
          </div>
        <Typography variant='h4' sx={{color:"rgb(46, 139, 87)", fontFamily:"Raleway", textAlign:"center"}}>We offer a Wide range of Spares & services for</Typography>
        <Typography variant='h6' sx={{color:"slateblue", fontFamily:"Raleway", textAlign:"center"}}>Beverage, Liquor & Spirits, Beer, Food and Pharmaceutical Industries</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:2}}>
        <Grid item xs={4}>
        <Cardcomponent 
     image="https://i.ibb.co/RHqY4Cc/Tunnel-Rinsing.jpg"
     heading="Tunnel Rinsing Machine"
     description="In this machine the bottles are manually loaded into the pockets of tunnels and then the cleaning media is sprayed inside the inverted bottle in three stages and then the cleaned bottles are manually unloaded from the pockets of the machine."
        />
        </Grid>
        <Grid item xs={4}>
          <Cardcomponent 
     image="https://i.ibb.co/C70kN4z/Filling-Machine.jpg"
     heading="Filling Machine"
     description="In this machine, the tip of the nozzle has two passages. From one of the passage, the product comes out and from the other one the air is vented out. This filling is best suited where the level of the product is maintained in the bottle."
        />
       </Grid>
       <Grid item xs={4}>
          <Cardcomponent 
     image="https://i.ibb.co/YcrrjtY/Cap-Sealing-Machine.png"
     heading="Cap Sealing Machine"
     description="These cappers are suitable for plastic screw caps. In these the caps are placed on the bottle and then rotated so that the cap screws onto threads on the neck of a bottle. These capping heads are suitable for guala caps that are specially designed luxury caps for spirits."

        />
       </Grid>
       <Grid item xs={4}>
          <Cardcomponent 
     image="https://i.ibb.co/5kv6CZc/Sticker-Labelling-Machine.jpg"
     heading="Sticker Labling Machine"
     description="These are in-line sticker labelling machines for front, back and wrap around labels using the best label dispensers. The various kinds of peel systems allow placing of labels on assorted shapes of bottles without any bubbles or wrinkles."

        />
        </Grid>
       <Grid item xs={4}>
          <Cardcomponent 
     image="https://i.ibb.co/x74KTdV/Pick-and-place.png"
     heading="Pick & Placing Machine"
     description="These machines are designed and manufactured to pick-up finished bottles from conveyor with the help of bellow heads and drop& place the finished product in carton. The operation begins with the feeding of finished bottles through slot conveyor."
        />
        </Grid>
       <Grid item xs={4}>
          <Cardcomponent 
     image="https://i.ibb.co/V3cHzc2/Carton-Sealing-Machine.jpg"
     heading="Carton Sealer Machine"
     description="The cartons leaving the carton erector pass through the tape application head in a carton sealer which puts tape on one side of the open cartons and closes it to form a one-sided open carton which is then fed into the case packer for further operation."
        />
        </Grid>
        </Grid>
       {/* <div>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5, textDecoration:'1'}}>
     <Grid item xs={0.8}>
   </Grid>
      <footer>
         <p> Copyright &copy; <a href='www.google.com'>Sri Venkateswara Enterprises </a> {new Date().getFullYear()} </p>
       </footer>

       <Grid item xs={4.8}>
   </Grid>
      <footer>
         <p> Powered by &copy; <a href='www.google.com'>6iCube Techno Consultants Pvt.Ltd.  </a> {new Date().getFullYear()} </p>
       
       </footer>
       </Grid>
      </div> */}
        </>
    )
}