



const splashScreenImages = [
  "/images/splash-screen/bg.png",
];

export default function SplashScreen() {
  const randomImage =
    splashScreenImages[Math.floor(Math.random() * splashScreenImages.length)];
  return (
    <div
      className="flex flex-col items-center justify-between pt-16 bg-cover bg-center w-full max-w-lg h-[--tg-viewport-height] mx-auto"
      style={{ backgroundImage: `url('${randomImage}')` }}
    >


      {/* Inline style for the animation */}
      <style>{`
        @keyframes progressLoader {
          0% {
            width: 0;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress-loader {
          animation: progressLoader 1.5s infinite ease-in-out;
        }
      `}</style>
     <div className="w-full absolute bottom-10 flex flex-col items-center px-4">
        <h1 className="mt-4 text-4xl font-medium text-center uppercase text-shadow absolute bottom-10 flex flex-col items-center px-4">
          Tap To Earn
        </h1>
        
        <div className="w-full h-1   rounded-full bg-cover max-w-xs ">
          {/* Animated Progress Bar */}
          <div className="h-full bg-white animate-progress-loader"></div>
        </div>

       
      </div>
   
    </div>
  );
}
