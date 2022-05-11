export default function Header(){
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
}