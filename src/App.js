import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'


import React,{useState} from 'react'

const App=() => {
  const pagesize=8;
  const apiKey="0d301b8ccb14434b8e28e260bd646ad4";
  const [progress, setProgress] = useState(0)
  // state={
  //   progress:0
  // }
  const setProgressfunc=(prog)=>{
    setProgress(prog)
    // setState({progress: progress})
  }
    return (
      <div>
        <BrowserRouter>
        
        <Navbar/>
        <div>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
    </div>
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="general"  pageSize={pagesize} country="in" category="general"/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="business"  pageSize={pagesize} country="in" category="business"/>}></Route>
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="general"  pageSize={pagesize} country="in" category="general"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="entertainment"  pageSize={pagesize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="health"  pageSize={pagesize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="science"  pageSize={pagesize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="sports"  pageSize={pagesize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgressfunc}  key="technology"  pageSize={pagesize} country="in" category="technology"/>}></Route>
        </Routes>
        
        </BrowserRouter>
      </div>
    )
}

export default App;

