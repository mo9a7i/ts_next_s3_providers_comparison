import { getDictionary } from './dictionaries'
import { CalculatorClient } from "@/components/calculator-client";

export default async function Page({ params: { lang } }: { params: { lang: 'en-US' | 'ar-SA' } }) {
    const dictionary = await getDictionary(lang);
    return <CalculatorClient dictionary={dictionary} />;
}
