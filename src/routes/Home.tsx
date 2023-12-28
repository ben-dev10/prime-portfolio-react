import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import noise from "../assets/noise-01.png";
import pic1 from "../assets/carousel/pic-1.png";
import pic2 from "../assets/carousel/pic-2.jpg";
import pic3 from "../assets/carousel/pic-3.jpg";

function Hero() {
  return (
    <div className="hero-section h-[50vh]" id="hero-wrapper">
      <div className="wrapper relative overflow-y-hidden container-4xl p-4 py-10 h-full flex items-center">
        <div className="texts">
          <h1 className="h1 text-secondary">
            ...loves to design and build delightful interfaces.
          </h1>
          <p className="">Hello 👋, I'm Ben, welcome to my portfolio.</p>
          <div className="buttons mt-4">
            <Button variant="pill" size="pill" className="text-accent">
              Contact
            </Button>
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
          <h2 className="h3 text-secondary mb-2">
            Expect nothing but world class service in{" "}
            <span className="text-accent">web development</span>.
          </h2>
          <p>
            Getting your site online should never be a hassle, that's why I'm
            ready to be your guide every step along the way, from{" "}
            <span className="text-accent opacity-80">idea</span> to
            <span className="text-accent opacity-80"> deployment</span>.
          </p>
          <p className="mt-2">
            The process always starts by addressing a few requirements and
            setting targets, that's it.
          </p>
          <p className="mt-2">
            Looking forward to building your project together.
          </p>

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

type HeaderPill = { text: string };

function HeaderPill({ text }: HeaderPill) {
  return (
    <div className="rounded-full text-[11px] text-accent border border-[rgba(64,195,53,.3)] max-w-max px-3 py-[2px]">
      {text}
    </div>
  );
}

type CarouselImgType = {
  header: string;
  text: string;
  url: string;
};

function CarouselImg({ header, text, url }: CarouselImgType) {
  return (
    <div className="shrink-0">
      <img
        src={url}
        alt="image"
        className="w-[350px] h-[200px] rounded-lg shadow-lg object-cover"
      />
      <div className="pl-3 pt-2">
        <h3 className="h3 text-accent">{header}</h3>
        <p className="">{text}</p>
      </div>
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
          <p className="">Here are some of my recent works. </p>
        </div>
      </div>
      <div className="carousel-wrapper mt-5 w-full pb-10 flex lg:justify-center overflow-x-auto p-5 pt-2 gap-3">
        <CarouselImg url={pic2} header="CPS" text="A simplified clone of WPS" />
        <CarouselImg
          url={pic3}
          header="Velvet"
          text="Landing page of a cosmetic company."
        />
        <CarouselImg
          url={pic1}
          header="Tasker"
          text="A simple to-do list webapp"
        />
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
    </div>
  );
}
