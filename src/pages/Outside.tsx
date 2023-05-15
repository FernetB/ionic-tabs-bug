import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  useIonRouter,
} from "@ionic/react";

export const Outside = () => {
  const { push } = useIonRouter();
  return (
    <IonPage>
      <IonHeader>
        <IonButton
          onClick={() => {
            push("/tabs/tab1", "back", "pop");
          }}
        >
          Volver!
        </IonButton>
      </IonHeader>
      <IonContent>Hi!</IonContent>
    </IonPage>
  );
};
