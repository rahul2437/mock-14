import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <main className="px-4">
        <AllRoutes />
      </main>
    </div>
  );
}

export default App;
