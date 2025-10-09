'use client';
import Chip from './chip';

interface IChips {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function ChipsRightBorder() {
  const chipsData: IChips[] = [
    { label: 'Next.js', id: 'nextjs', border: 'top', },
    { label: 'React', id: 'react', border: 'top', borderColor: '#3b82f6' },
    { label: 'Astro', id: 'astro', border: 'top', borderColor: '#10b981' },
    { label: 'Node.js', id: 'nodejs', border: 'top', borderColor: '#FFCC00' },
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