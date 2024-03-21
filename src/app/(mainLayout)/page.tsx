

import Categories from "@/components/ui/HomePage/Categories/Categories";
import FlashSellProduct from "@/components/ui/HomePage/FlashSellProduct/FlashSellProduct";
import HeroSection from "@/components/ui/HomePage/HeroSection";
import TopRatedProduct from "@/components/ui/HomePage/TopRatedProduct/TopRatedProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     <HeroSection/>
     <FlashSellProduct/>
     <Categories/>
     <TopRatedProduct/>

    </main>
  );
}
