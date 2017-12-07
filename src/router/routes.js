import componentone from '../components/Component1.vue'
import componenttwo from '../components/Component2.vue'

export default[

    {
        path:'/', 
        component: componentone
    },
    {
        path:'/componentone', 
        component: componentone
    },
    {
        path:'/componenttwo', 
        component: componenttwo
    }
]