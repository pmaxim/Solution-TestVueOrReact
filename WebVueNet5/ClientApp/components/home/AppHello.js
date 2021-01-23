System.register(["vue", "./Hello"], function (exports_1, context_1) {
    "use strict";
    var vue_1, Hello_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (Hello_1_1) {
                Hello_1 = Hello_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.default.extend({
                template: "#app-hello-template",
                data: function () {
                    return {
                        name: "World"
                    };
                },
                components: {
                    HelloComponent: Hello_1.default
                }
            }));
        }
    };
});
//# sourceMappingURL=AppHello.js.map