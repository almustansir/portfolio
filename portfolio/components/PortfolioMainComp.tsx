import React from "react";
import Image from "next/image";

interface Props {
  imageLink: string;
  WebsiteLink: string;
  GithubLink: string;
  imgAlt: string;
}

const PortfolioMainComp: React.FC<Props> = ({
  imageLink,
  WebsiteLink,
  GithubLink,
  imgAlt,
}) => {
  return (
    <div className="relative basis-1/3 flex-1 ">
      <div className="portfolio_img_container">
        <Image
          className="absolute rounded-lg object-cover"
          src={imageLink}
          width={"1200px"}
          height={"800px"}
          layout="responsive"
          alt={imgAlt}
        />
        <div className="portfolio_img_overlay"></div>
        <div className="portfolio_overlay_button">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md mb-5"
            href={WebsiteLink}
          >
            Visit Website
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md"
            href={GithubLink}
          >
            Checkout Git
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMainComp;
