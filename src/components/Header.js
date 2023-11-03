import Logo from "../assets/R.png"

export default function Header() {
  return (
    <div className="header">
        <img className="logo" src={Logo} alt="A Crest"/>
        <a href="/">Home</a>
    </div>
  )
}
