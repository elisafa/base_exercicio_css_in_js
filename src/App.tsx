import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'
import { ContainerDiv } from './components/Container/styles'

// import './global.css'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ContainerDiv>
        <ListaVagas />
      </ContainerDiv>
    </>
  )
}

export default App
