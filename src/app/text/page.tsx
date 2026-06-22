// app/page.tsx (or any page where you want to use it)

import AnimatedButton from "../components/header/PositionAware";
import PositionAwareButton from "../components/header/PositionAware";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-center pt-12">
      <div className="max-w-[600px] mx-auto px-4">
        <h1 className="font-raleway text-4xl mb-2">Position Aware Button</h1>
        <h1 className="font-raleway text-4xl mb-4">Hover Effect</h1>
        
        {/* Single Position Aware Button */}
        <AnimatedButton></AnimatedButton>
      </div>
    </div>
  );
}