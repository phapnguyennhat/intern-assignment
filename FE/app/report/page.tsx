import PrimarySubject from "./components/PrimarySubject";
import SocialSubject from "./components/SocialSubject";
import ScienceSubject from "./components/ScienceSubject";
import { Metadata } from "next";
import BarStackChart from "./components/BarStackChart";
import { getScoreReport } from "../API/exam/query";


export const metadata: Metadata = {
  title: "Report",
  description: "Welcome to the report page. This is the report page for the exam results.",
};



const listSubjects = ['toan', 'ngu_van', 'ngoai_ngu', 'vat_li', 'hoa_hoc', 'sinh_hoc', 'lich_su', 'dia_li', 'gdcd']
export default async function Report() {

    const listScoreReport = await Promise.all(listSubjects.map(async (subject) => {
        return getScoreReport(subject)
    }))
    
    return (
        <div className="px-4 md:px-8 lg:px-12 py-4 space-y-8">
            {/* <h1 className="text-2xl font-bold">Report</h1> */}
            {/* <PrimarySubject />
            <ScienceSubject />
            <SocialSubject /> */}
            <BarStackChart listScoreReport={listScoreReport} />
        </div>
    )
}
