'use client';
import Badge from './badge';

interface IBadges {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function BadgesLeftBorder() {
  const badgesData: IBadges[] = [
    { label: 'Next.js', id: 'nextjs', border: 'left', },
    { label: 'React', id: 'react', border: 'left', borderColor: '#3b82f6' },
    { label: 'Astro', id: 'astro', border: 'left', borderColor: '#10b981' },
    { label: 'Node.js', id: 'nodejs', border: 'left', borderColor: '#FFCC00' },
    { label: 'Angular', id: 'angular', border: 'left', borderColor: '#ef4444' },
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