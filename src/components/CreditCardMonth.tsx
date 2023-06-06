import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import { chevronDown, chevronForward } from "ionicons/icons";
import React from "react";
import { useState } from "react";

interface CreditCardMonthData {
  name: string;
  cards: {
    bank: string;
    balance: number;
  }[];
  total: number;
}

const CreditCardMonth: React.FC<CreditCardMonthData> = ({
  name,
  cards,
  total,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    console.log("clicked");
    setExpanded(!expanded);
  };

  return (
    <IonCard>
      <IonCardHeader onClick={handleExpand}>
        <IonIcon icon={expanded ? chevronDown : chevronForward} slot="start" />
        <IonCardSubtitle>{name}</IonCardSubtitle>
        <IonCardTitle>Total Balance: {total}</IonCardTitle>
      </IonCardHeader>
      {expanded && (
        <IonCardContent>
          {cards.map((card) => (
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
      )}
    </IonCard>
  );
};

export default CreditCardMonth;
