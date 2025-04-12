import { REVALIDATE_TIME } from "@/common/constant"
import { fetcher } from "@/lib/utils"

export const getExamResult = async (sbd: string) => {
    if (!sbd) { 
        return;
    }
    const response = await fetcher<Exam>(`exam/student?sbd=${sbd}`, {
        method: 'GET',
        next: {
            revalidate: REVALIDATE_TIME,
            tags: [`exam-result-${sbd}`]
        }
    })
    return response
}
