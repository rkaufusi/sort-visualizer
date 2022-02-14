import './App.css';
import LenPaper from './components/paper'

function App({randData, isSorted, redAnime}) {

   return (
    <div className="App">
      <h3>Sort Visualizer</h3>
      {randData.map((value, index) => {
        return (
          <LenPaper len={value} idx={index} currIdx={redAnime} isSorted={isSorted}/>
        )
      })} 
    </div>
  );
}

export default App;
