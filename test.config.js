import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import serializer from '@emotion/snapshot-serializer';

expect.addSnapshotSerializer(serializer);

Enzyme.configure({ adapter: new Adapter() });
