import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function AboutUs(){
    return(
        <>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {/* <Grid item xs={4}>
       Founded in 1986 by Shri Sama Ravinder Reddy with a vision to build a leading enterprise in industrial and commercial supplies, SVE has relentlessly risen to glory with its steadfast focus on achieving customer delight through excellence, innovation and agility. The company takes pride in its unwavering commitment to on-time delivery, happieness and satisfaction of its customer.
     </Grid>

     <Grid item xs={6}>
     <img
          src="https://img.freepik.com/free-vector/sentiment-analysis-concept-illustration_114360-5182.jpg?w=740&t=st=1683612118~exp=1683612718~hmac=f48fa6779df6f7b1d4005529bd34d284e298ac57853d9e5fe11849fa7f220b0c"
          width="300px"
          height="300px"
          />
  </Grid> */}

  {/* <Grid item xs={6}>
     <img
          src="https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?1&w=740&t=st=1683450898~exp=1683451498~hmac=fd3e1726354cb01e6f6db68f7e01cc067cafffab038909cdf0946fa2a3e14ba5"
          width="300px"
          height="300px"
          />
  </Grid>

  <Grid item xs={4}>
  To exceed expectations by offering the best service, a strong bond of confidence to our clients and maintaining a continuous level of growth by supplying products as per customer requirements and specifications. Committed to total customer satisfaction and trust in business for the speedy and prompt delivery, 24 hours a day and 365 days a year.
  </Grid>

  <Grid item xs={4}>
  Sri Venkateswara Enterprises sole purpose is to deliver Industrial Products and its allied services to buyers at their doorstep by using Innovative technology and resources to qualify as a preferred supplier. We aspire that our customers have delightful experience and always aim to achieve high level of customer satisfaction in everyting we offer. Our main aim and goal is to cater to the needs of our clients by providing them with superior quality products at competitive and economical prices.
  </Grid>

  <Grid item xs={6}>
      <img
          src="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?w=740&t=st=1683611693~exp=1683612293~hmac=7683e601677269eb3495871ebc3a002c3b9277e6f062c7f3b13b7d4fee2431ab"
          width="300px"
          height="300px"
          />
  </Grid> */}

  {/* <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:5, textDecoration:'1'}}>
    <Grid item xs={0.8}>
  </Grid>
     <footer>
        <p> Copyright &copy; <a href='www.google.com'>Sri Venkateswara Enterprises </a> {new Date().getFullYear()} </p>
      </footer>

      <Grid item xs={2.8}>
  </Grid>
     <footer>
        <p> Powered by &copy; <a href='www.google.com'>6iCube Techno Consultants Pvt.Ltd.  </a> {new Date().getFullYear()} </p>
       
      </footer>
      </Grid>
      </div> */}


       </Grid>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2, alignContent: "centre" }} alignItems="center"
        justifyContent="center"
        style={{ minHeight: '65vh' }}>
        <Grid xs={2} sm={2} md={2}>

        </Grid>

        <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
          <Typography variant='h5'
            color='orange'
            fontFamily='Raleway'
            sx={{}}>
            Overview
          </Typography>

          <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
            Founded in 1986 by Shri Sama Ravinder Reddy with a vision to build a leading enterprise in industrial and commercial supplies, SVE has relentlessly risen to glory with its steadfast focus on achieving customer delight through excellence, innovation and agility. The company takes pride in its unwavering commitment to on-time delivery, happieness and satisfaction of its customer.
          </Typography>
        </Grid>

        <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", mt:4}}>
          <img class="photon" src="https://img.freepik.com/free-vector/sentiment-analysis-concept-illustration_114360-5182.jpg?w=740&t=st=1683612118~exp=1683612718~hmac=f48fa6779df6f7b1d4005529bd34d284e298ac57853d9e5fe11849fa7f220b0c" 
          height="400px"
          width="400px"
          alt="sve" />
        </Grid>
        
        <Grid xs={2} sm={2} md={2}>

        </Grid>


        <Grid xs={2} sm={2} md={2}>

</Grid>

<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  <img class="photon" src="https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?1&w=740&t=st=1683450898~exp=1683451498~hmac=fd3e1726354cb01e6f6db68f7e01cc067cafffab038909cdf0946fa2a3e14ba5" 
  height="400px"
  width="400px"
  alt="sve" />
</Grid>

<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  <Typography variant='h5'
    color='orange'
    fontFamily='Raleway'
    sx={{}}>
    Our Mission
  </Typography>

  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
  To exceed expectations by offering the best service, a strong bond of confidence to our clients and maintaining a continuous level of growth by supplying products as per customer requirements and specifications. Committed to total customer satisfaction and trust in business for the speedy and prompt delivery, 24 hours a day and 365 days a year.
  </Typography>
</Grid>

<Grid xs={2} sm={2} md={2}>

</Grid>

<Grid xs={2} sm={2} md={2}>

</Grid>

<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  <Typography variant='h5'
    color='orange'
    fontFamily='Raleway'
    sx={{}}>
    Our Vision & Purpose
  </Typography>

  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
  Sri Venkateswara Enterprises sole purpose is to deliver Industrial Products and its allied services to buyers at their doorstep by using Innovative technology and resources to qualify as a preferred supplier. We aspire that our customers have delightful experience and always aim to achieve high level of customer satisfaction in everyting we offer. Our main aim and goal is to cater to the needs of our clients by providing them with superior quality products at competitive and economical prices.
  </Typography>
</Grid>

<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  <img class="photon" src="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?w=740&t=st=1683611693~exp=1683612293~hmac=7683e601677269eb3495871ebc3a002c3b9277e6f062c7f3b13b7d4fee2431ab" 
  width="400px"
  height="400px"
  alt="sve" />
</Grid>

<Grid xs={2} sm={2} md={2}>

</Grid>

<Grid xs={2} sm={2} md={2}>

</Grid>

<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  <img class="photon" src="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?w=740&t=st=1683611630~exp=1683612230~hmac=a1c944d0103e216402d4c8aa45026aa132e410cfaa6699bc915a2c4ec8cd4132" alt="sve"
  height="400px"
  width="400px" />
</Grid>

<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  <Typography variant='h5'
    color='orange'
    fontFamily='Raleway'
    sx={{}}>
    Core Values
  </Typography>

  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
  <b>Passionate:</b> Passionate about providing quality grade products to our clients.<br/> <b>Excellence:</b> To strive relentlessly, and expand our abilities to become the best in the industry.<br/><b>Integrity:</b> Embrace business integrity as an essential component in the way we conduct our business.<br/><b>Customer Satisfaction:</b> Delivering exceptional experience to customers by providing high quality services.<br/><b>Commitment:</b> Commitment to our customers by providing best quality products & services and act with professionalism in all deeds and interactions.
  </Typography>
</Grid>

<Grid xs={2} sm={2} md={2}>

</Grid>


<Grid xs={2} sm={2} md={2}>

        </Grid>

        <Grid xs={3} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
          <Typography variant='h5'
            color='orange'
            fontFamily='Raleway'
            sx={{}}>
            Why Us
          </Typography>

          <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
          We're one of the prominent names offering complete bottling solutions for Liquor and Beverage Industry. The superlative quality, reliability and cost-effectiveness of our products have been appreciated by the clients across. Furthermore, the following attributes have helped us in becoming our clients favourite: Customizable Product Line Timely Deliveries Ethical  usiness Approach Hassle-Free transactions.
          width="400px"
          height="400px"
          </Typography>
        </Grid>

        <Grid xs={3} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
          <img class="photon" src="https://img.freepik.com/free-vector/flat-people-asking-questions_23-2148929673.jpg?w=740&t=st=1683612049~exp=1683612649~hmac=26ddacd9b9872c7144541312a14bcde466a14dad6291c224ea856b0ffd0d2747" 
          width="400px"
          heighgt="400px"/>
        
        </Grid>
        
        <Grid xs={2} sm={2} md={2}>

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