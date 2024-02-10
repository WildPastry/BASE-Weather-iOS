import { StatusBar, StyleSheet } from 'react-native';
import Home from './screens/home/Home';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import store from './redux/store';
import useCachedResources from './hooks/useCachedResources';

const AppWithProvider: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App: React.FC = (): JSX.Element | null => {
  // Loading settings
  const isLoadingComplete: boolean = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export default registerRootComponent(AppWithProvider);
