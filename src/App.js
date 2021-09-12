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
      <PageContent separator={true} content={ contents.section1 } contentflux={'Left'} />
      <PageContent separator={false} content={ contents.section2 } contentflux={'Center'} />
      <SubscribeForm />
      <PageContent separator={true} content={ contents.section3 } contentflux={'Rigth'} />
      <PageContent separator={true} content={ contents.section4 } contentflux={'Botton'} />
      <PageContent separator={false} content={ contents.section5 } contentflux={'Center'} />
      <Footer />
    </div>
  );
}

export default App;
