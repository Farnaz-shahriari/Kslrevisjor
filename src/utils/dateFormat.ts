/**
 * Norwegian Date Formatting Utility
 * 
 * Formats dates according to Norwegian standards:
 * Format: "Day-of-week DD. month-name YYYY"
 * Example: "Torsdag 5. desember 2025"
 */

const norwegianDays = [
  'Søndag',
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag'
];

const norwegianMonths = [
  'januar',
  'februar',
  'mars',
  'april',
  'mai',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'desember'
];

/**
 * Format a date in Norwegian format
 * @param date - Date object to format
 * @returns Formatted date string in Norwegian (e.g., "Torsdag 5. desember 2025")
 */
export function formatNorwegianDate(date: Date): string {
  const dayOfWeek = norwegianDays[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = norwegianMonths[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek} ${dayOfMonth}. ${month} ${year}`;
}

/**
 * Format a date with time in Norwegian format
 * @param date - Date object to format
 * @returns Formatted date and time string (e.g., "Torsdag 5. desember 2025 - 14:37")
 */
export function formatNorwegianDateTime(date: Date): string {
  const dateStr = formatNorwegianDate(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${dateStr} - ${hours}.${minutes}`;
}

/**
 * Parse DD/MM/YYYY format to Date object
 * @param dateStr - Date string in DD/MM/YYYY format (e.g., "05/12/2025")
 * @returns Date object
 */
export function parseDDMMYYYY(dateStr: string): Date {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Parse DD/MM/YYYY - HH.MM format to Date object
 * @param dateTimeStr - Date time string (e.g., "17/12/2025 - 14.37")
 * @returns Date object
 */
export function parseDDMMYYYYTime(dateTimeStr: string): Date {
  const [datePart, timePart] = dateTimeStr.split(' - ');
  const [day, month, year] = datePart.split('/').map(Number);
  const [hours, minutes] = timePart.split('.').map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}
