import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
function Profile() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar
        alt="profile"
        src="assets/neng.jpg"
        sx={{ width: 150, height: 150 }}
      />
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 500,
          margin: "20px",
          color: "#727373",
        }}
      >
        Neng Sitiporn
      </Typography>
      <Box
        sx={{
          width: "300px",
          backgroundColor: "#a08bff",
          height: "5px",
          borderRadius: "20px",
          border: "none",
          mb: 4
        }}
      ></Box>
    </Box>
  );
}

export default Profile;
