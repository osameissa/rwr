import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
} from "@mui/material";

// Static assets map
const imageMap: Record<string, string> = {
  "Tesla Model S": "src/assets/cybercab0.png",
  "Tesla Model 3": "src/assets/model30.png",
  "Tesla Model Y": "src/assets/modely0.png",
};

// Mock data
interface RevenueStream {
  id: string;
  vehicleModel: string;
  vin: string;
  revenueShare: number;
  fleetManagerShare: number;
  totalEarnings: number;
  ownershipStatus: string;
  liabilityStatus: string;
}

const mockRevenueStreams: RevenueStream[] = [
  {
    id: "1",
    vehicleModel: "Tesla Model S",
    vin: "5YJSA1E43JF123456",
    revenueShare: 70,
    fleetManagerShare: 20,
    totalEarnings: 1200.5,
    ownershipStatus: "Verified",
    liabilityStatus: "Compliant",
  },
  {
    id: "2",
    vehicleModel: "Tesla Model 3",
    vin: "5YJ3E1EA0KF789012",
    revenueShare: 65,
    fleetManagerShare: 25,
    totalEarnings: 850.75,
    ownershipStatus: "Verified",
    liabilityStatus: "Compliant",
  },
  {
    id: "3",
    vehicleModel: "Tesla Model Y",
    vin: "5YJYGDEE8MF012345",
    revenueShare: 60,
    fleetManagerShare: 30,
    totalEarnings: 950.0,
    ownershipStatus: "Verified",
    liabilityStatus: "Compliant",
  },
];

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <header
        style={{
          padding: "1rem",
          backgroundColor: "#0f0f0f",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Tokenized Tesla Fleets</Typography>
        <Button variant="contained" color="primary">
          Connect Wallet
        </Button>
      </header>

      <section style={{ padding: "2rem 0", textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Invest in Autonomous Vehicle Yields
        </Typography>
        <Typography variant="body1" paragraph>
          Earn passive income by acquiring tokenized shares of real-world
          autonomous vehicle fleets.
        </Typography>
        <Button variant="contained" color="secondary">
          Browse Vehicles
        </Button>
      </section>

      <section style={{ padding: "2rem 0" }}>
        <Typography variant="h4" gutterBottom>
          Available Tokenized Assets
        </Typography>
        <Grid container spacing={4}>
          {mockRevenueStreams.map((stream) => (
            <Grid item xs={12} sm={6} md={4} key={stream.id}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    imageMap[stream.vehicleModel] || "/assets/cybercab1.png"
                  }
                  alt={stream.vehicleModel}
                />
                <CardContent>
                  <Typography variant="h6">{stream.vehicleModel}</Typography>
                  <Typography variant="body2">
                    <strong>VIN:</strong> {stream.vin}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Owner Share:</strong> {stream.revenueShare}%
                  </Typography>
                  <Typography variant="body2">
                    <strong>Fleet Share:</strong> {stream.fleetManagerShare}%
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Earnings:</strong> $
                    {stream.totalEarnings.toFixed(2)}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Ownership:</strong> {stream.ownershipStatus}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Liability:</strong> {stream.liabilityStatus}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" fullWidth>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      <footer
        style={{
          padding: "1rem",
          backgroundColor: "#0f0f0f",
          color: "white",
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        <Typography variant="body2">© 2025 Tokenized Tesla Fleets</Typography>
      </footer>
    </Container>
  );
};

export default App;
