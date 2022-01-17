import { useEffect } from "react"
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { login } from "../features/auth/auth-slice"
import "./Home.css"

const LogIn: React.FC = () => {
    const { name, surname, email, avatarUrl } = useAppSelector(
        (state) => state.auth.user
    )
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("name ", login)
    }, [])
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton
                    onClick={() =>
                        dispatch(
                            login({
                                isLogin: true,
                                name: "--Updated--",
                                surname: "--Updated--",
                                email: "--Updated--",
                                avatarUrl: "--Updated--",
                            })
                        )
                    }
                >
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default LogIn
