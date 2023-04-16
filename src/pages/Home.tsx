import { Container, Typography } from "@mui/material";
import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" sx={{ fontWeight: "Bolder" }}>
        Home page
        <ImageSlider />
      </Typography>
    </Container>
  );
}

export default Home;
