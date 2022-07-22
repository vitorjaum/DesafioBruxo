import React from "react";
import "./index.css";
import instagram from "../../assets/instagram.svg";
import twitch from "../../assets/twitch.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a href="https://www.instagram.com/joao_sem_nome/" target="_Blank">
          <img src={instagram} alt="ícone do instagram" className="icon" />
        </a>
        <a href="https://www.twitch.tv/joao_das_galaxias" target="_Blank">
          <img src={twitch} alt="ìcone da twitch" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/joao-vitor-pinheiro-dos-santos-3b27bb19b/"
          target="_Blank"
        >
          <img src={linkedin} alt="ìcone do linkedin" className="icon" />
        </a>
        <a href="https://github.com/vitorjaum" target="_Blank">
          <img src={github} alt="ícone do github" className="icon" />
        </a>
      </div>

      <nav className="links">
        <p>
          Desafio proposto por{" "}
          <a href="https://github.com/LarissaAzevedo" target="_Blank">
            Larissa Azevedo
          </a>
        </p>
        <p>
          <a
            href="https://github.com/LarissaAzevedo/DesafioBruxo"
            target="_Blank"
          >
            Desafio
          </a>
        </p>
        <p>
          <a href="https://github.com/vitorjaum" target="_Blank">
            Repositório do projeto
          </a>
        </p>
        <p>
          Link da{" "}
          <a href="http://hp-api.herokuapp.com/api/characters" target="_Blank">
            API
          </a>
        </p>
      </nav>

      <h3 className="signature">&copy; 2022 Galaxinha</h3>
    </footer>
  );
};

export default Footer;
