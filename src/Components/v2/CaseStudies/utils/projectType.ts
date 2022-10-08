const VALID_PROJECT_TYPE = [
    'web',
    'mobile',
    'desktop',
    'iot',
]

export const projectTypeParser = (projectTypes: string[]): string => {
    const res = projectTypes.find(projectType => VALID_PROJECT_TYPE.includes(projectType.toLowerCase()))

    return res ?? 'web'
}