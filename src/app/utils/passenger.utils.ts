import {BookingNs} from '../../graphql/namespace';
const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const formatPassengerName = (
  passenger: BookingNs.Passengers
): string => {
  const title = passenger.title ? passenger.title.name as string : '';
  const firstName = passenger.firstName as string;
  const lastName =  passenger.lastName as string;
  return  title + ' ' + capitalize(firstName.toLowerCase()) + ' ' + capitalize(lastName.toLowerCase());
}
