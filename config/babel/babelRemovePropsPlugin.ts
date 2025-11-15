import { PluginItem } from '@babel/core';

// eslint-disable-next-line func-names
export default function (): PluginItem {
    return {
        visitor: {
            // Identifier(path) {
            //     const { name } = path.node;
            //     // reverse the name: JavaScript -> tpircSavaJ
            //     path.node.name = name
            //         .split('')
            //         .reverse()
            //         .join('');
            // },
            Program(path, state) {
                const nodesForRemove = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (nodesForRemove.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
