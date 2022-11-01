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
  const [counter, setCounter] = React.useState(0);
  const { state, dispatch } = useContext(HomePageContext);

  console.log(props.product);
  return (
    <div className=" border-4 py-10 mt-[5rem] w-[90rem] h-[50rem] flex justify-center items-center  gap-[5rem]">
      <div className="flex flex-col justify-center gap-[3rem]">
        <Link to={`/product/${props.product.id}`}>
          <CardMedia
            component="img"
            // height="140"
            style={{ objectFit: "contain", maxWidth: "580px" }}
            image={props.product.thumbnail}
            className=" border-2 h-[450px]   "
          />
        </Link>
        <div className="flex flex-row justify-center gap-5">
          {props.product.images?.map((item, i) => (
            <CardMedia
              key={i}
              sx={{ width: 100, maxHeight: 400 }}
              component="img"
              height="140"
              image={item}
              className=" h-[100px] mt-4  border-gray-300 active:border-red-500 border-4 hover:scale-150 cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="border-2 w-[25rem]">
        <CardContent>
          <Typography
            variant="body2"
            style={{
              fontSize: "1rem",
              margin: ".5rem 0 1rem 0",
              color: "gray",
            }}
            color="text.secondary"
          >
            {" "}
            Brand: {props.product.brand}
          </Typography>
          <Link to={`/product/${props.product.id}`}>
            <Typography
              className=" "
              gutterBottom
              variant="h5"
              component="div"
              style={{
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              {props.product.title?.toUpperCase()}
            </Typography>
          </Link>
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
          <Typography
            variant="body2"
            style={{
              fontSize: "1rem",
              marginBottom: "2rem ",
              color: "gray",
            }}
            color="text.secondary"
          >
            {" "}
            Stock remaining: {props.product.stock}
          </Typography>
          <div className="flex justify-center gap-5 mb-[1rem]">
            Quantity:
            <div className="flex gap-2">
              <button
                onClick={() => setCounter((prev) => prev - 1)}
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
          <CardActions>
            <Button
              onClick={() =>
                dispatch({ type: "addCart", payload: props.product })
              }
              variant="contained"
              size="small"
              style={{
                margin: " 1rem auto",
                width: "100%",
                background: "maroon",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </Button>
          </CardActions>
          <Typography
            variant="body2"
            style={{
              margin: "2rem 0 1rem 0",
            }}
            color="text.secondary"
          >
            {" "}
            Description:
            {props.product.description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {" "}
            Rating: {props.product.rating}
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}

//  <Card className="mt-[8rem] border-2 border-gray-400  w-full mx-[10%]">
//       <div className="flex">
//         <div className="flex flex-col justify-center gap-5">
//           {props.product.images?.map((item, i) => (
//             <CardMedia
//               key={i}
//               sx={{ width: 100, maxHeight: 400 }}
//               component="img"
//               height="140"
//               image={item}
//               alt="green iguana"
//               className=" h-[100px] mt-4  border-gray-300 active:border-red-500 border-4 hover:scale-150 cursor-pointer"
//             />
//           ))}
//         </div>
//         <Link to={`/product/${props.product.id}`}>
//           <CardMedia
//             sx={{}}
//             component="img"
//             // height="140"
//             image={props.product.thumbnail}
//             alt="green iguana"
//             className=" border-2"
//           />
//         </Link>
//       </div>
// <CardContent>
//   <Link to={`/product/${props.product.id}`}>
//     <Typography
//       className="text-center bg-purple-200 "
//       gutterBottom
//       variant="h5"
//       component="div"
//       style={{ marginTop: "1rem" }}
//     >
//       {props.product.title}
//     </Typography>
//   </Link>
//   <Typography
//     variant="body2"
//     style={{
//       margin: "2rem 0 1rem 0",
//     }}
//     color="text.secondary"
//   >
//     {" "}
//     Description:
//     {props.product.description}
//   </Typography>
//   <Typography
//     variant="body2"
//     style={{
//       fontSize: "1.5rem",
//       margin: "2rem 0 1rem 0",
//       color: "red",
//     }}
//     color="text.secondary"
//   >
//     {" "}
//     Price:
//     {props.product.price}
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//     {" "}
//     Rating: {props.product.rating}
//   </Typography>
// </CardContent>
// <CardActions>
//   <Button
//     onClick={() => dispatch({ type: "addCart", payload: props.product })}
//     variant="contained"
//     size="small"
//     style={{ margin: " 1rem auto" }}
//   >
//     Add to Cart
//   </Button>
// </CardActions>
//     </Card>
