'use client';

import { useAuth, SignInButton } from '@clerk/nextjs';
import { ChevronRight, Lock } from 'lucide-react';
import { Template } from '@/configs/templatesData';

interface TemplateDownloadButtonProps {
  template: Template;
  variant?: 'default' | 'large';
  className?: string;
}

export function TemplateDownloadButton({
  template,
  variant = 'default',
  className = '',
}: TemplateDownloadButtonProps) {
  const { isSignedIn, isLoaded } = useAuth();

  const priceDisplay = template.pricing.isFree
    ? 'Free'
    : `$${template.pricing.price} ${template.pricing.currency}`;

  const buttonText = template.pricing.isFree
    ? `Download - Free`
    : `Download - ${priceDisplay}`;

  const sizeClasses =
    variant === 'large'
      ? 'px-6 py-3 text-base'
      : 'px-4 py-2.5 text-sm';

  if (!isLoaded) {
    return (
      <button
        disabled
        className={`flex-1 inline-flex items-center justify-center gap-2 ${sizeClasses} font-medium bg-zinc-700 text-zinc-400 rounded-lg cursor-not-allowed ${className}`}
      >
        Loading...
      </button>
    );
  }

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button
          className={`flex-1 inline-flex items-center justify-center gap-2 ${sizeClasses} font-medium bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors ${className}`}
        >
          <Lock className="w-4 h-4" />
          Sign in to {buttonText}
        </button>
      </SignInButton>
    );
  }

  if (template.pricing.isFree) {
    return (
      <a
        href={template.previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 inline-flex items-center justify-center gap-2 ${sizeClasses} font-medium bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors ${className}`}
      >
        {buttonText}
        <ChevronRight className="w-4 h-4" />
      </a>
    );
  }

  return (
    <a
      href={template.purchaseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-1 inline-flex items-center justify-center gap-2 ${sizeClasses} font-medium bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors ${className}`}
    >
      {buttonText}
      <ChevronRight className="w-4 h-4" />
    </a>
  );
}

export default TemplateDownloadButton;
