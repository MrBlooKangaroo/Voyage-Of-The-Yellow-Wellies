import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'

import { paths as p } from './utils/constants'

export default () => (
  <Router>
    <Layout>
      <Route path={p.home} component={Home} />
    </Layout>
  </Router>
)
