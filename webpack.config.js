const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const config = {
    entry: {
        app: ["./src/multiple/index.js"],
        main: ["./src/composieComponent/index.js"]
        //vendor: ['react', 'react-dom','react-router', 'react-router-dom','react-router-config']
    },
    output: {
        filename: "file[name].[hash].js",
        chunkFilename: "chunk[name].[hash].js",
        path: path.join(__dirname, "./build")
    },
    devServer: {
        contentBase: path.join(__dirname, "./src"),
        publicPath: "/",
        historyApiFallback: true,
        inline: true,
        port: 2337,
        host: "0.0.0.0",
        disableHostCheck: true
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "env", "stage-2"],
                        plugins: ["transform-runtime", "react-hot-loader/babel"]
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            Src: "../src",
            Page: "../src/page"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            // vendorName: manifest.name + '.js',
            title: "My lazy loader",
            filename: "index.html",
            chunks: ["app"], //引入的js
            filename: "app" //html位置
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            // vendorName: manifest.name + '.js',
            title: "My lazy loader",
            filename: "index.html",
            chunks: ["main"], //引入的js
            filename: "main" //html位置
        })
    ]
};
module.exports = config;
