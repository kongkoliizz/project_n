import { useState } from 'react'
import { derivative, simplify, evaluate } from 'mathjs'

export const FalsePosition = () => {
  const [Fx, setFx] = useState('')
  const [Left, setLeft] = useState('')
  const [Right, setRight] = useState('')
  const [Error, setError] = useState('')

  const handleSubmit = () =>{
    var a = FalsePosition({fx:Fx,}, {L:Left}, {R:Right}, {error:Error})
    console.log(a)
  }

  const FalsePosition = (fx, L, R, error) => {
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let e = parseFloat(error)
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }

    let iterations = [];
    let key = 0;
    let err = 1;

    if (f(xl) * f(xr) >= 0) {
        console.log("You have not assumed right xl and xr");
        return;
    }
    var x1;
    while (err >= e) {
        x1 = ((xl * f(xr)) - (xr * f(xl))) / (f(xr) - f(xl));
        iterations.push({key, xl, xr, x1, err});
        key++;
        if (f(x1) == 0) {
            break;
        }
        else if (f(x1) * f(xr) < 0) {
            err = Math.abs((x1 - xl) / x1)
            xl = x1;
        }
        else {
            err = Math.abs((x1 - xr) / x1)
            xr = x1;
        }
    }
    return x1
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">False Position</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Fucntion</label>
              <input
                type="text"
                className="form-control"
                id="FalseFunction"
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
                id="FalseLeft"
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
                id="FalseRight"
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
                id="FalseError"
                value={Error}
                onChange={(e) => setError(e.target.value)}
                placeholder="Enter Error"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}