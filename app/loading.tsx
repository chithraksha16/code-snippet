import {LoaderCircle} from "lucide-react"

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="animate-spin"><LoaderCircle /></span>
    </div>
  )
}

export default loading
