const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
                // options: {},
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         // you can specify a publicPath here
                    //         // by default it uses publicPath in webpackOptions.output
                    //         publicPath: '../',
                    //         hmr: devMode,
                    //         reloadAll: true,
                    //     },
                    // },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'preact-svg-loader',
            }
        ]
    },
    devServer: {
        port: 9000,
    },
    resolve: {
        alias: {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
            // Must be below test-utils
        },
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // all options are optional
        //     filename: devMode ? '[name].css' : '[name].[hash].css',
        //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        //     ignoreOrder: false, // Enable to remove warnings about conflicting order
        // }),
    ],
}