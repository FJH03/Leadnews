webpackJsonp([13], {
    "2gGN": function (e, t) {
    }, md3T: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = a("Dd8w"), i = a.n(s), n = a("Xxa5"), r = a.n(n), l = a("exGp"), o = a.n(l), c = a("vLgD"),
            u = a("2EN7");

        function d(e) {
            return Object(c.a)({url: u.A, method: "post", data: e})
        }

        a("EBaU");
        var v = {
            name: "ContentManage", data: function () {
                return {
                    user: {},
                    emailData: null,
                    phoneData: null,
                    userData: null,
                    editEmail: !1,
                    editPhone: !1,
                    editUser: !1,
                    showHeadUpload: !1,
                    showLocalImg: !1,
                    localImg: null
                }
            }, created: function () {
                this.getUser()
            }, computed: {
                headImg: function () {
                    return this.user.photo ? this.user.photo : a("lS+k")
                }
            }, methods: {
                fileChange: function () {
                    var e = document.querySelector(".el-upload .el-upload__input").files[0];
                    this.localImg = URL.createObjectURL(e), this.showLocalImg = !0
                }, showHead: function () {
                    this.$refs.myUpload && this.$refs.myUpload.clearFiles(), this.showHeadUpload = !0
                }, getUser: function () {
                    var e = this;
                    return o()(r.a.mark(function t() {
                        var a, s;
                        return r.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(c.a)({url: u.z, method: "get"});
                                case 2:
                                    a = t.sent, s = a.data, e.user = s;
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }, beginEdit: function (e) {
                    this.checkOtherClose(e) ? this.$message({
                        type: "warning",
                        message: "请关掉其他正在编辑的内容"
                    }) : "email" == e ? (this.editEmail = !0, this.emailData = this.user.email) : "phone" == e ? (this.editPhone = !0, this.phoneData = this.user.phone) : "user" == e && (this.userData = i()({}, this.user), this.editUser = !0)
                }, checkOtherClose: function (e) {
                    return "email" == e ? this.editUser : "phone" == e ? this.editEmail : "user" == e ? this.editEmail : void 0
                }, cancelEdit: function (e) {
                    "email" == e ? this.editEmail = !1 : "phone" == e ? this.editPhone = !1 : "user" == e && (this.editUser = !1)
                }, saveEdit: function (e) {
                    var t = this;
                    return o()(r.a.mark(function a() {
                        var s;
                        return r.a.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    if ("email" != e) {
                                        a.next = 12;
                                        break
                                    }
                                    if (s = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/, !t.emailData.match(s)) {
                                        a.next = 9;
                                        break
                                    }
                                    return t.user.email = t.emailData, a.next = 6, d(t.user);
                                case 6:
                                    t.editEmail = !1, a.next = 10;
                                    break;
                                case 9:
                                    t.$message({type: "warning", message: "邮箱格式不正确!"});
                                case 10:
                                    a.next = 33;
                                    break;
                                case 12:
                                    if ("phone" != e) {
                                        a.next = 24;
                                        break
                                    }
                                    if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(t.phoneData)) {
                                        a.next = 21;
                                        break
                                    }
                                    return t.user.phone = t.phoneData, a.next = 18, d(t.user);
                                case 18:
                                    t.editPhone = !1, a.next = 22;
                                    break;
                                case 21:
                                    t.$message({type: "warning", message: "手机号码不正确!"});
                                case 22:
                                    a.next = 33;
                                    break;
                                case 24:
                                    if ("user" != e) {
                                        a.next = 33;
                                        break
                                    }
                                    if (!t.userData.name) {
                                        a.next = 32;
                                        break
                                    }
                                    return a.next = 28, d(t.userData);
                                case 28:
                                    t.getUser(), t.editUser = !1, a.next = 33;
                                    break;
                                case 32:
                                    t.$message({type: "warning", message: "头条号名称不能为空"});
                                case 33:
                                case"end":
                                    return a.stop()
                            }
                        }, a, t)
                    }))()
                }, uploadHead: function () {
                    var e = this;
                    return o()(r.a.mark(function t() {
                        var a, s;
                        return r.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!(a = document.querySelector(".el-upload .el-upload__input").files) || !a.length) {
                                        t.next = 9;
                                        break
                                    }
                                    return (s = new FormData).append("photo", a[0], a[0].name), t.next = 6, i = s, Object(c.a)({
                                        url: u.q,
                                        method: "patch",
                                        data: i
                                    });
                                case 6:
                                    e.$message({message: "上传成功", type: "success"}) && e.getUser(), t.next = 10;
                                    break;
                                case 9:
                                    e.$message({message: "请选择一张图片", type: "warning"});
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                            var i
                        }, t, e)
                    }))()
                }
            }
        }, h = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "user-container"}, [a("header", [e._v("账号信息")]), e._v(" "), a("div", {staticClass: "wrap"}, [a("div", {staticClass: "form-item username"}, [a("label", [a("div", [a("img", {
                    staticClass: "user-avatar",
                    attrs: {src: e.headImg}
                }), a("br"), e._v(" "), a("a", {
                    staticStyle: {color: "#3296fa"},
                    attrs: {href: "javascript:;"},
                    on: {click: e.showHead}
                }, [e._v("更换头像")])])]), e._v(" "), e.editUser ? e._e() : a("div", {staticClass: "rightContent"}, [a("dl", [a("dt", [e._v(e._s(e.user.name))]), e._v(" "), a("dd", [e._v(e._s(e.user.intro))])]), e._v(" "), a("a", {
                    staticStyle: {color: "#3296fa"},
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (t) {
                            return e.beginEdit("user")
                        }
                    }
                }, [e._v("修改")])]), e._v(" "), e.editUser ? a("div", {staticClass: "clause edituser"}, [a("el-form", [a("el-form-item", {
                    attrs: {
                        "label-width": "120px",
                        label: "名称"
                    }
                }, [a("el-input", {
                    staticStyle: {width: "30%"},
                    attrs: {placeholder: "请输入头条号名称"},
                    model: {
                        value: e.userData.name, callback: function (t) {
                            e.$set(e.userData, "name", t)
                        }, expression: "userData.name"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    attrs: {
                        "label-width": "120px",
                        label: "简介"
                    }
                }, [a("el-input", {
                    staticStyle: {width: "30%"},
                    attrs: {placeholder: "请输入头条号简介"},
                    model: {
                        value: e.userData.intro, callback: function (t) {
                            e.$set(e.userData, "intro", t)
                        }, expression: "userData.intro"
                    }
                })], 1)], 1), e._v(" "), a("div", {staticClass: "btn-group"}, [a("el-button", {
                    attrs: {
                        size: "small",
                        type: "primary"
                    }, on: {
                        click: function (t) {
                            return e.saveEdit("user")
                        }
                    }
                }, [e._v("保存")]), e._v(" "), a("el-button", {
                    attrs: {size: "small"}, on: {
                        click: function (t) {
                            return e.cancelEdit("user")
                        }
                    }
                }, [e._v("取消")])], 1)], 1) : e._e()]), e._v(" "), a("div", {staticClass: "form-item userinfo"}, [a("label", [e._v("账号信息")]), e._v(" "), a("div", {staticClass: "rightContent"}, [e._m(0), e._v(" "), a("div", {staticClass: "clause"}, [a("span", [e._v("头条号ID")]), e._v(e._s(e.user.id) + "\n        ")])])]), e._v(" "), a("div", {staticClass: "form-item userinfo"}, [a("label", [e._v("登录方式")]), e._v(" "), a("div", {staticClass: "rightContent"}, [e.editPhone ? e._e() : a("div", {staticClass: "clause"}, [a("span", [e._v("绑定手机")]), e._v(e._s(e.user.phone) + "\n          "), a("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (t) {
                            return e.beginEdit("phone")
                        }
                    }
                }, [e._v("修改绑定手机")])])]), e._v(" "), e.editPhone ? a("div", {staticClass: "clause"}, [a("span", [e._v("绑定手机")]), e._v(" "), a("el-input", {
                    attrs: {placeholder: "请输入手机号码"},
                    model: {
                        value: e.phoneData, callback: function (t) {
                            e.phoneData = t
                        }, expression: "phoneData"
                    }
                }), e._v(" "), a("div", {staticClass: "btn-group"}, [a("el-button", {
                    attrs: {
                        size: "small",
                        type: "primary"
                    }, on: {
                        click: function (t) {
                            return e.saveEdit("phone")
                        }
                    }
                }, [e._v("保存")]), e._v(" "), a("el-button", {
                    attrs: {size: "small"}, on: {
                        click: function (t) {
                            return e.cancelEdit("phone")
                        }
                    }
                }, [e._v("取消")])], 1)], 1) : e._e()]), e._v(" "), a("div", {staticClass: "form-item userinfo"}, [a("label", [e._v("邮箱")]), e._v(" "), a("div", {staticClass: "rightContent"}, [e.editEmail ? e._e() : a("div", {staticClass: "clause"}, [a("span", [e._v(e._s(e.user.email))]), e._v(" "), a("a", {
                    attrs: {href: "javascript:;"},
                    on: {
                        click: function (t) {
                            return e.beginEdit("email")
                        }
                    }
                }, [e._v("修改邮箱")])]), e._v(" "), e.editEmail ? a("div", {staticClass: "clause"}, [a("span", [e._v("邮箱")]), e._v(" "), a("el-input", {
                    attrs: {placeholder: "请输入邮箱地址"},
                    model: {
                        value: e.emailData, callback: function (t) {
                            e.emailData = t
                        }, expression: "emailData"
                    }
                }), e._v(" "), a("div", {staticClass: "btn-group"}, [a("el-button", {
                    attrs: {
                        size: "small",
                        type: "primary"
                    }, on: {
                        click: function (t) {
                            return e.saveEdit("email")
                        }
                    }
                }, [e._v("保存")]), e._v(" "), a("el-button", {
                    attrs: {size: "small"}, on: {
                        click: function (t) {
                            return e.cancelEdit("email")
                        }
                    }
                }, [e._v("取消")])], 1)], 1) : e._e()])])]), e._v(" "), a("el-dialog", {
                    attrs: {
                        visible: e.showHeadUpload,
                        title: "上传头像"
                    }, on: {
                        "update:visible": function (t) {
                            e.showHeadUpload = t
                        }
                    }
                }, [e.showLocalImg ? a("img", {
                    staticClass: "localimg",
                    attrs: {src: e.localImg, alt: ""}
                }) : e._e(), e._v(" "), a("el-upload", {
                    ref: "myUpload",
                    staticClass: "avatar-uploader",
                    attrs: {"on-change": e.fileChange, "auto-upload": !1, limit: 1}
                }, [a("i", {staticClass: "el-icon-plus avatar-uploader-icon"})]), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (t) {
                            e.showHeadUpload = !1
                        }
                    }
                }, [e._v("取 消")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.uploadHead}
                }, [e._v("确 定")])], 1)], 1)], 1)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "clause"}, [t("span", [this._v("头条号类型")]), this._v("个人\n        ")])
            }]
        };
        var p = a("VU/8")(v, h, !1, function (e) {
            a("2gGN")
        }, "data-v-71032f08", null);
        t.default = p.exports
    }
});
//# sourceMappingURL=13.5305fc04ffa2890acdec.js.map
