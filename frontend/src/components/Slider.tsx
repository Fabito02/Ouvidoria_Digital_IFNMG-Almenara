import { Carousel } from "react-bootstrap";
import "./Slider.css";

interface SliderProps {
  imagens: string[];
  indicadores?: boolean;
}

const Slider = ({ imagens, indicadores }: SliderProps) => {
  return (
    <div className="slider-container">
      <Carousel indicators={indicadores} interval={3000}>
        {imagens.map((imagem, index) => (
          <Carousel.Item key={index}>
            <img className="slider-img" src={imagem} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
