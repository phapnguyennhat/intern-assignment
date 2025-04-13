import { REVALIDATE_TIME } from "@/common/constant"
import { fetcher, isErrorResponse } from "@/lib/utils"
import { notFound } from "next/navigation";


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

export const getScoreReport = async (subject: string) => {
    if(!subject) {
       return  notFound()
    }
    const response = await fetcher<ScoreReport>(`exam/score-report?subject=${subject}`, {
        method: 'GET',
        next: {
            revalidate: REVALIDATE_TIME,
            tags: [`score-report-${subject}`]
        }
    })
    if (isErrorResponse(response)) {
        return notFound()
    }
    return response
}

export const getStudentByGroup = async (groupType: string, order: string, page: number) => {
    const response = await fetcher<{data: Exam[], count: number}>(`exam/group?groupType=${groupType}&order=${order}&page=${page}`, {
        method: 'GET',
        next: {
            revalidate: REVALIDATE_TIME,
            tags: ['exam-group', groupType,order]
        }
    })
   
    if (isErrorResponse(response)) {
       
        return {
            data: [],
            count: 0
        }
    }
    return response
}