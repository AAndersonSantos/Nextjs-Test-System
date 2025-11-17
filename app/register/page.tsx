"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button } from "@mui/material";
import Image from "next/image";

const registerSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.string().email("Informe um e-mail válido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting },} = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterData) {
    console.log("Register Data:", data);
    await new Promise((timeLoading) => setTimeout(timeLoading, 2000));
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col justify-center bg-white px-12 py-20 md:w-[45%]">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-25 flex justify-start -ml-2">
            <Image src="/logo-code-x.png" alt="Upcode Logo" width={120} height={50} priority/>
          </div>

          <h1 className="text-3xl font-semibold text-gray-900">Criar conta</h1>
          <p className="mt-2 text-gray-500">
            Preencha os campos abaixo para criar sua conta.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-6"
          >
            <TextField
              label="Nome completo"
              type="text"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              color="purpleTheme"
            />

            <TextField
              label="E-mail"
              type="email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              color="purpleTheme"
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              color="purpleTheme"
            />

            <TextField
              label="Confirmar senha"
              type="password"
              fullWidth
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              color="purpleTheme"
            />

            <Button
              color="purpleTheme"
              variant="contained"
              type="submit"
              size="large"
              fullWidth
              disabled={isSubmitting}
              sx={{ paddingY: 1.5, borderRadius: "12px" }}
            >
              {isSubmitting ? "Criando conta..." : "Cadastrar"}
            </Button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Já possui conta?{" "}
            <a href="/login" className="font-medium text-blue-700">
              Entrar
            </a>
          </p>
        </div>
      </div>

      <div
        className="hidden md:block md:w-[85%] bg-cover bg-center rounded-l-3xl"
        style={{
          backgroundImage: "url('/banner-code-x.png')",
        }}
      ></div>
    </div>
  );
}
