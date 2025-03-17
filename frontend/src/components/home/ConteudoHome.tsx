import { Container } from "react-bootstrap";

interface ConteudoHomeProps {
  imagens: string[];
}

// const ConteudoHome = ({ imagens }: ConteudoHomeProps) => {
const ConteudoHome = () => {
  return (
    <Container fluid={true} className="p-0" style={{ height: "100vh", maxHeight: "550px", backgroundColor: "#E6E6E6"}}>
        
    </Container>
  );
};

export default ConteudoHome;
