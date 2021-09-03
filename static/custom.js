prefinery =
  window.prefinery ||
  function () {
    ;(window.prefinery.q = window.prefinery.q || []).push(arguments)
  }
var data1 = [
  { key: "10", value: "$150/M" },
  { key: "25", value: "$400/M" },
  { key: "50", value: "$800/M" },
  { key: "250", value: "$4000/M" },
  { key: "500", value: "$8000/M" },
  { key: "1000", value: "$16,000/M" },
  { key: "5000", value: "$80,000/M" },
]
if (document.documentElement.clientWidth > 767)
  var rangeslide = rangeslide("#rangeslide", {
    data: data1,
    showValue: !0,
    thumbWidth: 30,
    thumbHeight: 30,
    labelsContent: "key",
    valueIndicatorContent: "value",
    showLabels: !0,
    showTicks: !1,
    showTrackProgress: !0,
    valueIndicatorWidth: 200,
    valueIndicatorHeight: 50,
  })
document.documentElement.clientWidth < 768 &&
  (rangeslide = rangeslide("#rangeslide", {
    data: data1,
    showValue: !0,
    thumbWidth: 22,
    thumbHeight: 22,
    labelsContent: "key",
    valueIndicatorContent: "value",
    showLabels: !0,
    showTicks: !1,
    showTrackProgress: !0,
    valueIndicatorWidth: 100,
    valueIndicatorHeight: 30,
    ticksWidth: 30,
  }))
