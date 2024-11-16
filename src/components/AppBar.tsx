import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const links = [
  { name: "Explore", link: "/", image: "/images/explore.png" },
  { name: "Missions", link: "/missions", image: "/images/missions.png" },
  { name: "Friends", link: "/friends", image: "/images/friends.png" },
  { name: "Report", link: "/earn", image: "/images/report.png" },
  { name: "Earn", link: "/xeerwallet", image: "/images/earn_money_icon.png" },

];

export default function AppBar() {
  const { pathname } = useLocation();
  return (
    
    <div className="fixed left-0  w-full px-5 py-0 bottom-2">



<div className="flex items-center w-full p-2 gap-4 max-w-lg mx-auto card" style={{backgroundColor:'white'  }}>
<div className="flex flex-row gap-1" >
        {
        links.map((link, key) => (
          <Link
            key={key}
            to={link.link}
            className={cn(
              "relative flex items-center rounded-xl flex-col justify-center font-bold text-xs px-2.5 py-1.5 gap-1 select-none flex-1 text-black/30",
              pathname === link.link && " text-black"
            )}
          >
            {link.image && (
              <img
                src={link.image}
                alt={link.name}
                className={cn(
                  "w-7 h-7 object-contain filter grayscale",
                  pathname === link.link && "filter-none"
                )}
              />
            )}
            <span>{link.name}</span>
            {/* <div
              className={cn(
                "absolute hidden -bottom-1 left-1/2 -translate-x-1/2 bg-[#000] rounded-sm shadow-[0px_0px_1px_0px_#000] h-1 w-4/5",
                pathname === link.link && "block"
              )}
            /> */}
          </Link>
        ))}
        </div>
      </div>
   </div>
  );
}
