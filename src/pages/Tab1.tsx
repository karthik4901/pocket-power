import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import CreditCardMonth from "../components/CreditCardMonth";
import CreditCardMonthData from "../components/creditcard";

interface CreditCardTabProps {
  data: CreditCardMonthData[];
}

const Tab1: React.FC<CreditCardTabProps> = ({ data }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Credit Card Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          {data.map((month) => (
            <CreditCardMonth key={month.name} {...month} />
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
