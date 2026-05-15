import EditSnippet from "@/components/EditSnippet"
import prisma from "@/lib/prisma";


const page = async({params}:{params:Promise<{id:string}>}) => {
  const id=parseInt((await (params)).id);
  const snippet= await prisma.snippet.findUnique({
    where:{
      id
    }
  })
  return (
  <EditSnippet snippet={snippet}/>
  )
}

export default page
