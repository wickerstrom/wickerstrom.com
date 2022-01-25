import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({ children }) {
  return (
    <div className="layoutWrapper">
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}