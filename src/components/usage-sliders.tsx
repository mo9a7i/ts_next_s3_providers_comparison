import { Slider } from "./ui/slider";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface UsageSlidersProps {
  storage: number;
  setStorage: (value: number) => void;
  traffic: number;
  setTraffic: (value: number) => void;
  classAOps: number;
  setClassAOps: (value: number) => void;
  classBOps: number;
  setClassBOps: (value: number) => void;
  dictionary: any;
}

export function UsageSliders({
  storage, setStorage,
  traffic, setTraffic,
  classAOps, setClassAOps,
  classBOps, setClassBOps,
  dictionary
}: UsageSlidersProps) {
  return (
    <div className="bg-zinc-300 rounded-lg p-4 border border-zinc-400">
      <h2 className="text-lg font-semibold mb-4">{dictionary.usage.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UsageSlider
          label={dictionary.usage.storage.label}
          value={storage}
          onChange={setStorage}
          max={50}
          tooltip={dictionary.usage.storage.tooltip}
          description={dictionary.usage.storage.description}
        />

        <UsageSlider
          label={dictionary.usage.traffic.label}
          value={traffic}
          onChange={setTraffic}
          max={50}
          tooltip={dictionary.usage.traffic.tooltip}
          description={dictionary.usage.traffic.description}
        />

        <UsageSlider
          label={dictionary.usage.writeOps.label}
          value={classAOps}
          onChange={setClassAOps}
          max={100}
          tooltip={dictionary.usage.writeOps.tooltip}
          description={dictionary.usage.writeOps.description}
        />

        <UsageSlider
          label={dictionary.usage.readOps.label}
          value={classBOps}
          onChange={setClassBOps}
          max={100}
          tooltip={dictionary.usage.readOps.tooltip}
          description={dictionary.usage.readOps.description}
        />
      </div>
    </div>
  );
}

interface UsageSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  tooltip: string;
  description: string;
}

function UsageSlider({ label, value, onChange, max, tooltip, description }: UsageSliderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">
          {label}: {value}
        </label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <InfoIcon className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        max={max}
        step={1}
        className="w-full"
      />
      <p className="text-xs text-muted-foreground">
        {description}
      </p>
    </div>
  );
} 