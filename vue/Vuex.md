####Vuex
Vuex 是适用于 Vue.js 应用的状态管理库，为应用中的所有组件提供集中式的状态存储与操作，保证了所有状态以可预测的方式进行修改。
Vuex 中 Store 的模板化定义如下：
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },  
  modules: {
    
  }
})
export default store
```
上述代码中包含了定义 Vuex Store 时关键的 5 个属性：
        1.state: state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
```
state: {
  projects: [],
  userProfile: {}
}
```
  2.actions:Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。可以在组件中使用dispatch来发出 Actions。
```
actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('/secured/projects').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  }
```
3.mutations: 调用 mutations 是唯一允许更新应用状态的地方。        
```
mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    }
  }
```
4.getters: Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表：
```
getters: {
 completedProjects: state => {
  return state.projects.filter(project => project.completed).length
 }
}
```
5.modules: modules 对象允许将单一的 Store 拆分为多个 Store 的同时保存在单一的状态树中。随着应用复杂度的增加，这种拆分能够更好地组织代码
