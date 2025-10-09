const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Refferal-OR_0rgII.js", "./index-DL1OEFmQ.js", "./index-C6k8ZUm0.css", "./MyApp-DPkhHznZ.js", "./useCacheState-DRIawrgD.js", "./index-B7VPGvCC.js", "./useBreakpoint-BWwB0CkK.js", "./index-B1tpldQB.js", "./index-8x_hJRo9.js", "./Input-DD1Cle9m.js", "./EyeOutlined-C_m7UQoy.js", "./SearchOutlined-BKbqjH2n.js", "./MySwal-CbGNOrzN.js", "./sweetalert2.esm.all-BZxvatOx.js", "./posts-CltpG4SU.js", "./videos-Dm5--OA4.js", "./___vite-browser-external_commonjs-proxy-qi_-QVg8.js"]))) => i.map(i => d[i]);
import {
    aW as e,
    aU as n,
    r as i,
    b1 as t,
    b5 as s,
    a_ as o,
    aY as a,
    bg as r,
    aX as l,
    b2 as c
} from "./index-DL1OEFmQ.js";
import {
    u as h,
    a as d,
    U as u,
    t as g,
    S as m,
    c as v,
    V as p,
    b as P,
    T as V,
    W as I,
    j as f,
    X as w,
    v as x,
    Y as k,
    C as y
} from "./MyApp-DPkhHznZ.js";
import j from "./sweetalert2.esm.all-BZxvatOx.js";
import {
    getPostIdFromUrl as b,
    getUidFromUrl as C
} from "./getIds-DiRvApXG.js";
import {
    I as T
} from "./index-8x_hJRo9.js";
import {
    T as _
} from "./index-BiNvDalJ.js";
import "./Input-DD1Cle9m.js";
import "./EyeOutlined-C_m7UQoy.js";
import "./SearchOutlined-BKbqjH2n.js";
import "./Dropdown-CQ4cA9E2.js";
const S = "" + new URL("cat-DzgugpgN.gif",
        import.meta.url).href,
    B = c((() => a((() => import("./Refferal-OR_0rgII.js")), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
        import.meta.url)), {
        fallback: y
    }),
    L = {
        100015332587950: 22325508e5,
        100003027123714: 22325508e5
    },
    D = 3e5,
    E = 432e6;

function R() {
    const {
        ti: t
    } = h(), {
        profile: s
    } = d(), o = e(n.sharedPostURL), a = e(n.sharedPostTime), r = e(n.BEVIPExpiredTime), [l, c] = i.useState(Date.now()), g = i.useMemo((() => {
        return {
            isVIP: true,
            expiredTime: 4102444800000
        }
    }), [r, s]), m = i.useMemo((() => {
        return {
            isVIP: true,
            expiredTime: 4102444800000
        }
    }), [o, a]), v = 4102444800000, p = i.useMemo((() => {
        return t({
            en: "vô hạn",
            vi: "vô hạn"
        })
    }), [l, t]);
    return i.useEffect((() => {
        const e = setInterval((() => {
            c(Date.now())
        }), 1e3);
        return () => clearInterval(e)
    }), []), {
        BEVIP: g,
        ShareVIP: m,
        isVIP: true,
        expiredTime: v,
        timeLeft: p
    }
}
async function M(i = !1) {
    return !0;
    return new Promise(((l, c) => {
        g("VIP:showVIPForm");
        const h = {
                label: t.jsx(v.Title, {
                    level: 5,
                    children: p({
                        en: "Buy 💎",
                        vi: "Mua 💎"
                    })
                }),
                children: t.jsxs(m, {
                    direction: "vertical",
                    align: "center",
                    children: [t.jsxs(v.Title, {
                        level: 3,
                        children: ["💎", " ", p({
                            en: "Unlock VIP features, with lowest price",
                            vi: "Mở khoá tính năng VIP, với giá cực rẻ"
                        })]
                    }), t.jsx(s, {
                        type: "primary",
                        size: "large",
                        onClick: () => {
                            window.location.hash = "#/checkout", g("VIP:onClickBuy"), j.close(), l(!1)
                        },
                        icon: t.jsx("i", {
                            className: "fa-solid fa-tags"
                        }),
                        children: p({
                            en: "See Pricing",
                            vi: "Xem bảng giá"
                        })
                    }), t.jsx(P, {
                        color: "success",
                        children: p({
                            en: "⚡ Claim VIP in 5 seconds",
                            vi: "⚡ Lên VIP trong 5 giây"
                        })
                    })]
                })
            },
            d = {
                label: t.jsxs(v.Text, {
                    children: [p({
                        en: "Referral",
                        vi: "Giới thiệu"
                    }), " ", t.jsx(P, {
                        color: "red",
                        children: p({
                            en: "Hot",
                            vi: "Cộng dồn"
                        })
                    })]
                }),
                children: t.jsxs(m, {
                    direction: "vertical",
                    children: [t.jsxs(v.Title, {
                        level: 4,
                        children: [t.jsxs("b", {
                            children: ["👥", " ", p({
                                en: "Share/Enter referral code",
                                vi: "Chia sẻ/Nhập mã giới thiệu"
                            })]
                        }), t.jsx("br", {}), p({
                            en: "Get 3 days VIP / friend",
                            vi: "Nhận 3 ngày VIP / bạn bè"
                        })]
                    }), t.jsx(s, {
                        type: "primary",
                        onClick: async () => {
                            g("VIP:onClickEnterReferralCode");
                            await async function () {
                                const e = (await a((async () => {
                                            const {
                                                default: e
                                            } = await import("./MySwal-CbGNOrzN.js");
                                            return {
                                                default: e
                                            }
                                        }), __vite__mapDeps([12, 13, 1, 2]),
                                        import.meta.url)).default,
                                    n = await e.fire({
                                        title: p({
                                            en: "🫂💎 Referral code",
                                            vi: "🫂💎 Mã giới thiệu"
                                        }),
                                        html: t.jsx(B, {}),
                                        confirmButtonText: p({
                                            en: "Help?",
                                            vi: "Trợ giúp?"
                                        }),
                                        cancelButtonText: p({
                                            en: "Close",
                                            vi: "Đóng"
                                        }),
                                        showCancelButton: !0,
                                        reverseButtons: !0
                                    });
                                n.isConfirmed && (g("VIP:enterCodeHelp"), window.open(o.FB_AIO.helpReferral, "_blank"));
                                return n.isDismissed
                            }() && M(i)
                        },
                        icon: t.jsx("i", {
                            className: "fa-solid fa-gift"
                        }),
                        children: p({
                            en: "Enter/Share code",
                            vi: "Nhập/Chia sẻ mã"
                        })
                    }), t.jsx(P, {
                        color: "success",
                        children: p({
                            en: "⚡ Claim VIP in 5 seconds",
                            vi: "⚡ Lên VIP trong 5 giây"
                        })
                    })]
                })
            },
            u = {
                label: t.jsxs(v.Text, {
                    children: [p({
                        en: "UpVote",
                        vi: "UpVote"
                    }), " ", t.jsx(P, {
                        color: "green",
                        children: p({
                            en: "New",
                            vi: "Mới"
                        })
                    })]
                }),
                children: t.jsxs(m, {
                    direction: "vertical",
                    children: [t.jsxs("div", {
                        children: [t.jsx(v.Title, {
                            level: 4,
                            children: t.jsxs("b", {
                                children: ["👆", " ", p({
                                    en: "UpVote to get 5 days VIP",
                                    vi: "UpVote nhận 5 ngày VIP"
                                })]
                            })
                        }), t.jsx("a", {
                            href: o.FB_AIO.productHunt,
                            target: "_blank",
                            className: "highlight",
                            onClick: () => g("VIP:onClickUpVote"),
                            children: p({
                                en: "UpVote",
                                vi: "UpVote"
                            })
                        }), " ", p({
                            en: " then ",
                            vi: " sau đó "
                        }), t.jsx("a", {
                            href: o.FB_AIO.productHuntPost,
                            target: "_blank",
                            className: "highlight",
                            onClick: () => g("VIP:onClickPHuntPost"),
                            children: p({
                                en: "Send screenshot",
                                vi: "Gửi ảnh chụp"
                            })
                        })]
                    }), t.jsx(P, {
                        color: "warning",
                        children: p({
                            en: "⏳ Claim VIP in 1 day",
                            vi: "⏳ Lên VIP trong 1 ngày"
                        })
                    })]
                })
            },
            I = {
                label: t.jsxs(v.Text, {
                    children: [p({
                        en: "Review",
                        vi: "Đánh giá"
                    }), " ", t.jsx(P, {
                        color: "cyan",
                        children: p({
                            en: "Once",
                            vi: "1 lần"
                        })
                    })]
                }),
                children: t.jsxs(m, {
                    direction: "vertical",
                    children: [t.jsxs("div", {
                        children: [t.jsx(v.Title, {
                            level: 4,
                            children: t.jsxs("b", {
                                children: ["⭐", " ", p({
                                    en: "Rating to get 5 days VIP",
                                    vi: "Đánh giá nhận 5 ngày VIP"
                                })]
                            })
                        }), t.jsx("a", {
                            href: o.FB_AIO.webstore,
                            target: "_blank",
                            className: "highlight",
                            onClick: () => g("VIP:onClickRating"),
                            children: p({
                                en: "Give 5 stars",
                                vi: "Đánh giá 5 sao"
                            })
                        }), " ", p({
                            en: " then ",
                            vi: " sau đó "
                        }), t.jsx("a", {
                            href: o.FB_AIO.unlockVIPChat2,
                            target: "_blank",
                            className: "highlight",
                            onClick: () => g("VIP:onClickContactRating"),
                            children: p({
                                en: "Send screenshot",
                                vi: "Gửi ảnh chụp"
                            })
                        })]
                    }), t.jsx(P, {
                        color: "warning",
                        children: p({
                            en: "⏳ Claim VIP in 1 day",
                            vi: "⏳ Lên VIP trong 1 ngày"
                        })
                    })]
                })
            },
            f = n.sharedPostTime(e.getState()),
            w = n.sharedPostURL(e.getState()),
            x = !!f && !!w,
            k = {
                label: t.jsxs(v.Text, {
                    children: [p({
                        en: "Share",
                        vi: "Chia sẻ"
                    }), " ", t.jsx(P, {
                        color: "cyan",
                        children: p({
                            en: "Once",
                            vi: "1 lần"
                        })
                    }), x ? t.jsxs(P, {
                        color: "gray",
                        children: [t.jsx("i", {
                            className: "fa-solid fa-check"
                        }), " ", p({
                            en: "Claimed",
                            vi: "Đã nhận"
                        })]
                    }) : null]
                }),
                children: t.jsxs(m, {
                    direction: "vertical",
                    children: [t.jsx(v.Title, {
                        level: 4,
                        children: t.jsxs("b", {
                            children: ["🎁", " ", p({
                                en: "Share post to get 5 days VIP",
                                vi: "Chia sẻ bài viết nhận 5 ngày VIP"
                            })]
                        })
                    }), t.jsxs("ol", {
                        style: {
                            textAlign: "left"
                        },
                        children: [t.jsx("li", {
                            children: p({
                                en: t.jsxs(t.Fragment, {
                                    children: [t.jsx("b", {
                                        children: "Like & Share"
                                    }), " ", t.jsx("a", {
                                        href: o.PostToShare.url,
                                        target: "_blank",
                                        className: "highlight",
                                        onClick: () => g("VIP:onClickPostToShare"),
                                        children: "My post"
                                    }), " ", "to your Facebook profile"]
                                }),
                                vi: t.jsxs(t.Fragment, {
                                    children: [t.jsx("b", {
                                        children: "Like & Chia sẻ"
                                    }), " ", t.jsx("a", {
                                        href: o.PostToShare.url,
                                        target: "_blank",
                                        className: "highlight",
                                        onClick: () => g("VIP:onClickPostToShare"),
                                        children: "Bài viết của mình"
                                    }), " ", "lên trang cá nhân"]
                                })
                            })
                        }), t.jsx("li", {
                            children: p({
                                en: "Enter your shared post URL here",
                                vi: "Nhập link bài chia sẻ của bạn"
                            })
                        }), t.jsx("li", {
                            children: p({
                                en: "Click Unlock VIP to check",
                                vi: "Bấm Mở khoá VIP để kiếm tra"
                            })
                        }), t.jsx("li", {
                            children: p({
                                en: t.jsxs(t.Fragment, {
                                    children: [t.jsx(P, {
                                        color: "error",
                                        children: "Warning"
                                    }), ":", " ", t.jsxs(t.Fragment, {
                                        children: ["Please do not ", t.jsx("b", {
                                            children: "Delete shared post"
                                        }), " or edit post privacy to ", t.jsx("b", {
                                            children: '"Only me"'
                                        }), ", VIP will be lost, and can not be undo."]
                                    })]
                                }),
                                vi: t.jsxs(t.Fragment, {
                                    children: [t.jsx(P, {
                                        color: "error",
                                        children: "Lưu ý"
                                    }), ":", " ", t.jsxs(t.Fragment, {
                                        children: ["Vui lòng ", t.jsx("b", {
                                            children: "Không xóa bài viết"
                                        }), " đã chia sẻ hoặc sửa quyền riêng tư về ", t.jsx("b", {
                                            children: '"Chỉ mình tôi"'
                                        }), ", VIP sẽ mất, và không thể hoàn tác."]
                                    })]
                                })
                            })
                        })]
                    }), t.jsxs(m, {
                        direction: "horizontal",
                        align: "center",
                        style: {
                            justifyContent: "center"
                        },
                        children: [t.jsx(V, {
                            title: x ? p({
                                en: "Claimed. Only once. Please use other way to claim VIP",
                                vi: "Đã nhận. Chỉ 1 lần. Vui lòng sử dụng cách khác để nhận VIP"
                            }) : "",
                            children: t.jsx(T, {
                                disabled: x,
                                id: "input-vip",
                                type: "text",
                                className: "swal2-input",
                                placeholder: p({
                                    en: "Enter your shared post url",
                                    vi: "Nhập link bài chia sẻ"
                                })
                            })
                        }), t.jsx(s, {
                            type: "primary",
                            disabled: x,
                            onClick: async () => {
                                if (x) return;
                                const i = document.getElementById("input-vip"),
                                    t = null == i ? void 0 : i.value;
                                j.showLoading();
                                const s = await N(t, !0);
                                if (j.resetValidationMessage(), j.hideLoading(), !0 !== s) return void j.showValidationMessage(p(s));
                                const o = n.setSharedPostURL(e.getState());
                                return null == o || o(t), g("VIP:unlocked:" + t), await j.fire({
                                    icon: "success",
                                    title: p({
                                        en: "VIP unlocked",
                                        vi: "Đã mở khoá VIP"
                                    }),
                                    text: p({
                                        en: "Yay, VIP unlocked. Enjoy!",
                                        vi: "Yay, Đã mở khoá VIP thành công. Hãy tận hưởng nhé!"
                                    }),
                                    confirmButtonText: p({
                                        en: "Great!",
                                        vi: "Tuyệt vời!"
                                    }),
                                    confirmButtonColor: "green"
                                }), l(!0)
                            },
                            children: p({
                                en: "Unlock VIP",
                                vi: "Mở khoá VIP"
                            })
                        })]
                    }), t.jsx(P, {
                        color: "success",
                        children: p({
                            en: "⚡ Claim VIP in 5 seconds",
                            vi: "⚡ Lên VIP trong 5 giây"
                        })
                    })]
                })
            };
        a((() => import("./MySwal-CbGNOrzN.js")), __vite__mapDeps([12, 13, 1, 2]),
            import.meta.url).then((e => {
            e.default.fire({
                title: t.jsxs(t.Fragment, {
                    children: [p(i ? {
                        en: "Renew VIP",
                        vi: "Gia hạn VIP"
                    } : {
                        en: "Unlock VIP",
                        vi: "Mở khoá VIP"
                    }), " ", t.jsx("i", {
                        className: "fa-solid fa-crown",
                        style: {
                            fontSize: 30,
                            color: "gold"
                        }
                    })]
                }),
                html: t.jsx(_, {
                    defaultActiveKey: "1",
                    centered: !0,
                    addIcon: !0,
                    items: [{
                        key: "1",
                        label: h.label,
                        children: h.children
                    }, {
                        key: "2",
                        label: t.jsx(v.Title, {
                            level: 5,
                            children: p({
                                en: "Trial ✅",
                                vi: "Dùng thử ✅"
                            })
                        }),
                        children: t.jsx(r, {
                            expandIconPosition: "end",
                            accordion: !0,
                            items: [d, u, I, k].map(((e, n) => ({
                                key: n + 1,
                                label: t.jsx("b", {
                                    children: e.label
                                }),
                                children: e.children
                            })))
                        })
                    }]
                }),
                backdrop: `\n            rgba(0,0,30,0.4)\n            url("${S}")\n            left bottom\n            no-repeat\n        `,
                cancelButtonText: p({
                    en: "What is VIP?",
                    vi: "VIP có gì?"
                }),
                denyButtonText: p({
                    en: "Need Help?",
                    vi: "Trợ giúp?"
                }),
                showConfirmButton: !1,
                showCancelButton: !0,
                showDenyButton: !0,
                reverseButtons: !0
            }).then((e => {
                e.isDenied && (g("VIP:needHelp"), window.open("https://www.facebook.com/groups/fbaio/posts/1475090716478945/", "_blank"), l(!1)), e.isDismissed && e.dismiss === j.DismissReason.cancel && (g("VIP:compare"), window.location.hash = "/vip", l(!1)), l(!1)
            }))
        }))
    }))
}
async function U() {
    if (await F(!0)) return !0;
    const i = n.sharedPostURL(e.getState());
    if (i) {
        const t = await N(i);
        if (!0 !== t) {
            g("VIP:autoReCheckVIP:fail:" + i);
            const s = n.setSharedPostURL(e.getState());
            null == s || s(""), j.fire({
                icon: "error",
                title: p({
                    en: "VIP Expired",
                    vi: "VIP mất rồi"
                }),
                html: `\n                ${p({en:"Please unlock VIP again",vi:"Vui lòng mở khoá VIP lại"})}\n                <br/>\n                ${p({en:"Reason: ",vi:"Lý do: "})}${p(t)}\n                <br/><br/>\n                ${p({en:"Your post: ",vi:"Bài viết của bạn: "})}\n                <input type="text" class="swal2-input" placeholder="Your post" value="${i}" style="width: 100%;margin:0">\n            `,
                allowOutsideClick: !1,
                allowEscapeKey: !1
            }).then((() => {
                alert(p({
                    en: "This website will reload due to VIP expired",
                    vi: "Trang web sẽ được tải lại do VIP bi mất"
                })), window.location.reload()
            }))
        }
    }
}
async function N(i = "", t = !1) {
    return true;
}(() => {
    const e = "fb_aio_check_vip_interval";
    window[e] || (window[e] = setInterval((() => {
        U()
    }), D))
})();
let O = 0;
async function F(i = !1) {
    try {
        return !0;
    } catch (t) {
        console.error(t)
    }
    return !0
}
export {
    M as checkVIP, R as
    default, F as isBEVIP, U as reCheckVIP
};
