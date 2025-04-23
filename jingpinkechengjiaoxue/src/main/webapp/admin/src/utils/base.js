const base = {
    get() {
        return {
            url : "http://localhost:8080/jingpinkechengjiaoxue/",
            name: "jingpinkechengjiaoxue",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jingpinkechengjiaoxue/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "课程管理系统"
        } 
    }
}
export default base
