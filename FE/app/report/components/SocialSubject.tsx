import { getScoreReport } from "@/app/API/exam/query"
import PieChartSubject from "./PieChartSubject"

export default async function SocialSubject() {
    const reportSocialSubject = await Promise.all([
        getScoreReport('lich_su'),
        getScoreReport('dia_li'),
        getScoreReport('gdcd'), 
    ])
    return (
        <section className="     py-8">


            <h5 className="text-xl md:text-2xl font-bold mb-3">Social Sciences Group (History, Geography, Civics)</h5>

            <div className = 'space-y-4'>
            {reportSocialSubject.map((reportSubject, index) => (
                <PieChartSubject key={index} scoreReport={reportSubject} />
            ))}

            </div>

        </section>
    )
}       
