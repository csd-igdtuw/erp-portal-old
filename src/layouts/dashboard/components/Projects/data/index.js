// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Notice", align: "left" },
      { name: "Source", align: "left" },
      { name: "Date", align: "center" },
    ],

    rows: [
      {
        Notice: (
          <VuiBox display="flex" alignItems="center">
            
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Notice 1
            </VuiTypography>
          </VuiBox>
        ),
        Source: (
          <VuiBox display="flex" py={2}>
            Cognito
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
             
            </VuiTypography>
            
          </VuiBox>
        ),
      },
      {
        Notice: (
          <VuiBox display="flex" alignItems="center">
            
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Notice 2
            </VuiTypography>
          </VuiBox>
        ),
        Source: (
          <VuiBox display="flex" py={2}>
           Team Inayat
            
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              
            </VuiTypography>
            
          </VuiBox>
        ),
      },
      {
        Notice: (
          <VuiBox display="flex" alignItems="center">
            
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Notice 3
            </VuiTypography>
          </VuiBox>
        ),
        Source: (
          <VuiBox display="flex" py={2}>
            CSD 
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              
            </VuiTypography>
            
          </VuiBox>
        ),
      },
      {
        Notice: (
          <VuiBox display="flex" alignItems="center">
            
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Notice 4
            </VuiTypography>
          </VuiBox>
        ),
        Source: (
          <VuiBox display="flex" py={2}>
            Team Pejas
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
            
            </VuiTypography>
            
          </VuiBox>
        ),
      },
      {
        Notice: (
          <VuiBox display="flex" alignItems="center">
            
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Notice 5
            </VuiTypography>
          </VuiBox>
        ),
        Source: (
          <VuiBox display="flex" py={2}>
            CSD
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              
            </VuiTypography>
           
          </VuiBox>
        ),
      },
      {
        Notice: (
          <VuiBox display="flex" alignItems="center">
            
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Notice 6
            </VuiTypography>
          </VuiBox>
        ),
        Source: (
          <VuiBox display="flex" py={2}>
            Team Adira
          </VuiBox>
        ),
        Data: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
             
            </VuiTypography>
            
          </VuiBox>
        ),
      },
    ],
  };
}