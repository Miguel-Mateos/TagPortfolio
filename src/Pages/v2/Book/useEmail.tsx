import emailjs from '@emailjs/browser'

interface IData {
  name: string
  surname: string
  email: string
  company_name: string
  position: string
  anual_revenue: string
  calendar: Date
  additional_information: string
  salary_range: string
  'g-recaptcha-response': string
}

export default function useEmail() {
  const sendEmail = async (data: IData) => {
    const { status } = await emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: data.name,
          email: data.email,
          surname: data.surname,
          company_name: data.company_name,
          position: data.position,
          additional_information: data.additional_information,
          salary_range: data.salary_range,
          calendar: data.calendar.toString(),
          'g-recaptcha-response': data['g-recaptcha-response']
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          return { status: result.status }
        },
        (error) => {
          return { status: error.status }
        }
      )
    return { status }
  }
  return { sendEmail }
}
