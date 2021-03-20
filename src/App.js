import './App.css';
import MiniDrawer from './components/bar/appBar'
import FunctionalContext from './components/contexts/context'
function App() {
  return (
    <FunctionalContext>
      <MiniDrawer/>
    </FunctionalContext>
  );
}

export default App;
