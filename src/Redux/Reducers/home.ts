import { ActionConsts } from '@Definitions'
import { IAction, IHomePage } from '@Interfaces'

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: IHomePage.IStateProps = {
	home: {
		version: 1,
	},
}

type IMapPayload = IHomePage.Actions.IMapPayload

/**
 * REDUCER
 */
export const HomeReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.Home.SetReducer:
			return {
				...state,
				...action.payload,
			}

		case ActionConsts.Home.ResetReducer:
			return INITIAL_STATE

		default:
			return state
	}
}
