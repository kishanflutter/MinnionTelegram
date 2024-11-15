import React, { useEffect, useState ,useRef } from "react";
import { useClicksStore } from "../store/clicks-store";
import { useUserStore } from "../store/user-store";
import { useDebounce } from "@uidotdev/usehooks";
import levelConfig from "@/config/level-config";

export default function UserTap(props: React.HTMLProps<HTMLDivElement>) {
  const [clicksCount, setClicksCount] = useState(0);
  const debounceClicksCount = useDebounce(clicksCount, 1000);
  const { clicks, addClick, removeClick } = useClicksStore();
  const { UserTap, incraseEnergy, ...user } = useUserStore();
  const totalcoin = 100;
  const userAnimateRef = useRef<HTMLDivElement | null>(null);

  // 1. Load stored clicksCount from localStorage
  useEffect(() => {
    const storedClicksCount = localStorage.getItem("clicksCount");
    if (storedClicksCount) {
      setClicksCount(Number(storedClicksCount)); // Convert to number
    }
    console.log("Loaded clicksCount from localStorage:", storedClicksCount); // Debugging line

    // Reset clicks state
    setClicksCount((prev) => prev); // Keep clicksCount on refresh
    useClicksStore.setState({ clicks: [] });

    const interval = setInterval(() => {
      incraseEnergy(3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2. Save clicksCount to localStorage whenever it changes
  useEffect(() => {
    if (clicksCount !== 0) {
      localStorage.setItem("clicksCount", String(clicksCount)); // Save to localStorage
      console.log("Saving clicksCount to localStorage:", clicksCount); // Debugging line
    }
  }, [clicksCount]); // Effect will run when clicksCount changes

  const tabMe = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!UserTap()) return;

    // 3. Increment the clicksCount
    setClicksCount((prev) => prev + 1);

    addClick({
      id: new Date().getTime(),
      value: clicksCount,
      style: {
        top: e.clientY,
        left: e.clientX + (Math.random() > 0.5 ? 5 : -5),
      },
    });

    animateButton();
  };

  const animateButton = () => {
    const button = document.getElementById("user-tap-button");
    if (button) {
      button.classList.add("scale-95");
      setTimeout(() => {
        button.classList.remove("scale-95");
      }, 150);
    }
  };

  // Calculate progress
  const counttt = clicksCount >= totalcoin ? totalcoin : clicksCount;
  const progress = (counttt / totalcoin) * 100;

  return (
    <div {...props}>
      <div className="mt-4 mb-8">
        <button
       
          id="user-tap-button"
          
          className="flex items-center justify-center mx-auto transition-all rounded-full outline-none select-none disabled:opacity-80 disabled:cursor-not-allowed"
          disabled={clicksCount >= totalcoin}
          onPointerUp={tabMe}
          
         
        >
          
          <img
            src={levelConfig.frogs[1]}
            alt="level image"
            className="object-contain max-w-full max-h-full w-60 h-60"
          />
        </button>
      </div>

      <div ref={userAnimateRef} className="user-tap-animate">
        {clicks.map((click) => (
          click.value<=totalcoin ?<div
            key={click.id}
            onAnimationEnd={() => removeClick(click.id)}
            style={click.style}
          >
           +{1}
          </div>
          :
          <div></div>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: '500px', margin: '10px auto' }}>
        <div style={{ border: '3px solid #ffff', padding: '3px', borderRadius: '10px' }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: '#000',
              height: '10px',
              borderRadius: '10px',
            }}
          ></div>
        </div>
        <div style={{ color: "#ffff", fontWeight: "bold", fontSize: '18px', textAlign: "right", marginRight: "5px" }}>
          {clicksCount >= totalcoin ? totalcoin : clicksCount} / {totalcoin}
        </div>
        
      </div>
    </div>
  );
}
