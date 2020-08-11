export default function(context) {
    console.log('[Middleware] Authorization');
    let token = null;
    if (process.client) {
        console.log('Checking localStorage for token')
        token = localStorage.getItem('token')
    } else {
        token = context.$cookies.get('token')
            //console.log(token);
    }

    if (token != null && token != "null") {
        context.store.dispatch('setToken', token);
        if (context.route.path.indexOf('/auth') > -1) {
            context.redirect('/products');
        }
        return;
    }

    if (!context.store.getters.isAuthenticated) {
        context.redirect('/auth/login');
    }
}