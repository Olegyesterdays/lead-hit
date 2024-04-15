import api from '@/services/api.js';
import router from '@/router/index.js';

export const authorizationModule = {
    state: {
        leadHitSiteId: "",
        theme: "light",
        isMenu: false,
    },

    getters: {
        getLeadHitSiteId(state) {
            return state.leadHitSiteId;
        },

        getCurrentTheme(state) {
            return state.theme
        },

        getIsMenu(state) {
            return state.isMenu;
        }
    },

    mutations: {
        recordLeadHitSiteId(state, { leadHitSiteId }) {
            state.leadHitSiteId = leadHitSiteId;
        },

        setTheme(state, { theme }) {
            state.theme = theme
        },

        deleteID(state) {
            state.leadHitSiteId = "";
        },

        deleteTheme(state) {
            state.theme = "";
        },

        switchIsMenu(state, { condition }) {
            state.isMenu = condition
        }
    },

    actions: {
        fetch({ commit }) {
            commit('recordLeadHitSiteId', { leadHitSiteId: localStorage.getItem('leadhit-site-id') });
            commit('setTheme', { theme: localStorage.getItem('theme') })
        },

        update({ getters }) {
            localStorage.setItem('leadhit-site-id', getters["getLeadHitSiteId"]);
            localStorage.setItem('theme', getters["getCurrentTheme"])
        },

        logInToYourAccount({ commit, getters }, iDEnteredByTheUser) {
            api
                .get(`/client/test_auth`)

                .then(response => {
                    if (response.data.message === "ok") {
                        commit("recordLeadHitSiteId", {leadHitSiteId: iDEnteredByTheUser});

                        router.push({path: '/analytics'});
                    }
                })

                .catch(e => console.error(e))
        },

        logOutOfYourAccount({ commit }) {
            commit("switchIsMenu", {condition: false})
            commit("deleteID");
            commit("deleteTheme")

            router.push({path: '/authorization'});
        },

        switchTheme({ commit, getters }) {
            commit("setTheme", {
                theme: getters["getCurrentTheme"] === 'light' ? 'dark' : 'light'
            })
        },

        installingTheTheme({ getters }) {
            if (getters["getCurrentTheme"] === 'light') {
                document.documentElement.style.setProperty('--accent-color', '#ED202E')
                document.documentElement.style.setProperty('--additional-color', '#000000')
                document.documentElement.style.setProperty('--main-color', '#da4b1a')
                document.documentElement.style.setProperty('--background-color', '#FFFFFF')
                document.documentElement.style.setProperty('--text-color', '#FFFFFF')
                document.documentElement.style.setProperty('--text-color-accent', '#000000')
                document.documentElement.style.setProperty('--shadow-color', '#00000019')
            } else {
                document.documentElement.style.setProperty('--accent-color', '#ED202E')
                document.documentElement.style.setProperty('--additional-color', '#000000')
                document.documentElement.style.setProperty('--main-color', '#da4b1a')
                document.documentElement.style.setProperty('--background-color', '#1e1e1e')
                document.documentElement.style.setProperty('--text-color', '#FFFFFF')
                document.documentElement.style.setProperty('--text-color-accent', '#FFFFFF')
                document.documentElement.style.setProperty('--shadow-color', '#00000019')
            }
        }
    },

    namespaced: true
}
