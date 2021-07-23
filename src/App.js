import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chats/Chat";
import News from "./pages/news/News";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/messages/" component={Chat} />
          <Route path="/news/" component={News} />
          <Route path="*" component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
