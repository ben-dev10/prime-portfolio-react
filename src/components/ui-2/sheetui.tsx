import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";

export function SheetUI() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="pl-0 shadow-none bg-transparent hover:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3 9H10.2188"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 4.5H15"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13.5H12.75"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full md:max-w-full">
          <div className="links gap-3 mb-10 flex flex-col">
            <SheetClose className="" asChild>
              <Link to="/about" className="sheet-link">
                About
              </Link>
            </SheetClose>

            <SheetClose className="" asChild>
              <Link to="/" className="sheet-link">
                Home
              </Link>
            </SheetClose>
          </div>

          <SheetFooter>
           
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
