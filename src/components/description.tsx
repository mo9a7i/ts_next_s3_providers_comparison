interface DescriptionProps {
  dictionary: any;
}

export function Description({ dictionary }: DescriptionProps) {
  return (
    <div className="">
      <p className="text-muted-foreground">
        {dictionary.description.main}
        {dictionary.description.subtext}
      </p>
      <div className="mt-2 text-xs text-muted-foreground">
        <p>{dictionary.description.disclaimer1}</p>
        <p>{dictionary.description.disclaimer2}</p>
      </div>
    </div>
  );
} 