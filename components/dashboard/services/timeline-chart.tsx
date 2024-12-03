"use client";

import { Card } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", "Career Counseling": 280, "Job Search": 250, "Resume Writing": 200 },
  { month: "Feb", "Career Counseling": 300, "Job Search": 270, "Resume Writing": 220 },
  { month: "Mar", "Career Counseling": 320, "Job Search": 290, "Resume Writing": 240 },
  { month: "Apr", "Career Counseling": 350, "Job Search": 320, "Resume Writing": 260 },
  { month: "May", "Career Counseling": 380, "Job Search": 350, "Resume Writing": 290 },
  { month: "Jun", "Career Counseling": 420, "Job Search": 380, "Resume Writing": 310 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: item.color }}>
            {item.name}: {item.value} participants
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ServiceTimelineChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Service Utilization Over Time</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="month"
              tick={{ fill: 'currentColor' }}
            />
            <YAxis
              tick={{ fill: 'currentColor' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Career Counseling"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-1))" }}
            />
            <Line
              type="monotone"
              dataKey="Job Search"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))" }}
            />
            <Line
              type="monotone"
              dataKey="Resume Writing"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-3))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}