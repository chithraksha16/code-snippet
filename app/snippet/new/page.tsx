import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
const newSnippet = () => {
    const createSnippet=async(formData:FormData)=>{
        const title=formData.get("title");
        const code =formData.get("code");

        const snippet=await prisma.snippet.create({
            data:{
                title,
                code
            }
        });
        console.log("Snippet:",snippet)
        redirect("/")

    }
    return (
        <div className="px-20 space-y-4 mt-5">
            <form action={createSnippet}>
            <div>
                <Label>Title</Label>
                <Input type="text" name="title" id="title" />
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name="code" id="code" />
            </div>
            <Button>New</Button>
            </form>
        </div>
    )
}

export default newSnippet
