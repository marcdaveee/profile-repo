import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[450px] flex justify-center items-center mt-20 ">
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="flex flex-col gap-y-3 items-center">
            <h2 className="text-5xl font-semibold">
              Simplify Profile Record Keeping.
            </h2>
            <p className="text-3xl text-wrap">
              Access the residents record wherever you go. All in one place. Get
              ease.
            </p>
          </div>

          <button className="px-7 py-2 bg-primary text-primary-foreground rounded-lg ">
            Get Started
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex justify-center">Store</CardTitle>
          </CardHeader>

          <CardContent></CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex justify-center">
              Retrieve
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex justify-center">
              Update
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
