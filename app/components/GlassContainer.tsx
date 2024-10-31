import IGlassContainer from "@/utils/IGlassContainer";

export default function GlassContainer({ children }: IGlassContainer) {
  return (
    <div
      className={`h-full max-h-full w-full p-2 bg-transparent border-opa bg-opacity-10
        rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm
          border border-primary border-opacity-40
          flex items-center justify-center
          overflow-hidden`}
    >
      {children}
    </div>
  );
}
