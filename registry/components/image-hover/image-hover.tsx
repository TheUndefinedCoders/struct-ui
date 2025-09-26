'use client';
import React from 'react';

export default function ImageHover() {

  type ImageDataType = {
    imgURL: string;
    redirectURL?: string;
  }

  const imageData: ImageDataType[] = [
    {
      imgURL: "https://images.unsplash.com/photo-1571741164507-777ed01b36a2?q=80&w=2670",
      redirectURL: "/",
    },
    {
      imgURL: "https://images.unsplash.com/photo-1746289434176-40f821d31216?q=80&w=2670",
      redirectURL: "/",
    },
    {
      imgURL: "https://images.unsplash.com/photo-1710402536084-b583dc4df3ca?q=80&w=2670",
      redirectURL: "/",
    },
    {
      imgURL: "https://images.unsplash.com/photo-1694315643343-b32de9a66d63?q=80&w=2670",
      redirectURL: "/",
    }
  ];


  return (
    <>
      <section className="">
        <div className="2xl:max-w-screen-3xl mx-auto flex mt-12 max-w-screen-xl flex-col justify-center space-y-24 px-8 py-12 md:px-12 lg:py-24">
          <div className="mx-auto flex flex-col sm:flex-row">
            {imageData.map((item, index) => (
              <a key={index} href={item.redirectURL} target="_blank" rel="noreferrer">
                <img
                  src={item.imgURL}
                  className={`h-full w-full origin-bottom transform rounded-xl object-cover duration-500 hover:-translate-y-12 hover:scale-150 hover:rotate-0 ${index % 2 === 0 ? 'rotate-6' : '-rotate-12'}`}
                  alt="struct-ui-image-hover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
