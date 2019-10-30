import { Props } from 'prop-types'

import { IStore } from '@Interfaces/Redux/Store'

declare namespace IApp {
	export interface IProps extends Props<{}> {
		store: IStore
	}

	export interface IState { }
}
