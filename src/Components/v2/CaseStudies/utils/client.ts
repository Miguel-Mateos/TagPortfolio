const VALID_CLIENTS = [
    'myself',
    'hackathon'
]

export const serializeClient = (clients: string[]): string => {
    const res = clients.find(client => VALID_CLIENTS.includes(client.toLowerCase()))

    return res ?? 'myself'
}