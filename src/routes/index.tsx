import { Switch, Route } from 'react-router-dom';

// import { Main } from "../pages/Main";
import { CadastroCarro } from '../components/CadastroCarro';
import { CadastroPeca } from '../components/CadastroPeca';

export function Routes() {
  return (
    <Switch>
      <Route path="/cadastroCarro" exact component={CadastroCarro} />
      <Route path="/cadastroPeca" exact component={CadastroPeca} />
    </Switch>
  );
}
