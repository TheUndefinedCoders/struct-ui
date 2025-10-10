'use client';
import Badge from './badge';

interface IBadges {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function BadgesColorBorder() {
  const badgesData: IBadges[] = [
    { label: 'Next.js', id: 'nextjs' },
    { label: 'React', id: 'react', border: 'bottom', borderColor: '#3b82f6' },
    { label: 'Astro', id: 'astro', border: 'left', borderColor: '#10b981' },
    { label: 'Node.js', id: 'nodejs', border: 'right', borderColor: '#FFCC00' },
    { label: 'Angular', id: 'angular', border: 'top', borderColor: '#ef4444' },
  ];

  return (
    <>
      <div className="flex space-x-2 justify-around">
        {badgesData.map((badgeData) => (
          <Badge
            key={badgeData.id}
            badgeData={badgeData}
            border={badgeData.border}
            borderColor={badgeData.borderColor}
            isRounded={false}
          />
        ))}
      </div>
    </>
  );
}