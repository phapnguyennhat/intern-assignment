export {};

declare global {
    interface Exam {
        id: string,
        createdAt: string,
        updatedAt: string,
        sbd: string,
        toan: string,
        ngu_van: string,
        ngoai_ngu: string,
        vat_li: string,
        hoa_hoc: string,
        sinh_hoc: string,
        lich_su: string,
        dia_li: string,
        gdcd: string,
        ma_ngoai_ngu: string
    }

    interface ScoreReport {
        total: number,
        excellent: number,
        good: number,
        average: number,
        weak: number,
    }
}


