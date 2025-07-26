import * as React from "react";

export interface AchievementGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  gradient: string;
}

const AchievementGlassCard = React.forwardRef<HTMLDivElement, AchievementGlassCardProps>(
  ({ className, title, description, gradient, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-[280px] w-full max-w-[350px] [perspective:1000px] ${className}`}
        {...props}
      >
        <div className={`relative h-full rounded-[40px] bg-gradient-to-br ${gradient} shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,30deg)]`}>
          <div className="absolute inset-2 rounded-[35px] border-b border-l border-white/30 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-lg [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
          
          <div className="absolute inset-0 p-8 flex flex-col justify-center [transform:translate3d(0,0,26px)]">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Decorative blur blobs */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
            {[
              { size: "120px", pos: "10px", z: "15px", opacity: "opacity-20" },
              { size: "80px", pos: "15px", z: "25px", opacity: "opacity-30" },
              { size: "50px", pos: "25px", z: "35px", opacity: "opacity-40" },
            ].map((blob, index) => (
              <div
                key={index}
                className={`absolute aspect-square rounded-full bg-white/20 backdrop-blur-sm transition-all duration-500 ease-in-out ${blob.opacity} group-hover:[transform:translate3d(0,0,${parseInt(blob.z) + 10}px)]`}
                style={{
                  width: blob.size,
                  top: blob.pos,
                  right: blob.pos,
                  transform: `translate3d(0, 0, ${blob.z})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

AchievementGlassCard.displayName = "AchievementGlassCard";

export default AchievementGlassCard;