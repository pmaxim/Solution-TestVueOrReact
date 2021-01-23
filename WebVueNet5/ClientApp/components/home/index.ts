import Vue from "vue";
import AppHelloComponent from "./AppHello";

let v = new Vue({
    el: "#app-root",
    template: "<AppHelloComponent />",
    //render: h => h(AppHelloComponent),
    components: {
        AppHelloComponent
    }
});