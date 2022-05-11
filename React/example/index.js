//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
/*
function Header(){
  return(
    <header>
      <nav className="nav">
         <img className ="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo-react-from-wikipedia"/>
         <ul className ="nav-items">
           <li>Pricing</li>
           <li>About</li>
           <li>Contact</li>
         </ul>
       </nav>
    </header>
  )
}*/
import Header from "./Header"


function MainContent(){
  return(
  <div>
    <h1>Things I love from react: </h1>
      <ol>
        <li>first Things</li>
        <li>second Things</li>
        <li>third Things</li>
      </ol>
  </div>
)}

function Footer(){
  return(
      <footer className="footer">
          <small>© 2022 Landa development. All rights reserved.</small>
      </footer>
)}

function Page(){
  return(
    <div className="main-case">
      <Header />
      <MainContent />
      <Footer />     
    </div>
  )
}


ReactDOM.render(<Page />, document.getElementById("root"))