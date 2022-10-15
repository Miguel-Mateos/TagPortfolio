// Temporal solution
export const requiredFields = [
  'name',
  'surname',
  'email',
  'company_name',
  'anual_revenue'
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

export const salaryRanges = [
  { value: '50000-60000', label: '50000 € - 60000 € ' },
  { value: '60000-80000', label: '60000 € - 80000 € ' },
  { value: '80000-100000', label: '80000 € - 100000 € ' }
]
