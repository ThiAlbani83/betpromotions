import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PromotionDetails from "./pages/PromotionDetails"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"




function App() {


  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotion/:id" element={<PromotionDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
