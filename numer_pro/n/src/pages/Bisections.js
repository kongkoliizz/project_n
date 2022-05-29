import { useState } from 'react'
import { simplify, evaluate } from 'mathjs'

export const Bisection = () => {
  const [Fx, setFx] = useState('')
  const [Left, setLeft] = useState('')
  const [Right, setRight] = useState('')
  const [Error, setError] = useState('')
  
  const handleSubmit = () => {
    var B = Bisection(Fx, Left, Right, Error)
    console.log(B)
  }

  const Bisection = (fx, L, R, error ) => {
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let er = 1
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let xm
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
    let ite = []
    let prot = []
    let key = 1
    while (er > err) {
        xm = (xr + xl) / 2
        ite.push({ key, xl, xr, xm, er })
        key++
        prot.push(f(xm))
        if (f(xm) * f(xr) > 0) {
            er = Math.abs((xm - xr) / xm)
            xr = xm
        } else {
            er = Math.abs((xm - xl) / xm)
            xl = xm
        }
    }
    return xm
  }
  const apibisection = async () =>{
    const response = await fetch('http://localhost:8080/api/mockups_data/api_n')
    const json = await response.json()
    setValue(json)
  }
  const setValue = (json) =>{

      document.getElementById("BiFunction").value = json.BiFunction
      document.getElementById("BiLeft").value = json.BiLeft
      document.getElementById("BiRight").value = json.BiRight
      document.getElementById("BiError").value = json.BiError

      setFx(json.BiFunction)
      setLeft(json.BiLeft)
      setRight(json.BiRight)
      setError(json.BiError)
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Bisection</h2>
          <form>
            <div className="form-group">
              <label>Fucntion</label>
              <input
                type="text"
                className="form-control"
                id="BiFunction"
                value={Fx}
                onChange={(e) => setFx(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>Left</label>
              <input
                type="text"
                className="form-control"
                id="BiLeft"
                value={Left}
                onChange={(e) => setLeft(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
            <div className="form-group">
              <label>Right</label>
              <input
                type="text"
                className="form-control"
                id="BiRight"
                value={Right}
                onChange={(e) => setRight(e.target.value)}
                placeholder="Enter Right"
              />
            </div>
            <div className="form-group">
              <label>Error</label>
              <input
                type="text"
                className="form-control"
                id="BiError"
                value={Error}
                onChange={(e) => setError(e.target.value)}
                placeholder="Enter Error"
              />
            </div>
          </form>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
          </button>
          <button variant = "primary" type = "submit" onClick={() => apibisection()}>
              API
          </button>
        </div>
      </div>
    </div>
  )
}