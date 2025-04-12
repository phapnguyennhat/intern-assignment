"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
import { SUBJECT_NAMES } from "@/common/constant"

const chartConfig = {
    students: {
      label: "students",
    },
    excellent: {
      label: "Excellent",
      color: "hsl(var(--chart-1))",
    },
    good: {
      label: "Good",
      color: "hsl(var(--chart-2))",
    },
    average: {
      label: "Average",
      color: "hsl(var(--chart-3))",
    },
    weak: {
      label: "Weak",
      color: "hsl(var(--chart-4))",
    }
  } satisfies ChartConfig

interface IProps {
    scoreReport: ScoreReport
}
export default function PieChartSubject({ scoreReport }: IProps) {
    const chartData = [
        {
            level: 'excellent',
            numStudents: scoreReport.excellent,
            fill:  "#0088FE" 
        },
        {
            level: 'good',
            numStudents: scoreReport.good,
            fill:  "#00C49F" 
        },
        {
            level: 'average',
            numStudents: scoreReport.average,
            fill:  "#FFBB28" 
        },
        {
            level: 'weak',
            numStudents: scoreReport.weak,
            fill:  "#FF8042" 
        }
    ]
    return (
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Pie Chart - {SUBJECT_NAMES[scoreReport.subject]}</CardTitle>
            <CardDescription>2024 Vietnam National High School Exam </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartData} dataKey="numStudents" nameKey="level" innerRadius={60} strokeWidth={5}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                            <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                              {scoreReport.total.toLocaleString()}
                            </tspan>
                            <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                              Students
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
            Chart of {SUBJECT_NAMES[scoreReport.subject]} Scores Statistics in 2024
            </div>
            <div className="leading-none text-muted-foreground">Not counting students who did not take the exam and were exempted</div>
          </CardFooter>
        </Card>
      )
}
