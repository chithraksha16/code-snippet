"use client"

import { Editor } from "@monaco-editor/react"
import { Snippet } from "@prisma/client"
import { useState } from "react"
const EditSnippet = ({snippet}:{snippet:Snippet}) => {
    const [code,setCode]=useState();
  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={code}
        
      />
    </div>
  )
}

export default EditSnippet
