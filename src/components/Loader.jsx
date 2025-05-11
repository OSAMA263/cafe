import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader({ route = false, className = "" }) {
  return (
    <div
      className={
        `${
          route ? "h-dvh" : "h-[300px]"
        } w-full flex items-center justify-center ` + className
      }
    >
      <span className="animate-spin text-5xl">
        <AiOutlineLoading3Quarters />
      </span>
    </div>
  );
}
