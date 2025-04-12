import { getExamResult } from "@/app/API/exam/query"
import { SUBJECT_NAMES } from "@/common/constant"
import { isErrorResponse } from "@/lib/utils"


interface IProps {
    searchParams: Promise<{ sbd: string }>
}

export default async function DetailScore({ searchParams }: IProps) {
    const { sbd } = await searchParams
    const examResult = await getExamResult(sbd)

    if (!examResult) {
        return (
            <div className='bg-white dark:bg-gray-800 border rounded-lg shadow-md px-4 py-8'>
            <h5 className="text-2xl font-bold mb-3">Detailed Score</h5>

                <p>Detailed view of search scores here!</p>
        </div>
        )
    }


    const subjectsWithScores = Object.entries(examResult)
        .filter(([key, value]) =>
            key !== 'id' &&
            key !== 'createdAt' &&
            key !== 'updatedAt' &&
            key !== 'sbd' &&
            // key !== 'ma_ngoai_ngu' &&
            value !== null
        )
        .map(([key, value]) => ({
            name: SUBJECT_NAMES[key] || key,
            score: value
        }))

    return (
        <section className='bg-white dark:bg-gray-800 border rounded-lg shadow-md px-4 py-8'>
            <h5 className="text-2xl font-bold mb-3">Detailed Score</h5>

            {isErrorResponse(examResult) ? <div>
                <p className="text-center text-xl text-red-500">{examResult.message}</p>
            </div> : <div className="space-y-4">
                {subjectsWithScores.map((subject) => (
                    <div key={subject.name} className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">{subject.name}:</span>
                        <span className="text-lg font-semibold">{subject.score}</span>
                    </div>
                ))}
            </div>}
        </section>
    )
}
