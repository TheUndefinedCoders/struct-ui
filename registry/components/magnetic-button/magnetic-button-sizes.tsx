'use client';
import MagneticButton from './magnetic-button';

export default function MagneticButtonSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-[200px] gap-4">
      <MagneticButton size="sm">Small</MagneticButton>
      <MagneticButton size="md">Medium</MagneticButton>
      <MagneticButton size="lg">Large</MagneticButton>
    </div>
  );
}
