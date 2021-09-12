import {
  SubmissionActionTypes,
  ISubmissionAction,
} from '../actions/submission';

const initialState: any = {};

export interface TaxSubmissionsStored {
  [key: string]: SubmissionState;
}
export interface SubmissionState {
  id: string;
  parentId: string;
  name: string;
  surname: string;
  age: number;
}

export function reduceSubmissionState(
  state: TaxSubmissionsStored = initialState,
  action: ISubmissionAction,
) {
  switch (action.type) {
    case SubmissionActionTypes.ADD_TAX_SUBMISSIONS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
