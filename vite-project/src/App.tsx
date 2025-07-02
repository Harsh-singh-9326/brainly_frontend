import Button from './assets/component/ui/button';  // ✅ match case and path
import './App.css';

function App() {
    return (
        <>
            <Button className="background-red"
                size="lg"
                variant="primary"
                text="Click Me"
                onclick={() => alert("Button clicked!")}
                
            />
            <button className="bg-purple-2000">HELLP</button>
        </>
    );
}

export default App;
