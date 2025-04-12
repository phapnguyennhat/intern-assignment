import { ForeignLanguageCode } from "src/database/entity/examResult.entity"

export const GROUP_A = {
    subject1: 'toan',
    subject2: 'vat_li',
    subject3: 'hoa_hoc',
}

export const GROUP_A01 = {
    subject1: 'toan',
    subject2: 'vat_li',
    subject3: 'ngoai_ngu',
    ma_ngoai_ngu: ForeignLanguageCode.ENGLISH,
}

export const GROUP_B = {
    subject1: 'toan',
    subject2: 'hoa_hoc',
    subject3: 'sinh_hoc',
}

export const GROUP_D07 = {
    subject1: 'toan',
    subject2: 'hoa_hoc',
    subject3: 'ngoai_ngu',
    ma_ngoai_ngu: ForeignLanguageCode.ENGLISH,
}