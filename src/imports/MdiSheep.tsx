import svgPaths from "./svg-24glsymnd6";

export default function MdiSheep({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[18px]"} data-name="mdi:sheep">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p3d1e2600} fill="var(--fill-0, #4A671E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}