export default function BlogSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-[22px] bg-[#120D25] border border-white/5 overflow-hidden flex flex-col justify-between animate-pulse"
        >
          {/* Image skeleton */}
          <div className="w-full aspect-[16/10] bg-white/5 relative">
            <div className="absolute top-4 left-4 w-20 h-6 rounded-full bg-white/10" />
            <div className="absolute top-4 right-4 w-16 h-6 rounded-full bg-white/10" />
          </div>

          {/* Body skeleton */}
          <div className="p-6 space-y-4">
            <div className="w-28 h-3.5 bg-white/10 rounded" />
            <div className="space-y-2">
              <div className="w-full h-5 bg-white/15 rounded" />
              <div className="w-3/4 h-5 bg-white/10 rounded" />
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="w-full h-3 bg-white/5 rounded" />
              <div className="w-full h-3 bg-white/5 rounded" />
              <div className="w-2/3 h-3 bg-white/5 rounded" />
            </div>

            {/* Footer skeleton */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-20 h-3.5 bg-white/10 rounded" />
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-white/10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
