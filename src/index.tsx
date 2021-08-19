import ReactDOM from 'react-dom';
import { GlobalStyle } from './themes/GlobalStyles';
import AppRouter from "./router";

ReactDOM.render(
    <>
        <GlobalStyle />
        <AppRouter/>
    </>
    ,
    document.getElementById('root')
);