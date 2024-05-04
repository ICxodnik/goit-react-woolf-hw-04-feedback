export const Options = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
};

export function getDefaultValue() {
    const obj = {};
    Object.entries(Options).forEach(el => obj[el[0]] = 0);
    return obj;
}
