webpackJsonp([4], {
    "+r1O": function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = a("Xxa5"), n = a.n(i), s = a("exGp"), r = a.n(s), o = {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "content"}, [a("el-row", {attrs: {gutter: 40}}, [a("el-col", {attrs: {span: 8}}, [a("div", {staticClass: "grid-content"}, [a("i"), t._v(" "), a("div", [a("div", [t._v(t._s(t.article) + " 个")]), t._v(" "), a("span", [t._v("图文发布量")])])])]), t._v(" "), a("el-col", {attrs: {span: 8}}, [a("div", {staticClass: "grid-content"}, [a("i"), t._v(" "), a("div", [a("div", [t._v(t._s(t.likes) + " 个")]), t._v(" "), a("span", [t._v("点赞数量")])])])]), t._v(" "), a("el-col", {attrs: {span: 8}}, [a("div", {staticClass: "grid-content"}, [a("i"), t._v(" "), a("div", [a("div", [t._v(t._s(t.collection))]), t._v(" "), a("span", [t._v("收藏量")])])])])], 1)], 1)
            }, staticRenderFns: []
        };
        var l = a("VU/8")({
            props: ["collection", "likes", "article"],
            components: {},
            computed: {},
            methods: {}
        }, o, !1, function (t) {
            a("5X67")
        }, "data-v-5f94d240", null).exports, c = a("XLwt"), d = a.n(c);
        a("tcAE");
        var h = {
            props: {
                className: {type: String, default: "chart"},
                width: {type: String, default: "100%"},
                height: {type: String, default: "350px"},
                autoResize: {type: Boolean, default: !0},
                chartData: {type: Object, required: !1}
            }, data: function () {
                return {chart: null, sidebarElm: null}
            }, watch: {
                chartData: {
                    deep: !0, handler: function (t) {
                        this.setOptions(t)
                    }
                }
            }, mounted: function () {
                this.initChart(), this.sidebarElm = document.getElementsByClassName("sidebar-container")[0], this.sidebarElm && this.sidebarElm.addEventListener("transitionend", this.sidebarResizeHandler)
            }, beforeDestroy: function () {
                this.chart && (this.autoResize && window.removeEventListener("resize", this.__resizeHandler), this.sidebarElm && this.sidebarElm.removeEventListener("transitionend", this.sidebarResizeHandler), this.chart.dispose(), this.chart = null)
            }, methods: {
                sidebarResizeHandler: function (t) {
                    "width" === t.propertyName && this.__resizeHandler()
                }, setOptions: function (t) {
                    t = t || {
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                        },
                        yAxis: {type: "value"},
                        series: [{data: [820, 932, 901, 934, 1290, 1330, 1320], type: "line", areaStyle: {}}]
                    }, this.chart.setOption(t)
                }, initChart: function () {
                    this.chart = d.a.init(this.$refs.chart, "macarons"), this.setOptions()
                }
            }
        }, p = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "chart-content"}, [e("div", {
                    ref: "chart",
                    style: {height: this.height, width: this.width}
                })])
            }, staticRenderFns: []
        };
        var u = a("VU/8")(h, p, !1, function (t) {
            a("YFs3")
        }, "data-v-489360a4", null).exports;
        a("tcAE");
        var m = {
            props: {
                width: {type: String, default: "100%"},
                height: {type: String, default: "380px"},
                data: {type: Object}
            }, data: function () {
                return {chart: null}
            }, watch: {
                data: function (t) {
                    this.initChart()
                }
            }, mounted: function () {
                this.initChart()
            }, beforeDestroy: function () {
                this.chart && (this.chart.dispose(), this.chart = null)
            }, methods: {
                initChart: function () {
                    this.chart = d.a.init(this.$refs.chart, "macarons");
                    var t = this.data.legend;
                    t.length > 13 && (t = t.splice(0, 14)), this.chart.setOption({
                        title: {text: this.data.title},
                        tooltip: {trigger: "item", formatter: "<br/>{b}: {c} ({d}%)"},
                        legend: {y: "bottom", data: t},
                        series: [{
                            name: this.data.title,
                            type: "pie",
                            radius: ["50%", "70%"],
                            roseType: "radius",
                            avoidLabelOverlap: !0,
                            itemStyle: {
                                color: function () {
                                    return "#" + ("00000" + (16777215 * Math.random() + .5 >> 0).toString(16)).slice(-6)
                                }
                            },
                            label: {
                                normal: {show: !1, position: "center"},
                                emphasis: {show: !0, textStyle: {fontSize: "30", fontWeight: "bold"}}
                            },
                            labelLine: {normal: {show: !1}},
                            data: this.data.data
                        }]
                    })
                }
            }
        }, f = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("section", {staticClass: "chart"}, [e("div", {staticClass: "box"}, [e("div", {
                    ref: "chart",
                    staticClass: "doughnut",
                    style: {height: this.height, width: this.width}
                })])])
            }, staticRenderFns: []
        };
        var v = a("VU/8")(m, f, !1, function (t) {
            a("FgIT")
        }, "data-v-398bf5fe", null).exports, g = a("+KWZ"), y = a("xT6B"), _ = {
            name: "ContentManage", data: function () {
                return {
                    parms: {type: "30", stime: "", etime: "", time: []},
                    all: {},
                    list: "",
                    graph: "",
                    pie: {},
                    lineInfo: [{name: "发文量", type: "article"}, {name: "阅读量", type: "read_count"}, {
                        name: "点赞量",
                        type: "likes"
                    }, {name: "评论量", type: "comment"}, {name: "收藏量", type: "collection"}, {
                        name: "转发量",
                        type: "follow"
                    }, {name: "不喜欢", type: "unlikes"}],
                    pickerOptions: {
                        disabledDate: function (t) {
                            return t.getTime() > Date.now()
                        }
                    }
                }
            }, components: {Statist: l, LineChart: u, DoughnutChart: v}, created: function () {
                this.parms.time = [new Date("2020-03-01 00:00:00"), new Date("2020-04-30 23:59:59")], this.loadDataByTimeRange(this.parms.time)
            }, methods: {
                loadDataByTimeRange: function (t) {
                    this.parms.type = -1, this.parms.stime = t[0].getTime(), this.parms.etime = t[1].getTime(), this.getNewsStatistics()
                }, loadDataByButton: function (t) {
                    "1" == t ? (this.parms.stime = y.a.getWeekSTime(), this.parms.etime = y.a.getWeekETime()) : (this.parms.etime = y.a.getNearTime(0), this.parms.stime = y.a.getNearTime(t)), this.getNewsStatistics()
                }, getNewsStatistics: function () {
                    var t = this;
                    return r()(n.a.mark(function e() {
                        var a, i, s, r, o, l, c, d, h, p;
                        return n.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(g.c)(t.parms);
                                case 2:
                                    for (a = e.sent, t.list = a.data, i = {
                                        article: 0,
                                        likes: 0,
                                        collection: 0,
                                        forward: 0,
                                        comment: 0,
                                        read_count: 0
                                    }, s = {}, r = 0; r < a.data.length; r++) {
                                        for (o = a.data[r], l = y.a.format13(o.created_time), c = s[l] ? s[l] : {}, d = 0; d < t.lineInfo.length; d++) h = t.lineInfo[d].type, i[h] += o[h], p = c[h] ? c[h] : 0, p += o[h], c[h] = p;
                                        s[l] = c
                                    }
                                    t.all = i, t.graph = s, t.parseToLine(s, i);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                }, parseToLine: function (t, e) {
                    var a = [];
                    for (var i in t) a.push(i);
                    a.sort();
                    for (var n = {}, s = {}, r = 0; r < a.length; r++) for (var o = 0; o < this.lineInfo.length; o++) {
                        var l = this.lineInfo[o].type;
                        n[l] = n[l] ? n[l] : [], n[l].push(t[a[r]][l]), s[l] = s[l] ? s[l] : {}, s[l].title = this.lineInfo[o].name + " - 占比", s[l].data = s[l].data ? s[l].data : [], s[l].legend = s[l].legend ? s[l].legend : [], s[l].legend.push(a[r]), s[l].data.push({
                            value: t[a[r]][l],
                            name: a[r]
                        })
                    }
                    for (var c = [], d = [], h = 0; h < this.lineInfo.length; h++) c.push({
                        name: this.lineInfo[h].name,
                        type: "bar",
                        areaStyle: {},
                        data: n[this.lineInfo[h].type]
                    }), d.push(this.lineInfo[h].name);
                    var p = {
                        title: {text: "明细数据"},
                        tooltip: {trigger: "axis"},
                        legend: {data: d},
                        xAxis: {type: "category", boundaryGap: !0, data: a},
                        yAxis: {type: "value"},
                        series: c
                    };
                    this.pie = s, this.$refs.lineChart.setOptions(p)
                }
            }
        }, b = {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "detail-container"}, [a("header", [t._v("详情分析")]), t._v(" "), a("div", {staticClass: "filter"}, [a("el-radio-group", {
                    on: {change: t.loadDataByButton},
                    model: {
                        value: t.parms.type, callback: function (e) {
                            t.$set(t.parms, "type", e)
                        }, expression: "parms.type"
                    }
                }, [a("el-radio-button", {attrs: {label: "0"}}, [t._v("今日")]), t._v(" "), a("el-radio-button", {attrs: {label: "1"}}, [t._v("本周")]), t._v(" "), a("el-radio-button", {attrs: {label: "7"}}, [t._v("近7天")]), t._v(" "), a("el-radio-button", {attrs: {label: "30"}}, [t._v("近30天")])], 1), t._v(" "), a("el-date-picker", {
                    attrs: {
                        type: "datetimerange",
                        "range-separator": "-",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期",
                        format: "yyyy-MM-dd HH:mm:ss",
                        placeholder: "选择日期",
                        "picker-options": t.pickerOptions
                    }, on: {change: t.loadDataByTimeRange}, model: {
                        value: t.parms.time, callback: function (e) {
                            t.$set(t.parms, "time", e)
                        }, expression: "parms.time"
                    }
                })], 1), t._v(" "), a("Statist", {
                    attrs: {
                        article: t.all.article,
                        likes: t.all.likes,
                        collection: t.all.collection
                    }
                }), t._v(" "), a("line-chart", {ref: "lineChart"}), t._v(" "), a("div", {staticClass: "chart"}, [t._l(t.pie, function (e) {
                    return ["发文量-转化率" != e.title ? a("doughnut-chart", {attrs: {data: e}}) : t._e()]
                })], 2)], 1)
            }, staticRenderFns: []
        };
        var w = a("VU/8")(_, b, !1, function (t) {
            a("Nuug")
        }, "data-v-f507c6fa", null);
        e.default = w.exports
    }, "5X67": function (t, e) {
    }, FgIT: function (t, e) {
    }, Nuug: function (t, e) {
    }, YFs3: function (t, e) {
    }
});
//# sourceMappingURL=4.760f6fff629848479252.js.map
