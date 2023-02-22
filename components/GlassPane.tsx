import clsx from "clsx";
type GlassPaneProps = {
  children: React.ReactNode;
  className: string;
};
export default function GlassPane({ className, children }: GlassPaneProps) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}
