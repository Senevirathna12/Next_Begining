import { Button } from "@/components/ui/button";
import "../globals.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserDetailsMain from "@/components/create-user/UserDetailsMain";
import UserProjectsDetails from "@/components/create-user/UserProjectsDetails";

export default function Page() {
  return (
    <div className=" min-h-[calc(100vh-130px)] w-full flex items-center justify-center">
      <Card className="bg-gray-50 opacity-90 w-full p-1 m-1 min-h-[calc(100vh-130px)] flex flex-col">
        <CardHeader>
          <CardTitle className="text-center text-xl">Create User</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center  p-1 h-full">
          <div className="flex flex-col w-full h-full gap-6  lg:flex-row lg:gap-3 px-5">
            <UserDetailsMain />
            <UserProjectsDetails />
          </div>
        </CardContent>
        <div className="flex items-center justify-end gap-4 my-3 p-3">
          <Button>Create</Button>
          <Button>Cancel</Button>
        </div>
      </Card>
    </div>
  );
}
