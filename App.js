import * as eva from '@eva-design/eva';
import Homepage from './components/Hompage';
import { ApplicationProvider } from '@ui-kitten/components';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Homepage />
  </ApplicationProvider>
);
