interface IField {
    id: string
    fieldType: EFields
    props: IProps
}
interface IProps {
    name: string
    type: any // TODO
    placeholder: string
}

interface ISubmitButton {
    text: string
}

export enum EFields {
    INPUT = "input",
    TEXTAREA = "textarea",
    DATE = "date",
    CHECKBOX = "checkbox",
}

export interface IFormDataTemplate {
    [key: string]: IFormDataSingleForm
}
export interface IFormDataSingleForm {
    fields: IField[]
    submitButton: ISubmitButton
    initialValues: IInitialValues
}

export interface IInitialValues {
    [key: string]: string
}
