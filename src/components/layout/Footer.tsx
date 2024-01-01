import { Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* <a href="#">
        <svg
          className="dark:fill-white/90 w-[18px] cursor-pointer hover:opacity-70"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">Instagram icon</desc>
          <path d="M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z"></path>
        </svg>
      </a>

      <a href="#">
        <svg
          className="dark:fill-white/90 w-[22px] cursor-pointer hover:opacity-70"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          aria-hidden="false"
        >
          <desc lang="en-US">Facebook icon</desc>
          <path d="M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z"></path>
        </svg>
      </a> */}

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

function Copyright() {
  const year = new Date();
  return (
    <div className="flex gap-2 py-2 items-center">
      <Link to={`/`} title="Go to homepage">
        <Layers3 className="text-accent" />
      </Link>
      <div className="">Copyright &copy; {year.getFullYear()}</div>
      <div className="pl-2 border-l border-secondary">
        <p className="font-bold text-secondary">Nard Designs</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="border-t">
      <div className="wrapper container-4xl p-4">
        <Socials />
        <div className="md:flex md:items-center">
          <div className="copyright">
            <Copyright />
          </div>

          <div className="links md:ml-auto mt-5 md:mt-0 flex gap-2">
            <a
              href="#"
              className="text-accent hover:underline opacity-70 hover:opacity-100"
            >
              Home
            </a>
            <a
              href="#"
              className="text-accent hover:underline opacity-70 hover:opacity-100"
            >
              Work
            </a>
            <a
              href="#"
              className="text-accent hover:underline opacity-70 hover:opacity-100"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
