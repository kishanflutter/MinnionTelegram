import { cn, compactNumber } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";

interface DashBoardWidgetProps {
  className?: string;  // Optional className prop
  data: UserData | null;  // Define the expected structure of the 'data' prop
}

export default function DashBoardWidget({
  className,
  data,  // Accept the 'data' prop
  ...props
}: DashBoardWidgetProps) {
  const user = useUserStore();

  // Optionally, check if `data` is available
  const userData = data || user;

  return (
    <div {...props}>
      <div
        className={cn("flex p-1 items-stretch justify-between gap-2", className)}
      >
        <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{ backgroundColor: 'white' }}>
          <div className="inline-flex items-center space-x-1.5 text-white font-bold">
            <span className="text-sm" style={{ color: "black" }}>{compactNumber(userData?.booster || 0)}</span>
          </div>
          <p className="mb-1 text-xs text-center" style={{ color: "black" }}>Booster</p>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{ backgroundColor: 'white' }}>
          <div className="inline-flex items-center space-x-1.5 text-gradient font-bold">
            <span className="text-sm" style={{ color: "black" }}>
              {compactNumber(userData?.myreward || 0)}
            </span>
          </div>
          <p className="mb-1 text-xs text-center" style={{ color: "black" }}>My Reward</p>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{ backgroundColor: 'white' }}>
          <div className="inline-flex items-center space-x-1.5 text-white font-bold">
            <span className="text-sm" style={{ color: "black" }}>
              {compactNumber(userData?.myTeam || 0)}
            </span>
          </div>
          <p className="mb-1 text-xs text-center" style={{ color: "black" }}>My Team</p>
        </div>
      </div>

      <div
        className={cn("flex p-1 items-stretch justify-between gap-2", className)}
      >
        <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{ backgroundColor: 'white' }}>
          <div className="inline-flex items-center space-x-1.5 text-black font-bold">
            <span className="text-sm" style={{ color: "black" }}>
              {compactNumber(userData?.sponsorReward || 0)}
            </span>
          </div>
          <p className="mb-1 text-xs text-center" style={{ color: "black" }}>Sponsor Reward</p>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{ backgroundColor: 'white' }}>
          <div className="inline-flex items-center space-x-1.5 text-gradient font-bold">
            <span className="text-sm" style={{ color: "black" }}>
              {compactNumber(userData?.levelReward || 0)}
            </span>
          </div>
          <p className="mb-1 text-xs text-center" style={{ color: "black" }}>Level Reward</p>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 p-2 select-none bg-black/10 backdrop-blur-sm rounded-xl card" style={{ backgroundColor: 'white' }}>
          <div className="inline-flex items-center space-x-1.5 text-white font-bold">
            <span className="text-sm" style={{ color: "black" }}>
              {compactNumber(userData?.salaryReward || 0)}
            </span>
          </div>
          <p className="mb-1 text-xs text-center" style={{ color: "black" }}>Salary Reward</p>
        </div>
      </div>
    </div>
  );
}
