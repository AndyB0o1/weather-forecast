import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather"
import Footer from "./components/Footer"
import Forecast from "./components/Forecast"
import Header from "./components/Header"

function App() {

  return (
    <main>
      <Header />
      <CurrentWeather />
      <Footer />
    </main>
  )
}

export default App
