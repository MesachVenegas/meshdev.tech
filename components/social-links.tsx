import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/lib/utils";
import { socialsLinks } from "@/lib/iconsMenus";

export default function SocialLinks({ isFooter, className }: { isFooter?: boolean, className?: string}) {
  return (
		<div
			className={cn(
				`flex gap-8 w-[250px] ${isFooter ? "justify-center" : "justify-start"}`,
        className
			)}>
			{socialsLinks.map(({ name, icon, url }) => (
				<span key={name} className="hover:text-primary w-6 h-6">
					<Link
						href={url}
						className="menu-icon"
						target="_blank"
						title={`${name} link icon`}>
						{isFooter ? (
							<FontAwesomeIcon icon={icon} size="xl" />
						) : (
							<FontAwesomeIcon icon={icon} size="2xl" />
						)}
					</Link>
				</span>
			))}
		</div>
	);
}
