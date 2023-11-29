import { registerRootComponent } from 'expo'; // Importe registerRootComponent da Expo
import App from './src/App';
import { name as appName } from './app.json';

registerRootComponent(App, { initialProps: appName }); // Registre o componente raiz usando registerRootComponent
