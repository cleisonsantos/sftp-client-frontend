import { createGlobalStyle } from 'styled-components'
import Manager from './components/manager'
const GlobalStyle = createGlobalStyle`
//@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
* {

  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;

}
`
const theme = {
  primary: "#0a58ca",
  secondary: "#6c757d",
  success: "#198754",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#20c997",
  light: "#f8f9fa",
  dark: "#212529"
}

function App() {

  return (
    <>
    <GlobalStyle />
    <Manager theme={theme} />
    </>
  );
}

export default App;
