export const required = value => (value ? undefined : 'Required field')

export const maxValueCalc = (maxValue) => (value) => {
    if (value !== undefined && value.length > maxValue) return `Max symbols ${maxValue}`
    return undefined
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)
