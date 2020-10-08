import React from "react";
import { Accordion, AccordionItem } from "react-sanfona";
import RowItem from "./rowItem";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = { row: "hello" };
  }

  expandedItem(item) {
    //alert(item)
    this.setState({ row: <RowItem num={item}/> });
  }

  render() {
    return (
      <div>
        <Accordion>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <AccordionItem
                key={item}
                title={`Item ${item}`} expandedClassName="read-more"
                expanded={false} onExpand={() => this.expandedItem(item)}
               
              >
                <div>
                  {this.state.row}

                  {`Item ${item} content`}
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default View;
