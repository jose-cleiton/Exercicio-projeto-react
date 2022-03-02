import React from "react";
import Entrada from "./Entrada";
class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;
    return (
      <>
        <Entrada
          nome="Nome :"
          nomeInput="cardNome"
          nomeAtributo="name-input"
          cardName={cardName}
        />
        <Entrada
          nome="Description"
          nomeInput="cardDescription"
          nomeAtributo="description-input"
          valor="{ cardDescription }"
        />
      </>
    );
  }
}

export default Form;
