import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../action/productActions";

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
    <Message varaint="danger">{error}</Message>
  ) : (
    <>
      <Carousel pause="hover" className=" carouselColor ">
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <h3 className="hotpicks">Best Sellers !</h3>
            <Link to={`/product/${product._id}`}>
              <Carousel.Caption className="carousel-caption">
                <h2>{product.name}</h2>

                <h4>Brand: {product.brand}</h4>
                <h5> {product.description}</h5>
                <h2>${product.price}</h2>
              </Carousel.Caption>
              <Image src={product.image} alt={product.name} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default ProductCarousel;
