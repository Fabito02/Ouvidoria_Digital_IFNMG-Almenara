import Slider from "../components/Slider";
import ConteudoHome from "../components/home/ConteudoHome"

const imagens = [
  "/slider_testes.png",
  "/slider_testes.png",
  "/slider_testes.png",
]

const Home = () => {
  return (
    <div>
      <Slider imagens={imagens} />
      <ConteudoHome />
    </div>
  );
};

export default Home;
