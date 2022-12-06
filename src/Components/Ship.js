import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import "../styles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Ships() {
  const [ships, setShips] = useState([]);

  //expand card code

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //read JSON data
  useEffect(() => {
    fetch("data/shipData.json")
      .then((res) => res.json())
      .then((ships) => {
        setShips(ships);
      });
  });
  //set JSON data into the Card object

  const shipData = ships.map((ship) => (
    <Card sx={{ maxWidth: 345 }} className="box">
      <CardHeader title={ship.name} align="center" />
      <CardMedia
        component="img"
        height="194"
        image={ship.image}
        alt={ship.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          {/* //Card information */}
          {ship.shortdes}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph fontWeight="bold">
            {ship.name}
          </Typography>
          <Typography paragraph>{ship.shortdes}</Typography>
          <Typography paragraph>{ship.description}</Typography>
          <Typography paragraph>Purchase Location: {ship.purchase}</Typography>
          <Typography> In-Game Price: {ship.price}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  ));

  return <div className="grid">{shipData}</div>;

  // Card Name, insert ship name
}
