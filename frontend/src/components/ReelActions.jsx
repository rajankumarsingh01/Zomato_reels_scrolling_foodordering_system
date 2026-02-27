import { FaHeart, FaComment, FaShare } from "react-icons/fa";

export default function ReelActions() {
  return (
    <div className="absolute right-4 bottom-32 flex flex-col gap-5 items-center text-xl z-10">
      <FaHeart />
      <FaComment />
      <FaShare />
    </div>
  );
}
