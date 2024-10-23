import { siteConfig } from "@/config/site-config";
import { Link } from "@/components/core/link";

export const Footer = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-2 border-t py-6 text-sm text-fg-muted">
        <div className="flex items-center gap-3 text-sm text-fg-muted">
          <div>Find me on:</div>
          {siteConfig.links.map((link) => (
            <Link
              variant="quiet"
              key={link.label}
              href={link.href}
              target="_blank"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>Or mail me at hello@mehdibha.com</div>
      </div>
    </div>
  );
};
