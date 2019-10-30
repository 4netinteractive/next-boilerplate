import { translate } from 'react-i18next'
import { NextComponentType } from 'next'

import { getInitialProps, I18n } from '../app/i18n/i18n'

const setComposedInitialProps = async (ComposedComponent: NextComponentType, ctx: any) => {
	return ComposedComponent.getInitialProps ? await ComposedComponent.getInitialProps(ctx) : {}
}

export const withI18next = (namespaces = ['common']) => (ComposedComponent: NextComponentType) => {
	const Extended: any = translate(namespaces, {
		i18n: I18n,
		wait: process.browser,
	})(ComposedComponent)

	Extended.getInitialProps = async (ctx: any) => {
		const composedInitialProps = await setComposedInitialProps(ComposedComponent, ctx)

		const i18nInitialProps =
			ctx.req && !process.browser ? getInitialProps(ctx.req, namespaces) : {}

		return {
			...composedInitialProps,
			...i18nInitialProps,
		}
	}

	return Extended
}
