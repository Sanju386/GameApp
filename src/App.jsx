import Header from "./Component/Header";
import Section from "./Component/Section";
import Context from "./Context";
import Main from "./Component/Main";

function App() {
  return (
    <Context>
      <Header />
      <Section />
      <Main/>
    </Context>
  );
}

export default App;
