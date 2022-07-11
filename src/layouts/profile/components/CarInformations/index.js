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
import { Card, Stack, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import * as GradientProgress from "@delowar/react-circle-progressbar";
//import GreenLightning from "assets/images/shapes/green-lightning.svg";
//import WhiteLightning from "assets/images/shapes/white-lightning.svg";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";
import carProfile from "assets/images/shapes/car-profile.svg";
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataProfile1, lineChartDataProfile2 } from "variables/charts";
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from "variables/charts";
const CarInformations = () => {
  const { gradients, info } = colors;
  const { cardContent } = gradients;
  return (
    <Card
      sx={({ breakpoints }) => ({
        //   [breakpoints.up("xxl")]: {
        //     // Height:  "20px",
        //     maxHeight: "100px",
        //     // width: "700px",
        //   },
        borderRadius: "20px",
        // marginLeft: "100px",
        width: "600px",
        height: "400px",
      })}
    >
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <VuiTypography color="white" variant="form" fontWeight="regular">
          CSD IGDTUW, Phase -3 (July 2022- July 2023)
        </VuiTypography>
        <br />
        <VuiTypography color="white" variant="form" fontWeight="regular">
          Cousre: B.Tech
        </VuiTypography>
        <br />
        <VuiTypography color="white" variant="form" fontWeight="regular">
          Department: Electronics and Communication Engineering
        </VuiTypography>
        <br />
        <VuiTypography color="white" variant="form" fontWeight="regular">
          Year: 3rd
        </VuiTypography>
        <br />
        <VuiTypography color="white" variant="form" fontWeight="regular">
          GEC: Yes
        </VuiTypography>
        <br />
        <VuiTypography color="white" variant="form" fontWeight="regular">
          Compulsory Subject: No
        </VuiTypography>
        <br />
      </VuiBox>
    </Card>
  );
};

export default CarInformations;
