import React from "react";
import Form from "./components/Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: "0",
      cardAttr2: "0",
      cardAttr3: "0",
      cardImage: "",
      cardRare: "normal",
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      nameFilter: "",
      rareFilter: "todas",
      trunfoFilter: false
    };
  } // fim do constructor
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
      nameFilter,
      rareFilter,
      trunfoFilter
    } = this.state;
    const { onInputChange, onSaveButtonClick, updateCardList } = this;
    return (
      <div>
        <Form
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
          isSaveButtonDisabled={isSaveButtonDisabled}
          onInputChange={onInputChange}
          onSaveButtonClick={onSaveButtonClick}
        />
      </div>
    );
  }
}

export default App;
