import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { HomePageContext } from "./Context";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  const { state, dispatch } = useContext(HomePageContext);

  //   console.log(props.product);
  return (
    <Card
      className={`mt-[2rem] border-2 border-gray-400  ${
        props.view ? "w-[345px]" : "min-w-[345px]"
      } min-h-[465px]`}
    >
      <Link to={`/product/${props.product.id}`}>
        <CardMedia
          sx={{ width: 345, height: 200 }}
          component="img"
          image={props.product.thumbnail}
          alt="green iguana"
          className=" h-[200px] border-2"
        />
      </Link>
      <CardContent>
        <Link to={`/product/${props.product.id}`}>
          <Typography
            className="text-center bg-purple-200 flex justify-center items-center "
            gutterBottom
            variant="h5"
            component="div"
            style={{ marginTop: "1rem", height: "64px" }}
          >
            {props.product.title}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          style={{
            fontSize: "1.5rem",
            margin: "2rem 0 .25rem 0",
            color: "red",
          }}
          color="text.secondary"
        >
          {" "}
          Price: ${props.product.price}.00
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {" "}
          Rating: {props.product.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className=""
          onClick={() =>
            dispatch({
              type: "addCart",
              payload: { product: props.product, id: props.id },
            })
          }
          variant="contained"
          size="small"
          style={{ margin: " 0 auto" }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
