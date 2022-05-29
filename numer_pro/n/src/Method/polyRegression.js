import regressions from 'regression'

export const poly = (A, o) => {
    const mA = JSON.parse(A)
    const orde = JSON.parse(o)
    let result = regressions.polynomial(mA, { order: orde })
    console.log(result)
}