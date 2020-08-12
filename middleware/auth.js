export default function(context) {
    console.log('[Middleware] Authorization');
    let token = null;
    if (process.client) {
        console.log('Checking browser for token')
        token = localStorage.getItem('token')
        console.log(token)

    } else {
        console.log('Checking server for token')
        token = context.$cookies.get('token')
        console.log(token)
    }

    if (token != null && token != "null") {
        context.store.dispatch('setToken', token);
        if (context.route.path.indexOf('/auth') > -1) {
            console.log('Redirect to products');
            //context.redirect('/products');
        }
        //return;
    }

    if (token == null || token == "null" || !context.store.getters.isAuthenticated) {
        console.log('Redirect to login');
        context.redirect('/auth/login');
    }
}