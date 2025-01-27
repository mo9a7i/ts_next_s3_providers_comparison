export type BillingModel = 'pay-as-you-go' | 'tiered';

export interface OperationsQuota {
  classA: {  // Write, Delete, List (PUT, POST, DELETE, LIST)
    included: number;  // in millions
    costPer1M: number;
  };
  classB: {  // Read (GET, HEAD)
    included: number;  // in millions
    costPer1M: number;
  };
}

export interface Provider {
  name: string;
  logo: string;
  baseFee: number;
  includedStorageTB: number;
  includedTrafficTB: number;
  additionalStorageCostPerTB: number;
  additionalTrafficCostPerTB: number;
  minimumBillableObjectSizeKB: number;
  operations: OperationsQuota;
  billingModel: BillingModel;
}

export interface ProvidersData {
  providers: Provider[];
}

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'SAR';

export interface Currency {
  symbol: string;
  rate: number;
}

export interface CurrenciesData {
  base: CurrencyCode;
  currencies: Record<CurrencyCode, Currency>;
} 