import { Button } from "@/components/ui/button";
import "../globals.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="bg-red-500 min-h-[calc(100vh-130px)] w-full flex items-center justify-center">
      <Card className="bg-gray-400 w-full p-2 m-2 min-h-[calc(100vh-130px)] flex flex-col">
        <CardHeader>
          <CardTitle className="text-center text-xl">Create User</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center bg-yellow-200">
          <div className="flex flex-col p-1 gap-2 w-full h-full bg-red-300 lg:flex-row lg:gap-3">
            <Card className="bg-blue-500  lg:w-1/2 h-full ">
              <CardContent className="h-full">content 01</CardContent>
            </Card>
            <Card className="bg-green-400 lg:w-1/2 h-full">
              <CardContent className="h-full"> content 02</CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-2 pt-1">
          <Button>Create</Button>
          <Button>Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
