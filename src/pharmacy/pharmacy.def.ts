export interface Pharmacy {
  integrationName: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  fax: string;
  phone: string;
}

export enum PharmacyType {
  healthMart = 'healthMart',
  carePlus = 'carePlus',
  quickCare = 'quickCare',
}

export interface HealthMartOrderPayload {
  healthMartId?: string;
  healthMartProduct: string;
  healthMartQuantity: number;
  healthMartCustomerInfo: {
    healthMartCustName: string;
    healthMartCustAddress: string;
    healthMartCustCity: string;
    healthMartCustState: string;
    healthMartCustZipcode: string;
    healthMartCustCountry: string;
  };
}

export interface CarePlusOrderPayload {
  carePlusId?: string;
  carePlusProduct: string;
  carePlusQuantity: number;
  carePlusClientInfo: {
    carePlusClientName: string;
    carePlusClientAddress: string;
    carePlusClientCity: string;
    carePlusClientState: string;
    carePlusClientZipcode: string;
    carePlusClientCountry: string;
  };
}

export interface QuickCareOrderPayload {
  quickCareId?: string;
  quickCareProduct: string;
  quickCareQuantity: number;
  quickCareUserData: {
    quickCareUserName: string;
    quickCareUserAddress: string;
    quickCareUserCity: string;
    quickCareUserState: string;
    quickCareUserZipcode: string;
    quickCareUserCountry: string;
  };
}
