import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="px-20 space-y-4 mt-5">
    <h1 className="font-bold">Home</h1>
    <div className="flex items-center justify-between">
      <h1 className="text-xl">Code Snippet</h1>
    <Link href={"/snippet/new"}> <Button>New</Button></Link>
    </div>
    </div>
    </>
  );
}
