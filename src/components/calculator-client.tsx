'use client';

import { useState } from "react";
import { useTheme } from "next-themes";
import providersData from "@/data/providers.json";
import currenciesData from "@/data/currencies.json";
import type { CurrencyCode, Provider } from "@/lib/providers/types";
import { Description } from "@/components/description";
import { UsageSliders } from "@/components/usage-sliders";
import { ProvidersFilter } from "@/components/providers-filter";
import { PricingCards } from "@/components/pricing-cards";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface CalculatorClientProps {
  dictionary: any; // You can type this more strictly if needed
}

export function CalculatorClient({ dictionary }: CalculatorClientProps) {
  const [storage, setStorage] = useState<number>(1);
  const [traffic, setTraffic] = useState<number>(1);
  const [enabledProviders, setEnabledProviders] = useState<Set<string>>(
    new Set(providersData.providers.map(p => p.name))
  );
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [classAOps, setClassAOps] = useState<number>(1);
  const [classBOps, setClassBOps] = useState<number>(1);
  
  const calculateCosts = (provider: Provider) => {
    const storageCost = Math.max(0, storage - provider.includedStorageTB) 
      * provider.additionalStorageCostPerTB;
    
    const trafficCost = Math.max(0, traffic - provider.includedTrafficTB)
      * provider.additionalTrafficCostPerTB;

    const classACost = Math.max(0, classAOps - provider.operations.classA.included)
      * provider.operations.classA.costPer1M;

    const classBCost = Math.max(0, classBOps - provider.operations.classB.included)
      * provider.operations.classB.costPer1M;

    return {
      base: provider.baseFee,
      storage: storageCost,
      traffic: trafficCost,
      operations: {
        classA: classACost,
        classB: classBCost
      },
      total: provider.baseFee + storageCost + trafficCost + classACost + classBCost
    };
  };

  const toggleProvider = (providerName: string) => {
    const newEnabled = new Set(enabledProviders);
    if (newEnabled.has(providerName)) {
      newEnabled.delete(providerName);
    } else {
      newEnabled.add(providerName);
    }
    setEnabledProviders(newEnabled);
  };

  const convertCurrency = (amount: number) => {
    const targetRate = currenciesData.currencies[currency].rate;
    return amount / targetRate;
  };

  const getSortedProviders = () => {
    return [...providersData.providers]
      .filter(provider => enabledProviders.has(provider.name))
      .sort((a, b) => {
        const costsA = calculateCosts(a as Provider);
        const costsB = calculateCosts(b as Provider);
        return costsA.total - costsB.total;
      });
  };

  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-zinc-950 flex flex-col">
      <Header 
        currency={currency}
        setCurrency={setCurrency}
        currencies={currenciesData.currencies}
        dictionary={dictionary}
      />
      
      <main className="container mx-auto p-4 flex-grow">
        <Description dictionary={dictionary} />
        
        <div className="grid gap-8 mt-8">
          <UsageSliders
            storage={storage}
            setStorage={setStorage}
            traffic={traffic}
            setTraffic={setTraffic}
            classAOps={classAOps}
            setClassAOps={setClassAOps}
            classBOps={classBOps}
            setClassBOps={setClassBOps}
            dictionary={dictionary}
          />

          <ProvidersFilter
            providers={providersData.providers as Provider[]}
            enabledProviders={enabledProviders}
            onToggleProvider={toggleProvider}
            dictionary={dictionary}
          />

          <PricingCards
            providers={getSortedProviders() as Provider[]}
            calculateCosts={calculateCosts}
            currency={currency}
            currencySymbol={currenciesData.currencies[currency].symbol}
            convertCurrency={convertCurrency}
            dictionary={dictionary}
          />
        </div>
      </main>

      <Footer dictionary={dictionary} />
    </div>
  );
} 