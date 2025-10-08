'use client';

export default function TeamCards() {

  const teamData = [
    { name: 'Md Numan Ahmed', role: 'Full Stack Engineer', imgSrc: 'https://numan-dev.web.app/images/my-pic.png', redirectURL: 'https://numan-dev.web.app' },
    { name: 'Vishal Yadav', role: 'Mobile App Developer', imgSrc: 'https://avatars.githubusercontent.com/u/49347461?v=4', redirectURL: 'https://github.com/iamvishaldev' },
    { name: 'Yogesh Mishra', role: 'Frontend Engineer', imgSrc: 'http://ugc.production.linktr.ee/f7a610c9-b297-45b4-90ae-4003efa79a53_IMG-20240609-110006941.jpeg?io=true&size=avatar-v3_0', redirectURL: 'https://linktr.ee/yogi.js' },
    { name: 'Shahid Hussain', role: 'Backend Engineer', imgSrc: 'https://shahidhussain.netlify.app/assets/ShahidHussainProfile-DE8MYk3_.jpg', redirectURL: 'https://shahidhussain.netlify.app' },
    { name: 'Saheb Mukherjee', role: 'Data Scientist', imgSrc: '' },
    { name: 'Nulla Dev', role: 'Backend Engineer', imgSrc: 'https://avatars.githubusercontent.com/u/184555479?v=4' },
    { name: 'Ujjawal Kumar Dubey', role: 'Mobile App Developer', imgSrc: '' },
    { name: 'ZAHID KHAN', role: 'Full Stack Engineer', imgSrc: 'https://avatars.githubusercontent.com/u/76157268?v=4', redirectURL: 'https://portfolio-a4155.web.app' },
    { name: 'Chaitanya Khanorkar', role: 'Product Manager', imgSrc: '' },
  ];

  const getInitials = (fullName: string) => {
    if (!fullName) return "N A";
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0]?.[0] || "";
    const lastName = nameParts[nameParts.length - 1]?.[0] || "";
    return (`${firstName} ${lastName}`).toUpperCase();
  }

  return (
    <section className="text-gray-400 body-font">
      <div className="mx-auto">

        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white ">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Meet the dedicated and passionate individuals who form our team. We are a group of talented professionals committed to delivering excellence and driving innovation in our field.</p>
        </div>

        <div className="flex flex-wrap -m-2">
          {teamData.map((team, index) => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
              <a href={team.redirectURL || 'javascript:void(0);'} target={team.redirectURL ? '_blank' : '_self'} rel="noopener noreferrer">
                <div className="h-full flex items-center border-gray-300 border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {team.imgSrc ? (
                    <img src={team.imgSrc} alt={team.name} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
                  ) : (
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{getInitials(team.name)}</span>
                    </div>
                  )}

                  <div className="flex-grow">
                    <h2 className="text-gray-900 dark:text-white title-font font-medium">{team.name}</h2>
                    <p className="text-gray-600">{team.role}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
