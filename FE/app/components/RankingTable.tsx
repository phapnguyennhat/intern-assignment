import { SUBJECT_NAMES } from "@/common/constant"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getStudentByGroup } from "../API/exam/query"


interface IProps {
    searchParams: Promise<{ groupType: string }>
}



export default async function RankingTable({ searchParams }: IProps) {
    const { groupType = 'a' } = await searchParams

    const { data } = await getStudentByGroup(groupType, 'DESC')

    if (data.length === 0) {
        return <div className="text-center text-2xl">No data</div>
    }


    const columns = columnOfGroup[groupType as keyof typeof columnOfGroup]


    return (
        <Table className=" ">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className=""    >
                <TableRow>
                    <TableHead className="text-left w-[100px]">Examination Number</TableHead>
                    {columns.map((column) => (
                        <TableHead className="text-center" key={column}>{SUBJECT_NAMES[column]}</TableHead>
                    ))}
                    <TableHead className="text-right w-[100px]">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {data.map((item) => {
                    const total = +item[columns[0] as keyof Exam] + +item[columns[1] as keyof Exam] + +item[columns[2] as keyof Exam]
                    return (
                        <TableRow key={item.sbd}>
                            <TableCell className="text-left">{item.sbd}</TableCell>
                            {columns.map((column) => (
                                <TableCell className="text-center" key={column}>{item[column as keyof Exam]}</TableCell>
                            ))}
                            <TableCell className="text-right">{total.toFixed(2)}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            <TableFooter>

            </TableFooter>
        </Table>
    )
}


const columnOfGroup = {
    a: ['toan', 'vat_li', 'hoa_hoc'],
    a01: ['toan', 'vat_li', 'ngoai_ngu', 'ma_ngoai_ngu'],
    b: ['toan', 'hoa_hoc', 'sinh_hoc'],
    d07: ['toan', 'hoa_hoc', 'ngoai_ngu', 'ma_ngoai_ngu'],
}
