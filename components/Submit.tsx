import { useTransition } from "react"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

const Submit = () => {
  const [isPending, startTransition] = useTransition()
  return (
    <Button type="submit" disabled={isPending}>
      {isPending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <p>Loading...</p>
        </>
      ) : (
        <p>Send Message</p>
      )}
    </Button>
  )
}

export default Submit
