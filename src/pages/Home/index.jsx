import Header from "../../components/Header";

import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Gestão de Cadastro</h2>
        <p>2º Desafio   <a
              className="link"
              href="https://www.hiringcoders.com.br/"
              target="blank"
            >
              Hiring Coders
            </a>{" "}</p>
        <div className="img"></div>   
      </main>
     
    </>
  );
}

export default Home;
