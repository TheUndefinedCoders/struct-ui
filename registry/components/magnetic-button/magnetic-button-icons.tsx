'use client';
import MagneticButton from './magnetic-button';
import { ArrowRight, Download, Heart, Send, Sparkles } from 'lucide-react';

export default function MagneticButtonIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-[200px] gap-4">
      <MagneticButton variant="default">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </MagneticButton>
      <MagneticButton variant="outline">
        <Download className="mr-2 h-4 w-4" /> Download
      </MagneticButton>
      <MagneticButton variant="glow">
        <Sparkles className="mr-2 h-4 w-4" /> Magic
      </MagneticButton>
      <MagneticButton variant="gradient">
        <Heart className="mr-2 h-4 w-4" /> Like
      </MagneticButton>
      <MagneticButton variant="ghost">
        <Send className="h-4 w-4" />
      </MagneticButton>
    </div>
  );
}
