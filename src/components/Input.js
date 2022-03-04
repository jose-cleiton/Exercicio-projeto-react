import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <section>
          <label>
            {this.props.label}
            <input
              name={this.props.name}
              data-testid={this.props.nameInput}
              value={this.props.value}
              onChange={this.props.onInputChange}
              type={this.props.type}
            />
            <h1>{this.props.value}</h1>
          </label>
        </section>

        <br />
      </>
    );
  }
}

export default Input;
