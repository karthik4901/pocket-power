interface CreditCardMonthData {
  name: string;
  cards: {
    bank: string;
    balance: number;
  }[];
  total: number;
}
export default CreditCardMonthData;
