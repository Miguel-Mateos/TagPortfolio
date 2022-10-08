const VALID_METHODOLOGIES = [
    'agile',
    'scrum',
    'kanban',
    'waterfall',
    'lean',
    'domain-driven-development'
]

export const methodologyParser = (methodology: string[]): string => {
    const res = methodology.find(methodology => VALID_METHODOLOGIES.includes(methodology.toLowerCase()))
    if (res?.includes('-')) res.replaceAll('-', ' ')
    return res ?? 'agile'
}