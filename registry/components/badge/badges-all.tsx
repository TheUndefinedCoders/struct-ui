'use client';
import Badge from './badge';

interface IBadges {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
  isRounded?: boolean;
}

export default function BadgesAll() {
  const badgesData: IBadges[] = [
    { label: 'Next.js', id: 'nextjs' },
    { label: 'React', id: 'react', border: 'bottom', borderColor: '#3b82f6', isRounded: false },
    { label: 'Astro', id: 'astro', border: 'left', borderColor: '#10b981', isRounded: true },
    { label: 'Node.js', id: 'nodejs', border: 'right', borderColor: '#FFCC00', textColor: 'blue' },
    { label: 'Angular', id: 'angular', border: 'top', borderColor: '#ef4444', bgColor: 'gray' },
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
            textColor={badgeData.textColor}
            bgColor={badgeData.bgColor}
            isRounded={badgeData.isRounded}
          />
        ))}
      </div>
    </>
  );
}