"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  remember: z.boolean().optional(),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting },} = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
        remember: false
    }
  });

  async function onSubmit(data: LoginData) {
    console.log("Login Data:", data);
    await new Promise((timeLoading) => setTimeout(timeLoading, 2000));
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col justify-center bg-white px-12 py-20 md:w-[45%]">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-25 flex justify-start -ml-2">
            <Image src="/logo-code-x.png" alt="Upcode Logo" width={120} height={50} priority />
          </div>

          <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
          <p className="mt-2 text-gray-500">
            Entre para continuar acessando sua conta.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-6"
          >
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

            <div className="flex items-center justify-between">
              <FormControlLabel
                control={<Checkbox {...register("remember")} />}
                label="Lembrar de mim"
              />

              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>

            <Button
              color="purpleTheme"
              variant="contained"
              type="submit"
              size="large"
              fullWidth
              disabled={isSubmitting}
              sx={{ paddingY: 1.5, borderRadius: "12px" }}
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            Não possui conta?{" "}
            <a href="/register" className="font-medium text-blue-700">
              Cadastre-se
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
