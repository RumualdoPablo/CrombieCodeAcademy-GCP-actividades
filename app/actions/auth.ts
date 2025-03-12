"use server";
import { LoginFormSchema, FormState } from "@/lib/definitions";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function loginAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return {
      message:
        "Lo sentimos, el mail ingresado no corresponde a un usuario registrado.",
    };
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return { message: "Contraseña incorrecta" };
  }

  const role = user.role;
  const token = jwt.sign({ email, role }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  (await cookies()).set("token", token, { httpOnly: true, secure: true });

  redirect("/categories");
}
