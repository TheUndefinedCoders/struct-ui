'use client';
import Badge from './badge';

interface IBadges {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function BadgesRightBorder() {
  const badgesData: IBadges[] = [
    { label: 'Next.js', id: 'nextjs', border: 'right', },
    { label: 'React', id: 'react', border: 'right', borderColor: '#3b82f6' },
    { label: 'Astro', id: 'astro', border: 'right', borderColor: '#10b981' },
    { label: 'Node.js', id: 'nodejs', border: 'right', borderColor: '#FFCC00' },
    { label: 'Angular', id: 'angular', border: 'right', borderColor: '#ef4444' },
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