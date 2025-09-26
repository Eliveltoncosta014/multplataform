import Header from "./componentes/Header"
import "./App.css"
import Banner from "./componentes/Banner"
import ImgCard from "./componentes/imgCard"
import Button from "./componentes/Button"
import img1 from "./assets/img-card1.jpg";
import img2 from "./assets/img-card2.jpg";
import img3 from "./assets/img-card3.jpg";

function App() {
    const handleClick = () =>{
      alert("teste")
    }


  return (
    <main className="container">
      <Header title="Meu site" />
      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p> Aqui voce encontra as mellhores ofertas</p>
      </Banner>

      <ImgCard caption="Uma imagem interessante" imagem ={img1} texto="Popeto" link="https://www.youtube.com/" />
      <ImgCard caption=" Popeto" imagem={img2} texto="Popeto new" link="https://www.terra.com.br/" />
      <ImgCard caption=" Caio jogador" imagem={img3} texto="Popeto Bangu" link="https://bitly.com/pages/products/url-shortener"/>

      <Button text="Clique aqui" onclick={handleClick}/>  
    </main>
  )
}

export default App
