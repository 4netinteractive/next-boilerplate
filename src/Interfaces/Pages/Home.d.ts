import { Props } from 'prop-types'
import i18n from 'i18next'

import { PlanetaryModel } from '@Interfaces'

declare namespace IHomePage {
	export type IProps = IOwnProps & IStateProps & IDispatchProps

	export interface IOwnProps extends Props<{}> {
		t: i18n.TranslationFunction
		i18n: i18n.i18n
	}

	export interface IState { }

	export interface IStateProps { }

	export interface IDispatchProps {
		Map(payload: Actions.IMapPayload): Actions.IMapResponse
		GetApod(payload: Actions.IGetApodPayload): Actions.IGetApodResponse
	}

	namespace Actions {
		export interface IMapPayload { }

		export interface IMapResponse { }

		export interface IGetApodPayload extends PlanetaryModel.GetApodPayload { }

		export interface IGetApodResponse extends PlanetaryModel.GetApodResponse { }
	}
}
