import { Suspense } from "react";
import DetailScore from "./component/DetailScore";
import FormCheckScore from "./component/FormCheckScore";



interface IProps {
    searchParams: Promise<{sbd: string}>
}
export default function SearchScore({searchParams}: IProps) {
   
    return (
        <div className='px-4 md:px-8 lg:px-12 py-4 space-y-8'>
            <Suspense >
                <FormCheckScore />
            </Suspense>
            <DetailScore searchParams={searchParams} />
        </div> 
    )
}
