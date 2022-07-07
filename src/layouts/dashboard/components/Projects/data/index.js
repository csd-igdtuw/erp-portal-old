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
import Inayat from "assets/images/Inayat.jpg";

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
      { name: "Event", align: "left" },
      { name: "Date", align: "left" },
      { name: "Venue", align: "center" },
    ],

    rows: [
      {
        Event: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Care Wear Repair
            </VuiTypography>
          </VuiBox>
        ),
        Date: (
          <VuiBox display="flex" py={1}>
            <VuiTypography color="white" variant="button" fontWeight="bold">
              12th June, 2022
            </VuiTypography>
          </VuiBox>
        ),
        Venue: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              Google Meet
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        Event: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Relay Race
            </VuiTypography>
          </VuiBox>
        ),
        Date: (
          <VuiBox display="flex" py={1}>
            <VuiTypography color="white" variant="button" fontWeight="bold">
              27th June, 2022
            </VuiTypography>
          </VuiBox>
        ),
        Venue: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              IGDTUW Campus Ground
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        Event: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Care Wear Repair
            </VuiTypography>
          </VuiBox>
        ),
        Date: (
          <VuiBox display="flex" py={1}>
            <VuiTypography color="white" variant="button" fontWeight="bold">
              12th June, 2022
            </VuiTypography>
          </VuiBox>
        ),
        Venue: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              Google Meet
            </VuiTypography>
          </VuiBox>
        ),
      },
    ],
  };
}
