import { QueryClient, QueryClientProvider } from "react-query";
import PokeWeb from "./components/PokeWeb";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PokeWeb />
      </QueryClientProvider>
    </>
  );
}

export default App;
