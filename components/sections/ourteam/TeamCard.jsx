import React from "react";
import Link from "next/link";
import { FiDribbble, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const TeamCard = ({ teamMember }) => {
  const { name, position, picture, linkedIn, gitHub, x, instagram, dribbble } = teamMember;
  return (
    <div className="w-full sm:w-[48%] md:w-1/5 md:min-w-[23%] flex flex-col bg-white mb-10 rounded-md border">
      <div className="h-60 w-full" style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
      }}>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="w-full flex flex-col gap-1">
          <h2 className="font-bold text-black text-base md:text-xl">{name}</h2>
          <p className="text-blue-400 text-sm md:text-base">{position}</p>
        </div>
        <div className="w-full flex gap-5 text-blue-400">
          {linkedIn &&
            <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white">
              <Link href={linkedIn} target="_blank">
                <SlSocialLinkedin />
              </Link>
            </span>
          }
          {instagram &&
            <span className="p-2 rounded-full bg-gray-100 hover:bg-red-400 hover:text-white">
              <Link href={instagram} target="_blank">
                <FiInstagram />
              </Link>
            </span>
          }
          {gitHub &&
            <span className="p-2 rounded-full bg-gray-100 hover:bg-red-400 hover:text-white">
              <Link href={gitHub} target="_blank">
                <FiGithub />
              </Link>
            </span>
          }
          {x &&
            <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white">
              <Link href={x} target="_blank">
                <FiTwitter />
              </Link>
            </span>
          }
          {dribbble &&
            <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white">
              <Link href={x} target="_blank">
                <FiDribbble />
              </Link>
            </span>
          }
        </div>
      </div>
    </div>

  );
};

export default TeamCard;
