//import { cn, compactNumber } from "@/lib/utils";
import { cn, compactNumber } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";

export default function DashBoardWidget({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const user = useUserStore();
  return (
    
    <div>
<div
      className={cn("flex p-2 items-stretch justify-between gap-2", className)}
      {...props}
    >
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl">
        {/* <p className="mb-1 text-xs text-center" style={{color : "black"}}>Free AirDrop</p> */}
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>Booster</p>
        <div className="inline-flex items-center space-x-1.5 text-white font-bold">
          {/* <span className="text-sm" style={{color : "black"}}>{10000}</span> */}
          <span className="text-sm" style={{color : "black"}}>Free</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl">
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>My Reward</p>
        {user.level && (
          <div className="inline-flex items-center space-x-1.5 text-gradient font-bold">
            <span className="text-sm" style={{color : "black"}}>
              {compactNumber(0)}
            </span>
                    {/* <span className="text-sm" style={{color : "black"}}>{100}</span> */}

          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl">
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>My Team</p>
        <div className="inline-flex items-center space-x-1.5 text-white font-bold">
          <span className="text-sm" style={{color : "black"}}>
            {compactNumber(0)}
          </span>
        </div>
      </div>

      
    </div>


    <div
      className={cn("flex p-2 items-stretch justify-between gap-2", className)}
      {...props}
    >
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl">
        {/* <p className="mb-1 text-xs text-center" style={{color : "black"}}>Free AirDrop</p> */}
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>Sponser Reward</p>
        <div className="inline-flex items-center space-x-1.5 text-white font-bold">
          {/* <span className="text-sm" style={{color : "black"}}>{10000}</span> */}
          <span className="text-sm" style={{color : "black"}}>{0}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl">
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>Level Reward</p>
        {user.level && (
          <div className="inline-flex items-center space-x-1.5 text-gradient font-bold">
            <span className="text-sm" style={{color : "black"}}>
              {compactNumber(0)}
            </span>
                    {/* <span className="text-sm" style={{color : "black"}}>{100}</span> */}

          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl">
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>Salary Reward</p>
        <div className="inline-flex items-center space-x-1.5 text-white font-bold">
          <span className="text-sm" style={{color : "black"}}>
            {compactNumber(0)}
          </span>
        </div>
      </div>

      
    </div>
    </div>

    
  );
}
