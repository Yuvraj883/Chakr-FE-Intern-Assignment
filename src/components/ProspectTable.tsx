import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link" ;
import ProspectsData from "./ProspectsData";
export function ProspectTable() {
  return (
    <Table>
      {/* <TableCaption>A list of prospects.</TableCaption> */}
      <TableHeader>
        <TableRow className="font-semibold text-sm border-t-2 border-gray-100">
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Phone no.</TableHead>
          <TableHead>City</TableHead>


          <TableHead className="text-right">Job Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ProspectsData.map((prospect:any, index:number) => (
          <TableRow className="text-sm p-0" key = {index}>
            <Link href={`/people/${prospect.id}`}>
            <TableCell className="cursor-pointer font-medium">{prospect?.name}</TableCell>
            </Link>
            <TableCell>{prospect?.email}</TableCell>
            <TableCell>{prospect?.companies?.[0]?.name}</TableCell>
            <TableCell>{prospect?.phoneNo}</TableCell>
            <TableCell>{prospect?.city}</TableCell>
            <TableCell className="text-right">{prospect?.jobTitle}</TableCell>

          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
