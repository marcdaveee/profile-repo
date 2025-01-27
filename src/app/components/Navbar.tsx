import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full bg-secondary text-secondary-foreground py-3 border border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h3 className="text-xl font-semibold">Resident Profiler</h3>
        </Link>

        <div className="flex items-center gap-x-2">
          <Link href={"/login"}>
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
