import Carousels from "@/components/Carousel";
import { CompanyTable } from "@/components/CompanyTable";
import { Building2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-4">
    <div  className="flex ">

      <Building2/>
    <h1 className="px-2 font-bold text-lg">Companies</h1>

    </div>

    <CompanyTable/>
  </div>
  );
}
