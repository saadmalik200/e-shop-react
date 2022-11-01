import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { HomePageContext } from "./Context";

export default function MediaCard(props) {
  const { state, dispatch } = useContext(HomePageContext);

  return (
    <Card className="mt-[8rem] border-2 border-gray-400" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ width: 345, maxHeight: 400 }}
        component="img"
        height="140"
        image={props.product.thumbnail}
        alt="green iguana"
        className=" h-[200px] border-2"
      />
      <CardContent>
        <Typography
          className="text-center bg-purple-200 "
          gutterBottom
          variant="h5"
          component="div"
          style={{ marginTop: "1rem" }}
        >
          {props.product.title}
        </Typography>
        <Typography
          variant="body2"
          style={{ fontSize: "1.5rem", margin: "2rem 0 1rem 0", color: "red" }}
          color="text.secondary"
        >
          {" "}
          Price:
          {props.product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {" "}
          Rating: {props.product.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() =>
            dispatch({
              type: "removeCart",
              payload: { product: props.product, key: props.id },
            })
          }
          variant="contained"
          size="small"
          style={{ margin: " 1rem auto", background: "purple" }}
        >
          Remove from Cart
        </Button>
        <Button
          // onClick={() =>
          //   dispatch({
          //     // type: "removeCart",
          //     // payload: { product: props.product, key: props.id },
          //   })
          // }
          variant="contained"
          size="small"
          style={{ margin: " 1rem auto", background: "green" }}
        >
          Buy Product
        </Button>
      </CardActions>
    </Card>
  );
}