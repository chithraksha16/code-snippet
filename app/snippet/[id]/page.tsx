import prisma from "@/lib/prisma"
import { Button } from "@/components/ui/button"

const SnippetDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await (params)).id)

    const snippet= await prisma.snippet.findUnique({
        where:{
            id
        }
    })
    if(!snippet) return <h3>Not Found Snippet</h3>
    
    return (
        <div className="px-20 space-y-4 mt-5">
            <div className="flex items-center justify-between">
            <h1>{snippet?.title}</h1>
            <div className="flex items-center gap-2">
                <Button>Edit</Button>
                <Button variant={'destructive'}>Delete</Button>
            </div>
            </div>
            <pre className="bg-gray-200 p-2">
                <code>
                    {snippet?.code}
                </code>
            </pre>
        </div>
    )
}

export default SnippetDetails
