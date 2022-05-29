import Spline from 'cubic-spline'

export const SplineInterpolation = (Y, X, V) => {
    const mX = JSON.parse(X)
    const mY = JSON.parse(Y)
    const value = parseFloat(V)

    let spline = new Spline(mX, mY)
    let ans = spline.at(value)
    console.log(ans)
}