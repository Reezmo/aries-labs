import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import data from "../../data.json"

export function SectionCards() {
    return (
        <div className="flex flex-wrap gap-4 px-4 lg:px-6">
            {data.leads.map((leads, index) => (
                <Card key={index} className="flex-1">
                    <CardHeader className="relative">
                        <CardDescription>{leads.description}</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums">
                            {leads.title}
                        </CardTitle>
                        <div className="absolute right-4 top-4">
                            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                                <TrendingUpIcon className="size-3" />
                                {leads.bagde}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">
                            {leads.footer} <TrendingUpIcon className="size-4" />
                        </div>
                        <div className="text-muted-foreground">
                            {leads.secondFooter}
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
