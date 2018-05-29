import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Navbar from '../containers/Navbar'
import About from '../containers/About'

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
    </div>
  </BrowserRouter>
)
