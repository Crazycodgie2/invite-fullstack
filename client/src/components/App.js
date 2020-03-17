import React from "react"
import { useGoing } from "../hooks"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Going from "./Going"
import NotGoing from "./Notgoing"

export default props => {
  return (
    <Router>
      <Route path="/going" component={Going} />
      <Route path="/notgoing" component={Notgoing} />
    </Router>
  )
}
