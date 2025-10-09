'use client';
import Chip from './chip';

interface IChips {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
  isRounded?: boolean;
}

export default function ChipsAll() {
  const chipsData: IChips[] = [
    { label: 'Next.js', id: 'nextjs' },
    { label: 'React', id: 'react', border: 'bottom', borderColor: '#3b82f6', isRounded: false },
    { label: 'Astro', id: 'astro', border: 'left', borderColor: '#10b981', isRounded: true },
    { label: 'Node.js', id: 'nodejs', border: 'right', borderColor: '#FFCC00', textColor: 'blue' },
    { label: 'Angular', id: 'angular', border: 'top', borderColor: '#ef4444', bgColor: 'gray' },
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
            textColor={chipData.textColor}
            bgColor={chipData.bgColor}
            isRounded={chipData.isRounded}
          />
        ))}
      </div>
    </>
  );
}