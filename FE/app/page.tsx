import NameRankingTable from "./components/NameRankingTable";
import RankingTable from "./components/RankingTable";


interface IProps {
  searchParams : Promise<{groupType: string}>
}
export default  function Home({searchParams}: IProps) {
 
  return (
    <div className="px-4  md:px-8 lg:px-12 py-4 space-y-8">
      <NameRankingTable />
      <RankingTable searchParams={searchParams} />
      

    </div>
  );
}
