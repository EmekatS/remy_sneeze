"use client"
import ContactForm from "@/components/contact-form"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="absolute top-5 left-5">
        <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
          Go Back
        </Link>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 text-center">
        <div className="w-96">
          <h1 className="text-3xl font-bold max-sm:text-2xl">CONTACT REMY SNEEZE⭐</h1>
          <p>Send a message, fan mail, suggestion, review etc...</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default page
