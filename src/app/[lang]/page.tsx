import { JSX } from "react";
import { getDictionary } from "./dictionaries";
import { CalculatorClient } from "@/components/calculator-client";

interface PageProps {
  params: {
    lang: "en-US" | "ar-SA";
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ 
    params,
    searchParams 
}: PageProps): Promise<JSX.Element> {
    const dictionary = await getDictionary(params.lang);
    return <CalculatorClient dictionary={dictionary} />;
}
