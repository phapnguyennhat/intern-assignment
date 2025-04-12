import { getExamResult } from "@/app/API/exam/query"
import { isErrorResponse } from "@/lib/utils"
const subjectNames: Record<string, string> = {
    toan: 'Toán',
    ngu_van: 'Ngữ Văn',
    ngoai_ngu: 'Ngoại Ngữ',
    vat_li: 'Vật Lý',
    hoa_hoc: 'Hóa Học',
    sinh_hoc: 'Sinh Học',
    lich_su: 'Lịch Sử',
    dia_li: 'Địa Lý',
    gdcd: 'GDCD'
}

interface IProps {
    searchParams: Promise<{ sbd: string }>
}

export default async function DetailScore({ searchParams }: IProps) {
    const { sbd } = await searchParams
    const examResult = await getExamResult(sbd)

    if (!examResult) {
        return (
            <div className='bg-white border rounded-lg shadow-md px-4 py-8'>
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
            key !== 'ma_ngoai_ngu' &&
            value !== null
        )
        .map(([key, value]) => ({
            name: subjectNames[key] || key,
            score: value
        }))

    return (
        <div className='bg-white border rounded-lg shadow-md px-4 py-8'>
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
        </div>
    )
}
