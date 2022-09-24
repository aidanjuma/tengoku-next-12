import React from "react";
import Link from "next/link";
import { GithubOutline } from "@easy-eva-icons/react";

// TODO: Sticky Footer
const Footer = () => (
  <footer>
    <div className="flex flex-col items-center text-center p-4 bg-onBackground">
      <p>
        <strong>disclaimer: </strong>tengoku.stream does not store any video
        files on its server; it is merely a <strong>search aggregator</strong>{" "}
        which{" "}
        <strong>
          links to content hosted by 3rd parties; we are not affiliated in any
          way.
        </strong>
      </p>
      <div className="w-12 h-[2px] my-2 rounded-full bg-[#373e47]" />
      <div className="flex flex-col items-center">
        <Link href={"https://github.com/aidanjuma/tengoku-streaming"}>
          <GithubOutline
            className="w-8 h-8 hover:text-white transition-all"
            cursor={"pointer"}
          />
        </Link>
        <p>open-source software with MIT Licence</p>
        <p>made with 💖 in the UK</p>
      </div>
    </div>
  </footer>
);

export default Footer;
