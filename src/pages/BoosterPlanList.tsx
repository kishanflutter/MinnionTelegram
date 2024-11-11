
import DataCard, { BoosterPlanItem } from "@/components/BoosterPlan";
import levelConfig from "@/config/level-config";
import { wrap } from "module";
import { cn, compactNumber } from "@/lib/utils";


const data: BoosterPlanItem[] = [
    {
      boostPrice: '$10',
      totalClaim: '90,000',
      dailyClaimLimit: '900',
      points: '-',
      days: '200',
    },
    {
      boostPrice: '$25',
      totalClaim: '225,000',
      dailyClaimLimit: '2,250',
      points: '-',
      days: '200',
    },
    {
      boostPrice: '$100',
      totalClaim: '900,000',
      dailyClaimLimit: '9,000',
      points: '1 Point',
      days: '200',
    },
    {
      boostPrice: '$500',
      totalClaim: '4,500,000',
      dailyClaimLimit: '45,000',
      points: '5.5 Point',
      days: '200',
    },
  ];
  


export default function BoosterPlanList() {
 
  return (
    <div
    className="flex-1 px-5 pb-20 bg-center bg-cover"
    style={{
      backgroundImage: `url(${levelConfig.bg[1]})`,
    }}
  >
    {/* <div style={stylescustom.container}>
      {data.map((item, index) => (
        <DataCard key={index} {...item} />
      ))}
    </div>
    */}

<div className="mt-10" style={{color : "black"}}>
      
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-3">
              { (
               
                data.map((item, index) => (
                  <div
                   
                    className={cn(
                      "flex flex-col py-3 px-3 bg-[#000]/10 rounded-xl cursor-pointer"  ,
                      
                   
                    )}
                   
                  >
                    <div className="flex items-start flex-1 space-x-3" style={{color : "black"}}>
                    
                      <div className="flex flex-col">
                        <p className="text-[10px] font-bold"> Booster Price : {item.boostPrice}</p>
                        <p className="mt-1 text-[10px] font-medium">
                          Total Claim : {item.totalClaim}
                        </p>
                        <p className="mt-1 text-[10px] font-medium">
                          Daily Claim Limit : {item.dailyClaimLimit}
                        </p>
                        <p className="mt-1 text-[10px] font-medium">
                          Points : {item.points}
                        </p>
                        <p className="mt-1 text-[10px] font-medium">
                          Days : {item.days}
                        </p>
                        {/* <Price
                          amount={
                            mission.production_per_hour ||
                            `+${mission.next_level?.production_per_hour || 0}`
                          }
                          className="mt-2 text-[10px]" style={{color : "black"}}
                        /> */}
                      </div>
                    </div>
                    {(
                      <div className="pt-3 mt-3 border-t border-dashed border-black/10">
                        <div className="flex items-center space-x-3">
                          <p className="w-16 text-xs font-bold">
                            Plan {index+1}
                          </p>
                        
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

    </div>
  );
  
}

// const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'space-around',
//       padding: '20px',
      
//       flexWrap: 'wrap' as 'wrap', // TypeScript compatibility
//     },
    
//   };

const stylescustom = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // 2 cards per row
        gridTemplateRows: 'repeat(2, auto)',   // 2 rows
        gap: '20px',                            // Gap between the cards
        padding: '20px',
    },
    cardWrapper: {
      width: '48%', // 2 cards per row with a small gap in between
      marginBottom: '20px', // Space between rows
    },
  };