/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';
// @ts-ignore
import * as io from 'socket.io-client'

// @ts-ignore
window.io = io
// Have this in case you stop running your laravel echo server
if (typeof io !== 'undefined') {
    // @ts-ignore
    window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: window.location.hostname + ':6001',
        transports: ['websocket', 'polling', 'flashsocket'] // Fix CORS error!
    });

    // @ts-ignore
    window.Echo.channel('chat-room')
        .listen('.message.created', (event: any) => {
            alert(12)
            // Xử lý dữ liệu nhận được từ event
            console.log('New message:', event.message);
        });
}


