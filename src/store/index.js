import { createStore } from 'vuex';

import { analyticsModule } from "@/store/modules/analytics-module.js";
import { authorizationModule } from "@/store/modules/authorization-module.js";

const store = createStore({
    modules: {
        analyticsModule,
        authorizationModule
    }
})

store.dispatch('authorizationModule/fetch')

store.subscribe(mutation => {
    if (mutation.type.startsWith('authorizationModule/')) {
        store.dispatch('authorizationModule/update')
    }
})

export default store
