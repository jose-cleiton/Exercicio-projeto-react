import React from "react";

class Entrada extends React.Component {
  render() {
    const { nome, nomeInput, nomeAtributo, cardName } = this.props;
    return (
      <>
        <label htmlFor={nomeInput}>
          {nome}
          <input name={nomeInput} data-testid={nomeAtributo} value={cardName} />
        </label>
      </>
    );
  }
}

export default Entrada;
