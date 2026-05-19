import prisma from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { deleteSnippet } from "@/actions"

const SnippetDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await (params)).id)

    const snippet= await prisma.snippet.findUnique({
        where:{
            id
        }
    })
    if(!snippet) return <h3>Not Found Snippet</h3>


    const deleteSnippetActions=deleteSnippet.bind(null,snippet.id)
    
    
    return (
        <div className="px-20 space-y-4 mt-5">
            <form action={deleteSnippetActions}>
            <div className="flex items-center justify-between">
            <h1>{snippet?.title}</h1>
            <div className="flex items-center gap-2">
                <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
                <Button type="submit" variant={'destructive'}>Delete</Button>
            </div>
            </div>
            <pre className="bg-gray-200 p-2">
                <code>
                    {snippet?.code}
                </code>
            </pre>
            </form>
        </div>
    )
}

export default SnippetDetails
