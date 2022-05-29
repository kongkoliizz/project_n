import { useState } from "react"
import { multi } from "../Method/multiRegression"

export const MR = () =>{
  const [A, setA] = useState('')
  
  const handleSubmit = () =>{
      multi(A)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Multi Regression</h2>
          <form>
            <div className="form-group">
              <label>A</label>
              <input
                type="text"
                className="form-control"
                id="AMR"
                value={A}
                onChange={(e) => setA(e.target.value)}
                placeholder="Enter Function"
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