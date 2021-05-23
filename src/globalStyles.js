import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    left: 20%;
    left: 20%;
  }
  .btn {
   background-color: #CB894C;
   border:none;
  }
  .btn:hover {
     background-color: #DC920A; 
     border:none;
  }
  .btn:focus {
    background-color: #DC920A; 
    border-color:#fff;
 }
 .btn:active {
  background-color: #DC920A;
  border-color:#fff;
}
.btn :visited {
  background-color: #DC920A;
  border-color:#fff;
}
.btn-primary.disabled, .btn-primary:disabled {
  background-color:rgba(220, 146, 10, 0.5); 
  border:none;
  cursor: not-allowed;
  pointer-events: none;
}
.red{
  color: red;
}
.form-control:focus {
  border-color:#DC920A;
  box-shadow: 0 0 0 0.2rem rgb(220 146 10 / 25%)
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
 -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`;

export default GlobalStyle;