
<script>
    /**
     * 小生爱

     * Hook: 16.8 新增特性

     * hook 解决复用状态逻辑的问题 比 class 的 HOC 或者 render props 简单
     
     * Api: 
        * useState: 初始化数据 
        * useEffect: 副作用
        * useCallback: 父子组件传参优化
        * useRef: 获取节点 在整个生命周期内不会再改变 
        * useMemo: 方法优化
     
     * 规则:
        * hook 只能写在函数组件里
        * hook 要写在最顶层: 原因是因为 hook 解析是按顺序解析
        * 自定义 hook 需要以 use 开头

     * hook redux 使用方式:
        connect(state => ({
  
        }), {
        
        })(Home)
        function Home () {
          
        }
    */

</script>