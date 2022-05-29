
import { useState } from 'react';
import { Newton } from '../Method/NewtonsDividedDifferences';

export const NewtonsDividedDifferences = () => {
  const [y, setY] = useState('')
  const [x, setX] = useState('')
  const [v, setV] = useState('')

  const handleSubmit = () =>{
    Newton(y,x,v)
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Newtons Divided Differences</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Y</label>
              <input
                type="text"
                className="form-control"
                id="ynt"
                value={y}
                onChange= {(e) => setY(e.target.value)}
                placeholder="Enter"
              />
            </div>
            <div className="form-group">
              <label>X</label>
              <input
                type="text"
                className="form-control"
                id="xnt"
                value={x}
                onChange= {(e) => setX(e.target.value)}
                placeholder="Enter"
              />
            </div>
            <div className="form-group">
              <label>Value</label>
              <input
                type="text"
                className="form-control"
                id="vnt"
                value={v}
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