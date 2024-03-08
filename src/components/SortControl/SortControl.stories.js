import SortControl from "./SortControl";
import './SortControl.scss';

const testData = [
    {
        label: 'Release Date', value: 'releaseDate',
    },
    {
        label: 'Title', value: 'title',
    }
]

export default {
    title: 'components/SortControl',
    component: SortControl,
    tags: ['autodocs'],
    argTypes: {
        options: testData,
        currentSort: testData[0],
        setCurrentSort: { action: 'clicked'},
    },
    parameters: {
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: '#282c34',
                }
            ]
        }
    }
}

export const ExampleData = {
    args: {
        options: testData,
        currentSort: testData[0],
        setCurrentSort: () => {},
    }
}
