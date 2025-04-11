import { Carousel, Container } from "react-bootstrap";
import "./Slider.css";

interface SliderProps {
  imagens: string[];
  indicadores?: boolean;
}

const Slider = ({ imagens, indicadores }: SliderProps) => {
  return (
    <Container>
      <Carousel indicators={indicadores} interval={3000}>
        {imagens.map((imagem, index) => (
          <Carousel.Item key={index}>
            <img className="slider-img" src={imagem} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
