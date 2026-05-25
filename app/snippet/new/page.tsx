"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import * as actions from "@/actions"
import { useActionState } from "react"

const newSnippet = () => {
    const [formData,action]=useActionState(actions.createSnippet,{message:""})
   
    return (
        <div className="px-20  mt-5">
            <form action={action} className="space-y-5">
            <div>
                <Label>Title</Label>
                <Input type="text" name="title" id="title" />
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name="code" id="code" />
            </div>
            {formData.message && <div className="bg-red-100 text-red-800 border border-red-800 p-2 mt-10">{formData.message}</div> }
            <Button>New</Button>
            </form>
        </div>
    )
}

export default newSnippet
