import Link from "next/link";
import { Info } from "./Info";

const Menu = () => {
  return (
    <div className="py-2 border-b-2 border-[#d4d2d5]">
      <article className="flex flex-wrap justify-center sm:justify-between items-center w-full max-w-screen-xl mx-auto px-4 sm:px-10 gap-4">
        <div className="flex items-center gap-5">
          <Info icon="call" label="+(1) 2019375338" />
          <Info icon="email" label="nova@gmail.com" />
          <Info icon="map" label="Location" />
        </div>
        <ul className="gap-3 sm:flex hidden">
          {/* X / Twitter */}
          <li>
            <Link href={"https://www.x.com"} target="_blank">
              <svg className="w-7 h-7 fill-[#000000]">
                <use
                  xlinkHref="./sprite.svg#icon-x"
                  href="./sprite.svg#icon-x"
                />
              </svg>
            </Link>
          </li>

          {/* LinkedIn */}
          <li>
            <Link
              href={
                "https://www.linkedin.com/in/estiven-andres-mejia-gueto-24a05b303/"
              }
              target="_blank"
            >
              <svg className="w-7 h-7 fill-[#0077B5]">
                <use
                  xlinkHref="./sprite.svg#icon-linkedin"
                  href="./sprite.svg#icon-linkedin"
                />
              </svg>
            </Link>
          </li>

          {/* Facebook */}
          <li>
            <Link href={"https://www.facebook.com"} target="_blank">
              <svg className="w-7 h-7 fill-[#1877F2]">
                <use
                  xlinkHref="./sprite.svg#icon-facebook"
                  href="./sprite.svg#icon-facebook"
                />
              </svg>
            </Link>
          </li>

          {/* Youtube */}
          <li>
            <Link href="https://www.youtube.com" target="_blank">
              <svg className="w-7 h-7 fill-red-500">
                <use
                  xlinkHref="./sprite.svg#icon-youtube"
                  href="./sprite.svg#icon-youtube"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
};

export { Menu };
