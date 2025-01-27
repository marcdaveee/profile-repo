import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[450px] flex justify-around items-start mt-20 ">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl w-[80%] font-semibold ">
              Simplify Profile Record Keeping.
            </h2>
            <p className="text-lg text-wrap">
              Access the residents record wherever you go. All in one place. Get
              ease.
            </p>
          </div>

          <button className="px-7 py-2 bg-primary text-primary-foreground rounded-lg ">
            Get Started
          </button>
        </div>

        <Image
          src={
            "data:image/png;base64,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"
          }
          width={400}
          height={500}
          alt="hero-logo"
        ></Image>
      </div>
    </>
  );
}
