import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react"
import { useAppDispatch } from "../hooks/redux-hooks"
import { login, logout } from "../features/auth/auth-slice"
import { useDeliveriesQuery } from "../features/deliveries/deliveries-api-slice"
import "./Home.css"

const LogIn: React.FC = () => {
    const dispatch = useAppDispatch()
    const { data, error, isLoading, isFetching, isSuccess } =
        useDeliveriesQuery()

    return (
        <IonPage>
            <div>{error && <h2>error</h2>}</div>
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

                <IonButton onClick={() => dispatch(logout())}>Logout</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default LogIn
