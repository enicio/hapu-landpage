import './App.css';
import  { Hero, PageContent } from './components';
import NannyAvailable from './components/nannyAvailable/nannyAvailable';
import contents from './utils/info';


function App() {
  return (
    <div className="App">
      <Hero />
      <NannyAvailable />
      <PageContent props={ contents.section1 } />
      <PageContent props={ contents.section2 } />
      <PageContent props={ contents.section3 } />
      <PageContent props={ contents.section4 } />
      <PageContent props={ contents.section5 } />
    </div>
  );
}

export default App;
