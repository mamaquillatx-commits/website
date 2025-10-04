"use client";

import { useActionState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { SubmitContact } from "@/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { contactSchema } from "@/lib/zodSchemas";
import { Button } from "./ui/button";

const Form = () => {
  const [lastResult, action, isPending] = useActionState(
    SubmitContact,
    undefined
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="space-y-6"
    >
      <div className="grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="name">
          Nombre
        </Label>
        <Input
          name="name"
          className="bg-gray-200 rounded-3xl py-6"
          type="text"
          id="name"
          placeholder="John Doe"
        />
        <p className="text-red-500 text-sm">{fields.name.errors}</p>
      </div>
      <div className="grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="email">
          Correo
        </Label>
        <Input
          name="email"
          className="bg-gray-200 rounded-3xl py-6"
          type="email"
          id="email"
          placeholder="ejemplo@email.com"
        />
        <p className="text-red-500 text-sm">{fields.email.errors}</p>
      </div>
      <div className="sm:col-span-2 grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="phone">
          Teléfono
        </Label>
        <Input
          name="phone"
          className="bg-gray-200 rounded-3xl py-6  "
          type="tel"
          id="phone"
          placeholder="(123) 456-789"
        />
      </div>
      <p className="text-red-500 text-sm">{fields.phone.errors}</p>
      <div className="sm:col-span-2 grid w-full gap-4 mb-2">
        <Label className=" font-semibold" htmlFor="message">
          Mensaje
        </Label>
        <Textarea
          name="message"
          className="bg-gray-200 rounded-3xl py-6  "
          placeholder="Escribe tu mensaje aquí..."
          id="message"
        />
        <p className="text-red-500 text-sm">{fields.message.errors}</p>
      </div>

      <p className="text-red-500 text-sm sm:col-span-2">{form.errors}</p>
      <Button
        disabled={isPending}
        className="w-full bg-[#E63946] hover:bg-[#C9A227] text-white hover:text-[#1C1C1C] font-semibold py-6 transition-all duration-300"
      >
        {isPending ? "Cargando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
};

export default Form;
