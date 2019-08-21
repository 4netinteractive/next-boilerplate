//#region Interface Imports
import { IHomePage } from '@Interfaces';
import { Store } from 'redux';
//#endregion Interface Imports

export interface IStore extends Store {
	home: IHomePage.IStateProps;
}
