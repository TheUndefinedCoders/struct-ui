'use client';
import Chip from './chip';

interface IChips {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function ChipsLeftBorder() {
  const chipsData: IChips[] = [
    { label: 'Next.js', id: 'nextjs' },
    { label: 'React', id: 'react', border: 'bottom', borderColor: '#3b82f6' },
    { label: 'Astro', id: 'astro', border: 'left', borderColor: '#10b981' },
    { label: 'Node.js', id: 'nodejs', border: 'right', borderColor: '#FFCC00' },
    { label: 'Angular', id: 'angular', border: 'top', borderColor: '#ef4444' },
  ];

  return (
    <>
      <div className="flex space-x-2 justify-around">
        {chipsData.map((chipData) => (
          <Chip
            key={chipData.id}
            chipData={chipData}
            border={chipData.border}
            borderColor={chipData.borderColor}
            isRounded={false}
          />
        ))}
      </div>
    </>
  );
}