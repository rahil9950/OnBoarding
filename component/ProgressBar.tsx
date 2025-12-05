import { ProgressBarProps } from "@/types/progressBar_type"

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full">
      {/* Percentage text - stays in place but shows dynamic value */}
      <div className="text-start text-sm font-semibold text-[#C76097] mb-2">
        {percentage}%
      </div>

      {/* Outer Bar */}
      <div className="w-full h-4 border-2 border-[#C76097] rounded-full overflow-hidden">
        {/* Inner Bar */}
        <div
          className="h-full bg-[#C76097] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;