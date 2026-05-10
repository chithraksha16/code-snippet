
import { Label } from "@/components/ui/label"
const newSnippet = () => {
return (
    <div className="px-20 space-y-4 mt-5">
    <div>
        <Label>Title</Label>
<input name="title" id="title" />
    </div>
<div>
<Label>Code</Label>
</div>
    </div>
)
}

export default newSnippet
