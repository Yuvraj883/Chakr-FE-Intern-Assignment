import { ProspectTable } from "@/components/ProspectTable";
import { UsersRound } from "lucide-react";

const People = ()=>{
  return(
    <div className="flex flex-col gap-8 p-4">
      <div  className="flex ">

        <UsersRound/>
      <h1 className="px-2 font-bold text-lg">People</h1>

      </div>

      <ProspectTable/>
    </div>
  )
}
export default People;
