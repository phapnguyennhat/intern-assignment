import { ModeToggle } from "./ModeToggle";
import NavSide from "./NavSide";

export default function Header() {
    return (
        <header className=" fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-blue-800  py-4 px-4 md:px-6 lg:px-10">
            <NavSide />
            <h1 className=" text-center text-2xl font-bold text-white" >G-Scores</h1>
            <ModeToggle />
        </header>
    )
}
