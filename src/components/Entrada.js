import React from "react";

class Entrada extends React.Component {
  /*onInputChange = () => {
  console.log('Deu meio certo');
  
}
*/

  render() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled
      },
      onInputChange
    } = this;

    const { nome, nomeInput, nomeAtributo } = this.props;

    return (
      <>
        <label htmlFor={nomeInput}>
          {nome}
          <input
            type="text"
            name={nomeInput}
            data-testid={nomeAtributo}
            onChange={onInputChange}
          />
        </label>
      </>
    );
  }
}

export default Entrada;
