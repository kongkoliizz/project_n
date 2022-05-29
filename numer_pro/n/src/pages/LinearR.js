import { useState } from 'react'
import { lin } from '../Method/linearRgression'

export const LR = () => {
  const [A, SetA]= useState('')
  const [p, SetP]= useState('')
  const handleSubmit = () =>{
    lin(A,p)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Linear Regression</h2>
          <form>
            <div className="form-group">
              <label>A</label>
              <input
                type="text"
                className="form-control"
                id="ali"
                value={A}
                onChange={(e) => SetA(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>P</label>
              <input
                type="text"
                className="form-control"
                id="pli"
                value={p}
                onChange={(e) => SetP(e.target.value)}
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