import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/sass/style.scss'
import App from './components/app'

import {onPatch} from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import Invoice from './models/invoice'

const invoice = Invoice.create({ currency: 'CAD' })

onPatch(invoice, patch => {
  console.log(patch)
})
makeInspectable(invoice)

ReactDOM.render(<App invoice={invoice} />, document.getElementById('root'))
