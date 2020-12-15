  //short date
export function shortDate(dateString) {
  let dateObj = Date.parse(dateString)
return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC'}).format(dateObj)
 }

