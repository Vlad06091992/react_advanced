import type { StorybookConfig } from '@storybook/react-webpack5';
import path from "path";

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        // '@storybook/addon-styling-webpack',
        // ({
        //     name: '@storybook/addon-styling-webpack',
        //     options: {
        //         rules: [
        //             {
        //                 test: /\.scss$/,
        //                 use: [
        //                     'style-loader',
        //                     'css-loader',
        //                     {
        //                         loader: 'sass-loader',
        //                         // options: {
        //                         //     implementation: require.resolve('sass'),
        //                         //     additionalData: `@import "${path.resolve(__dirname, '../../src/app//styles/index.scss')}";`,
        //                         // },
        //                     },
        //                 ],
        //             },
        //         ],
        //     },
        // }),
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
};
export default config;
