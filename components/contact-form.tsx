import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

import { Card, CardContent } from "./ui/card"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { contactSchema } from "@/schemas/contactSchema"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Submit from "./Submit"
import sendMessage from "@/app/contact/action"

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const result = await sendMessage(data);
    console.log(result);

    if (result.success) {
      form.reset();
    }else{
      form.setError("root", { message: result.error });
    }
  }

  return (
    <Card className="w-90">
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Your Name</FieldLabel>
                  <Input
                    {...field}
                    placeholder="Chulo..."
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Your Message</FieldLabel>
                  <Textarea
                    {...field}
                    placeholder="Fan mail, Review, Suggestion, Send some Love"
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  />
                  {/* <FieldDescription data-invalid={fieldState.invalid}>Send the superstar fan mail, suggestions, reviews, love and most importantly deals!</FieldDescription> */}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Submit />
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
