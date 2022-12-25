
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './MainApp';

import { WrapperAuth } from './Context/AuthWrapper';

export default function App() {
  return (
    <>
      <WrapperAuth>
        <MainApp/>
      </WrapperAuth>
    </>
  );
}

