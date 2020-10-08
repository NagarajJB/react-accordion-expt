import React from "react";
class RowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>col-1</td>
              <td>col-2</td>
              <td>col-3</td>
              <td>col-4</td>
              <td>{this.props.num}</td>

            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RowItem;
