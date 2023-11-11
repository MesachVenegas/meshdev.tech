import Image from "next/image";
import Link from "next/link";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center py-6 bg-secondary/60 border-black border-1 backdrop-blur-sm">
      <Link href="/" className="flex gap-2 items-center justify-center h-16 w-[250px]">
        <Image src="/assets/logo_rose.svg" width={80} height={50} alt="meshdev_logo"/>
        <Image src="/assets/text_logo.svg" width={120} height={80} alt="meshdev_text"/>
      </Link>
      <SocialLinks />
      <p>
        Made with <span className="text-primary"><FontAwesomeIcon icon={faHeart} width={16}/></span> | MeshDev © 2023
      </p>
    </footer>
  )
}