import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
// import Slider from "react-slick";
import { listTopProducts } from "../actions/productActions";

// const settings = {
//   dots: false,
//   infinite: false,
//   arrows: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 5,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h4>Top rated Products</h4>
      <div style={{ width: "100%", display: "flex" }}>
        {products.map((product, i) => (
          <div key={i} className="carousel_rel_image">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt="" />
              <p style={{ fontSize: "0.8rem" }}>{product.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
