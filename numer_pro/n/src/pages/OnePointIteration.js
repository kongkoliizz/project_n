import { useState } from 'react'
import { simplify, evaluate } from 'mathjs'

export const OnePointIteration = () => {
  const [Fx, setFx] = useState('')
  const [x0, setX0] = useState('')
  const [Error, setError] = useState('')

  const handleSubmit = () =>{
    var a = Onepoint({fx:Fx,}, {X0:x0}, {error:Error})
    console.log(a)
  }

  const Onepoint = (fx, X0, error) =>{

    let x0 = parseFloat(X0)
    let e = parseFloat(error)
    let g = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
    console.log(fx + ": "+ e+": "+x0)

    let iterations = [];
    let key = 0;
    let err = 1;
    let x1

    do {
        x1 = g(x0);
        err = Math.abs((x1 - x0) / x1)
        iterations.push({key,x0,x1,err})
        x0 = x1
        key++
        console.log(g(x1)-x1)
        if(err < e){
            break;
        }
    } while (true);
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">One Point</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Fucntion</label>
              <input
                type="text"
                className="form-control"
                id="OneFunction"
                value={Fx}
                onChange= {(e) => setFx(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>X0</label>
              <input
                type="text"
                className="form-control"
                id="OneX0"
                value={x0}
                onChange= {(e) => setX0(e.target.value)}
                placeholder="Enter X0"
              />
            </div>
            <div className="form-group">
              <label>Error</label>
              <input
                type="text"
                className="form-control"
                id="OneError"
                value={Error}
                onChange= {(e) => setError(e.target.value)}
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