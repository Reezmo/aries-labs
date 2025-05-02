import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { AlertCircle, Hammer } from "lucide-react"; // Import Hammer icon

export default function ErrorMessage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight flex items-center"> 
            Page Under Construction
            {/* <Hammer className="ml-2 h-6 w-6 text-muted-foreground" />  */}
          </h2>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <AlertCircle className="mr-2 h-4 w-4 text-muted-foreground" />
              We're working on it!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Please check back later.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
