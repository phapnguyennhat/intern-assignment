"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { SUBJECT_NAMES } from "@/common/constant"



const chartConfig = {
  excellent: {
    label: "Excellent",
    color: "#0088FE",
  },
  good: {
    label: "Good",
    color: "#00C49F",
  },
  average: {
    label: "Average",
    color: "#FFBB28",
  },
  weak: {
    label: "Weak",
    color: "#FF8042",
  },
} satisfies ChartConfig

interface IProps {
  listScoreReport: ScoreReport[]
}
export default function BarStackChart({ listScoreReport }: IProps) {
  const chartData = listScoreReport.map((scoreReport) => ({
    subject: SUBJECT_NAMES[scoreReport.subject],
    excellent: scoreReport.excellent,
    good: scoreReport.good,
    average: scoreReport.average,
    weak: scoreReport.weak,
  }))
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="subject"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent  />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="weak"
              stackId="a"
              fill="var(--color-weak)"
              radius={[0, 0, 4, 4]}
              />
            <Bar
              dataKey="average"
              stackId="a"
              fill="var(--color-average)"
              radius={[0, 0, 0, 0]}
              />
            <Bar
              dataKey="good"
              stackId="a"
              fill="var(--color-good)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="excellent"
              stackId="a"
              fill="var(--color-excellent)"
              radius={[4, 4, 0, 0]}
              />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
