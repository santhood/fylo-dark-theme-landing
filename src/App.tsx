import { Fragment } from "react/jsx-runtime"

import "@fontsource-variable/raleway"
import "@fontsource-variable/open-sans"

import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Banner from "./components/Banner/Banner"
import Testimonials from "./components/Testimonials/Testimonials"
import Newsletter from "./components/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Features />
        <Banner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </Fragment>
  )
}
