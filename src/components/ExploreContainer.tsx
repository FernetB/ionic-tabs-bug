import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const history = useHistory();
  return (
    <div className="container">
      <strong>{name}</strong>
      <IonButton onClick={() => history.push("/outside")}>
        Go outside tabs
      </IonButton>
      <IonButton
        color="secondary"
        onClick={() => history.push("/router/outside")}
      >
        Go outlet outside tabs
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
