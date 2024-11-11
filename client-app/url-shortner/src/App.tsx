
import './App.css'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster />
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App
