import { TaxAction, ITaxAction } from '../actions/tax';

const initialState: any = [];

export interface TaxState {
  id: string;
  name: string;
  year: string;
}

export interface TaxLastClickedState {
  id: string;
  name: string;
  year: string;
}

export interface ITaxCombination extends TaxState, TaxLastClickedState {}

export function reduceTaxState(
  state: TaxState = initialState,
  action: ITaxAction,
) {
  switch (action.type) {
    case TaxAction.SET_TAXES:
      return action.payload;
    default:
      return state;
  }
}

export function reduceLastClickedState(
  state: TaxLastClickedState = initialState,
  action: ITaxAction,
) {
  switch (action.type) {
    case TaxAction.LAST_TAX_CLICKED:
      return action.payload;
    default:
      return state;
  }
}
