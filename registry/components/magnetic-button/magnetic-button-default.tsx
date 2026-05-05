'use client';
import MagneticButton from './magnetic-button';

export default function MagneticButtonDefault() {
  return (
    <div className="flex items-center justify-center min-h-[200px] gap-4">
      <MagneticButton>Hover Me</MagneticButton>
    </div>
  );
}
