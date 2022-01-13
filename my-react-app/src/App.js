// this is the root component
// it is responsibly for rendering all other components
// it is rendered by default in the root div by index.js

import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";
import MyForm from "./forms/MyForm";
import AsyncUpdateFunction from "./hooks/AsyncUpdateFunction";
import LifecycleFunction from "./hooks/LifecycleFunction";
import MutuableStateFunction from "./hooks/MutableStateFunction";
import StatefulFunction from "./hooks/StatefulFunction";
import Bio from "./jsx/Bio";
import Lifecycle from "./lifecycle/Lifecycle";
import Clock from "./state/Clock";
import Counter from "./state/Counter";
import MutuableState from "./state/MutableState";

// BTW a function that returns JSX is a component
const App = () => {
  
  // the return value looks like HTML but is in fact JSX (JavaScript)
  return (
    <>
      <h1>My React App</h1>
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
      <MyForm/>
    </>
  );

}

export default App;