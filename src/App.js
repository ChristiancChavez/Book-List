//Components
import Header from './Components/Header';
import Main from './Components/Main';
//Context
import Animation from './Components/Animation';
import BookListContextProvider  from './context/BookListContext';
//Styles
import './app.scss';

function App() {
  return (
    <BookListContextProvider>
      <div className="app">
        <Animation />
        <Header />
        <Main />
      </div>
    </BookListContextProvider>
  );
}

export default App;
