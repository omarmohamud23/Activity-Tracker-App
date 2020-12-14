  //short date
export function shortDate(date) {
return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC'}).format(date)
 }

