//import { cn, compactNumber } from "@/lib/utils";
import { cn, compactNumber } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";
import { yellow } from "@mui/material/colors";

export default function UserGameDetails({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const user = useUserStore();
  return (
    <div
      className={cn("flex items-stretch justify-between gap-2", className)}
      {...props}
      
    >
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{backgroundColor:'white'}}>
        {/* <p className="mb-1 text-xs text-center" style={{color : "black"}}>Free AirDrop</p> */}
      
        <div className="inline-flex items-center space-x-1.5 text-white font-bold">
         
          {/* <span className="text-sm" style={{color : "black"}}>{10000}</span> */}
          <span className="text-sm" style={{color : "black"}}>+{1}</span>
        </div>
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>Earn Per Tap</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{backgroundColor:'white'}} >
       
       
          <div className="inline-flex items-center space-x-1.5 text-gradient font-bold">
            <span className="text-sm" style={{color : "black"}}>
              {compactNumber(100)}
            </span>
                    {/* <span className="text-sm" style={{color : "black"}}>{100}</span> */}

          </div>
          <p className="mb-1 text-xs text-center" style={{color : "black"}}>Daily Earn</p>
       
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{backgroundColor:'white'}}>
        
        <div className="inline-flex items-center space-x-1.5 text-white font-bold">
          
          <span className="text-sm" style={{color : "black"}}>
            {compactNumber(10000)}
          </span>
        </div>
        <p className="mb-1 text-xs text-center" style={{color : "black"}}>Reward</p>
      </div>
    </div>
  );
}
