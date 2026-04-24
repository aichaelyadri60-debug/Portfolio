import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function MainLayouts({changeCurrentPage ,children}){
    console.log()
    return (
        <>
        <Navbar changeCurrentPage={changeCurrentPage}/>
        <div>
            {children}
        </div>

        <Footer />
        </>
    )
}