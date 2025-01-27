import { Github } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  dictionary: any;
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {dictionary.footer.copyright}
          </p>
          <Link
            href="https://github.com/degree-0/ts_next_s3_providers_comparison"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>{dictionary.footer.viewSource}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
} 