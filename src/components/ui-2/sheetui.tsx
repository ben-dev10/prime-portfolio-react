import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bookmark, Layers } from "lucide-react";

export function SheetUI() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
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
        <SheetContent
          side="left"
          className="w-full md:max-w-full flex flex-col"
        >
          <div className="links gap-3 flex flex-col mt-5 text-[13px] border-b border-dashed border-slate-400 dark:border-slate-700 pb-2 max-w-[350px] w-[70%] mx-auto mb-auto">
            <div onClick={handleClick}>
              <Link to="/about" className="sheet-link flex items-center gap-1">
                <Bookmark size={16} />
                About
              </Link>
            </div>
          </div>

          <SheetFooter>
            <div className="flex gap-1 w-full items-center border border-accent p-2 px-3 rounded-md bg-[rgba(64,195,53,.9)] ">
              <Layers size={16} className="text-green-50" />
              <p className="text-white">Nard Designs</p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
