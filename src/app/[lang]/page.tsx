import { JSX } from "react";
import { getDictionary } from "./dictionaries";
import { CalculatorClient } from "@/components/calculator-client";

type PageProps = Promise<{
        lang: "en-US" | "ar-SA";
}>;

export default async function Page( props : { params: PageProps }): Promise<JSX.Element> {
    const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
    return <CalculatorClient dictionary={dictionary} />;
}
