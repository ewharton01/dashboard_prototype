import { Card } from "@/components/ui/card";

export default function ActivityPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Recent Activity</h2>
      <div className="grid gap-4">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">User Activity Overview</h3>
          <p className="text-muted-foreground">Recent user activity data will be displayed here.</p>
        </Card>
      </div>
    </div>
  );
}