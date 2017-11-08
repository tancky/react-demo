
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
    {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
    },
    {
        test: /\.(js|jsx)$/,               //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/,           //屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'                    //loader的名称（必须）
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]
        })
    },
    {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader'
                }
            ]
        })
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
            "raw-loader"
        ]
    },
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash].[ext]'
                }
            }
        ]
    }
]