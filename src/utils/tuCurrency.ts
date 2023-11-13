export const toCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat("ru-RU").format(amount);
  return `${formattedAmount} руб.`;
};
