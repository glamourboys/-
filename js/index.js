//导航头送货地址
(function(){
  //点击出现送货地址导航头城市搜索出现
  $(function(){
    $('.hd_indexprovce a').on('click',function(){
      $('.hd_city_select').css('display','block');
    })
    $('.hd_city_select .hd_city_close').on('click',function(){
      $('.hd_city_select').css('display','none');
    })
    //点击其他区域也能关闭送货地址列表暂未完成
    // if($('.hd_city_select').css('display') === 'block'){
    //   $('').on("click",function(){
    //     $('.hd_city_select').css('display','none');
    //   })
    // }
  }),
  $(function(){
    $('.hd_city_input input').on('keyup',function(){
      $('.hd_city_suggest').css('display','block');
      $('.hd_city_input i').css("display","block");
      $('.hd_city_search .hd_citys_close').css('display','none');
      if($('.hd_city_input input').val()){
        $('.hd_city_input i').css('display','none');
        $('.hd_city_search .hd_citys_close').css('display','block');
      }
    })
  }),
    // 点击出现提示内容和点击关闭提示内容
    $(function(){
      $('.hd_city_suggest').on('click','a',function(){
        $('.hd_city_input input').val($(this).text());
      })
      $('.hd_city_search .hd_citys_close').on('click',function(){
        $('.hd_city_suggest').css('display','none');
        $('.hd_city_input i').css('display','block')
        $('.hd_city_input input').val('');
        $('.hd_city_search .hd_citys_close').css('display','none')
      })
    }),
    //小图标的旋转
    $(function(){
      $('.menus').hover(function(){
        $('.menus .iconfont').css({
          'display': 'inline-block',
          '-webkit-transform': 'rotate(180deg)',
          '-moz-transform': 'rotate(180deg)',
          '-o-transform':'rotate(180deg)',
          'transform':'rotate(180deg)',
          '-webkit-transition': '-webkit-transform .2s linear',
          'transition': '-webkit-transform .2s linear',
          'transition': 'transform .2s linear,-webkit-transform .2s linear,-moz-transform .2s linear,-o-transform .2s linear',
          'cursor': 'pointer',
        })
      },function(){
        $('.menus .iconfont').css({
          'display': 'inline-block',
          '-webkit-transform': 'rotate(0deg)',
          '-moz-transform': 'rotate(0deg)',
          '-o-transform':'rotate(0deg)',
          'transform':'rotate(0deg)',
          '-webkit-transition': '-webkit-transform .2s linear',
          'transition': '-webkit-transform .2s linear',
          'transition': 'transform .2s linear,-webkit-transform .2s linear,-moz-transform .2s linear,-o-transform .2s linear',
          'cursor': 'pointer',
        })
      })
    }),
    // 浮上去出现二维码
    $(function(){
      $('.hd_title').hover(function(){
        $('.hd_qrcode_bg').css("display","block");
      },function(){
        $('.hd_qrcode_bg').css('display','none');
      }),
      $('.hd_qrcode_bg').hover(function(){
        $('.hd_qrcode_bg').css("display","block");
      },function(){
        $('.hd_qrcode_bg').css('display','none');
      })
    }),
    // 搜索提示的出现和消失
    $(function(){
      $('.hd_search_ipt').click(function(){
        $('.hd_search_tips_result').css("display","block");
      }).on('mouseleave',function(){
        $('.hd_search_tips_result').css("display","none");
      })
      $('.hd_search_history_new').on('mouseenter',function(){
        $('.hd_search_tips_result').css("display","block");
      }).on('mouseleave',function(){
        $('.hd_search_tips_result').css("display","none");
      })
    }),
    // 解决banner图列表旁边的展示列表中的a元素转为行内块元素产生的4px的间隙
    $(function(){
      $('.hd_good_category dd').contents().filter(function(){
        return this.nodeType===3;
        }).remove();
    // banner图列表旁边的展示列表中的a元素鼠标浮上去肢体变粗
      $('.hd_good_category dd a').hover(function(){
        $(this).css("fontWeight","bold");
      },function(){
        $(this).css('fontWeight','400');
      })
    }),
    // banner图列表旁边的展示列表中的li标签浮上去展示详情列表以及背景色变化字体颜色变化
    $(function(){
      var nums = 0;
      $('.mod_hd_allsort ul li').hover(function(){
        $(this).css("background","#ffffff");
        nums = $(this).index();
        $('.hd_show_sort').eq(nums).css('display','block');
        $('.mod_hd_allsort .iconfont').eq(nums).css("color","red");
        // $('.mod_hd_allsort .hd_allsort li h3,a').css("color","#666");
        // console.log($('.mod_hd_allsort .hd_allsort li h3').eq(nums))
      },function(){
        $(this).css("background","#444444");
        $('.hd_show_sort').eq(nums).css('display','none');
        $('.mod_hd_allsort .iconfont').eq(nums).css("color","#666");
        // $('.mod_hd_allsort .hd_allsort li h3,a').css("color","#fff")
      })
    })
})()