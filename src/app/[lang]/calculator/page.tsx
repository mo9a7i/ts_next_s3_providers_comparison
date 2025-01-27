import { CalculatorClient } from "@/components/calculator-client";
import { getDictionary } from "../dictionaries";

export default async function Calculator({ params: { lang } }: { params: { lang: 'en-US' | 'ar-SA' } }) {
  const dictionary = await getDictionary(lang);
  return <CalculatorClient dictionary={dictionary} />;
}