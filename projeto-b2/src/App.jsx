import Header from "./componentes/Header"
import "./App.css"
import Banner from "./componentes/Banner"
import ImgCard from "./componentes/imgCard"
import Button from "./componentes/Button"
function App() {

  return (
    <main className="container">
      <Header title="Meu site" />
      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p> Aqui voce encontra as mellhores ofertas</p>
      </Banner>
      <ImgCard caption="Uma imagem interessante" />

      <Button text="Clique aqui"/>  
    </main>
  )
}

export default App
