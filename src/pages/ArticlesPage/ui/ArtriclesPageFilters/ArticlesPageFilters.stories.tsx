import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

// import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = () => (
    <ArticlesPageFilters />
);

export const Normal = Template.bind({});
Normal.args = {};
