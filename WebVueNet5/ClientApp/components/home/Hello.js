System.register(["vue"], function (exports_1, context_1) {
    "use strict";
    var vue_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.default.extend({
                template: "#hello-template",
                props: ["name", "initialEnthusiasm"],
                data: function () {
                    return {
                        enthusiasm: this.initialEnthusiasm
                    };
                },
                methods: {
                    increment: function () { this.enthusiasm++; },
                    decrement: function () {
                        if (this.enthusiasm > 1) {
                            this.enthusiasm--;
                        }
                    },
                },
                computed: {
                    exclamationMarks: function () {
                        return Array(this.enthusiasm + 1).join("!");
                    }
                }
            }));
        }
    };
});
//# sourceMappingURL=Hello.js.map