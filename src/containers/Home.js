import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import messages from './messages'
import { setLocale } from '../actions/locale'
import '../styles/main.min.css'
/*
  Bootstrap documentation for react:
  https://react-bootstrap.github.io/
*/

class Home extends Component {
  render() {
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <ul>
            <FormattedMessage id="nav.dashboard" defaultMessage="Hello World" />
            <br />
            <FormattedMessage id="list.a" defaultMessage="Hello World" />
          </ul>
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

export default connect(mapStateToProps, { setLocale })(Home)
