import moment from 'moment';

function formatToDDMMYYYY(date: string | Date): string {
  return moment(date).format('DD/MM/YYYY');
}

export default formatToDDMMYYYY;
