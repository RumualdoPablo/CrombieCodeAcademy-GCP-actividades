"use server";
import bcrypt from "bcryptjs";
import { SignupFormSchema, FormState } from "@/lib/definitions";
import { prisma } from "@/lib/prisma";

export async function registerAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const { name, email, password } = parsed.data;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return { message: "El usuario ya está registrado." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return { message: "Registro exitoso. Ahora puedes iniciar sesión." };
}
