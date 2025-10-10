'use client';
import Badge from './badge';

interface IBadges {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
}

export default function BadgesCircle() {
  const badgesData: IBadges[] = [
    { label: 'Next.js', id: 'nextjs' },
    { label: 'React', id: 'react' },
    { label: 'Astro', id: 'astro' },
    { label: 'Node.js', id: 'nodejs' },
    { label: 'Angular', id: 'angular' },
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
            textColor="#2d3748"
            bgColor="#FFFFFF"
          />
        ))}
      </div>
    </>
  );
}