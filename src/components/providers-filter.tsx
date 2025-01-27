import { Checkbox } from "./ui/checkbox";
import { Provider } from "@/lib/providers/types";
import Image from "next/image";

interface ProvidersFilterProps {
  providers: Provider[];
  enabledProviders: Set<string>;
  onToggleProvider: (name: string) => void;
  dictionary: any;
}

export function ProvidersFilter({ providers, enabledProviders, onToggleProvider, dictionary }: ProvidersFilterProps) {
  return (
    <div className="bg-zinc-300 p-6 rounded-lg border border-zinc-400">
      <h3 className="text-lg font-semibold mb-4">{dictionary.providers.title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {providers.map((provider) => (
          <div key={provider.name} className="flex items-center space-x-3">
            <Checkbox
              id={`provider-${provider.name}`}
              checked={enabledProviders.has(provider.name)}
              onCheckedChange={() => onToggleProvider(provider.name)}
            />
            <label 
              htmlFor={`provider-${provider.name}`}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image 
                src={provider.logo} 
                alt={provider.name} 
                className="h-6 w-6 object-contain bg-black rounded-md"
                width={24}
                height={24}
              />
              <span className="text-sm">{provider.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
} 