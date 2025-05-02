import { LeadsAreaChart } from "./area-chart";
import { SectionCards } from "./section-cards";
import { SourceBar } from "./source-barChart";

export default function Leads() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Lead Generation Overview</h2>
        </div>
        <div>
          <SectionCards />
        </div>
        <div className="flex justify-center gap-4">
          <div>
            <SourceBar />
          </div>
          <div>
            <LeadsAreaChart />
          </div>
        </div>
      </div>
    </div>
  )
}
