/* eslint-disable import/no-anonymous-default-export */
export default (type: string) => {
    switch (type) {
        case 'graphql':
            return import('./graphql').then(factory => factory.default());
        default:
            return import('./rest').then(factory => factory.default());
    }
};
