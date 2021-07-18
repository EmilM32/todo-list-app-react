import format from 'date-fns/format'

const datePattern = 'cccc, MMMM yyyy'
export const formattedDate = format(new Date(), datePattern)
