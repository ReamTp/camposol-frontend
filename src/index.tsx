import ReactDOM from 'react-dom';
import { GlobalStyle } from './components/GlobalStyles';
import AppRouter from "./components/router";

ReactDOM.render(
    <>
        <GlobalStyle />
        <AppRouter/>
    </>
    ,
    document.getElementById('root')
);