import React from "react";
import { ContactLogo } from "./ContactLogo";
import github from "../assets/github-pink.svg";
import instagram from "../assets/instagram-pink.svg";
import email from "../assets/email-pink.svg";
import phone from "../assets/phone-pink.svg";
import phoneLime from "../assets/phone-lime.svg";
import emailLime from "../assets/email-lime.svg";
import githubLime from "../assets/github-lime.svg";
import instagramLime from "../assets/instagram-lime.svg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="mx-auto w-full max-h-fit">
      

      <div className=" w-full flex  space-x-6 md:space-x-10 mt-10 justify-center items-center ">
        <ContactLogo
          name={`github`}
          url={`https://github.com/uamadasun`}
          image={github}
          hoverImage={githubLime}
        />
        <ContactLogo
          name={`instagram`}
          url={`https://instagram.com/uchenna.io`}
          image={instagram}
          hoverImage={instagramLime}
        />
        <ContactLogo
          name={`email`}
          url={`mailto:me@uchenna.io`}
          image={email}
          hoverImage={emailLime}
        />
        <ContactLogo
          name={`phone`}
          url={`tel:(415)439-0250
`}
          image={phone}
          hoverImage={phoneLime}
        />
      </div>
    </div>
  );
};
