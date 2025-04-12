import { getScoreReport } from "@/app/API/exam/query"
import PieChartSubject from "./PieChartSubject"

export default async function PrimarySubject() { 

    const reportPrimarySubject = await Promise.all([
        getScoreReport('toan'),
        getScoreReport('ngu_van'),
        getScoreReport('ngoai_ngu'),
    ])

    
    return (
        <section className="bg-[#f5f5f5] dark:bg-gray-800 border rounded-lg shadow-md px-4 py-8">
            <h5 className="text-2xl font-bold mb-3">Math, Literature, and English Subject Group   </h5>

            <div className = 'space-y-4'>
            {reportPrimarySubject.map((reportSubject, index) => (
                <PieChartSubject key={index} scoreReport={reportSubject} />
            ))}

            </div>

        </section>
    )
}
