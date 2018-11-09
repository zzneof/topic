let home = {
    title: "首页",
    url: "home.html"
};
let data = {
    message: 'Hello Vue!',
    home: home,
    curr: home,
    info: {
        title: "信息",
        url: "info.html"
    },
    rank: {
        title: "排行",
        url: "rank.html"
    },
    my: {
        title: "我的",
        url: "my.html"
    }
};
new Vue({
    el: '#app',
    data: data,
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (e) {
            this.curr = e;
        }
    }
});