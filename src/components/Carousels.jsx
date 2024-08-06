import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import "./Carousels.css";

const Carousels = ({ itens = [] }) => {
  return (
    <Carousel>
      {itens.map((item, i) => {
        return (
          <Carousel.Item key={i}>
            <Image src={item.imagemUrl} />
            <Carousel.Caption>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

Carousels.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.string),
};

export default Carousels;
