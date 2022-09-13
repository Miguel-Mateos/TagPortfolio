// Temporal solution
export const requiredFields = [
  'name',
  'surname',
  'email',
  'company_name',
  'anual_revenue',
  'calendar'
]

export const eventConstant = {
  summary: 'Hello World',
  location: '',
  start: {
    dateTime: '2022-08-28T09:00:00-07:00',
    timeZone: 'America/Los_Angeles'
  },
  end: {
    dateTime: '2022-08-28T17:00:00-07:00',
    timeZone: 'America/Los_Angeles'
  },
  recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
  attendees: [],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 }
    ]
  }
}