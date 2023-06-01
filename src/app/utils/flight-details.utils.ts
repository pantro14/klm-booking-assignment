import {BookingNs} from '../../graphql/namespace';

export const formatCarrierName = (
  marketingFlight: BookingNs.MarketingFlight | null
) => {
  if (marketingFlight && marketingFlight.carrier && marketingFlight.number && marketingFlight.carrier.code) {
    return marketingFlight.carrier.code + marketingFlight.number;
  } else {
    return '';
  }
}

export const formatAircraftName = (
  rawName: string
) => {
  const nameArray = rawName.split('-');
  return nameArray[0];
}

export const formatDuration = (
  duration: string | undefined
): string => {
  if(!duration) return '';
  return Math.round(parseInt(duration)/60).toString() + 'h';
}

