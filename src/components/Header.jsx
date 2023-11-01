import Logo from "../assets/2021-10-22.png"

export default function Header() {
  return (
    <div>
        <img className="logo" src={Logo} alt="A Picture"/>
        <a href="/">Home</a>

    </div>
  )
}
