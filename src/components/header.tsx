import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CurrencyCode } from "@/lib/providers/types";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface HeaderProps {
  currency: CurrencyCode;
  setCurrency: (value: CurrencyCode) => void;
  currencies: Record<string, { symbol: string; rate: number; }>;
  dictionary: any;
}

export function Header({ currency, setCurrency, currencies, dictionary }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];

  const toggleLanguage = () => {
    const newLang = currentLang === 'en-US' ? 'ar-SA' : 'en-US';
    const newPath = pathname.replace(currentLang, newLang);
    router.push(newPath);
  };

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{dictionary.title}</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
            >
              <span className="">
                {currentLang === 'en-US' ? 'ع' : 'EN'}
              </span>
            </Button>
            <Select value={currency} onValueChange={(value) => setCurrency(value as CurrencyCode)}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(currencies).map((code) => (
                  <SelectItem key={code} value={code}>
                    {code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 