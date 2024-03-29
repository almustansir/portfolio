import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import samit from "../public/pfp.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import { useState } from "react";
import PortfolioMainComp from "../components/PortfolioMainComp";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samit&apos;s Portfolio</title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-gray-300">
            <h1 className=" text-xl font-burtons">Samit_08</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                  // Update pdf resume
                  href="https://github.com/almustansir"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Al Mustansir Samit
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              Developer & Designer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Freelancer providing services for programming and design content
              needs. Join me below and let&apos;s build something awesome!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
              {/* update links */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/al-mustansir-samit-789464134"
              >
                <AiFillLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/almustansir"
              >
                <AiFillGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/al.mustansir"
              >
                <AiFillFacebook />
              </a>
            </div>
          </div>
          <div className=" relative mx-auto rounded-full w-80 h-80 mt-15 overflow-hidden md:w-96 md:h-96 bg-gradient-to-r from-cyan-500 to-teal-500">
            <Image src={samit} objectFit="contain" layout="fill" />
          </div>
        </section>

        <section className="dark:text-gray">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">
              Services I offer
            </h3>
            <p className="dark:text-gray-300">
              I am available to do remote work for{" "}
              <span className=" text-teal-500">NEXT.js</span>,{" "}
              <span className=" text-teal-500">Vue.js</span>,{" "}
              <span className=" text-teal-500">Typescript</span>,{" "}
              <span className=" text-teal-500">Firebase</span> and{" "}
              <span className=" text-teal-500">SQL</span>. I can design UI on{" "}
              <span className=" text-teal-500">Figma</span>. I can offer a whide
              range of services depending on requirement.
            </p>
          </div>
          <div className="lg:flex lg:justify-center gap-40 ">
            <div className="text-center shadow-lg p-10 my-10 rounded-xl dark:bg-gray-300">
              <Image src={code} width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">Developing systems according to your needs</p>
              <h4 className="py-4 text-teal-600">Development tools I use:</h4>
              <p className="py-1 text-gray-800">Next.js</p>
              <p className="py-1 text-gray-800">Vue.js</p>
              <p className="py-1 text-gray-800">Typescript</p>
              <p className="py-1 text-gray-800">Firebase</p>
              <p className="py-1 text-gray-800">SQL</p>
              <p className="py-1 text-gray-800">Tailwind CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 my-10 rounded-xl dark:bg-gray-300">
              <Image src={design} width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2">
                Making elegant designs suited for your design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use:</h4>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Canva</p>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Gimp</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* portfolios are added here web4*/}
            <PortfolioMainComp
              imageLink="/ytCloneImg.png"
              WebsiteLink="https://warm-sawine-2cb8ec.netlify.app/"
              GithubLink="https://github.com/almustansir/youtube-clone"
              imgAlt="ytclone"
            />
            <PortfolioMainComp
              imageLink="/todoImg.png"
              WebsiteLink="https://todoapp-beta-rust.vercel.app/"
              GithubLink="https://github.com/almustansir/TodoApp"
              imgAlt="todoWebImage"
            />
            <PortfolioMainComp
              imageLink="/NetFlixCloneSite.png"
              WebsiteLink="https://nextjs-netflix-clone-netflix-clone-u6m1.vercel.app/"
              GithubLink="https://github.com/almustansir/nextjs-netflix-clone"
              imgAlt="netflixCloneImg"
            />
            <PortfolioMainComp
              imageLink="/personalPortfolioImg.png"
              WebsiteLink="https://portfolio-almustansir.vercel.app/"
              GithubLink="https://github.com/almustansir/portfolio"
              imgAlt="portfolioPageImg"
            />
          </div>
        </section>
        {/* Add footer section */}
      </main>
    </div>
  );
}
