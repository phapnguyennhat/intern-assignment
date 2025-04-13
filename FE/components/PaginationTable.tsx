import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { createQueryString } from "@/lib/utils";
import { SearchParams } from "@/types/searchParams.type";


interface IProps {
    count: number,
    queryParams: SearchParams;

}

export default function PaginationTable({ count, queryParams }: IProps) {
    const page = +(queryParams['page'] as string) || 1;
    const numPage = Math.ceil(count / 10);
    const prevPage = Math.max(1, page - 1);
    const nextPage = Math.min(numPage, page + 1);
    return (
        <Pagination className="">
            <PaginationContent>
            { +page > 1 &&(    <PaginationItem>
                    <PaginationPrevious
                        href={`?${createQueryString(
                            'page',
                            prevPage.toString(),
                            queryParams,
                        )}`}
                    />
                </PaginationItem>)}

                {prevPage >= 1 && page !== 1 && (
                    <PaginationItem>
                        <PaginationLink
                            href={`?${createQueryString(
                                'page',
                                prevPage.toString(),
                                queryParams,
                            )}`}
                        >
                            {prevPage}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationLink
                        isActive
                        href={`?${createQueryString(
                            'page',
                            page.toString(),
                            queryParams,
                        )}`}
                    >
                        {page}
                    </PaginationLink>
                </PaginationItem>

                {nextPage <= numPage&&
                    page !== numPage && (
                        <PaginationItem>
                            <PaginationLink
                                href={`?${createQueryString(
                                    'page',
                                    nextPage.toString(),
                                    queryParams,
                                )}`}
                            >
                                {nextPage}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                {nextPage < numPage && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        href={`?${createQueryString(
                            'page',
                            nextPage.toString(),
                            queryParams,
                        )}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}