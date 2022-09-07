import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import books from "../books/fantasy.json";


function App() {
  return (
    <div className="App">
      <WarningSign inputText="And this is an example!"/>
      <MyBadge inputText="ExampleTxt" />
      <div className="container">
        <div className='row'>
        <BookList books={books}/>
        </div>
      </div>
    </div>
  );
}

export default App;
