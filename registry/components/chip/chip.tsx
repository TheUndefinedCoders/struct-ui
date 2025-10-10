'use client';
import { useState } from 'react';

interface IChip {
  label: string;
  id: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
  isRounded?: boolean;
}

const getBorderClass = (border: string | undefined) => {
  switch (border) {
    case 'left':
      return 'border-l-4';
    case 'right':
      return 'border-r-4';
    case 'top':
      return 'border-t-4';
    case 'bottom':
      return 'border-b-4';
    default:
      return '';
  }
}

export default function Chip({ chipData, border, borderColor, textColor, bgColor, isRounded=true }: { chipData: IChip, border?: string, borderColor?: string, textColor?: string, bgColor?: string, isRounded?: boolean}) {

  return (
    <>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm pr-0 py-1 mr-2 cursor-pointer">
        <span
          className={`bg-white tracking-wide text-gray-800 font-bold shadow-md py-1 px-2 inline-flex items-center border-slate-600 border ${getBorderClass(border)} ${isRounded ? 'rounded-full' : 'rounded'}`}
          style={{
            borderColor: borderColor,
            backgroundColor: bgColor ? bgColor : '#FFFFFF',
            color: textColor ? textColor : '#2D3748',
          }}
        >
          <span className="mx-auto flex items-center">
            {/* <img className="mr-2" src="/_next/static/media/calendar-icon.116fc372.png" alt="calender-icon" width="22" /> */}
            {chipData.label}
          </span>
        </span>
      </span>
    </>
  );
}