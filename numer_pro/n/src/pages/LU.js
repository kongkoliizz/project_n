import { useState } from 'react'
import { LU } from '../Method/LU'

export const LUCOM = () =>{
  const [ma, SetA] = useState('')
  const [mb, SetB] = useState('')

  const handleSubmit = () =>{
    LU(ma,mb)
  }
  const apibisection = async () =>{
    const response = await fetch('http://localhost:8080/api/mockups_data/api_n')
    const json = await response.json()
    setValue(json)
  }
  const setValue = (json) =>{

      document.getElementById("maLU").value = json.LUMa
      document.getElementById("mbLU").value = json.LUMb

      SetA(json.LUMa)
      SetB(json.LUMb)
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">LU Composition</h2>
          <form>
            <div className="form-group">
              <label>Matrix A</label>
              <input
                type="text"
                className="form-control"
                id="maLU"
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
                id="mbLU"
                value={mb}
                onChange={(e) => SetB(e.target.value)}
                placeholder="Enter Left"
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