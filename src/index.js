import ReactDOM from 'react-dom/client';
import App from "./components/App"
import "./css/index.css"

const root = ReactDOM.createRoot(
    document.querySelector("#root")
)

root.render(<App/>)