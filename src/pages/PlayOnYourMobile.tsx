
import levelConfig from "@/config/level-config";

export default function PlayOnYourMobile() {
  return (

    <div
    className="flex-1 px-5 pb-20 bg-center bg-cover"
    style={{
      backgroundImage: `url(${levelConfig.bg[1]})`,
    }}>
    <div className="flex flex-col items-center justify-center gap-6 h-svh">
      <p className="text-2xl font-semibold uppercase">Play on your mobile</p>
      <img
        src="/images/qrcode.png"
        alt="qrcode"
        className="object-contain max-w-xs rounded-xl"
      />
      <a href="#" className="text-2xl font-semibold">
        @Xeermobilebot
      </a>
    </div>
    </div>
  );
}
