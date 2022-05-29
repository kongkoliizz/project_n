import { useState } from 'react'
import { SplineInterpolation } from '../Method/spline'

export const SP = () => {
  const [my, setY] = useState('')
  const [mx, setX] = useState('')
  const [val, setV] = useState('')

  const handleSubmit = () =>{
    SplineInterpolation(my, mx, val)
  } 
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Spline</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Y</label>
              <input
                type="text"
                className="form-control"
                id="ysp"
                value={my}
                onChange= {(e) => setY(e.target.value)}
                placeholder="Enter"
              />
            </div>
            <div className="form-group">
              <label>X</label>
              <input
                type="text"
                className="form-control"
                id="xsp"
                value={mx}
                onChange= {(e) => setX(e.target.value)}
                placeholder="Enter"
              />
            </div>
            <div className="form-group">
              <label>Value</label>
              <input
                type="text"
                className="form-control"
                id="vsp"
                value={val}
                onChange= {(e) => setV(e.target.value)}
                placeholder="Enter"
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