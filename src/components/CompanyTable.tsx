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
import Companies from "./CompaniesList";
import { Briefcase, BriefcaseBusinessIcon, Building, Building2, Link2, Linkedin, Mail, Phone, UserRound, UsersRound } from "lucide-react";

export function CompanyTable() {
  return (
    <Table className="table-fixed w-full">
      {/* <TableCaption>A list of Companys.</TableCaption> */}
      <TableHeader>
        <TableRow className="font-semibold text-sm border-t-2 border-gray-100">
          <TableHead className="w-[16.6%] p-2">
             <p className="flex">
              <Building className="mr-1 h-5"/>
              Name
             </p>

             </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <Link2 className="mr-1 h-5"/>
              Domain
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <UserRound className="mr-1 h-5"/>
              Account Owner
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <UsersRound className="mr-1 h-5"/>
              Employees
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2">
            <p className="flex">
              <Linkedin className="mr-1 h-5"/>
              LinkedIn
            </p>
          </TableHead>
          <TableHead className="w-[16.6%] p-2 text-right">
            <p className="flex">
            <Building2 className="mr-1 h-5" />
            Address
            </p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Companies.map((Company: any, index: number) => (
          <TableRow className="text-sm p-0" key={index}>
            <Link href={`/${Company.name}`}>
              <TableCell className="cursor-pointer font-medium p-2">{Company?.name}</TableCell>
            </Link>
            <TableCell className="p-2">{Company?.domain}</TableCell>
            <TableCell className="p-2">{Company?.accountOwner}</TableCell>
            {/* <TableCell className="p-2">{Company?.phoneNo}</TableCell> */}

            <TableCell className="p-2">{Company?.employees}</TableCell>
            <TableCell className="p-2">{Company?.linkedIn}</TableCell>

            <TableCell className="text-right p-2">{Company?.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
