import SearchForm from "./SearchForm";
import './SearchForm.scss';

export default {
    title: 'components/SearchForm',
    component: SearchForm,
    tags: ['autodocs'],
    argTypes: {
        initialSearchQuery: { control: 'text' }
    },
}

export const NoInitialQuery = () => {
    return <SearchForm/>
}

export const WithInitialQuery = (args) => {
    return <SearchForm {...args}/>
}
WithInitialQuery.args = {
    initialSearchQuery: 'search something!',
}
