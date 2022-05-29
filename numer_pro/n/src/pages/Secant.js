import { useState } from 'react'
import { derivative, simplify, evaluate } from 'mathjs'

export const Secant = () => {
  const [Fx, setFx] = useState('')
  const [Left, setLeft] = useState('')
  const [Right, setRight] = useState('')
  const [Error, setError] = useState('')

  const handleSubmit = () =>{
    var a = Secant(Fx,Left,Right,Error)
    console.log(a)
  }
  const Secant = (fx,L,R,error) =>{

    let x1 = parseFloat(L)
    let x2 = parseFloat(R)
    let e = parseFloat(error)
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
  
    let iterations = [];
    let key = 0;
    let err = 1;
  
    let xm, x0;
    do {
        x0 = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
        iterations.push({key, x0, x1, x2, err});
  
        key++;
        x1 = x2;
        x2 = x0;
  
        if(f(x1) * f(x0)==0){
            break;
        }
        xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
        err = Math.abs(xm - x0);
    } while (err >= e);
    return xm
  }
  const apibisection = async () =>{
    const response = await fetch('http://localhost:8080/api/mockups_data/api_n')
    const json = await response.json()
    setValue(json)
  }
  const setValue = (json) =>{

      document.getElementById("SCFunction").value = json.SCFx
      document.getElementById("SCLeft").value = json.SCLeft
      document.getElementById("SCRight").value = json.SCRight
      document.getElementById("SCError").value = json.SCError

      setFx(json.SCFx)
      setLeft(json.SCLeft)
      setRight(json.SCRight)
      setError(json.SCError)
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Secant</h2>
          <form>
            <div className="form-group">
              <label>Fucntion</label>
              <input
                type="text"
                className="form-control"
                id="SCFunction"
                value={Fx}
                onChange= {(e) => setFx(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>X1</label>
              <input
                type="text"
                className="form-control"
                id="SCLeft"
                value={Left}
                onChange= {(e) => setLeft(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
            <div className="form-group">
              <label>X2</label>
              <input
                type="text"
                className="form-control"
                id="SCRight"
                value={Right}
                onChange= {(e) => setRight(e.target.value)}
                placeholder="Enter Right"
              />
            </div>
            <div className="form-group">
              <label>Error</label>
              <input
                type="text"
                className="form-control"
                id="SCError"
                value={Error}
                onChange= {(e) => setError(e.target.value)}
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