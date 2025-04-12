import PrimarySubject from "./components/PrimarySubject";
import SocialSubject from "./components/SocialSubject";
import ScienceSubject from "./components/ScienceSubject";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Report",
  description: "Welcome to the report page. This is the report page for the exam results.",
};

export default function Report() {
    return (
        <div className="px-4 md:px-8 lg:px-12 py-4 space-y-8">
            {/* <h1 className="text-2xl font-bold">Report</h1> */}
            <PrimarySubject />
            <ScienceSubject />
            <SocialSubject />
        </div>
    )
}
