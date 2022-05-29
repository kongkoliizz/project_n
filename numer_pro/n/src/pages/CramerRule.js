import { det, round } from 'mathjs'
import { useState } from 'react'

export const CramerRule = () => {
  const [ma, SetA] = useState('')
  const [mb, SetB] = useState('')

  const handleSubmit = () =>{
    var a = CramerRule({A:ma}, {B:mb})
  }

  const CramerRule = (A, B) =>{
    const mA = JSON.parse(A)
    const mB = JSON.parse(B)
    console.log(mA)
    console.log(mB)
    const Amat = []
    let size = mA.length
    let check = false
    let x = []
    for (let i = 0; i < mA.length; i++) {
        if (mA[i].length === size) {
            check = true
            break
        }
    }
    if (check) {
        for (let s = 0; s < size; s++) {
            let temp = []
            for (let i = 0; i < size; i++) {
                let temp1 = []
                for (let j = 0; j < size; j++) {
                    if (j === s) {
                        temp1.push(mB[i])
                    } else {
                        temp1.push(mA[i][j])
                    }
                    if (j === size - 1) {
                        temp.push(temp1)
                    }
                }
                if (i === size - 1) {
                    Amat.push(temp)
                }
            }
        }
        for (let i = 0; i < size; i++) {
            let t = det(Amat[i]) / det(mA)
            x.push(t)
        }
    }
    console.log(round(x))
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">CramerRule</h2>
          <form>
            <div className="form-group">
              <label>Matrix A</label>
              <input
                type="text"
                className="form-control"
                id="maCR"
                value={ma}
                onChange={(e) => SetA(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>Matrix B</label>
              <input
                type="text"
                className="form-control"
                id="mbCR"
                value={mb}
                onChange={(e) => SetB(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
          </form>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
            </button>
        </div>
      </div>
    </div>
  )
}