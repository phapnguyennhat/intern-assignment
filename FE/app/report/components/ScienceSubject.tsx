import { getScoreReport } from "@/app/API/exam/query"
import PieChartSubject from "./PieChartSubject"

export default async function ScienceSubject() {

    const reportScienceSubject = await Promise.all([
        getScoreReport('vat_li'),
        getScoreReport('hoa_hoc'),
        getScoreReport('sinh_hoc'),
    ])
    
    return (
        <section className="     py-8">

            <h5 className="text-xl md:text-2xl font-bold mb-3">Natural Sciences Group (Physics, Chemistry, Biology)</h5>
            

            <div className = 'space-y-4'>
            {reportScienceSubject.map((reportSubject, index) => (
                <PieChartSubject key={index} scoreReport={reportSubject} />
            ))}

            </div>
        </section>
    )
}
