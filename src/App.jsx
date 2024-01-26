import { VideoGallery } from "./components/VideoGallery";
import { Navbar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <SideBar></SideBar>
        <VideoGallery></VideoGallery>
      </div>
    </>
  );
}

export default App;
