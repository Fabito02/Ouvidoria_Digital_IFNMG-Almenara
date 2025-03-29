import Search from "../components/Search";
import PerfilHeader from "../components/PerfilHeader";

const Header = () => {
  return (
    <header
      className="lineBottom"
      style={{
        width: "100%",
        height: "auto",
        padding: "5px",
        position: "fixed",
        backgroundColor: "white",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <a href="/">
        <img
          className="ifnmg-imagem"
          src="/IFNMG - Almenara.png"
          alt="IFNMG - Almenara"
          style={{ height: "100%", maxHeight: "55px" }}
        ></img>
      </a>
      <Search />
      <PerfilHeader />
    </header>
  );
};

export default Header;
