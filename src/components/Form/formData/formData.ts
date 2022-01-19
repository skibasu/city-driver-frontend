import { v4 as uuidv4 } from "uuid"
import { EFields } from "../../../models"

export const formData = {
    userLoginForm: {
        fields: [
            {
                id: uuidv4(),
                fieldType: EFields.INPUT,
                props: { name: "email", type: "text", placeholder: "Email" },
            },
            {
                id: uuidv4(),
                fieldType: EFields.INPUT,
                props: {
                    name: "password",
                    type: "password",
                    placeholder: "Password",
                },
            },
        ],
        submitButton: { text: "login" },
        initialValues: {
            email: "",
            password: "",
        },
    },
}
