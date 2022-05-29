import { useState } from 'react'
import { poly } from '../Method/polyRegression'

export const PR = () => {
  const [A ,setA] = useState('')
  const [o, setO] = useState('')

  const handleSubmit = () =>{
      poly(A,o)
  }
  const apibisection = async () =>{
    const response = await fetch('http://localhost:8080/api/mockups_data/api_n')
    const json = await response.json()
    setValue(json)
  }
  const setValue = (json) =>{

      document.getElementById("aploy").value = json.AP
      document.getElementById("oply").value = json.OP

      setA(json.AP)
      setO(json.OP)
  }
    
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Polynomial Regression</h2>
          <form>
            <div className="form-group">
              <label>A</label>
              <input
                type="text"
                className="form-control"
                id="aploy"
                value={A}
                onChange={(e) => setA(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>O</label>
              <input
                type="text"
                className="form-control"
                id="oply"
                value={o}
                onChange={(e) => setO(e.target.value)}
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