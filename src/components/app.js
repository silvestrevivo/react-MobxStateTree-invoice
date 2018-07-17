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
        {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
        <form
          onSubmit={e => {
            e.preventDefault()
            invoice.itemList.add({
              name: this.nameInput.value,
              quantity: parseInt(this.quantityInput.value),
              price: parseFloat(this.priceInput.value)
            })
            e.target.reset()
            this.nameInput.focus()
          }}
        >
          <label htmlFor="name">
            Name
            <input type="text" ref={input => (this.nameInput = input)} id="name" />
          </label>
          <label htmlFor="quantity">
            Quantity
            <input type="number" ref={input => (this.quantityInput = input)} id="quantity" />
          </label>
          <label htmlFor="price">
            Price
            <input type="text" ref={input => (this.priceInput = input)} id="price" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default observer(App)
