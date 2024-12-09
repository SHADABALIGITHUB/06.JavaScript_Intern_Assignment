import Image from "next/image";
import Cards from "../Components/Cards/Cards";
import IconsCard from "@/Components/Cards/IconsCard";
import SimilarItemsSection from "@/Components/Cards/SimilarItemsSection";
import ShowProduct from "@/Components/ShowProduct/ShowProduct";
export default function Home() {
  return (
    <div className="grid min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <ShowProduct/>
        <SimilarItemsSection/>
      <IconsCard/>
      <Cards />
    </div>
  );
}
