"use client";

import { Card } from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { useDashboardStore } from "@/hooks/use-dashboard-store";

const ethnicityData = [
  { name: "African American", value: 320 },
  { name: "Hispanic", value: 280 },
  { name: "White and Caucasian", value: 260 },
  { name: "Asian", value: 180 },
  { name: "Arab American", value: 140 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">
          Participants: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const CustomXAxis = (props: any) => (
  <XAxis
    {...props}
    tick={{ fill: 'currentColor', fontSize: 12 }}
    axisLine={{ stroke: 'currentColor' }}
    tickLine={{ stroke: 'currentColor' }}
    angle={-25}
    textAnchor="end"
    height={60}
    scale="point"
    padding={{ left: 20, right: 20 }}
  />
);

const CustomYAxis = (props: any) => (
  <YAxis
    {...props}
    tick={{ fill: 'currentColor' }}
    axisLine={{ stroke: 'currentColor' }}
    tickLine={{ stroke: 'currentColor' }}
    scale="linear"
    padding={{ top: 20, bottom: 0 }}
  />
);

export function EthnicityChart() {
  const { filters, setFilter } = useDashboardStore();

  const handleBarClick = (data: any) => {
    setFilter('selectedEthnicity', 
      filters.selectedEthnicity === data.name ? null : data.name
    );
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Ethnicity Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={ethnicityData} 
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <CustomXAxis dataKey="name" />
            <CustomYAxis />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'var(--accent)', opacity: 0.2 }}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--chart-1))"
              radius={[4, 4, 0, 0]}
              onClick={handleBarClick}
              className="cursor-pointer"
            >
              {ethnicityData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={filters.selectedEthnicity === entry.name ? 
                    'hsl(var(--chart-2))' : 'hsl(var(--chart-1))'}
                  opacity={filters.selectedEthnicity === entry.name ? 1 : 
                    filters.selectedEthnicity ? 0.5 : 1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}