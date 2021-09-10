import './App.css';
import  { Hero, PageContent, SubscribeForm } from './components';
import Footer from './components/footer/footer';
import NannyAvailable from './components/nannyAvailable/nannyAvailable';
import contents from './utils/info';


function App() {
  return (
    <div className="App">
      <Hero />
      <NannyAvailable />
      <PageContent props={ contents.section1 } />
      <PageContent props={ contents.section2 } />
      <SubscribeForm />
      <PageContent props={ contents.section3 } />
      <PageContent props={ contents.section4 } />
      <PageContent props={ contents.section5 } />
      <Footer />
    </div>
  );
}

export default App;
