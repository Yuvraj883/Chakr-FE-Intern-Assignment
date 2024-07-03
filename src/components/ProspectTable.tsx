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
import Link from "next/link";
import ProspectsData from "./ProspectsData";
import { Briefcase, BriefcaseBusinessIcon, Building2, Mail, Phone, UserRound } from "lucide-react";

export function ProspectTable() {
  return (
    <Table className="table-fixed w-full">
      {/* <TableCaption>A list of prospects.</TableCaption> */}
      <TableHeader>
        <TableRow className="font-semibold text-sm border-t-2 border-gray-100">
          <TableHead className="w-[16.6%] p-2">
             <p className="flex">
              <UserRound className="mr-1 h-5"/>
              Name
             </p>

             </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <Mail className="mr-1 h-5"/>
              Email
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <BriefcaseBusinessIcon className="mr-1 h-5"/>
              Company
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <Phone className="mr-1 h-5"/>
              Phone
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <Building2 className="mr-1 h-5"/>
              City
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2 text-right">
            <p className="flex">
            <Briefcase className="mr-1 h-5" />
            Job Title
            </p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ProspectsData.map((prospect: any, index: number) => (
          <TableRow className="text-sm p-0" key={index}>
            <Link href={`/people/${prospect.id}`}>
              <TableCell className="cursor-pointer font-medium p-2">{prospect?.name}</TableCell>
            </Link>
            <TableCell className="p-2">{prospect?.email}</TableCell>
            <TableCell className="p-2">{prospect?.companies?.[0]?.name}</TableCell>
            <TableCell className="p-2">{prospect?.phoneNo}</TableCell>
            <TableCell className="p-2">{prospect?.city}</TableCell>
            <TableCell className="text-right p-2">{prospect?.jobTitle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
