'use client';
import MagneticButton from './magnetic-button';

export default function MagneticButtonVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-[200px] gap-4">
      <MagneticButton variant="default">Default</MagneticButton>
      <MagneticButton variant="outline">Outline</MagneticButton>
      <MagneticButton variant="ghost">Ghost</MagneticButton>
      <MagneticButton variant="glow">Glow</MagneticButton>
      <MagneticButton variant="gradient">Gradient</MagneticButton>
    </div>
  );
}
