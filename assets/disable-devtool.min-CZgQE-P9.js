var t, n = {
    exports: {}
};

// Đối tượng fe giả lập, luôn trả về không phát hiện devtool
const fe = Object.assign(
    function () {
        return {
            success: true,
            reason: ""
        };
    }, {
        isRunning: false,
        isSuspend: true,
        md5: function () {
            return "";
        },
        version: "0.3.8",
        DetectorType: {},
        isDevToolOpened: function () {
            return false;
        }
    }
);

// Tự động export đúng cấu trúc module như bản gốc
var o = (t || (t = 1, n.exports = function () {
    // Trả về đối tượng fe đã fake
    return fe;
}()), n.exports);

var i = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: o
}, Symbol.toStringTag, {
    value: "Module"
}));

export {
    i as d
};