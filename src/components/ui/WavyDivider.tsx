// components/WavyDivider.tsx
type WavyDividerProps = {
  color?: string; // color of the next section
  flip?: boolean; // flip the wave upside down
  height?: number; // height of SVG
};

export default function WavyDivider({
  color = "oklch(21% 0.034 264.665)", // default bg-gray-100
  // #111827
  flip = false,
  height = 10,
}: WavyDividerProps) {
  return (
    <div className={`${flip ? "rotate-180" : ""} -mt-1 overflow-hidden`}>
      <svg
        className="w-full"
        style={{ height: `${height}px` }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="  M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
}

{
  /* 
  <WavyDivider
        color="#04060afd" // match next section bg
        height={80}
      />
       */
}
