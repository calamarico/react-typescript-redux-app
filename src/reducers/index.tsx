import { combineReducers, Reducer } from 'redux';
import {
  reduceTaxState,
  TaxState,
  reduceLastClickedState,
  TaxLastClickedState,
} from './tax';
import { reduceAuthState, AuthCredentialsState } from './auth';
import { reduceSubmissionState, TaxSubmissionsStored } from './submission';

export interface IStoreState {
  taxState: TaxState[];
  lastTaxClicked: TaxLastClickedState;
  addTaxSubmissions: TaxSubmissionsStored;
  setAuth: AuthCredentialsState;
}

export const rootReducer: Reducer<IStoreState> = combineReducers({
  taxState: reduceTaxState,
  lastTaxClicked: reduceLastClickedState,
  addTaxSubmissions: reduceSubmissionState,
  setAuth: reduceAuthState,
});
