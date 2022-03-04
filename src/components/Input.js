import React from "react";

class Input extends React.Component {
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
      onSaveButtonClick,
      nameInput,
      estado,
      type,
      label
    } = this.props;

    console.log(cardName);
    console.log(this.props);

    return (
      <>
        <label htmlFor="cardName">
          {label}
          <input
            value={cardName}
            data-testid={nameInput}
            type={type}
            onChange={onInputChange}
          />
        </label>
      </>
    );
  }
}

export default Input;
