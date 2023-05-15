export function formatPhoneNumber(user: string): string {
  const formattedNumber = user.replace('+', '') + '@c.us';
  return formattedNumber;
}
