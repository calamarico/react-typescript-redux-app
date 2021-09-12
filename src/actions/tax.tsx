/* eslint-disable no-unused-vars */
export enum TaxActionTypes {
  SET_TAXES = 'SET_TAXES',
  LAST_TAX_CLICKED = 'LAST_TAX_CLICKED',
}

export interface ITaxAction {
  type: TaxActionTypes;
  payload?: any;
}

export class TaxAction {
  public static readonly SET_TAXES: TaxActionTypes = TaxActionTypes.SET_TAXES;

  public static readonly LAST_TAX_CLICKED: TaxActionTypes =
    TaxActionTypes.LAST_TAX_CLICKED;

  public static setTaxes(): ITaxAction {
    return {
      type: TaxAction.SET_TAXES,
    };
  }

  public static lastTaxClicked(): ITaxAction {
    return {
      type: TaxAction.LAST_TAX_CLICKED,
    };
  }
}
