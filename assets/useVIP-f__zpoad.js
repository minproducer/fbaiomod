const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Refferal-D_uGdNTp.js", "./index-BoH2j3cU.js", "./index-DY-hiTTZ.css", "./MyApp-D93h0aQZ.js", "./useCacheState-CRWoF5gI.js", "./index-BMF_2O9_.js", "./useBreakpoint-CUrvcDr2.js", "./index-DD15UiBp.js", "./index-7X6rB-D6.js", "./SearchOutlined-BUONfEHJ.js", "./MySwal-CYyLTihf.js", "./sweetalert2.esm.all-BZxvatOx.js", "./posts-DhPOCJyC.js", "./videos-CoQTeQLu.js"]))) => i.map(i => d[i]);
import {
    aV as e,
    aT as n,
    r as i,
    b3 as t,
    b8 as s,
    aS as o,
    aQ as a,
    bj as r,
    aP as l,
    b4 as c
} from "./index-BoH2j3cU.js";
import {
    u as h,
    a as d,
    p as u,
    t as g,
    S as m,
    c as v,
    V as p,
    b as P,
    T as V,
    W as I,
    X as f,
    w,
    Y as x,
    C as k
} from "./MyApp-D93h0aQZ.js";
import y from "./sweetalert2.esm.all-BZxvatOx.js";
import {
    getPostIdFromUrl as j,
    getUidFromUrl as b
} from "./getIds-CXkkWBEB.js";
import {
    I as C
} from "./index-7X6rB-D6.js";
import {
    T
} from "./index-IueWr_3q.js";
import "./SearchOutlined-BUONfEHJ.js";
import "./Dropdown-C4ZC00F-.js";
const _ = "" + new URL("cat-DzgugpgN.gif",
        import.meta.url).href,
    S = c((() => a((() => import("./Refferal-D_uGdNTp.js")), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        import.meta.url)), {
        fallback: k
    }),
    B = 3e5,
    L = 432e6;
let R = 0;

function D(e) {
    R = e
}

function E() {
    const g = i.useMemo(() => ({
        isVIP: true,
        expiredTime: 4102444800000
    }), []);
    const m = i.useMemo(() => ({
        isVIP: true,
        expiredTime: 4102444800000
    }), []);
    const v = 4102444800000;
    // Sửa lại: trả về string, không trả về object!
    const p = i.useMemo(() => "vô hạn", []);
    i.useEffect(() => {}, []);
    return {
        BEVIP: g,
        ShareVIP: m,
        isVIP: true,
        expiredTime: v,
        timeLeft: p
    };
}

async function M(i = !1) {
    if (!i) {
        if (n.devMode(e.getState())) return !0;
        if (n.sharedPostURL(e.getState())) return !0;
        if (await F()) return !0
    }
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
                            window.location.hash = "#/checkout", g("VIP:onClickBuy"), y.close(), l(!1)
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
                                            } = await import("./MySwal-CYyLTihf.js");
                                            return {
                                                default: e
                                            }
                                        }), __vite__mapDeps([10, 11, 1, 2]),
                                        import.meta.url)).default,
                                    n = await e.fire({
                                        title: p({
                                            en: "🫂💎 Referral code",
                                            vi: "🫂💎 Mã giới thiệu"
                                        }),
                                        html: t.jsx(S, {}),
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
                            href: o.FB_AIO.unlockVIPChat,
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
            f = !!n.sharedPostTime(e.getState()),
            w = {
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
                    }), f ? t.jsxs(P, {
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
                            title: f ? p({
                                en: "Claimed. Only once. Please use other way to claim VIP",
                                vi: "Đã nhận. Chỉ 1 lần. Vui lòng sử dụng cách khác để nhận VIP"
                            }) : "",
                            children: t.jsx(C, {
                                disabled: f,
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
                            disabled: f,
                            onClick: async () => {
                                if (f) return;
                                const i = document.getElementById("input-vip"),
                                    t = null == i ? void 0 : i.value;
                                y.showLoading();
                                const s = await N(t, !0);
                                if (y.resetValidationMessage(), y.hideLoading(), !0 !== s) return void y.showValidationMessage(p(s));
                                const o = n.setSharedPostURL(e.getState());
                                return null == o || o(t), g("VIP:unlocked:" + t), await y.fire({
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
        a((() => import("./MySwal-CYyLTihf.js")), __vite__mapDeps([10, 11, 1, 2]),
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
                html: t.jsx(T, {
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
                            items: [d, u, I, w].map(((e, n) => ({
                                key: n + 1,
                                label: t.jsx("b", {
                                    children: e.label
                                }),
                                children: e.children
                            })))
                        })
                    }]
                }),
                backdrop: `\n            rgba(0,0,30,0.4)\n            url("${_}")\n            left bottom\n            no-repeat\n        `,
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
                e.isDenied && (g("VIP:needHelp"), window.open("https://www.facebook.com/groups/fbaio/posts/1475090716478945/", "_blank"), l(!1)), e.isDismissed && e.dismiss === y.DismissReason.cancel && (g("VIP:compare"), window.location.hash = "/vip", l(!1)), l(!1)
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
            null == s || s(""), y.fire({
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
    }), B))
})();
let O = 0;
async function F(i = !1) {
    try {
        const t = await I();
        if (!t) return !1;
        const s = n.BEVIPExpiredTime(e.getState()),
            a = Date.now() < (null == s ? void 0 : s[t]);
        if (!i && a && Date.now() - O < B) return a;
        O = Date.now();
        const r = await l(o.FB_AIO.server + "/isVIP/" + t);
        let c = 4102444800000; // luôn ép giá trị lớn
        if (n.setBEVIPexpiredTime(e.getState())(t, c), 0 != c && c > Date.now()) return !0;
        if (a) {
            const e = new Date(c).toLocaleString();
            y.fire({
                icon: "warning",
                title: p({
                    en: "VIP Expired",
                    vi: "VIP hết hạn"
                }),
                html: e + p({
                    en: " Please renew to continue using VIP.<br/>If you believe this is a mistake, try reload website or contact me for support.",
                    vi: " Vui lòng gia hạn lại để tiếp tục sử dụng VIP nhé.<br/>Nếu bạn thấy điều này không đúng, thử tải lại trang web hoặc liên hệ mình để được hỗ trợ."
                }),
                confirmButtonText: p({
                    en: "Renew VIP",
                    vi: "Gia hạn VIP"
                }),
                denyButtonText: p({
                    en: "Support",
                    vi: "Hỗ trợ"
                }),
                cancelButtonText: p({
                    en: "Close",
                    vi: "Đóng"
                }),
                showDenyButton: !0,
                showCancelButton: !0,
                allowOutsideClick: !1,
                allowEscapeKey: !1
            }).then((e => {
                e.isConfirmed ? window.location.hash = "/vip" : e.isDenied && window.open(o.GroupFB, "_blank")
            }))
        }
    } catch (t) {
        console.error(t)
    }
    return !1
}
export {
    M as checkVIP, E as
    default, F as isBEVIP, U as reCheckVIP, D as setFreeVIPUntil
};