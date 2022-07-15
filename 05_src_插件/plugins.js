export default {
    install(Vue) {
        // 定义全局过滤器(截取前4个字符)
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4)
        })
        // 定义全局fbind自定义指令，自动获取input的焦点
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        })
        // 定义全局混入
        Vue.mixin({
            methods: {
                showName() {
                    alert(this.name)
                }
            }
        })
        // 给Vue的原型上添加一个函数(vm、vc中就能使用了)
        Vue.prototype.hello = () => console.log('hello')
    }
}