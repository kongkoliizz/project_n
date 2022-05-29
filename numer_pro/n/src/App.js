import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Bisection } from './pages/Bisections';
import { FalsePosition } from './pages/FalsePosition';
import { OnePointIteration } from './pages/OnePointIteration';
import { Secant } from './pages/Secant';
import { CramerRule } from './pages/CramerRule';
import { GE } from './pages/GuassElimination';
import { GJ } from './pages/GaussJordan';
import { JC } from './pages/Jacobi';
import { LUCOM } from './pages/LU';
import { NewtonsDividedDifferences } from './pages/NewtonsDividedDifferences';
import { Lagrangepolynomials } from './pages/Lagrangepolynomials';
import { SP } from './pages/Spline';
import { LR } from './pages/LinearR';
import { PR } from './pages/polyR';
import { MR } from './pages/MultiR';

function App () {

  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/bisection">
            <Bisection />
          </Route>
          <Route path="/falseposition">
            <FalsePosition />
          </Route>
          <Route path="/onepoint">
            <OnePointIteration />
          </Route>
          <Route path="/secant">
            <Secant />
          </Route>
          <Route path="/cmr">
            <CramerRule />
          </Route>
          <Route path="/ge">
            <GE />
          </Route>
          <Route path="/gj">
            <GJ />
          </Route>
          <Route path="/jc">
            <JC />
          </Route>
          <Route path="/lu">
            <LUCOM />
          </Route>
          <Route path="/newtonsndivideddifferences">
            <NewtonsDividedDifferences />
          </Route>
          <Route path="/lagrangepolynomials">
            <Lagrangepolynomials />
          </Route>
          <Route path="/spline">
            <SP />
          </Route>
          <Route path="/linearregression">
            <LR />
          </Route>
          <Route path="/polynomialregression">
            <PR />
          </Route>
          <Route path="/multiregression">
            <MR />
          </Route>
        </Switch>
    </div>
  )
}
export default App;