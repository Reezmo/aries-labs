"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import data from "../../data.json"

const chartData = data.source.map(item => ({
  source: item.title,
  leads: parseInt(item.value),
  fill: item.color,
}))

const chartConfig = data.source.reduce((config, item) => {
  config[item.title] = {
    label: item.title.charAt(0).toUpperCase() + item.title.slice(1),
    color: item.color,
  }
  return config
}, {} as ChartConfig)

export function SourceBar() {
  return (
    <div className="w-full max-w-3xl mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>Leads By Source</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="source"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const label = chartConfig[value as keyof typeof chartConfig]?.label;
                return typeof label === "string" ? label : "";
              }}
            />
            <XAxis dataKey="leads" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="leads" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending Up<TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total leads for the last 6 months
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}
