import React from "react"
import { IonButton, IonInput, IonText } from "@ionic/react"
import { useFormik } from "formik"
import { SchemaOf } from "yup"
import { EFields, IFormDataSingleForm, IUserRequest } from "../../models/"

type Schema = SchemaOf<IUserRequest>

interface IForm {
    formData: IFormDataSingleForm
    onSubmit: (values: any) => Promise<void>
    validationSchema: Schema
}

const Form: React.FC<IForm> = ({ formData, onSubmit, validationSchema }) => {
    const {
        initialValues,
        fields,
        submitButton: { text: submitText },
    } = formData

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })
    return (
        fields && (
            <div className="form-wrapper">
                <form onSubmit={formik.handleSubmit}>
                    {fields.map((v) => (
                        <div key={v.id}>
                            {v.fieldType === EFields.INPUT && (
                                <IonInput
                                    name={v.props.name}
                                    type={v.props.type}
                                    placeholder={v.props.placeholder}
                                    onIonChange={formik.handleChange}
                                    onIonBlur={formik.handleBlur}
                                    value={formik.values[v.props.name]}
                                ></IonInput>
                            )}
                            {formik.errors[v.props.name] &&
                                formik.touched[v.props.name] && (
                                    <IonText color="danger">
                                        <p>{formik.errors[v.props.name]}</p>
                                    </IonText>
                                )}
                        </div>
                    ))}
                    <IonButton type="submit">{submitText}</IonButton>
                </form>
            </div>
        )
    )
}

export default Form
