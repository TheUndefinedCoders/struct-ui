'use client';
import Chip from './chip';

interface IChips {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function ChipsSquare() {
  const chipsData: IChips[] = [
    { label: 'Next.js', id: 'nextjs' },
    { label: 'React', id: 'react' },
    { label: 'Astro', id: 'astro' },
    { label: 'Node.js', id: 'nodejs' },
    { label: 'Angular', id: 'angular' },
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
            textColor="#2d3748"
            bgColor="#FFFFFF"
            isRounded={false}
          />
        ))}
      </div>
    </>
  );
}