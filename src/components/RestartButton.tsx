import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1}
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 hover:bg-slate-700/50 ${className}`}
    >
      <MdRefresh className="size-6" />
    </button>
  );
};

export default RestartButton;
