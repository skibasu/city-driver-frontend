import { object, string, SchemaOf } from "yup"
import { IUserRequest } from "../models/"

export const loginSchema: SchemaOf<IUserRequest> = object().shape({
    email: string()
        .required("Email jest wymagany!")
        .email("Nieprawidłowy email!"),
    password: string()
        .min(6, "Hasło musi zawierać 7 znaków")
        .required("Hasło jest wymagane!"),
})
