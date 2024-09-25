/* eslint-disable no-unused-vars */
import { Toaster } from "react-hot-toast"
import BlockOne from "./components/blockOne"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Services from "./components/services"
import Why from "./components/why"
import Partners from "./components/partners"
import { LanguageContext, LanguageProvider } from "./context/LanguageContext"
import { useContext } from "react"

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Header />
        <BlockOne />
        <Services />
        <Why />
        <Contact />
        <Partners />
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </LanguageProvider>
    </>
  )
}

export default App