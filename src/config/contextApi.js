// @flow
import * as React from 'react';
// Set Up The Initial Context
const AppContext: Object = React.createContext();
// Create an exportable consumer that can be injected into components
export const ContextApiConsumer = AppContext.Consumer;
// Create the provider using a traditional React.Component class

type State = {
  filterData: Array<any>,
  cardData: Array<any>,
  sortType: String,
  selectVal: String,
  inputVal: String,
  filtered: String,
};

type Props = {
  children: React.Node,
};
class ContextApi extends React.Component<Props, State> {
  state = {
    filterData: [],
    cardData: [],
    updateContextData: updatedState => this.updateContextData(updatedState),
    sortType: "asc",
    selectVal: "",
    inputVal:'',
    filtered:"",
    checkedFilter:[],
  };

  updateContextData = (updatedState: Object) => {
    this.setState(prevState => ({
      ...prevState,
      ...updatedState,
    }));
  };

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={this.state}>{children}</AppContext.Provider>;
  }
}
export default ContextApi;

export { ContextApi as ContextApiVanilla };
