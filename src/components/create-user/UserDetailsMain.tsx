import { Card, CardContent } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function UserDetailsMain() {
  return (
    <>
      <Card className="lg:w-1/2 h-full bg-gray-50 flex-grow">
        <CardContent className="flex flex-col gap-6 p-3 items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4 w-full md:flex-row">
            <div className="flex flex-col  items-center w-full md:w-1/2">
              <label htmlFor="" className="w-full">
                First Name
              </label>
              <input type="text" className="border-[1px] w-full p-1 rounded-md" />
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2">
              <label htmlFor="" className="w-full">
                Last Name
              </label>
              <input type="text" className="border-[1px] w-full p-1 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col items-center w-full">
              <label htmlFor="" className="w-full">
                User Name
              </label>
              <input type="text" className="border-[1px] w-full p-1 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col items-center w-full">
              <label htmlFor="" className="w-full">
                Email
              </label>
              <input type="email" className="border-[1px] w-full p-1 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 gap-4 w-full md:flex-row">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <label htmlFor="" className="w-full">
                Phone
              </label>
              <input type="text" className="border-[1px] w-full p-1 rounded-md" />
            </div>
            <div className="flex flex-col items-center w-full  md:w-1/2">
              <label htmlFor="" className="w-full">
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
        </CardContent>
      </Card>
    </>
  );
}
