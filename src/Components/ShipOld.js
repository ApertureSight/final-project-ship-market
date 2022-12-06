import { React, useState, useEffect } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
// import ShipPop from "./Popover";

export default function Ships() {
  const [ships, setShips] = useState([]);
  //load data on mount
  useEffect(() => {
    fetch("data/shipData.json")
      .then((result) => result.json())
      .then((data) => {
        //store data

        setShips(data);
      });
  }, []);
  console.log(setShips);
  return (
    <Grid>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../data/images/AvengerTitan.png"
            alt="Avenger Titan"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {/* //help */}
              {ships.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ships.shortdescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>
            {/* <ShipPop /> */}
            {/* //Deciding on what I want to do */}
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
