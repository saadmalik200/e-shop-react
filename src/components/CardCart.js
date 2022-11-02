import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { HomePageContext } from "./Context";
import { useState } from "react";
export default function MediaCard(props) {
  const { state, dispatch } = useContext(HomePageContext);
  // const [counter, setCounter] = useState(1);

  // console.log("CardCart Rendering", state.cart);
  return (
    <div className=" border-4 py-10 mt-[5rem] w-[90rem] h-auto flex flex-col gap-[1rem]">
      <h1 className="text-[3.5rem] pl-5">Your Cart</h1>
      <div className="grid grid-cols-6 font-bold border-b-4 pb-4">
        <p className="col-span-3 ml-[5rem]">Product</p>
        <p className="ml-3">Quantity</p>
        <p className="ml-[2.5rem]">Price</p>
      </div>
      {state.cart.length === 0 ? (
        <div className="mt-[0rem] text-[3rem] text-center ">Cart is Empty</div>
      ) : (
        state.cart.map((item, i) => (
          <CardContent
            key={i}
            className="flex justify-between items-center mx-4  border-2"
            style={{
              height: "150px",
              paddingTop: "0rem",
              paddingBottom: "0rem",
            }}
          >
            <CardMedia
              component="img"
              style={{
                objectFit: "contain",
                width: "200px",
                height: "145px",
                marginLeft: "1rem",
              }}
              image={item.thumbnail}
            />

            <Typography
              className=""
              gutterBottom
              variant="h5"
              component="div"
              style={{
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: "red",
                width: "200px",
                textAlign: "center",
              }}
            >
              {item.title?.toUpperCase()}
            </Typography>
            <div className="flex justify-center gap-5 mb-[1rem]">
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch({ type: "counterMinus", payload: i })}
                  className="border-2 border-gray-500 px-2"
                >
                  -
                </button>
                <p className="border-2 border-gray-500 px-2">
                  {state.cart[i].quantity}
                </p>
                <button
                  onClick={() => dispatch({ type: "counterPlus", payload: i })}
                  className="border-2 border-gray-500 px-2"
                >
                  +
                </button>
              </div>
            </div>
            <Typography
              variant="body2"
              style={{
                fontSize: "1.25rem",
                margin: ".5rem 0 1rem 0",
                color: "black",
              }}
            >
              {" "}
              Price: $ {item.price * state.cart[i].quantity}.00
            </Typography>

            <CardActions>
              <Button
                onClick={() =>
                  dispatch({
                    type: "removeCart",
                    payload: { product: item, key: i },
                  })
                }
                variant="contained"
                size="small"
                style={{ margin: " 1rem auto", background: "purple" }}
              >
                Remove from Cart
              </Button>
            </CardActions>
          </CardContent>
        ))
      )}{" "}
    </div>
  );
}
{
  /* <CardContent className="flex justify-between items-center">
  <CardMedia
    component="img"
    style={{
      objectFit: "contain",
      width: "200px",
      height: "200px",
      marginLeft: "1rem",
    }}
    image={props.product.thumbnail}
  />

  <Typography
    className=""
    gutterBottom
    variant="h5"
    component="div"
    style={{
      marginTop: "1rem",
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "red",
    }}
  >
    {props.product.title?.toUpperCase()}
  </Typography>
  <div className="flex justify-center gap-5 mb-[1rem]">
    <div className="flex gap-2">
      <button
        onClick={() => setCounter((prev) => prev > 0 && prev - 1)}
        className="border-2 border-gray-500 px-2"
      >
        -
      </button>
      <p className="border-2 border-gray-500 px-2">{counter}</p>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="border-2 border-gray-500 px-2"
      >
        +
      </button>
    </div>
  </div>
  <Typography
    variant="body2"
    style={{
      fontSize: "1.25rem",
      margin: ".5rem 0 1rem 0",
      color: "black",
    }}
  >
    {" "}
    Price: $ {props.product.price}.00
  </Typography>

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
  </CardActions>
</CardContent>; */
}
