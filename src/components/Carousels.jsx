import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

const Carousels = ({ images = [] }) => {
  return (
    <Carousel>
      {images.map((image, i) => {
        return (
          <Carousel.Item key={i}>
            <Image src={image} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

Carousels.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Carousels;
