import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import serializer from '@emotion/snapshot-serializer';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';


registerRequireContextHook();
expect.addSnapshotSerializer(serializer);

Enzyme.configure({ adapter: new Adapter() });
