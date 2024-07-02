import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import ProspectsData from "./ProspectsData"
export function ProspectTable() {
  return (
    <Table>
      <TableCaption>A list of prospects.</TableCaption>
      <TableHeader>
        <TableRow>
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
          <TableRow key = {index}>
            <TableCell className="font-medium">{prospect?.name}</TableCell>
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
