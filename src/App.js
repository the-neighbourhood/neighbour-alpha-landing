import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h1">Neighbour Alpha</Typography>
      <br />
      <Typography variant="h4">
        A communication app for The Neighbourhood
      </Typography>
      <br />
      <Typography variant="h5">Terms of Service</Typography>
      <Container>
        <ul>
          <li>
            <Typography variant="body1">Just a bot for internal use</Typography>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default App;
