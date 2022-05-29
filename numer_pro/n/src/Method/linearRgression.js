import regressions from 'regression'

export const lin = (A, p) => {
    const mA = JSON.parse(A)
    const pre = JSON.parse(p)
    let result = regressions.linear(mA).predict(pre)
    console.log(result)
}