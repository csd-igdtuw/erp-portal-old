/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Card, Icon } from "@mui/material";
import welcome from "assets/images/welcome-profile.png";
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";
// import avatar_csd from "./assets/images/avater_csd.png"
import Avatar from "assets/images/avater_csd.png"

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "700px",
        width: "450px",
        // [breakpoints.only("xl")]: {
        //   gridArea: "1 / 1 / 2 / 2",
        // },
      })}
    >
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <VuiBox display="flex" flexDirection="column" mb="auto">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
           Mentor Coordinator's Profile
           {/* <img alt="avatar" style={{height:70, width:70, border: "4px solid #fff", borderRadius:'50%'}} src={ avatar_csd}/> */}
          </VuiTypography>
          <VuiTypography color="white" variant="button" fontWeight="regular">
            Nice to see you, Srishty Sharma!
          </VuiTypography><br/><br/>
          <img alt="avatar" style={{height:140, width:140, border: "4px solid #fff", borderRadius:'50%',marginLeft:120,}} src={Avatar}/>
          {/* src={Avatar} */}<br/>
          <VuiTypography    color="white" variant="form" fontWeight="regular" >
            Srishty Sharma
          </VuiTypography><br/>
          <VuiTypography    color="white" variant="form" fontWeight="regular" >
           Enrollment no. : 13501022020
          </VuiTypography><br/>
          <VuiTypography color="white" variant="form" fontWeight="regular">
           Official Id : srishty135btece20igdtuw.ac.in
          </VuiTypography><br/>
          <VuiTypography color="white" variant="form" fontWeight="regular">
           Personal Id : ssrishty1101@gmail.com
          </VuiTypography><br/>
          <VuiTypography color="white" variant="form" fontWeight="regular">
           Contact no. : +91-9773717509
          </VuiTypography><br/>

        </VuiBox>
        {/* src={avatar_csd } */}
                 {/* src={GreenLightning} */}
                {/* <VuiTypography color="white" variant="h2" mt="6px" fontWeight="bold" mb="4px">
                  68%
                </VuiTypography> 
                <VuiTypography color="text" variant="caption">
                  Current Load 
                </VuiTypography> */}
                {/* </VuiBox>  */}
        {/* <VuiBox justifySelf="flex-end"> */}
          {/* <VuiTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              mr: "5px",
              display: "inline-flex",
              alignItems: "center",
              justifySelf: "flex-end",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Tap to record
            <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
          </VuiTypography> */}
        {/* </VuiBox> */}
      </VuiBox>
    </Card>
  );
};

export default Welcome;
