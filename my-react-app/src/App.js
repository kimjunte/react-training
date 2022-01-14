// this is the root component
// it is responsibly for rendering all other components
// it is rendered by default in the root div by index.js

import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";
import MyForm from "./forms/MyForm";
import AsyncUpdateFunction from "./hooks/AsyncUpdateFunction";
import Context from "./hooks/Context";
import LifecycleFunction from "./hooks/LifecycleFunction";
import MutuableStateFunction from "./hooks/MutableStateFunction";
import ReducerFunctionV2 from "./hooks/ReducerFunctionV2";
import StatefulFunction from "./hooks/StatefulFunction";
import Bio from "./jsx/Bio";
import Lifecycle from "./lifecycle/Lifecycle";
import ReduxCounter from "./redux/ReduxCounter";
import Routing from "./routing/Routing";
import Clock from "./state/Clock";
import Counter from "./state/Counter";
import MutuableState from "./state/MutableState";
import {store} from "./redux/Redux"
import {Provider} from "react-redux"

// BTW a function that returns JSX is a component
const App = () => {
  
  // the return value looks like HTML but is in fact JSX (JavaScript)
  return (
    <>
      {/* <h1>My React App</h1> */}
      {/* <Bio /> */}
      {/* <MyFunctionalComponent name="Harry Potter" author="JK Rowling"/> */}
      {/* <MyClassComponent name="The Twits" author="Roald Dahl"/> */}
      {/* <Clock/> */}
      {/* <Counter/> */}
      {/* <MutuableState/> */}
      {/* <Lifecycle/> */}
      {/* <StatefulFunction/> */}
      {/* <MutuableStateFunction/> */}
      {/* <AsyncUpdateFunction/> */}
      {/* <LifecycleFunction/> */}
      {/* <MyForm/> */}
      {/* <Routing/> */}
      {/* < Context /> */}
      {/* <ReducerFunctionV2/> */}
      <Provider store={store}>
        <ReduxCounter/>
      </Provider>
    </>
  );

}

export default App;