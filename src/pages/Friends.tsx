import CopyIcon from "@/components/icons/CopyIcon";
import { Button } from "@/components/ui/button";
//import { $http } from "@/lib/http";
//import { compactNumber } from "@/lib/utils";
import { uesStore } from "@/store";
import { useUserStore } from "@/store/user-store";
//import { PaginationResponse } from "@/types/Response";
//import { UserType } from "@/types/UserType";
//import { useQuery } from "@tanstack/react-query";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import levelConfig from "@/config/level-config";
import { useUser } from "@/TelegramUserContext";

const shareMessage = encodeURI(
  "Minnion Community with me!"
);

export default function Friends() {
  const [, copy] = useCopyToClipboard();
  //const { referral, levels } = uesStore();
  const { user } = useUser();


  const [showMoreBonuses, setShowMoreBonuses] = useState(false);

  // const referralLink = useMemo(
  //   () => `${import.meta.env.VITE_BOT_URL}/?start=ref${user!.id.toString()}`,
  //   [user!.id.toString()]
  // );
  const referralLink = "";
  // const referredUsers = useQuery({
  //   queryKey: ["referredUsers"],
  //   queryFn: () => $http.$get<PaginationResponse<UserType>>("/referred-users"),
  // });

  return (
    <div
    className="flex-1 px-5 pb-20 bg-center bg-cover"
    style={{
      background: "linear-gradient(to bottom, #f39f1b , #f39f1b, black )",

        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
    }}
  >
      <div className="flex flex-col flex-1 w-full h-full px-6 py-8 pb-24 mt-12 ">

       
        
       <div className=" flex flex-col w-full" style={{alignItems:"center"}}>
       <img
              src="/images/chest.png"
              height={"100px"}
              width={"100px"}

            />
            <div className="text-2xl  font-medium text-left" style={{color : "white"}}>
              <p>Invite a friend</p>
           
            </div>
        

       </div>
       
       
        <div className="relative flex-1" >
          <div className="absolute inset-0 w-full h-[calc(100%-1rem)] py-6 mt-4 " style={{color : "green"}}>
            {/* {!showMoreBonuses ? (
              <div className="text-center" style={{color : "white"}}>
                <button
                  className="rounded-full border-2 border-[#000]/10 text-[#000] text-xs font-bold py-2.5 px-4"style={{color : "white"}}
                  onClick={() => setShowMoreBonuses((value) => !value)}
                >
                  Team Refferal
                </button>
              </div>
            ) : (
              <>
                <p
                  className="mt-8 text-sm font-bold uppercase" style={{color : "white"}}
                  onClick={() => setShowMoreBonuses((value) => !value)}
                >
                  Team Refferal
                </p>
                <div className="relative flex-1 mt-6 min-h-60">
                  <div className="absolute inset-0 w-full h-full overflow-y-auto">
                    <table className="w-full">
                      <thead className="text-xs text-white/30">
                        <tr className="border-b border-[#000]/10">
                          <th className="px-2 py-2 text-left" style={{color : "white"}}>Account</th>
                          <th className="px-2 py-2 text-right" style={{color : "white"}}>Level</th>
                          <th className="px-2 py-2 text-right" style={{color : "white"}}>Stack Amnt.</th>
                          <th className="px-2 py-2 text-right" style={{color : "white"}}>DateTime</th>

                        </tr>
                      </thead>
                      <tbody>
                      <tr
                             
                              className="border-b border-[#000]/10"
                            >
                              <td className="px-2 py-2 text-xs" style={{color : "black"}}>{"item.name"}</td>
                              <td className="px-2 py-2" style={{color : "black"}}>
                                <div className="flex items-center justify-end gap-1">
                                 
                                  <span className="text-xs font-medium text-primary" style={{color : "black"}}>
                                  
                                  {(
                                     0
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 py-2">
                                <div className="flex items-center justify-end gap-1">
                                 
                                  <span className="text-xs font-medium text-primary" style={{color : "black"}}>
                                    {(
                                     0
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 py-2">
                                <div className="flex items-center justify-end gap-1">
                                 
                                  <span className="text-xs font-medium text-primary" style={{color : "black"}}>
                                    {(
                                    "01/01/2024"
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </td>
                            </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
           */}


<>
                <p
                  className="flex flex-col w-full" style={{color : "white" ,alignItems:"center"}}
                 // onClick={() => setShowMoreBonuses((value) => !value)}
                >
                  Team Refferal
                </p>
                <div className="relative flex-1 mt-6 min-h-60">
                  <div className="absolute inset-0 w-full h-full overflow-y-auto">
                    <table className="w-full">
                      <thead className="text-xs text-white/30">
                        <tr className="border-b border-[#000]/10">
                          <th className="px-2 py-2 text-left" style={{color : "white"}}>Account</th>
                          <th className="px-2 py-2 text-right" style={{color : "white"}}>Level</th>
                          <th className="px-2 py-2 text-right" style={{color : "white"}}>Stack Amnt.</th>
                          <th className="px-2 py-2 text-right" style={{color : "white"}}>DateTime</th>

                        </tr>
                      </thead>
                      <tbody>
                      <tr
                             
                              className="border-b border-[#000]/10"
                            >
                              <td className="px-2 py-2 text-xs" style={{color : "black"}}>{"item.name"}</td>
                              <td className="px-2 py-2" style={{color : "black"}}>
                                <div className="flex items-center justify-end gap-1">
                                 
                                  <span className="text-xs font-medium text-primary" style={{color : "black"}}>
                                  
                                  {(
                                     0
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 py-2">
                                <div className="flex items-center justify-end gap-1">
                                 
                                  <span className="text-xs font-medium text-primary" style={{color : "black"}}>
                                    {(
                                     0
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 py-2">
                                <div className="flex items-center justify-end gap-1">
                                 
                                  <span className="text-xs font-medium text-primary" style={{color : "black"}}>
                                    {(
                                    "01/01/2024"
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </td>
                            </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <div
            className=" card"
            style={{color:"white"}}
            onClick={() => {
              copy(referralLink);
              toast.success("Referral link copied to clipboard");
            }}
          >
            <CopyIcon className="w-5 h-5" />
          </div>
          <Button
            className="flex-1"
            onClick={() =>
              Telegram.WebApp.openTelegramLink(
                `https://t.me/share/url?text=${shareMessage}&url=${referralLink}`
              )
            }
          >
            Invite a friend
          </Button>
        </div>
      </div>
    </div>
  );
}
