import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react"
import { loginSchema as validationSchema } from "../validation"
import { useAppDispatch } from "../hooks/redux-hooks"
import { logInUser } from "../features/auth/auth-slice"
import { IUserRequest } from "../models"
import { formData } from "../components/Form/formData/formData"
import Form from "../components/Form/Form"

import "./Home.css"

const LogIn: React.FC = () => {
    const { userLoginForm } = formData
    const dispatch = useAppDispatch()
    const loginHandler = async (values: IUserRequest) => {
        await dispatch(logInUser(values))
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Form
                    formData={userLoginForm}
                    onSubmit={(values) => loginHandler(values)}
                    validationSchema={validationSchema}
                />
            </IonContent>
        </IonPage>
    )
}

export default LogIn
