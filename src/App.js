import './App.css';
import BookContextProvider from './Contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider></BookContextProvider>
    </div>
  );
}

export default App;
