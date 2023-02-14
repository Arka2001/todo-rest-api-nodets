const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['./src/todo-app.ts'],
    resolve: {
        extensions: ['.ts']
    },
    target: "node",
    mode: "production",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'todo-app.js'
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ],
    }
};