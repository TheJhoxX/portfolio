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
      className={`h-full max-h-full bg-green-500 w-full p-2 bg-transparent bg-opacity-10
        rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm
          ${borderStyle()}
          flex items-center justify-center
          overflow-hidden`}
    >
      {children}
    </div>
  );
}
