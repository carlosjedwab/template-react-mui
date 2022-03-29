import { configApp } from 'app/app.config';
import { AppRoutes } from 'app/routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'typedi';
import { GlobalStoreProvider, STORES_TOKEN } from 'app/data/local/global-store.service';

function App() {
  configApp();
  const globalStores = Container.get(STORES_TOKEN);

  return (
    <BrowserRouter>
      <GlobalStoreProvider stores={globalStores}>
        <AppRoutes />
      </GlobalStoreProvider>
    </BrowserRouter>
  );
}

export default App;
