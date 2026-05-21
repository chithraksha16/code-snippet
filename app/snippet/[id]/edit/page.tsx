import EditSnippet from "@/components/EditSnippet"
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";


const page = async({params}:{params:Promise<{id:string}>}) => {
  const id=parseInt((await (params)).id);
  const snippet= await prisma.snippet.findUnique({
    where:{
      id
    }
  })
  if(!snippet) return notFound()
  return (
  <EditSnippet snippet={snippet}/>
  )
}

export default page
