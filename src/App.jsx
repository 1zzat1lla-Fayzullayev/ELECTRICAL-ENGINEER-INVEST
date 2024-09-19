import { Toaster } from "react-hot-toast"
import BlockOne from "./components/blockOne"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Services from "./components/services"
import Why from "./components/why"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <BlockOne />
      <Services />
      <Why />
      <Contact />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App