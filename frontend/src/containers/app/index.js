import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Dashboard from '../dashboard'
import Layout from '../../components/layout'

const App = () => (
  <div>
    {/* <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header> */}

    <Layout>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/about-us" component={About} />
    </Layout>
  </div>
)

export default App
