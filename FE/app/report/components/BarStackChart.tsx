"use client"


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
 
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
import { useTheme } from "next-themes"




interface IProps {
  listScoreReport: ScoreReport[]
}
export default function BarStackChart({ listScoreReport }: IProps) {
  const { theme } = useTheme()

  const chartConfig = {
    excellent: {
      label: "Excellent",
      color: theme === "dark" ? "#4A90E2" : "#0088FE",
    },
    good: {
      label: "Good",
      color: theme === "dark" ? "#2ECC71" : "#00C49F",
    },
    average: {
      label: "Average",
      color: theme === "dark" ? "#F1C40F" : "#FFBB28",
    },
    weak: {
      label: "Weak",
      color: theme === "dark" ? "#E74C3C" : "#FF8042",
    },
  } satisfies ChartConfig
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
        <CardTitle>2024 Vietnam National High School Exam </CardTitle>
        {/* <CardDescription>Not counting students who did not take the exam and were exempted</CardDescription> */}
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
            <div className="flex items-center gap-2 font-medium leading-none">
            Chart of Scores Statistics in 2024
            </div>
            <div className="leading-none text-muted-foreground">Not counting students who did not take the exam and were exempted</div>
      </CardFooter>
    </Card>
  )
}
