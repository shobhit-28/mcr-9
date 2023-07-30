import { Route, Routes } from "react-router-dom"

import { SideBar } from "./components/sideBar/sideBar"
import { HomePage } from "./pages/homePage/homePage"
import { ExplorePage } from "./pages/explorePage/explorePage"
import { PlaylistPage } from "./pages/playlists/playlistPage"
import { WatchLaterPage } from "./pages/watchLater/watchLaterPage"
import { SingleVideoPage } from "./pages/singleVideoPage/singleVideoPage"
import { SinglePlayListPage } from "./pages/singlePlayListPage/singlePlayListPage"

function App() {

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/explore" element={<ExplorePage />}/>
        <Route path="/watchlater" element={<WatchLaterPage />}/>
        <Route path="/playlist" element={<PlaylistPage />}/>
        <Route path="/video/:videoNum" element={<SingleVideoPage />}/>
        <Route path="/playlist/:playListID" element={<SinglePlayListPage />}/>
      </Routes>
    </div>
  )
}

export default App
