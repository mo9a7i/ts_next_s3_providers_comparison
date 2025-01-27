import { JSX } from "react";
import { getDictionary } from "./dictionaries";
import { CalculatorClient } from "@/components/calculator-client";

type PageProps = {
    params: {
        lang: "en-US" | "ar-SA";
    };
};

export default async function Page({ 
    params 
}: PageProps): Promise<JSX.Element> {
    const dictionary = await getDictionary(params.lang);
    return <CalculatorClient dictionary={dictionary} />;
}
