import { Metadata } from "next";
import NameRankingTable from "./components/NameRankingTable";
import RankingTable, { SkeletonRankingTable } from "./components/RankingTable";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to the dashboard. This is the dashboard for the exam results.",
};

interface IProps {
  searchParams: Promise<{ groupType: string }>
}
export default function Home({ searchParams }: IProps) {

  return (
    <div className="px-4  md:px-8 lg:px-12 py-4 space-y-8">
      <NameRankingTable />

      
      <Suspense fallback={<SkeletonRankingTable />}>
        <RankingTable searchParams={searchParams} />
      </Suspense>




    </div>
  );
}
