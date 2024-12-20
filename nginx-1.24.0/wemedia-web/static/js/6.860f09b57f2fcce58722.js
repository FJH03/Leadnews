webpackJsonp([6], {
    "+qhq": function (e, t) {
    }, "0dJf": function (e, t) {
    }, Oohs: function (e, t) {
    }, YrcP: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = a("Xxa5"), s = a.n(i), n = a("exGp"), r = a.n(n), o = {
            data: function () {
                return {}
            },
            props: {
                name: {type: String, required: !0},
                percentage: {type: Number, required: !0},
                legend: {
                    type: Array, default: function () {
                        return ["", ""]
                    }
                }
            },
            components: {},
            computed: {},
            methods: {}
        }, h = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "content"}, [a("header", [e._v(e._s(e.name) + "\n    "), a("div", {staticClass: "legend"}, [a("span", {staticClass: "m"}, [e._v(e._s(e.legend[0]) + "（" + e._s(e.percentage) + "%）")]), e._v(" "), a("span", {staticClass: "f"}, [e._v(e._s(e.legend[1]) + "（" + e._s(100 - e.percentage) + "%）")])])]), e._v(" "), a("el-progress", {
                    attrs: {
                        "text-inside": !0,
                        "stroke-width": 30,
                        percentage: e.percentage,
                        color: "#69b4ff"
                    }
                })], 1)
            }, staticRenderFns: []
        };
        var c = a("VU/8")(o, h, !1, function (e) {
            a("Oohs")
        }, "data-v-12303fae", null).exports, d = a("XLwt"), l = a.n(d);
        a("tcAE");
        var u = {
            props: ["className", "width", "height", "autoResize", "ageRangeValue", "ageRangeKey", "fansAgePerc"],
            data: function () {
                return {}
            },
            watch: {
                chartData: {
                    deep: !0, handler: function (e) {
                        this.setOptions(e)
                    }
                }, ageRangeValue: {
                    deep: !0, handler: function (e) {
                        this.ageRangeValue = e, this.initChart()
                    }
                }, ageRangeKey: {
                    deep: !0, handler: function (e) {
                        this.ageRangeKey = e, this.initChart()
                    }
                }
            },
            mounted: function () {
                this.initChart(), this.sidebarElm = document.getElementsByClassName("sidebar-container")[0], this.sidebarElm && this.sidebarElm.addEventListener("transitionend", this.sidebarResizeHandler)
            },
            beforeDestroy: function () {
                this.chart && (this.autoResize && window.removeEventListener("resize", this.__resizeHandler), this.sidebarElm && this.sidebarElm.removeEventListener("transitionend", this.sidebarResizeHandler), this.chart.dispose(), this.chart = null)
            },
            methods: {
                sidebarResizeHandler: function (e) {
                    "width" === e.propertyName && this.__resizeHandler()
                }, setOptions: function () {
                    this.chart.setOption({
                        color: ["#3398DB"],
                        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}},
                        grid: {left: "3%", right: "4%", bottom: "3%", containLabel: !0},
                        xAxis: [{type: "category", data: this.ageRangeKey, axisTick: {alignWithLabel: !0}}],
                        yAxis: [{type: "value"}],
                        series: [{
                            name: "直接访问",
                            type: "bar",
                            barWidth: "30%",
                            color: "#69b4ff",
                            data: this.ageRangeValue
                        }]
                    })
                }, initChart: function () {
                    this.chart = l.a.init(this.$refs.chart, "macarons"), this.setOptions(this.chartData)
                }
            }
        }, g = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "chart-content"}, [t("header", [this._v("头条粉丝")]), this._v(" "), t("div", {staticClass: "chart"}, [t("div", {
                    ref: "chart",
                    style: {height: this.height, width: this.width}
                }), this._v(" "), t("el-table", {attrs: {data: this.fansAgePerc}}, [t("el-table-column", {
                    attrs: {
                        prop: "age",
                        label: "年龄"
                    }
                }), this._v(" "), t("el-table-column", {attrs: {prop: "perc", label: "粉丝占比"}})], 1)], 1)])
            }, staticRenderFns: []
        };
        var m = a("VU/8")(u, g, !1, function (e) {
            a("0dJf")
        }, "data-v-35742de3", null).exports;
        a("tcAE");
        var f = {
            props: {
                className: {type: String, default: "chart"},
                width: {type: String, default: "100%"},
                height: {type: String, default: "350px"},
                autoResize: {type: Boolean, default: !0},
                chartData: {type: Object}
            }, data: function () {
                return {
                    tableData: [{date: "2016-05-02", name: "王小虎"}, {
                        date: "2016-05-04",
                        name: "王小虎"
                    }, {date: "2016-05-01", name: "王小虎"}, {date: "2016-05-03", name: "王小虎"}]
                }
            }, watch: {
                chartData: {
                    deep: !0, handler: function (e) {
                        this.setOptions(e)
                    }
                }
            }, mounted: function () {
                this.initChart(), this.sidebarElm = document.getElementsByClassName("sidebar-container")[0], this.sidebarElm && this.sidebarElm.addEventListener("transitionend", this.sidebarResizeHandler)
            }, beforeDestroy: function () {
                this.chart && (this.autoResize && window.removeEventListener("resize", this.__resizeHandler), this.sidebarElm && this.sidebarElm.removeEventListener("transitionend", this.sidebarResizeHandler), this.chart.dispose(), this.chart = null)
            }, methods: {
                sidebarResizeHandler: function (e) {
                    "width" === e.propertyName && this.__resizeHandler()
                }, setOptions: function (e) {
                    this.chart.setOption({
                        color: ["#3398DB"],
                        tooltip: {trigger: "axis", axisPointer: {type: "shadow"}},
                        grid: {left: "3%", right: "4%", bottom: "3%", containLabel: !0},
                        xAxis: [{type: "category", data: e.key, axisTick: {alignWithLabel: !0}}],
                        yAxis: [{type: "value"}],
                        series: [{name: "直接访问", type: "bar", barWidth: "30%", color: "#69b4ff", data: e.value}]
                    })
                }, initChart: function () {
                    this.chart = l.a.init(this.$refs.chart, "macarons"), this.setOptions(this.chartData)
                }
            }
        }, p = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "chart-content"}, [t("header", [this._v("近七日阅读量")]), this._v(" "), t("div", {staticClass: "chart"}, [t("div", {
                    ref: "chart",
                    style: {height: this.height, width: this.width}
                })])])
            }, staticRenderFns: []
        };
        var v = a("VU/8")(f, p, !1, function (e) {
            a("+qhq")
        }, "data-v-14785383", null).exports, b = a("fWCK"), y = {
            name: "ContentManage", data: function () {
                return {
                    gender: {male: 0, female: 0},
                    mobile: {android: 0, ios: 0},
                    ageRangeValue: [],
                    ageRangeKey: [],
                    width: "75%",
                    height: "350px",
                    autoResize: !0,
                    fansAgePerc: [],
                    readData: {key: [], value: []}
                }
            }, components: {Progress: c, CategoryChart: m, CategoryChartBig: v}, created: function () {
                this.getFansPortrait()
            }, computed: {
                manPercent: function () {
                    return this.gender.male + this.gender.female > 0 ? Math.round(100 * parseFloat(this.gender.male / (this.gender.male + this.gender.female))) : 50
                }, iosPercent: function () {
                    return this.mobile.android + this.mobile.ios > 0 ? Math.round(100 * parseFloat(this.mobile.android / (this.mobile.android + this.mobile.ios))) : 50
                }
            }, methods: {
                getFansPortrait: function () {
                    var e = this;
                    return r()(s.a.mark(function t() {
                        var a, i, n, r, o;
                        return s.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(b.e)();
                                case 2:
                                    0 == (a = t.sent).code ? (i = a.data, n = [], r = [], o = 0, i.forEach(function (t) {
                                        var a = t.name.split(":")[1], i = Number(t.value);
                                        t.name.startsWith("sex") && (e.gender[a] = i), t.name.startsWith("mobile") && (e.mobile[a] = i), t.name.startsWith("age") && (n.push(t), o += i), t.name.startsWith("read") && r.push(t)
                                    }), e.setAges(n, o), e.statisticRead(r)) : e.$message({
                                        type: "error",
                                        message: a.error_message
                                    });
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }, setAges: function (e, t) {
                    var a = this;
                    e.sort(function (e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    }), e.forEach(function (e) {
                        var i = e.name.split(":")[1], s = Number(e.value);
                        a.ageRangeKey.push(i + "岁"), a.ageRangeValue.push(Number(s));
                        var n = Math.round(parseFloat(s / t * 100));
                        a.fansAgePerc.push({age: i, perc: n + "%"})
                    })
                }, statisticRead: function (e) {
                    var t = this;
                    e.sort(function (e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    }), e.forEach(function (e) {
                        var a = e.name.split(":")[1], i = Number(e.value);
                        t.readData.key.push(a), t.readData.value.push(i)
                    })
                }
            }
        }, _ = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "fans-container"}, [a("header", [e._v("粉丝列表")]), e._v(" "), a("div", {staticClass: "tabBar"}, [a("router-link", {attrs: {to: "/fans/index"}}, [e._v("粉丝概况")]), e._v(" "), a("router-link", {
                    staticClass: "active",
                    attrs: {to: "/fans/info"}
                }, [e._v("粉丝画像")]), e._v(" "), a("router-link", {attrs: {to: "/fans/list"}}, [e._v("粉丝列表")])], 1), e._v(" "), a("div", {staticClass: "tabView"}, [a("Progress", {
                    attrs: {
                        name: "粉丝性别分布",
                        percentage: e.manPercent,
                        legend: ["男", "女"]
                    }
                }), e._v(" "), a("category-chart", {
                    attrs: {
                        ageRangeKey: e.ageRangeKey,
                        ageRangeValue: e.ageRangeValue,
                        width: e.width,
                        height: e.height,
                        autoResize: e.autoResize,
                        fansAgePerc: e.fansAgePerc
                    }
                }), e._v(" "), a("Progress", {
                    attrs: {
                        name: "粉丝终端分布",
                        percentage: e.iosPercent,
                        legend: ["Android", "IOS"]
                    }
                }), e._v(" "), a("category-chart-big", {attrs: {chartData: e.readData}})], 1)])
            }, staticRenderFns: []
        };
        var R = a("VU/8")(y, _, !1, function (e) {
            a("c7FK")
        }, "data-v-30555ee1", null);
        t.default = R.exports
    }, c7FK: function (e, t) {
    }
});
//# sourceMappingURL=6.860f09b57f2fcce58722.js.map
