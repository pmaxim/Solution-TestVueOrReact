System.register(["vue", "./components/AppHello"], function (exports_1, context_1) {
    "use strict";
    var vue_1, AppHello_1, v;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (AppHello_1_1) {
                AppHello_1 = AppHello_1_1;
            }
        ],
        execute: function () {
            v = new vue_1.default({
                el: "#app-root",
                template: '<AppHelloComponent />',
                //render: h => h(AppHelloComponent),
                components: {
                    AppHelloComponent: AppHello_1.default
                }
            });
        }
    };
});
//# sourceMappingURL=index.js.map