/* eslint-disable no-unused-vars */
export enum SubmissionActionTypes {
  ADD_TAX_SUBMISSIONS = 'ADD_TAX_SUBMISSIONS',
}

export interface ISubmissionAction {
  type: SubmissionActionTypes;
  payload?: any;
}

export class SubmissionAction {
  public static readonly ADD_TAX_SUBMISSIONS: SubmissionActionTypes =
    SubmissionActionTypes.ADD_TAX_SUBMISSIONS;

  public static addTaxSubmissions(): ISubmissionAction {
    return {
      type: SubmissionAction.ADD_TAX_SUBMISSIONS,
    };
  }
}
