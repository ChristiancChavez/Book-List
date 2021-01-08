//Components
import Header from './Components/Header';
import Main from './Components/Main';
//Context
import BookListContextProvider  from './context/BookListContext';
//Styles
import './app.scss';

function App() {
  return (
    <BookListContextProvider>
      <div className="app">
        <Header />
        <Main />
      </div>
    </BookListContextProvider>
  );
}

export default App;
