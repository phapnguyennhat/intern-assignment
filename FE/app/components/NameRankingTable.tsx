import SelectGroupSubject from "./SelectGroupSubject";
import { Suspense } from "react";
export default function NameRankingTable() {
    return (
        <section className = ' mt-4 flex justify-center'>
            <div className = 'inline-flex gap-2 items-center'>
                <h1 className="text-xl md:text-2xl uppercase">Top Students in group</h1>
                <Suspense>
                    <SelectGroupSubject />
                </Suspense>
            </div>
        </section>
    )
}
    