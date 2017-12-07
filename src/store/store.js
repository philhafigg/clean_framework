import Vue from 'vue';
import Vuex from 'vuex';
import config from '../config/config';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state:  {

        def: {

            status:     '',
            language:   ''
        },

        language:   {
            
                
            }
            ,

        products: [
            
        ]
    },

   /*  created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    } */


    /* getters: {
        
        getText(state) {
            return keyword => state.language[keyword];
        } 
    },*/
    getters:{
        getLanguage: (state) => {
            
            return state.language;
          }
        
      },

    //way up from child-component- change state
    mutations: {

       
    },

    //get a mutation async
    actions: {
        
        setLanguage: (store) => {

            store.state.def.language = config.config.language;    
            store.state.language = require('../languages/' + store.state.def.language + '.json');
        }
    }
})