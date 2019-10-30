import App, { AppContext } from 'next/app'
import * as React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/core/styles'

import store from '@Redux/store'
import { IApp } from '@Interfaces'
import { defaultTheme } from '@Themes'

class MyApp extends App<IApp.IProps> {
	static async getInitialProps(props: AppContext) {
		let pageProps = {}

		if (props.Component.getInitialProps) {
			pageProps = await props.Component.getInitialProps(props.ctx)
		}

		return { pageProps }
	}

	componentDidMount() {
    const jssStyles: any = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
	}

	render(): JSX.Element {
		const { Component, pageProps, store } = this.props

		return (
			<Provider store={store as any}>
				<JssProvider>
					<MuiThemeProvider theme={defaultTheme}>
						<StylesProvider injectFirst>
							<CssBaseline />
							<Component {...pageProps} />
						</StylesProvider>
					</MuiThemeProvider>
				</JssProvider>
			</Provider>
		)
	}
}

export default withRedux(store)(MyApp)
