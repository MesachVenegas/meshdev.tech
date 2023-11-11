import Link from "next/link";
import { socialsLinks } from "@/app/libs/iconsMenus";

export default function SocialLinks() {
  return (
    <div className="flex justify-between w-[250px] ">
        {
          socialsLinks.map( ({name, icon, url}) => (
            <span key={name} className="hover:text-primary w-6 h-6">
              <Link href={url} className="menu-icon" target="_blank">
                {icon}
              </Link>
            </span>
          ))
        }
      </div>
  )
}
