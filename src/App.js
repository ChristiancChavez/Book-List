//Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
//Context
import BookListContextProvider  from './context/BookListContext';

function App() {
  return (
    <BookListContextProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BookListContextProvider>
  );
}

export default App;
