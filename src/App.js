import BannerComponent from "./Banner/BannerComponent";
import Header from "./HeaderComponent/Header";
import MainPanel from "./MainPanel/MainPanel";
import NavComponent from "./NavComponent";

function App() {
  return (
    <div>
    <Header/>
    <NavComponent/>
    <BannerComponent/>
    <MainPanel/>
    </div>
  );
}

export default App;
