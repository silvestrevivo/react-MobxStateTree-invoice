import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/sass/style.scss'
import App from './components/app'

import Invoice from './models/invoice'

const invoice = Invoice.create({ currency: 'CAD' })

ReactDOM.render(<App invoice={invoice} />, document.getElementById('root'))
