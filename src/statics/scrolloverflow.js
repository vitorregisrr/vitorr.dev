/**
 * Customized version of iScroll.js 0.1.3
 * It fixes bugs affecting its integration with fullpage.js
 * @license
 */
!(function (r, n, p) {
  var f =
      r.requestAnimationFrame ||
      r.webkitRequestAnimationFrame ||
      r.mozRequestAnimationFrame ||
      r.oRequestAnimationFrame ||
      r.msRequestAnimationFrame ||
      function (t) {
        r.setTimeout(t, 1e3 / 60)
      },
    m = (function () {
      var e = {},
        o = n.createElement('div').style,
        i = (function () {
          for (
            var t = ['t', 'webkitT', 'MozT', 'msT', 'OT'], i = 0, s = t.length;
            i < s;
            i++
          )
            if (t[i] + 'ransform' in o) return t[i].substr(0, t[i].length - 1)
          return !1
        })()
      function t(t) {
        return (
          !1 !== i &&
          ('' === i ? t : i + t.charAt(0).toUpperCase() + t.substr(1))
        )
      }
      ;(e.getTime =
        Date.now ||
        function () {
          return new Date().getTime()
        }),
        (e.extend = function (t, i) {
          for (var s in i) t[s] = i[s]
        }),
        (e.addEvent = function (t, i, s, e) {
          t.addEventListener(i, s, !!e)
        }),
        (e.removeEvent = function (t, i, s, e) {
          t.removeEventListener(i, s, !!e)
        }),
        (e.prefixPointerEvent = function (t) {
          return r.MSPointerEvent
            ? 'MSPointer' + t.charAt(7).toUpperCase() + t.substr(8)
            : t
        }),
        (e.momentum = function (t, i, s, e, o, n) {
          var r,
            h,
            a = t - i,
            l = p.abs(a) / s
          return (
            (h = l / (n = void 0 === n ? 6e-4 : n)),
            (r = t + ((l * l) / (2 * n)) * (a < 0 ? -1 : 1)) < e
              ? ((r = o ? e - (o / 2.5) * (l / 8) : e),
                (h = (a = p.abs(r - t)) / l))
              : 0 < r &&
                ((r = o ? (o / 2.5) * (l / 8) : 0),
                (h = (a = p.abs(t) + r) / l)),
            { destination: p.round(r), duration: h }
          )
        })
      var s = t('transform')
      return (
        e.extend(e, {
          hasTransform: !1 !== s,
          hasPerspective: t('perspective') in o,
          hasTouch: 'ontouchstart' in r,
          hasPointer: !(!r.PointerEvent && !r.MSPointerEvent),
          hasTransition: t('transition') in o
        }),
        (e.isBadAndroid = (function () {
          var t = r.navigator.appVersion
          if (!/Android/.test(t) || /Chrome\/\d/.test(t)) return !1
          var i = t.match(/Safari\/(\d+.\d)/)
          return (
            !(i && 'object' == typeof i && 2 <= i.length) ||
            parseFloat(i[1]) < 535.19
          )
        })()),
        e.extend((e.style = {}), {
          transform: s,
          transitionTimingFunction: t('transitionTimingFunction'),
          transitionDuration: t('transitionDuration'),
          transitionDelay: t('transitionDelay'),
          transformOrigin: t('transformOrigin')
        }),
        (e.hasClass = function (t, i) {
          return new RegExp('(^|\\s)' + i + '(\\s|$)').test(t.className)
        }),
        (e.addClass = function (t, i) {
          if (!e.hasClass(t, i)) {
            var s = t.className.split(' ')
            s.push(i), (t.className = s.join(' '))
          }
        }),
        (e.removeClass = function (t, i) {
          if (e.hasClass(t, i)) {
            var s = new RegExp('(^|\\s)' + i + '(\\s|$)', 'g')
            t.className = t.className.replace(s, ' ')
          }
        }),
        (e.offset = function (t) {
          for (var i = -t.offsetLeft, s = -t.offsetTop; (t = t.offsetParent); )
            (i -= t.offsetLeft), (s -= t.offsetTop)
          return { left: i, top: s }
        }),
        (e.preventDefaultException = function (t, i) {
          for (var s in i) if (i[s].test(t[s])) return !0
          return !1
        }),
        e.extend((e.eventType = {}), {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2,
          pointerdown: 3,
          pointermove: 3,
          pointerup: 3,
          MSPointerDown: 3,
          MSPointerMove: 3,
          MSPointerUp: 3
        }),
        e.extend((e.ease = {}), {
          quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (t) {
              return t * (2 - t)
            }
          },
          circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
            fn: function (t) {
              return p.sqrt(1 - --t * t)
            }
          },
          back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn: function (t) {
              return (t -= 1) * t * (5 * t + 4) + 1
            }
          },
          bounce: {
            style: '',
            fn: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
            }
          },
          elastic: {
            style: '',
            fn: function (t) {
              return 0 === t
                ? 0
                : 1 == t
                ? 1
                : 0.4 *
                    p.pow(2, -10 * t) *
                    p.sin(((t - 0.055) * (2 * p.PI)) / 0.22) +
                  1
            }
          }
        }),
        (e.tap = function (t, i) {
          var s = n.createEvent('Event')
          s.initEvent(i, !0, !0),
            (s.pageX = t.pageX),
            (s.pageY = t.pageY),
            t.target.dispatchEvent(s)
        }),
        (e.click = function (t) {
          var i,
            s = t.target
          ;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName) ||
            ((i = n.createEvent(
              r.MouseEvent ? 'MouseEvents' : 'Event'
            )).initEvent('click', !0, !0),
            (i.view = t.view || r),
            (i.detail = 1),
            (i.screenX = s.screenX || 0),
            (i.screenY = s.screenY || 0),
            (i.clientX = s.clientX || 0),
            (i.clientY = s.clientY || 0),
            (i.ctrlKey = !!t.ctrlKey),
            (i.altKey = !!t.altKey),
            (i.shiftKey = !!t.shiftKey),
            (i.metaKey = !!t.metaKey),
            (i.button = 0),
            (i.relatedTarget = null),
            (i._constructed = !0),
            s.dispatchEvent(i))
        }),
        e
      )
    })()
  function t(t, i) {
    for (var s in ((this.wrapper =
      'string' == typeof t ? n.querySelector(t) : t),
    (this.scroller = this.wrapper.children[0]),
    (this.scrollerStyle = this.scroller.style),
    (this.options = {
      resizeScrollbars: !0,
      mouseWheelSpeed: 20,
      snapThreshold: 0.334,
      disablePointer: !m.hasPointer,
      disableTouch: m.hasPointer || !m.hasTouch,
      disableMouse: m.hasPointer || m.hasTouch,
      startX: 0,
      startY: 0,
      scrollY: !0,
      directionLockThreshold: 5,
      momentum: !0,
      bounce: !0,
      bounceTime: 600,
      bounceEasing: '',
      preventDefault: !0,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
      },
      HWCompositing: !0,
      useTransition: !0,
      useTransform: !0,
      bindToWrapper: void 0 === r.onmousedown
    }),
    i))
      this.options[s] = i[s]
    ;(this.translateZ =
      this.options.HWCompositing && m.hasPerspective ? ' translateZ(0)' : ''),
      (this.options.useTransition =
        m.hasTransition && this.options.useTransition),
      (this.options.useTransform = m.hasTransform && this.options.useTransform),
      (this.options.eventPassthrough =
        !0 === this.options.eventPassthrough
          ? 'vertical'
          : this.options.eventPassthrough),
      (this.options.preventDefault =
        !this.options.eventPassthrough && this.options.preventDefault),
      (this.options.scrollY =
        'vertical' != this.options.eventPassthrough && this.options.scrollY),
      (this.options.scrollX =
        'horizontal' != this.options.eventPassthrough && this.options.scrollX),
      (this.options.freeScroll =
        this.options.freeScroll && !this.options.eventPassthrough),
      (this.options.directionLockThreshold = this.options.eventPassthrough
        ? 0
        : this.options.directionLockThreshold),
      (this.options.bounceEasing =
        'string' == typeof this.options.bounceEasing
          ? m.ease[this.options.bounceEasing] || m.ease.circular
          : this.options.bounceEasing),
      (this.options.resizePolling =
        void 0 === this.options.resizePolling
          ? 60
          : this.options.resizePolling),
      !0 === this.options.tap && (this.options.tap = 'tap'),
      this.options.useTransition ||
        this.options.useTransform ||
        /relative|absolute/i.test(this.scrollerStyle.position) ||
        (this.scrollerStyle.position = 'relative'),
      'scale' == this.options.shrinkScrollbars &&
        (this.options.useTransition = !1),
      (this.options.invertWheelDirection = this.options.invertWheelDirection
        ? -1
        : 1),
      (this.x = 0),
      (this.y = 0),
      (this.directionX = 0),
      (this.directionY = 0),
      (this._events = {}),
      this._init(),
      this.refresh(),
      this.scrollTo(this.options.startX, this.options.startY),
      this.enable()
  }
  function h(t, i, s) {
    var e = n.createElement('div'),
      o = n.createElement('div')
    return (
      !0 === s &&
        ((e.style.cssText = 'position:absolute;z-index:9999'),
        (o.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px')),
      (o.className = 'iScrollIndicator'),
      (e.className =
        'h' == t
          ? (!0 === s &&
              ((e.style.cssText += ';height:7px;left:2px;right:2px;bottom:0'),
              (o.style.height = '100%')),
            'iScrollHorizontalScrollbar')
          : (!0 === s &&
              ((e.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px'),
              (o.style.width = '100%')),
            'iScrollVerticalScrollbar')),
      (e.style.cssText += ';overflow:hidden'),
      i || (e.style.pointerEvents = 'none'),
      e.appendChild(o),
      e
    )
  }
  function a(t, i) {
    for (var s in ((this.wrapper =
      'string' == typeof i.el ? n.querySelector(i.el) : i.el),
    (this.wrapperStyle = this.wrapper.style),
    (this.indicator = this.wrapper.children[0]),
    (this.indicatorStyle = this.indicator.style),
    (this.scroller = t),
    (this.options = {
      listenX: !0,
      listenY: !0,
      interactive: !1,
      resize: !0,
      defaultScrollbars: !1,
      shrink: !1,
      fade: !1,
      speedRatioX: 0,
      speedRatioY: 0
    }),
    i))
      this.options[s] = i[s]
    if (
      ((this.sizeRatioX = 1),
      (this.sizeRatioY = 1),
      (this.maxPosX = 0),
      (this.maxPosY = 0),
      this.options.interactive &&
        (this.options.disableTouch ||
          (m.addEvent(this.indicator, 'touchstart', this),
          m.addEvent(r, 'touchend', this)),
        this.options.disablePointer ||
          (m.addEvent(
            this.indicator,
            m.prefixPointerEvent('pointerdown'),
            this
          ),
          m.addEvent(r, m.prefixPointerEvent('pointerup'), this)),
        this.options.disableMouse ||
          (m.addEvent(this.indicator, 'mousedown', this),
          m.addEvent(r, 'mouseup', this))),
      this.options.fade)
    ) {
      this.wrapperStyle[m.style.transform] = this.scroller.translateZ
      var e = m.style.transitionDuration
      if (!e) return
      this.wrapperStyle[e] = m.isBadAndroid ? '0.0001ms' : '0ms'
      var o = this
      m.isBadAndroid &&
        f(function () {
          '0.0001ms' === o.wrapperStyle[e] && (o.wrapperStyle[e] = '0s')
        }),
        (this.wrapperStyle.opacity = '0')
    }
  }
  ;(t.prototype = {
    version: '5.2.0',
    _init: function () {
      this._initEvents(),
        (this.options.scrollbars || this.options.indicators) &&
          this._initIndicators(),
        this.options.mouseWheel && this._initWheel(),
        this.options.snap && this._initSnap(),
        this.options.keyBindings && this._initKeys()
    },
    destroy: function () {
      this._initEvents(!0),
        clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = null),
        this._execEvent('destroy')
    },
    _transitionEnd: function (t) {
      t.target == this.scroller &&
        this.isInTransition &&
        (this._transitionTime(),
        this.resetPosition(this.options.bounceTime) ||
          ((this.isInTransition = !1), this._execEvent('scrollEnd')))
    },
    _start: function (t) {
      if (
        1 != m.eventType[t.type] &&
        0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)
      )
        return
      if (
        this.enabled &&
        (!this.initiated || m.eventType[t.type] === this.initiated)
      ) {
        !this.options.preventDefault ||
          m.isBadAndroid ||
          m.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) ||
          t.preventDefault()
        var i,
          s = t.touches ? t.touches[0] : t
        ;(this.initiated = m.eventType[t.type]),
          (this.moved = !1),
          (this.distX = 0),
          (this.distY = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.directionLocked = 0),
          (this.startTime = m.getTime()),
          this.options.useTransition && this.isInTransition
            ? (this._transitionTime(),
              (this.isInTransition = !1),
              (i = this.getComputedPosition()),
              this._translate(p.round(i.x), p.round(i.y)),
              this._execEvent('scrollEnd'))
            : !this.options.useTransition &&
              this.isAnimating &&
              ((this.isAnimating = !1), this._execEvent('scrollEnd')),
          (this.startX = this.x),
          (this.startY = this.y),
          (this.absStartX = this.x),
          (this.absStartY = this.y),
          (this.pointX = s.pageX),
          (this.pointY = s.pageY),
          this._execEvent('beforeScrollStart')
      }
    },
    _move: function (t) {
      if (this.enabled && m.eventType[t.type] === this.initiated) {
        this.options.preventDefault && t.preventDefault()
        var i,
          s,
          e,
          o,
          n = t.touches ? t.touches[0] : t,
          r = n.pageX - this.pointX,
          h = n.pageY - this.pointY,
          a = m.getTime()
        if (
          ((this.pointX = n.pageX),
          (this.pointY = n.pageY),
          (this.distX += r),
          (this.distY += h),
          (e = p.abs(this.distX)),
          (o = p.abs(this.distY)),
          !(300 < a - this.endTime && e < 10 && o < 10))
        ) {
          if (
            (this.directionLocked ||
              this.options.freeScroll ||
              (e > o + this.options.directionLockThreshold
                ? (this.directionLocked = 'h')
                : o >= e + this.options.directionLockThreshold
                ? (this.directionLocked = 'v')
                : (this.directionLocked = 'n')),
            'h' == this.directionLocked)
          ) {
            if ('vertical' == this.options.eventPassthrough) t.preventDefault()
            else if ('horizontal' == this.options.eventPassthrough)
              return void (this.initiated = !1)
            h = 0
          } else if ('v' == this.directionLocked) {
            if ('horizontal' == this.options.eventPassthrough)
              t.preventDefault()
            else if ('vertical' == this.options.eventPassthrough)
              return void (this.initiated = !1)
            r = 0
          }
          ;(r = this.hasHorizontalScroll ? r : 0),
            (h = this.hasVerticalScroll ? h : 0),
            (i = this.x + r),
            (s = this.y + h),
            (0 < i || i < this.maxScrollX) &&
              (i = this.options.bounce
                ? this.x + r / 3
                : 0 < i
                ? 0
                : this.maxScrollX),
            (0 < s || s < this.maxScrollY) &&
              (s = this.options.bounce
                ? this.y + h / 3
                : 0 < s
                ? 0
                : this.maxScrollY),
            (this.directionX = 0 < r ? -1 : r < 0 ? 1 : 0),
            (this.directionY = 0 < h ? -1 : h < 0 ? 1 : 0),
            this.moved || this._execEvent('scrollStart'),
            (this.moved = !0),
            this._translate(i, s),
            300 < a - this.startTime &&
              ((this.startTime = a),
              (this.startX = this.x),
              (this.startY = this.y))
        }
      }
    },
    _end: function (t) {
      if (this.enabled && m.eventType[t.type] === this.initiated) {
        this.options.preventDefault &&
          !m.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) &&
          t.preventDefault()
        t.changedTouches && t.changedTouches[0]
        var i,
          s,
          e = m.getTime() - this.startTime,
          o = p.round(this.x),
          n = p.round(this.y),
          r = p.abs(o - this.startX),
          h = p.abs(n - this.startY),
          a = 0,
          l = ''
        if (
          ((this.isInTransition = 0),
          (this.initiated = 0),
          (this.endTime = m.getTime()),
          !this.resetPosition(this.options.bounceTime))
        ) {
          if ((this.scrollTo(o, n), !this.moved))
            return (
              this.options.tap && m.tap(t, this.options.tap),
              this.options.click && m.click(t),
              void this._execEvent('scrollCancel')
            )
          if (this._events.flick && e < 200 && r < 100 && h < 100)
            this._execEvent('flick')
          else {
            if (
              (this.options.momentum &&
                e < 300 &&
                ((i = this.hasHorizontalScroll
                  ? m.momentum(
                      this.x,
                      this.startX,
                      e,
                      this.maxScrollX,
                      this.options.bounce ? this.wrapperWidth : 0,
                      this.options.deceleration
                    )
                  : { destination: o, duration: 0 }),
                (s = this.hasVerticalScroll
                  ? m.momentum(
                      this.y,
                      this.startY,
                      e,
                      this.maxScrollY,
                      this.options.bounce ? this.wrapperHeight : 0,
                      this.options.deceleration
                    )
                  : { destination: n, duration: 0 }),
                (o = i.destination),
                (n = s.destination),
                (a = p.max(i.duration, s.duration)),
                (this.isInTransition = 1)),
              this.options.snap)
            ) {
              var c = this._nearestSnap(o, n)
              ;(this.currentPage = c),
                (a =
                  this.options.snapSpeed ||
                  p.max(
                    p.max(
                      p.min(p.abs(o - c.x), 1e3),
                      p.min(p.abs(n - c.y), 1e3)
                    ),
                    300
                  )),
                (o = c.x),
                (n = c.y),
                (this.directionX = 0),
                (this.directionY = 0),
                (l = this.options.bounceEasing)
            }
            if (o != this.x || n != this.y)
              return (
                (0 < o ||
                  o < this.maxScrollX ||
                  0 < n ||
                  n < this.maxScrollY) &&
                  (l = m.ease.quadratic),
                void this.scrollTo(o, n, a, l)
              )
            this._execEvent('scrollEnd')
          }
        }
      }
    },
    _resize: function () {
      var t = this
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(function () {
          t.refresh()
        }, this.options.resizePolling))
    },
    resetPosition: function (t) {
      var i = this.x,
        s = this.y
      return (
        (t = t || 0),
        !this.hasHorizontalScroll || 0 < this.x
          ? (i = 0)
          : this.x < this.maxScrollX && (i = this.maxScrollX),
        !this.hasVerticalScroll || 0 < this.y
          ? (s = 0)
          : this.y < this.maxScrollY && (s = this.maxScrollY),
        (i != this.x || s != this.y) &&
          (this.scrollTo(i, s, t, this.options.bounceEasing), !0)
      )
    },
    disable: function () {
      this.enabled = !1
    },
    enable: function () {
      this.enabled = !0
    },
    refresh: function () {
      this.wrapper.offsetHeight
      ;(this.wrapperWidth = this.wrapper.clientWidth),
        (this.wrapperHeight = this.wrapper.clientHeight),
        (this.scrollerWidth = this.scroller.offsetWidth),
        (this.scrollerHeight = this.scroller.offsetHeight),
        (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
        (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
        (this.hasHorizontalScroll =
          this.options.scrollX && this.maxScrollX < 0),
        (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
        this.hasHorizontalScroll ||
          ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
        this.hasVerticalScroll ||
          ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
        (this.endTime = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this.wrapperOffset = m.offset(this.wrapper)),
        this._execEvent('refresh'),
        this.resetPosition()
    },
    on: function (t, i) {
      this._events[t] || (this._events[t] = []), this._events[t].push(i)
    },
    off: function (t, i) {
      if (this._events[t]) {
        var s = this._events[t].indexOf(i)
        ;-1 < s && this._events[t].splice(s, 1)
      }
    },
    _execEvent: function (t) {
      if (this._events[t]) {
        var i = 0,
          s = this._events[t].length
        if (s)
          for (; i < s; i++)
            this._events[t][i].apply(this, [].slice.call(arguments, 1))
      }
    },
    scrollBy: function (t, i, s, e) {
      ;(t = this.x + t),
        (i = this.y + i),
        (s = s || 0),
        this.scrollTo(t, i, s, e)
    },
    scrollTo: function (t, i, s, e) {
      ;(e = e || m.ease.circular),
        (this.isInTransition = this.options.useTransition && 0 < s)
      var o = this.options.useTransition && e.style
      !s || o
        ? (o &&
            (this._transitionTimingFunction(e.style), this._transitionTime(s)),
          this._translate(t, i))
        : this._animate(t, i, s, e.fn)
    },
    scrollToElement: function (t, i, s, e, o) {
      if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
        var n = m.offset(t)
        ;(n.left -= this.wrapperOffset.left),
          (n.top -= this.wrapperOffset.top),
          !0 === s &&
            (s = p.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
          !0 === e &&
            (e = p.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
          (n.left -= s || 0),
          (n.top -= e || 0),
          (n.left =
            0 < n.left
              ? 0
              : n.left < this.maxScrollX
              ? this.maxScrollX
              : n.left),
          (n.top =
            0 < n.top ? 0 : n.top < this.maxScrollY ? this.maxScrollY : n.top),
          (i =
            null == i || 'auto' === i
              ? p.max(p.abs(this.x - n.left), p.abs(this.y - n.top))
              : i),
          this.scrollTo(n.left, n.top, i, o)
      }
    },
    _transitionTime: function (t) {
      if (this.options.useTransition) {
        t = t || 0
        var i = m.style.transitionDuration
        if (i) {
          if (((this.scrollerStyle[i] = t + 'ms'), !t && m.isBadAndroid)) {
            this.scrollerStyle[i] = '0.0001ms'
            var s = this
            f(function () {
              '0.0001ms' === s.scrollerStyle[i] && (s.scrollerStyle[i] = '0s')
            })
          }
          if (this.indicators)
            for (var e = this.indicators.length; e--; )
              this.indicators[e].transitionTime(t)
        }
      }
    },
    _transitionTimingFunction: function (t) {
      if (
        ((this.scrollerStyle[m.style.transitionTimingFunction] = t),
        this.indicators)
      )
        for (var i = this.indicators.length; i--; )
          this.indicators[i].transitionTimingFunction(t)
    },
    _translate: function (t, i) {
      if (
        (this.options.useTransform
          ? (this.scrollerStyle[m.style.transform] =
              'translate(' + t + 'px,' + i + 'px)' + this.translateZ)
          : ((t = p.round(t)),
            (i = p.round(i)),
            (this.scrollerStyle.left = t + 'px'),
            (this.scrollerStyle.top = i + 'px')),
        (this.x = t),
        (this.y = i),
        this.indicators)
      )
        for (var s = this.indicators.length; s--; )
          this.indicators[s].updatePosition()
    },
    _initEvents: function (t) {
      var i = t ? m.removeEvent : m.addEvent,
        s = this.options.bindToWrapper ? this.wrapper : r
      i(r, 'orientationchange', this),
        i(r, 'resize', this),
        this.options.click && i(this.wrapper, 'click', this, !0),
        this.options.disableMouse ||
          (i(this.wrapper, 'mousedown', this),
          i(s, 'mousemove', this),
          i(s, 'mousecancel', this),
          i(s, 'mouseup', this)),
        m.hasPointer &&
          !this.options.disablePointer &&
          (i(this.wrapper, m.prefixPointerEvent('pointerdown'), this),
          i(s, m.prefixPointerEvent('pointermove'), this),
          i(s, m.prefixPointerEvent('pointercancel'), this),
          i(s, m.prefixPointerEvent('pointerup'), this)),
        m.hasTouch &&
          !this.options.disableTouch &&
          (i(this.wrapper, 'touchstart', this),
          i(s, 'touchmove', this),
          i(s, 'touchcancel', this),
          i(s, 'touchend', this)),
        i(this.scroller, 'transitionend', this),
        i(this.scroller, 'webkitTransitionEnd', this),
        i(this.scroller, 'oTransitionEnd', this),
        i(this.scroller, 'MSTransitionEnd', this)
    },
    getComputedPosition: function () {
      var t,
        i,
        s = r.getComputedStyle(this.scroller, null)
      return (
        (i = this.options.useTransform
          ? ((t = +(
              (s = s[m.style.transform].split(')')[0].split(', '))[12] || s[4]
            )),
            +(s[13] || s[5]))
          : ((t = +s.left.replace(/[^-\d.]/g, '')),
            +s.top.replace(/[^-\d.]/g, ''))),
        { x: t, y: i }
      )
    },
    _initIndicators: function () {
      var t,
        i = this.options.interactiveScrollbars,
        s = 'string' != typeof this.options.scrollbars,
        e = [],
        o = this
      ;(this.indicators = []),
        this.options.scrollbars &&
          (this.options.scrollY &&
            ((t = {
              el: h('v', i, this.options.scrollbars),
              interactive: i,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: !1
            }),
            this.wrapper.appendChild(t.el),
            e.push(t)),
          this.options.scrollX &&
            ((t = {
              el: h('h', i, this.options.scrollbars),
              interactive: i,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: !1
            }),
            this.wrapper.appendChild(t.el),
            e.push(t))),
        this.options.indicators && (e = e.concat(this.options.indicators))
      for (var n = e.length; n--; ) this.indicators.push(new a(this, e[n]))
      function r(t) {
        if (o.indicators)
          for (var i = o.indicators.length; i--; ) t.call(o.indicators[i])
      }
      this.options.fadeScrollbars &&
        (this.on('scrollEnd', function () {
          r(function () {
            this.fade()
          })
        }),
        this.on('scrollCancel', function () {
          r(function () {
            this.fade()
          })
        }),
        this.on('scrollStart', function () {
          r(function () {
            this.fade(1)
          })
        }),
        this.on('beforeScrollStart', function () {
          r(function () {
            this.fade(1, !0)
          })
        })),
        this.on('refresh', function () {
          r(function () {
            this.refresh()
          })
        }),
        this.on('destroy', function () {
          r(function () {
            this.destroy()
          }),
            delete this.indicators
        })
    },
    _initWheel: function () {
      m.addEvent(this.wrapper, 'wheel', this),
        m.addEvent(this.wrapper, 'mousewheel', this),
        m.addEvent(this.wrapper, 'DOMMouseScroll', this),
        this.on('destroy', function () {
          clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = null),
            m.removeEvent(this.wrapper, 'wheel', this),
            m.removeEvent(this.wrapper, 'mousewheel', this),
            m.removeEvent(this.wrapper, 'DOMMouseScroll', this)
        })
    },
    _wheel: function (t) {
      if (this.enabled) {
        r.navigator.userAgent.match(/(MSIE|Trident)/) || t.preventDefault()
        var i,
          s,
          e,
          o,
          n = this
        if (
          (void 0 === this.wheelTimeout && n._execEvent('scrollStart'),
          clearTimeout(this.wheelTimeout),
          (this.wheelTimeout = setTimeout(function () {
            n.options.snap || n._execEvent('scrollEnd'),
              (n.wheelTimeout = void 0)
          }, 400)),
          'deltaX' in t)
        )
          s =
            1 === t.deltaMode
              ? ((i = -t.deltaX * this.options.mouseWheelSpeed),
                -t.deltaY * this.options.mouseWheelSpeed)
              : ((i = -t.deltaX), -t.deltaY)
        else if ('wheelDeltaX' in t)
          (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
            (s = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed)
        else if ('wheelDelta' in t)
          i = s = (t.wheelDelta / 120) * this.options.mouseWheelSpeed
        else {
          if (!('detail' in t)) return
          i = s = (-t.detail / 3) * this.options.mouseWheelSpeed
        }
        if (
          ((i *= this.options.invertWheelDirection),
          (s *= this.options.invertWheelDirection),
          this.hasVerticalScroll || ((i = s), (s = 0)),
          this.options.snap)
        )
          return (
            (e = this.currentPage.pageX),
            (o = this.currentPage.pageY),
            0 < i ? e-- : i < 0 && e++,
            0 < s ? o-- : s < 0 && o++,
            void this.goToPage(e, o)
          )
        ;(e = this.x + p.round(this.hasHorizontalScroll ? i : 0)),
          (o = this.y + p.round(this.hasVerticalScroll ? s : 0)),
          (this.directionX = 0 < i ? -1 : i < 0 ? 1 : 0),
          (this.directionY = 0 < s ? -1 : s < 0 ? 1 : 0),
          0 < e ? (e = 0) : e < this.maxScrollX && (e = this.maxScrollX),
          0 < o ? (o = 0) : o < this.maxScrollY && (o = this.maxScrollY),
          this.scrollTo(e, o, 0)
      }
    },
    _initSnap: function () {
      ;(this.currentPage = {}),
        'string' == typeof this.options.snap &&
          (this.options.snap = this.scroller.querySelectorAll(
            this.options.snap
          )),
        this.on('refresh', function () {
          var t,
            i,
            s,
            e,
            o,
            n,
            r = 0,
            h = 0,
            a = 0,
            l = this.options.snapStepX || this.wrapperWidth,
            c = this.options.snapStepY || this.wrapperHeight
          if (
            ((this.pages = []),
            this.wrapperWidth &&
              this.wrapperHeight &&
              this.scrollerWidth &&
              this.scrollerHeight)
          ) {
            if (!0 === this.options.snap)
              for (
                s = p.round(l / 2), e = p.round(c / 2);
                a > -this.scrollerWidth;

              ) {
                for (this.pages[r] = [], o = t = 0; o > -this.scrollerHeight; )
                  (this.pages[r][t] = {
                    x: p.max(a, this.maxScrollX),
                    y: p.max(o, this.maxScrollY),
                    width: l,
                    height: c,
                    cx: a - s,
                    cy: o - e
                  }),
                    (o -= c),
                    t++
                ;(a -= l), r++
              }
            else
              for (t = (n = this.options.snap).length, i = -1; r < t; r++)
                (0 === r || n[r].offsetLeft <= n[r - 1].offsetLeft) &&
                  ((h = 0), i++),
                  this.pages[h] || (this.pages[h] = []),
                  (a = p.max(-n[r].offsetLeft, this.maxScrollX)),
                  (o = p.max(-n[r].offsetTop, this.maxScrollY)),
                  (s = a - p.round(n[r].offsetWidth / 2)),
                  (e = o - p.round(n[r].offsetHeight / 2)),
                  (this.pages[h][i] = {
                    x: a,
                    y: o,
                    width: n[r].offsetWidth,
                    height: n[r].offsetHeight,
                    cx: s,
                    cy: e
                  }),
                  a > this.maxScrollX && h++
            this.goToPage(
              this.currentPage.pageX || 0,
              this.currentPage.pageY || 0,
              0
            ),
              this.options.snapThreshold % 1 == 0
                ? ((this.snapThresholdX = this.options.snapThreshold),
                  (this.snapThresholdY = this.options.snapThreshold))
                : ((this.snapThresholdX = p.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .width * this.options.snapThreshold
                  )),
                  (this.snapThresholdY = p.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .height * this.options.snapThreshold
                  )))
          }
        }),
        this.on('flick', function () {
          var t =
            this.options.snapSpeed ||
            p.max(
              p.max(
                p.min(p.abs(this.x - this.startX), 1e3),
                p.min(p.abs(this.y - this.startY), 1e3)
              ),
              300
            )
          this.goToPage(
            this.currentPage.pageX + this.directionX,
            this.currentPage.pageY + this.directionY,
            t
          )
        })
    },
    _nearestSnap: function (t, i) {
      if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 }
      var s = 0,
        e = this.pages.length,
        o = 0
      if (
        p.abs(t - this.absStartX) < this.snapThresholdX &&
        p.abs(i - this.absStartY) < this.snapThresholdY
      )
        return this.currentPage
      for (
        0 < t ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
          0 < i ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY);
        s < e;
        s++
      )
        if (t >= this.pages[s][0].cx) {
          t = this.pages[s][0].x
          break
        }
      for (e = this.pages[s].length; o < e; o++)
        if (i >= this.pages[0][o].cy) {
          i = this.pages[0][o].y
          break
        }
      return (
        s == this.currentPage.pageX &&
          ((s += this.directionX) < 0
            ? (s = 0)
            : s >= this.pages.length && (s = this.pages.length - 1),
          (t = this.pages[s][0].x)),
        o == this.currentPage.pageY &&
          ((o += this.directionY) < 0
            ? (o = 0)
            : o >= this.pages[0].length && (o = this.pages[0].length - 1),
          (i = this.pages[0][o].y)),
        { x: t, y: i, pageX: s, pageY: o }
      )
    },
    goToPage: function (t, i, s, e) {
      ;(e = e || this.options.bounceEasing),
        t >= this.pages.length ? (t = this.pages.length - 1) : t < 0 && (t = 0),
        i >= this.pages[t].length
          ? (i = this.pages[t].length - 1)
          : i < 0 && (i = 0)
      var o = this.pages[t][i].x,
        n = this.pages[t][i].y
      ;(s =
        void 0 === s
          ? this.options.snapSpeed ||
            p.max(
              p.max(
                p.min(p.abs(o - this.x), 1e3),
                p.min(p.abs(n - this.y), 1e3)
              ),
              300
            )
          : s),
        (this.currentPage = { x: o, y: n, pageX: t, pageY: i }),
        this.scrollTo(o, n, s, e)
    },
    next: function (t, i) {
      var s = this.currentPage.pageX,
        e = this.currentPage.pageY
      ++s >= this.pages.length && this.hasVerticalScroll && ((s = 0), e++),
        this.goToPage(s, e, t, i)
    },
    prev: function (t, i) {
      var s = this.currentPage.pageX,
        e = this.currentPage.pageY
      --s < 0 && this.hasVerticalScroll && ((s = 0), e--),
        this.goToPage(s, e, t, i)
    },
    _initKeys: function (t) {
      var i,
        s = {
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40
        }
      if ('object' == typeof this.options.keyBindings)
        for (i in this.options.keyBindings)
          'string' == typeof this.options.keyBindings[i] &&
            (this.options.keyBindings[i] = this.options.keyBindings[i]
              .toUpperCase()
              .charCodeAt(0))
      else this.options.keyBindings = {}
      for (i in s)
        this.options.keyBindings[i] = this.options.keyBindings[i] || s[i]
      m.addEvent(r, 'keydown', this),
        this.on('destroy', function () {
          m.removeEvent(r, 'keydown', this)
        })
    },
    _key: function (t) {
      if (this.enabled) {
        var i,
          s = this.options.snap,
          e = s ? this.currentPage.pageX : this.x,
          o = s ? this.currentPage.pageY : this.y,
          n = m.getTime(),
          r = this.keyTime || 0
        switch (
          (this.options.useTransition &&
            this.isInTransition &&
            ((i = this.getComputedPosition()),
            this._translate(p.round(i.x), p.round(i.y)),
            (this.isInTransition = !1)),
          (this.keyAcceleration =
            n - r < 200 ? p.min(this.keyAcceleration + 0.25, 50) : 0),
          t.keyCode)
        ) {
          case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (e += s ? 1 : this.wrapperWidth)
              : (o += s ? 1 : this.wrapperHeight)
            break
          case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (e -= s ? 1 : this.wrapperWidth)
              : (o -= s ? 1 : this.wrapperHeight)
            break
          case this.options.keyBindings.end:
            ;(e = s ? this.pages.length - 1 : this.maxScrollX),
              (o = s ? this.pages[0].length - 1 : this.maxScrollY)
            break
          case this.options.keyBindings.home:
            o = e = 0
            break
          case this.options.keyBindings.left:
            e += s ? -1 : (5 + this.keyAcceleration) >> 0
            break
          case this.options.keyBindings.up:
            o += s ? 1 : (5 + this.keyAcceleration) >> 0
            break
          case this.options.keyBindings.right:
            e -= s ? -1 : (5 + this.keyAcceleration) >> 0
            break
          case this.options.keyBindings.down:
            o -= s ? 1 : (5 + this.keyAcceleration) >> 0
            break
          default:
            return
        }
        s
          ? this.goToPage(e, o)
          : (0 < e
              ? ((e = 0), (this.keyAcceleration = 0))
              : e < this.maxScrollX &&
                ((e = this.maxScrollX), (this.keyAcceleration = 0)),
            0 < o
              ? ((o = 0), (this.keyAcceleration = 0))
              : o < this.maxScrollY &&
                ((o = this.maxScrollY), (this.keyAcceleration = 0)),
            this.scrollTo(e, o, 0),
            (this.keyTime = n))
      }
    },
    _animate: function (n, r, h, a) {
      var l = this,
        c = this.x,
        p = this.y,
        d = m.getTime(),
        u = d + h
      ;(this.isAnimating = !0),
        (function t() {
          var i,
            s,
            e,
            o = m.getTime()
          if (u <= o)
            return (
              (l.isAnimating = !1),
              l._translate(n, r),
              void (
                l.resetPosition(l.options.bounceTime) ||
                l._execEvent('scrollEnd')
              )
            )
          ;(e = a((o = (o - d) / h))),
            (i = (n - c) * e + c),
            (s = (r - p) * e + p),
            l._translate(i, s),
            l.isAnimating && f(t)
        })()
    },
    handleEvent: function (t) {
      switch (t.type) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(t)
          break
        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(t)
          break
        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(t)
          break
        case 'orientationchange':
        case 'resize':
          this._resize()
          break
        case 'transitionend':
        case 'webkitTransitionEnd':
        case 'oTransitionEnd':
        case 'MSTransitionEnd':
          this._transitionEnd(t)
          break
        case 'wheel':
        case 'DOMMouseScroll':
        case 'mousewheel':
          this._wheel(t)
          break
        case 'keydown':
          this._key(t)
          break
        case 'click':
          this.enabled &&
            !t._constructed &&
            (t.preventDefault(), t.stopPropagation())
      }
    }
  }),
    (a.prototype = {
      handleEvent: function (t) {
        switch (t.type) {
          case 'touchstart':
          case 'pointerdown':
          case 'MSPointerDown':
          case 'mousedown':
            this._start(t)
            break
          case 'touchmove':
          case 'pointermove':
          case 'MSPointerMove':
          case 'mousemove':
            this._move(t)
            break
          case 'touchend':
          case 'pointerup':
          case 'MSPointerUp':
          case 'mouseup':
          case 'touchcancel':
          case 'pointercancel':
          case 'MSPointerCancel':
          case 'mousecancel':
            this._end(t)
        }
      },
      destroy: function () {
        this.options.fadeScrollbars &&
          (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
          this.options.interactive &&
            (m.removeEvent(this.indicator, 'touchstart', this),
            m.removeEvent(
              this.indicator,
              m.prefixPointerEvent('pointerdown'),
              this
            ),
            m.removeEvent(this.indicator, 'mousedown', this),
            m.removeEvent(r, 'touchmove', this),
            m.removeEvent(r, m.prefixPointerEvent('pointermove'), this),
            m.removeEvent(r, 'mousemove', this),
            m.removeEvent(r, 'touchend', this),
            m.removeEvent(r, m.prefixPointerEvent('pointerup'), this),
            m.removeEvent(r, 'mouseup', this)),
          this.options.defaultScrollbars &&
            this.wrapper.parentNode.removeChild(this.wrapper)
      },
      _start: function (t) {
        var i = t.touches ? t.touches[0] : t
        t.preventDefault(),
          t.stopPropagation(),
          this.transitionTime(),
          (this.initiated = !0),
          (this.moved = !1),
          (this.lastPointX = i.pageX),
          (this.lastPointY = i.pageY),
          (this.startTime = m.getTime()),
          this.options.disableTouch || m.addEvent(r, 'touchmove', this),
          this.options.disablePointer ||
            m.addEvent(r, m.prefixPointerEvent('pointermove'), this),
          this.options.disableMouse || m.addEvent(r, 'mousemove', this),
          this.scroller._execEvent('beforeScrollStart')
      },
      _move: function (t) {
        var i,
          s,
          e,
          o,
          n = t.touches ? t.touches[0] : t
        m.getTime()
        this.moved || this.scroller._execEvent('scrollStart'),
          (this.moved = !0),
          (i = n.pageX - this.lastPointX),
          (this.lastPointX = n.pageX),
          (s = n.pageY - this.lastPointY),
          (this.lastPointY = n.pageY),
          (e = this.x + i),
          (o = this.y + s),
          this._pos(e, o),
          t.preventDefault(),
          t.stopPropagation()
      },
      _end: function (t) {
        if (this.initiated) {
          if (
            ((this.initiated = !1),
            t.preventDefault(),
            t.stopPropagation(),
            m.removeEvent(r, 'touchmove', this),
            m.removeEvent(r, m.prefixPointerEvent('pointermove'), this),
            m.removeEvent(r, 'mousemove', this),
            this.scroller.options.snap)
          ) {
            var i = this.scroller._nearestSnap(
                this.scroller.x,
                this.scroller.y
              ),
              s =
                this.options.snapSpeed ||
                p.max(
                  p.max(
                    p.min(p.abs(this.scroller.x - i.x), 1e3),
                    p.min(p.abs(this.scroller.y - i.y), 1e3)
                  ),
                  300
                )
            ;(this.scroller.x == i.x && this.scroller.y == i.y) ||
              ((this.scroller.directionX = 0),
              (this.scroller.directionY = 0),
              (this.scroller.currentPage = i),
              this.scroller.scrollTo(
                i.x,
                i.y,
                s,
                this.scroller.options.bounceEasing
              ))
          }
          this.moved && this.scroller._execEvent('scrollEnd')
        }
      },
      transitionTime: function (t) {
        t = t || 0
        var i = m.style.transitionDuration
        if (i && ((this.indicatorStyle[i] = t + 'ms'), !t && m.isBadAndroid)) {
          this.indicatorStyle[i] = '0.0001ms'
          var s = this
          f(function () {
            '0.0001ms' === s.indicatorStyle[i] && (s.indicatorStyle[i] = '0s')
          })
        }
      },
      transitionTimingFunction: function (t) {
        this.indicatorStyle[m.style.transitionTimingFunction] = t
      },
      refresh: function () {
        this.transitionTime(),
          this.options.listenX && !this.options.listenY
            ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll
                ? 'block'
                : 'none')
            : this.options.listenY && !this.options.listenX
            ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                ? 'block'
                : 'none')
            : (this.indicatorStyle.display =
                this.scroller.hasHorizontalScroll ||
                this.scroller.hasVerticalScroll
                  ? 'block'
                  : 'none'),
          this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
            ? (m.addClass(this.wrapper, 'iScrollBothScrollbars'),
              m.removeClass(this.wrapper, 'iScrollLoneScrollbar'),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = '8px')
                  : (this.wrapper.style.bottom = '8px')))
            : (m.removeClass(this.wrapper, 'iScrollBothScrollbars'),
              m.addClass(this.wrapper, 'iScrollLoneScrollbar'),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = '2px')
                  : (this.wrapper.style.bottom = '2px')))
        this.wrapper.offsetHeight
        this.options.listenX &&
          ((this.wrapperWidth = this.wrapper.clientWidth),
          this.options.resize
            ? ((this.indicatorWidth = p.max(
                p.round(
                  (this.wrapperWidth * this.wrapperWidth) /
                    (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                ),
                8
              )),
              (this.indicatorStyle.width = this.indicatorWidth + 'px'))
            : (this.indicatorWidth = this.indicator.clientWidth),
          (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
          'clip' == this.options.shrink
            ? ((this.minBoundaryX = 8 - this.indicatorWidth),
              (this.maxBoundaryX = this.wrapperWidth - 8))
            : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
          (this.sizeRatioX =
            this.options.speedRatioX ||
            (this.scroller.maxScrollX &&
              this.maxPosX / this.scroller.maxScrollX))),
          this.options.listenY &&
            ((this.wrapperHeight = this.wrapper.clientHeight),
            this.options.resize
              ? ((this.indicatorHeight = p.max(
                  p.round(
                    (this.wrapperHeight * this.wrapperHeight) /
                      (this.scroller.scrollerHeight || this.wrapperHeight || 1)
                  ),
                  8
                )),
                (this.indicatorStyle.height = this.indicatorHeight + 'px'))
              : (this.indicatorHeight = this.indicator.clientHeight),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            'clip' == this.options.shrink
              ? ((this.minBoundaryY = 8 - this.indicatorHeight),
                (this.maxBoundaryY = this.wrapperHeight - 8))
              : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            (this.sizeRatioY =
              this.options.speedRatioY ||
              (this.scroller.maxScrollY &&
                this.maxPosY / this.scroller.maxScrollY))),
          this.updatePosition()
      },
      updatePosition: function () {
        var t =
            (this.options.listenX &&
              p.round(this.sizeRatioX * this.scroller.x)) ||
            0,
          i =
            (this.options.listenY &&
              p.round(this.sizeRatioY * this.scroller.y)) ||
            0
        this.options.ignoreBoundaries ||
          (t < this.minBoundaryX
            ? ('scale' == this.options.shrink &&
                ((this.width = p.max(this.indicatorWidth + t, 8)),
                (this.indicatorStyle.width = this.width + 'px')),
              (t = this.minBoundaryX))
            : t > this.maxBoundaryX
            ? (t =
                'scale' == this.options.shrink
                  ? ((this.width = p.max(
                      this.indicatorWidth - (t - this.maxPosX),
                      8
                    )),
                    (this.indicatorStyle.width = this.width + 'px'),
                    this.maxPosX + this.indicatorWidth - this.width)
                  : this.maxBoundaryX)
            : 'scale' == this.options.shrink &&
              this.width != this.indicatorWidth &&
              ((this.width = this.indicatorWidth),
              (this.indicatorStyle.width = this.width + 'px')),
          i < this.minBoundaryY
            ? ('scale' == this.options.shrink &&
                ((this.height = p.max(this.indicatorHeight + 3 * i, 8)),
                (this.indicatorStyle.height = this.height + 'px')),
              (i = this.minBoundaryY))
            : i > this.maxBoundaryY
            ? (i =
                'scale' == this.options.shrink
                  ? ((this.height = p.max(
                      this.indicatorHeight - 3 * (i - this.maxPosY),
                      8
                    )),
                    (this.indicatorStyle.height = this.height + 'px'),
                    this.maxPosY + this.indicatorHeight - this.height)
                  : this.maxBoundaryY)
            : 'scale' == this.options.shrink &&
              this.height != this.indicatorHeight &&
              ((this.height = this.indicatorHeight),
              (this.indicatorStyle.height = this.height + 'px'))),
          (this.x = t),
          (this.y = i),
          this.scroller.options.useTransform
            ? (this.indicatorStyle[m.style.transform] =
                'translate(' + t + 'px,' + i + 'px)' + this.scroller.translateZ)
            : ((this.indicatorStyle.left = t + 'px'),
              (this.indicatorStyle.top = i + 'px'))
      },
      _pos: function (t, i) {
        t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
          i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
          (t = this.options.listenX
            ? p.round(t / this.sizeRatioX)
            : this.scroller.x),
          (i = this.options.listenY
            ? p.round(i / this.sizeRatioY)
            : this.scroller.y),
          this.scroller.scrollTo(t, i)
      },
      fade: function (t, i) {
        if (!i || this.visible) {
          clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)
          var s = t ? 250 : 500,
            e = t ? 0 : 300
          ;(t = t ? '1' : '0'),
            (this.wrapperStyle[m.style.transitionDuration] = s + 'ms'),
            (this.fadeTimeout = setTimeout(
              function (t) {
                ;(this.wrapperStyle.opacity = t), (this.visible = +t)
              }.bind(this, t),
              e
            ))
        }
      }
    }),
    (t.utils = m),
    'undefined' != typeof module && module.exports
      ? (module.exports = t)
      : 'function' == typeof define && define.amd
      ? (define(function () {
          return t
        }),
        void 0 !== r && (r.IScroll = t))
      : (r.IScroll = t)
})(window, document, Math),
  /*!
   * Scrolloverflow 2.0.6 module for fullPage.js >= 3
   * https://github.com/alvarotrigo/fullPage.js
   * @license MIT licensed
   *
   * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
   */
  (function (l, c) {
    l.fp_scrolloverflow = (function () {
      l.IScroll || (l.IScroll = module.exports)
      var s = 'fp-scrollable',
        n = '.' + s,
        t = '.active',
        d = '.fp-section',
        e = d + t,
        o = '.fp-slide',
        u = '.fp-tableCell'
      function r() {
        var p = this
        function s() {
          fp_utils.hasClass(c.body, 'fp-responsive') ? i(e) : i(t)
        }
        function t(t) {
          if (!fp_utils.hasClass(t, 'fp-noscroll')) {
            fp_utils.css(t, { overflow: 'hidden' })
            var i,
              s,
              e,
              o = p.options.scrollOverflowHandler,
              n = o.wrapContent(),
              r = fp_utils.closest(t, d),
              h = o.scrollable(t),
              a =
                ((s = r),
                null != (e = fp_utils.closest(s, d))
                  ? parseInt(getComputedStyle(e)['padding-bottom']) +
                    parseInt(getComputedStyle(e)['padding-top'])
                  : 0)
            null != h
              ? (i = o.scrollHeight(t))
              : ((i = t.scrollHeight),
                p.options.verticalCentered && (i = f(u, t)[0].scrollHeight))
            var l = fp_utils.getWindowHeight(),
              c = l - a
            l < i + a
              ? null != h
                ? o.update(t, c)
                : (p.options.verticalCentered
                    ? (fp_utils.wrapInner(f(u, t)[0], n.scroller),
                      fp_utils.wrapInner(f(u, t)[0], n.scrollable))
                    : (fp_utils.wrapInner(t, n.scroller),
                      fp_utils.wrapInner(t, n.scrollable)),
                  o.create(t, c, p.iscrollOptions))
              : o.remove(t),
              fp_utils.css(t, { overflow: '' })
          }
        }
        function i(s) {
          f(d).forEach(function (t) {
            var i = f(o, t)
            i.length
              ? i.forEach(function (t) {
                  s(t)
                })
              : s(t)
          })
        }
        function e(t) {
          var i = p.options.scrollOverflowHandler
          fp_utils.hasClass(
            fp_utils.closest(t, d),
            'fp-auto-height-responsive'
          ) && i.remove(t)
        }
        ;(p.options = null),
          (p.init = function (t, i) {
            return (
              (p.options = t),
              (p.iscrollOptions = i),
              'complete' === c.readyState &&
                (s(), fullpage_api.shared.afterRenderActions()),
              l.addEventListener('load', function () {
                s(), fullpage_api.shared.afterRenderActions()
              }),
              p
            )
          }),
          (p.createScrollBarForAll = s),
          (p.createScrollBar = t)
      }
      ;(IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener('wheel', this),
          this.wrapper.addEventListener('mousewheel', this),
          this.wrapper.addEventListener('DOMMouseScroll', this)
      }),
        (IScroll.prototype.wheelOff = function () {
          this.wrapper.removeEventListener('wheel', this),
            this.wrapper.removeEventListener('mousewheel', this),
            this.wrapper.removeEventListener('DOMMouseScroll', this)
        })
      var f = null,
        h = null,
        a = {
          refreshId: null,
          iScrollInstances: [],
          lastScrollY: null,
          hasBeenInit: !1,
          iscrollOptions: {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
          },
          init: function (t) {
            ;(f = fp_utils.$), (h = t)
            var i =
              'ontouchstart' in l ||
              0 < navigator.msMaxTouchPoints ||
              navigator.maxTouchPoints
            return (
              (a.iscrollOptions.click = i),
              (a.hasBeenInit = !0),
              (a.iscrollOptions = fp_utils.deepExtend(
                a.iscrollOptions,
                t.scrollOverflowOptions
              )),
              new r().init(t, a.iscrollOptions)
            )
          },
          toggleWheel: function (s) {
            f(n, f(e)[0]).forEach(function (t) {
              var i = t.fp_iscrollInstance
              null != i && (s ? i.wheelOn() : i.wheelOff())
            })
          },
          setIscroll: function (t, i) {
            if (a.hasBeenInit && t) {
              var s = fp_utils.closest(t, n) || (f(n, t) && f(n, t)[0]),
                e = i ? 'enable' : 'disable'
              s && s.fp_iscrollInstance[e]()
            }
          },
          onLeave: function () {
            a.toggleWheel(!1)
          },
          beforeLeave: function () {
            a.onLeave()
          },
          afterLoad: function () {
            a.toggleWheel(!0)
          },
          create: function (s, e, o) {
            f(n, s).forEach(function (t) {
              fp_utils.css(t, { height: e + 'px' })
              var i = t.fp_iscrollInstance
              null != i &&
                a.iScrollInstances.forEach(function (t) {
                  t.destroy()
                }),
                (i = new IScroll(t, o)),
                a.iScrollInstances.push(i),
                fp_utils.hasClass(fp_utils.closest(s, d), 'active') ||
                  i.wheelOff(),
                (t.fp_iscrollInstance = i)
            })
          },
          isScrolled: function (t, i) {
            var s = i.fp_iscrollInstance
            if (!s) return !0
            if ('top' === t) return 0 <= s.y && !fp_utils.getScrollTop(i)
            if ('bottom' === t) {
              var e = a.lastScrollY === s.y
              return (
                (a.lastScrollY = s.y),
                (e ? 1 : 0) +
                  (0 - s.y) +
                  fp_utils.getScrollTop(i) +
                  i.offsetHeight >=
                  i.scrollHeight
              )
            }
          },
          scrollable: function (t) {
            return f('.fp-slides', t).length
              ? f(n, f('.fp-slide.active', t)[0])[0]
              : f(n, t)[0]
          },
          scrollHeight: function (t) {
            return f('.fp-scroller', f(n, t)[0])[0].scrollHeight
          },
          remove: function (t) {
            if (null != t) {
              var i = f(n, t)[0]
              if (null != i) {
                var s = i.fp_iscrollInstance
                null != s && s.destroy(),
                  (i.fp_iscrollInstance = null),
                  fp_utils.unwrap(f('.fp-scroller', t)[0]),
                  fp_utils.unwrap(f(n, t)[0])
              }
            }
          },
          update: function (t, i) {
            clearTimeout(a.refreshId),
              (a.refreshId = setTimeout(function () {
                a.iScrollInstances.forEach(function (t) {
                  t.refresh(),
                    fullpage_api.silentMoveTo(fp_utils.index(f(e)[0]) + 1)
                })
              }, 150)),
              fp_utils.css(f(n, t)[0], { height: i + 'px' }),
              h.verticalCentered &&
                fp_utils.css(f(n, t)[0].parentNode, { height: i + 'px' })
          },
          wrapContent: function () {
            var t = c.createElement('div')
            t.className = s
            var i = c.createElement('div')
            return (i.className = 'fp-scroller'), { scrollable: t, scroller: i }
          }
        }
      return { iscrollHandler: a }
    })()
  })(window, document)
//# sourceMappingURL=scrolloverflow.min.js.map
