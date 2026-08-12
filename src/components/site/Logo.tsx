import logoImage from "@/assets/logo/logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <img 
        src={logoImage} 
        alt="Pixel Perfect Designs" 
        className="h-20 w-auto object-contain"
      />
    </a>
  );
}
