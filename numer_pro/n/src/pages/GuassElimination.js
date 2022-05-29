import { useState } from 'react'
import { GaussElimination } from '../Method/gaussElimination'

export const GE = () =>{
  const [ma, SetA] = useState('')
  const [mb, SetB] = useState('')

  const handleSubmit = () =>{
    GaussElimination(ma, mb)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">GaussElimination</h2>
          <form>
            <div className="form-group">
              <label>Matrix A</label>
              <input
                type="text"
                className="form-control"
                id="maGE"
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
                id="mbGE"
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