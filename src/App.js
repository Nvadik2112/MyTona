import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Header from './containers/Header/Header'
import Slider from './containers/Slider/Slider'
import Section from './containers/Section/Section'
import Footer from './containers/Footer/Footer'
class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Slider />
        <Section />
        <Footer />
      </Layout>
    );
  }
}

export default App;
