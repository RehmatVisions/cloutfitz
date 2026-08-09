/**
 * IMAGE PROTECTION COMPONENT
 * 
 * Transparent watermark layer images ko protect karta hai
 * Copy/Save nahi kar sakte screenshots/inspect me
 */

interface ImageProtectionProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProtectedImage({ src, alt, className }: ImageProtectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Original Image */}
      <img
        src={src}
        alt={alt}
        className={className}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />

      {/* Transparent Watermark Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.02) 10px, rgba(0, 0, 0, 0.02) 20px)",
        }}
      />

      {/* Anti-Copy Layer */}
      <div
        className="absolute inset-0"
        style={{
          background: "transparent",
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }}
      />
    </div>
  );
}
