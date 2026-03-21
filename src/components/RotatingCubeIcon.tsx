import React, { useEffect, useRef } from "react";
import "@/styles/RotatingCubeIcon.css";

function RotatingCubeIcon({
  rotate = true,
  className = "w-60 h-60",
  color = "#d4d4d4",
  size = "80",
}: {
  rotate?: boolean;
  className?: string;
  color?: string;
  size?: string;
}): React.JSX.Element {
  const cubeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation>({} as Animation);

  useEffect(() => {
    if (!cubeRef.current || !rotate) return;

    const keyframes = [
      { transform: "rotateX(20deg) rotateY(0deg)" },
      { transform: "rotateX(20deg) rotateY(360deg)" }
    ];

    const options: KeyframeAnimationOptions = {
      duration: 8000,
      iterations: Infinity,
      easing: "linear"
    };

    animationRef.current = cubeRef.current.animate(keyframes, options);

    return () => {
      animationRef.current?.cancel();
    };
  }, [rotate]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.playbackRate = 3.2;
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.playbackRate = 1;
    }
  };

  return (
    <div
      className={`relative ${className} flex items-center justify-center logo-container`}
      style={
        {
          "--size": size,
          "--color": color,
        } as React.CSSProperties
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scene">
        <div ref={cubeRef} className="cube">
          <div className="cube-face front" />
          <div className="cube-face back" />
          <div className="cube-face right" />
          <div className="cube-face left" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>
      </div>

      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 w-full h-full pointer-events-none hexagon-svg"
      >
        <path
          stroke={color}
          fill="none"
          strokeWidth="15"
          strokeLinejoin="round"
          d="m150 20 120 65v130l-120 65-120-65V85z"
        />
      </svg>
    </div>
  );
}

export default RotatingCubeIcon;