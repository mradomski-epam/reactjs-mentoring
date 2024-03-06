import SearchForm from "./SearchForm";
import './SearchForm.scss';
import {useArgs} from "@storybook/preview-api";

export default {
    title: 'components/SearchForm',
    component: SearchForm,
    tags: ['autodocs'],
    argTypes: {
        initialSearchQuery: { control: 'text' }
    },
}

export const NoInitialQuery = {
    args: {
        initialSearchQuery: '',
    },
    render: function Render() {
        const [{ initialSearchQuery }] = useArgs();
        const onSearch = () => {}

        return <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch}/>
    }
}

export const WithInitialQuery = {
    args: {
        initialSearchQuery: 'search something!',
    },
    render: function Render() {
        const [{ initialSearchQuery }] = useArgs();
        const onSearch = () => {}

        return <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch}/>
    }
}
