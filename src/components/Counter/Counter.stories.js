import Counter from './Counter';
import './Counter.scss';

export default {
    title: 'components/Counter',
    component: Counter,
    tags: ['autodocs'],
    argTypes: {
        initialValue: { control: 'number' }
    }
};

export const InitialValue = {
    args: {
        initialValue: 12,
    }
}
