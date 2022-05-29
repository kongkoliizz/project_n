import MLR from "ml-regression-multivariate-linear";

export const multi = (A) => {
    const mA = JSON.parse(A)
    let result = MLR(mA)
    console.log(result)
}