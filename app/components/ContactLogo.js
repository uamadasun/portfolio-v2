import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ContactLogo = (props) => {
  const { url, image, name, hoverImage } = props;
  return (
    <Link href={url} className="group" target="_blank" rel="noopener noreferrer" title={`${name}`}>
      <Image
        src={image.src}
        height={50}
        width={50}
        alt={`${name} logo`}
        className={`h-6 w-6 md:h-8 md:w-8 hover:cursor-pointer group-hover:hidden`}
      />
      <Image
        src={hoverImage.src}
        height={50}
        width={50}
        alt={`${name} logo`}
        className={`h-6 w-6 md:h-8 md:w-8 hover:cursor-pointer hidden group-hover:flex`}
      />
      
    </Link>
  );
};
