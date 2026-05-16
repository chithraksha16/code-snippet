"use client"

import { Editor } from "@monaco-editor/react"
import { Snippet } from "@prisma/client"
import { useState } from "react"
import { Button } from "./ui/button"
const EditSnippet = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code);
    return (
        <div className="flex flex-col gap-4 px-20 space-y-4 mt-5">
            <form
            className="flex items-center justify-between"
            action="">
                <h1 className="font-bold text-xl">Your code Editor</h1>
                <Button>Save</Button>
            </form>
            <Editor
                height="40vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={code}

            />
        </div>
    )
}

export default EditSnippet
