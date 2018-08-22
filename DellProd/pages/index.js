import App from './App'
import Head from 'next/head'

export default () =>
    <div>
        <Head>
            <title>Title aayega yahan</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />

            <link rel="stylesheet" type="text/css" href="/static/semantic/dist/semantic.min.css"/>
            <script
                src="https://code.jquery.com/jquery-3.1.1.min.js"
                integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                crossOrigin="anonymous"/>
            <script src="/static/semantic/dist/semantic.min.js"/>
            <link rel="stylesheet" href="/static/stylesheets/navbar.css"/>
            <link rel="stylesheet" href="/static/stylesheets/index.css"/>
        </Head>

        <App/>
    </div>