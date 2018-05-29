import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import { Link } from 'react-router-dom'

import '../styles/main.min.css'
/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/
import { Button } from 'react-bootstrap'

class Navbar extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Button
              onClick={() => this.props.setLocale('en')}
              bsStyle="primary"
            >
              EN
            </Button>
            <Button
              onClick={() => this.props.setLocale('es')}
              bsStyle="primary"
            >
              ES
            </Button>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
  }
}

export default connect(mapStateToProps, { setLocale })(Navbar)
