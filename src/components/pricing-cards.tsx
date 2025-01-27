import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Provider } from "@/lib/providers/types";
import Image from "next/image";
import { CurrencyCode } from "@/lib/providers/types";
import { formatNumber } from "@/lib/utils";

interface PricingCardsProps {
  providers: Provider[];
  calculateCosts: (provider: Provider) => any;
  currency: CurrencyCode;
  currencySymbol: string;
  convertCurrency: (amount: number) => number;
  dictionary: any;
}

export function PricingCards({ 
  providers, 
  calculateCosts, 
  currency, 
  currencySymbol,
  convertCurrency,
  dictionary
}: PricingCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => {
        const costs = calculateCosts(provider);
        return (
          <Card key={provider.name} className="relative overflow-hidden">
            {providers[0] === provider && (
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg text-sm">
                {dictionary.providers.bestValue}
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image 
                  src={provider.logo} 
                  alt={provider.name} 
                  className="h-8 w-8 object-contain bg-black rounded-md"
                  width={32}
                  height={32}
                />
                {provider.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">
                {currencySymbol}
                {formatNumber(convertCurrency(costs.total))}/{dictionary.providers.costs.monthly}
              </p>
              <div className="space-y-2 text-sm">
                <CostRow 
                  label={dictionary.providers.costs.baseFee}
                  amount={costs.base}
                  currency={currencySymbol}
                  convert={convertCurrency}
                />
                <CostRow 
                  label={dictionary.providers.costs.storage}
                  amount={costs.storage}
                  currency={currencySymbol}
                  convert={convertCurrency}
                />
                <CostRow 
                  label={dictionary.providers.costs.traffic}
                  amount={costs.traffic}
                  currency={currencySymbol}
                  convert={convertCurrency}
                />
                <CostRow 
                  label={dictionary.providers.costs.writeOps}
                  amount={costs.operations.classA}
                  currency={currencySymbol}
                  convert={convertCurrency}
                />
                <CostRow 
                  label={dictionary.providers.costs.readOps}
                  amount={costs.operations.classB}
                  currency={currencySymbol}
                  convert={convertCurrency}
                />

                <div className="pt-2 text-xs text-muted-foreground space-y-1">
                  <p>{dictionary.providers.included.storage}: {provider.includedStorageTB} TB</p>
                  <p>{dictionary.providers.included.traffic}: {provider.includedTrafficTB === 999999999 ? 
                    dictionary.providers.included.unlimited : `${provider.includedTrafficTB} TB`}</p>
                  <p>{dictionary.providers.minObject}: {provider.minimumBillableObjectSizeKB} KB</p>
                  <p>{dictionary.providers.included.writeOps}: {provider.operations.classA.included === -1 ? 
                    dictionary.providers.included.unlimited : `${provider.operations.classA.included}M`}</p>
                  <p>{dictionary.providers.included.readOps}: {provider.operations.classB.included === -1 ? 
                    dictionary.providers.included.unlimited : `${provider.operations.classB.included}M`}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function CostRow({ 
  label, 
  amount, 
  currency, 
  convert 
}: { 
  label: string; 
  amount: number; 
  currency: string; 
  convert: (n: number) => number; 
}) {
  return (
    <div className="flex justify-between">
      <span>{label}:</span>
      <span>
        {currency}
        {formatNumber(convert(amount))}
      </span>
    </div>
  );
} 