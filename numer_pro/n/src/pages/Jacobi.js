import { useState } from 'react'
import { JacobiIteration } from '../Method/jacob'

export const JC = () =>{
  const [ma, SetA] = useState('')
  const [mb, SetB] = useState('')
  const [mx, SetX] = useState('')
  const [mm, SetM] = useState('')

  const handleSubmit = () =>{
    JacobiIteration(ma,mb,mx,mm)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Jacobi</h2>
          <form>
            <div className="form-group">
              <label>Matrix A</label>
              <input
                type="text"
                className="form-control"
                id="maJC"
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
                id="mbJC"
                value={mb}
                onChange={(e) => SetB(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
            <div className="form-group">
              <label>X</label>
              <input
                type="text"
                className="form-control"
                id="xJC"
                value={mx}
                onChange={(e) => SetX(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
            <div className="form-group">
              <label>M</label>
              <input
                type="text"
                className="form-control"
                id="mJC"
                value={mm}
                onChange={(e) => SetM(e.target.value)}
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