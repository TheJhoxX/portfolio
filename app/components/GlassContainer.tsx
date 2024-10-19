import IGlassContainer from "@/utils/IGlassContainer";

export default function GlassContainer({
  children,
  borderOpacity,
}: IGlassContainer) {
  const borderStyle: () => string = () => {
    const result = `border border-primary ${
      borderOpacity ? `border-opacity-${borderOpacity}` : "border-opacity-15"
    }`;

    return result;
  };

  return (
    <div
      className={`h-full w-full p-2 bg-transparent bg-opacity-10
        rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm
          ${borderStyle()}`}
    >
      {children}
    </div>
  );
}
