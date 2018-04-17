import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMoney, removeMoney } from './redux/actions';

class App extends Component {
  addMoney = () => {
    this.props.addMoney(this.props.money);
  }

  removeMoney = () => {
    this.props.removeMoney(this.props.money);
  }

  render() {
    return (
      <div>
        <h1>Banco React. Deposite su dinero con nosotros</h1>
        <h2>Saldo: {this.props.money}</h2>

        <button onClick={this.addMoney}>Agregar $10 usd</button>
        <button onClick={this.removeMoney}>Eliminar $10 usd</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    money: state.money.value
  }
}
// Primer parametro. Conecta los estados con el componente
// Segundo Parametro. Conecta las acciones con el componente
export default connect(mapStateToProps, { addMoney, removeMoney })(App);
