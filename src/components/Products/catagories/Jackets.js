/** @format */

import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

function Jackets() {
  const list = [
    { id: uuidv4(), name: "Jacket", image: "/jacket.jpg", price: 1000 },
    { id: uuidv4(), name: "Jacket", image: "/image-1.jpg", price: 1030 },
    { id: uuidv4(), name: "Jacket", image: "/image-2.jpg", price: 1200 },
    { id: uuidv4(), name: "Jacket", image: "/jacket.jpg", price: 1000 },
    { id: uuidv4(), name: "Jacket", image: "/jacket-1.jpg", price: 15000 },
    { id: uuidv4(), name: "Jacket", image: "/jacket-2.jpg", price: 1850 },
    { id: uuidv4(), name: "Jacket", image: "/jacket-3.jpg", price: 1300 },
  ];
  // get the product id
  const moreDetails = (id) => {
    console.log("id:", id);
  };
  return (
    <div>
      <div className="body-main_container">
        <Grid container spacing={12}>
          {list.map((el) => (
            <Grid>
              <Card key={el.id} style={{ width: "250px" }} className="card">
                <CardActionArea>
                  <CardMedia title="Shirt">
                    <img alt="Shirt" src={el.image} height={250} width={250} />
                  </CardMedia>
                  <CardContent className="cardcontent">
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {el.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to list
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => moreDetails(el.id)}
                  >
                    More details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Jackets;
