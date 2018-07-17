import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    invoice: PropTypes.object
  }

  render () {
    const { invoice } = this.props

    return (
      <div className="App">
        <h1>{invoice.status()}</h1>
        <button onClick={invoice.markPaid}>Pay</button>
      </div>
    )
  }
}

export default observer(App)
