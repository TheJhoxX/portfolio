export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern">
      <div
        className={`flex flex-col h-fit items-center justify-center gap-8 w-9/12`}
      >
        <p className="w-full text-8xl md:text-9xl font-semibold text-pretty font-geistMono">
          Víctor Jorge Sibaja
        </p>
        {/* Ocupación actual */}
        <div className="w-full flex h-full gap-2">
          <div className="w-full text-pretty font-geistMono flex flex-col items-start gap-2 border-l-primary border-l-2 px-2">
            <p>Software Developer at GMV</p>
            <p>Software Engineering Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
