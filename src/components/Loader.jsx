import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader() {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <span className="animate-spin text-4xl">
        <AiOutlineLoading3Quarters />
      </span>
    </div>
  );
}
