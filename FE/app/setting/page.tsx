import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setting",
  description: "Welcome to the setting page. This is the setting page for the exam results.",
};

export default function Setting() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-100px)] ">
            <h1 className="text-2xl  ">Develop in the next version</h1>
        </div>
    )
}
