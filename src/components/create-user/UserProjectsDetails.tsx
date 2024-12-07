import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export default function UserProjectsDetails() {
  return (
    <>
      <Card className="lg:w-1/2 min-h-full bg-gray-50 flex flex-col">
        <CardContent className="flex flex-col gap-6 p-3 flex-grow h-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col items-center w-1/2">
              <label htmlFor="" className="w-full ml-1">
                Select Project
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project1">Project 01</SelectItem>
                  <SelectItem value="project2">Project 02</SelectItem>
                  <SelectItem value="project3">Project 03</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <label htmlFor="" className="w-full ml-1">
                User Group
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select User Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="internaluser">Internal User</SelectItem>
                  <SelectItem value="externaluser">External User</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex-grow w-full p-2 overflow-auto">
            <Table>
              <TableCaption>A list of new user assigned projects.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>User Group</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>project01</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell className="flex items-end justify-center"><X /></TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
