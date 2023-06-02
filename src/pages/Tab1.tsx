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
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

interface CreditCardMonthData {
  name: string;
  cards: {
    bank: string;
    balance: number;
  }[];
  total: number;
}
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
            <IonRow key={month.name}>
              <IonCol>
                <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardSubtitle>{month.name}</IonCardSubtitle>
                    <IonCardTitle>Total Balance: {month.total}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {month.cards.map((card) => (
                      <IonCard key={card.bank} color="tertiary">
                        <IonCardHeader>
                          <IonCardTitle>{card.bank}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                          <p>Balance: {card.balance}</p>
                        </IonCardContent>
                      </IonCard>
                    ))}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
