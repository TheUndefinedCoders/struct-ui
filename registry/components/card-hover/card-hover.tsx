'use client';
import React from 'react';
import Badge from '../badge/badge';
import BtnReadMore from '../button/btn-read-more';

export default function CardHover() {

  type UserDataType = {
    name: string;
    role: string;
    company: string;
    image?: string;
    description: string;
    skills: string[];
    portfilioLink?: string;
  }

  const userData: UserDataType[] = [
    {
      name: "Md Numan Ahmed",
      role: "SDE-III",
      company: "Struct-UI",
      image: "https://numan-dev.web.app/images/my-pic.png",
      description: "Hi, I'm Numan. I've been working as a Software Engineer (Full Stack) for over 5 years. In this time, I've helped build and scale applications for different kinds of projects, from startups to growing businesses. While many know me as a “Full Stack” engineer, I like to see myself as a passionate problem solver — always eager to learn, share knowledge, and push boundaries to create meaningful digital experiences.",
      skills: ["Next.js", "React", "Angular", "Node.js"],
      portfilioLink: "https://numan-dev.web.app",
    },
    {
      name: "Yogesh Mishra",
      role: "SDE-II",
      company: "Struct-UI",
      image: "",
      description: "I am Yogesh Mishra, a software engineer with over 3 years of experience in building scalable web applications. I have a strong foundation in React, Node.js, and Next.js, and I am passionate about learning new technologies and staying up-to-date with industry trends. Yogesh is a team player with a strong work ethic and is always eager to help others. He is currently working as a Software Engineer at Struct-UI and is responsible for developing and maintaining the company's web applications.",
      skills: ["React", "Node.js", "Next.js", "TypeScript"],
      portfilioLink: "https://linktr.ee/yogi.js",
    }
  ]

  const getInitials = (fullName: string) => {
    if (!fullName) return "N A";
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0]?.[0] || "";
    const lastName = nameParts[nameParts.length - 1]?.[0] || "";
    return (`${firstName} ${lastName}`).toUpperCase();
  }

  return (
    <>
      <div className="flex items-center justify-around flex-wrap">

        {userData.map((user, index) => (
          <div key={index} className="relative overflow-hidden p-6 text-gray-800 shadow-lg ring-1 ring-gray-100 transition-transform duration-500 hover:-translate-y-2 hover:scale-105 focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:text-gray-100 dark:shadow-2xl dark:ring-gray-700 dark:focus:ring-indigo-600 w-full max-w-[422px] mx-auto [background:linear-gradient(white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.200)_80%,_theme(colors.indigo.300)_86%,_theme(colors.indigo.100)_90%,_theme(colors.indigo.300)_94%,_theme(colors.slate.200))_border-box] dark:[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-xl border border-transparent animate-border mb-8" aria-label="Cool hover effect card">
            <span className="pointer-events-none absolute -top-10 -left-8 h-40 w-40 transform rounded-full bg-gradient-to-tr from-indigo-300 via-pink-300 to-rose-300 opacity-30 blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-60 dark:opacity-20"></span>
            <span className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 transform rounded-full bg-gradient-to-bl from-emerald-200 via-cyan-200 to-indigo-200 opacity-25 blur-3xl transition-all duration-700 group-hover:scale-105 group-hover:opacity-50 dark:opacity-10"></span>

            <div className="glass-blur pointer-events-none absolute inset-x-0 top-0 h-14 bg-white/30 mix-blend-overlay dark:bg-gray-900/30"></div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                    {user.image ? (
                      <img src={user.image} alt={user.name} />
                    ) : (
                      <span className="text-white font-bold">{getInitials(user.name)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg leading-tight font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300/70">
                      {user.role} at <span className="font-semibold">{user.company}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-h-[14rem] overflow-hidden text-ellipsis">
                <p className="text-sm text-gray-600 dark:text-gray-300/80 line-clamp-5">
                  {user.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <Badge key={index} badgeData={{ label: skill, id: `skill-${index}` }} border="bottom" borderColor="#1076c1" bgColor="#000000b5" textColor="#ffffff" isRounded={false} />
                ))}
              </div>

              <div className="pt-2 w-full">
                <BtnReadMore label='View Profile' />
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}
