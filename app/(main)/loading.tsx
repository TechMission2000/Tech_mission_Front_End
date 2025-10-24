import { LogoLoader } from "@/components/ui/LogoLoader";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="">
        <LogoLoader
          logoColor="#155DFC"
          customClass="h-14 w-14 md:h-20 md:w-20"
        ></LogoLoader>
        <p
          className="text-2xl md:text-2xl lg:text-3xl font-bold m-0 p-0 translate-y-1 text-blue-600"
          style={{
            fontFamily: "BellMT, 'Bell MT'",
            // fontSize: "40px",
            // margin: 0,
            // padding: 0,
            // color: "blue",

            //   fill: fillColor,
          }}
        >
          TechMission
        </p>
      </div>
    </div>
  );
}
