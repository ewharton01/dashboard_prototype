import { Metrics } from "@/components/dashboard/metrics";
import { EthnicityChart } from "@/components/dashboard/charts/ethnicity-chart";
import { GenderChart } from "@/components/dashboard/charts/gender-chart";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <Metrics />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <EthnicityChart />
        <GenderChart />
      </div>
    </div>
  );
}