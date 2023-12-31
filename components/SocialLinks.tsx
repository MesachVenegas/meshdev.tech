import Link from "next/link";
import { socialsLinks } from "@/app/libs/iconsMenus";

export default function SocialLinks() {
  return (
    <div className="flex justify-between w-[250px] ">
        {
          socialsLinks.map( ({name, icon, url}) => (
            <span key={name} className="hover:text-rose-500 w-6 h-6">
              <Link href={url} className="menu-icon" target="_blank" title={`${name} link icon`}>
                {icon}
              </Link>
            </span>
          ))
        }
      </div>
  )
}
