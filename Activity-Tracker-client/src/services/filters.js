//converting text to lowercase
export function lowercase(text) {
    return text.toLowerCase()
}

     //short date
export function shortDate(date) {
    return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC'}).format(date)
}

