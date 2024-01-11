import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Layout,
  Package,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import noise from "../assets/noise-01.png";
import pic1 from "../assets/carousel/tasker-1.png";
import pic2 from "../assets/carousel/cps-1.png";
import img2 from "../assets/carousel/pic-2.jpg";
import pic3 from "../assets/carousel/velvet-1.png";
import FormUI from "../components/ui-2/formui.tsx";
import { Link } from "react-router-dom";
import WordAnimation from "../components/WordAnimation.tsx";
// import { useRef } from "react";

function Hero() {
  // const contactSectionRef = useRef(null);
  function handleClick() {
    document
      .getElementById("contactSection")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hero-section h-[50vh]" id="hero-wrapper">
      <div className="wrapper relative overflow-y-hidden container-4xl p-4 py-10 h-full flex items-center">
        <div className="texts">
          <h1 className="h1 text-secondary">
            ...loves to design and build delightful interfaces.
          </h1>
          <p className="">Hello 👋, I'm Ben, welcome to my portfolio.</p>
          <div className="buttons mt-4 space-x-3">
            <Button
              variant="pill"
              size="pill"
              className="text-accent hover:bg-accent hover:text-white"
              onClick={handleClick}
            >
              Contact
            </Button>
            <Link to={"/about"}>
              <Button
                variant="pill"
                size="pill"
                className="text-accent hover:bg-accent hover:text-white pr-2"
              >
                About Me
                <ChevronRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

type TextGroupProps = {
  text: string;
  children?: React.ReactNode;
};

function TextGroup({ text, children }: TextGroupProps) {
  return (
    <div className="text-group rounded-md bg-slate-200 dark:bg-[#0c1221] p-3 max-w-max flex">
      {children}
      <p className="dark:text-white text-slate-950 w-[130px]">{text}</p>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro-section border" id="intro-section">
      <div className="wrapper p-4 container-4xl py-10">
        <div className="box-content max-w-[600px] mx-auto">
          <div className="sm:pl-[60px]">
            <h2 className="h3 text-secondary mb-2">
              Expect nothing but world-class service in{" "}
              <span className="text-accent">web development</span>
            </h2>
            <div>
              {/* FIXME: Find a better word animation */}
              <h3 className="mb-3 h3 text-slate-500">
                <span className="mr-1">Let's get your</span> <WordAnimation />{" "}
                <span className="ml-[76px]"> website online</span>.
              </h3>
              <p className="mt-2">
                The process always starts by addressing a few requirements and
                setting targets, that's it.
              </p>
              <p className="mt-2">
                Looking forward to building your project together.
              </p>
            </div>
          </div>

          <div className="mt-5 max-w-[500px] mx-auto">
            <div
              className="flex gap-2 flex-wrap justify-center p-8"
              id="intro-text-group"
            >
              <TextGroup text="Custom and Stunning designs">
                <Sparkles
                  size={26}
                  className="text-accent mr-2 shrink-0 self-center"
                />
              </TextGroup>
              <TextGroup text="SEO Optimized, and mobile friendly sites">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-accent size-[26px] mr-2 shrink-0 self-center"
                >
                  <path d="M12,16C10.34,16 9,14.66 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5C7.58,5 4,8.58 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13C2,7.48 6.48,3 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" />
                </svg>
              </TextGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderPill({ text }: { text: string }) {
  return (
    <div className="rounded-full text-[11px] text-accent border dark:border-[rgba(64,195,53,.3)] border-[rgba(64,195,53,.5)] max-w-max px-3 py-[2px]">
      {text}
    </div>
  );
}

type CarouselImgType = {
  header: string;
  text: string;
  url: string;
  siteUrl: string;
};

function CarouselImg({ header, text, url, siteUrl }: CarouselImgType) {
  return (
    <div className="shrink-0">
      <a href={siteUrl}>
        <img
          src={url}
          alt="image"
          className="w-[350px] h-[200px] rounded-lg shadow-lg object-cover"
        />
        <div className="pl-3 pt-2">
          <h3 className="h3 text-accent">{header}</h3>
          <p className="">{text}</p>
        </div>
      </a>
    </div>
  );
}

function Showcase() {
  return (
    <div className="overflow-y-hidden  relative" id="showcase-section">
      <div className="wrapper p-4 container-4xl">
        <img
          src={noise}
          alt="noise-img"
          className="absolute inset-0 w-full h-full object-fill object-center opacity-5 z-[-1]"
        />

        <div className="flex flex-col items-center">
          <HeaderPill text="Showcase" />

          <h3 className="h3 mt-5 dark:text-white text-slate-950 ">
            Selected projects
          </h3>
          <p className="text-slate-400 dark:text-primary">
            These are some of my recent works.{" "}
          </p>
        </div>
      </div>
      <div className="carousel-wrapper mt-5 w-full pb-10 flex lg:justify-center overflow-x-auto p-5 pt-2 gap-3">
        <CarouselImg
          url={pic2}
          header="CPS"
          text="A simplified clone of WPS"
          siteUrl="https://ben-dev10.github.io/cps/"
        />
        <CarouselImg
          url={pic3}
          header="Velvet"
          text="Landing page of a cosmetic company."
          siteUrl="https://ben-dev10.github.io/velvet/"
        />
        <CarouselImg
          url={pic1}
          header="Tasker"
          text="A simple to-do list webapp"
          siteUrl="https://ben-dev10.github.io/tasker/"
        />
      </div>
      <div className="w-full flex justify-center p-2 py-4">
        <Link
          to={"/projects"}
          className="flex items-center gap-[3px] text-[rgba(64,195,53,.8)] hover:underline"
        >
          See all projects <ArrowRight size={13} />{" "}
        </Link>
      </div>
    </div>
  );
}

function SkillsPill({ text }: { text: string }) {
  return (
    <div className="bg-[rgba(64,195,53,1)] dark:bg-[rgba(64,195,53,.5)]  rounded-full max-w-max px-3 py-1 border border-accent text-white">
      {text}
    </div>
  );
}

function Skills() {
  return (
    <div
      className="dark:[background-image:url(./assets/bgs/x-x--d.svg)] [background-image:url(./assets/bgs/x-x--l.svg)]"
      id="skills-section"
    >
      <div className="wrapper container-4xl p-4">
        <div className="flex flex-col items-center">
          <HeaderPill text="Skills" />

          <h3 className="h3 mt-3 dark:text-white text-black">Skillset</h3>
        </div>

        <div className="py-5 flex justify-center gap-2 flex-wrap mb-5">
          <SkillsPill text="Web Development" />
          <SkillsPill text="Graphic Design: Flyers" />
          <SkillsPill text="Graphic Design: Packaging" />
          <SkillsPill text="3D: Blender" />
        </div>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex gap-2 my-2 items-center ">
      <a href="https://x.com/NardQuarshie?t=5uT8pkHnOv1LvnLuU01qwA&s=09">
        <svg
          className="dark:fill-white/90  w-[18px] cursor-pointer hover:opacity-70"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">X (formerly Twitter) icon</desc>
          <path d="M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z"></path>
        </svg>
      </a>

      <a href="https://github.com/ben-dev10" title="github">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="dark:fill-white/90 text-black w-[18px] cursor-pointer hover:opacity-70"
        >
          <desc lang="en-US">GitHub icon</desc>
          <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" />
        </svg>
      </a>
    </div>
  );
}

function AboutMeCard() {
  const year = new Date();
  const age: number = 2002;
  return (
    <div className="about-me-card flex flex-col shadow-lg rounded-xl dark:bg-[#0c0d0d] bg-slate-100 max-w-[450px] mx-auto h-[350px]">
      <div
        className="header p-3 px-5 rounded-tl-xl rounded-tr-xl"
        id="card-header"
      >
        <div className="pull-handle w-full flex justify-center mb-5 p-1">
          <div className="min-w-[80px] max-w-[150px] rounded-full h-[5px] bg-slate-300"></div>
        </div>

        <div className="flex items-center gap-2 pb-8">
          <div className="avatar">
            <img
              src={img2}
              alt="avatar img"
              className="size-[40px] rounded-full border-2"
            />
          </div>

          <div>
            <p className="text-[14px] font-[CabinetG] text-white">
              Bernard Quarshie
            </p>
            <p className="text-accent">web and design enthusiast</p>
          </div>
        </div>
      </div>

      <div className="body bg-slate-100 flex flex-col dark:bg-black grow rounded-bl-xl rounded-br-xl p-4 px-6">
        <h4 className="h4 text-secondary">More About Me</h4>
        <p className="text-slate-500 mb-auto">
          I'm Bernard Quarshie, a {year.getFullYear() - age} year old and a
          passionate{" "}
          <span className="text-accent underline">Web Developer</span> who
          happens to know a little bit of{" "}
          <span className="text-accent underline">design</span>.
        </p>

        <div className="flex justify-end items-center">
          <div className="mr-auto">
            <Link to={"/about"}>
              <Button
                variant="pill"
                size="pill"
                className="text-accent hover:bg-accent hover:text-white pr-2"
              >
                About Me
                <ChevronRight size={14} />
              </Button>
            </Link>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="overflow-y-hidden  relative" id="aboutme-section">
      <div className="wrapper p-4 container-4xl pb-10">
        <img
          src={noise}
          alt="noise-img"
          className="absolute inset-0 w-full h-full object-fill object-center opacity-5 z-[-1]"
        />

        <div className="flex flex-col items-center mb-4">
          <HeaderPill text="About me" />
          <h3 className="h3 mt-3 dark:text-white text-slate-950 ">Who am I?</h3>
        </div>

        <div className="about-card-wrapper">
          {/* <svg width="791" height="539" viewBox="0 0 791 539" fill="none">
            <line
              x1="131.5"
              y1="1.85913e-08"
              x2="131.5"
              y2="539"
              stroke="#2563EB"
              strokeOpacity="0.2"
            />
            <line
              x1="688.5"
              y1="2.18557e-08"
              x2="688.5"
              y2="539"
              stroke="#2563EB"
              strokeOpacity="0.2"
            />
            <line
              x1="4.37114e-08"
              y1="501.5"
              x2="791"
              y2="501.5"
              stroke="url(#paint0_radial_31_250)"
              strokeOpacity="0.2"
            />
            <line
              x1="4.37114e-08"
              y1="26.5"
              x2="791"
              y2="26.5001"
              stroke="url(#paint1_radial_31_250)"
              strokeOpacity="0.2"
            />

            <foreignObject
              x="120"
              y="120"
              width="300"
              height="300"
              className="max-w-[400px]"
            ></foreignObject>

            <defs>
              <radialGradient
                id="paint0_radial_31_250"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(402.999 502.001) rotate(55.3483) scale(247.986 50562.8)"
              >
                <stop offset="0.00450785" stopColor="#2563EB" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_31_250"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(402.992 27.0082) rotate(16.6253) scale(370.489 180034)"
              >
                <stop stopColor="#2563EB" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg> */}

          <AboutMeCard />
        </div>
      </div>
    </div>
  );
}

type ServiceGroup = {
  icon: React.ReactNode;
  header: string;
  description: string;
};

function ServiceTextGroup({ header, description, icon }: ServiceGroup) {
  return (
    <div className="service-text-group shrink-0 w-full">
      <div className="">
        <div className="flex gap-1 items-center">
          <div className="text-accent">{icon}</div>
          <h3 className="h3 text-secondary">{header}</h3>
        </div>
        <div className="line h-[1px] bg-accent w-full rounded-full mb-2"></div>

        <div className="">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="overflow-y-hidden  relative " id="services-section">
      <div className="wrapper p-4 container-4xl pb-[60px] md:pb-[150px]">
        <img
          src={noise}
          alt="noise-img"
          className="absolute inset-0 w-full h-full object-fill object-center opacity-5 z-[-1]"
        />

        <div className="flex flex-col items-center" id="services-header">
          <HeaderPill text="Services" />

          <h3 className="h3 mt-5 dark:text-white text-slate-950 ">
            Services I Offer
          </h3>
          <p className="">
            I guarantee you nothing but quality work within agreed deadlines.
          </p>
        </div>

        <div className="mt-[60px] max-w-[400px] mx-auto flex flex-col items-center gap-10">
          <ServiceTextGroup
            header="Web Development"
            icon={<Package size={20} />}
            description="If you need any service with web development, then you've come to
              the right place: this includes coding, deployment and hosting, custom domain 
              integrations and anything related."
          />
          <ServiceTextGroup
            header="Web Design"
            icon={<Layout size={20} />}
            description="Design new or re-design existing websites."
          />
          <ServiceTextGroup
            header="Graphic Design"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                className="fill-accent"
              >
                <path d="m21.79 17.06-5.55-5.55 1.57-1.57-3.75-3.75-1.57 1.57-5.55-5.55-4.73 4.73 5.55 5.55L3 17.25V21h3.75l4.76-4.76 5.55 5.55 4.73-4.73zM9.18 11.07 5.04 6.94l1.9-1.9 1.27 1.27L7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm3.75 3.75 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-4.13-4.13zm2.203-9.697 2.538-2.539 3.748 3.748-2.538 2.539z" />
              </svg>
            }
            description="I also offer supporting graphic design services including simple logo designs and illustration."
          />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div
      className="bg-[rgba(64,195,53,.12)] border-t border-b border-[rgba(64,195,53,.9)] md:h-[200px]"
      id="contactSection"
    >
      <div className="wrapper container-4xl p-4">
        <div className="md:flex md:mx-auto md:max-w-max md:gap-[40px] ">
          <div className="texts md:mt-[3%] px-3">
            <div className="flex md:flex-col">
              <h1 className="h1 text-secondary">Ready?</h1>
              <h1 className="h1 text-secondary ml-1 md:ml-0">Let's Talk</h1>
            </div>
            <p className="md:w-[200px]">
              Send me a{" "}
              <a
                href="mailto:quarshiebernard552@gmail.com"
                className="text-accent underline"
              >
                mail
              </a>{" "}
              and I'll get back to you as soon as possible
            </p>
          </div>
          <div className="contact-card px-3">
            <FormUI />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Intro />
      <Showcase />
      <Skills />
      <AboutMe />
      <Services />
      <Contact />
      {/* <ContactForm /> */}
    </div>
  );
}
