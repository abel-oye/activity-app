/* global ejs: true,YmtApi:true */

/**
 * 海外购物节首页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151014
 */
$(function () {
    'use strict';

    var sequence = [0, 1, 2, 4, 7, 6, 5, 3],
        _inx = 0,
        currCircleNum = 0,
        minCircleNum = 6;

    var timer = null,
        maxSpeed = 200, //最快速度
        minSpeed = 60, //最快速度
        tempo = 0.18, //速率
        direction = -1, //加速度方向
        stopInx = 0, //停止索引
        isFinal = false, //是否进入
        finalNum = 2, //最后缓冲圈数
        currFinalNum = 0, //最后倒计时 当前圈数
        currSpeed = 500; //当前速度


    var turntable = {
        move: function (inx) {
            inx = sequence[inx];
            var $wrap = $('.turntable-body'),
                $boards = $wrap.find('.board');
            $boards.removeClass('active').eq(inx).addClass('active');
        },
        loop: function () {

            var speend = currSpeed + direction * tempo * currSpeed;
            //限速
            if (direction > 0) {
                speend = Math.min(speend, maxSpeed);
            }
            else {
                speend = Math.max(speend, minSpeed);
            }

            //开启倒数且最后一圈且达到当前坐标 停止
            if (isFinal && currFinalNum === finalNum && stopInx === _inx) {
                currCircleNum = 0;
                clearInterval(timer);
                timer = null;
                return;
            }

            //当速度改变了，或者没有定时器时 生成新的定时器
            if (!timer || speend != currSpeed) {
                currSpeed = speend;
                clearInterval(timer);
                timer = setInterval(turntable.loop, speend);
            }

            //跑完一圈
            if (_inx >= sequence.length) {
                currCircleNum++;
                _inx = 0;
                isFinal && currFinalNum++;
            }
            turntable.move(_inx++);
        },
        run: function () {
            isFinal = false;
            currFinalNum = 0;
            direction = -1;
            this.loop();
        },
        stop: function (inx) {
            direction = 1;
            stopInx = +inx;
            isFinal = true;
        }
    }

    $(document).on('click', '.J-open', function () {
        var $this = $(this);

        YmtApi.open({
            url: $this.attr('data-url'),
            isNew: true,
        });
    }).on('click', '.J-turntable-run', function () {
        turntable.run()
    });
});
