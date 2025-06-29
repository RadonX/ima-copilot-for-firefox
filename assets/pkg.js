(function () {
  "use strict";
  ((l, a) => {
    var e;
    try {
      if (typeof document < "u") {
        const r = document.createElement("style");
        for (const o in a.attributes)
          r.setAttribute(o, a.attributes[o]), (r.id = "injectCodeFunction");
        const d = "imaCollectShadowRoot",
          c = () => {
            const o = document.getElementById(d);
            if (o) return o.shadowRoot;
            const t = document.createElement("div");
            return (
              (t.id = d),
              t.attachShadow({ mode: "open" }),
              document.documentElement.appendChild(t),
              t.shadowRoot
            );
          };
        r.appendChild(document.createTextNode(l)),
          (e = c()) == null || e.appendChild(r);
      }
    } catch (r) {
      console.error("vite-plugin-css-injected-by-js", r);
    }
  })(
    'html,body,.miniApp,[data-ima-shadow-root]{--brand_color_green_primary: #079d55;--ui_color_coldgrey: #e1eced;--ui_color_green_highlight: rgba(122, 188, 152, .15);--ui_color_green_click: rgba(122, 188, 152, .3);--ui_color_green_highlight_full: #ebf5f0;--ui_color_greygreen: #66a687;--ui_color_coldgrey_shadow: rgba(199, 210, 216, .55);--ui_color_yellow_transparent: rgba(255, 245, 178, .3);--ui_color_green_highlight_full_mobile: #e4eee9;--ui_color_green_bg: rgba(122, 188, 152, .1);--common_color_green: #11cf70;--common_color_blue: #205aef;--common_color_red: #ff3636;--common_color_orange: #ff891c;--common_color_yellow: #ffcc1a;--common_color_purple: #8026f5;--common_color_yellowgreen: #d6e807;--common_color_green_light: #4bdd6b;--common_color_blue_light: #7dafff;--common_color_yellow_light: #fff5b2;--common_color_red_light: #ff7d7f;--common_color_orange_light: #fdcc8c;--common_color_purple_light: #a988ff;--common_color_yellowgreen_light: #e7ff7d;--common_color_green_dark: #206d48;--common_color_yellowgreen_dark: #b2c200;--common_color_purplr_dark: #6b02bc;--common_color_red_dark: #be0348;--common_color_blue_dark: #0021b4;--common_color_orange_dark: #e98e27;--common_color_yellow_dark: #d5b500;--ui_frame_firstpage_bg_mac: rgba(247, 247, 247, .9);--ui_frame_firstpage_search_bg: #ffffff;--ui_frame_firstpage_bg_win: #f0f0f0;--ui_frame_bg_grey_1: rgba(247, 247, 247, .75);--ui_frame_bg_grey_2: rgba(246, 246, 246, .6);--ui_frame_bg_grey_3: #f3f3f3;--ui_frame_bg_grey_light: #fdfdfd;--ui_frame_bg_grey_0: #f7f7f7;--ui_frame_bg_grey_0_empty: rgba(247, 247, 247, 0);--ui_frame_page_bg_1: rgba(255, 255, 255, .9);--ui_frame_page_bg_0: #ffffff;--ui_frame_page_bg_2: rgba(255, 255, 255, .7);--ui_frame_page_bg_overlay: rgba(255, 255, 255, .8);--ui_module_bg_0: rgba(51, 51, 51, .08);--ui_module_bg_1: rgba(51, 51, 51, .06);--ui_module_bg_2: rgba(51, 51, 51, .04);--ui_module_bg_3: rgba(51, 51, 51, .03);--ui_module_bg_0_full: #e7e7e7;--ui_module_bg_3_full: #f1f1f1;--ui_popover_bg_1: #ffffff;--ui_popover_bg_2: rgba(255, 255, 255, .8);--ui_popover_bg_3: #f6f6f6;--ui_popover_bg_1_empty: rgba(255, 255, 255, 0);--ui_control_bg_black: rgba(0, 0, 0, .86);--ui_control_icon_white: #ffffff;--ui_control_tag_click: rgba(255, 255, 255, .7);--ui_control_bg: #ffffff;--ui_control_card_bg_full: #ffffff;--ui_control_bg_deepgrey: rgba(48, 48, 48, .8);--ui_control_bg_full: #ffffff;--ui_control_icon_black: #242424;--primary_white_1: #ffffff;--primary_white_2: rgba(255, 255, 255, .9);--primary_white_3: rgba(255, 255, 255, .7);--primary_white_4: rgba(255, 255, 255, .2);--primary_white_5: rgba(255, 255, 255, .1);--primary_black_1: rgba(0, 0, 0, .86);--primary_black_2: rgba(0, 0, 0, .6);--primary_black_3: rgba(0, 0, 0, .44);--primary_black_4: rgba(0, 0, 0, .3);--primary_black_5: rgba(0, 0, 0, .24);--primary_black_6: rgba(0, 0, 0, .16);--primary_black_7: rgba(0, 0, 0, .12);--primary_black_0: #000000;--primary_black_1_full: #242424;--ui_border: rgba(0, 0, 0, .04);--ui_line: rgba(0, 0, 0, .08);--ui_line_white: rgba(255, 255, 255, .08);--ui_line_dark: rgba(0, 0, 0, .16);--ui_line_deep_dark: rgba(0, 0, 0, .4);--ui_popover_line_white: rgba(255, 255, 255, .08);--ui_search_line_dark: rgba(0, 0, 0, .6);--ui_emptystate_color_grey_d9: #d9d9d9;--ui_emptystate_color_grey_cc: #cccccc;--ui_emptystate_color_grey_d8: #dbdbdb;--ui_emptystate_color_grey_8c: #8c8c8c;--ui_emptystate_color_grey_b6: #b6b6b6;--ui_emptystate_color_grey_ba: #bababa;--ui_emptystate_color_grey_ec: #ececec;--ui_emptystate_color_grey_72: #727272;--ui_emptystate_color_white_ff: #ffffff}@media (prefers-color-scheme: dark){html.dark-enable,body.dark-enable,.miniApp.dark-enable,[data-ima-shadow-root].dark-enable{--brand_color_green_primary: #079d55;--ui_color_coldgrey: #3d3f40;--ui_color_green_highlight: rgba(122, 188, 152, .15);--ui_color_green_click: rgba(122, 188, 152, .3);--ui_color_green_highlight_full: #28322d;--ui_color_greygreen: #66a687;--ui_color_coldgrey_shadow: rgba(19, 21, 22, .55);--ui_color_yellow_transparent: rgba(255, 245, 178, .3);--ui_color_green_highlight_full_mobile: #28322d;--ui_color_green_bg: rgba(122, 188, 152, .1);--common_color_green: #11cf70;--common_color_blue: #205aef;--common_color_red: #ff3636;--common_color_orange: #ff891c;--common_color_yellow: #ffcc1a;--common_color_purple: #8026f5;--common_color_yellowgreen: #d6e807;--common_color_green_light: #11cf70;--common_color_blue_light: #7dafff;--common_color_yellow_light: #fff5b2;--common_color_red_light: #ff7d7f;--common_color_orange_light: #fdcc8c;--common_color_purple_light: #a988ff;--common_color_yellowgreen_light: #e7ff7d;--common_color_green_dark: #206d48;--common_color_yellowgreen_dark: #b2c200;--common_color_purplr_dark: #6b02bc;--common_color_red_dark: #be0348;--common_color_blue_dark: #0021b4;--common_color_orange_dark: #e98e27;--common_color_yellow_dark: #d5b500;--ui_frame_firstpage_bg_mac: rgba(36, 36, 36, .9);--ui_frame_firstpage_search_bg: rgba(255, 255, 255, .15);--ui_frame_firstpage_bg_win: #242424;--ui_frame_bg_grey_1: rgba(36, 36, 36, .75);--ui_frame_bg_grey_2: rgba(32, 32, 32, .6);--ui_frame_bg_grey_3: rgba(51, 51, 51, .6);--ui_frame_bg_grey_light: #484848;--ui_frame_bg_grey_0: #1a1a1a;--ui_frame_bg_grey_0_empty: rgba(26, 26, 26, 0);--ui_frame_page_bg_1: rgba(26, 26, 26, .9);--ui_frame_page_bg_0: #1a1a1a;--ui_frame_page_bg_2: rgba(26, 26, 26, .7);--ui_frame_page_bg_overlay: rgba(26, 26, 26, .8);--ui_module_bg_0: rgba(247, 247, 247, .1);--ui_module_bg_1: rgba(247, 247, 247, .08);--ui_module_bg_2: rgba(247, 247, 247, .06);--ui_module_bg_3: rgba(247, 247, 247, .05);--ui_module_bg_0_full: #303030;--ui_module_bg_3_full: #252525;--ui_popover_bg_1: #2c2c2c;--ui_popover_bg_2: rgba(44, 44, 44, .8);--ui_popover_bg_3: #323232;--ui_popover_bg_1_empty: rgba(44, 44, 44, 0);--ui_control_bg_black: rgba(255, 255, 255, .86);--ui_control_icon_white: #242424;--ui_control_tag_click: rgba(255, 255, 255, .1);--ui_control_bg: rgba(255, 255, 255, .04);--ui_control_card_bg_full: #242424;--ui_control_bg_deepgrey: rgba(247, 247, 247, .8);--ui_control_bg_full: #232323;--ui_control_icon_black: #ffffff;--primary_white_1: #000000;--primary_white_2: rgba(0, 0, 0, .9);--primary_white_3: rgba(0, 0, 0, .7);--primary_white_4: rgba(0, 0, 0, .2);--primary_white_5: rgba(0, 0, 0, .1);--primary_black_1: rgba(255, 255, 255, .86);--primary_black_2: rgba(255, 255, 255, .6);--primary_black_3: rgba(255, 255, 255, .44);--primary_black_4: rgba(255, 255, 255, .3);--primary_black_5: rgba(255, 255, 255, .24);--primary_black_6: rgba(255, 255, 255, .16);--primary_black_7: rgba(255, 255, 255, .12);--primary_black_0: #ffffff;--primary_black_1_full: #dfdfdf;--ui_border: rgba(255, 255, 255, .04);--ui_line: rgba(255, 255, 255, .08);--ui_line_white: rgba(0, 0, 0, .08);--ui_line_dark: rgba(255, 255, 255, .1);--ui_line_deep_dark: rgba(255, 255, 255, .25);--ui_popover_line_white: rgba(255, 255, 255, .04);--ui_search_line_dark: rgba(255, 255, 255, .5);--ui_emptystate_color_grey_d9: #6d6d6d;--ui_emptystate_color_grey_cc: #585858;--ui_emptystate_color_grey_d8: #626262;--ui_emptystate_color_grey_8c: #3d3d3d;--ui_emptystate_color_grey_b6: #6b6b6b;--ui_emptystate_color_grey_ba: #696969;--ui_emptystate_color_grey_ec: #828282;--ui_emptystate_color_grey_72: #242424;--ui_emptystate_color_white_ff: #9b9b9b}}html,body,.miniApp,[data-ima-shadow-root]{--color-bg-homepage: var(--ui_frame_firstpage_bg_mac);--color-grey-0: var(--ui_frame_bg_grey_0);--color-grey-1: var(--ui_frame_bg_grey_1);--color-grey-2: var(--ui_frame_bg_grey_2);--color-grey-3: var(--ui_frame_bg_grey_3);--color-light-grey: var(--ui_frame_bg_grey_light);--color-bg-0: var(--ui_module_bg_0);--color-bg-1: var(--ui_module_bg_1);--color-bg-2: var(--ui_module_bg_2);--color-bg-3: var(--ui_module_bg_3);--color-bg-4: var(--ui_line);--color-bg-7: var(--primary_black_7);--color-bg-collect: var(--ui_emptystate_color_grey_d9);--color-popover-bg-1: var(--ui_popover_bg_1);--color-popover-bg-2: var(--ui_popover_bg_2);--color-popover-bg-3: var(--ui_popover_bg_3);--color-white-1: var(--primary_white_1);--color-white-2: var(--primary_white_2);--color-white-3: var(--primary_white_4);--color-black-1: var(--ui_control_bg_black);--color-hover-highlight-1: var(--ui_color_green_highlight);--color-hover-highlight-2: var(--ui_color_green_click);--color-green-0: var(--common_color_green_dark);--color-green-1: var(--brand_color_green_primary);--color-green-2: var(--common_color_green);--color-green-3: var(--common_color_green_light);--color-green-5: var(--common_color_green);--color-green-6: var(--brand_color_green_primary);--color-green-7: var(--ui_color_greygreen);--color-blue: var(--common_color_blue);--color-red: var(--common_color_red);--color-orange: var(--common_color_orange);--color-yellow: var(--common_color_yellow);--color-grey: var(--ui_color_coldgrey);--color-purple-note: var(--common_color_purple);--color-text-1: var(--primary_black_1);--color-text-2: var(--primary_black_2);--color-text-3: var(--primary_black_3);--color-text-4: var(--primary_black_4);--color-text-5: var(--primary_black_5);--color-text-6: var(--primary_black_6);--color-text-7: var(--primary_black_7);--color-text-a1: var(--primary_black_1);--color-text-a2: var(--primary_black_2);--color-text-a3: var(--primary_black_3);--color-text-green-1: var(--brand_color_green_primary);--color-border: var(--ui_border);--color-border-2: var(--ui_border);--color-line: var(--ui_line);--color-white-line-2: var(--ui_line_white);--color-dark-line: var(--ui_line_dark);--color-search-dark-line: var(--ui_search_line_dark);--color-dark-line-2: var(--primary_black_4);--color-border-mind: var(--primary_white_5);--color-icon: var(--primary_black_1);--color-deep-research-progress-empty: var(--primary_black_7);--color-scrollbar: var(--ui_emptystate_color_grey_d9);--color-image-loading-right: var(--common_color_yellowgreen);--color-mini-app-bg: var(--ui_frame_bg_grey_0);--color-grey-4: #f2f2f2;--color-bg-5: rgba(210, 210, 210, .5);--color-bg-8: #f5f5f5;--color-bg-box-selection: rgba(32, 90, 239, .08);--color-popover-bg-4: rgba(255, 255, 255, .1);--color-popover-bg-5: rgba(0, 0, 0, .25);--color-white-4: rgba(255, 255, 255, .97);--color-red-2: #f44837;--color-text-1-d: #ffffff;--color-text-number-1: #b3b3b3;--color-text-blue-1: #576b95;--color-text-blue-2: rgba(87, 107, 149, .3);--color-white-line: #ffffff;--color-border-box-selection: rgba(32, 90, 239, .5);--color-shadow-line: rgba(0, 0, 0, .15);--color-gradient-1: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 52.17%, #fff 100%);--color-gradient-2: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 71.03%);--color-gradient-3: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 79.17%);--color-text-sub-title: rgba(0, 0, 0, .9);--td-brand-color: var(--primary_black_1);--td-text-color-primary: var(--primary_black_1);--td-text-color-placeholder: var(--primary_black_5);--td-comp-paddingTB-xxl: 16px;--td-comp-paddingLR-xxl: 16px;--td-bg-color-component: var(--ui_module_bg_2);--td-bg-color-specialcomponent: var(--ui_module_bg_2);--color-chosed: rgba(101, 171, 133, .1);--deep-dark-line: rgba(0, 0, 0, .5);--font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif;font-family:var(--font-family);--color-mask: #00000066;--max-width-qa: 768px;--min-width-qa: 338px;--max-width-qa-knowledge: 800px;--knowledge-base-input-height: 72px;--color-image-loading-left: #4dee9e;--color-a1: var(--primary_black_1);--color-a4: var(--primary_black_4);--color-bg-grey: #f6f7fa}#root{--image-size: 480px;--small-image-size: 157px}.miniApp{--image-size: 360px;--small-image-size: 117px}.text-limit-line1{-webkit-line-clamp:1;line-clamp:1;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;word-break:break-all}.text-limit-line2{-webkit-line-clamp:2;line-clamp:2;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;word-break:break-all}.text-limit-line3{-webkit-line-clamp:3;line-clamp:3;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;word-break:break-all}.text-limit-line4{-webkit-line-clamp:4;line-clamp:4;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;word-break:break-all}.text-limit-line6{-webkit-line-clamp:6;line-clamp:6;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;word-break:break-all}.text-limit-line7{-webkit-line-clamp:7;line-clamp:7;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;word-break:break-all}.notificationDialogBoxShadow{box-shadow:0 38px 90px #00000040,0 0 1px 0 var(--primary_black_6);-webkit-backdrop-filter:blur(70px);backdrop-filter:blur(70px)}.hide-scroll-bar{scrollbar-width:none;-ms-overflow-style:none}.hide-scroll-bar::-webkit-scrollbar{-webkit-appearance:none;width:0!important;height:0!important;display:none;background:transparent;visibility:hidden;color:#fff}.hide-scroll-bar::-webkit-scrollbar-track{width:0!important;height:0!important;display:none}.hide-scroll-bar::-webkit-scrollbar-thumb{width:0!important;height:0!important;display:none}@keyframes svg-icon-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-switch.t-is-checked,.t-switch.t-is-checked:hover{background-color:#478cf6}.t-switch:hover{background-color:#00000017}.t-switch.t-size-s .t-switch__handle{top:1.5px;left:1.5px;width:13px;height:13px}.scrollbar::-webkit-scrollbar{display:initial!important;width:4px;background-color:transparent}.scrollbar::-webkit-scrollbar-button{display:none}.scrollbar::-webkit-scrollbar-thumb{width:4px;background:transparent;border-radius:8px;opacity:0;transition:opacity .1s ease-in}.scrollbar:hover::-webkit-scrollbar-thumb{background-color:var(--color-text-7);opacity:1}.t-popup__content.context-menu-wrap,.context-menu-wrap{padding:8px;border-radius:8px;border:.5px solid var(--color-border);-webkit-backdrop-filter:blur(70px);backdrop-filter:blur(70px);box-shadow:0 8px 40px #00000040,0 0 .5px 0 var(--color-text-6),0 0 3px #ffffff1a inset}:root{--td-screen-xs: 320px;--td-screen-sm: 768px;--td-screen-md: 992px;--td-screen-lg: 1200px;--td-screen-xl: 1400px;--td-screen-xxl: 1880px}@-moz-document url-prefix(){.narrow-scrollbar{scrollbar-color:var(--td-scrollbar-color) transparent;scrollbar-width:thin}}.narrow-scrollbar::-webkit-scrollbar{width:8px;height:8px}.narrow-scrollbar::-webkit-scrollbar-thumb{border:2px solid transparent;background-clip:content-box;background-color:var(--td-scrollbar-color);border-radius:15px}.narrow-scrollbar::-webkit-scrollbar-thumb:vertical:hover,.narrow-scrollbar::-webkit-scrollbar-thumb:horizontal:hover{background-color:var(--td-scrollbar-hover-color)}.t-fake-arrow path{transition:d .2s;stroke:currentcolor}.t-fake-arrow--active path{d:path("M3.75 10.2002L7.99274 5.7998L12.2361 10.0425")}.t-slide-down-enter-active,.t-slide-down-leave-active{transition:height .2s cubic-bezier(.38,0,.24,1)}:root,:root[theme-mode=light]{--td-brand-color-1: #f2f3ff;--td-brand-color-2: #d9e1ff;--td-brand-color-3: #b5c7ff;--td-brand-color-4: #8eabff;--td-brand-color-5: #618dff;--td-brand-color-6: #366ef4;--td-brand-color-7: #0052d9;--td-brand-color-8: #003cab;--td-brand-color-9: #002a7c;--td-brand-color-10: #001a57;--td-warning-color-1: #fff1e9;--td-warning-color-2: #ffd9c2;--td-warning-color-3: #ffb98c;--td-warning-color-4: #fa9550;--td-warning-color-5: #e37318;--td-warning-color-6: #be5a00;--td-warning-color-7: #954500;--td-warning-color-8: #713300;--td-warning-color-9: #532300;--td-warning-color-10: #3b1700;--td-error-color-1: #fff0ed;--td-error-color-2: #ffd8d2;--td-error-color-3: #ffb9b0;--td-error-color-4: #ff9285;--td-error-color-5: #f6685d;--td-error-color-6: #d54941;--td-error-color-7: #ad352f;--td-error-color-8: #881f1c;--td-error-color-9: #68070a;--td-error-color-10: #490002;--td-success-color-1: #e3f9e9;--td-success-color-2: #c6f3d7;--td-success-color-3: #92dab2;--td-success-color-4: #56c08d;--td-success-color-5: #2ba471;--td-success-color-6: #008858;--td-success-color-7: #006c45;--td-success-color-8: #005334;--td-success-color-9: #003b23;--td-success-color-10: #002515;--td-gray-color-1: #f3f3f3;--td-gray-color-2: #eee;--td-gray-color-3: #e8e8e8;--td-gray-color-4: #ddd;--td-gray-color-5: #c6c6c6;--td-gray-color-6: #a6a6a6;--td-gray-color-7: #8b8b8b;--td-gray-color-8: #777;--td-gray-color-9: #5e5e5e;--td-gray-color-10: #4b4b4b;--td-gray-color-11: #393939;--td-gray-color-12: #2c2c2c;--td-gray-color-13: #242424;--td-gray-color-14: #181818;--td-font-white-1: #ffffff;--td-font-white-2: rgba(255, 255, 255, .55);--td-font-white-3: rgba(255, 255, 255, .35);--td-font-white-4: rgba(255, 255, 255, .22);--td-font-gray-1: rgba(0, 0, 0, .9);--td-font-gray-2: rgba(0, 0, 0, .6);--td-font-gray-3: rgba(0, 0, 0, .4);--td-font-gray-4: rgba(0, 0, 0, .26);--td-brand-color: var(--td-brand-color-7);--td-warning-color: var(--td-warning-color-5);--td-error-color: var(--td-error-color-6);--td-success-color: var(--td-success-color-5);--td-brand-color-hover: var(--td-brand-color-6);--td-brand-color-focus: var(--td-brand-color-2);--td-brand-color-active: var(--td-brand-color-8);--td-brand-color-disabled: var(--td-brand-color-3);--td-brand-color-light: var(--td-brand-color-1);--td-brand-color-light-hover: var(--td-brand-color-2);--td-warning-color-hover: var(--td-warning-color-4);--td-warning-color-focus: var(--td-warning-color-2);--td-warning-color-active: var(--td-warning-color-6);--td-warning-color-disabled: var(--td-warning-color-3);--td-warning-color-light: var(--td-warning-color-1);--td-warning-color-light-hover: var(--td-warning-color-2);--td-error-color-hover: var(--td-error-color-5);--td-error-color-focus: var(--td-error-color-2);--td-error-color-active: var(--td-error-color-7);--td-error-color-disabled: var(--td-error-color-3);--td-error-color-light: var(--td-error-color-1);--td-error-color-light-hover: var(--td-error-color-2);--td-success-color-hover: var(--td-success-color-4);--td-success-color-focus: var(--td-success-color-2);--td-success-color-active: var(--td-success-color-6);--td-success-color-disabled: var(--td-success-color-3);--td-success-color-light: var(--td-success-color-1);--td-success-color-light-hover: var(--td-success-color-2);--td-mask-active: rgba(0, 0, 0, .6);--td-mask-disabled: rgba(255, 255, 255, .6);--td-bg-color-page: var(--td-gray-color-2);--td-bg-color-container: #fff;--td-bg-color-container-hover: var(--td-gray-color-1);--td-bg-color-container-active: var(--td-gray-color-3);--td-bg-color-container-select: #fff;--td-bg-color-secondarycontainer: var(--td-gray-color-1);--td-bg-color-secondarycontainer-hover: var(--td-gray-color-2);--td-bg-color-secondarycontainer-active: var(--td-gray-color-4);--td-bg-color-component: var(--td-gray-color-3);--td-bg-color-component-hover: var(--td-gray-color-4);--td-bg-color-component-active: var(--td-gray-color-6);--td-bg-color-secondarycomponent: var(--td-gray-color-4);--td-bg-color-secondarycomponent-hover: var(--td-gray-color-5);--td-bg-color-secondarycomponent-active: var(--td-gray-color-6);--td-bg-color-component-disabled: var(--td-gray-color-2);--td-bg-color-specialcomponent: #fff;--td-text-color-primary: var(--td-font-gray-1);--td-text-color-secondary: var(--td-font-gray-2);--td-text-color-placeholder: var(--td-font-gray-3);--td-text-color-disabled: var(--td-font-gray-4);--td-text-color-anti: #fff;--td-text-color-brand: var(--td-brand-color-7);--td-text-color-link: var(--td-brand-color-8);--td-border-level-1-color: var(--td-gray-color-3);--td-component-stroke: var(--td-gray-color-3);--td-border-level-2-color: var(--td-gray-color-4);--td-component-border: var(--td-gray-color-4);--td-shadow-1: 0 1px 10px rgba(0, 0, 0, .05), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);--td-shadow-2: 0 3px 14px 2px rgba(0, 0, 0, .05), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%);--td-shadow-3: 0 6px 30px 5px rgba(0, 0, 0, .05), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%);--td-shadow-inset-top: inset 0 .5px 0 #dcdcdc;--td-shadow-inset-right: inset .5px 0 0 #dcdcdc;--td-shadow-inset-bottom: inset 0 -.5px 0 #dcdcdc;--td-shadow-inset-left: inset -.5px 0 0 #dcdcdc;--td-table-shadow-color: rgba(0, 0, 0, .08);--td-scrollbar-color: rgba(0, 0, 0, .1);--td-scrollbar-hover-color: rgba(0, 0, 0, .3);--td-scroll-track-color: #fff}:root[theme-mode=dark]{--td-brand-color-1: #1b2f51;--td-brand-color-2: #173463;--td-brand-color-3: #143975;--td-brand-color-4: #103d88;--td-brand-color-5: #0d429a;--td-brand-color-6: #054bbe;--td-brand-color-7: #2667d4;--td-brand-color-8: #4582e6;--td-brand-color-9: #699ef5;--td-brand-color-10: #96bbf8;--td-warning-color-1: #4f2a1d;--td-warning-color-2: #582f21;--td-warning-color-3: #733c23;--td-warning-color-4: #a75d2b;--td-warning-color-5: #cf6e2d;--td-warning-color-6: #dc7633;--td-warning-color-7: #e8935c;--td-warning-color-8: #ecbf91;--td-warning-color-9: #eed7bf;--td-warning-color-10: #f3e9dc;--td-error-color-1: #472324;--td-error-color-2: #5e2a2d;--td-error-color-3: #703439;--td-error-color-4: #83383e;--td-error-color-5: #a03f46;--td-error-color-6: #c64751;--td-error-color-7: #de6670;--td-error-color-8: #ec888e;--td-error-color-9: #edb1b6;--td-error-color-10: #eeced0;--td-success-color-1: #193a2a;--td-success-color-2: #1a4230;--td-success-color-3: #17533d;--td-success-color-4: #0d7a55;--td-success-color-5: #059465;--td-success-color-6: #43af8a;--td-success-color-7: #46bf96;--td-success-color-8: #80d2b6;--td-success-color-9: #b4e1d3;--td-success-color-10: #deede8;--td-gray-color-1: #f3f3f3;--td-gray-color-2: #eee;--td-gray-color-3: #e8e8e8;--td-gray-color-4: #ddd;--td-gray-color-5: #c6c6c6;--td-gray-color-6: #a6a6a6;--td-gray-color-7: #8b8b8b;--td-gray-color-8: #777;--td-gray-color-9: #5e5e5e;--td-gray-color-10: #4b4b4b;--td-gray-color-11: #393939;--td-gray-color-12: #2c2c2c;--td-gray-color-13: #242424;--td-gray-color-14: #181818;--td-font-white-1: rgba(255, 255, 255, .9);--td-font-white-2: rgba(255, 255, 255, .55);--td-font-white-3: rgba(255, 255, 255, .35);--td-font-white-4: rgba(255, 255, 255, .22);--td-font-gray-1: rgba(0, 0, 0, .9);--td-font-gray-2: rgba(0, 0, 0, .6);--td-font-gray-3: rgba(0, 0, 0, .4);--td-font-gray-4: rgba(0, 0, 0, .26);--td-brand-color: var(--td-brand-color-8);--td-warning-color: var(--td-warning-color-5);--td-error-color: var(--td-error-color-6);--td-success-color: var(--td-success-color-5);--td-brand-color-hover: var(--td-brand-color-7);--td-brand-color-focus: var(--td-brand-color-2);--td-brand-color-active: var(--td-brand-color-9);--td-brand-color-disabled: var(--td-brand-color-3);--td-brand-color-light: var(--td-brand-color-1);--td-brand-color-light-hover: var(--td-brand-color-2);--td-warning-color-hover: var(--td-warning-color-4);--td-warning-color-focus: var(--td-warning-color-2);--td-warning-color-active: var(--td-warning-color-6);--td-warning-color-disabled: var(--td-warning-color-3);--td-warning-color-light: var(--td-warning-color-1);--td-warning-color-light-hover: var(--td-warning-color-2);--td-error-color-hover: var(--td-error-color-5);--td-error-color-focus: var(--td-error-color-2);--td-error-color-active: var(--td-error-color-7);--td-error-color-disabled: var(--td-error-color-3);--td-error-color-light: var(--td-error-color-1);--td-error-color-light-hover: var(--td-error-color-2);--td-success-color-hover: var(--td-success-color-4);--td-success-color-focus: var(--td-success-color-2);--td-success-color-active: var(--td-success-color-6);--td-success-color-disabled: var(--td-success-color-3);--td-success-color-light: var(--td-success-color-1);--td-success-color-light-hover: var(--td-success-color-2);--td-mask-active: rgba(0, 0, 0, .4);--td-mask-disabled: rgba(0, 0, 0, .6);--td-bg-color-page: var(--td-gray-color-14);--td-bg-color-container: var(--td-gray-color-13);--td-bg-color-container-hover: var(--td-gray-color-12);--td-bg-color-container-active: var(--td-gray-color-10);--td-bg-color-container-select: var(--td-gray-color-9);--td-bg-color-secondarycontainer: var(--td-gray-color-12);--td-bg-color-secondarycontainer-hover: var(--td-gray-color-11);--td-bg-color-secondarycontainer-active: var(--td-gray-color-9);--td-bg-color-component: var(--td-gray-color-11);--td-bg-color-component-hover: var(--td-gray-color-10);--td-bg-color-component-active: var(--td-gray-color-9);--td-bg-color-secondarycomponent: var(--td-gray-color-10);--td-bg-color-secondarycomponent-hover: var(--td-gray-color-9);--td-bg-color-secondarycomponent-active: var(--td-gray-color-8);--td-bg-color-component-disabled: var(--td-gray-color-12);--td-bg-color-specialcomponent: transparent;--td-text-color-primary: var(--td-font-white-1);--td-text-color-secondary: var(--td-font-white-2);--td-text-color-placeholder: var(--td-font-white-3);--td-text-color-disabled: var(--td-font-white-4);--td-text-color-anti: #fff;--td-text-color-brand: var(--td-brand-color-8);--td-text-color-link: var(--td-brand-color-8);--td-border-level-1-color: var(--td-gray-color-11);--td-component-stroke: var(--td-gray-color-11);--td-border-level-2-color: var(--td-gray-color-9);--td-component-border: var(--td-gray-color-9);--td-shadow-1: 0 4px 6px rgba(0, 0, 0, .06), 0 1px 10px rgba(0, 0, 0, 8%), 0 2px 4px rgba(0, 0, 0, 12%);--td-shadow-2: 0 8px 10px rgba(0, 0, 0, .12), 0 3px 14px rgba(0, 0, 0, 10%), 0 5px 5px rgba(0, 0, 0, 16%);--td-shadow-3: 0 16px 24px rgba(0, 0, 0, .14), 0 6px 30px rgba(0, 0, 0, 12%), 0 8px 10px rgba(0, 0, 0, 20%);--td-shadow-inset-top: inset 0 .5px 0 #5e5e5e;--td-shadow-inset-right: inset .5px 0 0 #5e5e5e;--td-shadow-inset-bottom: inset 0 -.5px 0 #5e5e5e;--td-shadow-inset-left: inset -.5px 0 0 #5e5e5e;--td-table-shadow-color: rgba(0, 0, 0, .55);--td-scrollbar-color: rgba(255, 255, 255, .1);--td-scrollbar-hover-color: rgba(255, 255, 255, .3);--td-scroll-track-color: #333}:root{--td-radius-small: 2px;--td-radius-default: 3px;--td-radius-medium: 6px;--td-radius-large: 9px;--td-radius-extraLarge: 12px;--td-radius-round: 999px;--td-radius-circle: 50%}:root{--td-font-family: PingFang SC, Microsoft YaHei, Arial Regular;--td-font-family-medium: PingFang SC, Microsoft YaHei, Arial Medium;--td-font-size-link-small: 12px;--td-font-size-link-medium: 14px;--td-font-size-link-large: 16px;--td-font-size-mark-small: 12px;--td-font-size-mark-medium: 14px;--td-font-size-body-small: 12px;--td-font-size-body-medium: 14px;--td-font-size-body-large: 16px;--td-font-size-title-small: 14px;--td-font-size-title-medium: 16px;--td-font-size-title-large: 20px;--td-font-size-headline-small: 24px;--td-font-size-headline-medium: 28px;--td-font-size-headline-large: 36px;--td-font-size-display-medium: 48px;--td-font-size-display-large: 64px;--td-line-height-link-small: 20px;--td-line-height-link-medium: 22px;--td-line-height-link-large: 24px;--td-line-height-mark-small: 20px;--td-line-height-mark-medium: 22px;--td-line-height-body-small: 20px;--td-line-height-body-medium: 22px;--td-line-height-body-large: 24px;--td-line-height-title-small: 22px;--td-line-height-title-medium: 24px;--td-line-height-title-large: 28px;--td-line-height-headline-small: 32px;--td-line-height-headline-medium: 36px;--td-line-height-headline-large: 44px;--td-line-height-display-medium: 56px;--td-line-height-display-large: 72px;--td-font-link-small: var(--td-font-size-link-small) / var(--td-line-height-link-small) var(--td-font-family);--td-font-link-medium: var(--td-font-size-link-medium) / var(--td-line-height-link-medium) var(--td-font-family);--td-font-link-large: var(--td-font-size-link-large) / var(--td-line-height-link-large) var(--td-font-family);--td-font-mark-small: 600 var(--td-font-size-mark-small) / var(--td-line-height-mark-small) var(--td-font-family);--td-font-mark-medium: 600 var(--td-font-size-mark-medium) / var(--td-line-height-mark-medium) var(--td-font-family);--td-font-body-small: var(--td-font-size-body-small) / var(--td-line-height-body-small) var(--td-font-family);--td-font-body-medium: var(--td-font-size-body-medium) / var(--td-line-height-body-medium) var(--td-font-family);--td-font-body-large: var(--td-font-size-body-large) / var(--td-line-height-body-large) var(--td-font-family);--td-font-title-small: 600 var(--td-font-size-title-small) / var(--td-line-height-title-small) var(--td-font-family);--td-font-title-medium: 600 var(--td-font-size-title-medium) / var(--td-line-height-title-medium) var(--td-font-family);--td-font-title-large: 600 var(--td-font-size-title-large) / var(--td-line-height-title-large) var(--td-font-family);--td-font-headline-small: 600 var(--td-font-size-headline-small) / var(--td-line-height-headline-small) var(--td-font-family);--td-font-headline-medium: 600 var(--td-font-size-headline-medium) / var(--td-line-height-headline-medium) var(--td-font-family);--td-font-headline-large: 600 var(--td-font-size-headline-large) / var(--td-line-height-headline-large) var(--td-font-family);--td-font-display-medium: 600 var(--td-font-size-display-medium) / var(--td-line-height-display-medium) var(--td-font-family);--td-font-display-large: 600 var(--td-font-size-display-large) / var(--td-line-height-display-large) var(--td-font-family)}:root{--td-size-1: 2px;--td-size-2: 4px;--td-size-3: 6px;--td-size-4: 8px;--td-size-5: 12px;--td-size-6: 16px;--td-size-7: 20px;--td-size-8: 24px;--td-size-9: 28px;--td-size-10: 32px;--td-size-11: 36px;--td-size-12: 40px;--td-size-13: 48px;--td-size-14: 56px;--td-size-15: 64px;--td-size-16: 72px;--td-comp-size-xxxs: var(--td-size-6);--td-comp-size-xxs: var(--td-size-7);--td-comp-size-xs: var(--td-size-8);--td-comp-size-s: var(--td-size-9);--td-comp-size-m: var(--td-size-10);--td-comp-size-l: var(--td-size-11);--td-comp-size-xl: var(--td-size-12);--td-comp-size-xxl: var(--td-size-13);--td-comp-size-xxxl: var(--td-size-14);--td-comp-size-xxxxl: var(--td-size-15);--td-comp-size-xxxxxl: var(--td-size-16);--td-pop-padding-s: var(--td-size-2);--td-pop-padding-m: var(--td-size-3);--td-pop-padding-l: var(--td-size-4);--td-pop-padding-xl: var(--td-size-5);--td-pop-padding-xxl: var(--td-size-6);--td-comp-paddingLR-xxs: var(--td-size-1);--td-comp-paddingLR-xs: var(--td-size-2);--td-comp-paddingLR-s: var(--td-size-4);--td-comp-paddingLR-m: var(--td-size-5);--td-comp-paddingLR-l: var(--td-size-6);--td-comp-paddingLR-xl: var(--td-size-8);--td-comp-paddingLR-xxl: var(--td-size-10);--td-comp-paddingTB-xxs: var(--td-size-1);--td-comp-paddingTB-xs: var(--td-size-2);--td-comp-paddingTB-s: var(--td-size-4);--td-comp-paddingTB-m: var(--td-size-5);--td-comp-paddingTB-l: var(--td-size-6);--td-comp-paddingTB-xl: var(--td-size-8);--td-comp-paddingTB-xxl: var(--td-size-10);--td-comp-margin-xxs: var(--td-size-1);--td-comp-margin-xs: var(--td-size-2);--td-comp-margin-s: var(--td-size-4);--td-comp-margin-m: var(--td-size-5);--td-comp-margin-l: var(--td-size-6);--td-comp-margin-xl: var(--td-size-7);--td-comp-margin-xxl: var(--td-size-8);--td-comp-margin-xxxl: var(--td-size-10);--td-comp-margin-xxxxl: var(--td-size-12)}#mobile .t-image-viewer__utils,.t-textarea__limit{display:none}.t-dialog{width:auto;border-radius:8px;border:1.5px solid var(--color-white-line);background:var(--ui_popover_bg_2);box-shadow:0 0 1px #0009,0 0 2px #0000000d,0 38px 90px #00000040;-webkit-backdrop-filter:blur(35px);backdrop-filter:blur(35px)}.t-default-menu{width:144px!important;padding:0;border-radius:8px;border:1px solid var(--color-white-line);background:var(--ui_popover_bg_2);box-shadow:0 0 3px #ffffff1a inset,0 0 .5px #0003,0 8px 40px #00000040;-webkit-backdrop-filter:blur(40px);backdrop-filter:blur(40px)}.t-default-menu .t-menu__item.t-is-active:not(.t-is-opened) .t-icon{color:var(--primary_black_1)}.t-default-menu__inner .t-menu--scroll{padding:8px}.t-default-menu .t-menu__item{padding:8px;color:var(--primary_black_1)}.t-message{position:relative;background-color:var(--ui_control_bg_black);color:var(--primary_white_1)}.t-icon{position:relative;box-sizing:border-box;overflow:hidden;border:none;z-index:2}.t-message:after{display:block;position:absolute;left:18px;top:50%;transform:translateY(-50%);content:"";width:16px;height:16px;border-radius:50%;z-index:1;background-color:var(--primary_white_1)}.ts-is-error .t-icon{color:var(--common_color_red-2)!important}.t-is-info .t-icon,.t-is-question .t-icon{color:gray!important}.tips{animation:slideDown .15s ease-out forwards}.t-input--focused{border:none;box-shadow:none;outline:none}.t-textarea__inner:focus{-webkit-box-shadow:none!important}@keyframes slideDown{0%{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}:root,:root[theme-mode=light]{--brand-main: var(--td-brand-color-10);--td-brand-color-light: var(--td-brand-color-1);--td-brand-color-focus: var(--td-brand-color-2);--td-brand-color-disabled: var(--td-brand-color-3);--td-brand-color-hover: var(--td-brand-color-9);--td-brand-color: var(--td-brand-color-10);--td-brand-color-active: var(--td-brand-color-10);--td-brand-color-1: #f3f3f3;--td-brand-color-2: #e3e3e3;--td-brand-color-3: #c6c6c6;--td-brand-color-4: #a9a9a9;--td-brand-color-5: #8c8c8c;--td-brand-color-6: #717171;--td-brand-color-7: #595959;--td-brand-color-8: #434343;--td-brand-color-9: #303030;--td-brand-color-10: #000000;--td-warning-color-1: #fef3e6;--td-warning-color-2: #f9e0c7;--td-warning-color-3: #f7c797;--td-warning-color-4: #f2995f;--td-warning-color-5: #ed7b2f;--td-warning-color-6: #d35a21;--td-warning-color-7: #ba431b;--td-warning-color-8: #9e3610;--td-warning-color-9: #842b0b;--td-warning-color-10: #5a1907;--td-warning-color: var(--td-warning-color-5);--td-warning-color-hover: var(--td-warning-color-4);--td-warning-color-focus: var(--td-warning-color-2);--td-warning-color-active: var(--td-warning-color-6);--td-warning-color-disabled: var(--td-warning-color-3);--td-warning-color-light: var(--td-warning-color-1);--td-error-color-1: #fdecee;--td-error-color-2: #f9d7d9;--td-error-color-3: #f8b9be;--td-error-color-4: #f78d94;--td-error-color-5: #f36d78;--td-error-color-6: #e34d59;--td-error-color-7: #c9353f;--td-error-color-8: #b11f26;--td-error-color-9: #951114;--td-error-color-10: #680506;--td-error-color: var(--td-error-color-6);--td-error-color-hover: var(--td-error-color-5);--td-error-color-focus: var(--td-error-color-2);--td-error-color-active: var(--td-error-color-7);--td-error-color-disabled: var(--td-error-color-3);--td-error-color-light: var(--td-error-color-1);--td-success-color-1: #e8f8f2;--td-success-color-2: #bcebdc;--td-success-color-3: #85dbbe;--td-success-color-4: #48c79c;--td-success-color-5: #00a870;--td-success-color-6: #078d5c;--td-success-color-7: #067945;--td-success-color-8: #056334;--td-success-color-9: #044f2a;--td-success-color-10: #033017;--td-success-color: var(--td-success-color-5);--td-success-color-hover: var(--td-success-color-4);--td-success-color-focus: var(--td-success-color-2);--td-success-color-active: var(--td-success-color-6);--td-success-color-disabled: var(--td-success-color-3);--td-success-color-light: var(--td-success-color-1);--td-gray-color-1: #f3f3f3;--td-gray-color-2: #eee;--td-gray-color-3: #e7e7e7;--td-gray-color-4: #dcdcdc;--td-gray-color-5: #c5c5c5;--td-gray-color-6: #a6a6a6;--td-gray-color-7: #8b8b8b;--td-gray-color-8: #777;--td-gray-color-9: #5e5e5e;--td-gray-color-10: #4b4b4b;--td-gray-color-11: #383838;--td-gray-color-12: #2c2c2c;--td-gray-color-13: #242424;--td-gray-color-14: #181818;--td-bg-color-container: #fff;--td-bg-color-container-select: #fff;--td-bg-color-page: var(--td-gray-color-2);--td-bg-color-container-hover: var(--td-gray-color-1);--td-bg-color-container-active: var(--td-gray-color-3);--td-bg-color-secondarycontainer: var(--td-gray-color-1);--td-bg-color-secondarycontainer-hover: var(--td-gray-color-2);--td-bg-color-secondarycontainer-active: var(--td-gray-color-4);--td-bg-color-component: var(--td-gray-color-3);--td-bg-color-component-hover: var(--td-gray-color-4);--td-bg-color-component-active: var(--td-gray-color-6);--td-bg-color-component-disabled: var(--td-gray-color-2);--td-component-stroke: var(--td-gray-color-3);--td-component-border: var(--td-gray-color-4);--td-font-white-1: #ffffff;--td-font-white-2: rgba(255, 255, 255, .55);--td-font-white-3: rgba(255, 255, 255, .35);--td-font-white-4: rgba(255, 255, 255, .22);--td-font-gray-1: rgba(0, 0, 0, .9);--td-font-gray-2: rgba(0, 0, 0, .6);--td-font-gray-3: rgba(0, 0, 0, .4);--td-font-gray-4: rgba(0, 0, 0, .26);--td-brand-color-light-hover: var(--td-brand-color-2);--td-warning-color-light-hover: var(--td-warning-color-2);--td-error-color-light-hover: var(--td-error-color-2);--td-success-color-light-hover: var(--td-success-color-2);--td-bg-color-secondarycomponent: var(--td-gray-color-4);--td-bg-color-secondarycomponent-hover: var(--td-gray-color-5);--td-bg-color-secondarycomponent-active: var(--td-gray-color-6);--td-table-shadow-color: rgba(0, 0, 0, 8%);--td-scrollbar-color: rgba(0, 0, 0, 10%);--td-scrollbar-hover-color: rgba(0, 0, 0, 30%);--td-scroll-track-color: #fff;--td-bg-color-specialcomponent: #fff;--td-border-level-1-color: var(--td-gray-color-3);--td-border-level-2-color: var(--td-gray-color-4);--td-shadow-inset-top: inset 0 .5px 0 #dcdcdc;--td-shadow-inset-right: inset .5px 0 0 #dcdcdc;--td-shadow-inset-bottom: inset 0 -.5px 0 #dcdcdc;--td-shadow-inset-left: inset -.5px 0 0 #dcdcdc;--td-mask-active: rgba(0, 0, 0, .6);--td-mask-disabled: rgba(255, 255, 255, .6);--td-font-family: PingFang SC, Microsoft YaHei, Arial Regular;--td-font-family-medium: PingFang SC, Microsoft YaHei, Arial Medium;--td-font-size-link-small: 12px;--td-font-size-link-medium: 14px;--td-font-size-link-large: 16px;--td-font-size-mark-small: 12px;--td-font-size-mark-medium: 14px;--td-font-size-body-small: 12px;--td-font-size-body-medium: 14px;--td-font-size-body-large: 16px;--td-font-size-title-small: 14px;--td-font-size-title-medium: 16px;--td-font-size-title-large: 20px;--td-font-size-headline-small: 24px;--td-font-size-headline-medium: 28px;--td-font-size-headline-large: 36px;--td-font-size-display-medium: 48px;--td-font-size-display-large: 64px;--td-line-height-common: 8px;--td-line-height-link-small: calc(var(--td-font-size-link-small) + var(--td-line-height-common));--td-line-height-link-medium: calc(var(--td-font-size-link-medium) + var(--td-line-height-common));--td-line-height-link-large: calc(var(--td-font-size-link-large) + var(--td-line-height-common));--td-line-height-mark-small: calc(var(--td-font-size-mark-small) + var(--td-line-height-common));--td-line-height-mark-medium: calc(var(--td-font-size-mark-medium) + var(--td-line-height-common));--td-line-height-body-small: calc(var(--td-font-size-body-small) + var(--td-line-height-common));--td-line-height-body-medium: calc(var(--td-font-size-body-medium) + var(--td-line-height-common));--td-line-height-body-large: calc(var(--td-font-size-body-large) + var(--td-line-height-common));--td-line-height-title-small: calc(var(--td-font-size-title-small) + var(--td-line-height-common));--td-line-height-title-medium: calc(var(--td-font-size-title-medium) + var(--td-line-height-common));--td-line-height-title-large: calc(var(--td-font-size-title-medium) + var(--td-line-height-common));--td-line-height-headline-small: calc(var(--td-font-size-headline-small) + var(--td-line-height-common));--td-line-height-headline-medium: calc(var(--td-font-size-headline-medium) + var(--td-line-height-common));--td-line-height-headline-large: calc(var(--td-font-size-headline-large) + var(--td-line-height-common));--td-line-height-display-medium: calc(var(--td-font-size-display-medium) + var(--td-line-height-common));--td-line-height-display-large: calc(var(--td-font-size-display-large) + var(--td-line-height-common));--td-font-link-small: var(--td-font-size-link-small) / var(--td-line-height-link-small) var(--td-font-family);--td-font-link-medium: var(--td-font-size-link-medium) / var(--td-line-height-link-medium) var(--td-font-family);--td-font-link-large: var(--td-font-size-link-large) / var(--td-line-height-link-large) var(--td-font-family);--td-font-mark-small: 600 var(--td-font-size-mark-small) / var(--td-line-height-mark-small) var(--td-font-family);--td-font-mark-medium: 600 var(--td-font-size-mark-medium) / var(--td-line-height-mark-medium) var(--td-font-family);--td-font-body-small: var(--td-font-size-body-small) / var(--td-line-height-body-small) var(--td-font-family);--td-font-body-medium: var(--td-font-size-body-medium) / var(--td-line-height-body-medium) var(--td-font-family);--td-font-body-large: var(--td-font-size-body-large) / var(--td-line-height-body-large) var(--td-font-family);--td-font-title-small: var(--td-font-size-title-small) / var(--td-line-height-title-small) var(--td-font-family);--td-font-title-medium: var(--td-font-size-title-medium) / var(--td-line-height-title-medium) var(--td-font-family);--td-font-title-large: var(--td-font-size-title-large) / var(--td-line-height-title-large) var(--td-font-family);--td-font-headline-small: var(--td-font-size-headline-small) / var(--td-line-height-headline-small) var(--td-font-family);--td-font-headline-medium: var(--td-font-size-headline-medium) / var(--td-line-height-headline-medium) var(--td-font-family);--td-font-headline-large: var(--td-font-size-headline-large) / var(--td-line-height-headline-large) var(--td-font-family);--td-font-display-medium: var(--td-font-size-display-medium) / var(--td-line-height-display-medium) var(--td-font-family);--td-font-display-large: var(--td-font-size-display-large) / var(--td-line-height-display-large) var(--td-font-family);--td-text-color-primary: var(--td-font-gray-1);--td-text-color-secondary: var(--td-font-gray-2);--td-text-color-placeholder: var(--td-font-gray-3);--td-text-color-disabled: var(--td-font-gray-4);--td-text-color-anti: #fff;--td-text-color-brand: var(--td-brand-color);--td-text-color-link: var(--td-brand-color);--td-radius-small: 2px;--td-radius-default: 3px;--td-radius-medium: 6px;--td-radius-large: 9px;--td-radius-extraLarge: 12px;--td-radius-round: 999px;--td-radius-circle: 50%;--td-shadow-1: 0 1px 10px rgba(0, 0, 0, .05), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);--td-shadow-2: 0 3px 14px 2px rgba(0, 0, 0, .05), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%);--td-shadow-3: 0 6px 30px 5px rgba(0, 0, 0, .05), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%);--td-size-1: 2px;--td-size-2: 4px;--td-size-3: 6px;--td-size-4: 8px;--td-size-5: 12px;--td-size-6: 16px;--td-size-7: 20px;--td-size-8: 24px;--td-size-9: 28px;--td-size-10: 32px;--td-size-11: 36px;--td-size-12: 40px;--td-size-13: 48px;--td-size-14: 56px;--td-size-15: 64px;--td-size-16: 72px;--td-comp-size-xxxs: var(--td-size-6);--td-comp-size-xxs: var(--td-size-7);--td-comp-size-xs: var(--td-size-8);--td-comp-size-s: var(--td-size-9);--td-comp-size-m: var(--td-size-10);--td-comp-size-l: var(--td-size-11);--td-comp-size-xl: var(--td-size-12);--td-comp-size-xxl: var(--td-size-13);--td-comp-size-xxxl: var(--td-size-14);--td-comp-size-xxxxl: var(--td-size-15);--td-comp-size-xxxxxl: var(--td-size-16);--td-pop-padding-s: var(--td-size-2);--td-pop-padding-m: var(--td-size-3);--td-pop-padding-l: var(--td-size-4);--td-pop-padding-xl: var(--td-size-5);--td-pop-padding-xxl: var(--td-size-6);--td-comp-paddingLR-xxs: var(--td-size-1);--td-comp-paddingLR-xs: var(--td-size-2);--td-comp-paddingLR-s: var(--td-size-4);--td-comp-paddingLR-m: var(--td-size-5);--td-comp-paddingLR-l: var(--td-size-6);--td-comp-paddingLR-xl: var(--td-size-8);--td-comp-paddingLR-xxl: var(--td-size-10);--td-comp-paddingTB-xxs: var(--td-size-1);--td-comp-paddingTB-xs: var(--td-size-2);--td-comp-paddingTB-s: var(--td-size-4);--td-comp-paddingTB-m: var(--td-size-5);--td-comp-paddingTB-l: var(--td-size-6);--td-comp-paddingTB-xl: var(--td-size-8);--td-comp-paddingTB-xxl: var(--td-size-10);--td-comp-margin-xxs: var(--td-size-1);--td-comp-margin-xs: var(--td-size-2);--td-comp-margin-s: var(--td-size-4);--td-comp-margin-m: var(--td-size-5);--td-comp-margin-l: var(--td-size-6);--td-comp-margin-xl: var(--td-size-7);--td-comp-margin-xxl: var(--td-size-8);--td-comp-margin-xxxl: var(--td-size-10);--td-comp-margin-xxxxl: var(--td-size-12)}:root[theme-mode=dark]{--brand-main: var(--td-brand-color-6);--td-brand-color-light: var(--td-brand-color-1);--td-brand-color-focus: var(--td-brand-color-2);--td-brand-color-disabled: var(--td-brand-color-3);--td-brand-color-hover: var(--td-brand-color-5);--td-brand-color: var(--td-brand-color-6);--td-brand-color-active: var(--td-brand-color-7);--td-brand-color-1: #8c8c8c20;--td-brand-color-2: #303030;--td-brand-color-3: #434343;--td-brand-color-4: #595959;--td-brand-color-5: #717171;--td-brand-color-6: #8c8c8c;--td-brand-color-7: #a9a9a9;--td-brand-color-8: #c6c6c6;--td-brand-color-9: #e3e3e3;--td-brand-color-10: #f3f3f3;--td-warning-color-1: #4f2a1d;--td-warning-color-2: #582f21;--td-warning-color-3: #733c23;--td-warning-color-4: #a75d2b;--td-warning-color-5: #cf6e2d;--td-warning-color-6: #dc7633;--td-warning-color-7: #e8935c;--td-warning-color-8: #ecbf91;--td-warning-color-9: #eed7bf;--td-warning-color-10: #f3e9dc;--td-error-color-1: #472324;--td-error-color-2: #5e2a2d;--td-error-color-3: #703439;--td-error-color-4: #83383e;--td-error-color-5: #a03f46;--td-error-color-6: #c64751;--td-error-color-7: #de6670;--td-error-color-8: #ec888e;--td-error-color-9: #edb1b6;--td-error-color-10: #eeced0;--td-success-color-1: #193a2a;--td-success-color-2: #1a4230;--td-success-color-3: #17533d;--td-success-color-4: #0d7a55;--td-success-color-5: #059465;--td-success-color-6: #43af8a;--td-success-color-7: #46bf96;--td-success-color-8: #80d2b6;--td-success-color-9: #b4e1d3;--td-success-color-10: #deede8;--td-gray-color-1: #f3f3f3;--td-gray-color-2: #eee;--td-gray-color-3: #e7e7e7;--td-gray-color-4: #dcdcdc;--td-gray-color-5: #c5c5c5;--td-gray-color-6: #a6a6a6;--td-gray-color-7: #8b8b8b;--td-gray-color-8: #777;--td-gray-color-9: #5e5e5e;--td-gray-color-10: #4b4b4b;--td-gray-color-11: #383838;--td-gray-color-12: #2c2c2c;--td-gray-color-13: #242424;--td-gray-color-14: #181818;--td-bg-color-page: var(--td-gray-color-14);--td-bg-color-container: var(--td-gray-color-13);--td-bg-color-container-hover: var(--td-gray-color-12);--td-bg-color-container-active: var(--td-gray-color-10);--td-bg-color-container-select: var(--td-gray-color-9);--td-bg-color-secondarycontainer: var(--td-gray-color-12);--td-bg-color-secondarycontainer-hover: var(--td-gray-color-11);--td-bg-color-secondarycontainer-active: var(--td-gray-color-9);--td-bg-color-component: var(--td-gray-color-11);--td-bg-color-component-hover: var(--td-gray-color-10);--td-bg-color-component-active: var(--td-gray-color-9);--td-bg-color-secondarycomponent: var(--td-gray-color-10);--td-bg-color-secondarycomponent-hover: var(--td-gray-color-9);--td-bg-color-secondarycomponent-active: var(--td-gray-color-8);--td-bg-color-component-disabled: var(--td-gray-color-12);--td-component-stroke: var(--td-gray-color-11);--td-component-border: var(--td-gray-color-9);--td-font-white-1: rgba(255, 255, 255, .9);--td-font-white-2: rgba(255, 255, 255, .55);--td-font-white-3: rgba(255, 255, 255, .35);--td-font-white-4: rgba(255, 255, 255, .22);--td-font-gray-1: rgba(0, 0, 0, .9);--td-font-gray-2: rgba(0, 0, 0, .6);--td-font-gray-3: rgba(0, 0, 0, .4);--td-font-gray-4: rgba(0, 0, 0, .26);--td-text-color-primary: var(--td-font-white-1);--td-text-color-secondary: var(--td-font-white-2);--td-text-color-placeholder: var(--td-font-white-3);--td-text-color-disabled: var(--td-font-white-4);--td-text-color-anti: #fff;--td-text-color-brand: var(--td-brand-color);--td-text-color-link: var(--td-brand-color);--td-table-shadow-color: rgba(0, 0, 0, 55%);--td-scrollbar-color: rgba(255, 255, 255, 10%);--td-scrollbar-hover-color: rgba(255, 255, 255, 30%);--td-scroll-track-color: #333;--td-bg-color-specialcomponent: transparent;--td-border-level-1-color: var(--td-gray-color-11);--td-border-level-2-color: var(--td-gray-color-9);--td-mask-active: rgba(0, 0, 0, .4);--td-mask-disabled: rgba(0, 0, 0, .6);--td-shadow-inset-top: inset 0 .5px 0 #5e5e5e;--td-shadow-inset-right: inset .5px 0 0 #5e5e5e;--td-shadow-inset-bottom: inset 0 -.5px 0 #5e5e5e;--td-shadow-inset-left: inset -.5px 0 0 #5e5e5e;--td-radius-small: 2px;--td-radius-default: 3px;--td-radius-medium: 6px;--td-radius-large: 9px;--td-radius-extraLarge: 12px;--td-radius-round: 999px;--td-radius-circle: 50%;--td-shadow-1: 0 1px 10px rgba(0, 0, 0, .05), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);--td-shadow-2: 0 3px 14px 2px rgba(0, 0, 0, .05), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%);--td-shadow-3: 0 6px 30px 5px rgba(0, 0, 0, .05), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%);--td-size-1: 2px;--td-size-2: 4px;--td-size-3: 6px;--td-size-4: 8px;--td-size-5: 12px;--td-size-6: 16px;--td-size-7: 20px;--td-size-8: 24px;--td-size-9: 28px;--td-size-10: 32px;--td-size-11: 36px;--td-size-12: 40px;--td-size-13: 48px;--td-size-14: 56px;--td-size-15: 64px;--td-size-16: 72px;--td-comp-size-xxxs: var(--td-size-6);--td-comp-size-xxs: var(--td-size-7);--td-comp-size-xs: var(--td-size-8);--td-comp-size-s: var(--td-size-9);--td-comp-size-m: var(--td-size-10);--td-comp-size-l: var(--td-size-11);--td-comp-size-xl: var(--td-size-12);--td-comp-size-xxl: var(--td-size-13);--td-comp-size-xxxl: var(--td-size-14);--td-comp-size-xxxxl: var(--td-size-15);--td-comp-size-xxxxxl: var(--td-size-16);--td-pop-padding-s: var(--td-size-2);--td-pop-padding-m: var(--td-size-3);--td-pop-padding-l: var(--td-size-4);--td-pop-padding-xl: var(--td-size-5);--td-pop-padding-xxl: var(--td-size-6);--td-comp-paddingLR-xxs: var(--td-size-1);--td-comp-paddingLR-xs: var(--td-size-2);--td-comp-paddingLR-s: var(--td-size-4);--td-comp-paddingLR-m: var(--td-size-5);--td-comp-paddingLR-l: var(--td-size-6);--td-comp-paddingLR-xl: var(--td-size-8);--td-comp-paddingLR-xxl: var(--td-size-10);--td-comp-paddingTB-xxs: var(--td-size-1);--td-comp-paddingTB-xs: var(--td-size-2);--td-comp-paddingTB-s: var(--td-size-4);--td-comp-paddingTB-m: var(--td-size-5);--td-comp-paddingTB-l: var(--td-size-6);--td-comp-paddingTB-xl: var(--td-size-8);--td-comp-paddingTB-xxl: var(--td-size-10);--td-comp-margin-xxs: var(--td-size-1);--td-comp-margin-xs: var(--td-size-2);--td-comp-margin-s: var(--td-size-4);--td-comp-margin-m: var(--td-size-5);--td-comp-margin-l: var(--td-size-6);--td-comp-margin-xl: var(--td-size-7);--td-comp-margin-xxl: var(--td-size-8);--td-comp-margin-xxxl: var(--td-size-10);--td-comp-margin-xxxxl: var(--td-size-12)}',
    {},
  );
})();
var Av = Object.defineProperty;
var pc = (e) => {
  throw TypeError(e);
};
var Ov = (e, t, r) =>
  t in e
    ? Av(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var $ = (e, t, r) => Ov(e, typeof t != "symbol" ? t + "" : t, r),
  wo = (e, t, r) => t.has(e) || pc("Cannot " + r);
var v = (e, t, r) => (
    wo(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  ae = (e, t, r) =>
    t.has(e)
      ? pc("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Z = (e, t, r, s) => (
    wo(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r
  ),
  J = (e, t, r) => (wo(e, t, "access private method"), r);
var ei = (e, t, r, s) => ({
  set _(n) {
    Z(e, t, n, r);
  },
  get _() {
    return v(e, t, s);
  },
});
var fr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function gs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Of = { exports: {} },
  eo = {},
  Pf = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kn = Symbol.for("react.element"),
  Pv = Symbol.for("react.portal"),
  Dv = Symbol.for("react.fragment"),
  Tv = Symbol.for("react.strict_mode"),
  Cv = Symbol.for("react.profiler"),
  xv = Symbol.for("react.provider"),
  Rv = Symbol.for("react.context"),
  Mv = Symbol.for("react.forward_ref"),
  Lv = Symbol.for("react.suspense"),
  $v = Symbol.for("react.memo"),
  Kv = Symbol.for("react.lazy"),
  _c = Symbol.iterator;
function Bv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_c && e[_c]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Df = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tf = Object.assign,
  Cf = {};
function Js(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cf),
    (this.updater = r || Df);
}
Js.prototype.isReactComponent = {};
Js.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Js.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xf() {}
xf.prototype = Js.prototype;
function pl(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cf),
    (this.updater = r || Df);
}
var _l = (pl.prototype = new xf());
_l.constructor = pl;
Tf(_l, Js.prototype);
_l.isPureReactComponent = !0;
var vc = Array.isArray,
  Rf = Object.prototype.hasOwnProperty,
  vl = { current: null },
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lf(e, t, r) {
  var s,
    n = {},
    i = null,
    o = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Rf.call(t, s) && !Mf.hasOwnProperty(s) && (n[s] = t[s]);
  var a = arguments.length - 2;
  if (a === 1) n.children = r;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    n.children = l;
  }
  if (e && e.defaultProps)
    for (s in ((a = e.defaultProps), a)) n[s] === void 0 && (n[s] = a[s]);
  return {
    $$typeof: kn,
    type: e,
    key: i,
    ref: o,
    props: n,
    _owner: vl.current,
  };
}
function Uv(e, t) {
  return {
    $$typeof: kn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kn;
}
function Nv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var wc = /\/+/g;
function mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Nv("" + e.key)
    : t.toString(36);
}
function Ii(e, t, r, s, n) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case kn:
          case Pv:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (n = n(o)),
      (e = s === "" ? "." + mo(o, 0) : s),
      vc(n)
        ? ((r = ""),
          e != null && (r = e.replace(wc, "$&/") + "/"),
          Ii(n, t, r, "", function (c) {
            return c;
          }))
        : n != null &&
          (wl(n) &&
            (n = Uv(
              n,
              r +
                (!n.key || (o && o.key === n.key)
                  ? ""
                  : ("" + n.key).replace(wc, "$&/") + "/") +
                e,
            )),
          t.push(n)),
      1
    );
  if (((o = 0), (s = s === "" ? "." : s + ":"), vc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = s + mo(i, a);
      o += Ii(i, t, r, l, n);
    }
  else if (((l = Bv(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = s + mo(i, a++)), (o += Ii(i, t, r, l, n));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function ti(e, t, r) {
  if (e == null) return e;
  var s = [],
    n = 0;
  return (
    Ii(e, s, "", "", function (i) {
      return t.call(r, i, n++);
    }),
    s
  );
}
function Fv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var dt = { current: null },
  Ai = { transition: null },
  kv = {
    ReactCurrentDispatcher: dt,
    ReactCurrentBatchConfig: Ai,
    ReactCurrentOwner: vl,
  };
function $f() {
  throw Error("act(...) is not supported in production builds of React.");
}
he.Children = {
  map: ti,
  forEach: function (e, t, r) {
    ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
he.Component = Js;
he.Fragment = Dv;
he.Profiler = Cv;
he.PureComponent = pl;
he.StrictMode = Tv;
he.Suspense = Lv;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kv;
he.act = $f;
he.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var s = Tf({}, e.props),
    n = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = vl.current)),
      t.key !== void 0 && (n = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Rf.call(t, l) &&
        !Mf.hasOwnProperty(l) &&
        (s[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) s.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    s.children = a;
  }
  return { $$typeof: kn, type: e.type, key: n, ref: i, props: s, _owner: o };
};
he.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xv, _context: e }),
    (e.Consumer = e)
  );
};
he.createElement = Lf;
he.createFactory = function (e) {
  var t = Lf.bind(null, e);
  return (t.type = e), t;
};
he.createRef = function () {
  return { current: null };
};
he.forwardRef = function (e) {
  return { $$typeof: Mv, render: e };
};
he.isValidElement = wl;
he.lazy = function (e) {
  return { $$typeof: Kv, _payload: { _status: -1, _result: e }, _init: Fv };
};
he.memo = function (e, t) {
  return { $$typeof: $v, type: e, compare: t === void 0 ? null : t };
};
he.startTransition = function (e) {
  var t = Ai.transition;
  Ai.transition = {};
  try {
    e();
  } finally {
    Ai.transition = t;
  }
};
he.unstable_act = $f;
he.useCallback = function (e, t) {
  return dt.current.useCallback(e, t);
};
he.useContext = function (e) {
  return dt.current.useContext(e);
};
he.useDebugValue = function () {};
he.useDeferredValue = function (e) {
  return dt.current.useDeferredValue(e);
};
he.useEffect = function (e, t) {
  return dt.current.useEffect(e, t);
};
he.useId = function () {
  return dt.current.useId();
};
he.useImperativeHandle = function (e, t, r) {
  return dt.current.useImperativeHandle(e, t, r);
};
he.useInsertionEffect = function (e, t) {
  return dt.current.useInsertionEffect(e, t);
};
he.useLayoutEffect = function (e, t) {
  return dt.current.useLayoutEffect(e, t);
};
he.useMemo = function (e, t) {
  return dt.current.useMemo(e, t);
};
he.useReducer = function (e, t, r) {
  return dt.current.useReducer(e, t, r);
};
he.useRef = function (e) {
  return dt.current.useRef(e);
};
he.useState = function (e) {
  return dt.current.useState(e);
};
he.useSyncExternalStore = function (e, t, r) {
  return dt.current.useSyncExternalStore(e, t, r);
};
he.useTransition = function () {
  return dt.current.useTransition();
};
he.version = "18.3.1";
Pf.exports = he;
var Fr = Pf.exports;
const jv = gs(Fr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gv = Fr,
  Wv = Symbol.for("react.element"),
  Vv = Symbol.for("react.fragment"),
  Hv = Object.prototype.hasOwnProperty,
  zv = Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, r) {
  var s,
    n = {},
    i = null,
    o = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (s in t) Hv.call(t, s) && !qv.hasOwnProperty(s) && (n[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) n[s] === void 0 && (n[s] = t[s]);
  return {
    $$typeof: Wv,
    type: e,
    key: i,
    ref: o,
    props: n,
    _owner: zv.current,
  };
}
eo.Fragment = Vv;
eo.jsx = Kf;
eo.jsxs = Kf;
Of.exports = eo;
var yM = Of.exports;
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var mc;
(function (e) {
  (function (t) {
    var r =
        typeof globalThis == "object"
          ? globalThis
          : typeof fr == "object"
            ? fr
            : typeof self == "object"
              ? self
              : typeof this == "object"
                ? this
                : a(),
      s = n(e);
    typeof r.Reflect < "u" && (s = n(r.Reflect, s)),
      t(s, r),
      typeof r.Reflect > "u" && (r.Reflect = e);
    function n(l, c) {
      return function (u, d) {
        Object.defineProperty(l, u, {
          configurable: !0,
          writable: !0,
          value: d,
        }),
          c && c(u, d);
      };
    }
    function i() {
      try {
        return Function("return this;")();
      } catch {}
    }
    function o() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {}
    }
    function a() {
      return i() || o();
    }
  })(function (t, r) {
    var s = Object.prototype.hasOwnProperty,
      n = typeof Symbol == "function",
      i =
        n && typeof Symbol.toPrimitive < "u"
          ? Symbol.toPrimitive
          : "@@toPrimitive",
      o = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator",
      a = typeof Object.create == "function",
      l = { __proto__: [] } instanceof Array,
      c = !a && !l,
      u = {
        create: a
          ? function () {
              return vo(Object.create(null));
            }
          : l
            ? function () {
                return vo({ __proto__: null });
              }
            : function () {
                return vo({});
              },
        has: c
          ? function (y, b) {
              return s.call(y, b);
            }
          : function (y, b) {
              return b in y;
            },
        get: c
          ? function (y, b) {
              return s.call(y, b) ? y[b] : void 0;
            }
          : function (y, b) {
              return y[b];
            },
      },
      d = Object.getPrototypeOf(Function),
      f =
        typeof Map == "function" && typeof Map.prototype.entries == "function"
          ? Map
          : Sv(),
      h =
        typeof Set == "function" && typeof Set.prototype.entries == "function"
          ? Set
          : yv(),
      p = typeof WeakMap == "function" ? WeakMap : Ev(),
      _ = n ? Symbol.for("@reflect-metadata:registry") : void 0,
      w = vv(),
      m = wv(w);
    function E(y, b, O, U) {
      if (W(O)) {
        if (!Lt(y)) throw new TypeError();
        if (!Vr(b)) throw new TypeError();
        return ve(y, b);
      } else {
        if (!Lt(y)) throw new TypeError();
        if (!_e(b)) throw new TypeError();
        if (!_e(U) && !W(U) && !me(U)) throw new TypeError();
        return me(U) && (U = void 0), (O = Ie(O)), B(y, b, O, U);
      }
    }
    t("decorate", E);
    function D(y, b) {
      function O(U, ne) {
        if (!_e(U)) throw new TypeError();
        if (!W(ne) && !pv(ne)) throw new TypeError();
        L(y, b, U, ne);
      }
      return O;
    }
    t("metadata", D);
    function j(y, b, O, U) {
      if (!_e(O)) throw new TypeError();
      return W(U) || (U = Ie(U)), L(y, b, O, U);
    }
    t("defineMetadata", j);
    function V(y, b, O) {
      if (!_e(b)) throw new TypeError();
      return W(O) || (O = Ie(O)), C(y, b, O);
    }
    t("hasMetadata", V);
    function R(y, b, O) {
      if (!_e(b)) throw new TypeError();
      return W(O) || (O = Ie(O)), I(y, b, O);
    }
    t("hasOwnMetadata", R);
    function ie(y, b, O) {
      if (!_e(b)) throw new TypeError();
      return W(O) || (O = Ie(O)), A(y, b, O);
    }
    t("getMetadata", ie);
    function x(y, b, O) {
      if (!_e(b)) throw new TypeError();
      return W(O) || (O = Ie(O)), M(y, b, O);
    }
    t("getOwnMetadata", x);
    function k(y, b) {
      if (!_e(y)) throw new TypeError();
      return W(b) || (b = Ie(b)), re(y, b);
    }
    t("getMetadataKeys", k);
    function H(y, b) {
      if (!_e(y)) throw new TypeError();
      return W(b) || (b = Ie(b)), ee(y, b);
    }
    t("getOwnMetadataKeys", H);
    function F(y, b, O) {
      if (!_e(b)) throw new TypeError();
      if ((W(O) || (O = Ie(O)), !_e(b))) throw new TypeError();
      W(O) || (O = Ie(O));
      var U = nn(b, O, !1);
      return W(U) ? !1 : U.OrdinaryDeleteMetadata(y, b, O);
    }
    t("deleteMetadata", F);
    function ve(y, b) {
      for (var O = y.length - 1; O >= 0; --O) {
        var U = y[O],
          ne = U(b);
        if (!W(ne) && !me(ne)) {
          if (!Vr(ne)) throw new TypeError();
          b = ne;
        }
      }
      return b;
    }
    function B(y, b, O, U) {
      for (var ne = y.length - 1; ne >= 0; --ne) {
        var Ve = y[ne],
          Fe = Ve(b, O, U);
        if (!W(Fe) && !me(Fe)) {
          if (!_e(Fe)) throw new TypeError();
          U = Fe;
        }
      }
      return U;
    }
    function C(y, b, O) {
      var U = I(y, b, O);
      if (U) return !0;
      var ne = _o(b);
      return me(ne) ? !1 : C(y, ne, O);
    }
    function I(y, b, O) {
      var U = nn(b, O, !1);
      return W(U) ? !1 : yr(U.OrdinaryHasOwnMetadata(y, b, O));
    }
    function A(y, b, O) {
      var U = I(y, b, O);
      if (U) return M(y, b, O);
      var ne = _o(b);
      if (!me(ne)) return A(y, ne, O);
    }
    function M(y, b, O) {
      var U = nn(b, O, !1);
      if (!W(U)) return U.OrdinaryGetOwnMetadata(y, b, O);
    }
    function L(y, b, O, U) {
      var ne = nn(O, U, !0);
      ne.OrdinaryDefineOwnMetadata(y, b, O, U);
    }
    function re(y, b) {
      var O = ee(y, b),
        U = _o(y);
      if (U === null) return O;
      var ne = re(U, b);
      if (ne.length <= 0) return O;
      if (O.length <= 0) return ne;
      for (var Ve = new h(), Fe = [], ue = 0, G = O; ue < G.length; ue++) {
        var z = G[ue],
          Q = Ve.has(z);
        Q || (Ve.add(z), Fe.push(z));
      }
      for (var X = 0, fe = ne; X < fe.length; X++) {
        var z = fe[X],
          Q = Ve.has(z);
        Q || (Ve.add(z), Fe.push(z));
      }
      return Fe;
    }
    function ee(y, b) {
      var O = nn(y, b, !1);
      return O ? O.OrdinaryOwnMetadataKeys(y, b) : [];
    }
    function pe(y) {
      if (y === null) return 1;
      switch (typeof y) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return y === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function W(y) {
      return y === void 0;
    }
    function me(y) {
      return y === null;
    }
    function We(y) {
      return typeof y == "symbol";
    }
    function _e(y) {
      return typeof y == "object" ? y !== null : typeof y == "function";
    }
    function Sr(y, b) {
      switch (pe(y)) {
        case 0:
          return y;
        case 1:
          return y;
        case 2:
          return y;
        case 3:
          return y;
        case 4:
          return y;
        case 5:
          return y;
      }
      var O = "string",
        U = cc(y, i);
      if (U !== void 0) {
        var ne = U.call(y, O);
        if (_e(ne)) throw new TypeError();
        return ne;
      }
      return nr(y);
    }
    function nr(y, b) {
      var O, U;
      {
        var ne = y.toString;
        if (Xt(ne)) {
          var U = ne.call(y);
          if (!_e(U)) return U;
        }
        var O = y.valueOf;
        if (Xt(O)) {
          var U = O.call(y);
          if (!_e(U)) return U;
        }
      }
      throw new TypeError();
    }
    function yr(y) {
      return !!y;
    }
    function ir(y) {
      return "" + y;
    }
    function Ie(y) {
      var b = Sr(y);
      return We(b) ? b : ir(b);
    }
    function Lt(y) {
      return Array.isArray
        ? Array.isArray(y)
        : y instanceof Object
          ? y instanceof Array
          : Object.prototype.toString.call(y) === "[object Array]";
    }
    function Xt(y) {
      return typeof y == "function";
    }
    function Vr(y) {
      return typeof y == "function";
    }
    function pv(y) {
      switch (pe(y)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function po(y, b) {
      return y === b || (y !== y && b !== b);
    }
    function cc(y, b) {
      var O = y[b];
      if (O != null) {
        if (!Xt(O)) throw new TypeError();
        return O;
      }
    }
    function uc(y) {
      var b = cc(y, o);
      if (!Xt(b)) throw new TypeError();
      var O = b.call(y);
      if (!_e(O)) throw new TypeError();
      return O;
    }
    function dc(y) {
      return y.value;
    }
    function hc(y) {
      var b = y.next();
      return b.done ? !1 : b;
    }
    function fc(y) {
      var b = y.return;
      b && b.call(y);
    }
    function _o(y) {
      var b = Object.getPrototypeOf(y);
      if (typeof y != "function" || y === d || b !== d) return b;
      var O = y.prototype,
        U = O && Object.getPrototypeOf(O);
      if (U == null || U === Object.prototype) return b;
      var ne = U.constructor;
      return typeof ne != "function" || ne === y ? b : ne;
    }
    function _v() {
      var y;
      !W(_) &&
        typeof r.Reflect < "u" &&
        !(_ in r.Reflect) &&
        typeof r.Reflect.defineMetadata == "function" &&
        (y = mv(r.Reflect));
      var b,
        O,
        U,
        ne = new p(),
        Ve = { registerProvider: Fe, getProvider: G, setProvider: Q };
      return Ve;
      function Fe(X) {
        if (!Object.isExtensible(Ve))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case y === X:
            break;
          case W(b):
            b = X;
            break;
          case b === X:
            break;
          case W(O):
            O = X;
            break;
          case O === X:
            break;
          default:
            U === void 0 && (U = new h()), U.add(X);
            break;
        }
      }
      function ue(X, fe) {
        if (!W(b)) {
          if (b.isProviderFor(X, fe)) return b;
          if (!W(O)) {
            if (O.isProviderFor(X, fe)) return b;
            if (!W(U))
              for (var Ae = uc(U); ; ) {
                var Le = hc(Ae);
                if (!Le) return;
                var $t = dc(Le);
                if ($t.isProviderFor(X, fe)) return fc(Ae), $t;
              }
          }
        }
        if (!W(y) && y.isProviderFor(X, fe)) return y;
      }
      function G(X, fe) {
        var Ae = ne.get(X),
          Le;
        return (
          W(Ae) || (Le = Ae.get(fe)),
          W(Le) &&
            ((Le = ue(X, fe)),
            W(Le) ||
              (W(Ae) && ((Ae = new f()), ne.set(X, Ae)), Ae.set(fe, Le))),
          Le
        );
      }
      function z(X) {
        if (W(X)) throw new TypeError();
        return b === X || O === X || (!W(U) && U.has(X));
      }
      function Q(X, fe, Ae) {
        if (!z(Ae)) throw new Error("Metadata provider not registered.");
        var Le = G(X, fe);
        if (Le !== Ae) {
          if (!W(Le)) return !1;
          var $t = ne.get(X);
          W($t) && (($t = new f()), ne.set(X, $t)), $t.set(fe, Ae);
        }
        return !0;
      }
    }
    function vv() {
      var y;
      return (
        !W(_) &&
          _e(r.Reflect) &&
          Object.isExtensible(r.Reflect) &&
          (y = r.Reflect[_]),
        W(y) && (y = _v()),
        !W(_) &&
          _e(r.Reflect) &&
          Object.isExtensible(r.Reflect) &&
          Object.defineProperty(r.Reflect, _, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: y,
          }),
        y
      );
    }
    function wv(y) {
      var b = new p(),
        O = {
          isProviderFor: function (z, Q) {
            var X = b.get(z);
            return W(X) ? !1 : X.has(Q);
          },
          OrdinaryDefineOwnMetadata: Fe,
          OrdinaryHasOwnMetadata: ne,
          OrdinaryGetOwnMetadata: Ve,
          OrdinaryOwnMetadataKeys: ue,
          OrdinaryDeleteMetadata: G,
        };
      return w.registerProvider(O), O;
      function U(z, Q, X) {
        var fe = b.get(z),
          Ae = !1;
        if (W(fe)) {
          if (!X) return;
          (fe = new f()), b.set(z, fe), (Ae = !0);
        }
        var Le = fe.get(Q);
        if (W(Le)) {
          if (!X) return;
          if (((Le = new f()), fe.set(Q, Le), !y.setProvider(z, Q, O)))
            throw (
              (fe.delete(Q),
              Ae && b.delete(z),
              new Error("Wrong provider for target."))
            );
        }
        return Le;
      }
      function ne(z, Q, X) {
        var fe = U(Q, X, !1);
        return W(fe) ? !1 : yr(fe.has(z));
      }
      function Ve(z, Q, X) {
        var fe = U(Q, X, !1);
        if (!W(fe)) return fe.get(z);
      }
      function Fe(z, Q, X, fe) {
        var Ae = U(X, fe, !0);
        Ae.set(z, Q);
      }
      function ue(z, Q) {
        var X = [],
          fe = U(z, Q, !1);
        if (W(fe)) return X;
        for (var Ae = fe.keys(), Le = uc(Ae), $t = 0; ; ) {
          var gc = hc(Le);
          if (!gc) return (X.length = $t), X;
          var bv = dc(gc);
          try {
            X[$t] = bv;
          } catch (Iv) {
            try {
              fc(Le);
            } finally {
              throw Iv;
            }
          }
          $t++;
        }
      }
      function G(z, Q, X) {
        var fe = U(Q, X, !1);
        if (W(fe) || !fe.delete(z)) return !1;
        if (fe.size === 0) {
          var Ae = b.get(Q);
          W(Ae) || (Ae.delete(X), Ae.size === 0 && b.delete(Ae));
        }
        return !0;
      }
    }
    function mv(y) {
      var b = y.defineMetadata,
        O = y.hasOwnMetadata,
        U = y.getOwnMetadata,
        ne = y.getOwnMetadataKeys,
        Ve = y.deleteMetadata,
        Fe = new p(),
        ue = {
          isProviderFor: function (G, z) {
            var Q = Fe.get(G);
            return !W(Q) && Q.has(z)
              ? !0
              : ne(G, z).length
                ? (W(Q) && ((Q = new h()), Fe.set(G, Q)), Q.add(z), !0)
                : !1;
          },
          OrdinaryDefineOwnMetadata: b,
          OrdinaryHasOwnMetadata: O,
          OrdinaryGetOwnMetadata: U,
          OrdinaryOwnMetadataKeys: ne,
          OrdinaryDeleteMetadata: Ve,
        };
      return ue;
    }
    function nn(y, b, O) {
      var U = w.getProvider(y, b);
      if (!W(U)) return U;
      if (O) {
        if (w.setProvider(y, b, m)) return m;
        throw new Error("Illegal state.");
      }
    }
    function Sv() {
      var y = {},
        b = [],
        O = (function () {
          function ue(G, z, Q) {
            (this._index = 0),
              (this._keys = G),
              (this._values = z),
              (this._selector = Q);
          }
          return (
            (ue.prototype["@@iterator"] = function () {
              return this;
            }),
            (ue.prototype[o] = function () {
              return this;
            }),
            (ue.prototype.next = function () {
              var G = this._index;
              if (G >= 0 && G < this._keys.length) {
                var z = this._selector(this._keys[G], this._values[G]);
                return (
                  G + 1 >= this._keys.length
                    ? ((this._index = -1), (this._keys = b), (this._values = b))
                    : this._index++,
                  { value: z, done: !1 }
                );
              }
              return { value: void 0, done: !0 };
            }),
            (ue.prototype.throw = function (G) {
              throw (
                (this._index >= 0 &&
                  ((this._index = -1), (this._keys = b), (this._values = b)),
                G)
              );
            }),
            (ue.prototype.return = function (G) {
              return (
                this._index >= 0 &&
                  ((this._index = -1), (this._keys = b), (this._values = b)),
                { value: G, done: !0 }
              );
            }),
            ue
          );
        })(),
        U = (function () {
          function ue() {
            (this._keys = []),
              (this._values = []),
              (this._cacheKey = y),
              (this._cacheIndex = -2);
          }
          return (
            Object.defineProperty(ue.prototype, "size", {
              get: function () {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (ue.prototype.has = function (G) {
              return this._find(G, !1) >= 0;
            }),
            (ue.prototype.get = function (G) {
              var z = this._find(G, !1);
              return z >= 0 ? this._values[z] : void 0;
            }),
            (ue.prototype.set = function (G, z) {
              var Q = this._find(G, !0);
              return (this._values[Q] = z), this;
            }),
            (ue.prototype.delete = function (G) {
              var z = this._find(G, !1);
              if (z >= 0) {
                for (var Q = this._keys.length, X = z + 1; X < Q; X++)
                  (this._keys[X - 1] = this._keys[X]),
                    (this._values[X - 1] = this._values[X]);
                return (
                  this._keys.length--,
                  this._values.length--,
                  po(G, this._cacheKey) &&
                    ((this._cacheKey = y), (this._cacheIndex = -2)),
                  !0
                );
              }
              return !1;
            }),
            (ue.prototype.clear = function () {
              (this._keys.length = 0),
                (this._values.length = 0),
                (this._cacheKey = y),
                (this._cacheIndex = -2);
            }),
            (ue.prototype.keys = function () {
              return new O(this._keys, this._values, ne);
            }),
            (ue.prototype.values = function () {
              return new O(this._keys, this._values, Ve);
            }),
            (ue.prototype.entries = function () {
              return new O(this._keys, this._values, Fe);
            }),
            (ue.prototype["@@iterator"] = function () {
              return this.entries();
            }),
            (ue.prototype[o] = function () {
              return this.entries();
            }),
            (ue.prototype._find = function (G, z) {
              if (!po(this._cacheKey, G)) {
                this._cacheIndex = -1;
                for (var Q = 0; Q < this._keys.length; Q++)
                  if (po(this._keys[Q], G)) {
                    this._cacheIndex = Q;
                    break;
                  }
              }
              return (
                this._cacheIndex < 0 &&
                  z &&
                  ((this._cacheIndex = this._keys.length),
                  this._keys.push(G),
                  this._values.push(void 0)),
                this._cacheIndex
              );
            }),
            ue
          );
        })();
      return U;
      function ne(ue, G) {
        return ue;
      }
      function Ve(ue, G) {
        return G;
      }
      function Fe(ue, G) {
        return [ue, G];
      }
    }
    function yv() {
      var y = (function () {
        function b() {
          this._map = new f();
        }
        return (
          Object.defineProperty(b.prototype, "size", {
            get: function () {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (b.prototype.has = function (O) {
            return this._map.has(O);
          }),
          (b.prototype.add = function (O) {
            return this._map.set(O, O), this;
          }),
          (b.prototype.delete = function (O) {
            return this._map.delete(O);
          }),
          (b.prototype.clear = function () {
            this._map.clear();
          }),
          (b.prototype.keys = function () {
            return this._map.keys();
          }),
          (b.prototype.values = function () {
            return this._map.keys();
          }),
          (b.prototype.entries = function () {
            return this._map.entries();
          }),
          (b.prototype["@@iterator"] = function () {
            return this.keys();
          }),
          (b.prototype[o] = function () {
            return this.keys();
          }),
          b
        );
      })();
      return y;
    }
    function Ev() {
      var y = 16,
        b = u.create(),
        O = U();
      return (function () {
        function G() {
          this._key = U();
        }
        return (
          (G.prototype.has = function (z) {
            var Q = ne(z, !1);
            return Q !== void 0 ? u.has(Q, this._key) : !1;
          }),
          (G.prototype.get = function (z) {
            var Q = ne(z, !1);
            return Q !== void 0 ? u.get(Q, this._key) : void 0;
          }),
          (G.prototype.set = function (z, Q) {
            var X = ne(z, !0);
            return (X[this._key] = Q), this;
          }),
          (G.prototype.delete = function (z) {
            var Q = ne(z, !1);
            return Q !== void 0 ? delete Q[this._key] : !1;
          }),
          (G.prototype.clear = function () {
            this._key = U();
          }),
          G
        );
      })();
      function U() {
        var G;
        do G = "@@WeakMap@@" + ue();
        while (u.has(b, G));
        return (b[G] = !0), G;
      }
      function ne(G, z) {
        if (!s.call(G, O)) {
          if (!z) return;
          Object.defineProperty(G, O, { value: u.create() });
        }
        return G[O];
      }
      function Ve(G, z) {
        for (var Q = 0; Q < z; ++Q) G[Q] = (Math.random() * 255) | 0;
        return G;
      }
      function Fe(G) {
        if (typeof Uint8Array == "function") {
          var z = new Uint8Array(G);
          return (
            typeof crypto < "u"
              ? crypto.getRandomValues(z)
              : typeof msCrypto < "u"
                ? msCrypto.getRandomValues(z)
                : Ve(z, G),
            z
          );
        }
        return Ve(new Array(G), G);
      }
      function ue() {
        var G = Fe(y);
        (G[6] = (G[6] & 79) | 64), (G[8] = (G[8] & 191) | 128);
        for (var z = "", Q = 0; Q < y; ++Q) {
          var X = G[Q];
          (Q === 4 || Q === 6 || Q === 8) && (z += "-"),
            X < 16 && (z += "0"),
            (z += X.toString(16).toLowerCase());
        }
        return z;
      }
    }
    function vo(y) {
      return (y.__ = void 0), delete y.__, y;
    }
  });
})(mc || (mc = {}));
var ia = function (e, t) {
  return (
    (ia =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, s) {
          r.__proto__ = s;
        }) ||
      function (r, s) {
        for (var n in s)
          Object.prototype.hasOwnProperty.call(s, n) && (r[n] = s[n]);
      }),
    ia(e, t)
  );
};
function Yt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  ia(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function Jv(e, t, r, s) {
  function n(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function a(u) {
      try {
        c(s.next(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      try {
        c(s.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : n(u.value).then(a, l);
    }
    c((s = s.apply(e, t || [])).next());
  });
}
function Bf(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    s,
    n,
    i,
    o = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype,
    );
  return (
    (o.next = a(0)),
    (o.throw = a(1)),
    (o.return = a(2)),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(c) {
    return function (u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), c[0] && (r = 0)), r; )
      try {
        if (
          ((s = 1),
          n &&
            (i =
              c[0] & 2
                ? n.return
                : c[0]
                  ? n.throw || ((i = n.return) && i.call(n), 0)
                  : n.next) &&
            !(i = i.call(n, c[1])).done)
        )
          return i;
        switch (((n = 0), i && (c = [c[0] & 2, i.value]), c[0])) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, (n = c[1]), (c = [0]);
            continue;
          case 7:
            (c = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((i = r.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              (r.label = i[1]), (i = c);
              break;
            }
            if (i && r.label < i[2]) {
              (r.label = i[2]), r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (u) {
        (c = [6, u]), (n = 0);
      } finally {
        s = i = 0;
      }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ks(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    s = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function cs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var s = r.call(e),
    n,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = s.next()).done; ) i.push(n.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      n && !n.done && (r = s.return) && r.call(s);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function us(e, t, r) {
  if (r || arguments.length === 2)
    for (var s = 0, n = t.length, i; s < n; s++)
      (i || !(s in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, s)), (i[s] = t[s]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Rs(e) {
  return this instanceof Rs ? ((this.v = e), this) : new Rs(e);
}
function Yv(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = r.apply(e, t || []),
    n,
    i = [];
  return (
    (n = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", o),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function o(h) {
    return function (p) {
      return Promise.resolve(p).then(h, d);
    };
  }
  function a(h, p) {
    s[h] &&
      ((n[h] = function (_) {
        return new Promise(function (w, m) {
          i.push([h, _, w, m]) > 1 || l(h, _);
        });
      }),
      p && (n[h] = p(n[h])));
  }
  function l(h, p) {
    try {
      c(s[h](p));
    } catch (_) {
      f(i[0][3], _);
    }
  }
  function c(h) {
    h.value instanceof Rs
      ? Promise.resolve(h.value.v).then(u, d)
      : f(i[0][2], h);
  }
  function u(h) {
    l("next", h);
  }
  function d(h) {
    l("throw", h);
  }
  function f(h, p) {
    h(p), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function Qv(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof ks == "function" ? ks(e) : e[Symbol.iterator]()),
      (r = {}),
      s("next"),
      s("throw"),
      s("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function s(i) {
    r[i] =
      e[i] &&
      function (o) {
        return new Promise(function (a, l) {
          (o = e[i](o)), n(a, l, o.done, o.value);
        });
      };
  }
  function n(i, o, a, l) {
    Promise.resolve(l).then(function (c) {
      i({ value: c, done: a });
    }, o);
  }
}
function Me(e) {
  return typeof e == "function";
}
function Uf(e) {
  var t = function (s) {
      Error.call(s), (s.stack = new Error().stack);
    },
    r = e(t);
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var So = Uf(function (e) {
  return function (r) {
    e(this),
      (this.message = r
        ? r.length +
          ` errors occurred during unsubscription:
` +
          r.map(function (s, n) {
            return n + 1 + ") " + s.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = r);
  };
});
function Li(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var jn = (function () {
    function e(t) {
      (this.initialTeardown = t),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t, r, s, n, i;
        if (!this.closed) {
          this.closed = !0;
          var o = this._parentage;
          if (o)
            if (((this._parentage = null), Array.isArray(o)))
              try {
                for (var a = ks(o), l = a.next(); !l.done; l = a.next()) {
                  var c = l.value;
                  c.remove(this);
                }
              } catch (_) {
                t = { error: _ };
              } finally {
                try {
                  l && !l.done && (r = a.return) && r.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
            else o.remove(this);
          var u = this.initialTeardown;
          if (Me(u))
            try {
              u();
            } catch (_) {
              i = _ instanceof So ? _.errors : [_];
            }
          var d = this._finalizers;
          if (d) {
            this._finalizers = null;
            try {
              for (var f = ks(d), h = f.next(); !h.done; h = f.next()) {
                var p = h.value;
                try {
                  Sc(p);
                } catch (_) {
                  (i = i ?? []),
                    _ instanceof So
                      ? (i = us(us([], cs(i)), cs(_.errors)))
                      : i.push(_);
                }
              }
            } catch (_) {
              s = { error: _ };
            } finally {
              try {
                h && !h.done && (n = f.return) && n.call(f);
              } finally {
                if (s) throw s.error;
              }
            }
          }
          if (i) throw new So(i);
        }
      }),
      (e.prototype.add = function (t) {
        var r;
        if (t && t !== this)
          if (this.closed) Sc(t);
          else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers =
              (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
          }
      }),
      (e.prototype._hasParent = function (t) {
        var r = this._parentage;
        return r === t || (Array.isArray(r) && r.includes(t));
      }),
      (e.prototype._addParent = function (t) {
        var r = this._parentage;
        this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
      }),
      (e.prototype._removeParent = function (t) {
        var r = this._parentage;
        r === t ? (this._parentage = null) : Array.isArray(r) && Li(r, t);
      }),
      (e.prototype.remove = function (t) {
        var r = this._finalizers;
        r && Li(r, t), t instanceof e && t._removeParent(this);
      }),
      (e.EMPTY = (function () {
        var t = new e();
        return (t.closed = !0), t;
      })()),
      e
    );
  })(),
  Nf = jn.EMPTY;
function Ff(e) {
  return (
    e instanceof jn ||
    (e && "closed" in e && Me(e.remove) && Me(e.add) && Me(e.unsubscribe))
  );
}
function Sc(e) {
  Me(e) ? e() : e.unsubscribe();
}
var kf = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  jf = {
    setTimeout: function (e, t) {
      for (var r = [], s = 2; s < arguments.length; s++)
        r[s - 2] = arguments[s];
      return setTimeout.apply(void 0, us([e, t], cs(r)));
    },
    clearTimeout: function (e) {
      var t = jf.delegate;
      return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: void 0,
  };
function Gf(e) {
  jf.setTimeout(function () {
    throw e;
  });
}
function yc() {}
function Oi(e) {
  e();
}
var ml = (function (e) {
    Yt(t, e);
    function t(r) {
      var s = e.call(this) || this;
      return (
        (s.isStopped = !1),
        r ? ((s.destination = r), Ff(r) && r.add(s)) : (s.destination = tw),
        s
      );
    }
    return (
      (t.create = function (r, s, n) {
        return new Sn(r, s, n);
      }),
      (t.prototype.next = function (r) {
        this.isStopped || this._next(r);
      }),
      (t.prototype.error = function (r) {
        this.isStopped || ((this.isStopped = !0), this._error(r));
      }),
      (t.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          e.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (t.prototype._next = function (r) {
        this.destination.next(r);
      }),
      (t.prototype._error = function (r) {
        try {
          this.destination.error(r);
        } finally {
          this.unsubscribe();
        }
      }),
      (t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      t
    );
  })(jn),
  Xv = Function.prototype.bind;
function yo(e, t) {
  return Xv.call(e, t);
}
var Zv = (function () {
    function e(t) {
      this.partialObserver = t;
    }
    return (
      (e.prototype.next = function (t) {
        var r = this.partialObserver;
        if (r.next)
          try {
            r.next(t);
          } catch (s) {
            ri(s);
          }
      }),
      (e.prototype.error = function (t) {
        var r = this.partialObserver;
        if (r.error)
          try {
            r.error(t);
          } catch (s) {
            ri(s);
          }
        else ri(t);
      }),
      (e.prototype.complete = function () {
        var t = this.partialObserver;
        if (t.complete)
          try {
            t.complete();
          } catch (r) {
            ri(r);
          }
      }),
      e
    );
  })(),
  Sn = (function (e) {
    Yt(t, e);
    function t(r, s, n) {
      var i = e.call(this) || this,
        o;
      if (Me(r) || !r)
        o = { next: r ?? void 0, error: s ?? void 0, complete: n ?? void 0 };
      else {
        var a;
        i && kf.useDeprecatedNextContext
          ? ((a = Object.create(r)),
            (a.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (o = {
              next: r.next && yo(r.next, a),
              error: r.error && yo(r.error, a),
              complete: r.complete && yo(r.complete, a),
            }))
          : (o = r);
      }
      return (i.destination = new Zv(o)), i;
    }
    return t;
  })(ml);
function ri(e) {
  Gf(e);
}
function ew(e) {
  throw e;
}
var tw = { closed: !0, next: yc, error: ew, complete: yc },
  Sl = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function yl(e) {
  return e;
}
function rw(e) {
  return e.length === 0
    ? yl
    : e.length === 1
      ? e[0]
      : function (r) {
          return e.reduce(function (s, n) {
            return n(s);
          }, r);
        };
}
var ut = (function () {
  function e(t) {
    t && (this._subscribe = t);
  }
  return (
    (e.prototype.lift = function (t) {
      var r = new e();
      return (r.source = this), (r.operator = t), r;
    }),
    (e.prototype.subscribe = function (t, r, s) {
      var n = this,
        i = nw(t) ? t : new Sn(t, r, s);
      return (
        Oi(function () {
          var o = n,
            a = o.operator,
            l = o.source;
          i.add(a ? a.call(i, l) : l ? n._subscribe(i) : n._trySubscribe(i));
        }),
        i
      );
    }),
    (e.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (r) {
        t.error(r);
      }
    }),
    (e.prototype.forEach = function (t, r) {
      var s = this;
      return (
        (r = Ec(r)),
        new r(function (n, i) {
          var o = new Sn({
            next: function (a) {
              try {
                t(a);
              } catch (l) {
                i(l), o.unsubscribe();
              }
            },
            error: i,
            complete: n,
          });
          s.subscribe(o);
        })
      );
    }),
    (e.prototype._subscribe = function (t) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(t);
    }),
    (e.prototype[Sl] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return rw(t)(this);
    }),
    (e.prototype.toPromise = function (t) {
      var r = this;
      return (
        (t = Ec(t)),
        new t(function (s, n) {
          var i;
          r.subscribe(
            function (o) {
              return (i = o);
            },
            function (o) {
              return n(o);
            },
            function () {
              return s(i);
            },
          );
        })
      );
    }),
    (e.create = function (t) {
      return new e(t);
    }),
    e
  );
})();
function Ec(e) {
  var t;
  return (t = e ?? kf.Promise) !== null && t !== void 0 ? t : Promise;
}
function sw(e) {
  return e && Me(e.next) && Me(e.error) && Me(e.complete);
}
function nw(e) {
  return (e && e instanceof ml) || (sw(e) && Ff(e));
}
function iw(e) {
  return Me(e == null ? void 0 : e.lift);
}
function jr(e) {
  return function (t) {
    if (iw(t))
      return t.lift(function (r) {
        try {
          return e(r, this);
        } catch (s) {
          this.error(s);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function kr(e, t, r, s, n) {
  return new ow(e, t, r, s, n);
}
var ow = (function (e) {
    Yt(t, e);
    function t(r, s, n, i, o, a) {
      var l = e.call(this, r) || this;
      return (
        (l.onFinalize = o),
        (l.shouldUnsubscribe = a),
        (l._next = s
          ? function (c) {
              try {
                s(c);
              } catch (u) {
                r.error(u);
              }
            }
          : e.prototype._next),
        (l._error = i
          ? function (c) {
              try {
                i(c);
              } catch (u) {
                r.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (l._complete = n
          ? function () {
              try {
                n();
              } catch (c) {
                r.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        l
      );
    }
    return (
      (t.prototype.unsubscribe = function () {
        var r;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var s = this.closed;
          e.prototype.unsubscribe.call(this),
            !s &&
              ((r = this.onFinalize) === null || r === void 0 || r.call(this));
        }
      }),
      t
    );
  })(ml),
  aw = Uf(function (e) {
    return function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  Ne = (function (e) {
    Yt(t, e);
    function t() {
      var r = e.call(this) || this;
      return (
        (r.closed = !1),
        (r.currentObservers = null),
        (r.observers = []),
        (r.isStopped = !1),
        (r.hasError = !1),
        (r.thrownError = null),
        r
      );
    }
    return (
      (t.prototype.lift = function (r) {
        var s = new bc(this, this);
        return (s.operator = r), s;
      }),
      (t.prototype._throwIfClosed = function () {
        if (this.closed) throw new aw();
      }),
      (t.prototype.next = function (r) {
        var s = this;
        Oi(function () {
          var n, i;
          if ((s._throwIfClosed(), !s.isStopped)) {
            s.currentObservers ||
              (s.currentObservers = Array.from(s.observers));
            try {
              for (
                var o = ks(s.currentObservers), a = o.next();
                !a.done;
                a = o.next()
              ) {
                var l = a.value;
                l.next(r);
              }
            } catch (c) {
              n = { error: c };
            } finally {
              try {
                a && !a.done && (i = o.return) && i.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
          }
        });
      }),
      (t.prototype.error = function (r) {
        var s = this;
        Oi(function () {
          if ((s._throwIfClosed(), !s.isStopped)) {
            (s.hasError = s.isStopped = !0), (s.thrownError = r);
            for (var n = s.observers; n.length; ) n.shift().error(r);
          }
        });
      }),
      (t.prototype.complete = function () {
        var r = this;
        Oi(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.isStopped = !0;
            for (var s = r.observers; s.length; ) s.shift().complete();
          }
        });
      }),
      (t.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(t.prototype, "observed", {
        get: function () {
          var r;
          return (
            ((r = this.observers) === null || r === void 0
              ? void 0
              : r.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._trySubscribe = function (r) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
      }),
      (t.prototype._subscribe = function (r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }),
      (t.prototype._innerSubscribe = function (r) {
        var s = this,
          n = this,
          i = n.hasError,
          o = n.isStopped,
          a = n.observers;
        return i || o
          ? Nf
          : ((this.currentObservers = null),
            a.push(r),
            new jn(function () {
              (s.currentObservers = null), Li(a, r);
            }));
      }),
      (t.prototype._checkFinalizedStatuses = function (r) {
        var s = this,
          n = s.hasError,
          i = s.thrownError,
          o = s.isStopped;
        n ? r.error(i) : o && r.complete();
      }),
      (t.prototype.asObservable = function () {
        var r = new ut();
        return (r.source = this), r;
      }),
      (t.create = function (r, s) {
        return new bc(r, s);
      }),
      t
    );
  })(ut),
  bc = (function (e) {
    Yt(t, e);
    function t(r, s) {
      var n = e.call(this) || this;
      return (n.destination = r), (n.source = s), n;
    }
    return (
      (t.prototype.next = function (r) {
        var s, n;
        (n =
          (s = this.destination) === null || s === void 0 ? void 0 : s.next) ===
          null ||
          n === void 0 ||
          n.call(s, r);
      }),
      (t.prototype.error = function (r) {
        var s, n;
        (n =
          (s = this.destination) === null || s === void 0
            ? void 0
            : s.error) === null ||
          n === void 0 ||
          n.call(s, r);
      }),
      (t.prototype.complete = function () {
        var r, s;
        (s =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.complete) === null ||
          s === void 0 ||
          s.call(r);
      }),
      (t.prototype._subscribe = function (r) {
        var s, n;
        return (n =
          (s = this.source) === null || s === void 0
            ? void 0
            : s.subscribe(r)) !== null && n !== void 0
          ? n
          : Nf;
      }),
      t
    );
  })(Ne),
  El = {
    now: function () {
      return (El.delegate || Date).now();
    },
    delegate: void 0,
  },
  lw = (function (e) {
    Yt(t, e);
    function t(r, s, n) {
      r === void 0 && (r = 1 / 0),
        s === void 0 && (s = 1 / 0),
        n === void 0 && (n = El);
      var i = e.call(this) || this;
      return (
        (i._bufferSize = r),
        (i._windowTime = s),
        (i._timestampProvider = n),
        (i._buffer = []),
        (i._infiniteTimeWindow = !0),
        (i._infiniteTimeWindow = s === 1 / 0),
        (i._bufferSize = Math.max(1, r)),
        (i._windowTime = Math.max(1, s)),
        i
      );
    }
    return (
      (t.prototype.next = function (r) {
        var s = this,
          n = s.isStopped,
          i = s._buffer,
          o = s._infiniteTimeWindow,
          a = s._timestampProvider,
          l = s._windowTime;
        n || (i.push(r), !o && i.push(a.now() + l)),
          this._trimBuffer(),
          e.prototype.next.call(this, r);
      }),
      (t.prototype._subscribe = function (r) {
        this._throwIfClosed(), this._trimBuffer();
        for (
          var s = this._innerSubscribe(r),
            n = this,
            i = n._infiniteTimeWindow,
            o = n._buffer,
            a = o.slice(),
            l = 0;
          l < a.length && !r.closed;
          l += i ? 1 : 2
        )
          r.next(a[l]);
        return this._checkFinalizedStatuses(r), s;
      }),
      (t.prototype._trimBuffer = function () {
        var r = this,
          s = r._bufferSize,
          n = r._timestampProvider,
          i = r._buffer,
          o = r._infiniteTimeWindow,
          a = (o ? 1 : 2) * s;
        if ((s < 1 / 0 && a < i.length && i.splice(0, i.length - a), !o)) {
          for (var l = n.now(), c = 0, u = 1; u < i.length && i[u] <= l; u += 2)
            c = u;
          c && i.splice(0, c + 1);
        }
      }),
      t
    );
  })(Ne),
  cw = (function (e) {
    Yt(t, e);
    function t(r, s) {
      return e.call(this) || this;
    }
    return (
      (t.prototype.schedule = function (r, s) {
        return this;
      }),
      t
    );
  })(jn),
  Ic = {
    setInterval: function (e, t) {
      for (var r = [], s = 2; s < arguments.length; s++)
        r[s - 2] = arguments[s];
      return setInterval.apply(void 0, us([e, t], cs(r)));
    },
    clearInterval: function (e) {
      return clearInterval(e);
    },
    delegate: void 0,
  },
  Wf = (function (e) {
    Yt(t, e);
    function t(r, s) {
      var n = e.call(this, r, s) || this;
      return (n.scheduler = r), (n.work = s), (n.pending = !1), n;
    }
    return (
      (t.prototype.schedule = function (r, s) {
        var n;
        if ((s === void 0 && (s = 0), this.closed)) return this;
        this.state = r;
        var i = this.id,
          o = this.scheduler;
        return (
          i != null && (this.id = this.recycleAsyncId(o, i, s)),
          (this.pending = !0),
          (this.delay = s),
          (this.id =
            (n = this.id) !== null && n !== void 0
              ? n
              : this.requestAsyncId(o, this.id, s)),
          this
        );
      }),
      (t.prototype.requestAsyncId = function (r, s, n) {
        return (
          n === void 0 && (n = 0), Ic.setInterval(r.flush.bind(r, this), n)
        );
      }),
      (t.prototype.recycleAsyncId = function (r, s, n) {
        if (
          (n === void 0 && (n = 0),
          n != null && this.delay === n && this.pending === !1)
        )
          return s;
        s != null && Ic.clearInterval(s);
      }),
      (t.prototype.execute = function (r, s) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var n = this._execute(r, s);
        if (n) return n;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (t.prototype._execute = function (r, s) {
        var n = !1,
          i;
        try {
          this.work(r);
        } catch (o) {
          (n = !0), (i = o || new Error("Scheduled action threw falsy error"));
        }
        if (n) return this.unsubscribe(), i;
      }),
      (t.prototype.unsubscribe = function () {
        if (!this.closed) {
          var r = this,
            s = r.id,
            n = r.scheduler,
            i = n.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            Li(i, this),
            s != null && (this.id = this.recycleAsyncId(n, s, null)),
            (this.delay = null),
            e.prototype.unsubscribe.call(this);
        }
      }),
      t
    );
  })(cw),
  uw = 1,
  Eo,
  oa = {};
function Ac(e) {
  return e in oa ? (delete oa[e], !0) : !1;
}
var Vf = {
    setImmediate: function (e) {
      var t = uw++;
      return (
        (oa[t] = !0),
        Eo || (Eo = Promise.resolve()),
        Eo.then(function () {
          return Ac(t) && e();
        }),
        t
      );
    },
    clearImmediate: function (e) {
      Ac(e);
    },
  },
  dw = Vf.setImmediate,
  hw = Vf.clearImmediate,
  Oc = {
    setImmediate: function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return dw.apply(void 0, us([], cs(e)));
    },
    clearImmediate: function (e) {
      return hw(e);
    },
    delegate: void 0,
  },
  fw = (function (e) {
    Yt(t, e);
    function t(r, s) {
      var n = e.call(this, r, s) || this;
      return (n.scheduler = r), (n.work = s), n;
    }
    return (
      (t.prototype.requestAsyncId = function (r, s, n) {
        return (
          n === void 0 && (n = 0),
          n !== null && n > 0
            ? e.prototype.requestAsyncId.call(this, r, s, n)
            : (r.actions.push(this),
              r._scheduled ||
                (r._scheduled = Oc.setImmediate(r.flush.bind(r, void 0))))
        );
      }),
      (t.prototype.recycleAsyncId = function (r, s, n) {
        var i;
        if ((n === void 0 && (n = 0), n != null ? n > 0 : this.delay > 0))
          return e.prototype.recycleAsyncId.call(this, r, s, n);
        var o = r.actions;
        s != null &&
          ((i = o[o.length - 1]) === null || i === void 0 ? void 0 : i.id) !==
            s &&
          (Oc.clearImmediate(s), r._scheduled === s && (r._scheduled = void 0));
      }),
      t
    );
  })(Wf),
  Pc = (function () {
    function e(t, r) {
      r === void 0 && (r = e.now),
        (this.schedulerActionCtor = t),
        (this.now = r);
    }
    return (
      (e.prototype.schedule = function (t, r, s) {
        return (
          r === void 0 && (r = 0),
          new this.schedulerActionCtor(this, t).schedule(s, r)
        );
      }),
      (e.now = El.now),
      e
    );
  })(),
  Hf = (function (e) {
    Yt(t, e);
    function t(r, s) {
      s === void 0 && (s = Pc.now);
      var n = e.call(this, r, s) || this;
      return (n.actions = []), (n._active = !1), n;
    }
    return (
      (t.prototype.flush = function (r) {
        var s = this.actions;
        if (this._active) {
          s.push(r);
          return;
        }
        var n;
        this._active = !0;
        do if ((n = r.execute(r.state, r.delay))) break;
        while ((r = s.shift()));
        if (((this._active = !1), n)) {
          for (; (r = s.shift()); ) r.unsubscribe();
          throw n;
        }
      }),
      t
    );
  })(Pc),
  gw = (function (e) {
    Yt(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.flush = function (r) {
        this._active = !0;
        var s = this._scheduled;
        this._scheduled = void 0;
        var n = this.actions,
          i;
        r = r || n.shift();
        do if ((i = r.execute(r.state, r.delay))) break;
        while ((r = n[0]) && r.id === s && n.shift());
        if (((this._active = !1), i)) {
          for (; (r = n[0]) && r.id === s && n.shift(); ) r.unsubscribe();
          throw i;
        }
      }),
      t
    );
  })(Hf),
  bl = new gw(fw),
  zf = new Hf(Wf),
  pw = zf,
  _w = new ut(function (e) {
    return e.complete();
  });
function qf(e) {
  return e && Me(e.schedule);
}
function Jf(e) {
  return e[e.length - 1];
}
function vw(e) {
  return qf(Jf(e)) ? e.pop() : void 0;
}
function ww(e, t) {
  return typeof Jf(e) == "number" ? e.pop() : t;
}
var Yf = function (e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function Qf(e) {
  return Me(e == null ? void 0 : e.then);
}
function Xf(e) {
  return Me(e[Sl]);
}
function Zf(e) {
  return (
    Symbol.asyncIterator && Me(e == null ? void 0 : e[Symbol.asyncIterator])
  );
}
function eg(e) {
  return new TypeError(
    "You provided " +
      (e !== null && typeof e == "object"
        ? "an invalid object"
        : "'" + e + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.",
  );
}
function mw() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var tg = mw();
function rg(e) {
  return Me(e == null ? void 0 : e[tg]);
}
function sg(e) {
  return Yv(this, arguments, function () {
    var r, s, n, i;
    return Bf(this, function (o) {
      switch (o.label) {
        case 0:
          (r = e.getReader()), (o.label = 1);
        case 1:
          o.trys.push([1, , 9, 10]), (o.label = 2);
        case 2:
          return [4, Rs(r.read())];
        case 3:
          return (
            (s = o.sent()),
            (n = s.value),
            (i = s.done),
            i ? [4, Rs(void 0)] : [3, 5]
          );
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Rs(n)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function ng(e) {
  return Me(e == null ? void 0 : e.getReader);
}
function vr(e) {
  if (e instanceof ut) return e;
  if (e != null) {
    if (Xf(e)) return Sw(e);
    if (Yf(e)) return yw(e);
    if (Qf(e)) return Ew(e);
    if (Zf(e)) return ig(e);
    if (rg(e)) return bw(e);
    if (ng(e)) return Iw(e);
  }
  throw eg(e);
}
function Sw(e) {
  return new ut(function (t) {
    var r = e[Sl]();
    if (Me(r.subscribe)) return r.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function yw(e) {
  return new ut(function (t) {
    for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
    t.complete();
  });
}
function Ew(e) {
  return new ut(function (t) {
    e.then(
      function (r) {
        t.closed || (t.next(r), t.complete());
      },
      function (r) {
        return t.error(r);
      },
    ).then(null, Gf);
  });
}
function bw(e) {
  return new ut(function (t) {
    var r, s;
    try {
      for (var n = ks(e), i = n.next(); !i.done; i = n.next()) {
        var o = i.value;
        if ((t.next(o), t.closed)) return;
      }
    } catch (a) {
      r = { error: a };
    } finally {
      try {
        i && !i.done && (s = n.return) && s.call(n);
      } finally {
        if (r) throw r.error;
      }
    }
    t.complete();
  });
}
function ig(e) {
  return new ut(function (t) {
    Aw(e, t).catch(function (r) {
      return t.error(r);
    });
  });
}
function Iw(e) {
  return ig(sg(e));
}
function Aw(e, t) {
  var r, s, n, i;
  return Jv(this, void 0, void 0, function () {
    var o, a;
    return Bf(this, function (l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), (r = Qv(e)), (l.label = 1);
        case 1:
          return [4, r.next()];
        case 2:
          if (((s = l.sent()), !!s.done)) return [3, 4];
          if (((o = s.value), t.next(o), t.closed)) return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (a = l.sent()), (n = { error: a }), [3, 11];
        case 6:
          return (
            l.trys.push([6, , 9, 10]),
            s && !s.done && (i = r.return) ? [4, i.call(r)] : [3, 8]
          );
        case 7:
          l.sent(), (l.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (n) throw n.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function as(e, t, r, s, n) {
  s === void 0 && (s = 0), n === void 0 && (n = !1);
  var i = t.schedule(function () {
    r(), n ? e.add(this.schedule(null, s)) : this.unsubscribe();
  }, s);
  if ((e.add(i), !n)) return i;
}
function og(e, t) {
  return (
    t === void 0 && (t = 0),
    jr(function (r, s) {
      r.subscribe(
        kr(
          s,
          function (n) {
            return as(
              s,
              e,
              function () {
                return s.next(n);
              },
              t,
            );
          },
          function () {
            return as(
              s,
              e,
              function () {
                return s.complete();
              },
              t,
            );
          },
          function (n) {
            return as(
              s,
              e,
              function () {
                return s.error(n);
              },
              t,
            );
          },
        ),
      );
    })
  );
}
function ag(e, t) {
  return (
    t === void 0 && (t = 0),
    jr(function (r, s) {
      s.add(
        e.schedule(function () {
          return r.subscribe(s);
        }, t),
      );
    })
  );
}
function Ow(e, t) {
  return vr(e).pipe(ag(t), og(t));
}
function Pw(e, t) {
  return vr(e).pipe(ag(t), og(t));
}
function Dw(e, t) {
  return new ut(function (r) {
    var s = 0;
    return t.schedule(function () {
      s === e.length
        ? r.complete()
        : (r.next(e[s++]), r.closed || this.schedule());
    });
  });
}
function Tw(e, t) {
  return new ut(function (r) {
    var s;
    return (
      as(r, t, function () {
        (s = e[tg]()),
          as(
            r,
            t,
            function () {
              var n, i, o;
              try {
                (n = s.next()), (i = n.value), (o = n.done);
              } catch (a) {
                r.error(a);
                return;
              }
              o ? r.complete() : r.next(i);
            },
            0,
            !0,
          );
      }),
      function () {
        return Me(s == null ? void 0 : s.return) && s.return();
      }
    );
  });
}
function lg(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new ut(function (r) {
    as(r, t, function () {
      var s = e[Symbol.asyncIterator]();
      as(
        r,
        t,
        function () {
          s.next().then(function (n) {
            n.done ? r.complete() : r.next(n.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Cw(e, t) {
  return lg(sg(e), t);
}
function xw(e, t) {
  if (e != null) {
    if (Xf(e)) return Ow(e, t);
    if (Yf(e)) return Dw(e, t);
    if (Qf(e)) return Pw(e, t);
    if (Zf(e)) return lg(e, t);
    if (rg(e)) return Tw(e, t);
    if (ng(e)) return Cw(e, t);
  }
  throw eg(e);
}
function Rw(e, t) {
  return t ? xw(e, t) : vr(e);
}
function Mw(e) {
  return e instanceof Date && !isNaN(e);
}
function Gn(e, t) {
  return jr(function (r, s) {
    var n = 0;
    r.subscribe(
      kr(s, function (i) {
        s.next(e.call(t, i, n++));
      }),
    );
  });
}
var Lw = Array.isArray;
function $w(e, t) {
  return Lw(t) ? e.apply(void 0, us([], cs(t))) : e(t);
}
function Kw(e) {
  return Gn(function (t) {
    return $w(e, t);
  });
}
function Bw(e, t, r, s, n, i, o, a) {
  var l = [],
    c = 0,
    u = 0,
    d = !1,
    f = function () {
      d && !l.length && !c && t.complete();
    },
    h = function (_) {
      return c < s ? p(_) : l.push(_);
    },
    p = function (_) {
      c++;
      var w = !1;
      vr(r(_, u++)).subscribe(
        kr(
          t,
          function (m) {
            t.next(m);
          },
          function () {
            w = !0;
          },
          void 0,
          function () {
            if (w)
              try {
                c--;
                for (
                  var m = function () {
                    var E = l.shift();
                    o || p(E);
                  };
                  l.length && c < s;

                )
                  m();
                f();
              } catch (E) {
                t.error(E);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      kr(t, h, function () {
        (d = !0), f();
      }),
    ),
    function () {}
  );
}
function $i(e, t, r) {
  return (
    r === void 0 && (r = 1 / 0),
    Me(t)
      ? $i(function (s, n) {
          return Gn(function (i, o) {
            return t(s, i, n, o);
          })(vr(e(s, n)));
        }, r)
      : (typeof t == "number" && (r = t),
        jr(function (s, n) {
          return Bw(s, n, e, r);
        }))
  );
}
function Uw(e) {
  return e === void 0 && (e = 1 / 0), $i(yl, e);
}
function Ys(e, t, r) {
  return r
    ? Ys(e, t).pipe(Kw(r))
    : new ut(function (s) {
        var n = function () {
            for (var o = [], a = 0; a < arguments.length; a++)
              o[a] = arguments[a];
            return s.next(o.length === 1 ? o[0] : o);
          },
          i = e(n);
        return Me(t)
          ? function () {
              return t(n, i);
            }
          : void 0;
      });
}
function cg(e, t, r) {
  e === void 0 && (e = 0), r === void 0 && (r = pw);
  var s = -1;
  return (
    t != null && (qf(t) ? (r = t) : (s = t)),
    new ut(function (n) {
      var i = Mw(e) ? +e - r.now() : e;
      i < 0 && (i = 0);
      var o = 0;
      return r.schedule(function () {
        n.closed ||
          (n.next(o++), 0 <= s ? this.schedule(void 0, s) : n.complete());
      }, i);
    })
  );
}
function Nw() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var r = vw(e),
    s = ww(e, 1 / 0),
    n = e;
  return n.length ? (n.length === 1 ? vr(n[0]) : Uw(s)(Rw(n, r))) : _w;
}
function Gr(e, t) {
  return jr(function (r, s) {
    var n = 0;
    r.subscribe(
      kr(s, function (i) {
        return e.call(t, i, n++) && s.next(i);
      }),
    );
  });
}
function Fw(e, t) {
  return Me(t) ? $i(e, t, 1) : $i(e, 1);
}
function ug(e) {
  e === void 0 && (e = {});
  var t = e.connector,
    r =
      t === void 0
        ? function () {
            return new Ne();
          }
        : t,
    s = e.resetOnError,
    n = s === void 0 ? !0 : s,
    i = e.resetOnComplete,
    o = i === void 0 ? !0 : i,
    a = e.resetOnRefCountZero,
    l = a === void 0 ? !0 : a;
  return function (c) {
    var u,
      d,
      f,
      h = 0,
      p = !1,
      _ = !1,
      w = function () {
        d == null || d.unsubscribe(), (d = void 0);
      },
      m = function () {
        w(), (u = f = void 0), (p = _ = !1);
      },
      E = function () {
        var D = u;
        m(), D == null || D.unsubscribe();
      };
    return jr(function (D, j) {
      h++, !_ && !p && w();
      var V = (f = f ?? r());
      j.add(function () {
        h--, h === 0 && !_ && !p && (d = bo(E, l));
      }),
        V.subscribe(j),
        !u &&
          h > 0 &&
          ((u = new Sn({
            next: function (R) {
              return V.next(R);
            },
            error: function (R) {
              (_ = !0), w(), (d = bo(m, n, R)), V.error(R);
            },
            complete: function () {
              (p = !0), w(), (d = bo(m, o)), V.complete();
            },
          })),
          vr(D).subscribe(u));
    })(c);
  };
}
function bo(e, t) {
  for (var r = [], s = 2; s < arguments.length; s++) r[s - 2] = arguments[s];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var n = new Sn({
      next: function () {
        n.unsubscribe(), e();
      },
    });
    return vr(t.apply(void 0, us([], cs(r)))).subscribe(n);
  }
}
function kw(e, t, r) {
  var s,
    n = !1;
  return (
    (s = e),
    ug({
      connector: function () {
        return new lw(s, t, r);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: n,
    })
  );
}
function to(e, t, r) {
  var s = Me(e) || t || r ? { next: e, error: t, complete: r } : e;
  return s
    ? jr(function (n, i) {
        var o;
        (o = s.subscribe) === null || o === void 0 || o.call(s);
        var a = !0;
        n.subscribe(
          kr(
            i,
            function (l) {
              var c;
              (c = s.next) === null || c === void 0 || c.call(s, l), i.next(l);
            },
            function () {
              var l;
              (a = !1),
                (l = s.complete) === null || l === void 0 || l.call(s),
                i.complete();
            },
            function (l) {
              var c;
              (a = !1),
                (c = s.error) === null || c === void 0 || c.call(s, l),
                i.error(l);
            },
            function () {
              var l, c;
              a && ((l = s.unsubscribe) === null || l === void 0 || l.call(s)),
                (c = s.finalize) === null || c === void 0 || c.call(s);
            },
          ),
        );
      })
    : yl;
}
function jw(e, t) {
  return jr(function (r, s) {
    var n = t ?? {},
      i = n.leading,
      o = i === void 0 ? !0 : i,
      a = n.trailing,
      l = a === void 0 ? !1 : a,
      c = !1,
      u = null,
      d = null,
      f = !1,
      h = function () {
        d == null || d.unsubscribe(), (d = null), l && (w(), f && s.complete());
      },
      p = function () {
        (d = null), f && s.complete();
      },
      _ = function (m) {
        return (d = vr(e(m)).subscribe(kr(s, h, p)));
      },
      w = function () {
        if (c) {
          c = !1;
          var m = u;
          (u = null), s.next(m), !f && _(m);
        }
      };
    r.subscribe(
      kr(
        s,
        function (m) {
          (c = !0), (u = m), !(d && !d.closed) && (o ? w() : _(m));
        },
        function () {
          (f = !0), !(l && c && d && !d.closed) && s.complete();
        },
      ),
    );
  });
}
function Il(e, t, r) {
  t === void 0 && (t = zf);
  var s = cg(e, t);
  return jw(function () {
    return s;
  }, r);
}
const Gw = Ys(
    (e) => chrome.tabs.onUpdated.addListener(e),
    (e) => chrome.tabs.onUpdated.removeListener(e),
    (e, t, r) => ({ tabId: e, changeInfo: t, tab: r }),
  ).pipe(
    Gr(
      ({ tab: e, changeInfo: t }) =>
        !!t.url && t.status === "loading" && !!e.url,
    ),
    Gn(({ tab: e, tabId: t }) => ({ tabId: t, url: e.url })),
  ),
  Ww = Ys(
    (e) => chrome.webNavigation.onCommitted.addListener(e),
    (e) => chrome.webNavigation.onCommitted.removeListener(e),
  ).pipe(
    Gr((e) => e.transitionType === "reload"),
    Gn(({ tabId: e, url: t }) => ({ tabId: e, url: t })),
  );
Nw(Gw, Ww);
const EM = Ys(
    (e) => chrome.action.onClicked.addListener(e),
    (e) => chrome.action.onClicked.removeListener(e),
  ).pipe(Il(200, bl, { leading: !0, trailing: !1 })),
  bM = Ys(
    (e) => chrome.contextMenus.onClicked.addListener(e),
    (e) => chrome.contextMenus.onClicked.removeListener(e),
  ).pipe(Il(200, bl, { leading: !0, trailing: !1 })),
  IM = Ys(
    (e) => chrome.tabs.onActivated.addListener(e),
    (e) => chrome.tabs.onActivated.removeListener(e),
  );
var T = ((e) => (
  (e[(e.Unknown = 0)] = "Unknown"),
  (e[(e.PDF = 1)] = "PDF"),
  (e[(e.Web = 2)] = "Web"),
  (e[(e.Word = 3)] = "Word"),
  (e[(e.PPT = 4)] = "PPT"),
  (e[(e.WeChatArticle = 6)] = "WeChatArticle"),
  (e[(e.MarkDown = 7)] = "MarkDown"),
  (e[(e.Image = 9)] = "Image"),
  (e[(e.Note = 11)] = "Note"),
  (e[(e.AISession = 12)] = "AISession"),
  (e[(e.Folder = 99)] = "Folder"),
  e
))(T || {});
const Vw = {
  0: "",
  11: "笔记",
  1: "PDF",
  3: "Word",
  2: "网址",
  12: "AI对话",
  6: "公众号",
  9: "图片",
  7: "MD",
  4: "PPT",
  99: "文件夹",
};
var Ge = ((e) => (
  (e[(e.NoCollected = 0)] = "NoCollected"),
  (e[(e.Uploading = 1)] = "Uploading"),
  (e[(e.Collected = 2)] = "Collected"),
  (e[(e.Error = 3)] = "Error"),
  e
))(Ge || {});
const AM = [1, 3, 9, 7, 4],
  OM = [1, 3, 9, 12, 11, 2, 6, 7, 4, 99];
var dg = ((e) => (
  (e[(e.Suc = 0)] = "Suc"),
  (e[(e.PreUpload = 1)] = "PreUpload"),
  (e[(e.Uploading = 2)] = "Uploading"),
  (e[(e.UploadFail = 3)] = "UploadFail"),
  (e[(e.ParseIng = 4)] = "ParseIng"),
  (e[(e.ParseFail = 5)] = "ParseFail"),
  e
))(dg || {});
T.Unknown + "",
  T.PDF + "",
  T.Web + "",
  T.Word + "",
  T.AISession + "",
  T.Image + "",
  T.WeChatArticle + "",
  T.Note + "",
  T.MarkDown + "",
  T.PPT + "",
  T.Folder + "";
T.PDF, T.Word, T.Image, T.MarkDown, T.PPT;
T.WeChatArticle, T.Note, T.AISession;
T.Web;
var ro = ((e) => (
    (e.AddKnowledge = "AddKnowledge"),
    (e.ReplaceKnowledge = "ReplaceKnowledge"),
    e
  ))(ro || {}),
  Ki = ((e) => (
    (e.None = "None"), (e.Qa = "Qa"), (e.KnowledgeBase = "KnowledgeBase"), e
  ))(Ki || {}),
  Qs = ((e) => (
    (e[(e.NotUse = 0)] = "NotUse"),
    (e[(e.Temporary = 1)] = "Temporary"),
    (e[(e.INDEX_STORAGE_TYPE_LONG_TERM = 2)] = "INDEX_STORAGE_TYPE_LONG_TERM"),
    e
  ))(Qs || {}),
  rt = ((e) => (
    (e[(e.MediaInit = 0)] = "MediaInit"),
    (e[(e.MediaParsing = 1)] = "MediaParsing"),
    (e[(e.MediaParseSuccess = 2)] = "MediaParseSuccess"),
    (e[(e.MediaParseError = 3)] = "MediaParseError"),
    e
  ))(rt || {}),
  zt = ((e) => (
    (e.InvalidMediaType = "InvalidMediaType"),
    (e.OversizeFile = "OversizeFile"),
    (e.ZeroSizeFile = "ZeroSizeFile"),
    (e.None = "None"),
    e
  ))(zt || {}),
  gt = ((e) => (
    (e.CosError = "CosError"),
    (e.UnsupportMedia = "UnsupportMedia"),
    (e.OversizeFile = "OversizeFile"),
    (e.ZeroSizeFile = "ZeroSizeFile"),
    (e.CreateMediaError = "CreateMediaError"),
    (e.UserSpaceShortage = "UserSpaceShortage"),
    (e.UserSpaceError = "UserSpaceError"),
    (e.UserCancel = "UserCancel"),
    e
  ))(gt || {}),
  it = ((e) => (
    (e.Init = "Init"),
    (e.Uploading = "Uploading"),
    (e.UploadError = "UploadError"),
    (e.UploadFinish = "UploadFinish"),
    (e.Parsing = "Parsing"),
    (e.ParseError = "ParseError"),
    (e.ParseFinish = "ParseFinish"),
    (e.Error = "Error"),
    e
  ))(it || {}),
  se = ((e) => (
    (e[(e.Init = 0)] = "Init"),
    (e[(e.Ready = 1)] = "Ready"),
    (e[(e.Loading = 2)] = "Loading"),
    (e[(e.End = 3)] = "End"),
    (e[(e.Error = 4)] = "Error"),
    e
  ))(se || {}),
  Y = ((e) => (
    (e.Init = "init"),
    (e.WaitUpload = "waitUpload"),
    (e.Uploading = "uploading"),
    (e.UploadError = "uploadError"),
    (e.UploadPause = "uploadPause"),
    (e.WaitParse = "waitParse"),
    (e.Parsing = "parsing"),
    (e.ParsingError = "parsingError"),
    (e.Finish = "finish"),
    (e.Error = "error"),
    e
  ))(Y || {}),
  mt = ((e) => (
    (e.Error = "发生异常，请您稍后重试～"),
    (e.LoginError = "当前登录状态异常, 请重新登录"),
    (e.Empty = "当前知识库内容为空"),
    (e.EmptyFolder = "当前文件夹内容为空"),
    (e.Loading = "知识库加载中..."),
    e
  ))(mt || {}),
  js = ((e) => (
    (e[(e.DefaultSortType = 0)] = "DefaultSortType"),
    (e[(e.AscSortType = 1)] = "AscSortType"),
    (e[(e.SizeDescSortType = 2)] = "SizeDescSortType"),
    (e[(e.TitleSortType = 3)] = "TitleSortType"),
    e
  ))(js || {}),
  Al = ((e) => (
    (e[(e.UnknownFilterType = 0)] = "UnknownFilterType"),
    (e[(e.MediaStateFilterType = 1)] = "MediaStateFilterType"),
    (e[(e.TagsFilterType = 2)] = "TagsFilterType"),
    e
  ))(Al || {}),
  Bi = ((e) => (
    (e.Refresh = "KnowledgeBaseMessageAction_Refresh"),
    (e.AddAiSession = "KnowledgeBaseMessageAction_AddAiSession"),
    (e.ClearUrlStatus = "KnowledgeBaseMessageAction_ClearUrlStatus"),
    (e.AddKnowledgeBase = "KnowledgeBaseMessageAction_AddKnowledgeBase"),
    (e.DelKnowledgeBase = "KnowledgeBaseMessageAction_DelKnowledgeBase"),
    e
  ))(Bi || {});
const PM = (e, t) =>
  !(typeof e != "object" || (e == null ? void 0 : e.action) !== t);
var aa = ((e) => ((e[(e.Move = 0)] = "Move"), (e[(e.Copy = 1)] = "Copy"), e))(
  aa || {},
);
const Hw = { 0: "移动", 1: "复制" };
var De = ((e) => (
    (e[(e.InvalidResp = -9999)] = "InvalidResp"),
    (e[(e.Success = 0)] = "Success"),
    (e[(e.OverQps = 3)] = "OverQps"),
    (e[(e.ClientAbort = 4)] = "ClientAbort"),
    (e[(e.BetaNoQuota = 5)] = "BetaNoQuota"),
    (e[(e.BadRequest = 1e3)] = "BadRequest"),
    (e[(e.AuthError = 1100)] = "AuthError"),
    (e[(e.AuthNeedRefresh = 1101)] = "AuthNeedRefresh"),
    (e[(e.NotBetaUser = 1102)] = "NotBetaUser"),
    (e[(e.PDFNeedPwd = 1203)] = "PDFNeedPwd"),
    (e[(e.PDFPwdError = 1204)] = "PDFPwdError"),
    (e[(e.InvalidSource = 1300)] = "InvalidSource"),
    (e[(e.FrequencyLimit = 1301)] = "FrequencyLimit"),
    (e[(e.FileParsing = 1302)] = "FileParsing"),
    (e[(e.GptError = 1400)] = "GptError"),
    (e[(e.GptExpired = 1402)] = "GptExpired"),
    (e[(e.GptEmptyContent = 1403)] = "GptEmptyContent"),
    (e[(e.GptRefuse = 1404)] = "GptRefuse"),
    (e[(e.GptWaitFileParse = 1407)] = "GptWaitFileParse"),
    (e[(e.SecurityError = 3001)] = "SecurityError"),
    (e[(e.RedHeader = 3002)] = "RedHeader"),
    (e[(e.HitBlacklist = 3003)] = "HitBlacklist"),
    (e[(e.LoginExpired = 41)] = "LoginExpired"),
    (e[(e.TokenExpired = 600001)] = "TokenExpired"),
    (e[(e.TokenRefreshError = 110030)] = "TokenRefreshError"),
    (e[(e.ServerInternalError = 300001)] = "ServerInternalError"),
    (e[(e.ReqWithInvalidQbid = 300101)] = "ReqWithInvalidQbid"),
    (e[(e.InvalidFileId = 300102)] = "InvalidFileId"),
    (e[(e.AccountInvalid = 40030)] = "AccountInvalid"),
    (e[(e.CallNativeTimeout = 996)] = "CallNativeTimeout"),
    (e[(e.ExceedMemberCountLimit = 100002)] = "ExceedMemberCountLimit"),
    (e[(e.ExceedMemberAdminCountLimit = 100005)] =
      "ExceedMemberAdminCountLimit"),
    (e[(e.CreatedSameNameKnowledgeBase = 40001)] =
      "CreatedSameNameKnowledgeBase"),
    (e[(e.RenamedKnowledgeSameName = 40003)] = "RenamedKnowledgeSameName"),
    (e[(e.KnowledgeBaseAuditSecurityHit = 50001)] =
      "KnowledgeBaseAuditSecurityHit"),
    (e[(e.PermissionDenied = 80001)] = "PermissionDenied"),
    (e[(e.KnowledgeBaseDeleted = 80011)] = "KnowledgeBaseDeleted"),
    (e[(e.ErrCodeKnowledgeSpaceLimit = 500012)] = "ErrCodeKnowledgeSpaceLimit"),
    (e[(e.ErrCodeKnowledgeMatrixIdNotExist = 100001)] =
      "ErrCodeKnowledgeMatrixIdNotExist"),
    (e[(e.ErrCodeServerExecFail = 200001)] = "ErrCodeServerExecFail"),
    (e[(e.ErrCodeNameSecurityStrike = 140022)] = "ErrCodeNameSecurityStrike"),
    (e[(e.ErrCodeAvatarSecurityStrike = 140023)] =
      "ErrCodeAvatarSecurityStrike"),
    (e[(e.ErrCodeNameForbidden = 140024)] = "ErrCodeNameForbidden"),
    (e[(e.ErrCodeAccountIsRegistered = 141036)] = "ErrCodeAccountIsRegistered"),
    (e[(e.ErrCodeVerifyCodeIsExpired = 142050)] = "ErrCodeVerifyCodeIsExpired"),
    (e[(e.ErrCodeVerifyCodeIsInvalid = 142051)] = "ErrCodeVerifyCodeIsInvalid"),
    (e[(e.ErrCodeFolderNumberLimit = 30002)] = "ErrCodeFolderNumberLimit"),
    (e[(e.ErrCodeFolderDepthLimit = 30003)] = "ErrCodeFolderDepthLimit"),
    (e[(e.ErrCodeFolderNoExist = 30005)] = "ErrCodeFolderNoExist"),
    e
  ))(De || {}),
  Kr = ((e) => (
    (e[(e.FrontendStop = -1)] = "FrontendStop"),
    (e[(e.FrontendException = -2)] = "FrontendException"),
    (e[(e.InvalidContext = -3)] = "InvalidContext"),
    (e[(e.FrontendUnknown = -4)] = "FrontendUnknown"),
    (e[(e.FrontendTimeout = -5)] = "FrontendTimeout"),
    (e[(e.ServerError = -6)] = "ServerError"),
    (e[(e.EmptyMediaContext = -7)] = "EmptyMediaContext"),
    (e[(e.EmptyArticleId = -8)] = "EmptyArticleId"),
    (e[(e.ArticleContentFail = -9)] = "ArticleContentFail"),
    (e[(e.HighRiskWeb = -10)] = "HighRiskWeb"),
    (e[(e.InvalidFile = -11)] = "InvalidFile"),
    (e[(e.CosUploadFail = -12)] = "CosUploadFail"),
    (e[(e.InitSessionFail = -13)] = "InitSessionFail"),
    (e[(e.FileInfoFail = -14)] = "FileInfoFail"),
    (e[(e.FrontendNotSupport = -15)] = "FrontendNotSupport"),
    (e[(e.FrontendRenderError = -16)] = "FrontendRenderError"),
    (e[(e.EmptyRespData = -17)] = "EmptyRespData"),
    e
  ))(Kr || {});
const DM = "服务繁忙，请稍后重试";
var hg = ((e) => (
  (e[(e.UNKNOWN_TYPE = 0)] = "UNKNOWN_TYPE"),
  (e[(e.QQ = 1)] = "QQ"),
  (e[(e.WX = 2)] = "WX"),
  (e[(e.PH = 3)] = "PH"),
  (e[(e.GUID = 4)] = "GUID"),
  (e[(e.QQ_MINI = 5)] = "QQ_MINI"),
  (e[(e.WX_MINI = 6)] = "WX_MINI"),
  e
))(hg || {});
class TM extends Error {
  constructor(t) {
    super(t), (this.name = "TimeoutError");
  }
}
class xe extends Error {
  constructor(t, r) {
    super(t), (this.name = "UnexpectedError"), (this.cause = r);
  }
}
class te extends Error {
  constructor(t, r = -1) {
    super(t), (this.message = t), (this.code = r), (this.name = "RequestError");
  }
  toString() {
    return `${this.name}: ${this.message} (code: ${this.code})
${this.stack}`;
  }
}
const Er = 1e3;
var gr = ((e) => (
    (e[(e.InlineIndexModal = 300)] = "InlineIndexModal"),
    (e[(e.UploadFile = 100 * Er)] = "UploadFile"),
    (e[(e.SSE = 60 * Er)] = "SSE"),
    (e[(e.Request = 16 * Er)] = "Request"),
    (e[(e.RetryGap = 1 * Er)] = "RetryGap"),
    (e[(e.OneSecond = Er)] = "OneSecond"),
    (e[(e.ThreeSecond = 3 * Er)] = "ThreeSecond"),
    (e[(e.DialogWaitingTime = 300 * Er)] = "DialogWaitingTime"),
    (e[(e.canvasToImg = 10 * Er)] = "canvasToImg"),
    e
  ))(gr || {}),
  la = ((e) => ((e.ImaFetchManner = "ima-fetch-manner"), e))(la || {}),
  Ui = ((e) => ((e.Silent = "Silent"), (e.Active = "Active"), e))(Ui || {}),
  zw = ((e) => (
    (e.InvalidStatusCode = "InvalidStatusCode"),
    (e.InvalidRespCode = "InvalidRespCode"),
    (e.RefreshTokenExpired = "RefreshTokenExpired"),
    (e.TokenExpired = "TokenExpired"),
    (e.ShowLoginPrompt = "ShowLoginPrompt"),
    e
  ))(zw || {}),
  Ce = ((e) => (
    (e[(e.Hunyuan = 0)] = "Hunyuan"),
    (e[(e.Deepseek = 1)] = "Deepseek"),
    (e[(e.HunyuanT1 = 2)] = "HunyuanT1"),
    (e[(e.DeepseekV3 = 3)] = "DeepseekV3"),
    e
  ))(Ce || {}),
  rr = ((e) => (
    (e[(e.Question = 0)] = "Question"),
    (e[(e.ExtractText = 1)] = "ExtractText"),
    (e[(e.InterpretImage = 2)] = "InterpretImage"),
    (e[(e.ContinueWriting = 3)] = "ContinueWriting"),
    (e[(e.Proofread = 4)] = "Proofread"),
    (e[(e.ExpandWriting = 5)] = "ExpandWriting"),
    (e[(e.AbbreviateWriting = 6)] = "AbbreviateWriting"),
    (e[(e.Translate = 7)] = "Translate"),
    (e[(e.PolishMoreVivid = 8)] = "PolishMoreVivid"),
    (e[(e.PolishMoreFormal = 9)] = "PolishMoreFormal"),
    (e[(e.PolishMoreFriendly = 10)] = "PolishMoreFriendly"),
    (e[(e.PolishMoreColloquial = 11)] = "PolishMoreColloquial"),
    (e[(e.GenerateOutline = 12)] = "GenerateOutline"),
    (e[(e.SummarizeText = 13)] = "SummarizeText"),
    (e[(e.KnowledgeQa = 14)] = "KnowledgeQa"),
    (e[(e.DeepResearch = 15)] = "DeepResearch"),
    (e[(e.ArticleGeneration = 16)] = "ArticleGeneration"),
    (e[(e.GenerateMindMap = 17)] = "GenerateMindMap"),
    (e[(e.Explain = 18)] = "Explain"),
    (e[(e.QuickRead = 19)] = "QuickRead"),
    (e[(e.SmartWriting = 20)] = "SmartWriting"),
    (e[(e.PaperWriting = 21)] = "PaperWriting"),
    (e[(e.EssayWriting = 22)] = "EssayWriting"),
    (e[(e.ReflectionWriting = 23)] = "ReflectionWriting"),
    (e[(e.CreativeCopywriting = 24)] = "CreativeCopywriting"),
    (e[(e.FinancialReportExplain = 25)] = "FinancialReportExplain"),
    (e[(e.Illustrate = 26)] = "Illustrate"),
    (e[(e.GenerateMultipleImages = 27)] = "GenerateMultipleImages"),
    e
  ))(rr || {});
Ce.Hunyuan;
const Dc = { renderLink: !0, renderImageLink: !0, renderIndex: !0 },
  Tc = { renderLink: !1, renderImageLink: !1, renderIndex: !0 };
Ce.Deepseek + "", Ce.HunyuanT1 + "", Ce.Hunyuan + "", Ce.DeepseekV3 + "";
rr.SummarizeText;
rr.GenerateMindMap;
rr.InterpretImage;
rr.ExtractText;
var ge = ((e) => (
    (e[(e.Waiting = 0)] = "Waiting"),
    (e[(e.Uploading = 1)] = "Uploading"),
    (e[(e.Paused = 2)] = "Paused"),
    (e[(e.Finish = 3)] = "Finish"),
    (e[(e.Error = 4)] = "Error"),
    (e[(e.Cancel = 5)] = "Cancel"),
    (e[(e.OversizeFile = 6)] = "OversizeFile"),
    (e[(e.ZeroSizeFile = 7)] = "ZeroSizeFile"),
    (e[(e.UnsupportMediaType = 8)] = "UnsupportMediaType"),
    e
  ))(ge || {}),
  Gs = ((e) => (
    (e[(e.Progress = 0)] = "Progress"), (e[(e.Completed = 1)] = "Completed"), e
  ))(Gs || {});
const fg = Symbol.for("UPLOAD_SERVICE"),
  qw = Symbol.for("MAX_PARALLEL_UPLOAD_SIZE"),
  CM = Symbol.for("ID_UPLOAD_CONFIG"),
  xM = Symbol.for("ID_GET_UPLOAD_CONFIG"),
  gg = Symbol.for("ID_UPLOAD_API"),
  RM = Symbol.for("ID_TENCENT_COS"),
  Jw = 150 * 1024 * 1024,
  MM = "150MB",
  LM = "30MB";
var Te = ((e) => (
  (e[(e.Empty = 1e4)] = "Empty"),
  (e[(e.Meta = 91)] = "Meta"),
  (e[(e.Control = 17)] = "Control"),
  (e[(e.Shift = 16)] = "Shift"),
  (e[(e.Alt = 18)] = "Alt"),
  (e[(e.CapsLock = 20)] = "CapsLock"),
  e
))(Te || {});
Te.Meta + "",
  Te.Control + "",
  Te.Shift + "",
  Te.Alt + "",
  Te.CapsLock + "",
  Te.Empty + "";
Te.Meta + "",
  Te.Control + "",
  Te.Shift + "",
  Te.Alt + "",
  Te.CapsLock + "",
  Te.Empty + "";
Te.Meta + "",
  Te.Control + "",
  Te.Shift + "",
  Te.Alt + "",
  Te.CapsLock + "",
  Te.Empty + "";
Te.Meta + "",
  Te.Control + "",
  Te.Shift + "",
  Te.Alt + "",
  Te.CapsLock + "",
  Te.Empty + "";
var Je = ((e) => (
  (e.ChineseSimplified = "zh-CN"),
  (e.ChineseTraditional = "zh-TW"),
  (e.English = "en"),
  (e.Japanese = "ja"),
  (e.Korean = "ko"),
  (e.French = "fr"),
  (e.Spanish = "es"),
  (e.Russian = "ru"),
  (e.German = "de"),
  (e.Portuguese = "pt"),
  (e.Italian = "it"),
  (e.Arabic = "ar"),
  (e.Vietnamese = "vi"),
  (e.Malay = "ms"),
  (e.Turkish = "tr"),
  (e.Indonesian = "id"),
  e
))(Je || {});
Je.ChineseSimplified,
  Je.ChineseTraditional,
  Je.English,
  Je.Japanese,
  Je.Korean,
  Je.French,
  Je.Spanish,
  Je.Russian,
  Je.German,
  Je.Portuguese,
  Je.Italian,
  Je.Arabic,
  Je.Vietnamese,
  Je.Malay,
  Je.Turkish,
  Je.Indonesian;
var K = ((e) => (
  (e.Unknown = "unknown"),
  (e.Mac = "mac"),
  (e.Windows = "windows"),
  (e.Android = "android"),
  (e.IOS = "ios"),
  (e.HarmonyOS = "harmonyOS"),
  e
))(K || {});
const $M = {
  mac: "256020",
  windows: "256021",
  android: "256017",
  ios: "256018",
  unknown: "256016",
  harmonyOS: "256016",
};
K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "";
K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "";
K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "";
K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "";
K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "",
  K.Windows + "",
  K.Mac + "",
  K.Unknown + "",
  K.Android + "",
  K.IOS + "",
  K.HarmonyOS + "";
var nt = ((e) => (
    (e.UserSpaceShortage = "当前知识库剩余空间不足"),
    (e.CollectSuccess = "已加入个人知识库"),
    (e.ShareCollectSuccess = "已加入该知识库"),
    (e.ShareUncollectFail = "已移出该知识库"),
    (e.UnCollectSuccess = "已移出个人知识库"),
    (e.CollectFail = "加入知识库失败"),
    (e.UnCollectFail = "移出知识库失败"),
    (e.UnsupportedCollect = "当前资源类型不支持加入知识库"),
    (e.UnknownError = "当前操作异常，请稍后再试"),
    (e.OversizeFile = "上传失败，超过最大文件150MB的限制"),
    (e.ZeroSizeFile = "上传失败，不支持上传空内容文件"),
    (e.WrongPassword = "上传失败，输入密码不正确"),
    e
  ))(nt || {}),
  tt = ((e) => (
    (e.KnowledgePageExp = "knowledge_page_exp"),
    (e.KnowledgeSearchPanelExp = "knowledge_search_panel_exp"),
    (e.KnowledgeSearchEntryExp = "knowledge_search_entry_exp"),
    (e.KnowledgeSearchEntryClick = "knowledge_search_entry_click"),
    (e.KnowledgeSearchQaClick = "knowledge_search_qa_click"),
    (e.KnowledgeSearchInternetClick = "knowledge_search_internet_click"),
    (e.KnowledgeSortClick = "knowledge_sort_click"),
    (e.TagEditClick = "tag_edit_click"),
    (e.KnowledgeFolderAdd = "knowledge_folder_add"),
    (e.FileDelete = "knowledge_delete_click"),
    (e.KnowledgeDeleteSuc = "knowledge_delete_suc"),
    (e.KnowledgeDeleteFail = "knowledge_delete_fail"),
    (e.KnowledgeRenameSuc = "knowledge_rename_suc"),
    (e.UploadPanelExp = "upload_panel_exp"),
    (e.FileUploadSuc = "file_upload_suc"),
    (e.FileUploadFail = "file_upload_fail"),
    (e.FileParseSuc = "file_parse_suc"),
    (e.FileParseFail = "file_parse_fail"),
    (e.KnowledgeAddClick = "knowledge_add_click"),
    (e.MemberPanelExp = "member_panel_exp"),
    (e.MemberManageSuc = "member_manage_suc"),
    (e.MemberManageFail = "member_manage_fail"),
    (e.KnowledgeCatExp = " knowledge_cat_exp"),
    (e.KnowledgeCatClick = " knowledge_cat_click"),
    (e.FileOpenClick = "file_open_click"),
    (e.KnowledgeBaseAddPanelExp = "knowledge_base_add_panel_exp"),
    (e.KnowledgeBaseAddSuc = "knowledge_base_add_suc"),
    (e.KnowledgeBaseAddFail = "knowledge_base_add_fail"),
    (e.KnowledgeBaseSetPanelExp = "knowledge_base_set_panel_exp"),
    (e.KnowledgeBaseSetSuc = "knowledge_base_set_suc"),
    (e.KnowledgeBaseSetFail = "knowledge_base_set_fail"),
    (e.KnowledgeBaseApplicationClick = "knowledge_base_application_click"),
    (e.KnowledgeBaseJoinClick = "knowledge_base_join_click"),
    (e.KnowledgeBaseQuitClick = "knowledge_base_quit_click"),
    (e.KnowledgeBaseDeleteSuc = "knowledge_base_delete_suc"),
    (e.KnowledgeBaseDeleteFail = "knowledge_base_delete_fail"),
    (e.KnowledgeBaseSharePanelExp = "knowledge_share_panel_exp"),
    (e.KnowledgeBaseShareClick = "knowledge_share_click"),
    (e.TagPanelExpand = "tag_panel_expand"),
    (e.TagFilterClick = "tag_filter_click"),
    (e.TagRenameSuc = "tag_rename_suc"),
    (e.TagDeleteSuc = "tag_delete_suc"),
    (e.KnowledgeFileMoveClick = "knowledge_file_move_click"),
    (e.KnowledgeFileMoveSuc = "knowledge_file_move_suc"),
    (e.PluginLoginExp = "plugin_login_exp"),
    (e.PluginScanSuc = "plugin_scan_suc"),
    (e.PluginLoginSuc = "plugin_login_suc"),
    (e.PluginLoginFail = "plugin_login_fail"),
    (e.PluginExitSuc = "plugin_exit_suc"),
    (e.PluginPanelExp = "plugin_panel_exp"),
    (e.PluginKnowledgeClick = "plugin_knowledge_click"),
    (e.PluginOpenImaClick = "plugin_openima_click"),
    (e.PluginUserClick = "plugin_user_click"),
    e
  ))(tt || {}),
  St = ((e) => (
    (e[(e.AddAdmin = 1)] = "AddAdmin"),
    (e[(e.RemoveAdmin = 2)] = "RemoveAdmin"),
    (e[(e.RemoveMember = 3)] = "RemoveMember"),
    (e[(e.PassMemberApply = 4)] = "PassMemberApply"),
    (e[(e.RejectMemberApply = 5)] = "RejectMemberApply"),
    e
  ))(St || {}),
  Is = ((e) => (
    (e[(e.ExceedMemberLimit = 1)] = "ExceedMemberLimit"),
    (e[(e.ExceedAdminLimit = 2)] = "ExceedAdminLimit"),
    (e[(e.Other = 3)] = "Other"),
    e
  ))(Is || {}),
  Zr = ((e) => (
    (e[(e.MyKnowledgeBase = 1)] = "MyKnowledgeBase"),
    (e[(e.ShareKnowledgeBase = 2)] = "ShareKnowledgeBase"),
    (e[(e.ImportKnowledgeBase = 3)] = "ImportKnowledgeBase"),
    (e[(e.Homepage = 4)] = "Homepage"),
    (e[(e.HomeDocument = 5)] = "HomeDocument"),
    (e[(e.HomeEssay = 6)] = "HomeEssay"),
    (e[(e.HomeTranslation = 7)] = "HomeTranslation"),
    (e[(e.AiChat = 8)] = "AiChat"),
    (e[(e.NoteChatInput = 9)] = "NoteChatInput"),
    e
  ))(Zr || {}),
  hn = ((e) => (
    (e.None = "none"),
    (e.DocumentInterpretation = "documentInterpretation"),
    (e.EssayWriting = "essayWriting"),
    (e.SmartTranslation = "smartTranslation"),
    e
  ))(hn || {});
hn.None + "",
  hn.DocumentInterpretation + "",
  hn.EssayWriting + "",
  hn.SmartTranslation + "";
var qt = ((e) => (
    (e.Expo = "knowledge_matrix_expo"),
    (e.VisitorExpo = "knowledge_matrix_visitor_expo"),
    (e.Register = "knowledge_matrix_register"),
    (e.VerifyPhoneNumber = "knowledge_matrix_verify_phone_number"),
    (e.RegisterSuc = "knowledge_matrix_register_success"),
    (e.ModifyAvatarSuc = "knowledge_matrix_modify_avatar_suc"),
    (e.ModifyNicknameSuc = "knowledge_matrix_modify_nickname_suc"),
    (e.ModifyAvatarFail = "knowledge_matrix_modify_avatar_fail"),
    (e.ModifyNicknameFail = "knowledge_matrix_modify_nickname_fail"),
    e
  ))(qt || {}),
  ca = ((e) => (
    (e[(e.DefaultSearchPolicy = 0)] = "DefaultSearchPolicy"),
    (e[(e.KnowledgeImportSearchPolicy = 1)] = "KnowledgeImportSearchPolicy"),
    e
  ))(ca || {}),
  Br = ((e) => (
    (e[(e.Unknown = 0)] = "Unknown"),
    (e[(e.Mine = 1)] = "Mine"),
    (e[(e.Created = 2)] = "Created"),
    (e[(e.Joined = 3)] = "Joined"),
    (e[(e.Recent = 4)] = "Recent"),
    (e[(e.Share = 5)] = "Share"),
    e
  ))(Br || {}),
  pg = ((e) => (
    (e[(e.Undefined = 0)] = "Undefined"),
    (e[(e.Public = 1)] = "Public"),
    (e[(e.Private = 2)] = "Private"),
    (e[(e.Square = 3)] = "Square"),
    e
  ))(pg || {}),
  ye = ((e) => (
    (e[(e.Visitor = 0)] = "Visitor"),
    (e[(e.User = 100)] = "User"),
    (e[(e.Admin = 9e3)] = "Admin"),
    (e[(e.Creator = 1e4)] = "Creator"),
    e
  ))(ye || {}),
  vn = ((e) => (
    (e.ForbidMemberAccessContent = "forbidMemberAccessContent"),
    (e.RequiresApprovalForJoin = "requiresApprovalForJoin"),
    (e.AccessStatus = "accessStatus"),
    e
  ))(vn || {}),
  Ol = ((e) => (
    (e[(e.FieldAuditStatusUndefined = 0)] = "FieldAuditStatusUndefined"),
    (e[(e.FieldAuditStatusAuditing = 1)] = "FieldAuditStatusAuditing"),
    (e[(e.FieldAuditStatusApproved = 2)] = "FieldAuditStatusApproved"),
    (e[(e.FieldAuditStatusNotApproved = 3)] = "FieldAuditStatusNotApproved"),
    e
  ))(Ol || {}),
  Ni = ((e) => (
    (e.Folder = "folder"), (e.File = "file"), (e.LoadMore = "loadMore"), e
  ))(Ni || {}),
  Lr = ((e) => (
    (e[(e.Undefined = 0)] = "Undefined"),
    (e[(e.Name = 1)] = "Name"),
    (e[(e.CoverCosKey = 2)] = "CoverCosKey"),
    (e[(e.Description = 3)] = "Description"),
    (e[(e.AccessStatus = 4)] = "AccessStatus"),
    (e[(e.ForbidMemberAccessContent = 5)] = "ForbidMemberAccessContent"),
    (e[(e.RequiresApprovalForJoin = 6)] = "RequiresApprovalForJoin"),
    (e[(e.RecommendedQuestions = 7)] = "RecommendedQuestions"),
    e
  ))(Lr || {}),
  ft = ((e) => (
    (e.Unknown = "Unknown"),
    (e.MineKnowledgeBaseId = "MineKnowledgeBaseId"),
    (e.ShareKnowledgeBaseId = "ShareKnowledgeBaseId"),
    (e.ShareId = "ShareId"),
    e
  ))(ft || {}),
  _g = ((e) => (
    (e[(e.Unknown = 1)] = "Unknown"),
    (e[(e.Normal = 2)] = "Normal"),
    (e[(e.Forbidden = 3)] = "Forbidden"),
    (e[(e.Private = 4)] = "Private"),
    (e[(e.NeedApply = 5)] = "NeedApply"),
    (e[(e.NeedApproval = 6)] = "NeedApproval"),
    (e[(e.JoinSuccess = 7)] = "JoinSuccess"),
    (e[(e.Deleted = 8)] = "Deleted"),
    e
  ))(_g || {}),
  Pl = ((e) => (
    (e.ImportDialog = "ImportDialog"), (e.ShareKnowledge = "ShareKnowledge"), e
  ))(Pl || {}),
  vg = ((e) => (
    (e.KnowledgeBase = "KnowledgeBase"),
    (e.HomePage = "HomePage"),
    (e.Note = "Note"),
    e
  ))(vg || {}),
  wg = ((e) => ((e.Keyword = "keyword"), (e.Tag = "tag"), e))(wg || {}),
  Dl = ((e) => (
    (e[(e.Default = 0)] = "Default"), (e[(e.Edit = 1)] = "Edit"), e
  ))(Dl || {}),
  Ot = ((e) => (
    (e.Homepage = "homepage"),
    (e.HomeDocument = "homeDocument"),
    (e.HomeEssay = "homeEssay"),
    (e.HomeTranslation = "homeTranslation"),
    (e.AiChat = "aiChat"),
    (e.NoteChatInput = "noteChatInput"),
    e
  ))(Ot || {});
const Yw = {
  name: Lr.Name,
  cover: Lr.CoverCosKey,
  description: Lr.Description,
  recommendedQuestions: Lr.RecommendedQuestions,
};
var At = ((e) => (
    (e[(e.Success = 0)] = "Success"),
    (e[(e.Failed = 1)] = "Failed"),
    (e[(e.ExceedMemberCountLimit = 2)] = "ExceedMemberCountLimit"),
    (e[(e.ExceedMemberAdminCountLimit = 3)] = "ExceedMemberAdminCountLimit"),
    e
  ))(At || {}),
  As = ((e) => (
    (e[(e.waitCheck = 0)] = "waitCheck"),
    (e[(e.Agree = 1)] = "Agree"),
    (e[(e.Reject = 2)] = "Reject"),
    e
  ))(As || {}),
  Ir = ((e) => (
    (e.success = "success"),
    (e.info = "info"),
    (e.error = "error"),
    (e.warning = "warning"),
    e
  ))(Ir || {}),
  ua = ((e) => (
    (e[(e.UserReport = 0)] = "UserReport"),
    (e[(e.ManageReport = 1)] = "ManageReport"),
    (e[(e.NoteReport = 2)] = "NoteReport"),
    e
  ))(ua || {}),
  mg = ((e) => (
    (e[(e.Success = 0)] = "Success"), (e[(e.Failed = 1)] = "Failed"), e
  ))(mg || {}),
  ht = ((e) => (
    (e[(e.Ready = 0)] = "Ready"),
    (e[(e.Loading = 1)] = "Loading"),
    (e[(e.Error = 2)] = "Error"),
    (e[(e.End = 3)] = "End"),
    e
  ))(ht || {}),
  yn = ((e) => (
    (e.Cancel = "Cancel"),
    (e.KeepAll = "KeepAll"),
    (e.ReplaceAll = "ReplaceAll"),
    e
  ))(yn || {}),
  Sg = ((e) => (
    (e[(e.CertificationTypeUnuse = 0)] = "CertificationTypeUnuse"),
    (e[(e.CertificationTypeInterest = 1)] = "CertificationTypeInterest"),
    (e[(e.CertificationTypeCompany = 2)] = "CertificationTypeCompany"),
    e
  ))(Sg || {}),
  Ct = ((e) => (
    (e.Success = "Success"),
    (e.AccountNotExist = "AccountNotExist"),
    (e.Error = "Error"),
    e
  ))(Ct || {}),
  En = ((e) => (
    (e[(e.Default = 0)] = "Default"),
    (e[(e.Save = 1)] = "Save"),
    (e[(e.Replace = 2)] = "Replace"),
    e
  ))(En || {}),
  qe = ((e) => (
    (e[(e.Unknown = 0)] = "Unknown"),
    (e[(e.Processing = 1)] = "Processing"),
    (e[(e.Conflict = 2)] = "Conflict"),
    (e[(e.Finish = 3)] = "Finish"),
    (e[(e.Timeout = 4)] = "Timeout"),
    (e[(e.Error = 5)] = "Error"),
    e
  ))(qe || {});
const yg = {
    [rt.MediaInit]: Y.Init,
    [rt.MediaParsing]: Y.Parsing,
    [rt.MediaParseError]: Y.Error,
    [rt.MediaParseSuccess]: Y.Finish,
  },
  KM = {
    [gt.CosError]: nt.CollectFail,
    [gt.OversizeFile]: nt.OversizeFile,
    [gt.ZeroSizeFile]: nt.ZeroSizeFile,
    [gt.CreateMediaError]: nt.CollectFail,
    [gt.UserSpaceShortage]: nt.UserSpaceShortage,
    [gt.UserSpaceError]: nt.CollectFail,
  };
Ot.Homepage + "",
  Zr.Homepage,
  Ot.HomeDocument + "",
  Zr.HomeDocument,
  Ot.HomeEssay + "",
  Zr.HomeEssay,
  Ot.HomeTranslation + "",
  Zr.HomeTranslation,
  Ot.AiChat + "",
  Zr.AiChat,
  Ot.NoteChatInput + "",
  Zr.NoteChatInput;
const BM = Symbol.for("FETCH_SERVICE"),
  UM = Symbol.for("ERROR_HANDLER"),
  NM = Symbol.for("GET_DEVICE_INFO"),
  Qw = Symbol.for("KnowledgeHttpService"),
  FM = Symbol.for("ID_CALL_NATIVE"),
  Xw = Symbol.for("NOTIFY_TAGS_UPDATE"),
  Zw = Symbol.for("NOTIFY_USER_SPACE_UPDATE"),
  em = Symbol.for("KNOWLEDGE_BASE_REFRESH_BROADCAST"),
  tm = Symbol.for("KNOWLEDGE_BASE_EVENT_BROADCAST"),
  rm = Symbol.for("KNOWLEDGE_BASE_NOTIFICATION_SERVICE");
var Eg = ((e) => (
    (e[(e.Success = 0)] = "Success"),
    (e[(e.InvalidFuncRet = 1)] = "InvalidFuncRet"),
    (e[(e.Error = 2)] = "Error"),
    (e[(e.Timeout = 3)] = "Timeout"),
    (e[(e.LoginExpired = 4)] = "LoginExpired"),
    (e[(e.TokenExpired = 5)] = "TokenExpired"),
    e
  ))(Eg || {}),
  Ts = ((e) => (
    (e[(e.Init = 0)] = "Init"),
    (e[(e.Normal = 1)] = "Normal"),
    (e[(e.Loading = 2)] = "Loading"),
    (e[(e.End = 3)] = "End"),
    e
  ))(Ts || {}),
  be = ((e) => (
    (e.Loading = "loading"), (e.Success = "success"), (e.Error = "error"), e
  ))(be || {}),
  sm = ((e) => (
    (e.KnowledgeBase = "chrome://allknowledge"),
    (e.Home = "chrome://home"),
    (e.NOTE = "chrome://note/"),
    (e.NOTE_EXTENSION =
      "chrome-extension://cninonkgpcmdognjppglnkelbkhlhhee/pages/editor.html"),
    (e.IMAGE_TOOL_EXTENSION =
      "chrome-extension://jhnkclbnlaofmbgaepmgiedepkbafipg/index.html"),
    (e.MARKDOWN_EXTENSION =
      "chrome-extension://cbgfjbdckbpenliighcjcbjfiihnnkfe/index.html"),
    e
  ))(sm || {}),
  Fi = ((e) => (
    (e.KnowledgeBase = "nkohmbngmopdajidckglcoehlaeepeoi"),
    (e.Collect = "egkgeljgkehpdelhobnmbpkjjjfmacfl"),
    (e.AskIma = "cnpjbkidlfannncommmljnmmmjijfdgg"),
    (e.Note = "cninonkgpcmdognjppglnkelbkhlhhee"),
    (e.ImageTools = "jhnkclbnlaofmbgaepmgiedepkbafipg"),
    (e.MARKDOWN = "cbgfjbdckbpenliighcjcbjfiihnnkfe"),
    (e.KnowledgeUpdated = "KnowledgeUpdatedjlkjkjdflkjgfuoiuwerh"),
    e
  ))(Fi || {}),
  bg = ((e) => (
    (e.CollectToggle = "collectToggle"),
    (e.AskIma = "AskIma"),
    (e.ImageCopy = "ImageCopy"),
    (e.ImageDownload = "ImageDownload"),
    e
  ))(bg || {}),
  Tl = ((e) => (
    (e.Login = "login"),
    (e.Logout = "logout"),
    (e.GetAccountInfo = "getAccountInfo"),
    (e.RefreshToken = "refreshToken"),
    (e.CloseLoginDialog = "closeLoginDialog"),
    (e.GetSettingByKey = "getCurSettingForKey"),
    (e.GetAllSettings = "getSettingsForKeys"),
    (e.SetShortcut = "modifyShortCut"),
    (e.ToggleStartup = "setStartup"),
    (e.UploadLog = "uploadLog"),
    (e.Update = "update"),
    (e.ToggleMenuStatus = "menuStatus"),
    (e.ToggleBlockMenuStatus = "modifyBlockMenuStatus"),
    (e.OpenWindow = "openWindow"),
    (e.OpenUrl = "openUrl"),
    (e.GetDeviceInfo = "getDeviceInfo"),
    (e.ScreenShot = "screenShot"),
    (e.ModifySpotlightInputViewRect = "modifySpotlightInputViewRect"),
    (e.SetAppAutoUpdate = "setAppAutoUpdate"),
    (e.GetAppUpdateInfo = "getAppUpdateInfo"),
    (e.CancelAccount = "cancelAccount"),
    (e.SetEnableStatusTextMenu = "setEnableStatusTextMenu"),
    (e.GetEnableStatusTextMenu = "getEnableStatusTextMenu"),
    (e.GetAllDisableTextMenuList = "getAllDisableTextMenuList"),
    (e.DeleteDisableTextMenu = "deleteDisableTextMenu"),
    (e.SaveInfoWithKey = "saveInfoWithKey"),
    (e.AddDisableTextMenu = "addDisableTextMenu"),
    (e.ReportToBeacon = "reportToBeacon"),
    (e.SwitchLoginHost = "switchServer"),
    (e.SwitchDebugMode = "switchDebugMode"),
    (e.OpenApp = "showApp"),
    (e.CheckIsDefaultBrowser = "checkIsDefaultBrowser"),
    (e.SetDefaultBrowser = "setDefaultBrowser"),
    (e.CheckAccessibilityPermission = "checkAccessibilityPermission"),
    (e.UpdateChannelId = "updateChannelID"),
    (e.GetCurrentTabCount = "getCurrentTabCount"),
    (e.VerifyWxCode = "verifyWxCode"),
    e
  ))(Tl || {}),
  Se = ((e) => (
    (e[(e.NoSpace = 0)] = "NoSpace"),
    (e[(e.HasSpace = 1)] = "HasSpace"),
    (e[(e.Error = 2)] = "Error"),
    e
  ))(Se || {}),
  nm = ((e) => (
    (e[(e.Default = rr.SmartWriting)] = "Default"),
    (e[(e.Essay = rr.EssayWriting)] = "Essay"),
    (e[(e.Paper = rr.PaperWriting)] = "Paper"),
    (e[(e.Thoughts = rr.ReflectionWriting)] = "Thoughts"),
    (e[(e.Copywriting = rr.CreativeCopywriting)] = "Copywriting"),
    e
  ))(nm || {});
const si = {
    [Ce.Hunyuan]: "Hunyuan",
    [Ce.HunyuanT1]: "Hunyuan T1",
    [Ce.Deepseek]: "DeepSeek R1",
    [Ce.DeepseekV3]: "DeepSeek V3",
  },
  Ig = [
    { name: si[Ce.Hunyuan], desc: "适合大部分任务", id: Ce.Hunyuan },
    { name: si[Ce.HunyuanT1], desc: "快速思考推理", id: Ce.HunyuanT1 },
    { name: si[Ce.DeepseekV3], desc: "适用多种应用场景", id: Ce.DeepseekV3 },
    { name: si[Ce.Deepseek], desc: "深度思考推理", id: Ce.Deepseek },
  ],
  im = [Ce.Hunyuan, Ce.Deepseek],
  kM = Ig.filter((e) => im.includes(e.id)),
  om = [Ce.Hunyuan, Ce.HunyuanT1, Ce.Deepseek],
  jM = Ig.filter((e) => om.includes(e.id));
var or = ((e) => (
  (e[(e.Unknown = 0)] = "Unknown"),
  (e[(e.Success = 1)] = "Success"),
  (e[(e.Upload = 2)] = "Upload"),
  (e[(e.Fail = 3)] = "Fail"),
  (e[(e.Unsupported = 4)] = "Unsupported"),
  e
))(or || {});
const am = (e, t) => {
    var s;
    switch (e) {
      case "application/pdf":
        return T.PDF;
      case "application/vnd.ms-powerpoint":
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return T.PPT;
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return T.Word;
      case "image/jpeg":
      case "image/png":
      case "image/webp":
      case "image/jpg":
        return T.Image;
      case "text/markdown":
        return T.MarkDown;
    }
    const r =
      ((s = t.split(".").pop()) == null ? void 0 : s.toLowerCase()) || "";
    return ["md", "markdown"].includes(r)
      ? T.MarkDown
      : ["docx", "doc"].includes(r)
        ? T.Word
        : ["pptx", "ppt"].includes(r)
          ? T.PPT
          : ["png", "jpg", "jpeg"].includes(r)
            ? T.Image
            : T.Unknown;
  },
  lm = (e) => {
    const {
      mediaId: t,
      mediaType: r,
      knowledgeBaseId: s = "",
      folderId: n = "",
      title: i,
      folderInfo: o,
    } = e;
    return {
      mediaId: t,
      mediaType: r,
      knowledgeBaseId: s,
      folderId: n,
      title: i,
      folderInfo: o,
    };
  };
var da = ((e) => (
    (e.None = "None"),
    (e.AccountDeleted = "AccountDeleted"),
    (e.SecurityStrike = "SecurityStrike"),
    (e.InvalidPhoneNumber = "InvalidPhoneNumber"),
    (e.Error = "Error"),
    e
  ))(da || {}),
  Ag = ((e) => ((e.Cancel = "Cancel"), (e.Submit = "Submit"), e))(Ag || {}),
  Cl = ((e) => ((e.Browse = "Browse"), (e.Search = "Search"), e))(Cl || {});
const Cc = (e) => e.mode === "Browse" && !!e.context,
  Io = (e) => e.mode === "Search" && !!e.context;
var Og = ((e) => (
  (e.Backward = "Backward"),
  (e.Forward = "Forward"),
  (e.AppendNewNode = "AppendNewNode"),
  e
))(Og || {});
const cm = 10,
  GM = (e, t = 2) => {
    if (e === 0) return "0B";
    const r = ["B", "KB", "MB"],
      s = 1024,
      n = Math.floor(Math.min(Math.log(e) / Math.log(s), 2));
    return `${(e / s ** n).toFixed(t)}${r[n]}`;
  },
  um = (e, t) =>
    new Promise((r) => {
      setTimeout(() => {
        r(t);
      }, e);
    }),
  xc = (e, t) => {
    if (e.size !== 0) return [...e.values()][t];
  },
  Rc = (e, t) => {
    try {
      return JSON.parse(e);
    } catch (r) {
      return (
        console.error(`[parseJson] parse json error, jsonString: ${e}`, r), t
      );
    }
  },
  Ue = (e) => {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return (
        console.error(`[stringifyJson] stringify json error, json: ${e}`, t), ""
      );
    }
  },
  dm = (e) => {
    var n, i;
    const { className: t = "", methodName: r = "", error: s } = e;
    console.error(`[${t}][${r}]`, s),
      (i =
        (n = globalThis == null ? void 0 : globalThis.logger) == null
          ? void 0
          : n.error) == null || i.call(n, `${Ue(s)}`, `[${t}][${r}]`);
  },
  q = ({ fallbackValue: e = void 0, errorHandler: t = dm } = {}) =>
    function (r, s, n) {
      const i = n.value;
      return (
        (n.value = async function (...o) {
          var c;
          const a = r.constructor.name,
            l = s.toString();
          try {
            return await i.apply(this, o);
          } catch (u) {
            return (
              (c = r.logger) == null || c.error(u),
              t == null || t({ className: a, methodName: l, error: u }),
              e
            );
          }
        }),
        n
      );
    };
const hm = (e, t = !0) =>
    Object.entries(e)
      .map(([r, s]) => `${r}=${t ? encodeURIComponent(s) : s}`)
      .join("&"),
  WM = (e, t, r = !0) => {
    const s = hm(t, r);
    return s ? `${e}?${s}` : e;
  },
  fm = (e) => {
    const t = new URLSearchParams(new URL(e).search),
      r = {};
    return (
      t.forEach((s, n) => {
        r[n] = s;
      }),
      r
    );
  },
  Pg = (e, t) => {
    var r;
    return (r = fm(e)) == null ? void 0 : r[t];
  },
  gm = (e) => new URL(e).pathname.split("/").filter(Boolean).pop() || "",
  vs = (e) => e.replace(/<\/?em>/g, "");
var Ye = [];
for (var Ao = 0; Ao < 256; ++Ao) Ye.push((Ao + 256).toString(16).slice(1));
function Dg(e, t = 0) {
  return (
    Ye[e[t + 0]] +
    Ye[e[t + 1]] +
    Ye[e[t + 2]] +
    Ye[e[t + 3]] +
    "-" +
    Ye[e[t + 4]] +
    Ye[e[t + 5]] +
    "-" +
    Ye[e[t + 6]] +
    Ye[e[t + 7]] +
    "-" +
    Ye[e[t + 8]] +
    Ye[e[t + 9]] +
    "-" +
    Ye[e[t + 10]] +
    Ye[e[t + 11]] +
    Ye[e[t + 12]] +
    Ye[e[t + 13]] +
    Ye[e[t + 14]] +
    Ye[e[t + 15]]
  ).toLowerCase();
}
var ni,
  pm = new Uint8Array(16);
function Tg() {
  if (
    !ni &&
    ((ni =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !ni)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return ni(pm);
}
var Oo,
  ii,
  Po = 0,
  Do = 0;
function _m(e, t, r) {
  var s = (t && r) || 0,
    n = t || new Array(16);
  e = e || {};
  var i = e.node,
    o = e.clockseq;
  if (
    (e._v6 || (i || (i = Oo), o == null && (o = ii)), i == null || o == null)
  ) {
    var a = e.random || (e.rng || Tg)();
    i == null &&
      ((i = [a[0], a[1], a[2], a[3], a[4], a[5]]),
      !Oo && !e._v6 && ((i[0] |= 1), (Oo = i))),
      o == null &&
        ((o = ((a[6] << 8) | a[7]) & 16383),
        ii === void 0 && !e._v6 && (ii = o));
  }
  var l = e.msecs !== void 0 ? e.msecs : Date.now(),
    c = e.nsecs !== void 0 ? e.nsecs : Do + 1,
    u = l - Po + (c - Do) / 1e4;
  if (
    (u < 0 && e.clockseq === void 0 && (o = (o + 1) & 16383),
    (u < 0 || l > Po) && e.nsecs === void 0 && (c = 0),
    c >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (Po = l), (Do = c), (ii = o), (l += 122192928e5);
  var d = ((l & 268435455) * 1e4 + c) % 4294967296;
  (n[s++] = (d >>> 24) & 255),
    (n[s++] = (d >>> 16) & 255),
    (n[s++] = (d >>> 8) & 255),
    (n[s++] = d & 255);
  var f = ((l / 4294967296) * 1e4) & 268435455;
  (n[s++] = (f >>> 8) & 255),
    (n[s++] = f & 255),
    (n[s++] = ((f >>> 24) & 15) | 16),
    (n[s++] = (f >>> 16) & 255),
    (n[s++] = (o >>> 8) | 128),
    (n[s++] = o & 255);
  for (var h = 0; h < 6; ++h) n[s + h] = i[h];
  return t || Dg(n);
}
var vm =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Mc = { randomUUID: vm };
function wm(e, t, r) {
  if (Mc.randomUUID && !t && !e) return Mc.randomUUID();
  e = e || {};
  var s = e.random || (e.rng || Tg)();
  return (s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), Dg(s);
}
const bn = () => _m(),
  Cg = (e, t = -1 / 0, r = 1 / 0) => Math.min(Math.max(e, t), r);
var xg = { exports: {} };
(function (e, t) {
  (function (r, s) {
    e.exports = s();
  })(fr, function () {
    var r = 1e3,
      s = 6e4,
      n = 36e5,
      i = "millisecond",
      o = "second",
      a = "minute",
      l = "hour",
      c = "day",
      u = "week",
      d = "month",
      f = "quarter",
      h = "year",
      p = "date",
      _ = "Invalid Date",
      w =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      m =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      E = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_",
          ),
        ordinal: function (C) {
          var I = ["th", "st", "nd", "rd"],
            A = C % 100;
          return "[" + C + (I[(A - 20) % 10] || I[A] || I[0]) + "]";
        },
      },
      D = function (C, I, A) {
        var M = String(C);
        return !M || M.length >= I
          ? C
          : "" + Array(I + 1 - M.length).join(A) + C;
      },
      j = {
        s: D,
        z: function (C) {
          var I = -C.utcOffset(),
            A = Math.abs(I),
            M = Math.floor(A / 60),
            L = A % 60;
          return (I <= 0 ? "+" : "-") + D(M, 2, "0") + ":" + D(L, 2, "0");
        },
        m: function C(I, A) {
          if (I.date() < A.date()) return -C(A, I);
          var M = 12 * (A.year() - I.year()) + (A.month() - I.month()),
            L = I.clone().add(M, d),
            re = A - L < 0,
            ee = I.clone().add(M + (re ? -1 : 1), d);
          return +(-(M + (A - L) / (re ? L - ee : ee - L)) || 0);
        },
        a: function (C) {
          return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
        },
        p: function (C) {
          return (
            { M: d, y: h, w: u, d: c, D: p, h: l, m: a, s: o, ms: i, Q: f }[
              C
            ] ||
            String(C || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (C) {
          return C === void 0;
        },
      },
      V = "en",
      R = {};
    R[V] = E;
    var ie = "$isDayjsObject",
      x = function (C) {
        return C instanceof ve || !(!C || !C[ie]);
      },
      k = function C(I, A, M) {
        var L;
        if (!I) return V;
        if (typeof I == "string") {
          var re = I.toLowerCase();
          R[re] && (L = re), A && ((R[re] = A), (L = re));
          var ee = I.split("-");
          if (!L && ee.length > 1) return C(ee[0]);
        } else {
          var pe = I.name;
          (R[pe] = I), (L = pe);
        }
        return !M && L && (V = L), L || (!M && V);
      },
      H = function (C, I) {
        if (x(C)) return C.clone();
        var A = typeof I == "object" ? I : {};
        return (A.date = C), (A.args = arguments), new ve(A);
      },
      F = j;
    (F.l = k),
      (F.i = x),
      (F.w = function (C, I) {
        return H(C, { locale: I.$L, utc: I.$u, x: I.$x, $offset: I.$offset });
      });
    var ve = (function () {
        function C(A) {
          (this.$L = k(A.locale, null, !0)),
            this.parse(A),
            (this.$x = this.$x || A.x || {}),
            (this[ie] = !0);
        }
        var I = C.prototype;
        return (
          (I.parse = function (A) {
            (this.$d = (function (M) {
              var L = M.date,
                re = M.utc;
              if (L === null) return new Date(NaN);
              if (F.u(L)) return new Date();
              if (L instanceof Date) return new Date(L);
              if (typeof L == "string" && !/Z$/i.test(L)) {
                var ee = L.match(w);
                if (ee) {
                  var pe = ee[2] - 1 || 0,
                    W = (ee[7] || "0").substring(0, 3);
                  return re
                    ? new Date(
                        Date.UTC(
                          ee[1],
                          pe,
                          ee[3] || 1,
                          ee[4] || 0,
                          ee[5] || 0,
                          ee[6] || 0,
                          W,
                        ),
                      )
                    : new Date(
                        ee[1],
                        pe,
                        ee[3] || 1,
                        ee[4] || 0,
                        ee[5] || 0,
                        ee[6] || 0,
                        W,
                      );
                }
              }
              return new Date(L);
            })(A)),
              this.init();
          }),
          (I.init = function () {
            var A = this.$d;
            (this.$y = A.getFullYear()),
              (this.$M = A.getMonth()),
              (this.$D = A.getDate()),
              (this.$W = A.getDay()),
              (this.$H = A.getHours()),
              (this.$m = A.getMinutes()),
              (this.$s = A.getSeconds()),
              (this.$ms = A.getMilliseconds());
          }),
          (I.$utils = function () {
            return F;
          }),
          (I.isValid = function () {
            return this.$d.toString() !== _;
          }),
          (I.isSame = function (A, M) {
            var L = H(A);
            return this.startOf(M) <= L && L <= this.endOf(M);
          }),
          (I.isAfter = function (A, M) {
            return H(A) < this.startOf(M);
          }),
          (I.isBefore = function (A, M) {
            return this.endOf(M) < H(A);
          }),
          (I.$g = function (A, M, L) {
            return F.u(A) ? this[M] : this.set(L, A);
          }),
          (I.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (I.valueOf = function () {
            return this.$d.getTime();
          }),
          (I.startOf = function (A, M) {
            var L = this,
              re = !!F.u(M) || M,
              ee = F.p(A),
              pe = function (ir, Ie) {
                var Lt = F.w(
                  L.$u ? Date.UTC(L.$y, Ie, ir) : new Date(L.$y, Ie, ir),
                  L,
                );
                return re ? Lt : Lt.endOf(c);
              },
              W = function (ir, Ie) {
                return F.w(
                  L.toDate()[ir].apply(
                    L.toDate("s"),
                    (re ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ie),
                  ),
                  L,
                );
              },
              me = this.$W,
              We = this.$M,
              _e = this.$D,
              Sr = "set" + (this.$u ? "UTC" : "");
            switch (ee) {
              case h:
                return re ? pe(1, 0) : pe(31, 11);
              case d:
                return re ? pe(1, We) : pe(0, We + 1);
              case u:
                var nr = this.$locale().weekStart || 0,
                  yr = (me < nr ? me + 7 : me) - nr;
                return pe(re ? _e - yr : _e + (6 - yr), We);
              case c:
              case p:
                return W(Sr + "Hours", 0);
              case l:
                return W(Sr + "Minutes", 1);
              case a:
                return W(Sr + "Seconds", 2);
              case o:
                return W(Sr + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (I.endOf = function (A) {
            return this.startOf(A, !1);
          }),
          (I.$set = function (A, M) {
            var L,
              re = F.p(A),
              ee = "set" + (this.$u ? "UTC" : ""),
              pe = ((L = {}),
              (L[c] = ee + "Date"),
              (L[p] = ee + "Date"),
              (L[d] = ee + "Month"),
              (L[h] = ee + "FullYear"),
              (L[l] = ee + "Hours"),
              (L[a] = ee + "Minutes"),
              (L[o] = ee + "Seconds"),
              (L[i] = ee + "Milliseconds"),
              L)[re],
              W = re === c ? this.$D + (M - this.$W) : M;
            if (re === d || re === h) {
              var me = this.clone().set(p, 1);
              me.$d[pe](W),
                me.init(),
                (this.$d = me.set(p, Math.min(this.$D, me.daysInMonth())).$d);
            } else pe && this.$d[pe](W);
            return this.init(), this;
          }),
          (I.set = function (A, M) {
            return this.clone().$set(A, M);
          }),
          (I.get = function (A) {
            return this[F.p(A)]();
          }),
          (I.add = function (A, M) {
            var L,
              re = this;
            A = Number(A);
            var ee = F.p(M),
              pe = function (We) {
                var _e = H(re);
                return F.w(_e.date(_e.date() + Math.round(We * A)), re);
              };
            if (ee === d) return this.set(d, this.$M + A);
            if (ee === h) return this.set(h, this.$y + A);
            if (ee === c) return pe(1);
            if (ee === u) return pe(7);
            var W = ((L = {}), (L[a] = s), (L[l] = n), (L[o] = r), L)[ee] || 1,
              me = this.$d.getTime() + A * W;
            return F.w(me, this);
          }),
          (I.subtract = function (A, M) {
            return this.add(-1 * A, M);
          }),
          (I.format = function (A) {
            var M = this,
              L = this.$locale();
            if (!this.isValid()) return L.invalidDate || _;
            var re = A || "YYYY-MM-DDTHH:mm:ssZ",
              ee = F.z(this),
              pe = this.$H,
              W = this.$m,
              me = this.$M,
              We = L.weekdays,
              _e = L.months,
              Sr = L.meridiem,
              nr = function (Ie, Lt, Xt, Vr) {
                return (Ie && (Ie[Lt] || Ie(M, re))) || Xt[Lt].slice(0, Vr);
              },
              yr = function (Ie) {
                return F.s(pe % 12 || 12, Ie, "0");
              },
              ir =
                Sr ||
                function (Ie, Lt, Xt) {
                  var Vr = Ie < 12 ? "AM" : "PM";
                  return Xt ? Vr.toLowerCase() : Vr;
                };
            return re.replace(m, function (Ie, Lt) {
              return (
                Lt ||
                (function (Xt) {
                  switch (Xt) {
                    case "YY":
                      return String(M.$y).slice(-2);
                    case "YYYY":
                      return F.s(M.$y, 4, "0");
                    case "M":
                      return me + 1;
                    case "MM":
                      return F.s(me + 1, 2, "0");
                    case "MMM":
                      return nr(L.monthsShort, me, _e, 3);
                    case "MMMM":
                      return nr(_e, me);
                    case "D":
                      return M.$D;
                    case "DD":
                      return F.s(M.$D, 2, "0");
                    case "d":
                      return String(M.$W);
                    case "dd":
                      return nr(L.weekdaysMin, M.$W, We, 2);
                    case "ddd":
                      return nr(L.weekdaysShort, M.$W, We, 3);
                    case "dddd":
                      return We[M.$W];
                    case "H":
                      return String(pe);
                    case "HH":
                      return F.s(pe, 2, "0");
                    case "h":
                      return yr(1);
                    case "hh":
                      return yr(2);
                    case "a":
                      return ir(pe, W, !0);
                    case "A":
                      return ir(pe, W, !1);
                    case "m":
                      return String(W);
                    case "mm":
                      return F.s(W, 2, "0");
                    case "s":
                      return String(M.$s);
                    case "ss":
                      return F.s(M.$s, 2, "0");
                    case "SSS":
                      return F.s(M.$ms, 3, "0");
                    case "Z":
                      return ee;
                  }
                  return null;
                })(Ie) ||
                ee.replace(":", "")
              );
            });
          }),
          (I.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (I.diff = function (A, M, L) {
            var re,
              ee = this,
              pe = F.p(M),
              W = H(A),
              me = (W.utcOffset() - this.utcOffset()) * s,
              We = this - W,
              _e = function () {
                return F.m(ee, W);
              };
            switch (pe) {
              case h:
                re = _e() / 12;
                break;
              case d:
                re = _e();
                break;
              case f:
                re = _e() / 3;
                break;
              case u:
                re = (We - me) / 6048e5;
                break;
              case c:
                re = (We - me) / 864e5;
                break;
              case l:
                re = We / n;
                break;
              case a:
                re = We / s;
                break;
              case o:
                re = We / r;
                break;
              default:
                re = We;
            }
            return L ? re : F.a(re);
          }),
          (I.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (I.$locale = function () {
            return R[this.$L];
          }),
          (I.locale = function (A, M) {
            if (!A) return this.$L;
            var L = this.clone(),
              re = k(A, M, !0);
            return re && (L.$L = re), L;
          }),
          (I.clone = function () {
            return F.w(this.$d, this);
          }),
          (I.toDate = function () {
            return new Date(this.valueOf());
          }),
          (I.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (I.toISOString = function () {
            return this.$d.toISOString();
          }),
          (I.toString = function () {
            return this.$d.toUTCString();
          }),
          C
        );
      })(),
      B = ve.prototype;
    return (
      (H.prototype = B),
      [
        ["$ms", i],
        ["$s", o],
        ["$m", a],
        ["$H", l],
        ["$W", c],
        ["$M", d],
        ["$y", h],
        ["$D", p],
      ].forEach(function (C) {
        B[C[1]] = function (I) {
          return this.$g(I, C[0], C[1]);
        };
      }),
      (H.extend = function (C, I) {
        return C.$i || (C(I, ve, H), (C.$i = !0)), H;
      }),
      (H.locale = k),
      (H.isDayjs = x),
      (H.unix = function (C) {
        return H(1e3 * C);
      }),
      (H.en = R[V]),
      (H.Ls = R),
      (H.p = {}),
      H
    );
  });
})(xg);
var mm = xg.exports;
const Sm = gs(mm),
  ym = (e, t = "YYYY-MM-DD HH:mm") => (e ? Sm(e).format(t) : ""),
  Em = (e) => e === void 0,
  ha = (e) => e === null,
  bm = (e, t) =>
    e.reduce(
      (r, s, n, i) =>
        t(s, n, i)
          ? { ...r, positive: [...r.positive, s] }
          : { ...r, negative: [...r.negative, s] },
      { positive: [], negative: [] },
    ),
  VM = (e) => e != null,
  ot = (e, t = 0) => {
    const r = parseFloat(e);
    return isNaN(r) ? t : r;
  },
  Im = /\.(pdf|doc|docx|jpg|jpeg|png|md|txt|ppt|pptx)$/i,
  HM = (e) => {
    const t = e.match(Im);
    if (!Em(t == null ? void 0 : t.index)) {
      const r = t.index,
        s = e.substring(0, r),
        n = e.substring(r);
      return { name: s, suffix: n };
    }
    return { name: e, suffix: "" };
  },
  ki = (e, t) => (Number.isNaN(Number(e)) ? t : Number(e)),
  ce = Symbol.for("LOGGER"),
  Rg = Symbol.for("COOKIE_SERVICE"),
  zM = Symbol.for("EXTENSION_VERSION"),
  Mg = Symbol.for("ACCOUNT_SERVICE"),
  wr = Symbol.for("REPORT_SERVICE"),
  qM = Symbol.for("KY_SERVICE"),
  Am = Symbol.for("KY_URL_PREFIX"),
  Om = Symbol.for("PLATFORM_SERVICE"),
  JM = Symbol.for("FEEDBACK_SERVICE"),
  Lg = Symbol.for("SSE_SERVICE"),
  Pm = Symbol.for("IMAGE_UPLOAD_SERVICE"),
  so = Symbol.for("TOAST"),
  To = Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
var vf, Ln, wf;
let Dm =
  ((vf = To),
  (wf = class {
    constructor(t) {
      $(this, vf);
      ae(this, Ln);
      Z(this, Ln, t), (this[To] = !0);
    }
    static is(t) {
      return typeof t == "object" && t !== null && t[To] === !0;
    }
    unwrap() {
      return v(this, Ln).call(this);
    }
  }),
  (Ln = new WeakMap()),
  wf);
function pr(e, t) {
  return Reflect.getMetadata(t, e);
}
function Lc(e, t, r, s) {
  const n = s(pr(e, t) ?? r);
  Reflect.defineMetadata(t, n, e);
}
const no = "named",
  xl = "name",
  Rl = "unmanaged",
  Ml = "optional",
  Ll = "inject",
  $l = "multi_inject",
  $g = "post_construct",
  Kg = "pre_destroy",
  Tm = [Ll, $l, xl, Rl, no, Ml],
  Co = Symbol.for("@inversifyjs/core/InversifyCoreError");
var mf, Sf;
let ds = class Bg extends ((Sf = Error), (mf = Co), Sf) {
  constructor(r, s, n) {
    super(s, n);
    $(this, mf);
    $(this, "kind");
    (this[Co] = !0), (this.kind = r);
  }
  static is(r) {
    return typeof r == "object" && r !== null && r[Co] === !0;
  }
  static isErrorOfKind(r, s) {
    return Bg.is(r) && r.kind === s;
  }
};
var _r, _t;
function Ug(e, t) {
  const r = [];
  for (let s = 0; s < t.length; ++s) t[s] === void 0 && r.push(s);
  if (r.length > 0)
    throw new ds(
      _r.missingInjectionDecorator,
      `Found unexpected missing metadata on type "${e.name}" at constructor indexes "${r.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`,
    );
}
function Ng(e) {
  return {
    kind: _t.singleInjection,
    name: void 0,
    optional: !1,
    tags: new Map(),
    targetName: void 0,
    value: e,
  };
}
function io(e) {
  const t = e.find((o) => o.key === Ll),
    r = e.find((o) => o.key === $l);
  if (e.find((o) => o.key === Rl) !== void 0)
    return (function (o, a) {
      if (a !== void 0 || o !== void 0)
        throw new ds(
          _r.missingInjectionDecorator,
          "Expected a single @inject, @multiInject or @unmanaged metadata",
        );
      return { kind: _t.unmanaged };
    })(t, r);
  if (r === void 0 && t === void 0)
    throw new ds(
      _r.missingInjectionDecorator,
      "Expected @inject, @multiInject or @unmanaged metadata",
    );
  const s = e.find((o) => o.key === no),
    n = e.find((o) => o.key === Ml),
    i = e.find((o) => o.key === xl);
  return {
    kind: t === void 0 ? _t.multipleInjection : _t.singleInjection,
    name: s == null ? void 0 : s.value,
    optional: n !== void 0,
    tags: new Map(
      e
        .filter((o) => Tm.every((a) => o.key !== a))
        .map((o) => [o.key, o.value]),
    ),
    targetName: i == null ? void 0 : i.value,
    value: t === void 0 ? (r == null ? void 0 : r.value) : t.value,
  };
}
function Fg(e, t, r) {
  try {
    return io(r);
  } catch (s) {
    throw ds.isErrorOfKind(s, _r.missingInjectionDecorator)
      ? new ds(
          _r.missingInjectionDecorator,
          `Expected a single @inject, @multiInject or @unmanaged decorator at type "${e.name}" at constructor arguments at index "${t.toString()}"`,
          { cause: s },
        )
      : s;
  }
}
function Cm(e) {
  const t = pr(e, "design:paramtypes"),
    r = pr(e, "inversify:tagged"),
    s = [];
  if (r !== void 0)
    for (const [n, i] of Object.entries(r)) {
      const o = parseInt(n);
      s[o] = Fg(e, o, i);
    }
  if (t !== void 0) {
    for (let n = 0; n < t.length; ++n)
      if (s[n] === void 0) {
        const i = t[n];
        s[n] = Ng(i);
      }
  }
  return Ug(e, s), s;
}
function kg(e, t, r) {
  try {
    return io(r);
  } catch (s) {
    throw ds.isErrorOfKind(s, _r.missingInjectionDecorator)
      ? new ds(
          _r.missingInjectionDecorator,
          `Expected a single @inject, @multiInject or @unmanaged decorator at type "${e.name}" at property "${t.toString()}"`,
          { cause: s },
        )
      : s;
  }
}
function jg(e) {
  const t = pr(e, "inversify:tagged_props"),
    r = new Map();
  if (t !== void 0)
    for (const s of Reflect.ownKeys(t)) {
      const n = t[s];
      r.set(s, kg(e, s, n));
    }
  return r;
}
function xm(e) {
  const t = pr(e, $g),
    r = pr(e, Kg);
  return {
    constructorArguments: Cm(e),
    lifecycle: {
      postConstructMethodName: t == null ? void 0 : t.value,
      preDestroyMethodName: r == null ? void 0 : r.value,
    },
    properties: jg(e),
  };
}
function Rm(e, t) {
  const r = t.getConstructorMetadata(e),
    s = [];
  for (const [n, i] of Object.entries(r.userGeneratedMetadata)) {
    const o = parseInt(n);
    s[o] = Fg(e, o, i);
  }
  if (r.compilerGeneratedMetadata !== void 0) {
    for (let n = 0; n < r.compilerGeneratedMetadata.length; ++n)
      if (s[n] === void 0) {
        const i = r.compilerGeneratedMetadata[n];
        s[n] = Ng(i);
      }
  }
  return Ug(e, s), s;
}
function Gg(e, t) {
  const r = t.getPropertiesMetadata(e),
    s = new Map();
  for (const n of Reflect.ownKeys(r)) {
    const i = r[n];
    s.set(n, kg(e, n, i));
  }
  return s;
}
function Mm(e, t) {
  const r = pr(e, $g),
    s = pr(e, Kg);
  return {
    constructorArguments: Rm(e, t),
    lifecycle: {
      postConstructMethodName: r == null ? void 0 : r.value,
      preDestroyMethodName: s == null ? void 0 : s.value,
    },
    properties: Gg(e, t),
  };
}
function $c(e) {
  const t = Object.getPrototypeOf(e.prototype);
  return t == null ? void 0 : t.constructor;
}
function Lm(e) {
  return e.kind === _t.unmanaged
    ? [{ key: Rl, value: !0 }]
    : (function (t) {
        const r = [$m(t)];
        t.name !== void 0 && r.push({ key: no, value: t.name }),
          t.optional && r.push({ key: Ml, value: !0 });
        for (const [s, n] of t.tags) r.push({ key: s, value: n });
        return (
          t.targetName !== void 0 && r.push({ key: xl, value: t.targetName }), r
        );
      })(e);
}
function $m(e) {
  let t;
  switch (e.kind) {
    case _t.multipleInjection:
      t = { key: $l, value: e.value };
      break;
    case _t.singleInjection:
      t = { key: Ll, value: e.value };
  }
  return t;
}
(function (e) {
  (e[(e.injectionDecoratorConflict = 0)] = "injectionDecoratorConflict"),
    (e[(e.missingInjectionDecorator = 1)] = "missingInjectionDecorator"),
    (e[(e.planning = 2)] = "planning"),
    (e[(e.unknown = 3)] = "unknown");
})(_r || (_r = {})),
  (function (e) {
    (e[(e.multipleInjection = 0)] = "multipleInjection"),
      (e[(e.singleInjection = 1)] = "singleInjection"),
      (e[(e.unmanaged = 2)] = "unmanaged");
  })(_t || (_t = {}));
var ur, yf;
let Km =
  ((yf = class {
    constructor(t) {
      ae(this, ur);
      Z(this, ur, t);
    }
    startsWith(t) {
      return v(this, ur).startsWith(t);
    }
    endsWith(t) {
      return v(this, ur).endsWith(t);
    }
    contains(t) {
      return v(this, ur).includes(t);
    }
    equals(t) {
      return v(this, ur) === t;
    }
    value() {
      return v(this, ur);
    }
  }),
  (ur = new WeakMap()),
  yf);
const xo = "@inversifyjs/core/targetId";
var et, $n, Kn, ns, Bn, Un, Ef;
let ji =
  ((Ef = class {
    constructor(t, r, s) {
      ae(this, et);
      ae(this, $n);
      ae(this, Kn);
      ae(this, ns);
      ae(this, Bn);
      ae(this, Un);
      Z(
        this,
        $n,
        (function () {
          const n = pr(Object, xo) ?? 0;
          return (
            n === Number.MAX_SAFE_INTEGER
              ? Lc(Object, xo, n, () => Number.MIN_SAFE_INTEGER)
              : Lc(Object, xo, n, (i) => i + 1),
            n
          );
        })(),
      ),
        Z(this, Kn, t),
        Z(this, ns, void 0),
        Z(this, et, r),
        Z(
          this,
          Bn,
          new Km(typeof t == "string" ? t : t.toString().slice(7, -1)),
        ),
        Z(this, Un, s);
    }
    get id() {
      return v(this, $n);
    }
    get identifier() {
      return v(this, Kn);
    }
    get metadata() {
      return (
        v(this, ns) === void 0 && Z(this, ns, Lm(v(this, et))), v(this, ns)
      );
    }
    get name() {
      return v(this, Bn);
    }
    get type() {
      return v(this, Un);
    }
    get serviceIdentifier() {
      return Dm.is(v(this, et).value)
        ? v(this, et).value.unwrap()
        : v(this, et).value;
    }
    getCustomTags() {
      return [...v(this, et).tags.entries()].map(([t, r]) => ({
        key: t,
        value: r,
      }));
    }
    getNamedTag() {
      return v(this, et).name === void 0
        ? null
        : { key: no, value: v(this, et).name };
    }
    hasTag(t) {
      return this.metadata.some((r) => r.key === t);
    }
    isArray() {
      return v(this, et).kind === _t.multipleInjection;
    }
    isNamed() {
      return v(this, et).name !== void 0;
    }
    isOptional() {
      return v(this, et).optional;
    }
    isTagged() {
      return v(this, et).tags.size > 0;
    }
    matchesArray(t) {
      return this.isArray() && v(this, et).value === t;
    }
    matchesNamedTag(t) {
      return v(this, et).name === t;
    }
    matchesTag(t) {
      return (r) => this.metadata.some((s) => s.key === t && s.value === r);
    }
  }),
  (et = new WeakMap()),
  ($n = new WeakMap()),
  (Kn = new WeakMap()),
  (ns = new WeakMap()),
  (Bn = new WeakMap()),
  (Un = new WeakMap()),
  Ef);
const Wg = (e) =>
    (function (t, r) {
      return function (s) {
        const n = t(s);
        let i = $c(s);
        for (; i !== void 0 && i !== Object; ) {
          const a = r(i);
          for (const [l, c] of a) n.properties.has(l) || n.properties.set(l, c);
          i = $c(i);
        }
        const o = [];
        for (const a of n.constructorArguments)
          if (a.kind !== _t.unmanaged) {
            const l = a.targetName ?? "";
            o.push(new ji(l, a, "ConstructorArgument"));
          }
        for (const [a, l] of n.properties)
          if (l.kind !== _t.unmanaged) {
            const c = l.targetName ?? a;
            o.push(new ji(c, l, "ClassProperty"));
          }
        return o;
      };
    })(
      e === void 0 ? xm : (t) => Mm(t, e),
      e === void 0 ? jg : (t) => Gg(t, e),
    ),
  Bt = "named",
  Bm = "unmanaged",
  Vg = "optional",
  Hg = "inject",
  Um = "multi_inject",
  zg = "inversify:tagged",
  qg = "inversify:tagged_props",
  Kc = "inversify:paramtypes",
  Jg = "design:paramtypes",
  Bc = "post_construct",
  fa = "pre_destroy",
  $e = { Request: "Request", Singleton: "Singleton", Transient: "Transient" },
  Ee = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider",
  },
  Yg = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable",
  };
let Nm = 0;
function oo() {
  return Nm++;
}
class Kl {
  constructor(t, r) {
    $(this, "id");
    $(this, "moduleId");
    $(this, "activated");
    $(this, "serviceIdentifier");
    $(this, "implementationType");
    $(this, "cache");
    $(this, "dynamicValue");
    $(this, "scope");
    $(this, "type");
    $(this, "factory");
    $(this, "provider");
    $(this, "constraint");
    $(this, "onActivation");
    $(this, "onDeactivation");
    (this.id = oo()),
      (this.activated = !1),
      (this.serviceIdentifier = t),
      (this.scope = r),
      (this.type = Ee.Invalid),
      (this.constraint = (s) => !0),
      (this.implementationType = null),
      (this.cache = null),
      (this.factory = null),
      (this.provider = null),
      (this.onActivation = null),
      (this.onDeactivation = null),
      (this.dynamicValue = null);
  }
  clone() {
    const t = new Kl(this.serviceIdentifier, this.scope);
    return (
      (t.activated = t.scope === $e.Singleton && this.activated),
      (t.implementationType = this.implementationType),
      (t.dynamicValue = this.dynamicValue),
      (t.scope = this.scope),
      (t.type = this.type),
      (t.factory = this.factory),
      (t.provider = this.provider),
      (t.constraint = this.constraint),
      (t.onActivation = this.onActivation),
      (t.onDeactivation = this.onDeactivation),
      (t.cache = this.cache),
      t
    );
  }
}
const Qg = "Metadata key was used more than once in a parameter:",
  Uc = "NULL argument",
  Nc = "Key Not Found",
  Fm = "Ambiguous match found for serviceIdentifier:",
  km = "No matching bindings found for serviceIdentifier:",
  Xg =
    "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",
  ga = (e, t) => `onDeactivation() error in class ${e}: ${t}`;
class jm {
  getConstructorMetadata(t) {
    return {
      compilerGeneratedMetadata: Reflect.getMetadata(Jg, t) ?? [],
      userGeneratedMetadata: Reflect.getMetadata(zg, t) ?? {},
    };
  }
  getPropertiesMetadata(t) {
    return Reflect.getMetadata(qg, t) ?? {};
  }
}
var Cs;
function Zg(e) {
  return (
    e instanceof RangeError || e.message === "Maximum call stack size exceeded"
  );
}
(function (e) {
  (e[(e.MultipleBindingsAvailable = 2)] = "MultipleBindingsAvailable"),
    (e[(e.NoBindingsAvailable = 0)] = "NoBindingsAvailable"),
    (e[(e.OnlyOneBindingAvailable = 1)] = "OnlyOneBindingAvailable");
})(Cs || (Cs = {}));
function Ur(e) {
  return typeof e == "function"
    ? e.name
    : typeof e == "symbol"
      ? e.toString()
      : e;
}
function Fc(e, t, r) {
  let s = "";
  const n = r(e, t);
  return (
    n.length !== 0 &&
      ((s = `
Registered bindings:`),
      n.forEach((i) => {
        let o = "Object";
        i.implementationType !== null && (o = rp(i.implementationType)),
          (s = `${s}
 ${o}`),
          i.constraint.metaData && (s = `${s} - ${i.constraint.metaData}`);
      })),
    s
  );
}
function ep(e, t) {
  return (
    e.parentRequest !== null &&
    (e.parentRequest.serviceIdentifier === t || ep(e.parentRequest, t))
  );
}
function tp(e) {
  e.childRequests.forEach((t) => {
    if (ep(e, t.serviceIdentifier)) {
      const r = (function (s) {
        return (function i(o, a = []) {
          const l = Ur(o.serviceIdentifier);
          return (
            a.push(l), o.parentRequest !== null ? i(o.parentRequest, a) : a
          );
        })(s)
          .reverse()
          .join(" --> ");
      })(t);
      throw new Error(`Circular dependency found: ${r}`);
    }
    tp(t);
  });
}
function rp(e) {
  if (e.name != null && e.name !== "") return e.name;
  {
    const t = e.toString(),
      r = t.match(/^function\s*([^\s(]+)/);
    return r === null ? `Anonymous function: ${t}` : r[1];
  }
}
function kc(e) {
  return `{"key":"${e.key.toString()}","value":"${e.value.toString()}"}`;
}
class sp {
  constructor(t) {
    $(this, "id");
    $(this, "container");
    $(this, "plan");
    $(this, "currentRequest");
    (this.id = oo()), (this.container = t);
  }
  addPlan(t) {
    this.plan = t;
  }
  setCurrentRequest(t) {
    this.currentRequest = t;
  }
}
class ls {
  constructor(t, r) {
    $(this, "key");
    $(this, "value");
    (this.key = t), (this.value = r);
  }
  toString() {
    return this.key === Bt
      ? `named: ${String(this.value).toString()} `
      : `tagged: { key:${this.key.toString()}, value: ${String(this.value)} }`;
  }
}
class Gm {
  constructor(t, r) {
    $(this, "parentContext");
    $(this, "rootRequest");
    (this.parentContext = t), (this.rootRequest = r);
  }
}
function np(e, t) {
  const r = (function (a) {
    const l = Object.getPrototypeOf(a.prototype);
    return l == null ? void 0 : l.constructor;
  })(t);
  if (r === void 0 || r === Object) return 0;
  const s = Wg(e)(r),
    n = s.map((a) => a.metadata.filter((l) => l.key === Bm)),
    i = [].concat.apply([], n).length,
    o = s.length - i;
  return o > 0 ? o : np(e, r);
}
class Wn {
  constructor(t, r, s, n, i) {
    $(this, "id");
    $(this, "serviceIdentifier");
    $(this, "parentContext");
    $(this, "parentRequest");
    $(this, "bindings");
    $(this, "childRequests");
    $(this, "target");
    $(this, "requestScope");
    (this.id = oo()),
      (this.serviceIdentifier = t),
      (this.parentContext = r),
      (this.parentRequest = s),
      (this.target = i),
      (this.childRequests = []),
      (this.bindings = Array.isArray(n) ? n : [n]),
      (this.requestScope = s === null ? new Map() : null);
  }
  addChildRequest(t, r, s) {
    const n = new Wn(t, this.parentContext, this, r, s);
    return this.childRequests.push(n), n;
  }
}
function Gi(e) {
  return e._bindingDictionary;
}
function jc(e, t, r, s, n) {
  let i = fn(r.container, n.serviceIdentifier),
    o = [];
  return (
    i.length === Cs.NoBindingsAvailable &&
      r.container.options.autoBindInjectable === !0 &&
      typeof n.serviceIdentifier == "function" &&
      e.getConstructorMetadata(n.serviceIdentifier).compilerGeneratedMetadata &&
      (r.container.bind(n.serviceIdentifier).toSelf(),
      (i = fn(r.container, n.serviceIdentifier))),
    (o = t
      ? i
      : i.filter((a) => {
          const l = new Wn(a.serviceIdentifier, r, s, a, n);
          return a.constraint(l);
        })),
    (function (a, l, c, u, d) {
      switch (l.length) {
        case Cs.NoBindingsAvailable:
          if (u.isOptional()) return l;
          {
            const f = Ur(a);
            let h = km;
            throw (
              ((h += (function (p, _) {
                if (_.isTagged() || _.isNamed()) {
                  let w = "";
                  const m = _.getNamedTag(),
                    E = _.getCustomTags();
                  return (
                    m !== null &&
                      (w +=
                        kc(m) +
                        `
`),
                    E !== null &&
                      E.forEach((D) => {
                        w +=
                          kc(D) +
                          `
`;
                      }),
                    ` ${p}
 ${p} - ${w}`
                  );
                }
                return ` ${p}`;
              })(f, u)),
              (h += Fc(d, f, fn)),
              c !== null &&
                (h += `
Trying to resolve bindings for "${Ur(c.serviceIdentifier)}"`),
              new Error(h))
            );
          }
        case Cs.OnlyOneBindingAvailable:
          return l;
        case Cs.MultipleBindingsAvailable:
        default:
          if (u.isArray()) return l;
          {
            const f = Ur(a);
            let h = `${Fm} ${f}`;
            throw ((h += Fc(d, f, fn)), new Error(h));
          }
      }
    })(n.serviceIdentifier, o, s, n, r.container),
    o
  );
}
function ip(e, t) {
  const r = t.isMultiInject ? Um : Hg,
    s = [new ls(r, e)];
  return (
    t.customTag !== void 0 &&
      s.push(new ls(t.customTag.key, t.customTag.value)),
    t.isOptional === !0 && s.push(new ls(Vg, !0)),
    s
  );
}
function op(e, t, r, s, n, i) {
  let o, a;
  if (n === null) {
    (o = jc(e, t, s, null, i)), (a = new Wn(r, s, null, o, i));
    const l = new Gm(s, a);
    s.addPlan(l);
  } else
    (o = jc(e, t, s, n, i)), (a = n.addChildRequest(i.serviceIdentifier, o, i));
  o.forEach((l) => {
    let c = null;
    if (i.isArray()) c = a.addChildRequest(l.serviceIdentifier, l, i);
    else {
      if (l.cache !== null) return;
      c = a;
    }
    if (l.type === Ee.Instance && l.implementationType !== null) {
      const u = (function (d, f) {
        return Wg(d)(f);
      })(e, l.implementationType);
      if (s.container.options.skipBaseClassChecks !== !0) {
        const d = np(e, l.implementationType);
        if (u.length < d) {
          const f = `The number of constructor arguments in the derived class ${rp(l.implementationType)} must be >= than the number of constructor arguments of its base class.`;
          throw new Error(f);
        }
      }
      u.forEach((d) => {
        op(e, !1, d.serviceIdentifier, s, c, d);
      });
    }
  });
}
function fn(e, t) {
  let r = [];
  const s = Gi(e);
  return (
    s.hasKey(t) ? (r = s.get(t)) : e.parent !== null && (r = fn(e.parent, t)), r
  );
}
function Wm(e, t, r, s, n, i = !1) {
  const o = new sp(t),
    a = (function (l, c, u) {
      const d = ip(c, u),
        f = io(d);
      if (f.kind === _t.unmanaged)
        throw new Error("Unexpected metadata when creating target");
      return new ji("", f, l);
    })(r, s, n);
  try {
    return op(e, i, s, o, null, a), o;
  } catch (l) {
    throw (Zg(l) && tp(o.plan.rootRequest), l);
  }
}
function pt(e) {
  return (
    ((typeof e == "object" && e !== null) || typeof e == "function") &&
    typeof e.then == "function"
  );
}
function ap(e) {
  return !!pt(e) || (Array.isArray(e) && e.some(pt));
}
const Vm = (e, t, r) => {
    e.has(t.id) || e.set(t.id, r);
  },
  Hm = (e, t) => {
    (e.cache = t), (e.activated = !0), pt(t) && zm(e, t);
  },
  zm = async (e, t) => {
    try {
      const r = await t;
      e.cache = r;
    } catch (r) {
      throw ((e.cache = null), (e.activated = !1), r);
    }
  };
var wn;
(function (e) {
  (e.DynamicValue = "toDynamicValue"),
    (e.Factory = "toFactory"),
    (e.Provider = "toProvider");
})(wn || (wn = {}));
function qm(e, t, r) {
  let s;
  if (t.length > 0) {
    const n = (function (o, a) {
        return o.reduce(
          (l, c) => {
            const u = a(c);
            return (
              c.target.type === Yg.ConstructorArgument
                ? l.constructorInjections.push(u)
                : (l.propertyRequests.push(c), l.propertyInjections.push(u)),
              l.isAsync || (l.isAsync = ap(u)),
              l
            );
          },
          {
            constructorInjections: [],
            isAsync: !1,
            propertyInjections: [],
            propertyRequests: [],
          },
        );
      })(t, r),
      i = { ...n, constr: e };
    s = n.isAsync
      ? (async function (o) {
          const a = await Wc(o.constructorInjections),
            l = await Wc(o.propertyInjections);
          return Gc({ ...o, constructorInjections: a, propertyInjections: l });
        })(i)
      : Gc(i);
  } else s = new e();
  return s;
}
function Gc(e) {
  const t = new e.constr(...e.constructorInjections);
  return (
    e.propertyRequests.forEach((r, s) => {
      const n = r.target.identifier,
        i = e.propertyInjections[s];
      (r.target.isOptional() && i === void 0) || (t[n] = i);
    }),
    t
  );
}
async function Wc(e) {
  const t = [];
  for (const r of e) Array.isArray(r) ? t.push(Promise.all(r)) : t.push(r);
  return Promise.all(t);
}
function Vc(e, t) {
  const r = (function (s, n) {
    var a;
    if (Reflect.hasMetadata(Bc, s)) {
      const l = Reflect.getMetadata(Bc, s);
      try {
        return (a = n[l.value]) == null ? void 0 : a.call(n);
      } catch (c) {
        if (c instanceof Error)
          throw new Error(
            ((i = s.name),
            (o = c.message),
            `@postConstruct error in class ${i}: ${o}`),
          );
      }
    }
    var i, o;
  })(e, t);
  return pt(r) ? r.then(() => t) : t;
}
function Jm(e, t) {
  e.scope !== $e.Singleton &&
    (function (r, s) {
      const n = `Class cannot be instantiated in ${r.scope === $e.Request ? "request" : "transient"} scope.`;
      if (typeof r.onDeactivation == "function") throw new Error(ga(s.name, n));
      if (Reflect.hasMetadata(fa, s))
        throw new Error(`@preDestroy error in class ${s.name}: ${n}`);
    })(e, t);
}
const Bl = (e) => (t) => {
    t.parentContext.setCurrentRequest(t);
    const r = t.bindings,
      s = t.childRequests,
      n = t.target && t.target.isArray(),
      i = !(
        t.parentRequest &&
        t.parentRequest.target &&
        t.target &&
        t.parentRequest.target.matchesArray(t.target.serviceIdentifier)
      );
    if (n && i) return s.map((o) => Bl(e)(o));
    {
      if (t.target.isOptional() && r.length === 0) return;
      const o = r[0];
      return Zm(e, t, o);
    }
  },
  Ym = (e, t) => {
    const r = ((s) => {
      switch (s.type) {
        case Ee.Factory:
          return { factory: s.factory, factoryType: wn.Factory };
        case Ee.Provider:
          return { factory: s.provider, factoryType: wn.Provider };
        case Ee.DynamicValue:
          return { factory: s.dynamicValue, factoryType: wn.DynamicValue };
        default:
          throw new Error(`Unexpected factory type ${s.type}`);
      }
    })(e);
    return ((s, n) => {
      try {
        return s();
      } catch (i) {
        throw Zg(i) ? n() : i;
      }
    })(
      () => r.factory.bind(e)(t),
      () => {
        return new Error(
          ((s = r.factoryType),
          (n = t.currentRequest.serviceIdentifier.toString()),
          `It looks like there is a circular dependency in one of the '${s}' bindings. Please investigate bindings with service identifier '${n}'.`),
        );
        var s, n;
      },
    );
  },
  Qm = (e, t, r) => {
    let s;
    const n = t.childRequests;
    switch (
      (((i) => {
        let o = null;
        switch (i.type) {
          case Ee.ConstantValue:
          case Ee.Function:
            o = i.cache;
            break;
          case Ee.Constructor:
          case Ee.Instance:
            o = i.implementationType;
            break;
          case Ee.DynamicValue:
            o = i.dynamicValue;
            break;
          case Ee.Provider:
            o = i.provider;
            break;
          case Ee.Factory:
            o = i.factory;
        }
        if (o === null) {
          const a = Ur(i.serviceIdentifier);
          throw new Error(`Invalid binding type: ${a}`);
        }
      })(r),
      r.type)
    ) {
      case Ee.ConstantValue:
      case Ee.Function:
        s = r.cache;
        break;
      case Ee.Constructor:
        s = r.implementationType;
        break;
      case Ee.Instance:
        s = (function (i, o, a, l) {
          Jm(i, o);
          const c = qm(o, a, l);
          return pt(c) ? c.then((u) => Vc(o, u)) : Vc(o, c);
        })(r, r.implementationType, n, Bl(e));
        break;
      default:
        s = Ym(r, t.parentContext);
    }
    return s;
  },
  Xm = (e, t, r) => {
    let s = ((n, i) =>
      i.scope === $e.Singleton && i.activated
        ? i.cache
        : i.scope === $e.Request && n.has(i.id)
          ? n.get(i.id)
          : null)(e, t);
    return (
      s !== null ||
        ((s = r()),
        ((n, i, o) => {
          i.scope === $e.Singleton && Hm(i, o),
            i.scope === $e.Request && Vm(n, i, o);
        })(e, t, s)),
      s
    );
  },
  Zm = (e, t, r) =>
    Xm(e, r, () => {
      let s = Qm(e, t, r);
      return (s = pt(s) ? s.then((n) => Hc(t, r, n)) : Hc(t, r, s)), s;
    });
function Hc(e, t, r) {
  let s = eS(e.parentContext, t, r);
  const n = sS(e.parentContext.container);
  let i,
    o = n.next();
  do {
    i = o.value;
    const a = e.parentContext,
      l = e.serviceIdentifier,
      c = rS(i, l);
    (s = pt(s) ? lp(c, a, s) : tS(c, a, s)), (o = n.next());
  } while (o.done !== !0 && !Gi(i).hasKey(e.serviceIdentifier));
  return s;
}
const eS = (e, t, r) => {
    let s;
    return (
      (s = typeof t.onActivation == "function" ? t.onActivation(e, r) : r), s
    );
  },
  tS = (e, t, r) => {
    let s = e.next();
    for (; s.done !== !0; ) {
      if (pt((r = s.value(t, r)))) return lp(e, t, r);
      s = e.next();
    }
    return r;
  },
  lp = async (e, t, r) => {
    let s = await r,
      n = e.next();
    for (; n.done !== !0; ) (s = await n.value(t, s)), (n = e.next());
    return s;
  },
  rS = (e, t) => {
    const r = e._activations;
    return r.hasKey(t) ? r.get(t).values() : [].values();
  },
  sS = (e) => {
    const t = [e];
    let r = e.parent;
    for (; r !== null; ) t.push(r), (r = r.parent);
    return {
      next: () => {
        const s = t.pop();
        return s !== void 0
          ? { done: !1, value: s }
          : { done: !0, value: void 0 };
      },
    };
  },
  ar = (e, t) => {
    const r = e.parentRequest;
    return r !== null && (!!t(r) || ar(r, t));
  },
  gn = (e) => (t) => {
    const r = (s) =>
      s !== null && s.target !== null && s.target.matchesTag(e)(t);
    return (r.metaData = new ls(e, t)), r;
  },
  oi = gn(Bt),
  Ro = (e) => (t) => {
    let r = null;
    if (t !== null) {
      if (((r = t.bindings[0]), typeof e == "string"))
        return r.serviceIdentifier === e;
      {
        const s = t.bindings[0].implementationType;
        return e === s;
      }
    }
    return !1;
  };
class Wi {
  constructor(t) {
    $(this, "_binding");
    this._binding = t;
  }
  when(t) {
    return (this._binding.constraint = t), new Qe(this._binding);
  }
  whenTargetNamed(t) {
    return (this._binding.constraint = oi(t)), new Qe(this._binding);
  }
  whenTargetIsDefault() {
    return (
      (this._binding.constraint = (t) =>
        t === null
          ? !1
          : t.target !== null && !t.target.isNamed() && !t.target.isTagged()),
      new Qe(this._binding)
    );
  }
  whenTargetTagged(t, r) {
    return (this._binding.constraint = gn(t)(r)), new Qe(this._binding);
  }
  whenInjectedInto(t) {
    return (
      (this._binding.constraint = (r) => r !== null && Ro(t)(r.parentRequest)),
      new Qe(this._binding)
    );
  }
  whenParentNamed(t) {
    return (
      (this._binding.constraint = (r) => r !== null && oi(t)(r.parentRequest)),
      new Qe(this._binding)
    );
  }
  whenParentTagged(t, r) {
    return (
      (this._binding.constraint = (s) =>
        s !== null && gn(t)(r)(s.parentRequest)),
      new Qe(this._binding)
    );
  }
  whenAnyAncestorIs(t) {
    return (
      (this._binding.constraint = (r) => r !== null && ar(r, Ro(t))),
      new Qe(this._binding)
    );
  }
  whenNoAncestorIs(t) {
    return (
      (this._binding.constraint = (r) => r !== null && !ar(r, Ro(t))),
      new Qe(this._binding)
    );
  }
  whenAnyAncestorNamed(t) {
    return (
      (this._binding.constraint = (r) => r !== null && ar(r, oi(t))),
      new Qe(this._binding)
    );
  }
  whenNoAncestorNamed(t) {
    return (
      (this._binding.constraint = (r) => r !== null && !ar(r, oi(t))),
      new Qe(this._binding)
    );
  }
  whenAnyAncestorTagged(t, r) {
    return (
      (this._binding.constraint = (s) => s !== null && ar(s, gn(t)(r))),
      new Qe(this._binding)
    );
  }
  whenNoAncestorTagged(t, r) {
    return (
      (this._binding.constraint = (s) => s !== null && !ar(s, gn(t)(r))),
      new Qe(this._binding)
    );
  }
  whenAnyAncestorMatches(t) {
    return (
      (this._binding.constraint = (r) => r !== null && ar(r, t)),
      new Qe(this._binding)
    );
  }
  whenNoAncestorMatches(t) {
    return (
      (this._binding.constraint = (r) => r !== null && !ar(r, t)),
      new Qe(this._binding)
    );
  }
}
class Qe {
  constructor(t) {
    $(this, "_binding");
    this._binding = t;
  }
  onActivation(t) {
    return (this._binding.onActivation = t), new Wi(this._binding);
  }
  onDeactivation(t) {
    return (this._binding.onDeactivation = t), new Wi(this._binding);
  }
}
class cr {
  constructor(t) {
    $(this, "_bindingWhenSyntax");
    $(this, "_bindingOnSyntax");
    $(this, "_binding");
    (this._binding = t),
      (this._bindingWhenSyntax = new Wi(this._binding)),
      (this._bindingOnSyntax = new Qe(this._binding));
  }
  when(t) {
    return this._bindingWhenSyntax.when(t);
  }
  whenTargetNamed(t) {
    return this._bindingWhenSyntax.whenTargetNamed(t);
  }
  whenTargetIsDefault() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  }
  whenTargetTagged(t, r) {
    return this._bindingWhenSyntax.whenTargetTagged(t, r);
  }
  whenInjectedInto(t) {
    return this._bindingWhenSyntax.whenInjectedInto(t);
  }
  whenParentNamed(t) {
    return this._bindingWhenSyntax.whenParentNamed(t);
  }
  whenParentTagged(t, r) {
    return this._bindingWhenSyntax.whenParentTagged(t, r);
  }
  whenAnyAncestorIs(t) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(t);
  }
  whenNoAncestorIs(t) {
    return this._bindingWhenSyntax.whenNoAncestorIs(t);
  }
  whenAnyAncestorNamed(t) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(t);
  }
  whenAnyAncestorTagged(t, r) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(t, r);
  }
  whenNoAncestorNamed(t) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(t);
  }
  whenNoAncestorTagged(t, r) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(t, r);
  }
  whenAnyAncestorMatches(t) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(t);
  }
  whenNoAncestorMatches(t) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(t);
  }
  onActivation(t) {
    return this._bindingOnSyntax.onActivation(t);
  }
  onDeactivation(t) {
    return this._bindingOnSyntax.onDeactivation(t);
  }
}
class nS {
  constructor(t) {
    $(this, "_binding");
    this._binding = t;
  }
  inRequestScope() {
    return (this._binding.scope = $e.Request), new cr(this._binding);
  }
  inSingletonScope() {
    return (this._binding.scope = $e.Singleton), new cr(this._binding);
  }
  inTransientScope() {
    return (this._binding.scope = $e.Transient), new cr(this._binding);
  }
}
class zc {
  constructor(t) {
    $(this, "_bindingInSyntax");
    $(this, "_bindingWhenSyntax");
    $(this, "_bindingOnSyntax");
    $(this, "_binding");
    (this._binding = t),
      (this._bindingWhenSyntax = new Wi(this._binding)),
      (this._bindingOnSyntax = new Qe(this._binding)),
      (this._bindingInSyntax = new nS(t));
  }
  inRequestScope() {
    return this._bindingInSyntax.inRequestScope();
  }
  inSingletonScope() {
    return this._bindingInSyntax.inSingletonScope();
  }
  inTransientScope() {
    return this._bindingInSyntax.inTransientScope();
  }
  when(t) {
    return this._bindingWhenSyntax.when(t);
  }
  whenTargetNamed(t) {
    return this._bindingWhenSyntax.whenTargetNamed(t);
  }
  whenTargetIsDefault() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  }
  whenTargetTagged(t, r) {
    return this._bindingWhenSyntax.whenTargetTagged(t, r);
  }
  whenInjectedInto(t) {
    return this._bindingWhenSyntax.whenInjectedInto(t);
  }
  whenParentNamed(t) {
    return this._bindingWhenSyntax.whenParentNamed(t);
  }
  whenParentTagged(t, r) {
    return this._bindingWhenSyntax.whenParentTagged(t, r);
  }
  whenAnyAncestorIs(t) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(t);
  }
  whenNoAncestorIs(t) {
    return this._bindingWhenSyntax.whenNoAncestorIs(t);
  }
  whenAnyAncestorNamed(t) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(t);
  }
  whenAnyAncestorTagged(t, r) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(t, r);
  }
  whenNoAncestorNamed(t) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(t);
  }
  whenNoAncestorTagged(t, r) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(t, r);
  }
  whenAnyAncestorMatches(t) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(t);
  }
  whenNoAncestorMatches(t) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(t);
  }
  onActivation(t) {
    return this._bindingOnSyntax.onActivation(t);
  }
  onDeactivation(t) {
    return this._bindingOnSyntax.onDeactivation(t);
  }
}
class iS {
  constructor(t) {
    $(this, "_binding");
    this._binding = t;
  }
  to(t) {
    return (
      (this._binding.type = Ee.Instance),
      (this._binding.implementationType = t),
      new zc(this._binding)
    );
  }
  toSelf() {
    if (typeof this._binding.serviceIdentifier != "function")
      throw new Error(
        "The toSelf function can only be applied when a constructor is used as service identifier",
      );
    const t = this._binding.serviceIdentifier;
    return this.to(t);
  }
  toConstantValue(t) {
    return (
      (this._binding.type = Ee.ConstantValue),
      (this._binding.cache = t),
      (this._binding.dynamicValue = null),
      (this._binding.implementationType = null),
      (this._binding.scope = $e.Singleton),
      new cr(this._binding)
    );
  }
  toDynamicValue(t) {
    return (
      (this._binding.type = Ee.DynamicValue),
      (this._binding.cache = null),
      (this._binding.dynamicValue = t),
      (this._binding.implementationType = null),
      new zc(this._binding)
    );
  }
  toConstructor(t) {
    return (
      (this._binding.type = Ee.Constructor),
      (this._binding.implementationType = t),
      (this._binding.scope = $e.Singleton),
      new cr(this._binding)
    );
  }
  toFactory(t) {
    return (
      (this._binding.type = Ee.Factory),
      (this._binding.factory = t),
      (this._binding.scope = $e.Singleton),
      new cr(this._binding)
    );
  }
  toFunction(t) {
    if (typeof t != "function")
      throw new Error("Value provided to function binding must be a function!");
    const r = this.toConstantValue(t);
    return (
      (this._binding.type = Ee.Function),
      (this._binding.scope = $e.Singleton),
      r
    );
  }
  toAutoFactory(t) {
    return (
      (this._binding.type = Ee.Factory),
      (this._binding.factory = (r) => () => r.container.get(t)),
      (this._binding.scope = $e.Singleton),
      new cr(this._binding)
    );
  }
  toAutoNamedFactory(t) {
    return (
      (this._binding.type = Ee.Factory),
      (this._binding.factory = (r) => (s) => r.container.getNamed(t, s)),
      new cr(this._binding)
    );
  }
  toProvider(t) {
    return (
      (this._binding.type = Ee.Provider),
      (this._binding.provider = t),
      (this._binding.scope = $e.Singleton),
      new cr(this._binding)
    );
  }
  toService(t) {
    (this._binding.type = Ee.DynamicValue),
      Object.defineProperty(this._binding, "cache", {
        configurable: !0,
        enumerable: !0,
        get: () => null,
        set(r) {},
      }),
      (this._binding.dynamicValue = (r) => {
        try {
          return r.container.get(t);
        } catch {
          return r.container.getAsync(t);
        }
      }),
      (this._binding.implementationType = null);
  }
}
class Ul {
  constructor() {
    $(this, "bindings");
    $(this, "activations");
    $(this, "deactivations");
    $(this, "middleware");
    $(this, "moduleActivationStore");
  }
  static of(t, r, s, n, i) {
    const o = new Ul();
    return (
      (o.bindings = t),
      (o.middleware = r),
      (o.deactivations = n),
      (o.activations = s),
      (o.moduleActivationStore = i),
      o
    );
  }
}
class hr {
  constructor() {
    $(this, "_map");
    this._map = new Map();
  }
  getMap() {
    return this._map;
  }
  add(t, r) {
    if ((this._checkNonNulish(t), r == null)) throw new Error(Uc);
    const s = this._map.get(t);
    s !== void 0 ? s.push(r) : this._map.set(t, [r]);
  }
  get(t) {
    this._checkNonNulish(t);
    const r = this._map.get(t);
    if (r !== void 0) return r;
    throw new Error(Nc);
  }
  remove(t) {
    if ((this._checkNonNulish(t), !this._map.delete(t))) throw new Error(Nc);
  }
  removeIntersection(t) {
    this.traverse((r, s) => {
      const n = t.hasKey(r) ? t.get(r) : void 0;
      if (n !== void 0) {
        const i = s.filter((o) => !n.some((a) => o === a));
        this._setValue(r, i);
      }
    });
  }
  removeByCondition(t) {
    const r = [];
    return (
      this._map.forEach((s, n) => {
        const i = [];
        for (const o of s) t(o) ? r.push(o) : i.push(o);
        this._setValue(n, i);
      }),
      r
    );
  }
  hasKey(t) {
    return this._checkNonNulish(t), this._map.has(t);
  }
  clone() {
    const t = new hr();
    return (
      this._map.forEach((r, s) => {
        r.forEach((n) => {
          var i;
          t.add(
            s,
            typeof (i = n) == "object" &&
              i !== null &&
              "clone" in i &&
              typeof i.clone == "function"
              ? n.clone()
              : n,
          );
        });
      }),
      t
    );
  }
  traverse(t) {
    this._map.forEach((r, s) => {
      t(s, r);
    });
  }
  _checkNonNulish(t) {
    if (t == null) throw new Error(Uc);
  }
  _setValue(t, r) {
    r.length > 0 ? this._map.set(t, r) : this._map.delete(t);
  }
}
class Nl {
  constructor() {
    $(this, "_map", new Map());
  }
  remove(t) {
    const r = this._map.get(t);
    return r === void 0
      ? this._getEmptyHandlersStore()
      : (this._map.delete(t), r);
  }
  addDeactivation(t, r, s) {
    this._getModuleActivationHandlers(t).onDeactivations.add(r, s);
  }
  addActivation(t, r, s) {
    this._getModuleActivationHandlers(t).onActivations.add(r, s);
  }
  clone() {
    const t = new Nl();
    return (
      this._map.forEach((r, s) => {
        t._map.set(s, {
          onActivations: r.onActivations.clone(),
          onDeactivations: r.onDeactivations.clone(),
        });
      }),
      t
    );
  }
  _getModuleActivationHandlers(t) {
    let r = this._map.get(t);
    return (
      r === void 0 &&
        ((r = this._getEmptyHandlersStore()), this._map.set(t, r)),
      r
    );
  }
  _getEmptyHandlersStore() {
    return { onActivations: new hr(), onDeactivations: new hr() };
  }
}
class pa {
  constructor(t) {
    $(this, "id");
    $(this, "parent");
    $(this, "options");
    $(this, "_middleware");
    $(this, "_bindingDictionary");
    $(this, "_activations");
    $(this, "_deactivations");
    $(this, "_snapshots");
    $(this, "_metadataReader");
    $(this, "_moduleActivationStore");
    const r = t || {};
    if (typeof r != "object")
      throw new Error(
        "Invalid Container constructor argument. Container options must be an object.",
      );
    if (r.defaultScope === void 0) r.defaultScope = $e.Transient;
    else if (
      r.defaultScope !== $e.Singleton &&
      r.defaultScope !== $e.Transient &&
      r.defaultScope !== $e.Request
    )
      throw new Error(
        'Invalid Container option. Default scope must be a string ("singleton" or "transient").',
      );
    if (r.autoBindInjectable === void 0) r.autoBindInjectable = !1;
    else if (typeof r.autoBindInjectable != "boolean")
      throw new Error(
        "Invalid Container option. Auto bind injectable must be a boolean",
      );
    if (r.skipBaseClassChecks === void 0) r.skipBaseClassChecks = !1;
    else if (typeof r.skipBaseClassChecks != "boolean")
      throw new Error(
        "Invalid Container option. Skip base check must be a boolean",
      );
    (this.options = {
      autoBindInjectable: r.autoBindInjectable,
      defaultScope: r.defaultScope,
      skipBaseClassChecks: r.skipBaseClassChecks,
    }),
      (this.id = oo()),
      (this._bindingDictionary = new hr()),
      (this._snapshots = []),
      (this._middleware = null),
      (this._activations = new hr()),
      (this._deactivations = new hr()),
      (this.parent = null),
      (this._metadataReader = new jm()),
      (this._moduleActivationStore = new Nl());
  }
  static merge(t, r, ...s) {
    const n = new pa(),
      i = [t, r, ...s].map((a) => Gi(a)),
      o = Gi(n);
    return (
      i.forEach((a) => {
        var l;
        (l = o),
          a.traverse((c, u) => {
            u.forEach((d) => {
              l.add(d.serviceIdentifier, d.clone());
            });
          });
      }),
      n
    );
  }
  load(...t) {
    const r = this._getContainerModuleHelpersFactory();
    for (const s of t) {
      const n = r(s.id);
      s.registry(
        n.bindFunction,
        n.unbindFunction,
        n.isboundFunction,
        n.rebindFunction,
        n.unbindAsyncFunction,
        n.onActivationFunction,
        n.onDeactivationFunction,
      );
    }
  }
  async loadAsync(...t) {
    const r = this._getContainerModuleHelpersFactory();
    for (const s of t) {
      const n = r(s.id);
      await s.registry(
        n.bindFunction,
        n.unbindFunction,
        n.isboundFunction,
        n.rebindFunction,
        n.unbindAsyncFunction,
        n.onActivationFunction,
        n.onDeactivationFunction,
      );
    }
  }
  unload(...t) {
    t.forEach((r) => {
      const s = this._removeModuleBindings(r.id);
      this._deactivateSingletons(s), this._removeModuleHandlers(r.id);
    });
  }
  async unloadAsync(...t) {
    for (const r of t) {
      const s = this._removeModuleBindings(r.id);
      await this._deactivateSingletonsAsync(s),
        this._removeModuleHandlers(r.id);
    }
  }
  bind(t) {
    return this._bind(this._buildBinding(t));
  }
  rebind(t) {
    return this.unbind(t), this.bind(t);
  }
  async rebindAsync(t) {
    return await this.unbindAsync(t), this.bind(t);
  }
  unbind(t) {
    if (this._bindingDictionary.hasKey(t)) {
      const r = this._bindingDictionary.get(t);
      this._deactivateSingletons(r);
    }
    this._removeServiceFromDictionary(t);
  }
  async unbindAsync(t) {
    if (this._bindingDictionary.hasKey(t)) {
      const r = this._bindingDictionary.get(t);
      await this._deactivateSingletonsAsync(r);
    }
    this._removeServiceFromDictionary(t);
  }
  unbindAll() {
    this._bindingDictionary.traverse((t, r) => {
      this._deactivateSingletons(r);
    }),
      (this._bindingDictionary = new hr());
  }
  async unbindAllAsync() {
    const t = [];
    this._bindingDictionary.traverse((r, s) => {
      t.push(this._deactivateSingletonsAsync(s));
    }),
      await Promise.all(t),
      (this._bindingDictionary = new hr());
  }
  onActivation(t, r) {
    this._activations.add(t, r);
  }
  onDeactivation(t, r) {
    this._deactivations.add(t, r);
  }
  isBound(t) {
    let r = this._bindingDictionary.hasKey(t);
    return !r && this.parent && (r = this.parent.isBound(t)), r;
  }
  isCurrentBound(t) {
    return this._bindingDictionary.hasKey(t);
  }
  isBoundNamed(t, r) {
    return this.isBoundTagged(t, Bt, r);
  }
  isBoundTagged(t, r, s) {
    let n = !1;
    if (this._bindingDictionary.hasKey(t)) {
      const i = this._bindingDictionary.get(t),
        o = (function (a, l, c) {
          const u = ip(l, c),
            d = io(u);
          if (d.kind === _t.unmanaged)
            throw new Error("Unexpected metadata when creating target");
          const f = new ji("", d, "Variable"),
            h = new sp(a);
          return new Wn(l, h, null, [], f);
        })(this, t, { customTag: { key: r, value: s }, isMultiInject: !1 });
      n = i.some((a) => a.constraint(o));
    }
    return !n && this.parent && (n = this.parent.isBoundTagged(t, r, s)), n;
  }
  snapshot() {
    this._snapshots.push(
      Ul.of(
        this._bindingDictionary.clone(),
        this._middleware,
        this._activations.clone(),
        this._deactivations.clone(),
        this._moduleActivationStore.clone(),
      ),
    );
  }
  restore() {
    const t = this._snapshots.pop();
    if (t === void 0) throw new Error("No snapshot available to restore.");
    (this._bindingDictionary = t.bindings),
      (this._activations = t.activations),
      (this._deactivations = t.deactivations),
      (this._middleware = t.middleware),
      (this._moduleActivationStore = t.moduleActivationStore);
  }
  createChild(t) {
    const r = new pa(t || this.options);
    return (r.parent = this), r;
  }
  applyMiddleware(...t) {
    const r = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = t.reduce((s, n) => n(s), r);
  }
  applyCustomMetadataReader(t) {
    this._metadataReader = t;
  }
  get(t) {
    const r = this._getNotAllArgs(t, !1, !1);
    return this._getButThrowIfAsync(r);
  }
  async getAsync(t) {
    const r = this._getNotAllArgs(t, !1, !1);
    return this._get(r);
  }
  getTagged(t, r, s) {
    const n = this._getNotAllArgs(t, !1, !1, r, s);
    return this._getButThrowIfAsync(n);
  }
  async getTaggedAsync(t, r, s) {
    const n = this._getNotAllArgs(t, !1, !1, r, s);
    return this._get(n);
  }
  getNamed(t, r) {
    return this.getTagged(t, Bt, r);
  }
  async getNamedAsync(t, r) {
    return this.getTaggedAsync(t, Bt, r);
  }
  getAll(t, r) {
    const s = this._getAllArgs(t, r, !1);
    return this._getButThrowIfAsync(s);
  }
  async getAllAsync(t, r) {
    const s = this._getAllArgs(t, r, !1);
    return this._getAll(s);
  }
  getAllTagged(t, r, s) {
    const n = this._getNotAllArgs(t, !0, !1, r, s);
    return this._getButThrowIfAsync(n);
  }
  async getAllTaggedAsync(t, r, s) {
    const n = this._getNotAllArgs(t, !0, !1, r, s);
    return this._getAll(n);
  }
  getAllNamed(t, r) {
    return this.getAllTagged(t, Bt, r);
  }
  async getAllNamedAsync(t, r) {
    return this.getAllTaggedAsync(t, Bt, r);
  }
  resolve(t) {
    const r = this.isBound(t);
    r || this.bind(t).toSelf();
    const s = this.get(t);
    return r || this.unbind(t), s;
  }
  tryGet(t) {
    const r = this._getNotAllArgs(t, !1, !0);
    return this._getButThrowIfAsync(r);
  }
  async tryGetAsync(t) {
    const r = this._getNotAllArgs(t, !1, !0);
    return this._get(r);
  }
  tryGetTagged(t, r, s) {
    const n = this._getNotAllArgs(t, !1, !0, r, s);
    return this._getButThrowIfAsync(n);
  }
  async tryGetTaggedAsync(t, r, s) {
    const n = this._getNotAllArgs(t, !1, !0, r, s);
    return this._get(n);
  }
  tryGetNamed(t, r) {
    return this.tryGetTagged(t, Bt, r);
  }
  async tryGetNamedAsync(t, r) {
    return this.tryGetTaggedAsync(t, Bt, r);
  }
  tryGetAll(t, r) {
    const s = this._getAllArgs(t, r, !0);
    return this._getButThrowIfAsync(s);
  }
  async tryGetAllAsync(t, r) {
    const s = this._getAllArgs(t, r, !0);
    return this._getAll(s);
  }
  tryGetAllTagged(t, r, s) {
    const n = this._getNotAllArgs(t, !0, !0, r, s);
    return this._getButThrowIfAsync(n);
  }
  async tryGetAllTaggedAsync(t, r, s) {
    const n = this._getNotAllArgs(t, !0, !0, r, s);
    return this._getAll(n);
  }
  tryGetAllNamed(t, r) {
    return this.tryGetAllTagged(t, Bt, r);
  }
  async tryGetAllNamedAsync(t, r) {
    return this.tryGetAllTaggedAsync(t, Bt, r);
  }
  _preDestroy(t, r) {
    var s;
    if (t !== void 0 && Reflect.hasMetadata(fa, t)) {
      const n = Reflect.getMetadata(fa, t);
      return (s = r[n.value]) == null ? void 0 : s.call(r);
    }
  }
  _removeModuleHandlers(t) {
    const r = this._moduleActivationStore.remove(t);
    this._activations.removeIntersection(r.onActivations),
      this._deactivations.removeIntersection(r.onDeactivations);
  }
  _removeModuleBindings(t) {
    return this._bindingDictionary.removeByCondition((r) => r.moduleId === t);
  }
  _deactivate(t, r) {
    const s = r == null ? void 0 : Object.getPrototypeOf(r).constructor;
    try {
      if (this._deactivations.hasKey(t.serviceIdentifier)) {
        const i = this._deactivateContainer(
          r,
          this._deactivations.get(t.serviceIdentifier).values(),
        );
        if (pt(i))
          return this._handleDeactivationError(
            i.then(async () =>
              this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(
                t,
                r,
                s,
              ),
            ),
            t.serviceIdentifier,
          );
      }
      const n = this._propagateContainerDeactivationThenBindingAndPreDestroy(
        t,
        r,
        s,
      );
      if (pt(n)) return this._handleDeactivationError(n, t.serviceIdentifier);
    } catch (n) {
      if (n instanceof Error)
        throw new Error(ga(Ur(t.serviceIdentifier), n.message));
    }
  }
  async _handleDeactivationError(t, r) {
    try {
      await t;
    } catch (s) {
      if (s instanceof Error) throw new Error(ga(Ur(r), s.message));
    }
  }
  _deactivateContainer(t, r) {
    let s = r.next();
    for (; typeof s.value == "function"; ) {
      const n = s.value(t);
      if (pt(n))
        return n.then(async () => this._deactivateContainerAsync(t, r));
      s = r.next();
    }
  }
  async _deactivateContainerAsync(t, r) {
    let s = r.next();
    for (; typeof s.value == "function"; ) await s.value(t), (s = r.next());
  }
  _getContainerModuleHelpersFactory() {
    const t = (l) => (c) => {
        const u = this._buildBinding(c);
        return (u.moduleId = l), this._bind(u);
      },
      r = () => (l) => {
        this.unbind(l);
      },
      s = () => async (l) => this.unbindAsync(l),
      n = () => (l) => this.isBound(l),
      i = (l) => {
        const c = t(l);
        return (u) => (this.unbind(u), c(u));
      },
      o = (l) => (c, u) => {
        this._moduleActivationStore.addActivation(l, c, u),
          this.onActivation(c, u);
      },
      a = (l) => (c, u) => {
        this._moduleActivationStore.addDeactivation(l, c, u),
          this.onDeactivation(c, u);
      };
    return (l) => ({
      bindFunction: t(l),
      isboundFunction: n(),
      onActivationFunction: o(l),
      onDeactivationFunction: a(l),
      rebindFunction: i(l),
      unbindAsyncFunction: s(),
      unbindFunction: r(),
    });
  }
  _bind(t) {
    return this._bindingDictionary.add(t.serviceIdentifier, t), new iS(t);
  }
  _buildBinding(t) {
    const r = this.options.defaultScope || $e.Transient;
    return new Kl(t, r);
  }
  async _getAll(t) {
    return Promise.all(this._get(t));
  }
  _get(t) {
    const r = { ...t, contextInterceptor: (s) => s, targetType: Yg.Variable };
    if (this._middleware) {
      const s = this._middleware(r);
      if (s == null)
        throw new Error(
          "Invalid return type in middleware. Middleware must return!",
        );
      return s;
    }
    return this._planAndResolve()(r);
  }
  _getButThrowIfAsync(t) {
    const r = this._get(t);
    if (ap(r))
      throw new Error(
        `You are attempting to construct ${(function (s) {
          return typeof s == "function"
            ? `[function/class ${s.name || "<anonymous>"}]`
            : typeof s == "symbol"
              ? s.toString()
              : `'${s}'`;
        })(
          t.serviceIdentifier,
        )} in a synchronous way but it has asynchronous dependencies.`,
      );
    return r;
  }
  _getAllArgs(t, r, s) {
    return {
      avoidConstraints: !(r != null && r.enforceBindingConstraints),
      isMultiInject: !0,
      isOptional: s,
      serviceIdentifier: t,
    };
  }
  _getNotAllArgs(t, r, s, n, i) {
    return {
      avoidConstraints: !1,
      isMultiInject: r,
      isOptional: s,
      key: n,
      serviceIdentifier: t,
      value: i,
    };
  }
  _getPlanMetadataFromNextArgs(t) {
    const r = { isMultiInject: t.isMultiInject };
    return (
      t.key !== void 0 && (r.customTag = { key: t.key, value: t.value }),
      t.isOptional === !0 && (r.isOptional = !0),
      r
    );
  }
  _planAndResolve() {
    return (t) => {
      let r = Wm(
        this._metadataReader,
        this,
        t.targetType,
        t.serviceIdentifier,
        this._getPlanMetadataFromNextArgs(t),
        t.avoidConstraints,
      );
      return (
        (r = t.contextInterceptor(r)),
        (function (n) {
          return Bl(n.plan.rootRequest.requestScope)(n.plan.rootRequest);
        })(r)
      );
    };
  }
  _deactivateIfSingleton(t) {
    if (t.activated)
      return pt(t.cache)
        ? t.cache.then((r) => this._deactivate(t, r))
        : this._deactivate(t, t.cache);
  }
  _deactivateSingletons(t) {
    for (const r of t)
      if (pt(this._deactivateIfSingleton(r)))
        throw new Error(
          "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)",
        );
  }
  async _deactivateSingletonsAsync(t) {
    await Promise.all(t.map(async (r) => this._deactivateIfSingleton(r)));
  }
  _propagateContainerDeactivationThenBindingAndPreDestroy(t, r, s) {
    return this.parent
      ? this._deactivate.bind(this.parent)(t, r)
      : this._bindingDeactivationAndPreDestroy(t, r, s);
  }
  async _propagateContainerDeactivationThenBindingAndPreDestroyAsync(t, r, s) {
    this.parent
      ? await this._deactivate.bind(this.parent)(t, r)
      : await this._bindingDeactivationAndPreDestroyAsync(t, r, s);
  }
  _removeServiceFromDictionary(t) {
    try {
      this._bindingDictionary.remove(t);
    } catch {
      throw new Error(`Could not unbind serviceIdentifier: ${Ur(t)}`);
    }
  }
  _bindingDeactivationAndPreDestroy(t, r, s) {
    if (typeof t.onDeactivation == "function") {
      const n = t.onDeactivation(r);
      if (pt(n)) return n.then(() => this._preDestroy(s, r));
    }
    return this._preDestroy(s, r);
  }
  async _bindingDeactivationAndPreDestroyAsync(t, r, s) {
    typeof t.onDeactivation == "function" && (await t.onDeactivation(r)),
      await this._preDestroy(s, r);
  }
}
function oS(e, t, r, s) {
  (function (n) {
    if (n !== void 0) throw new Error(Xg);
  })(t),
    cp(zg, e, r.toString(), s);
}
function aS(e) {
  let t = [];
  if (Array.isArray(e)) {
    t = e;
    const r = (function (s) {
      const n = new Set();
      for (const i of s) {
        if (n.has(i)) return i;
        n.add(i);
      }
    })(t.map((s) => s.key));
    if (r !== void 0) throw new Error(`${Qg} ${r.toString()}`);
  } else t = [e];
  return t;
}
function cp(e, t, r, s) {
  const n = aS(s);
  let i = {};
  Reflect.hasOwnMetadata(e, t) && (i = Reflect.getMetadata(e, t));
  let o = i[r];
  if (o === void 0) o = [];
  else
    for (const a of o)
      if (n.some((l) => l.key === a.key))
        throw new Error(`${Qg} ${a.key.toString()}`);
  o.push(...n), (i[r] = o), Reflect.defineMetadata(e, i, t);
}
function Fl(e) {
  return (t, r, s) => {
    typeof s == "number"
      ? oS(t, r, s, e)
      : (function (n, i, o) {
          if (n.prototype !== void 0) throw new Error(Xg);
          cp(qg, n.constructor, i, o);
        })(t, r, e);
  };
}
function S() {
  return function (e) {
    if (Reflect.hasOwnMetadata(Kc, e))
      throw new Error("Cannot apply @injectable decorator multiple times.");
    const t = Reflect.getMetadata(Jg, e) || [];
    return Reflect.defineMetadata(Kc, t, e), e;
  };
}
function up(e, t) {
  return Fl(new ls(e, t));
}
function lS(e) {
  return (t) => (r, s, n) => {
    if (t === void 0) {
      const i = typeof r == "function" ? r.name : r.constructor.name;
      throw new Error(
        `@inject called with undefined this could mean that the class ${i} has a circular dependency problem. You can use a LazyServiceIdentifer to overcome this limitation.`,
      );
    }
    Fl(new ls(e, t))(r, s, n);
  };
}
const g = lS(Hg);
function Vn() {
  return Fl(new ls(Vg, !0));
}
const qc = (e) => {
  const {
    bucketName: t = "",
    region: r = "",
    secretId: s = "",
    secretKey: n = "",
    token: i = "",
    expiredTime: o = "",
    startTime: a = "",
    cosKey: l = "",
  } = e;
  return {
    bucket: t,
    region: r,
    secretId: s,
    secretKey: n,
    securityToken: i,
    expiredTime: Number(o),
    serverTime: Number(a),
    cosKey: l,
  };
};
function dp(e) {
  return e.replace(/[_.-](\w|$)/g, function (t, r) {
    return r.toUpperCase();
  });
}
function Pi(e, t = !1) {
  return !e || typeof e != "object" || e instanceof Date || e instanceof RegExp
    ? e
    : Array.isArray(e)
      ? e.map((r) => (t ? (typeof r == "object" ? Pi(r, t) : r) : Pi(r)))
      : Object.keys(e).reduce((r, s) => {
          const n = dp(s),
            i = n.charAt(0).toLowerCase() + n.slice(1);
          return (r[i] = t ? e[s] : Pi(e[s])), r;
        }, {});
}
function Xs(e, t) {
  return typeof e == "string" ? dp(e) : Pi(e, t);
}
var cS = 1 / 0,
  uS = "[object Symbol]",
  dS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
  hS = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  hp = "\\ud800-\\udfff",
  fS = "\\u0300-\\u036f\\ufe20-\\ufe23",
  gS = "\\u20d0-\\u20f0",
  fp = "\\u2700-\\u27bf",
  gp = "a-z\\xdf-\\xf6\\xf8-\\xff",
  pS = "\\xac\\xb1\\xd7\\xf7",
  _S = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  vS = "\\u2000-\\u206f",
  wS =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  pp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  mS = "\\ufe0e\\ufe0f",
  _p = pS + _S + vS + wS,
  kl = "['’]",
  Jc = "[" + _p + "]",
  vp = "[" + fS + gS + "]",
  wp = "\\d+",
  SS = "[" + fp + "]",
  mp = "[" + gp + "]",
  Sp = "[^" + hp + _p + wp + fp + gp + pp + "]",
  yS = "\\ud83c[\\udffb-\\udfff]",
  ES = "(?:" + vp + "|" + yS + ")",
  bS = "[^" + hp + "]",
  yp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Ep = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  Os = "[" + pp + "]",
  IS = "\\u200d",
  Yc = "(?:" + mp + "|" + Sp + ")",
  AS = "(?:" + Os + "|" + Sp + ")",
  Qc = "(?:" + kl + "(?:d|ll|m|re|s|t|ve))?",
  Xc = "(?:" + kl + "(?:D|LL|M|RE|S|T|VE))?",
  bp = ES + "?",
  Ip = "[" + mS + "]?",
  OS = "(?:" + IS + "(?:" + [bS, yp, Ep].join("|") + ")" + Ip + bp + ")*",
  PS = Ip + bp + OS,
  DS = "(?:" + [SS, yp, Ep].join("|") + ")" + PS,
  TS = RegExp(kl, "g"),
  CS = RegExp(vp, "g"),
  xS = RegExp(
    [
      Os + "?" + mp + "+" + Qc + "(?=" + [Jc, Os, "$"].join("|") + ")",
      AS + "+" + Xc + "(?=" + [Jc, Os + Yc, "$"].join("|") + ")",
      Os + "?" + Yc + "+" + Qc,
      Os + "+" + Xc,
      wp,
      DS,
    ].join("|"),
    "g",
  ),
  RS = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
  MS = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "ss",
  },
  LS = typeof fr == "object" && fr && fr.Object === Object && fr,
  $S = typeof self == "object" && self && self.Object === Object && self,
  KS = LS || $S || Function("return this")();
function BS(e, t, r, s) {
  for (var n = -1, i = e ? e.length : 0; ++n < i; ) r = t(r, e[n], n, e);
  return r;
}
function US(e) {
  return e.match(dS) || [];
}
function NS(e) {
  return function (t) {
    return e == null ? void 0 : e[t];
  };
}
var FS = NS(MS);
function kS(e) {
  return RS.test(e);
}
function jS(e) {
  return e.match(xS) || [];
}
var GS = Object.prototype,
  WS = GS.toString,
  Zc = KS.Symbol,
  eu = Zc ? Zc.prototype : void 0,
  tu = eu ? eu.toString : void 0;
function VS(e) {
  if (typeof e == "string") return e;
  if (qS(e)) return tu ? tu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -cS ? "-0" : t;
}
function HS(e) {
  return function (t) {
    return BS(QS(JS(t).replace(TS, "")), e, "");
  };
}
function zS(e) {
  return !!e && typeof e == "object";
}
function qS(e) {
  return typeof e == "symbol" || (zS(e) && WS.call(e) == uS);
}
function Ap(e) {
  return e == null ? "" : VS(e);
}
function JS(e) {
  return (e = Ap(e)), e && e.replace(hS, FS).replace(CS, "");
}
var YS = HS(function (e, t, r) {
  return e + (r ? "_" : "") + t.toLowerCase();
});
function QS(e, t, r) {
  return (
    (e = Ap(e)),
    (t = t),
    t === void 0 ? (kS(e) ? jS(e) : US(e)) : e.match(t) || []
  );
}
var XS = YS;
const Op = gs(XS);
function Di(e, t = !1) {
  return !e || typeof e != "object" || e instanceof Date || e instanceof RegExp
    ? e
    : Array.isArray(e)
      ? e.map((r) => (t ? (typeof r == "object" ? Di(r, t) : r) : Di(r)))
      : Object.keys(e).reduce((r, s) => {
          const n = Op(s);
          return (r[n] = t ? e[s] : Di(e[s])), r;
        }, {});
}
function Pp(e, t) {
  return typeof e == "string" ? Op(e) : Di(e, t);
}
const Dp = Symbol.for("FILE_MANAGER_SERVICE"),
  ZS = Symbol.for("FILE_MANAGER_HTTP_SERVICE"),
  ZM = Symbol.for("FILE_MANAGER_HTTP_SERVICE_URL_PREFIX");
var ey = Object.defineProperty,
  ty = Object.getOwnPropertyDescriptor,
  jl = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ty(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ey(t, r, n), n;
  },
  ru = (e, t) => (r, s) => t(r, s, e);
let Vi = class {
  constructor(e, t) {
    (this.service = e), (this.logger = t);
  }
  async createMedia(e) {
    var i;
    const t = await this.service.createMedia(e);
    if (
      !(t != null && t.mediaId) ||
      !((i = t == null ? void 0 : t.cosCredential) != null && i.token)
    )
      return null;
    const { mediaId: r, cosCredential: s, url: n = "" } = t;
    return { mediaId: r, credentials: { ...qc(s), cosUrl: n } };
  }
  async getUploadCredential(e) {
    var n;
    const t = await this.service.getUploadCredential(e);
    if (!((n = t == null ? void 0 : t.cosCredential) != null && n.token))
      return null;
    const { cosCredential: r, cosUrl: s = "" } = t;
    return { credentials: { ...qc(r), cosUrl: s } };
  }
};
jl([q({ fallbackValue: null })], Vi.prototype, "createMedia", 1);
jl([q({ fallbackValue: null })], Vi.prototype, "getUploadCredential", 1);
Vi = jl([S(), ru(0, g(ZS)), ru(1, g(ce))], Vi);
const ry = [];
for (let e = 0; e < 256; ++e) ry.push((e + 256).toString(16).slice(1));
const sy = (e) => {
  try {
    let t = 5381;
    for (let r = 0, s = e.length; r < s; ++r)
      t += (t << 5) + e.charAt(r).charCodeAt(0);
    return t & 2147483647;
  } catch {
    return 0;
  }
};
var In = ((e) => (
  (e[(e.Unknown = 995)] = "Unknown"),
  (e[(e.Timeout = 996)] = "Timeout"),
  (e[(e.FrontendException = 997)] = "FrontendException"),
  e
))(In || {});
const Tp = ({ action: e, params: t }) => {
    var r, s, n;
    console.warn("[callNative] 触发终端调用：", e);
    console.log("[DEBUG] callNative: Full parameters:", { action: e, params: t });
    console.log("[DEBUG] callNative: globalThis.chrome exists:", !!globalThis.chrome);
    console.log("[DEBUG] callNative: globalThis.chrome.imaFrame exists:", !!(globalThis.chrome?.imaFrame));
    console.log("[DEBUG] callNative: globalThis.chrome.imaFrame.invoke exists:", !!(globalThis.chrome?.imaFrame?.invoke));
    
    const chromeRef = (r = globalThis == null ? void 0 : globalThis.chrome);
    const imaFrameRef = (s = chromeRef == null ? void 0 : r.imaFrame);
    const invokeRef = (n = imaFrameRef == null ? void 0 : s.invoke);
    
    console.log("[DEBUG] callNative: chromeRef:", chromeRef);
    console.log("[DEBUG] callNative: imaFrameRef:", imaFrameRef);
    console.log("[DEBUG] callNative: invokeRef:", typeof invokeRef);
    
    if (!invokeRef) {
      console.error("[DEBUG] callNative: invoke function not available, skipping call");
      return;
    }
    
    const callParams = { action: e, params: Ue(t) };
    console.log("[DEBUG] callNative: Calling invoke with:", JSON.stringify(callParams));
    
    try {
      const result = invokeRef.call(imaFrameRef, callParams);
      console.log("[DEBUG] callNative: invoke call result:", result);
    } catch (callError) {
      console.error("[DEBUG] callNative: Error calling invoke:", callError);
    }
  },
  ny = () => {
    const userAgent = globalThis.navigator.userAgent;
    const hasIMA = userAgent.includes("IMA");
    const isFirefoxExtension = userAgent.includes("Firefox") && !!globalThis.chrome?.storage;
    const isChromeExtension = userAgent.includes("Chrome") && !!globalThis.chrome?.storage;
    const isExtensionEnvironment = isFirefoxExtension || isChromeExtension;
    
    console.log("[DEBUG] ny: User agent check - userAgent:", userAgent);
    console.log("[DEBUG] ny: User agent check - includes 'IMA':", hasIMA);
    console.log("[DEBUG] ny: Browser info - Firefox:", userAgent.includes("Firefox"));
    console.log("[DEBUG] ny: Browser info - Chrome:", userAgent.includes("Chrome"));
    console.log("[DEBUG] ny: Extension environment check - Firefox extension:", isFirefoxExtension);
    console.log("[DEBUG] ny: Extension environment check - Chrome extension:", isChromeExtension);
    console.log("[DEBUG] ny: Extension environment check - is extension:", isExtensionEnvironment);
    
    // Allow both desktop IMA and browser extensions (Firefox/Chrome)
    return hasIMA || isExtensionEnvironment;
  },
  eL = async ({ action: e, params: t, timeout: r = 5e3 }) => {
    console.warn("[callNativePromise] 触发终端调用：", e, JSON.stringify(t));
    console.log("[DEBUG] callNativePromise: Full parameters:", { action: e, params: t, timeout: r });
    console.log("[DEBUG] callNativePromise: globalThis.chrome exists:", !!globalThis.chrome);
    console.log("[DEBUG] callNativePromise: globalThis.chrome.imaFrame exists:", !!(globalThis.chrome?.imaFrame));
    console.log("[DEBUG] callNativePromise: globalThis.chrome.imaFrame.invokeWithCallback exists:", !!(globalThis.chrome?.imaFrame?.invokeWithCallback));
    
    const userAgentCheck = ny();
    console.log("[DEBUG] callNativePromise: ny() user agent check result:", userAgentCheck);
    
    try {
      if (userAgentCheck) {
        const isExtensionEnv = !!globalThis.chrome?.storage && !globalThis.chrome?.imaFrame;
        console.log("[DEBUG] callNativePromise: Extension environment detected:", isExtensionEnv);
        
        if (isExtensionEnv) {
          // Browser extension path - use chrome.runtime.sendMessage
          console.log("[DEBUG] callNativePromise: Using extension message passing");
          return new Promise((s) => {
            const timeoutId = setTimeout(() => {
              console.log("[DEBUG] callNativePromise: Extension timeout reached");
              s({ code: In.Timeout, msg: "接口执行超时", data: null });
            }, r);
            
            const messageData = { action: e, params: Ue(t) };
            console.log("[DEBUG] callNativePromise: Sending extension message:", JSON.stringify(messageData));
            
            try {
              console.log("[DEBUG] callNativePromise: About to send message using chrome.runtime.sendMessage");
              console.log("[DEBUG] callNativePromise: chrome.runtime available:", !!globalThis.chrome?.runtime);
              console.log("[DEBUG] callNativePromise: sendMessage function available:", !!globalThis.chrome?.runtime?.sendMessage);
              
              globalThis.chrome.runtime.sendMessage(messageData, (response) => {
                console.log("[DEBUG] callNativePromise: Extension response received:", JSON.stringify(response));
                
                if (globalThis.chrome.runtime.lastError) {
                  console.error("[DEBUG] callNativePromise: Chrome runtime error:", globalThis.chrome.runtime.lastError);
                }
                
                clearTimeout(timeoutId);
                s(response || { code: 0, msg: "Extension response received", data: null });
              });
              
              console.log("[DEBUG] callNativePromise: sendMessage call completed");
            } catch (sendError) {
              console.error("[DEBUG] callNativePromise: Error sending extension message:", sendError);
              clearTimeout(timeoutId);
              s({ code: In.FrontendException, msg: `Extension message error: ${sendError}`, data: null });
            }
          });
        } else {
          // Desktop IMA path - use chrome.imaFrame.invokeWithCallback
          console.log("[DEBUG] callNativePromise: Using native bridge (Desktop IMA path)");
          return new Promise((s) => {
            var n, i, o;
            console.log("[DEBUG] callNativePromise: Setting up timeout (", r, "ms)");
            
            const timeoutId = setTimeout(() => {
              console.log("[DEBUG] callNativePromise: Timeout reached, resolving with timeout response");
              s({ code: In.Timeout, msg: "接口执行超时", data: null });
            }, r);
            
            const chromeImaFrame = (n = globalThis.chrome) == null ? void 0 : n.imaFrame;
            const invokeCallback = (i = chromeImaFrame) == null ? void 0 : i.invokeWithCallback;
            
            console.log("[DEBUG] callNativePromise: chromeImaFrame:", chromeImaFrame);
            console.log("[DEBUG] callNativePromise: invokeCallback function:", typeof invokeCallback);
            
            if (!invokeCallback) {
              console.error("[DEBUG] callNativePromise: invokeWithCallback not available, resolving with null data");
              clearTimeout(timeoutId);
              s({ code: 0, msg: "invokeWithCallback not available", data: null });
              return;
            }
            
            const callParams = { action: e, params: Ue(t) };
            console.log("[DEBUG] callNativePromise: Calling invokeWithCallback with:", JSON.stringify(callParams));
            
            try {
              const result = invokeCallback.call(chromeImaFrame, callParams, (a) => {
                console.log("[DEBUG] callNativePromise: Callback fired with response:", JSON.stringify(a));
                clearTimeout(timeoutId);
                s(a);
              });
              console.log("[DEBUG] callNativePromise: invokeWithCallback call result:", result);
            } catch (callError) {
              console.error("[DEBUG] callNativePromise: Error calling invokeWithCallback:", callError);
              clearTimeout(timeoutId);
              s({ code: In.FrontendException, msg: `Invoke error: ${callError}`, data: null });
            }
          });
        }
      } else {
        console.log("[DEBUG] callNativePromise: User agent check failed, returning null data (Firefox fallback)");
        const fallbackResponse = { code: 0, msg: "User agent check failed - Firefox compatibility issue", data: null };
        console.log("[DEBUG] callNativePromise: Fallback response:", JSON.stringify(fallbackResponse));
        return Promise.resolve(fallbackResponse);
      }
    } catch (s) {
      console.error("[DEBUG] callNativePromise: Exception caught:", s);
      const errorResponse = {
        code: In.FrontendException,
        msg: `执行异常: ${Ue(s)}`,
        data: null,
      };
      console.log("[DEBUG] callNativePromise: Error response:", JSON.stringify(errorResponse));
      return errorResponse;
    }
  },
  tL = (e) =>
    new Promise((t) => {
      var r, s, n, i;
      ((s =
        (r = window == null ? void 0 : window.chrome) == null
          ? void 0
          : r.fileSystem) != null &&
        s.openEntry) ||
        t(null),
        (i =
          (n = window == null ? void 0 : window.chrome) == null
            ? void 0
            : n.fileSystem) == null ||
          i.openEntry(e, (o) => {
            chrome.runtime.lastError && t(null),
              o.file || t(null),
              o.file((a) => t(a));
          });
    }),
  iy = (e) => {
    switch (e) {
      case T.PDF:
        return "application/pdf";
      case T.Word:
        return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      case T.MarkDown:
        return "text/markdown";
      case T.PPT:
        return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
      case T.Unknown:
      case T.Web:
      case T.WeChatArticle:
      case T.Image:
      case T.Note:
      case T.AISession:
        return;
    }
  },
  rL = async (e, t, r) => {
    const s = await fetch(e);
    if (!s.ok) return null;
    const n = await s.blob(),
      i = gm(e) || Date.now().toString(),
      o = iy(t) || n.type;
    return new File([n], i, { lastModified: Date.now(), type: o });
  },
  sL = async (e) => {
    var t, r, s;
    (s =
      (r =
        (t = globalThis == null ? void 0 : globalThis.chrome) == null
          ? void 0
          : t.runtime) == null
        ? void 0
        : r.sendMessage) == null ||
      s.call(r, Fi.KnowledgeBase, { action: Bi.Refresh, knowledgeBaseId: e });
  },
  oy = (e = "feedback") => {
    Tp({ action: Tl.UploadLog, params: Ue({ tag: e }) });
  };
var ay = Object.defineProperty,
  ly = Object.getOwnPropertyDescriptor,
  cy = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ly(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ay(t, r, n), n;
  },
  ai = (e, t) => (r, s) => t(r, s, e),
  uy = ((e) => (
    (e.InvokeWithPromise = "invokeWithPromise"),
    (e.OnAccountInfoChange = "onAccountInfoChange"),
    (e.OnLoginDialogClose = "onLoginDialogClose"),
    e
  ))(uy || {});
let Xe = class {
  constructor(e, t, r, s) {
    (this.invokeWithPromise = e),
      (this.onAccountInfoChange = t),
      (this.onLoginDialogClose = r),
      (this.logger = s),
      (this.getAccountInfo = async () => {
        console.log("[DEBUG] getAccountInfo: Starting account info retrieval");
        console.log("[DEBUG] getAccountInfo: Calling invokeWithPromise with action='getAccountInfo'");
        
        const n = await this.invokeWithPromise({
            action: "getAccountInfo",
            params: {},
          });
          
        console.log("[DEBUG] getAccountInfo: Raw response from invokeWithPromise:", JSON.stringify(n));
        console.log("[DEBUG] getAccountInfo: Response type:", typeof n);
        console.log("[DEBUG] getAccountInfo: Response code:", n?.code);
        console.log("[DEBUG] getAccountInfo: Response data:", n?.data);
        
        const i = this.handleResponse(n);
        
        console.log("[DEBUG] getAccountInfo: Processed response:", JSON.stringify(i));
        console.log("[DEBUG] getAccountInfo: Processed response type:", typeof i);
        
        this.logger.info(
          `当前用户登录信息: ${this.getAccountInfoLog(i)}`,
          `${Xe.tag}.getAccountInfo`,
        );
        
        console.log("[DEBUG] getAccountInfo: Final result:", JSON.stringify(i));
        return i;
      }),
      (this.refreshToken = async (n = !1) => {
        const i = await this.invokeWithPromise({
          action: "refreshToken",
          timeout: gr.Request,
        });
        if (i.code === De.CallNativeTimeout && !n)
          return (
            this.logger.info(
              "刷新票据超时，重试一次",
              `${Xe.tag}.refreshToken`,
            ),
            this.refreshToken(!0)
          );
        const o = this.handleResponse(i);
        return (
          this.logger.info(
            `刷新后的用户登录信息: ${this.getAccountInfoLog(o)}`,
            `${Xe.tag}.refreshToken`,
          ),
          o
        );
      }),
      (this.verifyWxCode = async (n, i = !1) => {
        console.log("[DEBUG] verifyWxCode: Starting WeChat code verification");
        console.log("[DEBUG] verifyWxCode: WeChat code:", n);
        console.log("[DEBUG] verifyWxCode: Is retry:", i);
        
        const o = await this.invokeWithPromise({
          action: "verifyWxCode",
          params: { wxCode: n, loginType: hg.WX },
          timeout: gr.Request,
        });
        
        console.log("[DEBUG] verifyWxCode: Raw response:", JSON.stringify(o));
        console.log("[DEBUG] verifyWxCode: Response code:", o?.code);
        console.log("[DEBUG] verifyWxCode: Timeout threshold:", De.CallNativeTimeout);
        
        if (o.code === De.CallNativeTimeout && !i) {
          console.log("[DEBUG] verifyWxCode: Request timed out, retrying...");
          this.logger.info(
            `verifyWxCode ${n} 超时，重试一次`,
            `${Xe.tag}.verifyWxCode`,
          );
          return this.verifyWxCode(n, !0);
        }
        
        const a = this.handleResponse(o);
        console.log("[DEBUG] verifyWxCode: Processed response:", JSON.stringify(a));
        
        this.logger.info(
          `当前用户登录信息: ${this.getAccountInfoLog(a)}`,
          `${Xe.tag}.verifyWxCode`,
        );
        
        console.log("[DEBUG] verifyWxCode: Final result:", JSON.stringify(a));
        return a;
      }),
      (this.showLoginPanel = async () => {
        this.logger.info("展示用户登录弹窗", `${Xe.tag}.showLoginPanel`);
        const { data: n } = await this.invokeWithPromise({ action: "login" });
        return Rc(n || "", { loginId: "" }).loginId;
      }),
      (this.closeLoginDialog = () => {
        this.logger.info("关闭用户登录弹窗", `${Xe.tag}.CloseLoginDialog`),
          this.invokeWithPromise({ action: "closeLoginDialog" });
      }),
      (this.loginAsync = () => {
        console.log("[DEBUG] loginAsync: Starting login process");
        this.logger.info("LoginAsync", `${Xe.tag}.LoginAsync`);
        
        console.log("[DEBUG] loginAsync: Calling showLoginPanel");
        this.showLoginPanel();
        
        const n = Promise.withResolvers();
        console.log("[DEBUG] loginAsync: Created promise resolvers");
        
        return (
          this.onAccountInfoChange((i, o) => {
            console.log("[DEBUG] loginAsync: Account info changed event fired");
            console.log("[DEBUG] loginAsync: Previous account info:", JSON.stringify(i));
            console.log("[DEBUG] loginAsync: New account info:", JSON.stringify(o));
            
            this.logger.info(
              `用户信息发生变化 ${this.getAccountInfoLog(o)}`,
              `${Xe.tag}.LoginAsync`,
            );
            
            const isValid = this.validateAccountInfo(o);
            console.log("[DEBUG] loginAsync: Account validation result:", isValid);
            
            if (isValid) {
              console.log("[DEBUG] loginAsync: Resolving login promise with account info");
              n.resolve(o);
            }
          }),
          this.onLoginDialogClose(() => {
            console.log("[DEBUG] loginAsync: Login dialog close event fired");
            this.logger.info("用户关闭登录弹窗", `${Xe.tag}.LoginAsync`);
            console.log("[DEBUG] loginAsync: Resolving login promise with null (dialog closed)");
            n.resolve(null);
          }),
          n.promise
        );
      }),
      (this.logout = () => {
        this.invokeWithPromise({ action: "logout" });
      }),
      (this.checkAndLogin = async () => {
        if (!(await this.checkIsLogin())) {
          const i = await this.loginAsync();
          return !!(i != null && i.userId);
        }
        return !0;
      }),
      (this.formatServerAccountInfo = (n) => {
        const {
            userId: i = "",
            userInfo: o,
            idType: a = 0,
            token: l = "",
            refreshToken: c = "",
            tokenType: u = 0,
            refreshTokenValidTime: d = "",
            tokenValidTime: f = "",
          } = Xs(n),
          { customInfo: h, openInfo: p } = o || {},
          { nick: _, head: w } = h || {},
          {
            avatarUrl: m,
            nickname: E,
            openid: D,
            type: j,
            guid: V,
            uid: R,
          } = p || {};
        return {
          token: l,
          refreshToken: c,
          userId: i,
          avatarUrl: m,
          idType: a,
          guid: V,
          uid: R,
          customAvatarUrl: w,
          customNickName: _,
          nickName: E,
          accountType: j,
          openId: D,
          tokenType: u,
          tokenValidTime: ot(f, 1 / 0),
          refreshTokenValidTime: ot(d, 1 / 0),
        };
      }),
      (this.handleResponse = (n) => {
        console.log("[DEBUG] handleResponse: Input response:", JSON.stringify(n));
        console.log("[DEBUG] handleResponse: Response type:", typeof n);
        console.log("[DEBUG] handleResponse: Response is null/undefined:", n == null);
        console.log("[DEBUG] handleResponse: Response.data exists:", !!(n?.data));
        console.log("[DEBUG] handleResponse: Response.data:", n?.data);
        console.log("[DEBUG] handleResponse: Response.code:", n?.code);
        
        if (!(n != null && n.data)) {
          console.error("[DEBUG] handleResponse: EMPTY RESPONSE DETECTED - returning null");
          console.error("[DEBUG] handleResponse: Response validation failed:", {
            responseExists: n != null,
            dataExists: !!(n?.data),
            fullResponse: JSON.stringify(n)
          });
          this.logger.error(`终端接口空响应: ${Ue(n)}`, Xe.tag);
          return null;
        }
        
        if ((n == null ? void 0 : n.code) !== 0) {
          console.error("[DEBUG] handleResponse: ERROR CODE DETECTED - returning null");
          console.error("[DEBUG] handleResponse: Invalid response code:", {
            code: n?.code,
            expected: 0,
            fullResponse: JSON.stringify(n)
          });
          this.logger.error(`异常返回码: ${Ue(n)}`, Xe.tag);
          return null;
        }
        
        console.log("[DEBUG] handleResponse: Response validation passed, processing data");
        console.log("[DEBUG] handleResponse: Raw data before Rc processing:", JSON.stringify(n.data));
        
        const i = Rc(n.data, {});
        console.log("[DEBUG] handleResponse: Data after Rc processing:", JSON.stringify(i));
        
        const result = this.formatServerAccountInfo(i);
        console.log("[DEBUG] handleResponse: Final formatted result:", JSON.stringify(result));
        
        return result;
      }),
      (this.getAccountInfoLog = (n) =>
        JSON.stringify({
          uid: n == null ? void 0 : n.userId,
          tokenTime: n == null ? void 0 : n.tokenValidTime,
          refreshTokenTime: n == null ? void 0 : n.refreshTokenValidTime,
        }));
  }
  async checkIsLogin() {
    const e = await this.getAccountInfo();
    return this.validateAccountInfo(e);
  }
  validateAccountInfo(e) {
    return e != null && e.userId
      ? (this.logger.info("判断用户已登录", Xe.tag), !0)
      : (this.logger.info("判断用户未登录", Xe.tag), !1);
  }
};
Xe.tag = "AccountService";
Xe = cy(
  [
    S(),
    ai(0, g("invokeWithPromise")),
    ai(1, g("onAccountInfoChange")),
    ai(2, g("onLoginDialogClose")),
    ai(3, g(ce)),
  ],
  Xe,
);
const dy = Symbol.for("KNOWLEDGE_MANAGE_NO_LOGIN_HTTP_SERVICE"),
  nL = Symbol.for("KNOWLEDGE_MANAGE_HTTP_SERVICE_URL_PREFIX"),
  iL = Symbol.for("KNOWLEDGE_MANAGE_NO_LOGIN_HTTP_SERVICE_URL_PREFIX");
function ws(e) {
  const {
    coverUrls: t = [],
    title: r = "",
    mediaType: s = T.Unknown,
    mediaId: n = "",
    mediaState: i,
    introduction: o = "",
    updateTime: a = 0,
    sourcePath: l = "",
    createTime: c = 0,
    jumpUrl: u = "",
    fileSize: d = 0,
    lastModifyTime: f = 0,
    tags: h = [],
    highlightTags: p = [],
    lastOpenTime: _ = 0,
    parseProgress: w = 0,
    mediaTypeInfo: m = { name: "", icon: "" },
  } = e;
  return {
    key: bn(),
    mediaId: n,
    status: yg[Number(i)],
    title: r,
    introduction: o,
    imgUrls: t,
    sourceName: Cp(s, l),
    updateTime: Number(a),
    mediaType: s,
    createTime: c,
    sourceUrl: u,
    mediaData: { parseProgress: ot(w / 100, 0) },
    tags: h.map((E, D) => ({
      tag: E,
      highlightTag: (p == null ? void 0 : p[D]) || "",
    })),
    fileSize: ot(d, 0),
    lastModifyTime: ot(f, 0),
    lastOpenTime: ot(_, 0),
    mediaTypeInfo: m,
  };
}
function oL(e) {
  const {
    coverUrls: t = [],
    title: r = "",
    mediaType: s = T.Unknown,
    mediaId: n = "",
    mediaState: i,
    introduction: o = "",
    updateTime: a = 0,
    sourcePath: l = "",
    createTime: c = 0,
    jumpUrl: u = "",
    fileSize: d = 0,
    lastModifyTime: f = 0,
    tags: h = [],
    highlightTags: p = [],
    lastOpenTime: _ = 0,
    parseProgress: w = 0,
    parsedFileUrl: m = "",
    abstract: E = "",
    secondIndex: D = "",
    forbiddenInfo: j = {},
    md5Sum: V = "",
    isRepeated: R = !1,
    mediaTypeInfo: ie = { icon: "", name: "", tips: "" },
    folderInfo: x,
    parentFolderId: k = "",
  } = e;
  return {
    key: String(bn()),
    mediaId: n,
    status: yg[Number(i)],
    title: r,
    introduction: o,
    imgUrls: t,
    sourceName: Cp(s, l),
    updateTime: Number(a),
    mediaType: s,
    createTime: c,
    sourceUrl: u,
    mediaData: { parseProgress: ot(w / 100, 0) },
    tags: h.map((H, F) => ({
      tag: H,
      highlightTag: (p == null ? void 0 : p[F]) || "",
    })),
    fileSize: ot(d, 0),
    lastModifyTime: ot(f, 0),
    lastOpenTime: ot(_, 0),
    parsedFileUrl: m,
    abstract: E,
    forbiddenInfo: j,
    secondIndex: D,
    fileId: bn(),
    sourcePath: l,
    md5Sum: V,
    isRepeated: R,
    mediaTypeInfo: ie,
    ...(x && { folderInfo: hy(x) }),
    folderId: k,
  };
}
function Cp(e, t) {
  return e === T.Web ? t : Vw[e];
}
const hy = (e) => {
  if (!e) return {};
  const {
    folderId: t = "",
    name: r = "",
    folderNumber: s = 0,
    fileNumber: n = 0,
  } = e;
  return { folderId: t, name: r, folderNumber: ot(s, 0), fileNumber: ot(n, 0) };
};
var fy = Object.defineProperty,
  gy = Object.getOwnPropertyDescriptor,
  Hn = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? gy(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && fy(t, r, n), n;
  },
  Mo = (e, t) => (r, s) => t(r, s, e);
let hs = class {
  constructor(e, t, r) {
    (this.knowledgeManagerHttpService = e),
      (this.knowledgeManagerHttpServiceNoLogin = t),
      (this.logger = r);
  }
  async getKnowledgeList(e) {
    const t = await this.knowledgeManagerHttpService.getKnowledgeList(e),
      { code: r = Kr.FrontendUnknown } = t || {};
    if ([De.LoginExpired, De.AccountInvalid].includes(r))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        emptyMsg: mt.LoginError,
        knowledgeBaseStatus: se.Error,
      };
    if (!Array.isArray(t == null ? void 0 : t.knowledgeList))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        emptyMsg: mt.Error,
        knowledgeBaseStatus: se.Error,
      };
    const s = !!(t != null && t.isEnd);
    return {
      isEnd: s,
      nextCursor: String(t == null ? void 0 : t.nextCursor),
      knowledgeList: t.knowledgeList.map(ws) || [],
      emptyMsg: mt.Empty,
      knowledgeBaseStatus: s ? se.End : se.Ready,
    };
  }
  async getNoLoginKnowledgeList(e) {
    const t = await this.knowledgeManagerHttpServiceNoLogin.getKnowledgeList(e),
      { code: r = Kr.FrontendUnknown } = t || {};
    if ([De.LoginExpired, De.AccountInvalid].includes(r))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        emptyMsg: mt.LoginError,
        knowledgeBaseStatus: se.Error,
      };
    if (!Array.isArray(t == null ? void 0 : t.knowledgeList))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        emptyMsg: mt.Error,
        knowledgeBaseStatus: se.Error,
      };
    const s = !!(t != null && t.isEnd);
    return {
      isEnd: s,
      nextCursor: String(t == null ? void 0 : t.nextCursor),
      knowledgeList: t.knowledgeList.map(ws) || [],
      emptyMsg: mt.Empty,
      knowledgeBaseStatus: s ? se.End : se.Ready,
    };
  }
  async getKnowledgeListFirstScreen(e) {
    const t = await this.knowledgeManagerHttpService.getKnowledgeList({
        limit: e,
        cursor: "",
      }),
      { code: r = Kr.FrontendUnknown } = t || {};
    if ([De.LoginExpired, De.AccountInvalid].includes(r))
      return {
        knowledgeList: [],
        nextCursor: "",
        isEnd: !0,
        knowledgeBaseStatus: se.Error,
        emptyMsg: mt.LoginError,
      };
    if (!Array.isArray(t == null ? void 0 : t.knowledgeList))
      return (
        this.logger.error(
          "后台异常回包",
          "KnowledgeService.GetKnowledgeListFirstScreen",
        ),
        {
          knowledgeList: [],
          nextCursor: "",
          isEnd: !0,
          knowledgeBaseStatus: se.Error,
          emptyMsg: mt.Error,
        }
      );
    if (t != null && t.initializing) {
      const i = await this.intervalPollForFirstTimeUser(e);
      if (i) return i;
    }
    const s = !!(t != null && t.isEnd);
    return {
      isEnd: !!(t != null && t.isEnd),
      nextCursor: String(t == null ? void 0 : t.nextCursor),
      knowledgeList: t.knowledgeList.map(ws) || [],
      knowledgeBaseStatus: s ? se.End : se.Ready,
      emptyMsg: mt.Empty,
    };
  }
  async getKnowledgeSug(e) {
    const t = await this.knowledgeManagerHttpService.getKnowledgeSug(e);
    if (!Array.isArray(t == null ? void 0 : t.knowledgeSugList))
      throw new Error(
        `knowledgeSugList is not an array,is ${t == null ? void 0 : t.knowledgeSugList}`,
      );
    return Xs(t.knowledgeSugList);
  }
  async addKnowledge(e) {
    return await this.knowledgeManagerHttpService.addKnowledge(e);
  }
  async isKnowledgeExist(e, t = Ui.Active) {
    const r = await this.knowledgeManagerHttpService.isKnowledgeExist(e, {
      [la.ImaFetchManner]: t,
    });
    if (!r) return { mediaId: "", collectStatus: Ge.Error };
    const { mediaId: s = "", exist: n } = r;
    return { mediaId: s, collectStatus: n ? Ge.Collected : Ge.NoCollected };
  }
  async isAnyKnowledgeExist(e, t = Ui.Active) {
    const r = await this.knowledgeManagerHttpService.isAnyKnowledgeExist(e, {
      [la.ImaFetchManner]: t,
    });
    if (!r) return { mediaId: "", collectStatus: Ge.Error };
    const { mediaId: s = "", exist: n } = r;
    return { mediaId: s, collectStatus: n ? Ge.Collected : Ge.NoCollected };
  }
  async getKnowledge(e) {
    const t = await this.knowledgeManagerHttpService.getKnowledge(e);
    return t != null && t.knowledge ? ws(t.knowledge) : null;
  }
  async delKnowledge(e) {
    const t = await this.knowledgeManagerHttpService.delKnowledge(e);
    if (!t) return { success: [], fail: [...e.mediaIds] };
    const { results: r } = t;
    return Object.values(r).reduce(
      (s, n) => {
        const { success: i, fail: o } = s,
          { retCode: a, mediaId: l } = n;
        return a === De.Success
          ? { success: [...i, l], fail: o }
          : { success: i, fail: [...o, l] };
      },
      { success: [], fail: [] },
    );
  }
  async searchKnowledge(e) {
    const t = await this.knowledgeManagerHttpService.searchKnowledge(e);
    if (!t) return null;
    const {
        searchedKnowledgeList: r = [],
        isEnd: s = !0,
        nextCursor: n = "",
        searchedTags: i,
      } = t,
      o = r
        .map(
          ({
            knowledge: a,
            highlightContent: l = "",
            highlightTitle: c = "",
            highlightTags: u = [],
            highlightCategory: d = "",
          }) => {
            const { title: f = "", introduction: h = "" } = a || {};
            return a
              ? {
                  highlightContent: l,
                  highlightTitle: c,
                  highlightCategory: d,
                  highlightTags: u,
                  knowledge: {
                    ...ws(a),
                    title: c || f,
                    introduction: l || h,
                    originTitle: f,
                  },
                }
              : null;
          },
        )
        .filter((a) => !!a);
    return {
      isEnd: s,
      nextCursor: n,
      knowledgeSearchList: o,
      tags:
        (i == null
          ? void 0
          : i.map(({ highlightTag: a = "", tagInfo: l = {} }) => ({
              highlightTag: a,
              tag: l.tag || "",
            }))) || [],
    };
  }
  async updateTags(e) {
    const t = await this.knowledgeManagerHttpService.updateTags(e);
    return (t == null ? void 0 : t.code) === De.Success;
  }
  async getTags(e) {
    const t = await this.knowledgeManagerHttpService.getTags(e);
    return t == null ? void 0 : t.tagInfos;
  }
  async searchTags(e) {
    const t = await this.knowledgeManagerHttpService.searchTags(e);
    if (!t) return null;
    const { searchedTags: r = [], nextCursor: s = "", isEnd: n = !0 } = t;
    return {
      nextCursor: s,
      isEnd: n,
      tags:
        (r == null
          ? void 0
          : r.map(({ highlightTag: i = "", tagInfo: o = {} }) => ({
              highlightTag: i,
              tag: o.tag || "",
            }))) || [],
    };
  }
  async intervalPollForFirstTimeUser(e) {
    let t;
    for (let r = 0; r < 10; r++) {
      if (
        ((t = await this.knowledgeManagerHttpService.getKnowledgeList({
          limit: e,
          cursor: "",
        })),
        !Array.isArray(t == null ? void 0 : t.knowledgeList))
      )
        return {
          knowledgeList: [],
          nextCursor: "",
          isEnd: !0,
          emptyMsg: mt.Error,
          knowledgeBaseStatus: se.Error,
        };
      if (!(t != null && t.initializing)) {
        const s = !!(t != null && t.isEnd);
        return {
          isEnd: !!(t != null && t.isEnd),
          nextCursor: String(t == null ? void 0 : t.nextCursor),
          knowledgeList: (t == null ? void 0 : t.knowledgeList.map(ws)) || [],
          emptyMsg: mt.Empty,
          knowledgeBaseStatus: s ? se.End : se.Ready,
        };
      }
      await um(500, null);
    }
    return {
      knowledgeList: [],
      nextCursor: "",
      isEnd: !0,
      emptyMsg: mt.Error,
      knowledgeBaseStatus: se.Error,
    };
  }
};
Hn([q({ fallbackValue: null })], hs.prototype, "getKnowledgeList", 1);
Hn([q({ fallbackValue: null })], hs.prototype, "getNoLoginKnowledgeList", 1);
Hn(
  [q({ fallbackValue: null })],
  hs.prototype,
  "getKnowledgeListFirstScreen",
  1,
);
Hn([q({ fallbackValue: null })], hs.prototype, "getKnowledgeSug", 1);
hs = Hn([S(), Mo(0, g(Qw)), Mo(1, g(dy)), Mo(2, g(ce))], hs);
var py = Object.defineProperty,
  _y = Object.getOwnPropertyDescriptor,
  xp = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? _y(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && py(t, r, n), n;
  },
  li = (e, t) => (r, s) => t(r, s, e);
const vy = Symbol.for("ID_TRANSPORT_KNOWLEDGE_SERVICE"),
  wy = { [aa.Move]: "move_knowledge", [aa.Copy]: "copy_knowledge_sse" },
  my = ["PROGRESS", "COMPLETE", "SAMENAME"],
  Lo = "操作失败，请修改或稍后重试";
let Ws = class {
  constructor(e, t, r, s) {
    (this.sseService = e),
      (this.urlPrefix = t),
      (this.cookieService = r),
      (this.logger = s);
  }
  async query(e, t, r) {
    const { headers: s = {}, timeout: n = gr.SSE } = r ?? {};
    this.logger.info(
      `Transport Knowledge SSE params: ${JSON.stringify(t)}, transportType: ${e}`,
      Ws.tag,
    );
    const i = await this.cookieService.getCookie(),
      o = this.cookieService.encodeCookie(i),
      a = i["IMA-TOKEN"];
    this.logger.info(
      `Transport Knowledge SSE cookie: ${o}, transportType: ${e}`,
      Ws.tag,
    );
    const l = {
        "x-ima-cookie": o,
        from_browser_ima: "1",
        ...(a ? { "x-ima-bkn": String(sy(a)) } : {}),
      },
      { connection: c, observer: u } = this.sseService.send({
        url: this.getUrl(e),
        method: "POST",
        header: { ...s, ...l },
        body: JSON.stringify(Pp(t)),
        jsonEvents: my,
        timeout: n,
      }),
      d = new Ne();
    return (
      u.subscribe((f) => {
        const { eventName: h, data: p } = f;
        switch (h) {
          case "PROGRESS":
          case "SAMENAME":
          case "COMPLETE": {
            d.next(f);
            break;
          }
          case "FRONTEND_FINNISH":
            p.code !== Eg.Success && d.error(new te(Lo, Kr.FrontendException));
            break;
          case "FRONTEND_EXCEPTION":
            d.error(new te(Lo, Kr.FrontendException));
            break;
          case "FRONTEND_TIMEOUT":
            d.error(new te(Lo, Kr.FrontendTimeout));
            break;
        }
      }),
      { observer: d.asObservable(), connection: c }
    );
  }
  getUrl(e) {
    const t = wy[e];
    return `${this.urlPrefix}knowledge_tab_sse/${t}`;
  }
};
Ws.tag = "TransportKnowledgeService";
xp([q({ fallbackValue: null })], Ws.prototype, "query", 1);
Ws = xp([S(), li(0, g(Lg)), li(1, g(Am)), li(2, g(Rg)), li(3, g(ce))], Ws);
const Gl = Symbol.for("READER_SERVICE"),
  aL = Symbol.for("READER_SERVICE_URL_PREFIX"),
  mr = Symbol.for("SHARE_KNOWLEDGE_SERVICE"),
  Rp = Symbol.for("SHARE_KNOWLEDGE_BASE_SERVICE"),
  Sy = Symbol.for("SHARE_KNOWLEDGE_MEMBER"),
  yy = Symbol.for("ID_SHARE_KNOWLEDGE_REPORT_SERVICE"),
  Ey = Symbol.for("SHARE_KNOWLEDGE_SHARE_SERVICE"),
  Wl = Symbol.for("KNOWLEDGE_TAG_SERVICE"),
  by = Symbol.for("OPEN_KNOWLEDGE_SERVICE"),
  Vl = Symbol.for("QUERY_KNOWLEDGE_PROGRESS_SERVICE"),
  Iy = Symbol.for("INTELLIGENT_ASSISTANT_HTTP_SERVICE");
var Ay = Object.defineProperty,
  Oy = Object.getOwnPropertyDescriptor,
  Py = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Oy(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Ay(t, r, n), n;
  };
let su = class {
  constructor() {
    this.userAgent = globalThis.navigator.userAgent;
  }
  isMiniAppAndroid() {
    return !1;
  }
  isMiniAppIOS() {
    return !1;
  }
  isPC() {
    return !this.isMobile();
  }
  isMobile() {
    return /android|iphone|ipad|ipod|windows phone/i.test(this.userAgent);
  }
  isWindows() {
    return /windows/i.test(this.userAgent);
  }
  isMac() {
    return /macintosh|mac os x/i.test(this.userAgent);
  }
  isIOS() {
    return /iphone|ipad|ipod/i.test(this.userAgent);
  }
  isAndroid() {
    return /android/i.test(this.userAgent);
  }
  isHarmonyOS() {
    return /openharmony/i.test(this.userAgent);
  }
  getPlatformType() {
    return this.isWindows()
      ? K.Windows
      : this.isMac()
        ? K.Mac
        : this.isIOS()
          ? K.IOS
          : this.isAndroid()
            ? K.Android
            : this.isHarmonyOS()
              ? K.HarmonyOS
              : K.Unknown;
  }
};
su = Py([S()], su);
const Dy = (e) => {
    Tp({ action: Tl.OpenUrl, params: e });
  },
  Ty = Symbol.for("USER_SPACE_MANAGE_HTTP_SERVICE"),
  lL = Symbol.for("USER_SPACE_MANAGE_HTTP_SERVICE_URL_PREFIX");
var Cy = Object.defineProperty,
  xy = Object.getOwnPropertyDescriptor,
  Ry = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? xy(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Cy(t, r, n), n;
  },
  $o = (e, t) => (r, s) => t(r, s, e);
const nu = { used: 0, total: 0 };
let tr = class {
  constructor(e, t, r) {
    (this.userSpaceManageHTTPService = e),
      (this.readerService = t),
      (this.logger = r),
      (this.checkShareKnowledgeHasSpaceByMediaType = async (
        s,
        n,
        i = 1 / 0,
      ) => {
        const o = await this.readerService.getUserSpace({
          knowledgeBaseId: s,
          condition: { needTotal: !0 },
        });
        if (!o) return Se.Error;
        const { totalUserSpace: a } = o,
          { used: l, total: c } = this.formatUserSpace(a);
        switch (n) {
          case T.MarkDown:
          case T.PDF:
          case T.PPT:
          case T.Word:
          case T.Image:
            return c === 0 ? Se.Error : l + i < c ? Se.HasSpace : Se.NoSpace;
          case T.Note:
          case T.Web:
          case T.WeChatArticle:
          case T.AISession:
            return l < c ? Se.HasSpace : Se.NoSpace;
          default:
            return Se.Error;
        }
      });
  }
  async getTotalUserSpace() {
    const e = await this.userSpaceManageHTTPService.getUserSpace({
      condition: {
        needKnowledge: !0,
        needNote: !0,
        needTotal: !0,
        needShare: !0,
      },
    });
    if (!e) return this.logger.error("查询用户空间容量失败", tr.tag), null;
    const {
      knowledgeUserSpace: t,
      noteUserSpace: r,
      totalUserSpace: s,
      shareUserSpace: n,
    } = e;
    return {
      total: this.formatUserSpace(s),
      knowledge: this.formatUserSpace(t),
      note: this.formatUserSpace(r),
      share: this.formatUserSpace(n),
    };
  }
  async getUserSpaceByType(e) {
    const t = {
        needKnowledge: e === "knowledge",
        needNote: e === "note",
        needTotal: e === "total",
      },
      r = await this.userSpaceManageHTTPService.getUserSpace({ condition: t });
    if (!r)
      return (
        this.logger.error(`通过 condition：${e} 查询用户空间容量失败`, tr.tag),
        nu
      );
    const { knowledgeUserSpace: s, totalUserSpace: n, noteUserSpace: i } = r;
    let o = n;
    switch (e) {
      case "total": {
        o = n;
        break;
      }
      case "knowledge": {
        o = s;
        break;
      }
      case "note": {
        o = i;
        break;
      }
    }
    return (
      this.logger.info(
        `通过 condition：${e} 查询用户空间容量: ${JSON.stringify(o)}`,
        tr.tag,
      ),
      o ? this.formatUserSpace(o) : nu
    );
  }
  async checkHasSpace() {
    const e = await this.getTotalUserSpace();
    if (!e)
      return (
        this.logger.error("检查用户空间是否还有容量失败", tr.tag), Se.Error
      );
    const { total: t } = e,
      { used: r, total: s } = t;
    return s === 0
      ? (this.logger.error(`当前空间异常：total: ${t}, used: ${r}`, tr.tag),
        Se.Error)
      : (this.logger.info(`当前用户空间容量：total: ${t}; used: ${r}`, tr.tag),
        r < s ? Se.HasSpace : Se.NoSpace);
  }
  async checkHasSpaceByMediaType(e, t = 1 / 0) {
    switch (e) {
      case T.MarkDown:
      case T.PPT:
      case T.PDF:
      case T.Word:
      case T.Image: {
        const { used: r, total: s } = await this.getUserSpaceByType("total");
        return s === 0 ? Se.Error : r + t < s ? Se.HasSpace : Se.NoSpace;
      }
      case T.Note:
      case T.Web:
      case T.WeChatArticle:
      case T.AISession:
        return this.checkHasSpace();
      default:
        return Se.Error;
    }
  }
  formatUserSpace(e) {
    const { usedSpace: t = 0, totalSpace: r = 0 } = e || {};
    return { used: ot(t), total: ot(r) };
  }
};
tr.tag = "UserSpaceManager";
tr = Ry([S(), $o(0, g(Ty)), $o(1, g(Gl)), $o(2, g(ce))], tr);
const Hl = Symbol.for("USER_SPACE_MANAGER"),
  My = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  iu = (e) => {
    let t;
    const r = new Set(),
      s = (u, d) => {
        const f = typeof u == "function" ? u(t) : u;
        if (!Object.is(f, t)) {
          const h = t;
          (t =
            (d ?? (typeof f != "object" || f === null))
              ? f
              : Object.assign({}, t, f)),
            r.forEach((p) => p(t, h));
        }
      },
      n = () => t,
      l = {
        setState: s,
        getState: n,
        getInitialState: () => c,
        subscribe: (u) => (r.add(u), () => r.delete(u)),
        destroy: () => {
          (My ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            r.clear();
        },
      },
      c = (t = e(s, n, l));
    return l;
  },
  Ly = (e) => (e ? iu(e) : iu);
var Mp = { exports: {} },
  Lp = {},
  $p = { exports: {} },
  Kp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vs = Fr;
function $y(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ky = typeof Object.is == "function" ? Object.is : $y,
  By = Vs.useState,
  Uy = Vs.useEffect,
  Ny = Vs.useLayoutEffect,
  Fy = Vs.useDebugValue;
function ky(e, t) {
  var r = t(),
    s = By({ inst: { value: r, getSnapshot: t } }),
    n = s[0].inst,
    i = s[1];
  return (
    Ny(
      function () {
        (n.value = r), (n.getSnapshot = t), Ko(n) && i({ inst: n });
      },
      [e, r, t],
    ),
    Uy(
      function () {
        return (
          Ko(n) && i({ inst: n }),
          e(function () {
            Ko(n) && i({ inst: n });
          })
        );
      },
      [e],
    ),
    Fy(r),
    r
  );
}
function Ko(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ky(e, r);
  } catch {
    return !0;
  }
}
function jy(e, t) {
  return t();
}
var Gy =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? jy
    : ky;
Kp.useSyncExternalStore =
  Vs.useSyncExternalStore !== void 0 ? Vs.useSyncExternalStore : Gy;
$p.exports = Kp;
var Wy = $p.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ao = Fr,
  Vy = Wy;
function Hy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zy = typeof Object.is == "function" ? Object.is : Hy,
  qy = Vy.useSyncExternalStore,
  Jy = ao.useRef,
  Yy = ao.useEffect,
  Qy = ao.useMemo,
  Xy = ao.useDebugValue;
Lp.useSyncExternalStoreWithSelector = function (e, t, r, s, n) {
  var i = Jy(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Qy(
    function () {
      function l(h) {
        if (!c) {
          if (((c = !0), (u = h), (h = s(h)), n !== void 0 && o.hasValue)) {
            var p = o.value;
            if (n(p, h)) return (d = p);
          }
          return (d = h);
        }
        if (((p = d), zy(u, h))) return p;
        var _ = s(h);
        return n !== void 0 && n(p, _) ? p : ((u = h), (d = _));
      }
      var c = !1,
        u,
        d,
        f = r === void 0 ? null : r;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, r, s, n],
  );
  var a = qy(e, i[0], i[1]);
  return (
    Yy(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a],
    ),
    Xy(a),
    a
  );
};
Mp.exports = Lp;
var Zy = Mp.exports;
const eE = gs(Zy),
  Bp = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  { useDebugValue: tE } = jv,
  { useSyncExternalStoreWithSelector: rE } = eE;
let ou = !1;
const sE = (e) => e;
function nE(e, t = sE, r) {
  (Bp ? "production" : void 0) !== "production" &&
    r &&
    !ou &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
    ),
    (ou = !0));
  const s = rE(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r,
  );
  return tE(s), s;
}
const au = (e) => {
    (Bp ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
      );
    const t = typeof e == "function" ? Ly(e) : e,
      r = (s, n) => nE(t, s, n);
    return Object.assign(r, t), r;
  },
  iE = (e) => (e ? au(e) : au);
var oE = "0123456789abcdefghijklmnopqrstuvwxyz";
function lr(e) {
  return oE.charAt(e);
}
function aE(e, t) {
  return e & t;
}
function ci(e, t) {
  return e | t;
}
function lu(e, t) {
  return e ^ t;
}
function cu(e, t) {
  return e & ~t;
}
function lE(e) {
  if (e == 0) return -1;
  var t = 0;
  return (
    e & 65535 || ((e >>= 16), (t += 16)),
    e & 255 || ((e >>= 8), (t += 8)),
    e & 15 || ((e >>= 4), (t += 4)),
    e & 3 || ((e >>= 2), (t += 2)),
    e & 1 || ++t,
    t
  );
}
function cE(e) {
  for (var t = 0; e != 0; ) (e &= e - 1), ++t;
  return t;
}
var Ps = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Up = "=";
function Hi(e) {
  var t,
    r,
    s = "";
  for (t = 0; t + 3 <= e.length; t += 3)
    (r = parseInt(e.substring(t, t + 3), 16)),
      (s += Ps.charAt(r >> 6) + Ps.charAt(r & 63));
  for (
    t + 1 == e.length
      ? ((r = parseInt(e.substring(t, t + 1), 16)), (s += Ps.charAt(r << 2)))
      : t + 2 == e.length &&
        ((r = parseInt(e.substring(t, t + 2), 16)),
        (s += Ps.charAt(r >> 2) + Ps.charAt((r & 3) << 4)));
    (s.length & 3) > 0;

  )
    s += Up;
  return s;
}
function uu(e) {
  var t = "",
    r,
    s = 0,
    n = 0;
  for (r = 0; r < e.length && e.charAt(r) != Up; ++r) {
    var i = Ps.indexOf(e.charAt(r));
    i < 0 ||
      (s == 0
        ? ((t += lr(i >> 2)), (n = i & 3), (s = 1))
        : s == 1
          ? ((t += lr((n << 2) | (i >> 4))), (n = i & 15), (s = 2))
          : s == 2
            ? ((t += lr(n)), (t += lr(i >> 2)), (n = i & 3), (s = 3))
            : ((t += lr((n << 2) | (i >> 4))), (t += lr(i & 15)), (s = 0)));
  }
  return s == 1 && (t += lr(n << 2)), t;
}
var ms,
  uE = {
    decode: function (e) {
      var t;
      if (ms === void 0) {
        var r = "0123456789ABCDEF",
          s = ` \f
\r	 \u2028\u2029`;
        for (ms = {}, t = 0; t < 16; ++t) ms[r.charAt(t)] = t;
        for (r = r.toLowerCase(), t = 10; t < 16; ++t) ms[r.charAt(t)] = t;
        for (t = 0; t < s.length; ++t) ms[s.charAt(t)] = -1;
      }
      var n = [],
        i = 0,
        o = 0;
      for (t = 0; t < e.length; ++t) {
        var a = e.charAt(t);
        if (a == "=") break;
        if (((a = ms[a]), a != -1)) {
          if (a === void 0) throw new Error("Illegal character at offset " + t);
          (i |= a),
            ++o >= 2 ? ((n[n.length] = i), (i = 0), (o = 0)) : (i <<= 4);
        }
      }
      if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
      return n;
    },
  },
  Hr,
  _a = {
    decode: function (e) {
      var t;
      if (Hr === void 0) {
        var r =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = `= \f
\r	 \u2028\u2029`;
        for (Hr = Object.create(null), t = 0; t < 64; ++t) Hr[r.charAt(t)] = t;
        for (Hr["-"] = 62, Hr._ = 63, t = 0; t < s.length; ++t)
          Hr[s.charAt(t)] = -1;
      }
      var n = [],
        i = 0,
        o = 0;
      for (t = 0; t < e.length; ++t) {
        var a = e.charAt(t);
        if (a == "=") break;
        if (((a = Hr[a]), a != -1)) {
          if (a === void 0) throw new Error("Illegal character at offset " + t);
          (i |= a),
            ++o >= 4
              ? ((n[n.length] = i >> 16),
                (n[n.length] = (i >> 8) & 255),
                (n[n.length] = i & 255),
                (i = 0),
                (o = 0))
              : (i <<= 6);
        }
      }
      switch (o) {
        case 1:
          throw new Error(
            "Base64 encoding incomplete: at least 2 bits missing",
          );
        case 2:
          n[n.length] = i >> 10;
          break;
        case 3:
          (n[n.length] = i >> 16), (n[n.length] = (i >> 8) & 255);
          break;
      }
      return n;
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function (e) {
      var t = _a.re.exec(e);
      if (t)
        if (t[1]) e = t[1];
        else if (t[2]) e = t[2];
        else throw new Error("RegExp out of sync");
      return _a.decode(e);
    },
  },
  Ss = 1e13,
  pn = (function () {
    function e(t) {
      this.buf = [+t || 0];
    }
    return (
      (e.prototype.mulAdd = function (t, r) {
        var s = this.buf,
          n = s.length,
          i,
          o;
        for (i = 0; i < n; ++i)
          (o = s[i] * t + r),
            o < Ss ? (r = 0) : ((r = 0 | (o / Ss)), (o -= r * Ss)),
            (s[i] = o);
        r > 0 && (s[i] = r);
      }),
      (e.prototype.sub = function (t) {
        var r = this.buf,
          s = r.length,
          n,
          i;
        for (n = 0; n < s; ++n)
          (i = r[n] - t), i < 0 ? ((i += Ss), (t = 1)) : (t = 0), (r[n] = i);
        for (; r[r.length - 1] === 0; ) r.pop();
      }),
      (e.prototype.toString = function (t) {
        if ((t || 10) != 10) throw new Error("only base 10 is supported");
        for (
          var r = this.buf, s = r[r.length - 1].toString(), n = r.length - 2;
          n >= 0;
          --n
        )
          s += (Ss + r[n]).toString().substring(1);
        return s;
      }),
      (e.prototype.valueOf = function () {
        for (var t = this.buf, r = 0, s = t.length - 1; s >= 0; --s)
          r = r * Ss + t[s];
        return r;
      }),
      (e.prototype.simplify = function () {
        var t = this.buf;
        return t.length == 1 ? t[0] : this;
      }),
      e
    );
  })(),
  Np = "…",
  dE =
    /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
  hE =
    /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function Ms(e, t) {
  return e.length > t && (e = e.substring(0, t) + Np), e;
}
var Bo = (function () {
    function e(t, r) {
      (this.hexDigits = "0123456789ABCDEF"),
        t instanceof e
          ? ((this.enc = t.enc), (this.pos = t.pos))
          : ((this.enc = t), (this.pos = r));
    }
    return (
      (e.prototype.get = function (t) {
        if ((t === void 0 && (t = this.pos++), t >= this.enc.length))
          throw new Error(
            "Requesting byte offset "
              .concat(t, " on a stream of length ")
              .concat(this.enc.length),
          );
        return typeof this.enc == "string"
          ? this.enc.charCodeAt(t)
          : this.enc[t];
      }),
      (e.prototype.hexByte = function (t) {
        return (
          this.hexDigits.charAt((t >> 4) & 15) + this.hexDigits.charAt(t & 15)
        );
      }),
      (e.prototype.hexDump = function (t, r, s) {
        for (var n = "", i = t; i < r; ++i)
          if (((n += this.hexByte(this.get(i))), s !== !0))
            switch (i & 15) {
              case 7:
                n += "  ";
                break;
              case 15:
                n += `
`;
                break;
              default:
                n += " ";
            }
        return n;
      }),
      (e.prototype.isASCII = function (t, r) {
        for (var s = t; s < r; ++s) {
          var n = this.get(s);
          if (n < 32 || n > 176) return !1;
        }
        return !0;
      }),
      (e.prototype.parseStringISO = function (t, r) {
        for (var s = "", n = t; n < r; ++n)
          s += String.fromCharCode(this.get(n));
        return s;
      }),
      (e.prototype.parseStringUTF = function (t, r) {
        for (var s = "", n = t; n < r; ) {
          var i = this.get(n++);
          i < 128
            ? (s += String.fromCharCode(i))
            : i > 191 && i < 224
              ? (s += String.fromCharCode(
                  ((i & 31) << 6) | (this.get(n++) & 63),
                ))
              : (s += String.fromCharCode(
                  ((i & 15) << 12) |
                    ((this.get(n++) & 63) << 6) |
                    (this.get(n++) & 63),
                ));
        }
        return s;
      }),
      (e.prototype.parseStringBMP = function (t, r) {
        for (var s = "", n, i, o = t; o < r; )
          (n = this.get(o++)),
            (i = this.get(o++)),
            (s += String.fromCharCode((n << 8) | i));
        return s;
      }),
      (e.prototype.parseTime = function (t, r, s) {
        var n = this.parseStringISO(t, r),
          i = (s ? dE : hE).exec(n);
        return i
          ? (s && ((i[1] = +i[1]), (i[1] += +i[1] < 70 ? 2e3 : 1900)),
            (n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4]),
            i[5] &&
              ((n += ":" + i[5]),
              i[6] && ((n += ":" + i[6]), i[7] && (n += "." + i[7]))),
            i[8] &&
              ((n += " UTC"),
              i[8] != "Z" && ((n += i[8]), i[9] && (n += ":" + i[9]))),
            n)
          : "Unrecognized time: " + n;
      }),
      (e.prototype.parseInteger = function (t, r) {
        for (
          var s = this.get(t), n = s > 127, i = n ? 255 : 0, o, a = "";
          s == i && ++t < r;

        )
          s = this.get(t);
        if (((o = r - t), o === 0)) return n ? -1 : 0;
        if (o > 4) {
          for (a = s, o <<= 3; !((+a ^ i) & 128); ) (a = +a << 1), --o;
          a =
            "(" +
            o +
            ` bit)
`;
        }
        n && (s = s - 256);
        for (var l = new pn(s), c = t + 1; c < r; ++c)
          l.mulAdd(256, this.get(c));
        return a + l.toString();
      }),
      (e.prototype.parseBitString = function (t, r, s) {
        for (
          var n = this.get(t),
            i = ((r - t - 1) << 3) - n,
            o =
              "(" +
              i +
              ` bit)
`,
            a = "",
            l = t + 1;
          l < r;
          ++l
        ) {
          for (var c = this.get(l), u = l == r - 1 ? n : 0, d = 7; d >= u; --d)
            a += (c >> d) & 1 ? "1" : "0";
          if (a.length > s) return o + Ms(a, s);
        }
        return o + a;
      }),
      (e.prototype.parseOctetString = function (t, r, s) {
        if (this.isASCII(t, r)) return Ms(this.parseStringISO(t, r), s);
        var n = r - t,
          i =
            "(" +
            n +
            ` byte)
`;
        (s /= 2), n > s && (r = t + s);
        for (var o = t; o < r; ++o) i += this.hexByte(this.get(o));
        return n > s && (i += Np), i;
      }),
      (e.prototype.parseOID = function (t, r, s) {
        for (var n = "", i = new pn(), o = 0, a = t; a < r; ++a) {
          var l = this.get(a);
          if ((i.mulAdd(128, l & 127), (o += 7), !(l & 128))) {
            if (n === "")
              if (((i = i.simplify()), i instanceof pn))
                i.sub(80), (n = "2." + i.toString());
              else {
                var c = i < 80 ? (i < 40 ? 0 : 1) : 2;
                n = c + "." + (i - c * 40);
              }
            else n += "." + i.toString();
            if (n.length > s) return Ms(n, s);
            (i = new pn()), (o = 0);
          }
        }
        return o > 0 && (n += ".incomplete"), n;
      }),
      e
    );
  })(),
  fE = (function () {
    function e(t, r, s, n, i) {
      if (!(n instanceof du)) throw new Error("Invalid tag value.");
      (this.stream = t),
        (this.header = r),
        (this.length = s),
        (this.tag = n),
        (this.sub = i);
    }
    return (
      (e.prototype.typeName = function () {
        switch (this.tag.tagClass) {
          case 0:
            switch (this.tag.tagNumber) {
              case 0:
                return "EOC";
              case 1:
                return "BOOLEAN";
              case 2:
                return "INTEGER";
              case 3:
                return "BIT_STRING";
              case 4:
                return "OCTET_STRING";
              case 5:
                return "NULL";
              case 6:
                return "OBJECT_IDENTIFIER";
              case 7:
                return "ObjectDescriptor";
              case 8:
                return "EXTERNAL";
              case 9:
                return "REAL";
              case 10:
                return "ENUMERATED";
              case 11:
                return "EMBEDDED_PDV";
              case 12:
                return "UTF8String";
              case 16:
                return "SEQUENCE";
              case 17:
                return "SET";
              case 18:
                return "NumericString";
              case 19:
                return "PrintableString";
              case 20:
                return "TeletexString";
              case 21:
                return "VideotexString";
              case 22:
                return "IA5String";
              case 23:
                return "UTCTime";
              case 24:
                return "GeneralizedTime";
              case 25:
                return "GraphicString";
              case 26:
                return "VisibleString";
              case 27:
                return "GeneralString";
              case 28:
                return "UniversalString";
              case 30:
                return "BMPString";
            }
            return "Universal_" + this.tag.tagNumber.toString();
          case 1:
            return "Application_" + this.tag.tagNumber.toString();
          case 2:
            return "[" + this.tag.tagNumber.toString() + "]";
          case 3:
            return "Private_" + this.tag.tagNumber.toString();
        }
      }),
      (e.prototype.content = function (t) {
        if (this.tag === void 0) return null;
        t === void 0 && (t = 1 / 0);
        var r = this.posContent(),
          s = Math.abs(this.length);
        if (!this.tag.isUniversal())
          return this.sub !== null
            ? "(" + this.sub.length + " elem)"
            : this.stream.parseOctetString(r, r + s, t);
        switch (this.tag.tagNumber) {
          case 1:
            return this.stream.get(r) === 0 ? "false" : "true";
          case 2:
            return this.stream.parseInteger(r, r + s);
          case 3:
            return this.sub
              ? "(" + this.sub.length + " elem)"
              : this.stream.parseBitString(r, r + s, t);
          case 4:
            return this.sub
              ? "(" + this.sub.length + " elem)"
              : this.stream.parseOctetString(r, r + s, t);
          case 6:
            return this.stream.parseOID(r, r + s, t);
          case 16:
          case 17:
            return this.sub !== null
              ? "(" + this.sub.length + " elem)"
              : "(no elem)";
          case 12:
            return Ms(this.stream.parseStringUTF(r, r + s), t);
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 26:
            return Ms(this.stream.parseStringISO(r, r + s), t);
          case 30:
            return Ms(this.stream.parseStringBMP(r, r + s), t);
          case 23:
          case 24:
            return this.stream.parseTime(r, r + s, this.tag.tagNumber == 23);
        }
        return null;
      }),
      (e.prototype.toString = function () {
        return (
          this.typeName() +
          "@" +
          this.stream.pos +
          "[header:" +
          this.header +
          ",length:" +
          this.length +
          ",sub:" +
          (this.sub === null ? "null" : this.sub.length) +
          "]"
        );
      }),
      (e.prototype.toPrettyString = function (t) {
        t === void 0 && (t = "");
        var r = t + this.typeName() + " @" + this.stream.pos;
        if (
          (this.length >= 0 && (r += "+"),
          (r += this.length),
          this.tag.tagConstructed
            ? (r += " (constructed)")
            : this.tag.isUniversal() &&
              (this.tag.tagNumber == 3 || this.tag.tagNumber == 4) &&
              this.sub !== null &&
              (r += " (encapsulates)"),
          (r += `
`),
          this.sub !== null)
        ) {
          t += "  ";
          for (var s = 0, n = this.sub.length; s < n; ++s)
            r += this.sub[s].toPrettyString(t);
        }
        return r;
      }),
      (e.prototype.posStart = function () {
        return this.stream.pos;
      }),
      (e.prototype.posContent = function () {
        return this.stream.pos + this.header;
      }),
      (e.prototype.posEnd = function () {
        return this.stream.pos + this.header + Math.abs(this.length);
      }),
      (e.prototype.toHexString = function () {
        return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
      }),
      (e.decodeLength = function (t) {
        var r = t.get(),
          s = r & 127;
        if (s == r) return s;
        if (s > 6)
          throw new Error(
            "Length over 48 bits not supported at position " + (t.pos - 1),
          );
        if (s === 0) return null;
        r = 0;
        for (var n = 0; n < s; ++n) r = r * 256 + t.get();
        return r;
      }),
      (e.prototype.getHexStringValue = function () {
        var t = this.toHexString(),
          r = this.header * 2,
          s = this.length * 2;
        return t.substr(r, s);
      }),
      (e.decode = function (t) {
        var r;
        t instanceof Bo ? (r = t) : (r = new Bo(t, 0));
        var s = new Bo(r),
          n = new du(r),
          i = e.decodeLength(r),
          o = r.pos,
          a = o - s.pos,
          l = null,
          c = function () {
            var d = [];
            if (i !== null) {
              for (var f = o + i; r.pos < f; ) d[d.length] = e.decode(r);
              if (r.pos != f)
                throw new Error(
                  "Content size is not correct for container starting at offset " +
                    o,
                );
            } else
              try {
                for (;;) {
                  var h = e.decode(r);
                  if (h.tag.isEOC()) break;
                  d[d.length] = h;
                }
                i = o - r.pos;
              } catch (p) {
                throw new Error(
                  "Exception while decoding undefined length content: " + p,
                );
              }
            return d;
          };
        if (n.tagConstructed) l = c();
        else if (n.isUniversal() && (n.tagNumber == 3 || n.tagNumber == 4))
          try {
            if (n.tagNumber == 3 && r.get() != 0)
              throw new Error(
                "BIT STRINGs with unused bits cannot encapsulate.",
              );
            l = c();
            for (var u = 0; u < l.length; ++u)
              if (l[u].tag.isEOC())
                throw new Error("EOC is not supposed to be actual content.");
          } catch {
            l = null;
          }
        if (l === null) {
          if (i === null)
            throw new Error(
              "We can't skip over an invalid tag with undefined length at offset " +
                o,
            );
          r.pos = o + Math.abs(i);
        }
        return new e(s, a, i, n, l);
      }),
      e
    );
  })(),
  du = (function () {
    function e(t) {
      var r = t.get();
      if (
        ((this.tagClass = r >> 6),
        (this.tagConstructed = (r & 32) !== 0),
        (this.tagNumber = r & 31),
        this.tagNumber == 31)
      ) {
        var s = new pn();
        do (r = t.get()), s.mulAdd(128, r & 127);
        while (r & 128);
        this.tagNumber = s.simplify();
      }
    }
    return (
      (e.prototype.isUniversal = function () {
        return this.tagClass === 0;
      }),
      (e.prototype.isEOC = function () {
        return this.tagClass === 0 && this.tagNumber === 0;
      }),
      e
    );
  })(),
  Nr,
  gE = 0xdeadbeefcafe,
  hu = (gE & 16777215) == 15715070,
  at = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
  ],
  pE = (1 << 26) / at[at.length - 1],
  le = (function () {
    function e(t, r, s) {
      t != null &&
        (typeof t == "number"
          ? this.fromNumber(t, r, s)
          : r == null && typeof t != "string"
            ? this.fromString(t, 256)
            : this.fromString(t, r));
    }
    return (
      (e.prototype.toString = function (t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var r;
        if (t == 16) r = 4;
        else if (t == 8) r = 3;
        else if (t == 2) r = 1;
        else if (t == 32) r = 5;
        else if (t == 4) r = 2;
        else return this.toRadix(t);
        var s = (1 << r) - 1,
          n,
          i = !1,
          o = "",
          a = this.t,
          l = this.DB - ((a * this.DB) % r);
        if (a-- > 0)
          for (
            l < this.DB && (n = this[a] >> l) > 0 && ((i = !0), (o = lr(n)));
            a >= 0;

          )
            l < r
              ? ((n = (this[a] & ((1 << l) - 1)) << (r - l)),
                (n |= this[--a] >> (l += this.DB - r)))
              : ((n = (this[a] >> (l -= r)) & s),
                l <= 0 && ((l += this.DB), --a)),
              n > 0 && (i = !0),
              i && (o += lr(n));
        return i ? o : "0";
      }),
      (e.prototype.negate = function () {
        var t = de();
        return e.ZERO.subTo(this, t), t;
      }),
      (e.prototype.abs = function () {
        return this.s < 0 ? this.negate() : this;
      }),
      (e.prototype.compareTo = function (t) {
        var r = this.s - t.s;
        if (r != 0) return r;
        var s = this.t;
        if (((r = s - t.t), r != 0)) return this.s < 0 ? -r : r;
        for (; --s >= 0; ) if ((r = this[s] - t[s]) != 0) return r;
        return 0;
      }),
      (e.prototype.bitLength = function () {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + ui(this[this.t - 1] ^ (this.s & this.DM));
      }),
      (e.prototype.mod = function (t) {
        var r = de();
        return (
          this.abs().divRemTo(t, null, r),
          this.s < 0 && r.compareTo(e.ZERO) > 0 && t.subTo(r, r),
          r
        );
      }),
      (e.prototype.modPowInt = function (t, r) {
        var s;
        return (
          t < 256 || r.isEven() ? (s = new fu(r)) : (s = new gu(r)),
          this.exp(t, s)
        );
      }),
      (e.prototype.clone = function () {
        var t = de();
        return this.copyTo(t), t;
      }),
      (e.prototype.intValue = function () {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;
          if (this.t == 0) return -1;
        } else {
          if (this.t == 1) return this[0];
          if (this.t == 0) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }),
      (e.prototype.byteValue = function () {
        return this.t == 0 ? this.s : (this[0] << 24) >> 24;
      }),
      (e.prototype.shortValue = function () {
        return this.t == 0 ? this.s : (this[0] << 16) >> 16;
      }),
      (e.prototype.signum = function () {
        return this.s < 0
          ? -1
          : this.t <= 0 || (this.t == 1 && this[0] <= 0)
            ? 0
            : 1;
      }),
      (e.prototype.toByteArray = function () {
        var t = this.t,
          r = [];
        r[0] = this.s;
        var s = this.DB - ((t * this.DB) % 8),
          n,
          i = 0;
        if (t-- > 0)
          for (
            s < this.DB &&
            (n = this[t] >> s) != (this.s & this.DM) >> s &&
            (r[i++] = n | (this.s << (this.DB - s)));
            t >= 0;

          )
            s < 8
              ? ((n = (this[t] & ((1 << s) - 1)) << (8 - s)),
                (n |= this[--t] >> (s += this.DB - 8)))
              : ((n = (this[t] >> (s -= 8)) & 255),
                s <= 0 && ((s += this.DB), --t)),
              n & 128 && (n |= -256),
              i == 0 && (this.s & 128) != (n & 128) && ++i,
              (i > 0 || n != this.s) && (r[i++] = n);
        return r;
      }),
      (e.prototype.equals = function (t) {
        return this.compareTo(t) == 0;
      }),
      (e.prototype.min = function (t) {
        return this.compareTo(t) < 0 ? this : t;
      }),
      (e.prototype.max = function (t) {
        return this.compareTo(t) > 0 ? this : t;
      }),
      (e.prototype.and = function (t) {
        var r = de();
        return this.bitwiseTo(t, aE, r), r;
      }),
      (e.prototype.or = function (t) {
        var r = de();
        return this.bitwiseTo(t, ci, r), r;
      }),
      (e.prototype.xor = function (t) {
        var r = de();
        return this.bitwiseTo(t, lu, r), r;
      }),
      (e.prototype.andNot = function (t) {
        var r = de();
        return this.bitwiseTo(t, cu, r), r;
      }),
      (e.prototype.not = function () {
        for (var t = de(), r = 0; r < this.t; ++r) t[r] = this.DM & ~this[r];
        return (t.t = this.t), (t.s = ~this.s), t;
      }),
      (e.prototype.shiftLeft = function (t) {
        var r = de();
        return t < 0 ? this.rShiftTo(-t, r) : this.lShiftTo(t, r), r;
      }),
      (e.prototype.shiftRight = function (t) {
        var r = de();
        return t < 0 ? this.lShiftTo(-t, r) : this.rShiftTo(t, r), r;
      }),
      (e.prototype.getLowestSetBit = function () {
        for (var t = 0; t < this.t; ++t)
          if (this[t] != 0) return t * this.DB + lE(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }),
      (e.prototype.bitCount = function () {
        for (var t = 0, r = this.s & this.DM, s = 0; s < this.t; ++s)
          t += cE(this[s] ^ r);
        return t;
      }),
      (e.prototype.testBit = function (t) {
        var r = Math.floor(t / this.DB);
        return r >= this.t ? this.s != 0 : (this[r] & (1 << t % this.DB)) != 0;
      }),
      (e.prototype.setBit = function (t) {
        return this.changeBit(t, ci);
      }),
      (e.prototype.clearBit = function (t) {
        return this.changeBit(t, cu);
      }),
      (e.prototype.flipBit = function (t) {
        return this.changeBit(t, lu);
      }),
      (e.prototype.add = function (t) {
        var r = de();
        return this.addTo(t, r), r;
      }),
      (e.prototype.subtract = function (t) {
        var r = de();
        return this.subTo(t, r), r;
      }),
      (e.prototype.multiply = function (t) {
        var r = de();
        return this.multiplyTo(t, r), r;
      }),
      (e.prototype.divide = function (t) {
        var r = de();
        return this.divRemTo(t, r, null), r;
      }),
      (e.prototype.remainder = function (t) {
        var r = de();
        return this.divRemTo(t, null, r), r;
      }),
      (e.prototype.divideAndRemainder = function (t) {
        var r = de(),
          s = de();
        return this.divRemTo(t, r, s), [r, s];
      }),
      (e.prototype.modPow = function (t, r) {
        var s = t.bitLength(),
          n,
          i = Cr(1),
          o;
        if (s <= 0) return i;
        s < 18
          ? (n = 1)
          : s < 48
            ? (n = 3)
            : s < 144
              ? (n = 4)
              : s < 768
                ? (n = 5)
                : (n = 6),
          s < 8
            ? (o = new fu(r))
            : r.isEven()
              ? (o = new vE(r))
              : (o = new gu(r));
        var a = [],
          l = 3,
          c = n - 1,
          u = (1 << n) - 1;
        if (((a[1] = o.convert(this)), n > 1)) {
          var d = de();
          for (o.sqrTo(a[1], d); l <= u; )
            (a[l] = de()), o.mulTo(d, a[l - 2], a[l]), (l += 2);
        }
        var f = t.t - 1,
          h,
          p = !0,
          _ = de(),
          w;
        for (s = ui(t[f]) - 1; f >= 0; ) {
          for (
            s >= c
              ? (h = (t[f] >> (s - c)) & u)
              : ((h = (t[f] & ((1 << (s + 1)) - 1)) << (c - s)),
                f > 0 && (h |= t[f - 1] >> (this.DB + s - c))),
              l = n;
            !(h & 1);

          )
            (h >>= 1), --l;
          if (((s -= l) < 0 && ((s += this.DB), --f), p))
            a[h].copyTo(i), (p = !1);
          else {
            for (; l > 1; ) o.sqrTo(i, _), o.sqrTo(_, i), (l -= 2);
            l > 0 ? o.sqrTo(i, _) : ((w = i), (i = _), (_ = w)),
              o.mulTo(_, a[h], i);
          }
          for (; f >= 0 && !(t[f] & (1 << s)); )
            o.sqrTo(i, _),
              (w = i),
              (i = _),
              (_ = w),
              --s < 0 && ((s = this.DB - 1), --f);
        }
        return o.revert(i);
      }),
      (e.prototype.modInverse = function (t) {
        var r = t.isEven();
        if ((this.isEven() && r) || t.signum() == 0) return e.ZERO;
        for (
          var s = t.clone(),
            n = this.clone(),
            i = Cr(1),
            o = Cr(0),
            a = Cr(0),
            l = Cr(1);
          s.signum() != 0;

        ) {
          for (; s.isEven(); )
            s.rShiftTo(1, s),
              r
                ? ((!i.isEven() || !o.isEven()) &&
                    (i.addTo(this, i), o.subTo(t, o)),
                  i.rShiftTo(1, i))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o);
          for (; n.isEven(); )
            n.rShiftTo(1, n),
              r
                ? ((!a.isEven() || !l.isEven()) &&
                    (a.addTo(this, a), l.subTo(t, l)),
                  a.rShiftTo(1, a))
                : l.isEven() || l.subTo(t, l),
              l.rShiftTo(1, l);
          s.compareTo(n) >= 0
            ? (s.subTo(n, s), r && i.subTo(a, i), o.subTo(l, o))
            : (n.subTo(s, n), r && a.subTo(i, a), l.subTo(o, l));
        }
        if (n.compareTo(e.ONE) != 0) return e.ZERO;
        if (l.compareTo(t) >= 0) return l.subtract(t);
        if (l.signum() < 0) l.addTo(t, l);
        else return l;
        return l.signum() < 0 ? l.add(t) : l;
      }),
      (e.prototype.pow = function (t) {
        return this.exp(t, new _E());
      }),
      (e.prototype.gcd = function (t) {
        var r = this.s < 0 ? this.negate() : this.clone(),
          s = t.s < 0 ? t.negate() : t.clone();
        if (r.compareTo(s) < 0) {
          var n = r;
          (r = s), (s = n);
        }
        var i = r.getLowestSetBit(),
          o = s.getLowestSetBit();
        if (o < 0) return r;
        for (
          i < o && (o = i), o > 0 && (r.rShiftTo(o, r), s.rShiftTo(o, s));
          r.signum() > 0;

        )
          (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
            (i = s.getLowestSetBit()) > 0 && s.rShiftTo(i, s),
            r.compareTo(s) >= 0
              ? (r.subTo(s, r), r.rShiftTo(1, r))
              : (s.subTo(r, s), s.rShiftTo(1, s));
        return o > 0 && s.lShiftTo(o, s), s;
      }),
      (e.prototype.isProbablePrime = function (t) {
        var r,
          s = this.abs();
        if (s.t == 1 && s[0] <= at[at.length - 1]) {
          for (r = 0; r < at.length; ++r) if (s[0] == at[r]) return !0;
          return !1;
        }
        if (s.isEven()) return !1;
        for (r = 1; r < at.length; ) {
          for (var n = at[r], i = r + 1; i < at.length && n < pE; )
            n *= at[i++];
          for (n = s.modInt(n); r < i; ) if (n % at[r++] == 0) return !1;
        }
        return s.millerRabin(t);
      }),
      (e.prototype.copyTo = function (t) {
        for (var r = this.t - 1; r >= 0; --r) t[r] = this[r];
        (t.t = this.t), (t.s = this.s);
      }),
      (e.prototype.fromInt = function (t) {
        (this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0
            ? (this[0] = t)
            : t < -1
              ? (this[0] = t + this.DV)
              : (this.t = 0);
      }),
      (e.prototype.fromString = function (t, r) {
        var s;
        if (r == 16) s = 4;
        else if (r == 8) s = 3;
        else if (r == 256) s = 8;
        else if (r == 2) s = 1;
        else if (r == 32) s = 5;
        else if (r == 4) s = 2;
        else {
          this.fromRadix(t, r);
          return;
        }
        (this.t = 0), (this.s = 0);
        for (var n = t.length, i = !1, o = 0; --n >= 0; ) {
          var a = s == 8 ? +t[n] & 255 : _u(t, n);
          if (a < 0) {
            t.charAt(n) == "-" && (i = !0);
            continue;
          }
          (i = !1),
            o == 0
              ? (this[this.t++] = a)
              : o + s > this.DB
                ? ((this[this.t - 1] |= (a & ((1 << (this.DB - o)) - 1)) << o),
                  (this[this.t++] = a >> (this.DB - o)))
                : (this[this.t - 1] |= a << o),
            (o += s),
            o >= this.DB && (o -= this.DB);
        }
        s == 8 &&
          +t[0] & 128 &&
          ((this.s = -1),
          o > 0 && (this[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
          this.clamp(),
          i && e.ZERO.subTo(this, this);
      }),
      (e.prototype.clamp = function () {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
          --this.t;
      }),
      (e.prototype.dlShiftTo = function (t, r) {
        var s;
        for (s = this.t - 1; s >= 0; --s) r[s + t] = this[s];
        for (s = t - 1; s >= 0; --s) r[s] = 0;
        (r.t = this.t + t), (r.s = this.s);
      }),
      (e.prototype.drShiftTo = function (t, r) {
        for (var s = t; s < this.t; ++s) r[s - t] = this[s];
        (r.t = Math.max(this.t - t, 0)), (r.s = this.s);
      }),
      (e.prototype.lShiftTo = function (t, r) {
        for (
          var s = t % this.DB,
            n = this.DB - s,
            i = (1 << n) - 1,
            o = Math.floor(t / this.DB),
            a = (this.s << s) & this.DM,
            l = this.t - 1;
          l >= 0;
          --l
        )
          (r[l + o + 1] = (this[l] >> n) | a), (a = (this[l] & i) << s);
        for (var l = o - 1; l >= 0; --l) r[l] = 0;
        (r[o] = a), (r.t = this.t + o + 1), (r.s = this.s), r.clamp();
      }),
      (e.prototype.rShiftTo = function (t, r) {
        r.s = this.s;
        var s = Math.floor(t / this.DB);
        if (s >= this.t) {
          r.t = 0;
          return;
        }
        var n = t % this.DB,
          i = this.DB - n,
          o = (1 << n) - 1;
        r[0] = this[s] >> n;
        for (var a = s + 1; a < this.t; ++a)
          (r[a - s - 1] |= (this[a] & o) << i), (r[a - s] = this[a] >> n);
        n > 0 && (r[this.t - s - 1] |= (this.s & o) << i),
          (r.t = this.t - s),
          r.clamp();
      }),
      (e.prototype.subTo = function (t, r) {
        for (var s = 0, n = 0, i = Math.min(t.t, this.t); s < i; )
          (n += this[s] - t[s]), (r[s++] = n & this.DM), (n >>= this.DB);
        if (t.t < this.t) {
          for (n -= t.s; s < this.t; )
            (n += this[s]), (r[s++] = n & this.DM), (n >>= this.DB);
          n += this.s;
        } else {
          for (n += this.s; s < t.t; )
            (n -= t[s]), (r[s++] = n & this.DM), (n >>= this.DB);
          n -= t.s;
        }
        (r.s = n < 0 ? -1 : 0),
          n < -1 ? (r[s++] = this.DV + n) : n > 0 && (r[s++] = n),
          (r.t = s),
          r.clamp();
      }),
      (e.prototype.multiplyTo = function (t, r) {
        var s = this.abs(),
          n = t.abs(),
          i = s.t;
        for (r.t = i + n.t; --i >= 0; ) r[i] = 0;
        for (i = 0; i < n.t; ++i) r[i + s.t] = s.am(0, n[i], r, i, 0, s.t);
        (r.s = 0), r.clamp(), this.s != t.s && e.ZERO.subTo(r, r);
      }),
      (e.prototype.squareTo = function (t) {
        for (var r = this.abs(), s = (t.t = 2 * r.t); --s >= 0; ) t[s] = 0;
        for (s = 0; s < r.t - 1; ++s) {
          var n = r.am(s, r[s], t, 2 * s, 0, 1);
          (t[s + r.t] += r.am(s + 1, 2 * r[s], t, 2 * s + 1, n, r.t - s - 1)) >=
            r.DV && ((t[s + r.t] -= r.DV), (t[s + r.t + 1] = 1));
        }
        t.t > 0 && (t[t.t - 1] += r.am(s, r[s], t, 2 * s, 0, 1)),
          (t.s = 0),
          t.clamp();
      }),
      (e.prototype.divRemTo = function (t, r, s) {
        var n = t.abs();
        if (!(n.t <= 0)) {
          var i = this.abs();
          if (i.t < n.t) {
            r != null && r.fromInt(0), s != null && this.copyTo(s);
            return;
          }
          s == null && (s = de());
          var o = de(),
            a = this.s,
            l = t.s,
            c = this.DB - ui(n[n.t - 1]);
          c > 0
            ? (n.lShiftTo(c, o), i.lShiftTo(c, s))
            : (n.copyTo(o), i.copyTo(s));
          var u = o.t,
            d = o[u - 1];
          if (d != 0) {
            var f = d * (1 << this.F1) + (u > 1 ? o[u - 2] >> this.F2 : 0),
              h = this.FV / f,
              p = (1 << this.F1) / f,
              _ = 1 << this.F2,
              w = s.t,
              m = w - u,
              E = r ?? de();
            for (
              o.dlShiftTo(m, E),
                s.compareTo(E) >= 0 && ((s[s.t++] = 1), s.subTo(E, s)),
                e.ONE.dlShiftTo(u, E),
                E.subTo(o, o);
              o.t < u;

            )
              o[o.t++] = 0;
            for (; --m >= 0; ) {
              var D =
                s[--w] == d
                  ? this.DM
                  : Math.floor(s[w] * h + (s[w - 1] + _) * p);
              if ((s[w] += o.am(0, D, s, m, 0, u)) < D)
                for (o.dlShiftTo(m, E), s.subTo(E, s); s[w] < --D; )
                  s.subTo(E, s);
            }
            r != null && (s.drShiftTo(u, r), a != l && e.ZERO.subTo(r, r)),
              (s.t = u),
              s.clamp(),
              c > 0 && s.rShiftTo(c, s),
              a < 0 && e.ZERO.subTo(s, s);
          }
        }
      }),
      (e.prototype.invDigit = function () {
        if (this.t < 1) return 0;
        var t = this[0];
        if (!(t & 1)) return 0;
        var r = t & 3;
        return (
          (r = (r * (2 - (t & 15) * r)) & 15),
          (r = (r * (2 - (t & 255) * r)) & 255),
          (r = (r * (2 - (((t & 65535) * r) & 65535))) & 65535),
          (r = (r * (2 - ((t * r) % this.DV))) % this.DV),
          r > 0 ? this.DV - r : -r
        );
      }),
      (e.prototype.isEven = function () {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }),
      (e.prototype.exp = function (t, r) {
        if (t > 4294967295 || t < 1) return e.ONE;
        var s = de(),
          n = de(),
          i = r.convert(this),
          o = ui(t) - 1;
        for (i.copyTo(s); --o >= 0; )
          if ((r.sqrTo(s, n), (t & (1 << o)) > 0)) r.mulTo(n, i, s);
          else {
            var a = s;
            (s = n), (n = a);
          }
        return r.revert(s);
      }),
      (e.prototype.chunkSize = function (t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }),
      (e.prototype.toRadix = function (t) {
        if ((t == null && (t = 10), this.signum() == 0 || t < 2 || t > 36))
          return "0";
        var r = this.chunkSize(t),
          s = Math.pow(t, r),
          n = Cr(s),
          i = de(),
          o = de(),
          a = "";
        for (this.divRemTo(n, i, o); i.signum() > 0; )
          (a = (s + o.intValue()).toString(t).substr(1) + a),
            i.divRemTo(n, i, o);
        return o.intValue().toString(t) + a;
      }),
      (e.prototype.fromRadix = function (t, r) {
        this.fromInt(0), r == null && (r = 10);
        for (
          var s = this.chunkSize(r),
            n = Math.pow(r, s),
            i = !1,
            o = 0,
            a = 0,
            l = 0;
          l < t.length;
          ++l
        ) {
          var c = _u(t, l);
          if (c < 0) {
            t.charAt(l) == "-" && this.signum() == 0 && (i = !0);
            continue;
          }
          (a = r * a + c),
            ++o >= s &&
              (this.dMultiply(n), this.dAddOffset(a, 0), (o = 0), (a = 0));
        }
        o > 0 && (this.dMultiply(Math.pow(r, o)), this.dAddOffset(a, 0)),
          i && e.ZERO.subTo(this, this);
      }),
      (e.prototype.fromNumber = function (t, r, s) {
        if (typeof r == "number")
          if (t < 2) this.fromInt(1);
          else
            for (
              this.fromNumber(t, s),
                this.testBit(t - 1) ||
                  this.bitwiseTo(e.ONE.shiftLeft(t - 1), ci, this),
                this.isEven() && this.dAddOffset(1, 0);
              !this.isProbablePrime(r);

            )
              this.dAddOffset(2, 0),
                this.bitLength() > t &&
                  this.subTo(e.ONE.shiftLeft(t - 1), this);
        else {
          var n = [],
            i = t & 7;
          (n.length = (t >> 3) + 1),
            r.nextBytes(n),
            i > 0 ? (n[0] &= (1 << i) - 1) : (n[0] = 0),
            this.fromString(n, 256);
        }
      }),
      (e.prototype.bitwiseTo = function (t, r, s) {
        var n,
          i,
          o = Math.min(t.t, this.t);
        for (n = 0; n < o; ++n) s[n] = r(this[n], t[n]);
        if (t.t < this.t) {
          for (i = t.s & this.DM, n = o; n < this.t; ++n) s[n] = r(this[n], i);
          s.t = this.t;
        } else {
          for (i = this.s & this.DM, n = o; n < t.t; ++n) s[n] = r(i, t[n]);
          s.t = t.t;
        }
        (s.s = r(this.s, t.s)), s.clamp();
      }),
      (e.prototype.changeBit = function (t, r) {
        var s = e.ONE.shiftLeft(t);
        return this.bitwiseTo(s, r, s), s;
      }),
      (e.prototype.addTo = function (t, r) {
        for (var s = 0, n = 0, i = Math.min(t.t, this.t); s < i; )
          (n += this[s] + t[s]), (r[s++] = n & this.DM), (n >>= this.DB);
        if (t.t < this.t) {
          for (n += t.s; s < this.t; )
            (n += this[s]), (r[s++] = n & this.DM), (n >>= this.DB);
          n += this.s;
        } else {
          for (n += this.s; s < t.t; )
            (n += t[s]), (r[s++] = n & this.DM), (n >>= this.DB);
          n += t.s;
        }
        (r.s = n < 0 ? -1 : 0),
          n > 0 ? (r[s++] = n) : n < -1 && (r[s++] = this.DV + n),
          (r.t = s),
          r.clamp();
      }),
      (e.prototype.dMultiply = function (t) {
        (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp();
      }),
      (e.prototype.dAddOffset = function (t, r) {
        if (t != 0) {
          for (; this.t <= r; ) this[this.t++] = 0;
          for (this[r] += t; this[r] >= this.DV; )
            (this[r] -= this.DV),
              ++r >= this.t && (this[this.t++] = 0),
              ++this[r];
        }
      }),
      (e.prototype.multiplyLowerTo = function (t, r, s) {
        var n = Math.min(this.t + t.t, r);
        for (s.s = 0, s.t = n; n > 0; ) s[--n] = 0;
        for (var i = s.t - this.t; n < i; ++n)
          s[n + this.t] = this.am(0, t[n], s, n, 0, this.t);
        for (var i = Math.min(t.t, r); n < i; ++n)
          this.am(0, t[n], s, n, 0, r - n);
        s.clamp();
      }),
      (e.prototype.multiplyUpperTo = function (t, r, s) {
        --r;
        var n = (s.t = this.t + t.t - r);
        for (s.s = 0; --n >= 0; ) s[n] = 0;
        for (n = Math.max(r - this.t, 0); n < t.t; ++n)
          s[this.t + n - r] = this.am(r - n, t[n], s, 0, 0, this.t + n - r);
        s.clamp(), s.drShiftTo(1, s);
      }),
      (e.prototype.modInt = function (t) {
        if (t <= 0) return 0;
        var r = this.DV % t,
          s = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (r == 0) s = this[0] % t;
          else for (var n = this.t - 1; n >= 0; --n) s = (r * s + this[n]) % t;
        return s;
      }),
      (e.prototype.millerRabin = function (t) {
        var r = this.subtract(e.ONE),
          s = r.getLowestSetBit();
        if (s <= 0) return !1;
        var n = r.shiftRight(s);
        (t = (t + 1) >> 1), t > at.length && (t = at.length);
        for (var i = de(), o = 0; o < t; ++o) {
          i.fromInt(at[Math.floor(Math.random() * at.length)]);
          var a = i.modPow(n, this);
          if (a.compareTo(e.ONE) != 0 && a.compareTo(r) != 0) {
            for (var l = 1; l++ < s && a.compareTo(r) != 0; )
              if (((a = a.modPowInt(2, this)), a.compareTo(e.ONE) == 0))
                return !1;
            if (a.compareTo(r) != 0) return !1;
          }
        }
        return !0;
      }),
      (e.prototype.square = function () {
        var t = de();
        return this.squareTo(t), t;
      }),
      (e.prototype.gcda = function (t, r) {
        var s = this.s < 0 ? this.negate() : this.clone(),
          n = t.s < 0 ? t.negate() : t.clone();
        if (s.compareTo(n) < 0) {
          var i = s;
          (s = n), (n = i);
        }
        var o = s.getLowestSetBit(),
          a = n.getLowestSetBit();
        if (a < 0) {
          r(s);
          return;
        }
        o < a && (a = o), a > 0 && (s.rShiftTo(a, s), n.rShiftTo(a, n));
        var l = function () {
          (o = s.getLowestSetBit()) > 0 && s.rShiftTo(o, s),
            (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
            s.compareTo(n) >= 0
              ? (s.subTo(n, s), s.rShiftTo(1, s))
              : (n.subTo(s, n), n.rShiftTo(1, n)),
            s.signum() > 0
              ? setTimeout(l, 0)
              : (a > 0 && n.lShiftTo(a, n),
                setTimeout(function () {
                  r(n);
                }, 0));
        };
        setTimeout(l, 10);
      }),
      (e.prototype.fromNumberAsync = function (t, r, s, n) {
        if (typeof r == "number")
          if (t < 2) this.fromInt(1);
          else {
            this.fromNumber(t, s),
              this.testBit(t - 1) ||
                this.bitwiseTo(e.ONE.shiftLeft(t - 1), ci, this),
              this.isEven() && this.dAddOffset(1, 0);
            var i = this,
              o = function () {
                i.dAddOffset(2, 0),
                  i.bitLength() > t && i.subTo(e.ONE.shiftLeft(t - 1), i),
                  i.isProbablePrime(r)
                    ? setTimeout(function () {
                        n();
                      }, 0)
                    : setTimeout(o, 0);
              };
            setTimeout(o, 0);
          }
        else {
          var a = [],
            l = t & 7;
          (a.length = (t >> 3) + 1),
            r.nextBytes(a),
            l > 0 ? (a[0] &= (1 << l) - 1) : (a[0] = 0),
            this.fromString(a, 256);
        }
      }),
      e
    );
  })(),
  _E = (function () {
    function e() {}
    return (
      (e.prototype.convert = function (t) {
        return t;
      }),
      (e.prototype.revert = function (t) {
        return t;
      }),
      (e.prototype.mulTo = function (t, r, s) {
        t.multiplyTo(r, s);
      }),
      (e.prototype.sqrTo = function (t, r) {
        t.squareTo(r);
      }),
      e
    );
  })(),
  fu = (function () {
    function e(t) {
      this.m = t;
    }
    return (
      (e.prototype.convert = function (t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }),
      (e.prototype.revert = function (t) {
        return t;
      }),
      (e.prototype.reduce = function (t) {
        t.divRemTo(this.m, null, t);
      }),
      (e.prototype.mulTo = function (t, r, s) {
        t.multiplyTo(r, s), this.reduce(s);
      }),
      (e.prototype.sqrTo = function (t, r) {
        t.squareTo(r), this.reduce(r);
      }),
      e
    );
  })(),
  gu = (function () {
    function e(t) {
      (this.m = t),
        (this.mp = t.invDigit()),
        (this.mpl = this.mp & 32767),
        (this.mph = this.mp >> 15),
        (this.um = (1 << (t.DB - 15)) - 1),
        (this.mt2 = 2 * t.t);
    }
    return (
      (e.prototype.convert = function (t) {
        var r = de();
        return (
          t.abs().dlShiftTo(this.m.t, r),
          r.divRemTo(this.m, null, r),
          t.s < 0 && r.compareTo(le.ZERO) > 0 && this.m.subTo(r, r),
          r
        );
      }),
      (e.prototype.revert = function (t) {
        var r = de();
        return t.copyTo(r), this.reduce(r), r;
      }),
      (e.prototype.reduce = function (t) {
        for (; t.t <= this.mt2; ) t[t.t++] = 0;
        for (var r = 0; r < this.m.t; ++r) {
          var s = t[r] & 32767,
            n =
              (s * this.mpl +
                (((s * this.mph + (t[r] >> 15) * this.mpl) & this.um) << 15)) &
              t.DM;
          for (
            s = r + this.m.t, t[s] += this.m.am(0, n, t, r, 0, this.m.t);
            t[s] >= t.DV;

          )
            (t[s] -= t.DV), t[++s]++;
        }
        t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
      }),
      (e.prototype.mulTo = function (t, r, s) {
        t.multiplyTo(r, s), this.reduce(s);
      }),
      (e.prototype.sqrTo = function (t, r) {
        t.squareTo(r), this.reduce(r);
      }),
      e
    );
  })(),
  vE = (function () {
    function e(t) {
      (this.m = t),
        (this.r2 = de()),
        (this.q3 = de()),
        le.ONE.dlShiftTo(2 * t.t, this.r2),
        (this.mu = this.r2.divide(t));
    }
    return (
      (e.prototype.convert = function (t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var r = de();
        return t.copyTo(r), this.reduce(r), r;
      }),
      (e.prototype.revert = function (t) {
        return t;
      }),
      (e.prototype.reduce = function (t) {
        for (
          t.drShiftTo(this.m.t - 1, this.r2),
            t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
          t.compareTo(this.r2) < 0;

        )
          t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
          t.subTo(this.m, t);
      }),
      (e.prototype.mulTo = function (t, r, s) {
        t.multiplyTo(r, s), this.reduce(s);
      }),
      (e.prototype.sqrTo = function (t, r) {
        t.squareTo(r), this.reduce(r);
      }),
      e
    );
  })();
function de() {
  return new le(null);
}
function Re(e, t) {
  return new le(e, t);
}
var pu = typeof navigator < "u";
pu && hu && navigator.appName == "Microsoft Internet Explorer"
  ? ((le.prototype.am = function (t, r, s, n, i, o) {
      for (var a = r & 32767, l = r >> 15; --o >= 0; ) {
        var c = this[t] & 32767,
          u = this[t++] >> 15,
          d = l * c + u * a;
        (c = a * c + ((d & 32767) << 15) + s[n] + (i & 1073741823)),
          (i = (c >>> 30) + (d >>> 15) + l * u + (i >>> 30)),
          (s[n++] = c & 1073741823);
      }
      return i;
    }),
    (Nr = 30))
  : pu && hu && navigator.appName != "Netscape"
    ? ((le.prototype.am = function (t, r, s, n, i, o) {
        for (; --o >= 0; ) {
          var a = r * this[t++] + s[n] + i;
          (i = Math.floor(a / 67108864)), (s[n++] = a & 67108863);
        }
        return i;
      }),
      (Nr = 26))
    : ((le.prototype.am = function (t, r, s, n, i, o) {
        for (var a = r & 16383, l = r >> 14; --o >= 0; ) {
          var c = this[t] & 16383,
            u = this[t++] >> 14,
            d = l * c + u * a;
          (c = a * c + ((d & 16383) << 14) + s[n] + i),
            (i = (c >> 28) + (d >> 14) + l * u),
            (s[n++] = c & 268435455);
        }
        return i;
      }),
      (Nr = 28));
le.prototype.DB = Nr;
le.prototype.DM = (1 << Nr) - 1;
le.prototype.DV = 1 << Nr;
var zl = 52;
le.prototype.FV = Math.pow(2, zl);
le.prototype.F1 = zl - Nr;
le.prototype.F2 = 2 * Nr - zl;
var lo = [],
  Zs,
  xt;
Zs = 48;
for (xt = 0; xt <= 9; ++xt) lo[Zs++] = xt;
Zs = 97;
for (xt = 10; xt < 36; ++xt) lo[Zs++] = xt;
Zs = 65;
for (xt = 10; xt < 36; ++xt) lo[Zs++] = xt;
function _u(e, t) {
  var r = lo[e.charCodeAt(t)];
  return r ?? -1;
}
function Cr(e) {
  var t = de();
  return t.fromInt(e), t;
}
function ui(e) {
  var t = 1,
    r;
  return (
    (r = e >>> 16) != 0 && ((e = r), (t += 16)),
    (r = e >> 8) != 0 && ((e = r), (t += 8)),
    (r = e >> 4) != 0 && ((e = r), (t += 4)),
    (r = e >> 2) != 0 && ((e = r), (t += 2)),
    (r = e >> 1) != 0 && ((e = r), (t += 1)),
    t
  );
}
le.ZERO = Cr(0);
le.ONE = Cr(1);
var wE = (function () {
  function e() {
    (this.i = 0), (this.j = 0), (this.S = []);
  }
  return (
    (e.prototype.init = function (t) {
      var r, s, n;
      for (r = 0; r < 256; ++r) this.S[r] = r;
      for (s = 0, r = 0; r < 256; ++r)
        (s = (s + this.S[r] + t[r % t.length]) & 255),
          (n = this.S[r]),
          (this.S[r] = this.S[s]),
          (this.S[s] = n);
      (this.i = 0), (this.j = 0);
    }),
    (e.prototype.next = function () {
      var t;
      return (
        (this.i = (this.i + 1) & 255),
        (this.j = (this.j + this.S[this.i]) & 255),
        (t = this.S[this.i]),
        (this.S[this.i] = this.S[this.j]),
        (this.S[this.j] = t),
        this.S[(t + this.S[this.i]) & 255]
      );
    }),
    e
  );
})();
function mE() {
  return new wE();
}
var Fp = 256,
  di,
  $r = null,
  Ht;
if ($r == null) {
  ($r = []), (Ht = 0);
  var hi = void 0;
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    var Uo = new Uint32Array(256);
    for (window.crypto.getRandomValues(Uo), hi = 0; hi < Uo.length; ++hi)
      $r[Ht++] = Uo[hi] & 255;
  }
  var fi = 0,
    gi = function (e) {
      if (((fi = fi || 0), fi >= 256 || Ht >= Fp)) {
        window.removeEventListener
          ? window.removeEventListener("mousemove", gi, !1)
          : window.detachEvent && window.detachEvent("onmousemove", gi);
        return;
      }
      try {
        var t = e.x + e.y;
        ($r[Ht++] = t & 255), (fi += 1);
      } catch {}
    };
  typeof window < "u" &&
    (window.addEventListener
      ? window.addEventListener("mousemove", gi, !1)
      : window.attachEvent && window.attachEvent("onmousemove", gi));
}
function SE() {
  if (di == null) {
    for (di = mE(); Ht < Fp; ) {
      var e = Math.floor(65536 * Math.random());
      $r[Ht++] = e & 255;
    }
    for (di.init($r), Ht = 0; Ht < $r.length; ++Ht) $r[Ht] = 0;
    Ht = 0;
  }
  return di.next();
}
var va = (function () {
  function e() {}
  return (
    (e.prototype.nextBytes = function (t) {
      for (var r = 0; r < t.length; ++r) t[r] = SE();
    }),
    e
  );
})();
function yE(e, t) {
  if (t < e.length + 22) return console.error("Message too long for RSA"), null;
  for (var r = t - e.length - 6, s = "", n = 0; n < r; n += 2) s += "ff";
  var i = "0001" + s + "00" + e;
  return Re(i, 16);
}
function EE(e, t) {
  if (t < e.length + 11) return console.error("Message too long for RSA"), null;
  for (var r = [], s = e.length - 1; s >= 0 && t > 0; ) {
    var n = e.charCodeAt(s--);
    n < 128
      ? (r[--t] = n)
      : n > 127 && n < 2048
        ? ((r[--t] = (n & 63) | 128), (r[--t] = (n >> 6) | 192))
        : ((r[--t] = (n & 63) | 128),
          (r[--t] = ((n >> 6) & 63) | 128),
          (r[--t] = (n >> 12) | 224));
  }
  r[--t] = 0;
  for (var i = new va(), o = []; t > 2; ) {
    for (o[0] = 0; o[0] == 0; ) i.nextBytes(o);
    r[--t] = o[0];
  }
  return (r[--t] = 2), (r[--t] = 0), new le(r);
}
var bE = (function () {
  function e() {
    (this.n = null),
      (this.e = 0),
      (this.d = null),
      (this.p = null),
      (this.q = null),
      (this.dmp1 = null),
      (this.dmq1 = null),
      (this.coeff = null);
  }
  return (
    (e.prototype.doPublic = function (t) {
      return t.modPowInt(this.e, this.n);
    }),
    (e.prototype.doPrivate = function (t) {
      if (this.p == null || this.q == null) return t.modPow(this.d, this.n);
      for (
        var r = t.mod(this.p).modPow(this.dmp1, this.p),
          s = t.mod(this.q).modPow(this.dmq1, this.q);
        r.compareTo(s) < 0;

      )
        r = r.add(this.p);
      return r
        .subtract(s)
        .multiply(this.coeff)
        .mod(this.p)
        .multiply(this.q)
        .add(s);
    }),
    (e.prototype.setPublic = function (t, r) {
      t != null && r != null && t.length > 0 && r.length > 0
        ? ((this.n = Re(t, 16)), (this.e = parseInt(r, 16)))
        : console.error("Invalid RSA public key");
    }),
    (e.prototype.encrypt = function (t) {
      var r = (this.n.bitLength() + 7) >> 3,
        s = EE(t, r);
      if (s == null) return null;
      var n = this.doPublic(s);
      if (n == null) return null;
      for (var i = n.toString(16), o = i.length, a = 0; a < r * 2 - o; a++)
        i = "0" + i;
      return i;
    }),
    (e.prototype.setPrivate = function (t, r, s) {
      t != null && r != null && t.length > 0 && r.length > 0
        ? ((this.n = Re(t, 16)),
          (this.e = parseInt(r, 16)),
          (this.d = Re(s, 16)))
        : console.error("Invalid RSA private key");
    }),
    (e.prototype.setPrivateEx = function (t, r, s, n, i, o, a, l) {
      t != null && r != null && t.length > 0 && r.length > 0
        ? ((this.n = Re(t, 16)),
          (this.e = parseInt(r, 16)),
          (this.d = Re(s, 16)),
          (this.p = Re(n, 16)),
          (this.q = Re(i, 16)),
          (this.dmp1 = Re(o, 16)),
          (this.dmq1 = Re(a, 16)),
          (this.coeff = Re(l, 16)))
        : console.error("Invalid RSA private key");
    }),
    (e.prototype.generate = function (t, r) {
      var s = new va(),
        n = t >> 1;
      this.e = parseInt(r, 16);
      for (var i = new le(r, 16); ; ) {
        for (
          ;
          (this.p = new le(t - n, 1, s)),
            !(
              this.p.subtract(le.ONE).gcd(i).compareTo(le.ONE) == 0 &&
              this.p.isProbablePrime(10)
            );

        );
        for (
          ;
          (this.q = new le(n, 1, s)),
            !(
              this.q.subtract(le.ONE).gcd(i).compareTo(le.ONE) == 0 &&
              this.q.isProbablePrime(10)
            );

        );
        if (this.p.compareTo(this.q) <= 0) {
          var o = this.p;
          (this.p = this.q), (this.q = o);
        }
        var a = this.p.subtract(le.ONE),
          l = this.q.subtract(le.ONE),
          c = a.multiply(l);
        if (c.gcd(i).compareTo(le.ONE) == 0) {
          (this.n = this.p.multiply(this.q)),
            (this.d = i.modInverse(c)),
            (this.dmp1 = this.d.mod(a)),
            (this.dmq1 = this.d.mod(l)),
            (this.coeff = this.q.modInverse(this.p));
          break;
        }
      }
    }),
    (e.prototype.decrypt = function (t) {
      var r = Re(t, 16),
        s = this.doPrivate(r);
      return s == null ? null : IE(s, (this.n.bitLength() + 7) >> 3);
    }),
    (e.prototype.generateAsync = function (t, r, s) {
      var n = new va(),
        i = t >> 1;
      this.e = parseInt(r, 16);
      var o = new le(r, 16),
        a = this,
        l = function () {
          var c = function () {
              if (a.p.compareTo(a.q) <= 0) {
                var f = a.p;
                (a.p = a.q), (a.q = f);
              }
              var h = a.p.subtract(le.ONE),
                p = a.q.subtract(le.ONE),
                _ = h.multiply(p);
              _.gcd(o).compareTo(le.ONE) == 0
                ? ((a.n = a.p.multiply(a.q)),
                  (a.d = o.modInverse(_)),
                  (a.dmp1 = a.d.mod(h)),
                  (a.dmq1 = a.d.mod(p)),
                  (a.coeff = a.q.modInverse(a.p)),
                  setTimeout(function () {
                    s();
                  }, 0))
                : setTimeout(l, 0);
            },
            u = function () {
              (a.q = de()),
                a.q.fromNumberAsync(i, 1, n, function () {
                  a.q.subtract(le.ONE).gcda(o, function (f) {
                    f.compareTo(le.ONE) == 0 && a.q.isProbablePrime(10)
                      ? setTimeout(c, 0)
                      : setTimeout(u, 0);
                  });
                });
            },
            d = function () {
              (a.p = de()),
                a.p.fromNumberAsync(t - i, 1, n, function () {
                  a.p.subtract(le.ONE).gcda(o, function (f) {
                    f.compareTo(le.ONE) == 0 && a.p.isProbablePrime(10)
                      ? setTimeout(u, 0)
                      : setTimeout(d, 0);
                  });
                });
            };
          setTimeout(d, 0);
        };
      setTimeout(l, 0);
    }),
    (e.prototype.sign = function (t, r, s) {
      var n = AE(s),
        i = n + r(t).toString(),
        o = yE(i, this.n.bitLength() / 4);
      if (o == null) return null;
      var a = this.doPrivate(o);
      if (a == null) return null;
      var l = a.toString(16);
      return l.length & 1 ? "0" + l : l;
    }),
    (e.prototype.verify = function (t, r, s) {
      var n = Re(r, 16),
        i = this.doPublic(n);
      if (i == null) return null;
      var o = i.toString(16).replace(/^1f+00/, ""),
        a = OE(o);
      return a == s(t).toString();
    }),
    e
  );
})();
function IE(e, t) {
  for (var r = e.toByteArray(), s = 0; s < r.length && r[s] == 0; ) ++s;
  if (r.length - s != t - 1 || r[s] != 2) return null;
  for (++s; r[s] != 0; ) if (++s >= r.length) return null;
  for (var n = ""; ++s < r.length; ) {
    var i = r[s] & 255;
    i < 128
      ? (n += String.fromCharCode(i))
      : i > 191 && i < 224
        ? ((n += String.fromCharCode(((i & 31) << 6) | (r[s + 1] & 63))), ++s)
        : ((n += String.fromCharCode(
            ((i & 15) << 12) | ((r[s + 1] & 63) << 6) | (r[s + 2] & 63),
          )),
          (s += 2));
  }
  return n;
}
var Ti = {
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  ripemd160: "3021300906052b2403020105000414",
};
function AE(e) {
  return Ti[e] || "";
}
function OE(e) {
  for (var t in Ti)
    if (Ti.hasOwnProperty(t)) {
      var r = Ti[t],
        s = r.length;
      if (e.substr(0, s) == r) return e.substr(s);
    }
  return e;
}
/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/ var Ke = {};
Ke.lang = {
  extend: function (e, t, r) {
    if (!t || !e)
      throw new Error(
        "YAHOO.lang.extend failed, please check that all dependencies are included.",
      );
    var s = function () {};
    if (
      ((s.prototype = t.prototype),
      (e.prototype = new s()),
      (e.prototype.constructor = e),
      (e.superclass = t.prototype),
      t.prototype.constructor == Object.prototype.constructor &&
        (t.prototype.constructor = t),
      r)
    ) {
      var n;
      for (n in r) e.prototype[n] = r[n];
      var i = function () {},
        o = ["toString", "valueOf"];
      try {
        /MSIE/.test(navigator.userAgent) &&
          (i = function (a, l) {
            for (n = 0; n < o.length; n = n + 1) {
              var c = o[n],
                u = l[c];
              typeof u == "function" && u != Object.prototype[c] && (a[c] = u);
            }
          });
      } catch {}
      i(e.prototype, r);
    }
  },
};
/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */ var P = {};
(typeof P.asn1 > "u" || !P.asn1) && (P.asn1 = {});
P.asn1.ASN1Util = new (function () {
  (this.integerToByteHex = function (e) {
    var t = e.toString(16);
    return t.length % 2 == 1 && (t = "0" + t), t;
  }),
    (this.bigIntToMinTwosComplementsHex = function (e) {
      var t = e.toString(16);
      if (t.substr(0, 1) != "-")
        t.length % 2 == 1 ? (t = "0" + t) : t.match(/^[0-7]/) || (t = "00" + t);
      else {
        var r = t.substr(1),
          s = r.length;
        s % 2 == 1 ? (s += 1) : t.match(/^[0-7]/) || (s += 2);
        for (var n = "", i = 0; i < s; i++) n += "f";
        var o = new le(n, 16),
          a = o.xor(e).add(le.ONE);
        t = a.toString(16).replace(/^-/, "");
      }
      return t;
    }),
    (this.getPEMStringFromHex = function (e, t) {
      return hextopem(e, t);
    }),
    (this.newObject = function (e) {
      var t = P,
        r = t.asn1,
        s = r.DERBoolean,
        n = r.DERInteger,
        i = r.DERBitString,
        o = r.DEROctetString,
        a = r.DERNull,
        l = r.DERObjectIdentifier,
        c = r.DEREnumerated,
        u = r.DERUTF8String,
        d = r.DERNumericString,
        f = r.DERPrintableString,
        h = r.DERTeletexString,
        p = r.DERIA5String,
        _ = r.DERUTCTime,
        w = r.DERGeneralizedTime,
        m = r.DERSequence,
        E = r.DERSet,
        D = r.DERTaggedObject,
        j = r.ASN1Util.newObject,
        V = Object.keys(e);
      if (V.length != 1) throw "key of param shall be only one.";
      var R = V[0];
      if (
        ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(
          ":" + R + ":",
        ) == -1
      )
        throw "undefined key: " + R;
      if (R == "bool") return new s(e[R]);
      if (R == "int") return new n(e[R]);
      if (R == "bitstr") return new i(e[R]);
      if (R == "octstr") return new o(e[R]);
      if (R == "null") return new a(e[R]);
      if (R == "oid") return new l(e[R]);
      if (R == "enum") return new c(e[R]);
      if (R == "utf8str") return new u(e[R]);
      if (R == "numstr") return new d(e[R]);
      if (R == "prnstr") return new f(e[R]);
      if (R == "telstr") return new h(e[R]);
      if (R == "ia5str") return new p(e[R]);
      if (R == "utctime") return new _(e[R]);
      if (R == "gentime") return new w(e[R]);
      if (R == "seq") {
        for (var ie = e[R], x = [], k = 0; k < ie.length; k++) {
          var H = j(ie[k]);
          x.push(H);
        }
        return new m({ array: x });
      }
      if (R == "set") {
        for (var ie = e[R], x = [], k = 0; k < ie.length; k++) {
          var H = j(ie[k]);
          x.push(H);
        }
        return new E({ array: x });
      }
      if (R == "tag") {
        var F = e[R];
        if (
          Object.prototype.toString.call(F) === "[object Array]" &&
          F.length == 3
        ) {
          var ve = j(F[2]);
          return new D({ tag: F[0], explicit: F[1], obj: ve });
        } else {
          var B = {};
          if (
            (F.explicit !== void 0 && (B.explicit = F.explicit),
            F.tag !== void 0 && (B.tag = F.tag),
            F.obj === void 0)
          )
            throw "obj shall be specified for 'tag'.";
          return (B.obj = j(F.obj)), new D(B);
        }
      }
    }),
    (this.jsonToASN1HEX = function (e) {
      var t = this.newObject(e);
      return t.getEncodedHex();
    });
})();
P.asn1.ASN1Util.oidHexToInt = function (e) {
  for (
    var n = "",
      t = parseInt(e.substr(0, 2), 16),
      r = Math.floor(t / 40),
      s = t % 40,
      n = r + "." + s,
      i = "",
      o = 2;
    o < e.length;
    o += 2
  ) {
    var a = parseInt(e.substr(o, 2), 16),
      l = ("00000000" + a.toString(2)).slice(-8);
    if (((i = i + l.substr(1, 7)), l.substr(0, 1) == "0")) {
      var c = new le(i, 2);
      (n = n + "." + c.toString(10)), (i = "");
    }
  }
  return n;
};
P.asn1.ASN1Util.oidIntToHex = function (e) {
  var t = function (a) {
      var l = a.toString(16);
      return l.length == 1 && (l = "0" + l), l;
    },
    r = function (a) {
      var l = "",
        c = new le(a, 10),
        u = c.toString(2),
        d = 7 - (u.length % 7);
      d == 7 && (d = 0);
      for (var f = "", h = 0; h < d; h++) f += "0";
      u = f + u;
      for (var h = 0; h < u.length - 1; h += 7) {
        var p = u.substr(h, 7);
        h != u.length - 7 && (p = "1" + p), (l += t(parseInt(p, 2)));
      }
      return l;
    };
  if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
  var s = "",
    n = e.split("."),
    i = parseInt(n[0]) * 40 + parseInt(n[1]);
  (s += t(i)), n.splice(0, 2);
  for (var o = 0; o < n.length; o++) s += r(n[o]);
  return s;
};
P.asn1.ASN1Object = function () {
  var e = "";
  (this.getLengthHexFromValue = function () {
    if (typeof this.hV > "u" || this.hV == null)
      throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1)
      throw "value hex must be even length: n=" + e.length + ",v=" + this.hV;
    var t = this.hV.length / 2,
      r = t.toString(16);
    if ((r.length % 2 == 1 && (r = "0" + r), t < 128)) return r;
    var s = r.length / 2;
    if (s > 15)
      throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
    var n = 128 + s;
    return n.toString(16) + r;
  }),
    (this.getEncodedHex = function () {
      return (
        (this.hTLV == null || this.isModified) &&
          ((this.hV = this.getFreshValueHex()),
          (this.hL = this.getLengthHexFromValue()),
          (this.hTLV = this.hT + this.hL + this.hV),
          (this.isModified = !1)),
        this.hTLV
      );
    }),
    (this.getValueHex = function () {
      return this.getEncodedHex(), this.hV;
    }),
    (this.getFreshValueHex = function () {
      return "";
    });
};
P.asn1.DERAbstractString = function (e) {
  P.asn1.DERAbstractString.superclass.constructor.call(this),
    (this.getString = function () {
      return this.s;
    }),
    (this.setString = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = t),
        (this.hV = stohex(this.s));
    }),
    (this.setStringHex = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = null),
        (this.hV = t);
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof e < "u" &&
      (typeof e == "string"
        ? this.setString(e)
        : typeof e.str < "u"
          ? this.setString(e.str)
          : typeof e.hex < "u" && this.setStringHex(e.hex));
};
Ke.lang.extend(P.asn1.DERAbstractString, P.asn1.ASN1Object);
P.asn1.DERAbstractTime = function (e) {
  P.asn1.DERAbstractTime.superclass.constructor.call(this),
    (this.localDateToUTC = function (t) {
      utc = t.getTime() + t.getTimezoneOffset() * 6e4;
      var r = new Date(utc);
      return r;
    }),
    (this.formatDate = function (t, r, s) {
      var n = this.zeroPadding,
        i = this.localDateToUTC(t),
        o = String(i.getFullYear());
      r == "utc" && (o = o.substr(2, 2));
      var a = n(String(i.getMonth() + 1), 2),
        l = n(String(i.getDate()), 2),
        c = n(String(i.getHours()), 2),
        u = n(String(i.getMinutes()), 2),
        d = n(String(i.getSeconds()), 2),
        f = o + a + l + c + u + d;
      if (s === !0) {
        var h = i.getMilliseconds();
        if (h != 0) {
          var p = n(String(h), 3);
          (p = p.replace(/[0]+$/, "")), (f = f + "." + p);
        }
      }
      return f + "Z";
    }),
    (this.zeroPadding = function (t, r) {
      return t.length >= r ? t : new Array(r - t.length + 1).join("0") + t;
    }),
    (this.getString = function () {
      return this.s;
    }),
    (this.setString = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = t),
        (this.hV = stohex(t));
    }),
    (this.setByDateValue = function (t, r, s, n, i, o) {
      var a = new Date(Date.UTC(t, r - 1, s, n, i, o, 0));
      this.setByDate(a);
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    });
};
Ke.lang.extend(P.asn1.DERAbstractTime, P.asn1.ASN1Object);
P.asn1.DERAbstractStructured = function (e) {
  P.asn1.DERAbstractString.superclass.constructor.call(this),
    (this.setByASN1ObjectArray = function (t) {
      (this.hTLV = null), (this.isModified = !0), (this.asn1Array = t);
    }),
    (this.appendASN1Object = function (t) {
      (this.hTLV = null), (this.isModified = !0), this.asn1Array.push(t);
    }),
    (this.asn1Array = new Array()),
    typeof e < "u" && typeof e.array < "u" && (this.asn1Array = e.array);
};
Ke.lang.extend(P.asn1.DERAbstractStructured, P.asn1.ASN1Object);
P.asn1.DERBoolean = function () {
  P.asn1.DERBoolean.superclass.constructor.call(this),
    (this.hT = "01"),
    (this.hTLV = "0101ff");
};
Ke.lang.extend(P.asn1.DERBoolean, P.asn1.ASN1Object);
P.asn1.DERInteger = function (e) {
  P.asn1.DERInteger.superclass.constructor.call(this),
    (this.hT = "02"),
    (this.setByBigInteger = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.hV = P.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t));
    }),
    (this.setByInteger = function (t) {
      var r = new le(String(t), 10);
      this.setByBigInteger(r);
    }),
    (this.setValueHex = function (t) {
      this.hV = t;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof e < "u" &&
      (typeof e.bigint < "u"
        ? this.setByBigInteger(e.bigint)
        : typeof e.int < "u"
          ? this.setByInteger(e.int)
          : typeof e == "number"
            ? this.setByInteger(e)
            : typeof e.hex < "u" && this.setValueHex(e.hex));
};
Ke.lang.extend(P.asn1.DERInteger, P.asn1.ASN1Object);
P.asn1.DERBitString = function (e) {
  if (e !== void 0 && typeof e.obj < "u") {
    var t = P.asn1.ASN1Util.newObject(e.obj);
    e.hex = "00" + t.getEncodedHex();
  }
  P.asn1.DERBitString.superclass.constructor.call(this),
    (this.hT = "03"),
    (this.setHexValueIncludingUnusedBits = function (r) {
      (this.hTLV = null), (this.isModified = !0), (this.hV = r);
    }),
    (this.setUnusedBitsAndHexValue = function (r, s) {
      if (r < 0 || 7 < r) throw "unused bits shall be from 0 to 7: u = " + r;
      var n = "0" + r;
      (this.hTLV = null), (this.isModified = !0), (this.hV = n + s);
    }),
    (this.setByBinaryString = function (r) {
      r = r.replace(/0+$/, "");
      var s = 8 - (r.length % 8);
      s == 8 && (s = 0);
      for (var n = 0; n <= s; n++) r += "0";
      for (var i = "", n = 0; n < r.length - 1; n += 8) {
        var o = r.substr(n, 8),
          a = parseInt(o, 2).toString(16);
        a.length == 1 && (a = "0" + a), (i += a);
      }
      (this.hTLV = null), (this.isModified = !0), (this.hV = "0" + s + i);
    }),
    (this.setByBooleanArray = function (r) {
      for (var s = "", n = 0; n < r.length; n++)
        r[n] == !0 ? (s += "1") : (s += "0");
      this.setByBinaryString(s);
    }),
    (this.newFalseArray = function (r) {
      for (var s = new Array(r), n = 0; n < r; n++) s[n] = !1;
      return s;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof e < "u" &&
      (typeof e == "string" && e.toLowerCase().match(/^[0-9a-f]+$/)
        ? this.setHexValueIncludingUnusedBits(e)
        : typeof e.hex < "u"
          ? this.setHexValueIncludingUnusedBits(e.hex)
          : typeof e.bin < "u"
            ? this.setByBinaryString(e.bin)
            : typeof e.array < "u" && this.setByBooleanArray(e.array));
};
Ke.lang.extend(P.asn1.DERBitString, P.asn1.ASN1Object);
P.asn1.DEROctetString = function (e) {
  if (e !== void 0 && typeof e.obj < "u") {
    var t = P.asn1.ASN1Util.newObject(e.obj);
    e.hex = t.getEncodedHex();
  }
  P.asn1.DEROctetString.superclass.constructor.call(this, e), (this.hT = "04");
};
Ke.lang.extend(P.asn1.DEROctetString, P.asn1.DERAbstractString);
P.asn1.DERNull = function () {
  P.asn1.DERNull.superclass.constructor.call(this),
    (this.hT = "05"),
    (this.hTLV = "0500");
};
Ke.lang.extend(P.asn1.DERNull, P.asn1.ASN1Object);
P.asn1.DERObjectIdentifier = function (e) {
  var t = function (s) {
      var n = s.toString(16);
      return n.length == 1 && (n = "0" + n), n;
    },
    r = function (s) {
      var n = "",
        i = new le(s, 10),
        o = i.toString(2),
        a = 7 - (o.length % 7);
      a == 7 && (a = 0);
      for (var l = "", c = 0; c < a; c++) l += "0";
      o = l + o;
      for (var c = 0; c < o.length - 1; c += 7) {
        var u = o.substr(c, 7);
        c != o.length - 7 && (u = "1" + u), (n += t(parseInt(u, 2)));
      }
      return n;
    };
  P.asn1.DERObjectIdentifier.superclass.constructor.call(this),
    (this.hT = "06"),
    (this.setValueHex = function (s) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = null),
        (this.hV = s);
    }),
    (this.setValueOidString = function (s) {
      if (!s.match(/^[0-9.]+$/)) throw "malformed oid string: " + s;
      var n = "",
        i = s.split("."),
        o = parseInt(i[0]) * 40 + parseInt(i[1]);
      (n += t(o)), i.splice(0, 2);
      for (var a = 0; a < i.length; a++) n += r(i[a]);
      (this.hTLV = null),
        (this.isModified = !0),
        (this.s = null),
        (this.hV = n);
    }),
    (this.setValueName = function (s) {
      var n = P.asn1.x509.OID.name2oid(s);
      if (n !== "") this.setValueOidString(n);
      else throw "DERObjectIdentifier oidName undefined: " + s;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    e !== void 0 &&
      (typeof e == "string"
        ? e.match(/^[0-2].[0-9.]+$/)
          ? this.setValueOidString(e)
          : this.setValueName(e)
        : e.oid !== void 0
          ? this.setValueOidString(e.oid)
          : e.hex !== void 0
            ? this.setValueHex(e.hex)
            : e.name !== void 0 && this.setValueName(e.name));
};
Ke.lang.extend(P.asn1.DERObjectIdentifier, P.asn1.ASN1Object);
P.asn1.DEREnumerated = function (e) {
  P.asn1.DEREnumerated.superclass.constructor.call(this),
    (this.hT = "0a"),
    (this.setByBigInteger = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.hV = P.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t));
    }),
    (this.setByInteger = function (t) {
      var r = new le(String(t), 10);
      this.setByBigInteger(r);
    }),
    (this.setValueHex = function (t) {
      this.hV = t;
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof e < "u" &&
      (typeof e.int < "u"
        ? this.setByInteger(e.int)
        : typeof e == "number"
          ? this.setByInteger(e)
          : typeof e.hex < "u" && this.setValueHex(e.hex));
};
Ke.lang.extend(P.asn1.DEREnumerated, P.asn1.ASN1Object);
P.asn1.DERUTF8String = function (e) {
  P.asn1.DERUTF8String.superclass.constructor.call(this, e), (this.hT = "0c");
};
Ke.lang.extend(P.asn1.DERUTF8String, P.asn1.DERAbstractString);
P.asn1.DERNumericString = function (e) {
  P.asn1.DERNumericString.superclass.constructor.call(this, e),
    (this.hT = "12");
};
Ke.lang.extend(P.asn1.DERNumericString, P.asn1.DERAbstractString);
P.asn1.DERPrintableString = function (e) {
  P.asn1.DERPrintableString.superclass.constructor.call(this, e),
    (this.hT = "13");
};
Ke.lang.extend(P.asn1.DERPrintableString, P.asn1.DERAbstractString);
P.asn1.DERTeletexString = function (e) {
  P.asn1.DERTeletexString.superclass.constructor.call(this, e),
    (this.hT = "14");
};
Ke.lang.extend(P.asn1.DERTeletexString, P.asn1.DERAbstractString);
P.asn1.DERIA5String = function (e) {
  P.asn1.DERIA5String.superclass.constructor.call(this, e), (this.hT = "16");
};
Ke.lang.extend(P.asn1.DERIA5String, P.asn1.DERAbstractString);
P.asn1.DERUTCTime = function (e) {
  P.asn1.DERUTCTime.superclass.constructor.call(this, e),
    (this.hT = "17"),
    (this.setByDate = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.date = t),
        (this.s = this.formatDate(this.date, "utc")),
        (this.hV = stohex(this.s));
    }),
    (this.getFreshValueHex = function () {
      return (
        typeof this.date > "u" &&
          typeof this.s > "u" &&
          ((this.date = new Date()),
          (this.s = this.formatDate(this.date, "utc")),
          (this.hV = stohex(this.s))),
        this.hV
      );
    }),
    e !== void 0 &&
      (e.str !== void 0
        ? this.setString(e.str)
        : typeof e == "string" && e.match(/^[0-9]{12}Z$/)
          ? this.setString(e)
          : e.hex !== void 0
            ? this.setStringHex(e.hex)
            : e.date !== void 0 && this.setByDate(e.date));
};
Ke.lang.extend(P.asn1.DERUTCTime, P.asn1.DERAbstractTime);
P.asn1.DERGeneralizedTime = function (e) {
  P.asn1.DERGeneralizedTime.superclass.constructor.call(this, e),
    (this.hT = "18"),
    (this.withMillis = !1),
    (this.setByDate = function (t) {
      (this.hTLV = null),
        (this.isModified = !0),
        (this.date = t),
        (this.s = this.formatDate(this.date, "gen", this.withMillis)),
        (this.hV = stohex(this.s));
    }),
    (this.getFreshValueHex = function () {
      return (
        this.date === void 0 &&
          this.s === void 0 &&
          ((this.date = new Date()),
          (this.s = this.formatDate(this.date, "gen", this.withMillis)),
          (this.hV = stohex(this.s))),
        this.hV
      );
    }),
    e !== void 0 &&
      (e.str !== void 0
        ? this.setString(e.str)
        : typeof e == "string" && e.match(/^[0-9]{14}Z$/)
          ? this.setString(e)
          : e.hex !== void 0
            ? this.setStringHex(e.hex)
            : e.date !== void 0 && this.setByDate(e.date),
      e.millis === !0 && (this.withMillis = !0));
};
Ke.lang.extend(P.asn1.DERGeneralizedTime, P.asn1.DERAbstractTime);
P.asn1.DERSequence = function (e) {
  P.asn1.DERSequence.superclass.constructor.call(this, e),
    (this.hT = "30"),
    (this.getFreshValueHex = function () {
      for (var t = "", r = 0; r < this.asn1Array.length; r++) {
        var s = this.asn1Array[r];
        t += s.getEncodedHex();
      }
      return (this.hV = t), this.hV;
    });
};
Ke.lang.extend(P.asn1.DERSequence, P.asn1.DERAbstractStructured);
P.asn1.DERSet = function (e) {
  P.asn1.DERSet.superclass.constructor.call(this, e),
    (this.hT = "31"),
    (this.sortFlag = !0),
    (this.getFreshValueHex = function () {
      for (var t = new Array(), r = 0; r < this.asn1Array.length; r++) {
        var s = this.asn1Array[r];
        t.push(s.getEncodedHex());
      }
      return this.sortFlag == !0 && t.sort(), (this.hV = t.join("")), this.hV;
    }),
    typeof e < "u" &&
      typeof e.sortflag < "u" &&
      e.sortflag == !1 &&
      (this.sortFlag = !1);
};
Ke.lang.extend(P.asn1.DERSet, P.asn1.DERAbstractStructured);
P.asn1.DERTaggedObject = function (e) {
  P.asn1.DERTaggedObject.superclass.constructor.call(this),
    (this.hT = "a0"),
    (this.hV = ""),
    (this.isExplicit = !0),
    (this.asn1Object = null),
    (this.setASN1Object = function (t, r, s) {
      (this.hT = r),
        (this.isExplicit = t),
        (this.asn1Object = s),
        this.isExplicit
          ? ((this.hV = this.asn1Object.getEncodedHex()),
            (this.hTLV = null),
            (this.isModified = !0))
          : ((this.hV = null),
            (this.hTLV = s.getEncodedHex()),
            (this.hTLV = this.hTLV.replace(/^../, r)),
            (this.isModified = !1));
    }),
    (this.getFreshValueHex = function () {
      return this.hV;
    }),
    typeof e < "u" &&
      (typeof e.tag < "u" && (this.hT = e.tag),
      typeof e.explicit < "u" && (this.isExplicit = e.explicit),
      typeof e.obj < "u" &&
        ((this.asn1Object = e.obj),
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};
Ke.lang.extend(P.asn1.DERTaggedObject, P.asn1.ASN1Object);
var PE = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (s, n) {
              s.__proto__ = n;
            }) ||
          function (s, n) {
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (s[i] = n[i]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError(
          "Class extends value " + String(r) + " is not a constructor or null",
        );
      e(t, r);
      function s() {
        this.constructor = t;
      }
      t.prototype =
        r === null ? Object.create(r) : ((s.prototype = r.prototype), new s());
    };
  })(),
  vu = (function (e) {
    PE(t, e);
    function t(r) {
      var s = e.call(this) || this;
      return (
        r &&
          (typeof r == "string"
            ? s.parseKey(r)
            : (t.hasPrivateKeyProperty(r) || t.hasPublicKeyProperty(r)) &&
              s.parsePropertiesFrom(r)),
        s
      );
    }
    return (
      (t.prototype.parseKey = function (r) {
        try {
          var s = 0,
            n = 0,
            i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
            o = i.test(r) ? uE.decode(r) : _a.unarmor(r),
            a = fE.decode(o);
          if (
            (a.sub.length === 3 && (a = a.sub[2].sub[0]), a.sub.length === 9)
          ) {
            (s = a.sub[1].getHexStringValue()),
              (this.n = Re(s, 16)),
              (n = a.sub[2].getHexStringValue()),
              (this.e = parseInt(n, 16));
            var l = a.sub[3].getHexStringValue();
            this.d = Re(l, 16);
            var c = a.sub[4].getHexStringValue();
            this.p = Re(c, 16);
            var u = a.sub[5].getHexStringValue();
            this.q = Re(u, 16);
            var d = a.sub[6].getHexStringValue();
            this.dmp1 = Re(d, 16);
            var f = a.sub[7].getHexStringValue();
            this.dmq1 = Re(f, 16);
            var h = a.sub[8].getHexStringValue();
            this.coeff = Re(h, 16);
          } else if (a.sub.length === 2)
            if (a.sub[0].sub) {
              var p = a.sub[1],
                _ = p.sub[0];
              (s = _.sub[0].getHexStringValue()),
                (this.n = Re(s, 16)),
                (n = _.sub[1].getHexStringValue()),
                (this.e = parseInt(n, 16));
            } else
              (s = a.sub[0].getHexStringValue()),
                (this.n = Re(s, 16)),
                (n = a.sub[1].getHexStringValue()),
                (this.e = parseInt(n, 16));
          else return !1;
          return !0;
        } catch {
          return !1;
        }
      }),
      (t.prototype.getPrivateBaseKey = function () {
        var r = {
            array: [
              new P.asn1.DERInteger({ int: 0 }),
              new P.asn1.DERInteger({ bigint: this.n }),
              new P.asn1.DERInteger({ int: this.e }),
              new P.asn1.DERInteger({ bigint: this.d }),
              new P.asn1.DERInteger({ bigint: this.p }),
              new P.asn1.DERInteger({ bigint: this.q }),
              new P.asn1.DERInteger({ bigint: this.dmp1 }),
              new P.asn1.DERInteger({ bigint: this.dmq1 }),
              new P.asn1.DERInteger({ bigint: this.coeff }),
            ],
          },
          s = new P.asn1.DERSequence(r);
        return s.getEncodedHex();
      }),
      (t.prototype.getPrivateBaseKeyB64 = function () {
        return Hi(this.getPrivateBaseKey());
      }),
      (t.prototype.getPublicBaseKey = function () {
        var r = new P.asn1.DERSequence({
            array: [
              new P.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
              new P.asn1.DERNull(),
            ],
          }),
          s = new P.asn1.DERSequence({
            array: [
              new P.asn1.DERInteger({ bigint: this.n }),
              new P.asn1.DERInteger({ int: this.e }),
            ],
          }),
          n = new P.asn1.DERBitString({ hex: "00" + s.getEncodedHex() }),
          i = new P.asn1.DERSequence({ array: [r, n] });
        return i.getEncodedHex();
      }),
      (t.prototype.getPublicBaseKeyB64 = function () {
        return Hi(this.getPublicBaseKey());
      }),
      (t.wordwrap = function (r, s) {
        if (((s = s || 64), !r)) return r;
        var n =
          "(.{1," +
          s +
          `})( +|$
?)|(.{1,` +
          s +
          "})";
        return r.match(RegExp(n, "g")).join(`
`);
      }),
      (t.prototype.getPrivateKey = function () {
        var r = `-----BEGIN RSA PRIVATE KEY-----
`;
        return (
          (r +=
            t.wordwrap(this.getPrivateBaseKeyB64()) +
            `
`),
          (r += "-----END RSA PRIVATE KEY-----"),
          r
        );
      }),
      (t.prototype.getPublicKey = function () {
        var r = `-----BEGIN PUBLIC KEY-----
`;
        return (
          (r +=
            t.wordwrap(this.getPublicBaseKeyB64()) +
            `
`),
          (r += "-----END PUBLIC KEY-----"),
          r
        );
      }),
      (t.hasPublicKeyProperty = function (r) {
        return (r = r || {}), r.hasOwnProperty("n") && r.hasOwnProperty("e");
      }),
      (t.hasPrivateKeyProperty = function (r) {
        return (
          (r = r || {}),
          r.hasOwnProperty("n") &&
            r.hasOwnProperty("e") &&
            r.hasOwnProperty("d") &&
            r.hasOwnProperty("p") &&
            r.hasOwnProperty("q") &&
            r.hasOwnProperty("dmp1") &&
            r.hasOwnProperty("dmq1") &&
            r.hasOwnProperty("coeff")
        );
      }),
      (t.prototype.parsePropertiesFrom = function (r) {
        (this.n = r.n),
          (this.e = r.e),
          r.hasOwnProperty("d") &&
            ((this.d = r.d),
            (this.p = r.p),
            (this.q = r.q),
            (this.dmp1 = r.dmp1),
            (this.dmq1 = r.dmq1),
            (this.coeff = r.coeff));
      }),
      t
    );
  })(bE),
  DE = {},
  No,
  TE =
    typeof process < "u"
      ? (No = DE) === null || No === void 0
        ? void 0
        : No.npm_package_version
      : void 0,
  CE = (function () {
    function e(t) {
      t === void 0 && (t = {}),
        (t = t || {}),
        (this.default_key_size = t.default_key_size
          ? parseInt(t.default_key_size, 10)
          : 1024),
        (this.default_public_exponent = t.default_public_exponent || "010001"),
        (this.log = t.log || !1),
        (this.key = null);
    }
    return (
      (e.prototype.setKey = function (t) {
        this.log &&
          this.key &&
          console.warn("A key was already set, overriding existing."),
          (this.key = new vu(t));
      }),
      (e.prototype.setPrivateKey = function (t) {
        this.setKey(t);
      }),
      (e.prototype.setPublicKey = function (t) {
        this.setKey(t);
      }),
      (e.prototype.decrypt = function (t) {
        try {
          return this.getKey().decrypt(uu(t));
        } catch {
          return !1;
        }
      }),
      (e.prototype.encrypt = function (t) {
        try {
          return Hi(this.getKey().encrypt(t));
        } catch {
          return !1;
        }
      }),
      (e.prototype.sign = function (t, r, s) {
        try {
          return Hi(this.getKey().sign(t, r, s));
        } catch {
          return !1;
        }
      }),
      (e.prototype.verify = function (t, r, s) {
        try {
          return this.getKey().verify(t, uu(r), s);
        } catch {
          return !1;
        }
      }),
      (e.prototype.getKey = function (t) {
        if (!this.key) {
          if (
            ((this.key = new vu()),
            t && {}.toString.call(t) === "[object Function]")
          ) {
            this.key.generateAsync(
              this.default_key_size,
              this.default_public_exponent,
              t,
            );
            return;
          }
          this.key.generate(
            this.default_key_size,
            this.default_public_exponent,
          );
        }
        return this.key;
      }),
      (e.prototype.getPrivateKey = function () {
        return this.getKey().getPrivateKey();
      }),
      (e.prototype.getPrivateKeyB64 = function () {
        return this.getKey().getPrivateBaseKeyB64();
      }),
      (e.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey();
      }),
      (e.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64();
      }),
      (e.version = TE),
      e
    );
  })(),
  wa = ((e) => ((e.userInfo = "userInfo"), e))(wa || {}),
  xE = Object.defineProperty,
  RE = Object.getOwnPropertyDescriptor,
  ME = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? RE(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && xE(t, r, n), n;
  },
  wu = (e, t) => (r, s) => t(r, s, e);
let mu = class {
  constructor(e, t) {
    (this.logger = e),
      (this.platformService = t),
      (this.openFeedback = () => {
        oy(),
          this.getFeedBackUrl().then((r) => {
            Dy({ url: r, isNewTab: !0, isShowSidePanel: !1 });
          });
      }),
      (this.getFeedBackUrl = async (r) => {
        const s = "https://h5.dcl.qq.com/pc/aisee/submit",
          n = {
            appId: "4jdwdvkb5b",
            pub_key:
              "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0CGUcCVU9Gi3bDDRKYhoHWkk4SfrgbfiNtoF74WkCfZE0FW+pCey17Hc9Qv2dvLp7iOEQp+uC26nrgWCCxP18tuHwm+16YHryhG+8NT7KVEqP+6J+pnjvyyVEah58pAmbAkj0Uif/vbNsELMyOfBl+g25a9IPE4tV7y06vUzXWwK8TS7bLtRIBEM8Ups7hz4m7oe8BOYzG8XRHjCdnUMvEcCVHnFqGV5G4f93xI6sJoh2vUygG0me93FW5Q3is4XjV+qm3DfOImR3eJf1VIhorUfek4WjZUn5lH5QWVVp5+eGIK4i5qE3J7kDBBGQ8gr3N3lU+gZ+/6SuFyyzATg+wIDAQAB",
          },
          { version: i } = r || {},
          o = Date.now(),
          [a, l] = await Promise.all([
            ko == null ? void 0 : ko(),
            Fo == null ? void 0 : Fo(),
          ]);
        if (
          (console.log("====获取feedsback地址2", a, l),
          !(a != null && a.userId))
        )
          return "";
        const { userId: c = "" } = a,
          { guid: u = "", q36: d = "" } = l || {},
          f = window.navigator.userAgent,
          p = new URLSearchParams(`?${f}`).get("OS") || "",
          _ = this.getPlatformType(),
          w = new CE();
        w.setPublicKey(n.pub_key);
        const m = w.encrypt(
            `userid=${c}&t=${o}&version=${i}&deviceId=${u}&imei=${d}&os=${p}`,
          ),
          E = encodeURIComponent(
            JSON.stringify({ custom_devicetype: _, custom_iua: f }),
          ),
          D = m,
          j = `${s}?appId=${n.appId}&data=${D}&pid=0&mode=0&customField=${E}`;
        return (
          this.logger.info(
            `getFeedBackUrl data: ${D}, url: ${j}`,
            "feedBackService",
          ),
          j
        );
      }),
      (this.getPlatformType = () =>
        this.platformService.isMac()
          ? "Mac"
          : this.platformService.isWindows()
            ? "Windows"
            : "未知");
  }
};
mu = ME([S(), wu(0, g(ce)), wu(1, g(Om))], mu);
const Fo = () =>
    new Promise((e) => {
      chrome.storage.local.get(["guid", "qm36"], (t) => {
        e({
          guid: (t == null ? void 0 : t.guid) || "",
          q36: (t == null ? void 0 : t.qm36) || "",
        });
      });
    }),
  ko = () =>
    new Promise((e) => {
      chrome.storage.local.get([wa.userInfo], (t) => {
        e(t == null ? void 0 : t[wa.userInfo]);
      });
    }),
  LE = Symbol.for("ID_PARSE_ROUTER_HTTP_SERVICE"),
  $E = Symbol.for("KNOWLEDGE_MATRIX_MANAGE_HTTP_SERVICE"),
  KE = Symbol.for("ACCOUNT_HTTP_SVR_SERVICE");
var Hs = ((e) => (
    (e.GotoKnowledgeBase = "gotoKnowledgeBase"),
    (e.StartUpload = "StartUpload"),
    (e.UpdateUploadStatus = "UpdateUploadStatus"),
    (e.GetCosUploadConfig = "GetCosUploadConfig"),
    (e.NotificationPopup = "NotificationPopup"),
    (e.TogglePopupShow = "TogglePopupShow"),
    (e.GetFileInfo = "GetFileInfo"),
    (e.CheckPdfPassword = "CheckPdfPassword"),
    (e.GetAddableKnowledgeBaseList = "GetAddableKnowledgeBaseList"),
    (e.GetAddKnowledgeParams = "GetAddKnowledgeParams"),
    (e.GetPageInfo = "GetPageInfo"),
    (e.ToggleMenu = "ToggleMenu"),
    (e.LoggerInfo = "LoggerInfo"),
    (e.LoggerError = "LoggerError"),
    (e.Report = "Report"),
    (e.TabUpdate = "TabUpdate"),
    (e.LoadFirstPage = "LoadFirstPage"),
    e
  ))(Hs || {}),
  Ar = ((e) => (
    (e.GetAddableKnowledgeBaseList = "GetAddableKnowledgeBaseList"),
    (e.AddKnowledge = "AddKnowledge"),
    (e.DelKnowledge = "DelKnowledge"),
    (e.CheckShareKnowledgeHasSpaceByMediaType =
      "CheckShareKnowledgeHasSpaceByMediaType"),
    (e.CreateFileMedia = "CreateFileMedia"),
    (e.ReplaceKnowledge = "ReplaceKnowledge"),
    (e.CheckRepeatedName = "CheckRepeatedName"),
    e
  ))(Ar || {});
const cL = Symbol.for("GetCosConfig"),
  uL = Symbol.for("CosUploader"),
  dL = Symbol.for("PopupManagerFactory"),
  co = Symbol.for("SendMessage"),
  BE = Symbol.for("NotifyKnowledgeBaseUpdate"),
  UE = Symbol.for("GetMediaType"),
  hL = Symbol.for("GetWebMedia"),
  fL = Symbol.for("GetWxMedia"),
  gL = Symbol.for("ListenMessage"),
  pL = Symbol.for("ID_FILE_LOADER_FACTORY"),
  _L = Symbol.for("PAGE_INFO_LOADER_FACTORY"),
  vL = Symbol.for("SHOW_MESSAGE");
var NE = Object.defineProperty,
  FE = Object.getOwnPropertyDescriptor,
  kE = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? FE(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && NE(t, r, n), n;
  },
  br = (e, t) => (r, s) => t(r, s, e);
const Su = { mediaId: "", collectStatus: Ge.NoCollected },
  jo = { left: 16, top: 24 };
let Ls = class {
  constructor(e, t, r, s, n, i, o, a) {
    (this.knowledgeService = e),
      (this.userSpaceManager = t),
      (this.accountService = r),
      (this.sendMessage = s),
      (this.notifyUpdate = n),
      (this.getMediaTypeForUrl = i),
      (this.logger = o),
      (this.reporter = a),
      (this.getMediaType = (l, c) => {
        const u = ot(Pg(l, "imakt"), T.Unknown);
        return u !== T.Unknown ? u : this.getMediaTypeForUrl(c);
      }),
      (this.checkUserSpace = async (l) =>
        (await this.userSpaceManager.checkHasSpaceByMediaType(l)) ===
        Se.HasSpace);
  }
  async onActionClicked(e, t = !0) {
    const { id: r = 0, url: s = "" } = e;
    if (
      (this.logger.info(
        `点击收藏 action icon, url: ${s}, tabId: ${e.id}`,
        `${Ls.tag}.OnActionClicked`,
      ),
      !(await this.accountService.checkIsLogin()) && t)
    ) {
      await this.accountService.loginAsync();
      return;
    }
    if (s.startsWith(`chrome-extension://${Fi.ImageTools}`)) {
      chrome.runtime.sendMessage(Fi.ImageTools, {
        action: bg.CollectToggle,
        data: { tabId: r },
      });
      return;
    }
    if ((await this.getMediaType(s, r)) === T.Unknown) {
      this.notifyUrlCollectStatus(r, or.Fail, nt.UnsupportedCollect);
      return;
    }
    this.sendMessage(Hs.ToggleMenu, {}, `content-script@${r}`);
  }
  async onAiSessionToggleCollect(e, t) {
    const r = await this.knowledgeService.isKnowledgeExist({
      sessionInfo: { sessionId: e },
      mediaType: T.AISession,
    });
    this.logger.info(
      `当前 ai 对话: ${e} ;  收藏状态是 ${r.collectStatus}`,
      `${Ls.tag}.OnAiSessionToggleCollect`,
    );
    const { collectStatus: s, mediaId: n } = r;
    switch (s) {
      case Ge.NoCollected:
        return (
          this.reporter.report(tt.KnowledgeAddClick, {
            file_type: T.AISession,
          }),
          this.addAiSessionToKnowledge(e, t)
        );
      case Ge.Collected:
        return this.removeFromKnowledge(t, n, T.AISession);
      default:
        return this.notifyUrlCollectStatus(t, or.Fail, nt.UnknownError), Su;
    }
  }
  async addAiSessionToKnowledge(e, t) {
    if (!(await this.checkUserSpace(T.AISession)))
      return (
        this.notifyUrlCollectStatus(t, or.Fail, nt.UserSpaceShortage),
        { mediaId: "", collectStatus: Ge.NoCollected }
      );
    const r = await this.knowledgeService.addKnowledge({
        mediaType: T.AISession,
        sessionInfo: { sessionId: e },
      }),
      s = r == null ? void 0 : r.mediaId;
    return s
      ? (this.notifyUrlCollectStatus(t, or.Success, nt.CollectSuccess, jo),
        this.notifyUpdate(),
        { mediaId: s, collectStatus: Ge.Collected })
      : (this.notifyUrlCollectStatus(t, or.Fail, nt.CollectFail, jo), Su);
  }
  async removeFromKnowledge(e, t, r) {
    const s = r === T.AISession ? jo : {};
    return t
      ? (await this.knowledgeService.delKnowledge({ mediaIds: [t] }))
        ? (this.notifyUrlCollectStatus(e, or.Fail, nt.UnCollectSuccess, s),
          this.notifyUpdate(),
          { mediaId: t, collectStatus: Ge.NoCollected })
        : (this.logger.error(
            "删除知识库内容失败",
            "RemoveWebpageFromKnowledge",
          ),
          this.notifyUrlCollectStatus(e, or.Fail, nt.UnCollectFail, s),
          { mediaId: t, collectStatus: Ge.Collected })
      : (this.notifyUrlCollectStatus(e, or.Fail, nt.UnCollectFail, s),
        { mediaId: t, collectStatus: Ge.Collected });
  }
  async notifyUrlCollectStatus(e, t, r = nt.CollectFail, s) {
    this.logger.info(
      `为当前 tabId 更新 icon: ${e}, 弹窗类型：${t}, 消息: ${r}`,
      `${Ls.tag}.NotifyUrlCollectStatus`,
    ),
      this.sendMessage(
        Hs.NotificationPopup,
        { type: t, content: r, style: s },
        `content-script@${e}`,
      );
  }
};
Ls.tag = "CollectManager";
Ls = kE(
  [
    S(),
    br(0, g(hs)),
    br(1, g(tr)),
    br(2, g(Mg)),
    br(3, g(co)),
    br(4, g(BE)),
    br(5, g(UE)),
    br(6, g(ce)),
    br(7, g(wr)),
  ],
  Ls,
);
T.PDF, T.Word, T.Image, T.MarkDown, T.PPT;
const kp = Symbol.for("ID_SUPPORT_UPLOAD_TYPE"),
  jp = Symbol.for("ID_MAX_UPLOAD_FILE_SIZE"),
  Gp = Symbol.for("ID_MAX_UPLOAD_IMAGE_SIZE"),
  Wr = Symbol.for("KNOWLEDGE_BASE_REPOSITORY"),
  Dt = Symbol.for("KNOWLEDGE_REPOSITORY"),
  en = Symbol.for("KNOWLEDGE_BASE_GROUP_REPOSITORY"),
  zn = Symbol.for("ID_KNOWLEDGE_BASE_MEMBER_REPOSITORY"),
  jE = Symbol.for("KNOWLEDGE_BASE_REPORT_REPOSITORY"),
  vt = Symbol.for("FILE_MEDIA_REPO"),
  Wp = Symbol.for("ADDABLE_KNOWLEDGE_BASE_LIST_REPO"),
  tn = Symbol.for("IMPORT_FILE_MEDIA_REPO"),
  GE = Symbol.for("GET_KNOWLEDGE_BASE_LIST_GROUP_USECASE"),
  WE = Symbol.for("LOAD_MORE_KNOWLEDGE_BASE_LIST_USECASE"),
  Vp = Symbol.for("ADD_KNOWLEDGE_BASE_TO_GROUP_USECASE"),
  ql = Symbol.for("GET_MY_KNOWLEDGE_BASE_USECASE"),
  Hp = Symbol.for("UPDATE_KNOWLEDGE_BASE_IN_GROUP_USECASE"),
  VE = Symbol.for("DELETE_KNOWLEDGE_BASE_FROM_GROUP_USECASE"),
  HE = [ye.Creator, ye.Admin, ye.User],
  zE = [ye.Creator, ye.Admin],
  qE = [ye.Creator, ye.Admin],
  JE = [ye.User],
  YE = [ye.Creator, ye.Admin],
  QE = [ye.Admin, ye.User],
  XE = [ye.Visitor],
  ZE = [ye.User],
  e0 = [ye.Creator],
  t0 = [ye.Admin],
  r0 = [ye.Creator],
  yu = (e) => ({
    canEdit: qE.includes(e),
    canReport: JE.includes(e),
    canShare: HE.includes(e),
    canQuit: QE.includes(e),
    canJoin: XE.includes(e),
    canSeeKnowledge: ZE.includes(e),
    canManageKnowledgeBase: zE.includes(e),
    canManageAllMember: e0.includes(e),
    canManageOnlyMember: t0.includes(e),
    canDeleteBase: r0.includes(e),
    canAppeal: YE.includes(e),
  }),
  s0 = (e, t, r, s = {}) => ({
    fileId: wm(),
    file: e,
    extraInfo: {
      progress: 0,
      status: dg.PreUpload,
      type: am(e.type, e.name),
      contentType: e.type,
      uploadedInfo: {
        mediaId: "",
        location: "",
        cosKey: "",
        cosUrl: "",
        requestId: "",
        cosUrlExpiredTime: 0,
      },
      fileTitle: e.name,
      fileSize: e.size,
      filePath: "",
      lastModifiedTime: e.lastModified,
      knowledgeBaseId: t,
      folderId: r,
      currentPath: [],
      ...s,
    },
  }),
  n0 = () => ({
    nodeType: Ni.Folder,
    isLeaf: !1,
    cursor: "",
    childrenIsEnd: !1,
    children: [],
  }),
  Jl = (e) => ({ ...n0(), ...e }),
  i0 = {
    [ge.Cancel]: Y.Init,
    [ge.Error]: Y.UploadError,
    [ge.Finish]: Y.Finish,
    [ge.Paused]: Y.UploadPause,
    [ge.Uploading]: Y.Uploading,
    [ge.Waiting]: Y.WaitUpload,
    [ge.OversizeFile]: Y.UploadError,
    [ge.ZeroSizeFile]: Y.UploadError,
    [ge.UnsupportMediaType]: Y.UploadError,
  },
  Mt = Symbol.for("I_KNOWLEDGE_SERVICE"),
  qn = Symbol.for("KNOWLEDGE_BASE_SERVICE"),
  o0 = Symbol.for("SEARCH_KNOWLEDGE_SERVICE"),
  zp = Symbol.for("KNOWLEDGE_BASE_LIST_SERVICE"),
  a0 = Symbol.for("FOLDER_LIST_SERVICE"),
  Yl = Symbol.for("KNOWLEDGE_BASE_SHARE_SERVICE"),
  ps = Symbol.for("KNOWLEDGE_BASE_MEMBER_SERVICE"),
  Jn = Symbol.for("I_KNOWLEDGE_BASE_REPORT_SERVICE"),
  qp = Symbol.for("PARSE_MANAGER_SERVICE"),
  _s = Symbol.for("UPLOAD_MANAGER_SERVICE"),
  Jp = Symbol.for("FILE_MEDIA_SERVICE"),
  uo = Symbol.for("PARSER_SERVICE"),
  Yp = Symbol.for("PARSER_SERVICE_FACTORY"),
  rn = Symbol.for("FILE_KNOWLEDGE_TRANSFORM_SERVICE"),
  l0 = Symbol.for("KNOWLEDGE_BASE_DISPLAY_INFO_TRANSFORM_SERVICE"),
  sn = Symbol.for("ADDABLE_KNOWLEDGE_BASE_SERVICE"),
  Ql = Symbol.for("KNOWLEDGE_LIST_EVENT_BUS"),
  Qp = Symbol.for("KNOWLEDGE_LIST_EVENT_SUBJECT"),
  Xp = Symbol.for("KNOWLEDGE_DIALOG_SERVICE"),
  Zp = Symbol.for("KNOWLEDGE_ALERT_SERVICE"),
  ho = Symbol.for("KNOWLEDGE_MATRIX_MANAGE_SERVICE"),
  fo = Symbol.for("REGISTER_KNOWLEDGE_MATRIX_SERVICE"),
  c0 = Symbol.for("KNOWLEDGE_MATRIX_DIALOG_SERVICE");
var u0 = Object.defineProperty,
  d0 = Object.getOwnPropertyDescriptor,
  e_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? d0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && u0(t, r, n), n;
  },
  Eu = (e, t) => (r, s) => t(r, s, e);
let ma = class {
  constructor(e, t) {
    (this.knowledgeBaseGroupRepository = e),
      (this.knowledgeBaseListService = t),
      (this.formatKnowledgeListInfo = (r) => {
        const {
          knowledgeList: s,
          currentPath: n = [],
          nextCursor: i,
          isEnd: o,
          knowledgeBaseInfo: a,
          version: l,
          totalSize: c,
        } = r;
        return {
          list: s,
          currentPath: n,
          totalSize: c,
          cursor: i,
          isEnd: o,
          knowledgeBaseInfo: a,
          version: l,
        };
      });
  }
  async execute(e) {
    var a, l;
    const t = await this.knowledgeBaseListService.getHomePageData({
      knowledgeBaseId: e,
      needFolderNumber: !0,
    });
    if (t instanceof te) return t;
    const {
      list: r,
      pageLimit: s,
      folderListRsp: n,
      knowledgeListRsp: i,
    } = t || {};
    if (!t || !(r != null && r.length))
      return new te("knowledge base group list is empty", Kr.EmptyRespData);
    const o =
      ((l = (a = n == null ? void 0 : n.folderList) == null ? void 0 : a.map) ==
      null
        ? void 0
        : l.call(a, (c) => {
            const u = ki(c.folderNumber, 0);
            return Jl({
              id: c.folderId,
              name: c.name,
              folderNumber: u,
              childrenIsEnd: u === 0,
            });
          })) ?? [];
    return {
      list: this.knowledgeBaseGroupRepository.updateGroups(r),
      pageLimit: s,
      formattedFolderListRsp: {
        folderList: o,
        nextCursor: (n == null ? void 0 : n.nextCursor) ?? "",
        isEnd: (n == null ? void 0 : n.isEnd) ?? !1,
        folderNumber: ki(n == null ? void 0 : n.totalSize, 0),
      },
      ...(i ? { knowledgeListInfo: this.formatKnowledgeListInfo(i) } : {}),
    };
  }
};
e_([q({ fallbackValue: null })], ma.prototype, "execute", 1);
ma = e_([S(), Eu(0, g(en)), Eu(1, g(zp))], ma);
var h0 = Object.defineProperty,
  f0 = Object.getOwnPropertyDescriptor,
  t_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? f0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && h0(t, r, n), n;
  },
  Go = (e, t) => (r, s) => t(r, s, e);
let Sa = class {
  constructor(e, t, r) {
    (this.knowledgeBaseGroupRepository = e),
      (this.knowledgeBaseListService = t),
      (this.logger = r);
  }
  async execute(e, t = 10) {
    const r = this.knowledgeBaseGroupRepository.getByType(e);
    if (!r) throw new xe("knowledge base group not found");
    const { nextCursor: s } = r,
      n = [{ type: e, cursor: s, limit: t }],
      { list: i } = await this.knowledgeBaseListService.getList(n);
    if (!i.length) return null;
    const { nextCursor: o, name: a, size: l, isEnd: c, list: u } = i[0],
      d = r.list,
      f = u.filter(({ id: _ }) => d.every((w) => w.id !== _));
    f.length !== u.length &&
      this.logger.info(
        `加载知识库列表触发去重逻辑: ${JSON.stringify({ currentLists: d.map((_) => _.id), appendLists: u.map((_) => _.id) })} `,
        "LoadMoreKnowledgeBaseListUseCase",
      );
    const h = [...d, ...f],
      p = {
        ...r,
        cursor: o,
        nextCursor: o,
        name: a,
        size: l,
        isEnd: c,
        list: h,
      };
    return (
      this.knowledgeBaseGroupRepository.updateGroupByType(e, p),
      this.knowledgeBaseGroupRepository.getAll()
    );
  }
};
t_([q({ fallbackValue: null })], Sa.prototype, "execute", 1);
Sa = t_([S(), Go(0, g(en)), Go(1, g(zp)), Go(2, g(ce))], Sa);
var g0 = Object.defineProperty,
  p0 = Object.getOwnPropertyDescriptor,
  _0 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? p0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && g0(t, r, n), n;
  },
  v0 = (e, t) => (r, s) => t(r, s, e);
let bu = class {
  constructor(e) {
    this.knowledgeBaseGroupRepository = e;
  }
  execute(e, t) {
    if (!this.knowledgeBaseGroupRepository.unshift(e, t))
      throw new xe("knowledge base group unshift failed");
    return this.knowledgeBaseGroupRepository.getAll();
  }
};
bu = _0([S(), v0(0, g(en))], bu);
var w0 = Object.defineProperty,
  m0 = Object.getOwnPropertyDescriptor,
  S0 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? m0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && w0(t, r, n), n;
  },
  y0 = (e, t) => (r, s) => t(r, s, e);
let Iu = class {
  constructor(e) {
    this.knowledgeBaseGroupRepository = e;
  }
  execute() {
    const e = this.knowledgeBaseGroupRepository.getByType(Br.Mine);
    return e ? (e == null ? void 0 : e.list[0]) : null;
  }
};
Iu = S0([S(), y0(0, g(en))], Iu);
var E0 = Object.defineProperty,
  b0 = Object.getOwnPropertyDescriptor,
  I0 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? b0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && E0(t, r, n), n;
  },
  A0 = (e, t) => (r, s) => t(r, s, e);
let Au = class {
  constructor(e) {
    this.knowledgeBaseGroupRepository = e;
  }
  execute(e, t) {
    if (!this.knowledgeBaseGroupRepository.delete(e, t))
      throw new xe("knowledge base group delete failed");
    return this.knowledgeBaseGroupRepository.getAll();
  }
};
Au = I0([S(), A0(0, g(en))], Au);
var O0 = Object.defineProperty,
  P0 = Object.getOwnPropertyDescriptor,
  D0 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? P0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && O0(t, r, n), n;
  },
  T0 = (e, t) => (r, s) => t(r, s, e);
let Ou = class {
  constructor(e) {
    this.knowledgeBaseGroupRepository = e;
  }
  execute(e, t) {
    if (!this.knowledgeBaseGroupRepository.update(e, t))
      throw new xe("knowledge base group delete failed");
    return this.knowledgeBaseGroupRepository.getAll();
  }
};
Ou = D0([S(), T0(0, g(en))], Ou);
var C0 = Object.defineProperty,
  x0 = Object.getOwnPropertyDescriptor,
  r_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? x0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && C0(t, r, n), n;
  },
  Wo = (e, t) => (r, s) => t(r, s, e);
let ya = class {
  constructor(e, t, r) {
    (this.knowledgeBaseService = e),
      (this.knowledgeBaseRepository = t),
      (this.reporter = r);
  }
  async execute(e) {
    const t = await this.knowledgeBaseService.create(e);
    return t instanceof te
      ? (this.reporter.report(tt.KnowledgeBaseAddFail), t)
      : (this.reporter.report(tt.KnowledgeBaseAddSuc),
        this.knowledgeBaseRepository.add(t));
  }
};
r_([q({ fallbackValue: null })], ya.prototype, "execute", 1);
ya = r_([S(), Wo(0, g(qn)), Wo(1, g(Wr)), Wo(2, g(wr))], ya);
const R0 = Symbol.for("CREATE_KNOWLEDGE_BASE_USECASE"),
  M0 = Symbol.for("UPDATE_PERMISSION_INFO_USECASE"),
  L0 = Symbol.for("UPDATE_BASIC_INFO_USECASE"),
  Xl = Symbol.for("GET_KNOWLEDGE_BASE_BY_ID_USECASE"),
  s_ = Symbol.for("ADD_KNOWLEDGE_BASE_USECASE"),
  $0 = Symbol.for("UPDATE_KNOWLEDGE_BASE_USECASE"),
  n_ = Symbol.for("UPLOAD_KNOWLEDGE_BASE_COVER_USECASE"),
  K0 = Symbol.for("DELETE_KNOWLEDGE_BASE_USECASE"),
  B0 = Symbol.for("GET_KNOWLEDGE_BASE_DISPLAY_INFO_USECASE");
var U0 = Object.defineProperty,
  N0 = Object.getOwnPropertyDescriptor,
  i_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? N0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && U0(t, r, n), n;
  },
  Pu = (e, t) => (r, s) => t(r, s, e);
let Ea = class {
  constructor(e, t) {
    (this.knowledgeBaseRepository = e), (this.knowledgeBaseService = t);
  }
  async execute(e) {
    const t = await this.knowledgeBaseService.get([e]),
      r = t == null ? void 0 : t[e];
    if (!r) throw new xe("knowledge base is empty");
    return this.knowledgeBaseRepository.add(r);
  }
};
i_([q({ fallbackValue: null })], Ea.prototype, "execute", 1);
Ea = i_([S(), Pu(0, g(Wr)), Pu(1, g(qn))], Ea);
var F0 = Object.defineProperty,
  k0 = Object.getOwnPropertyDescriptor,
  o_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? k0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && F0(t, r, n), n;
  },
  Vo = (e, t) => (r, s) => t(r, s, e);
let ba = class {
  constructor(e, t, r) {
    (this.knowledgeBaseRepository = e),
      (this.knowledgeBaseService = t),
      (this.reporter = r);
  }
  async execute(e) {
    const t = await this.knowledgeBaseService.updateBasicInfo(e);
    return t instanceof te
      ? (this.reporter.report(tt.KnowledgeBaseSetFail, {
          knowledge_base_id: e.id,
        }),
        t)
      : (this.reporter.report(tt.KnowledgeBaseSetSuc, {
          knowledge_base_id: e.id,
        }),
        this.knowledgeBaseRepository.update(e.id, t),
        t);
  }
};
o_([q({ fallbackValue: null })], ba.prototype, "execute", 1);
ba = o_([S(), Vo(0, g(Wr)), Vo(1, g(qn)), Vo(2, g(wr))], ba);
var j0 = Object.defineProperty,
  G0 = Object.getOwnPropertyDescriptor,
  a_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? G0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && j0(t, r, n), n;
  },
  Du = (e, t) => (r, s) => t(r, s, e);
let Ia = class {
  constructor(e, t) {
    (this.knowledgeBaseRepository = e), (this.knowledgeBaseService = t);
  }
  async execute(e, t) {
    const r = [Lr.ForbidMemberAccessContent, Lr.RequiresApprovalForJoin];
    t === ye.Creator && r.unshift(Lr.AccessStatus);
    const s = { ...e, fields: r };
    return await this.knowledgeBaseService.updatePermissionInfo(s);
  }
};
a_([q({ fallbackValue: null })], Ia.prototype, "execute", 1);
Ia = a_([S(), Du(0, g(Wr)), Du(1, g(qn))], Ia);
var W0 = Object.defineProperty,
  V0 = Object.getOwnPropertyDescriptor,
  H0 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? V0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && W0(t, r, n), n;
  },
  z0 = (e, t) => (r, s) => t(r, s, e);
let Tu = class {
  constructor(e) {
    this.knowledgeBaseRepository = e;
  }
  execute(e) {
    return this.knowledgeBaseRepository.add(e);
  }
};
Tu = H0([S(), z0(0, g(Wr))], Tu);
var q0 = Object.defineProperty,
  J0 = Object.getOwnPropertyDescriptor,
  Y0 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? J0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && q0(t, r, n), n;
  },
  Q0 = (e, t) => (r, s) => t(r, s, e);
let Cu = class {
  constructor(e) {
    this.knowledgeBaseRepository = e;
  }
  execute(e, t) {
    return this.knowledgeBaseRepository.update(e, t);
  }
};
Cu = Y0([S(), Q0(0, g(Wr))], Cu);
var X0 = Object.defineProperty,
  Z0 = Object.getOwnPropertyDescriptor,
  l_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Z0(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && X0(t, r, n), n;
  },
  xu = (e, t) => (r, s) => t(r, s, e);
let Aa = class {
  constructor(e, t) {
    (this.imageUploadService = e), (this.logger = t);
  }
  async execute(e) {
    const t = await this.imageUploadService.upload(e);
    return (
      this.logger.info(
        `上传知识库封面，cosKey: ${t}`,
        "UploadKnowledgeBaseCoverUseCase",
      ),
      t
    );
  }
};
l_([q({ fallbackValue: "" })], Aa.prototype, "execute", 1);
Aa = l_([S(), xu(0, g(Pm)), xu(1, g(ce))], Aa);
var eb = Object.defineProperty,
  tb = Object.getOwnPropertyDescriptor,
  c_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? tb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && eb(t, r, n), n;
  },
  Ho = (e, t) => (r, s) => t(r, s, e);
let Oa = class {
  constructor(e, t, r) {
    (this.knowledgeBaseService = e),
      (this.knowledgeBaseRepository = t),
      (this.reporter = r);
  }
  async execute(e) {
    const t = await this.knowledgeBaseService.deleteKnowledgeBase(e);
    if (t !== mg.Success)
      throw (
        (this.reporter.report(tt.KnowledgeBaseDeleteFail, {
          knowledge_base_id: e.id,
        }),
        new xe("delete knowledge base failed"))
      );
    return (
      this.reporter.report(tt.KnowledgeBaseDeleteSuc, {
        knowledge_base_id: e.id,
      }),
      this.knowledgeBaseRepository.delete(e.id),
      t
    );
  }
};
c_([q({ fallbackValue: null })], Oa.prototype, "execute", 1);
Oa = c_([S(), Ho(0, g(qn)), Ho(1, g(Wr)), Ho(2, g(wr))], Oa);
var rb = Object.defineProperty,
  sb = Object.getOwnPropertyDescriptor,
  nb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? sb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && rb(t, r, n), n;
  },
  ib = (e, t) => (r, s) => t(r, s, e);
let Ru = class {
  constructor(e) {
    this.knowledgeBaseDisplayInfoTransformServiceImpl = e;
  }
  execute(e, t) {
    return this.knowledgeBaseDisplayInfoTransformServiceImpl.getDisplayInfo(
      e,
      t,
    );
  }
};
Ru = nb([S(), ib(0, g(l0))], Ru);
var ob = Object.defineProperty,
  ab = Object.getOwnPropertyDescriptor,
  u_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ab(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ob(t, r, n), n;
  },
  lb = (e, t) => (r, s) => t(r, s, e);
let Pa = class {
  constructor(e) {
    this.knowledgeBaseShareService = e;
  }
  async execute(e, t, r) {
    return await this.knowledgeBaseShareService.getKnowledgeBaseInfoFromShareId(
      { shareId: r, cursor: e, limit: t },
    );
  }
};
u_([q({ fallbackValue: null })], Pa.prototype, "execute", 1);
Pa = u_([S(), lb(0, g(Yl))], Pa);
const d_ = Symbol.for("GET_KNOWLEDGE_BASE_INFO_FROM_SHARE_ID_USECASE"),
  cb = Symbol.for("GET_KNOWLEDGE_SHARE_INFO_USECASE");
var ub = Object.defineProperty,
  db = Object.getOwnPropertyDescriptor,
  h_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? db(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ub(t, r, n), n;
  },
  hb = (e, t) => (r, s) => t(r, s, e);
let Da = class {
  constructor(e) {
    this.knowledgeBaseShareService = e;
  }
  async execute(e) {
    const t = await this.knowledgeBaseShareService.generateShareInfo(e);
    if (!t) throw new xe("shareInfo is empty");
    return t;
  }
};
h_([q({ fallbackValue: null })], Da.prototype, "execute", 1);
Da = h_([S(), hb(0, g(Yl))], Da);
var fb = Object.defineProperty,
  gb = Object.getOwnPropertyDescriptor,
  f_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? gb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && fb(t, r, n), n;
  },
  pb = (e, t) => (r, s) => t(r, s, e);
let Ta = class {
  constructor(e) {
    this.knowledgeBaseShareService = e;
  }
  async execute(e) {
    const t = await this.knowledgeBaseShareService.getAppletJumpInfo(e);
    if (!t) throw new xe("AppletJumpInfo is empty");
    return t;
  }
};
f_([q({ fallbackValue: null })], Ta.prototype, "execute", 1);
Ta = f_([S(), pb(0, g(Yl))], Ta);
var _b = Object.defineProperty,
  vb = Object.getOwnPropertyDescriptor,
  g_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? vb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && _b(t, r, n), n;
  },
  wb = (e, t) => (r, s) => t(r, s, e);
let Ca = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e, t) {
    const { success: r = [] } = await this.knowledgeService.deleteKnowledge({
      knowledgeBaseId: e,
      mediaIds: [t],
    });
    if (r.length !== 1)
      throw new Error(`delete knowledge list item failed, mediaId: ${t}`);
    return !0;
  }
};
g_([q({ fallbackValue: !1 })], Ca.prototype, "execute", 1);
Ca = g_([S(), wb(0, g(Mt))], Ca);
var mb = Object.defineProperty,
  Sb = Object.getOwnPropertyDescriptor,
  p_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Sb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && mb(t, r, n), n;
  },
  Mu = (e, t) => (r, s) => t(r, s, e);
let xa = class {
  constructor(e, t) {
    (this.knowledgeService = e), (this.knowledgeRepo = t);
  }
  async execute(e, t) {
    if (!t.length) return { success: [], fail: [] };
    const r = t.map((o) => o.mediaId),
      { success: s = [], fail: n = [] } =
        await this.knowledgeService.delKnowledge({
          knowledgeBaseId: e,
          mediaIds: r,
        }),
      i = s.reduce((o, a) => {
        const l = t.find((d) => d.mediaId === a);
        if (!l) return o;
        const { folderId: c = "" } = l,
          u = (o == null ? void 0 : o[c]) || [];
        return { ...o, [c]: [...u, a] };
      }, {});
    return (
      Object.entries(i).forEach(([o, a]) => {
        this.knowledgeRepo.deleteKnowledge(e, o, a);
      }),
      { success: s, fail: n }
    );
  }
};
p_([q({ fallbackValue: !1 })], xa.prototype, "execute", 1);
xa = p_([S(), Mu(0, g(mr)), Mu(1, g(Dt))], xa);
var yb = Object.defineProperty,
  Eb = Object.getOwnPropertyDescriptor,
  bb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Eb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && yb(t, r, n), n;
  },
  Ib = (e, t) => (r, s) => t(r, s, e);
let Lu = class {
  constructor(e) {
    this.searchKnowledgeService = e;
  }
  async execute(e) {
    return this.searchKnowledgeService.searchKnowledgeList(e);
  }
};
Lu = bb([S(), Ib(0, g(o0))], Lu);
var Ab = Object.defineProperty,
  Ob = Object.getOwnPropertyDescriptor,
  Pb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Ob(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Ab(t, r, n), n;
  },
  Db = (e, t) => (r, s) => t(r, s, e);
let $u = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e, t) {
    return await this.knowledgeService.getKnowledge({
      mediaId: e,
      knowledgeBaseId: t,
    });
  }
};
$u = Pb([S(), Db(0, g(Mt))], $u);
var Tb = Object.defineProperty,
  Cb = Object.getOwnPropertyDescriptor,
  xb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Cb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Tb(t, r, n), n;
  },
  Rb = (e, t) => (r, s) => t(r, s, e);
let Ku = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e, t, r) {
    return await this.knowledgeService.copyKnowledge({
      mediaIds: e,
      srcKnowledgeBaseId: t,
      dstKnowledgeBaseId: r,
    });
  }
};
Ku = xb([S(), Rb(0, g(Mt))], Ku);
var Mb = Object.defineProperty,
  Lb = Object.getOwnPropertyDescriptor,
  $b = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Lb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Mb(t, r, n), n;
  },
  Kb = (e, t) => (r, s) => t(r, s, e);
let Bu = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e) {
    return await this.knowledgeService.addKnowledge(e);
  }
};
Bu = $b([S(), Kb(0, g(Mt))], Bu);
var Bb = Object.defineProperty,
  Ub = Object.getOwnPropertyDescriptor,
  Nb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Ub(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Bb(t, r, n), n;
  },
  Fb = (e, t) => (r, s) => t(r, s, e);
let Uu = class {
  constructor(e) {
    this.knowledgeBaseRepository = e;
  }
  async execute(e) {
    return this.knowledgeBaseRepository.add(e);
  }
};
Uu = Nb([S(), Fb(0, g(Wr))], Uu);
var kb = Object.defineProperty,
  jb = Object.getOwnPropertyDescriptor,
  __ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? jb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && kb(t, r, n), n;
  },
  Gb = (e, t) => (r, s) => t(r, s, e);
let Ra = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e) {
    const t = await this.knowledgeService.getKnowledgeList(e);
    if (!t) throw new Error("knowledge list data is null");
    return t;
  }
};
__([q({ fallbackValue: null })], Ra.prototype, "execute", 1);
Ra = __([S(), Gb(0, g(Mt))], Ra);
var Wb = Object.defineProperty,
  Vb = Object.getOwnPropertyDescriptor,
  Hb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Vb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Wb(t, r, n), n;
  },
  zb = (e, t) => (r, s) => t(r, s, e);
let Nu = class {
  constructor(e) {
    this.knowledgeRepository = e;
  }
  execute(e, t, r) {
    var s;
    return (
      this.knowledgeRepository.updateKnowledge(e, t, r),
      ((s = this.knowledgeRepository.getKnowledgeListById(e, t)) == null
        ? void 0
        : s.list) || null
    );
  }
};
Nu = Hb([S(), zb(0, g(Dt))], Nu);
var qb = Object.defineProperty,
  Jb = Object.getOwnPropertyDescriptor,
  Yb = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Jb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && qb(t, r, n), n;
  },
  Qb = (e, t) => (r, s) => t(r, s, e);
let Fu = class {
  constructor(e) {
    this.knowledgeRepository = e;
  }
  execute(e, t, r, s = "push") {
    const n = this.knowledgeRepository.getKnowledgeListInfo(e, t);
    if (!n) return null;
    const i = r.filter((c) => c.mediaType === T.Folder),
      o = r.filter((c) => c.mediaType !== T.Folder),
      a = n.list.findLastIndex((c) => c.mediaType === T.Folder);
    if (s === "push") {
      const c = [...n.list.slice(0, a + 1), ...i, ...n.list.slice(a + 1), ...o];
      return this.knowledgeRepository.set(e, t, { ...n, list: c }), c;
    }
    const l = [...i, ...n.list.slice(0, a + 1), ...o, ...n.list.slice(a + 1)];
    return this.knowledgeRepository.set(e, t, { ...n, list: l }), l;
  }
};
Fu = Yb([S(), Qb(0, g(Dt))], Fu);
var Xb = Object.defineProperty,
  Zb = Object.getOwnPropertyDescriptor,
  e1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Zb(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Xb(t, r, n), n;
  },
  t1 = (e, t) => (r, s) => t(r, s, e);
let ku = class {
  constructor(e) {
    this.knowledgeRepository = e;
  }
  execute(e, t, r) {
    return this.knowledgeRepository.set(e, t, r);
  }
};
ku = e1([S(), t1(0, g(Dt))], ku);
const v_ = Symbol.for("GET_KNOWLEDGE_LIST_USECASE"),
  r1 = Symbol.for("DELETE_KNOWLEDGE_LIST_USECASE"),
  s1 = Symbol.for("SEARCH_KNOWLEDGE_USECASE"),
  n1 = Symbol.for("COPY_KNOWLEDGE_USECASE"),
  i1 = Symbol.for("GET_KNOWLEDGE_USECASE"),
  w_ = Symbol.for("UPDATE_LIST_KNOWLEDGE_USECASE"),
  m_ = Symbol.for("ADD_LIST_KNOWLEDGE_USECASE"),
  o1 = Symbol.for("SET_LIST_KNOWLEDGE_USECASE"),
  a1 = Symbol.for("SEARCH_KNOWLEDGE_FROM_LIST_USECASE"),
  l1 = Symbol.for("COPY_KNOWLEDGE_FROM_MINE_USECASE"),
  c1 = Symbol.for("UPDATE_KNOWLEDGE_TAG_USECASE"),
  u1 = Symbol.for("BATCH_UPDATE_KNOWLEDGE_TAG_USECASE"),
  d1 = Symbol.for("REMOVE_KNOWLEDGE_FROM_LIST"),
  h1 = Symbol.for("ADD_PARSE_TASK_AND_BATCH_QUERY_PARSING"),
  f1 = Symbol.for("BATCH_CHECK_PARSING_PROGRESS"),
  g1 = Symbol.for("RENAME_KNOWLEDGE_USECASE"),
  Zl = Symbol.for("GET_INIT_KNOWLEDGE_LIST_FOR_FOLDER"),
  ec = Symbol.for("GET_NEXT_KNOWLEDGE_LIST_FOR_FOLDER"),
  p1 = Symbol.for("ID_CREATE_FOLDER_USECASE"),
  _1 = Symbol.for("UPDATE_KNOWLEDGE_LIST_INFO_USECASE");
var v1 = Object.defineProperty,
  w1 = Object.getOwnPropertyDescriptor,
  m1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? w1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && v1(t, r, n), n;
  },
  zo = (e, t) => (r, s) => t(r, s, e);
let ju = class {
  constructor(e, t, r) {
    (this.getMyKnowledgeBaseUseCase = e),
      (this.searchKnowledgeUseCase = t),
      (this.accountService = r);
  }
  async execute(e) {
    var u, d;
    const {
        cursor: t,
        query: r,
        knowledgeBaseId: s,
        comparedKnowledgeBaseId: n,
        policy: i,
        searchTags: o,
      } = e,
      a =
        (u = await this.accountService.getAccountInfo()) == null
          ? void 0
          : u.userId,
      l =
        s ||
        ((d = this.getMyKnowledgeBaseUseCase.execute()) == null
          ? void 0
          : d.id) ||
        a;
    if (!l) return null;
    const c = {
      cursor: t,
      query: r,
      knowledgeBaseId: l,
      comparedKnowledgeBaseId: n,
      policy: i,
      filters:
        o != null && o.length
          ? [{ filterType: Al.TagsFilterType, tagsFilter: { tags: o } }]
          : void 0,
      forbidDefaultCover: s === a,
    };
    return this.searchKnowledgeUseCase.execute(c);
  }
};
ju = m1([S(), zo(0, g(ql)), zo(1, g(s1)), zo(2, g(Mg))], ju);
var S1 = Object.defineProperty,
  y1 = Object.getOwnPropertyDescriptor,
  E1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? y1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && S1(t, r, n), n;
  },
  Gu = (e, t) => (r, s) => t(r, s, e);
let Wu = class {
  constructor(e, t) {
    (this.getMyKnowledgeBaseUseCase = e), (this.copyKnowledgeUseCase = t);
  }
  async execute(e, t) {
    const r = this.getMyKnowledgeBaseUseCase.execute();
    return r ? await this.copyKnowledgeUseCase.execute(e, r.id, t) : !1;
  }
};
Wu = E1([S(), Gu(0, g(ql)), Gu(1, g(n1))], Wu);
var b1 = Object.defineProperty,
  I1 = Object.getOwnPropertyDescriptor,
  A1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? I1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && b1(t, r, n), n;
  },
  O1 = (e, t) => (r, s) => t(r, s, e);
let Vu = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  execute(e) {
    return this.knowledgeService.updateTags(e);
  }
};
Vu = A1([S(), O1(0, g(Mt))], Vu);
var P1 = Object.defineProperty,
  D1 = Object.getOwnPropertyDescriptor,
  T1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? D1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && P1(t, r, n), n;
  },
  C1 = (e, t) => (r, s) => t(r, s, e);
let Hu = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  execute(e) {
    return this.knowledgeService.batchUpdateTags(e);
  }
};
Hu = T1([S(), C1(0, g(Mt))], Hu);
var x1 = Object.defineProperty,
  R1 = Object.getOwnPropertyDescriptor,
  M1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? R1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && x1(t, r, n), n;
  },
  L1 = (e, t) => (r, s) => t(r, s, e);
let zu = class {
  constructor(e) {
    this.knowledgeRepository = e;
  }
  execute(e, t, r) {
    return this.knowledgeRepository.deleteKnowledge(e, t, r);
  }
};
zu = M1([S(), L1(0, g(Dt))], zu);
var $1 = Object.defineProperty,
  K1 = Object.getOwnPropertyDescriptor,
  B1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? K1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && $1(t, r, n), n;
  },
  qu = (e, t) => (r, s) => t(r, s, e);
let Ju = class {
  constructor(e, t) {
    (this.knowledgeRepository = e), (this.getKnowledgeListUseCase = t);
  }
  async execute(e, t) {
    this.knowledgeRepository.set(e, []);
    const r = await this.getKnowledgeListUseCase.execute({
      cursor: "",
      pageSize: 20,
      knowledgeBaseId: e,
      tags: [],
      sortType: t,
    });
    if (!r) return null;
    const { list: s } = r;
    return this.knowledgeRepository.set(e, s), r;
  }
};
Ju = B1([qu(0, g(Dt)), qu(1, g(v_))], Ju);
const wL = Symbol.for("OBSERVABLE_PARSER_SERVICE"),
  mL = Symbol.for("PARSER_SERVICE"),
  tc = Symbol.for("PARSE_CONFIG");
var fs = ((e) => (
    (e.Progress = "PROGRESS"),
    (e.Completed = "COMPLETE"),
    (e.Error = "ERROR"),
    e
  ))(fs || {}),
  U1 = Object.defineProperty,
  N1 = Object.getOwnPropertyDescriptor,
  F1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? N1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && U1(t, r, n), n;
  },
  pi = (e, t) => (r, s) => t(r, s, e);
let ts = class {
  constructor(e, t, r, s) {
    (this.knowledgeRepository = e),
      (this.parseConfig = t),
      (this.parseApiServiceFactory = r),
      (this.logger = s),
      (this.waitParsingQueue = []),
      (this.knowledgeUpdateInfo = new Ne()),
      (this.isRunningParsing = !1),
      (this.startParseTasks = (n, i) => {
        var l;
        const a = (
          ((l = this.knowledgeRepository.getKnowledgeListInfo(n, i)) == null
            ? void 0
            : l.list) || []
        )
          .filter((c) => [Y.Init, Y.WaitParse].includes(c.status))
          .filter((c) =>
            this.waitParsingQueue.every(
              (u) => u.knowledgeBaseId !== n || u.mediaId !== c.mediaId,
            ),
          );
        a.length &&
          (this.logger.info(
            `找到待解析任务：${a.map(({ mediaId: c, title: u }) => `media: ${c}, title: ${u}`).join(", ")}`,
            ts.tag,
          ),
          this.waitParsingQueue.push(
            ...a.map((c) => ({
              mediaId: c.mediaId,
              knowledgeBaseId: n,
              folderId: i,
            })),
          ),
          this.runParseTasks());
      }),
      (this.runParseTasks = async () => {
        if (!this.isRunningParsing) {
          for (this.isRunningParsing = !0; this.waitParsingQueue.length > 0; ) {
            const {
                knowledgeBaseId: n,
                folderId: i,
                mediaId: o,
              } = this.waitParsingQueue.shift(),
              a = await this.startParseTask(n, i, o);
            if (!a) continue;
            const { updateKnowledge: l } = a;
            this.updateKnowledge(n, i, l);
          }
          this.isRunningParsing = !1;
        }
      }),
      (this.startParseTask = (n, i, o) => {
        const a = this.knowledgeRepository.getKnowledgeById(n, i, o);
        if (!a) return;
        const { mediaType: l, title: c, fileSize: u } = a,
          { promise: d, resolve: f } = Promise.withResolvers(),
          h = this.parseApiServiceFactory();
        return (
          h.parseFile({
            url: this.parseConfig.url,
            data: {
              mediaId: o,
              mediaType: l,
              indexStorageType: Qs.INDEX_STORAGE_TYPE_LONG_TERM,
              mediaRawSize: Number(u),
              title: c,
              knowledgeBaseId: n,
              folderId: i,
            },
            onProgress: (p) => {
              this.logger.info(
                `解析收到进度事件，中断解析 ${JSON.stringify(p)}`,
                ts.tag,
              ),
                h.cancelParse(),
                f({
                  knowledgeBaseId: n,
                  folderId: i,
                  updateKnowledge: {
                    mediaId: o,
                    status: Y.Parsing,
                    mediaData: { parseProgress: p.percent },
                  },
                });
            },
            onCompleted: (p) => {
              this.logger.info(`解析收到完成事件 ${JSON.stringify(p)}`, ts.tag),
                h.cancelParse(),
                f({
                  knowledgeBaseId: n,
                  folderId: i,
                  updateKnowledge: { mediaId: o, status: Y.Finish },
                });
            },
            onError: (p) => {
              if ((p == null ? void 0 : p.message) === "用户取消解析") {
                f({
                  knowledgeBaseId: n,
                  folderId: i,
                  updateKnowledge: { mediaId: o, status: Y.Parsing },
                });
                return;
              }
              this.logger.info(
                `解析收到 error 事件 ${JSON.stringify(p)}`,
                ts.tag,
              ),
                h.cancelParse(),
                f({
                  knowledgeBaseId: n,
                  folderId: i,
                  updateKnowledge: { mediaId: o, status: Y.Error },
                });
            },
          }),
          d
        );
      }),
      (this.updateKnowledge = (n, i, o) => {
        this.knowledgeUpdateInfo.next({
          knowledgeBaseId: n,
          folderId: i,
          updateKnowledge: o,
        }),
          this.knowledgeRepository.updateKnowledge(n, i, [o]);
      });
  }
  execute(e, t) {
    return (
      this.startParseTasks(e, t),
      this.knowledgeUpdateInfo
        .asObservable()
        .pipe(Gr(({ knowledgeBaseId: r }) => r === e))
    );
  }
};
ts.tag = "AddParseTaskUsecase";
ts = F1([S(), pi(0, g(Dt)), pi(1, g(tc)), pi(2, g(Yp)), pi(3, g(ce))], ts);
var k1 = Object.defineProperty,
  j1 = Object.getOwnPropertyDescriptor,
  G1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? j1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && k1(t, r, n), n;
  },
  qo = (e, t) => (r, s) => t(r, s, e);
let An = class {
  constructor(e, t, r) {
    (this.knowledgeRepository = e),
      (this.queryMediaProgressService = t),
      (this.logger = r),
      (this.knowledgeUpdateInfo = new Ne()),
      (this.queryParsingTask = async (s, n) => {
        var c, u;
        const o =
          (
            ((c = this.knowledgeRepository.getKnowledgeListInfo(s, n)) == null
              ? void 0
              : c.list) || []
          ).filter((d) =>
            [Y.Parsing, Y.WaitParse, Y.Init].includes(d.status),
          ) || [];
        if (!o.length) return;
        this.logger.info(
          `找到解析中任务：${o.map(({ mediaId: d, title: f }) => `media: ${d}, title: ${f}`).join(", ")}`,
          An.tag,
        ),
          (u = this.batchQueryAbortController) == null || u.abort();
        const a = o.map((d) => d.mediaId),
          { connection: l } = await this.queryMediaProgressService.query(a, {
            handleParseState: (d) => {
              this.logger.info(
                `收到解析结果事件：${JSON.stringify(d)}`,
                An.tag,
              ),
                d.forEach(({ mediaID: f, state: h }) => {
                  this.updateKnowledge(s, n, {
                    mediaId: f,
                    status: this.mediaStateToKnowledgeItemStatus(h),
                  });
                });
            },
            handleProgress: (d) => {
              d.forEach(({ mediaID: f, percent: h }) => {
                this.updateKnowledge(s, n, {
                  mediaId: f,
                  status: Y.Parsing,
                  mediaData: { parseProgress: h },
                });
              });
            },
            timeout: gr.SSE * 5,
          });
        this.batchQueryAbortController = l;
      }),
      (this.updateKnowledge = (s, n, i) => {
        this.knowledgeUpdateInfo.next({
          knowledgeBaseId: s,
          folderId: n,
          updateKnowledge: i,
        }),
          this.knowledgeRepository.updateKnowledge(s, n, [i]);
      });
  }
  execute(e, t) {
    return (
      this.queryParsingTask(e, t),
      this.knowledgeUpdateInfo
        .asObservable()
        .pipe(Gr(({ knowledgeBaseId: r }) => r === e))
    );
  }
  mediaStateToKnowledgeItemStatus(e) {
    switch (e) {
      case rt.MediaParsing:
        return Y.Parsing;
      case rt.MediaInit:
        return Y.Init;
      case rt.MediaParseSuccess:
        return Y.Finish;
      case rt.MediaParseError:
        return Y.Error;
    }
  }
};
An.tag = "BatchCheckParsingProgressUsecase";
An = G1([S(), qo(0, g(Dt)), qo(1, g(Vl)), qo(2, g(ce))], An);
var W1 = Object.defineProperty,
  V1 = Object.getOwnPropertyDescriptor,
  S_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? V1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && W1(t, r, n), n;
  },
  Yu = (e, t) => (r, s) => t(r, s, e);
let Ma = class {
  constructor(e, t) {
    (this.knowledgeService = e), (this.knowledgeRepo = t);
  }
  async execute(e) {
    const { knowledgeBaseId: t, folderId: r } = e,
      s = await this.knowledgeService.renameKnowledge(e);
    return (
      s instanceof te || !s || this.knowledgeRepo.updateKnowledge(t, r, [s]), s
    );
  }
};
S_([q({ fallbackValue: !1 })], Ma.prototype, "execute", 1);
Ma = S_([S(), Yu(0, g(mr)), Yu(1, g(Dt))], Ma);
var H1 = Object.defineProperty,
  z1 = Object.getOwnPropertyDescriptor,
  q1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? z1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && H1(t, r, n), n;
  },
  Qu = (e, t) => (r, s) => t(r, s, e);
let On = class {
  constructor(e, t) {
    (this.queryMediaProgressService = e),
      (this.logger = t),
      (this.knowledgeUpdateInfo = new Ne()),
      (this.queryParsingTask = async (r, s) => {
        var a;
        const n =
          s.filter((l) =>
            [Y.Parsing, Y.WaitParse, Y.Init].includes(l.status),
          ) || [];
        if (!n.length) return;
        this.logger.info(
          `找到解析中任务：${n.map(({ mediaId: l, title: c }) => `media: ${l}, title: ${c}`).join(", ")}`,
          On.tag,
        ),
          (a = this.batchQueryAbortController) == null || a.abort();
        const i = n.map((l) => l.mediaId),
          { connection: o } = await this.queryMediaProgressService.query(i, {
            handleParseState: (l) => {
              this.logger.info(
                `收到解析结果事件：${JSON.stringify(l)}`,
                On.tag,
              ),
                l.forEach(({ mediaID: c, state: u }) => {
                  this.updateKnowledge(r, {
                    mediaId: c,
                    status: this.mediaStateToKnowledgeItemStatus(u),
                  });
                });
            },
            handleProgress: (l) => {
              l.forEach(({ mediaID: c, percent: u }) => {
                this.updateKnowledge(r, {
                  mediaId: c,
                  status: Y.Parsing,
                  mediaData: { parseProgress: u },
                });
              });
            },
            timeout: gr.SSE * 5,
          });
        this.batchQueryAbortController = o;
      }),
      (this.updateKnowledge = (r, s) => {
        this.knowledgeUpdateInfo.next({
          knowledgeBaseId: r,
          updateKnowledge: s,
        });
      });
  }
  execute(e, t) {
    return (
      this.queryParsingTask(e, t),
      this.knowledgeUpdateInfo
        .asObservable()
        .pipe(Gr(({ knowledgeBaseId: r }) => r === e))
    );
  }
  mediaStateToKnowledgeItemStatus(e) {
    switch (e) {
      case rt.MediaParsing:
        return Y.Parsing;
      case rt.MediaInit:
        return Y.Init;
      case rt.MediaParseSuccess:
        return Y.Finish;
      case rt.MediaParseError:
        return Y.Error;
    }
  }
};
On.tag = "MiniAppBatchCheckParsingProgressUsecase";
On = q1([S(), Qu(0, g(Vl)), Qu(1, g(ce))], On);
var J1 = Object.defineProperty,
  Y1 = Object.getOwnPropertyDescriptor,
  Q1 = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Y1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && J1(t, r, n), n;
  },
  Xu = (e, t) => (r, s) => t(r, s, e);
let rs = class {
  constructor(e, t) {
    (this.parseApiServiceFactory = e),
      (this.logger = t),
      (this.waitParsingQueue = []),
      (this.knowledgeUpdateInfo = new Ne()),
      (this.isRunningParsing = !1),
      (this.startParseTasks = (r, s) => {
        const n =
          s
            .filter((i) => [Y.Init, Y.WaitParse].includes(i.status))
            .filter((i) =>
              this.waitParsingQueue.every(
                (o) => o.knowledgeBaseId !== r || o.mediaId !== i.mediaId,
              ),
            ) || [];
        this.logger.info(
          `找到待解析任务：${n.map(({ mediaId: i, title: o }) => `media: ${i}, title: ${o}`).join(", ")}`,
          rs.tag,
        ),
          this.waitParsingQueue.push(
            ...n.map((i) => ({
              mediaId: i.mediaId,
              knowledgeBaseId: r,
              folderId: i.folderId || "",
            })),
          ),
          this.runParseTasks(s);
      }),
      (this.runParseTasks = async (r) => {
        if (!this.isRunningParsing) {
          for (this.isRunningParsing = !0; this.waitParsingQueue.length > 0; ) {
            const {
                knowledgeBaseId: s,
                mediaId: n,
                folderId: i,
              } = this.waitParsingQueue.shift(),
              o = r.find((c) => c.mediaId === n);
            if (!o) continue;
            const a = await this.startParseTask(s, i, o);
            if (!a) continue;
            const { updateKnowledge: l } = a;
            this.updateKnowledge(s, i, l);
          }
          this.isRunningParsing = !1;
        }
      }),
      (this.startParseTask = (r, s, n) => {
        const { mediaType: i, title: o, fileSize: a, mediaId: l } = n;
        return new Promise((c) => {
          const u = this.parseApiServiceFactory();
          u.parseFile({
            url: "",
            data: {
              mediaId: l,
              mediaType: i,
              indexStorageType: Qs.INDEX_STORAGE_TYPE_LONG_TERM,
              mediaRawSize: Number(a),
              title: o,
              knowledgeBaseId: r,
              folderId: s,
            },
            onProgress: (d) => {
              this.logger.info(
                `解析收到进度事件，中断解析 ${JSON.stringify(d)}`,
                rs.tag,
              ),
                u.cancelParse(),
                c({
                  knowledgeBaseId: r,
                  folderId: s,
                  updateKnowledge: {
                    mediaId: l,
                    status: Y.Parsing,
                    mediaData: { parseProgress: d.percent },
                  },
                });
            },
            onCompleted: (d) => {
              this.logger.info(`解析收到完成事件 ${JSON.stringify(d)}`, rs.tag),
                u.cancelParse(),
                c({
                  knowledgeBaseId: r,
                  folderId: s,
                  updateKnowledge: { mediaId: l, status: Y.Finish },
                });
            },
            onError: (d) => {
              if ((d == null ? void 0 : d.message) === "用户取消解析") {
                c({
                  folderId: s,
                  knowledgeBaseId: r,
                  updateKnowledge: { mediaId: l, status: Y.Parsing },
                });
                return;
              }
              this.logger.info(
                `解析收到 error 事件 ${JSON.stringify(d)}`,
                rs.tag,
              ),
                u.cancelParse(),
                c({
                  knowledgeBaseId: r,
                  folderId: s,
                  updateKnowledge: { mediaId: l, status: Y.Error },
                });
            },
          });
        });
      }),
      (this.updateKnowledge = (r, s, n) => {
        this.knowledgeUpdateInfo.next({
          knowledgeBaseId: r,
          folderId: s,
          updateKnowledge: n,
        });
      });
  }
  execute(e, t) {
    return (
      this.startParseTasks(e, t),
      this.knowledgeUpdateInfo
        .asObservable()
        .pipe(Gr(({ knowledgeBaseId: r }) => r === e))
    );
  }
};
rs.tag = "MiniAppAddParseTaskUsecase";
rs = Q1([S(), Xu(0, g(Yp)), Xu(1, g(ce))], rs);
var X1 = Object.defineProperty,
  Z1 = Object.getOwnPropertyDescriptor,
  eI = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Z1(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && X1(t, r, n), n;
  },
  Zu = (e, t) => (r, s) => t(r, s, e),
  Ks;
let La =
  ((Ks = class {
    constructor(t, r) {
      (this.knowledgeService = t), (this.knowledgeRepo = r);
    }
    async *execute({
      knowledgeBaseId: t,
      folderId: r,
      needDefaultCover: s = !0,
      sortType: n = js.DefaultSortType,
      comparedKnowledgeBaseId: i,
      skipCache: o = !1,
    }) {
      let a = "";
      if (!o) {
        const D = this.knowledgeRepo.getKnowledgeListInfo(t, r);
        D && (yield D), (a = (D == null ? void 0 : D.version) || "");
      }
      const l = await this.knowledgeService.getKnowledgeList({
        sortType: n,
        needDefaultCover: s,
        knowledgeBaseId: t,
        comparedKnowledgeBaseId: i,
        folderId: r,
        cursor: "",
        limit: La.pageSize,
        version: a,
      });
      if (l.code !== De.Success) return yield new te(l.emptyMsg, l.code);
      const {
        knowledgeBaseInfo: c,
        knowledgeList: u,
        currentPath: d = [],
        isUpdate: f,
        isEnd: h,
        nextCursor: p,
        version: _ = "",
        totalSize: w,
        userPermissionInfo: m,
      } = l;
      if (!f) return;
      const E = {
        list: u,
        currentPath: d,
        knowledgeBaseInfo: c,
        totalSize: w,
        userPermissionInfo: m,
        cursor: p,
        isEnd: h,
      };
      o || this.knowledgeRepo.set(t, r, { ...E, currentPath: d, version: _ }),
        yield { ...E, isUpdate: f && !!a };
    }
  }),
  (Ks.pageSize = 50),
  Ks);
La = eI([Zu(0, g(mr)), Zu(1, g(Dt))], La);
var tI = Object.defineProperty,
  rI = Object.getOwnPropertyDescriptor,
  sI = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? rI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && tI(t, r, n), n;
  },
  ed = (e, t) => (r, s) => t(r, s, e);
let td = class {
  constructor(e, t) {
    (this.knowledgeService = e), (this.knowledgeRepo = t);
  }
  async execute({
    knowledgeBaseId: e,
    folderId: t,
    needDefaultCover: r = !0,
    sortType: s = js.DefaultSortType,
    cursor: n,
    comparedKnowledgeBaseId: i,
    skipCache: o = !0,
  }) {
    const a = await this.knowledgeService.getKnowledgeList({
      sortType: s,
      needDefaultCover: r,
      knowledgeBaseId: e,
      comparedKnowledgeBaseId: i,
      folderId: t,
      cursor: n,
      limit: 20,
    });
    if (a.code !== De.Success) return new te(a.emptyMsg, a.code);
    const {
        knowledgeBaseInfo: l,
        knowledgeList: c,
        currentPath: u = [],
        isEnd: d,
        nextCursor: f,
        userPermissionInfo: h,
        totalSize: p,
      } = a,
      _ = {
        list: c,
        currentPath: u,
        knowledgeBaseInfo: l,
        cursor: f,
        isEnd: d,
        userPermissionInfo: h,
        totalSize: p,
      };
    return (
      o ||
        this.knowledgeRepo.prependKnowledgeListInfo(e, t, {
          ..._,
          currentPath: u,
        }),
      _
    );
  }
};
td = sI([ed(0, g(mr)), ed(1, g(Dt))], td);
var nI = Object.defineProperty,
  iI = Object.getOwnPropertyDescriptor,
  oI = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? iI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && nI(t, r, n), n;
  },
  rd = (e, t) => (r, s) => t(r, s, e);
let sd = class {
  constructor(e, t) {
    (this.knowledgeService = e), (this.knowledgeRepo = t);
  }
  async execute({ knowledgeBaseId: e, folderId: t, title: r }) {
    const s = await this.knowledgeService.createFolder({
      knowledgeBaseId: e,
      folderId: t,
      title: r,
    });
    return (
      s instanceof te || this.knowledgeRepo.addKnowledge(e, t, [s], "unshift"),
      s
    );
  }
};
sd = oI([rd(0, g(mr)), rd(1, g(Dt))], sd);
var aI = Object.defineProperty,
  lI = Object.getOwnPropertyDescriptor,
  y_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? lI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && aI(t, r, n), n;
  },
  cI = (e, t) => (r, s) => t(r, s, e);
const uI = Symbol.for("ID_TRANSPORT_KNOWLEDGE_USECASE");
let $a = class {
  constructor(e) {
    (this.transportKnowledgeService = e),
      (this.subject = new Ne()),
      (this.duplicatedFiles = []),
      (this.duplicateTips = ""),
      (this.moveResult = []),
      (this.handleEvent = (t) => {
        const { eventName: r, data: s } = t;
        if (r === "PROGRESS") {
          this.subject.next({
            transportStatus: qe.Processing,
            progress: s.progress,
          });
          return;
        }
        if (r === "SAMENAME") {
          const { results: n = [], tips: i } = s,
            o = n
              .filter((a) => a.media_id)
              .map((a) => ({
                id: a.media_id ?? "",
                name: a.name ?? "",
                mediaType: a.media_type ?? T.Unknown,
                srcMediaIds: a.src_media_ids ?? [],
              }));
          this.duplicatedFiles.push(...o), (this.duplicateTips = i);
          return;
        }
        if (r === "COMPLETE") {
          const { code: n = De.Success, msg: i, results: o = [] } = s;
          if (n !== De.Success) {
            this.subject.next({ transportStatus: qe.Error, errorMsg: i });
            return;
          }
          const a = o.map((l) => ({
            mediaId: l.media_id,
            retCode: l.ret_code,
          }));
          if (this.duplicatedFiles.length > 0) {
            this.subject.next({
              transportStatus: qe.Conflict,
              duplicatedFiles: this.duplicatedFiles,
              errorMsg: this.duplicateTips,
              moveResult: a,
            });
            return;
          }
          this.subject.next({ transportStatus: qe.Finish, moveResult: a });
          return;
        }
      }),
      (this.handleError = (t) => {
        t.name !== "AbortError" && this.subject.error(t);
      });
  }
  async execute(e, t) {
    var n;
    (n = this.queryAbortController) == null || n.abort(),
      (this.duplicatedFiles = []);
    const { connection: r, observer: s } =
      await this.transportKnowledgeService.query(e, t, { timeout: gr.SSE * 5 });
    return (
      s.subscribe({
        next: (i) => this.handleEvent(i),
        error: (i) => this.handleError(i),
      }),
      (this.queryAbortController = r),
      { observer: this.subject.asObservable(), connection: r }
    );
  }
};
y_([q({ fallbackValue: !1 })], $a.prototype, "execute", 1);
$a = y_([S(), cI(0, g(vy))], $a);
var dI = Object.defineProperty,
  hI = Object.getOwnPropertyDescriptor,
  fI = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? hI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && dI(t, r, n), n;
  },
  gI = (e, t) => (r, s) => t(r, s, e);
let nd = class {
  constructor(e) {
    this.knowledgeRepository = e;
  }
  execute(e, t, r) {
    return this.knowledgeRepository.update(e, t, r);
  }
};
nd = fI([gI(0, g(Dt))], nd);
const pI = Symbol.for("GET_SECURITY_REPORT_OPTIONS_USECASE"),
  _I = Symbol.for("REPORT_KNOWLEDGE_BASE_USECASE"),
  vI = Symbol.for("REPORT_MEDIA_USECASE"),
  wI = Symbol.for("APPEAL_MEDIA_USECASE"),
  mI = Symbol.for("SEND_PERSONAL_DATA_USECASE");
var SI = Object.defineProperty,
  yI = Object.getOwnPropertyDescriptor,
  E_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? yI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && SI(t, r, n), n;
  },
  id = (e, t) => (r, s) => t(r, s, e);
let Ka = class {
  constructor(e, t) {
    (this.securityReportRepository = e), (this.securityReportService = t);
  }
  async execute() {
    const e = this.securityReportRepository.getOptions();
    if (e.length) return e;
    const t = await this.securityReportService.getOptions();
    return this.securityReportRepository.updateOptions(t);
  }
};
E_([q({ fallbackValue: [] })], Ka.prototype, "execute", 1);
Ka = E_([S(), id(0, g(jE)), id(1, g(Jn))], Ka);
var EI = Object.defineProperty,
  bI = Object.getOwnPropertyDescriptor,
  b_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? bI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && EI(t, r, n), n;
  },
  II = (e, t) => (r, s) => t(r, s, e);
let Ba = class {
  constructor(e) {
    this.securityReportService = e;
  }
  async execute(e, t, r) {
    const s = { knowledgebaseId: e, reportExtraInfo: t, source: r };
    return await this.securityReportService.reportKnowledgeBase(s);
  }
};
b_([q({ fallbackValue: [] })], Ba.prototype, "execute", 1);
Ba = b_([S(), II(0, g(Jn))], Ba);
var AI = Object.defineProperty,
  OI = Object.getOwnPropertyDescriptor,
  I_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? OI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && AI(t, r, n), n;
  },
  PI = (e, t) => (r, s) => t(r, s, e);
let Ua = class {
  constructor(e) {
    this.securityReportService = e;
  }
  async execute(e, t, r, s) {
    const n = { mediaId: e, knowledgebaseId: t, reportExtraInfo: r, source: s };
    return await this.securityReportService.reportKnowledge(n);
  }
};
I_([q({ fallbackValue: [] })], Ua.prototype, "execute", 1);
Ua = I_([S(), PI(0, g(Jn))], Ua);
var DI = Object.defineProperty,
  TI = Object.getOwnPropertyDescriptor,
  A_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? TI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && DI(t, r, n), n;
  },
  CI = (e, t) => (r, s) => t(r, s, e);
let Na = class {
  constructor(e) {
    this.securityReportService = e;
  }
  async execute(e) {
    return await this.securityReportService.appealKnowledge(e);
  }
};
A_([q({ fallbackValue: [] })], Na.prototype, "execute", 1);
Na = A_([S(), CI(0, g(Jn))], Na);
var xI = Object.defineProperty,
  RI = Object.getOwnPropertyDescriptor,
  O_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? RI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && xI(t, r, n), n;
  },
  MI = (e, t) => (r, s) => t(r, s, e);
let Fa = class {
  constructor(e) {
    this.securityReportService = e;
  }
  async execute(e) {
    const t = { email: e };
    return await this.securityReportService.sendPersonalData(t);
  }
};
O_([q({ fallbackValue: [] })], Fa.prototype, "execute", 1);
Fa = O_([S(), MI(0, g(Jn))], Fa);
var LI = Object.defineProperty,
  $I = Object.getOwnPropertyDescriptor,
  P_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? $I(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && LI(t, r, n), n;
  },
  od = (e, t) => (r, s) => t(r, s, e);
let ka = class {
  constructor(e, t) {
    (this.knowledgeBaseMemberRepository = e),
      (this.knowledgeBaseMemberService = t);
  }
  async execute(e) {
    const t = await this.knowledgeBaseMemberService.getMemberList(e);
    return this.knowledgeBaseMemberRepository.addMemberList(
      e.knowledgeBaseId,
      t,
    );
  }
};
P_([q({ fallbackValue: null })], ka.prototype, "execute", 1);
ka = P_([S(), od(0, g(zn)), od(1, g(ps))], ka);
var KI = Object.defineProperty,
  BI = Object.getOwnPropertyDescriptor,
  D_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? BI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && KI(t, r, n), n;
  },
  ad = (e, t) => (r, s) => t(r, s, e);
let ja = class {
  constructor(e, t) {
    (this.knowledgeBaseMemberRepository = e),
      (this.knowledgeBaseMemberService = t);
  }
  async execute(e) {
    const t = await this.knowledgeBaseMemberService.getApplyList(e);
    return this.knowledgeBaseMemberRepository.addApplyList(
      e.knowledgeBaseId,
      t,
    );
  }
};
D_([q({ fallbackValue: null })], ja.prototype, "execute", 1);
ja = D_([S(), ad(0, g(zn)), ad(1, g(ps))], ja);
var UI = Object.defineProperty,
  NI = Object.getOwnPropertyDescriptor,
  T_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? NI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && UI(t, r, n), n;
  },
  ld = (e, t) => (r, s) => t(r, s, e);
let Ga = class {
  constructor(e, t) {
    (this.knowledgeBaseMemberRepository = e),
      (this.knowledgeBaseMemberService = t);
  }
  async execute(e) {
    const t = await this.knowledgeBaseMemberService.deleteMemberById(e);
    return (
      t === At.Success &&
        this.knowledgeBaseMemberRepository.deleteMemberById(e),
      t
    );
  }
};
T_([q({ fallbackValue: null })], Ga.prototype, "execute", 1);
Ga = T_([S(), ld(0, g(zn)), ld(1, g(ps))], Ga);
var FI = Object.defineProperty,
  kI = Object.getOwnPropertyDescriptor,
  C_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? kI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && FI(t, r, n), n;
  },
  cd = (e, t) => (r, s) => t(r, s, e);
let Wa = class {
  constructor(e, t) {
    (this.knowledgeBaseMemberRepository = e),
      (this.knowledgeBaseMemberService = t);
  }
  async execute(e) {
    const t = await this.knowledgeBaseMemberService.changeRoleById(e);
    return (
      t.code === At.Success &&
        this.knowledgeBaseMemberRepository.changeRoleById(e),
      t
    );
  }
};
C_([q({ fallbackValue: null })], Wa.prototype, "execute", 1);
Wa = C_([S(), cd(0, g(zn)), cd(1, g(ps))], Wa);
var jI = Object.defineProperty,
  GI = Object.getOwnPropertyDescriptor,
  x_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? GI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && jI(t, r, n), n;
  },
  ud = (e, t) => (r, s) => t(r, s, e);
let Va = class {
  constructor(e, t) {
    (this.knowledgeBaseMemberRepository = e),
      (this.knowledgeBaseMemberService = t);
  }
  async execute(e) {
    const t = await this.knowledgeBaseMemberService.reviewApplyById(e);
    return (
      t === At.Success && this.knowledgeBaseMemberRepository.reviewApplyById(e),
      t
    );
  }
};
x_([q({ fallbackValue: null })], Va.prototype, "execute", 1);
Va = x_([S(), ud(0, g(zn)), ud(1, g(ps))], Va);
var WI = Object.defineProperty,
  VI = Object.getOwnPropertyDescriptor,
  R_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? VI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && WI(t, r, n), n;
  },
  HI = (e, t) => (r, s) => t(r, s, e);
let Ha = class {
  constructor(e) {
    this.knowledgeBaseMemberService = e;
  }
  async execute(e) {
    return await this.knowledgeBaseMemberService.joinKnowledgeBase(e);
  }
};
R_([q({ fallbackValue: null })], Ha.prototype, "execute", 1);
Ha = R_([S(), HI(0, g(ps))], Ha);
var zI = Object.defineProperty,
  qI = Object.getOwnPropertyDescriptor,
  M_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? qI(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && zI(t, r, n), n;
  },
  JI = (e, t) => (r, s) => t(r, s, e);
let za = class {
  constructor(e) {
    this.knowledgeBaseMemberService = e;
  }
  async execute(e) {
    return await this.knowledgeBaseMemberService.leaveKnowledgeBase(e);
  }
};
M_([q({ fallbackValue: null })], za.prototype, "execute", 1);
za = M_([S(), JI(0, g(ps))], za);
const YI = Symbol.for("GET_KNOWLEDGE_BASE_MEMBER_BY_ID_USECASE"),
  QI = Symbol.for("GET_KNOWLEDGE_BASE_APPLY_BY_ID_USECASE"),
  XI = Symbol.for("DELETE_KNOWLEDGE_BASE_MEMBER_BY_ID_USECASE"),
  ZI = Symbol.for("CHANGE_KNOWLEDGE_BASE_MEMBER_ROLE_BY_ID_USECASE"),
  eA = Symbol.for("REVIEW_KNOWLEDGE_BASE_APPLY_BY_ID_USECASE"),
  tA = Symbol.for("JOIN_KNOWLEDGE_BASE_USECASE"),
  rA = Symbol.for("LEAVE_KNOWLEDGE_BASE_USECASE"),
  go = Symbol.for("URL_PARAMS_SERVICE"),
  sA = Symbol.for("SECTION_SERVICE"),
  SL = Symbol.for("COMMAND_SERVICE"),
  yL = Symbol.for("QA_CONSUME_SERVICE_FACTORY"),
  nA = Symbol.for("SECTION_REPOSITORY");
var iA = Object.defineProperty,
  oA = Object.getOwnPropertyDescriptor,
  aA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? oA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && iA(t, r, n), n;
  },
  dd = (e, t) => (r, s) => t(r, s, e);
let hd = class {
  constructor(e, t) {
    (this.sectionRepository = e), (this.sectionService = t);
  }
  execute(e, t) {
    return this.sectionRepository.getSections(e).length > 0
      ? new xe("会话中已经有消息了")
      : this.sectionService.createWelcomeSection(e, t);
  }
};
hd = aA([S(), dd(0, g(nA)), dd(1, g(sA))], hd);
const lA = Symbol.for("ID_ADD_PARSE_MEDIA_USECASE"),
  L_ = Symbol.for("IS_TEMPORARY_MEDIA_TAG");
var je = ((e) => (
  (e[(e.Waiting = 0)] = "Waiting"),
  (e[(e.Parsing = 1)] = "Parsing"),
  (e[(e.Finish = 2)] = "Finish"),
  (e[(e.Error = 3)] = "Error"),
  e
))(je || {});
const Yn = Symbol.for("UPDATE_MEDIA_USECASE"),
  cA = Symbol.for("GET_IMPORT_FILE_MEDIA_USECASE"),
  uA = Symbol.for("ADD_KNOWLEDGE_USE_BY_FILE_ID_USECASE"),
  rc = Symbol.for("CONVERT_FILEID_TO_KNOWLEDGE_MEDIA_USECASE"),
  dA = Symbol.for("CONVERT_FILE_MEDIA_TO_KNOWLEDGE_MEDIA_USECASE"),
  hA = Symbol.for("CHECK_DUPLICATED_NAME_USECASE"),
  fA = Symbol.for("UPDATE_DUPLICATED_FILE_INFO_USE_CASE"),
  gA = Symbol.for("REPLACE_KNOWLEDGE_BY_FILE_ID_USE_CASE");
var pA = Object.defineProperty,
  _A = Object.getOwnPropertyDescriptor,
  vA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? _A(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && pA(t, r, n), n;
  },
  zr = (e, t) => (r, s) => t(r, s, e);
let Pn = class {
  constructor(e, t, r, s, n, i, o) {
    (this.fileMediaRepo = e),
      (this.uploadManagerService = t),
      (this.userSpaceService = r),
      (this.updateMediaUseCase = s),
      (this.uploadApi = n),
      (this.mediaService = i),
      (this.logger = o),
      (this.execute = ({ fileId: a, file: l, extraInfo: c }) => (
        this.createInitialFileMedia(a, c),
        this.uploadManagerService.addUploadTask(a, async () =>
          this.createUploadTask(a, c, l),
        ),
        this.handleUploadStatus(
          a,
          this.uploadManagerService.getUploadStatusObservable(a),
        )
      )),
      (this.createUploadTask = async (a, l, c) => {
        const u = new Ne(),
          d = {
            uploadObserver: u.asObservable(),
            cancelUpload: () => this.uploadApi.cancelUpload(),
            pauseUpload: () => this.uploadApi.pauseUpload(),
            resumeUpload: () => this.uploadApi.resumeUpload(),
          },
          f = await this.checkSpace(l);
        if (f instanceof xe)
          return (
            u.error(f.message),
            this.updateMediaUseCase.execute(a, {
              extraInfo: { errorReason: f.message },
            }),
            null
          );
        const h = await this.mediaService.createFileMedia(l);
        if (!(h != null && h.mediaId) || !h) return u.error("上传失败"), null;
        const { filePath: p } = l,
          { mediaId: _, credentials: w } = h,
          { cosKey: m } = w;
        return (
          this.fileMediaRepo.updateFileMedia(a, {
            mediaId: _,
            extraInfo: { cosKey: m },
          }),
          this.uploadApi.uploadFile({
            filePath: p,
            file: c,
            credentials: w,
            onProgress: (E) => {
              u.next({ type: Gs.Progress, data: E });
            },
            onCompleted: () => {
              u.complete();
            },
            onError: (E) => {
              u.error(E);
            },
          }),
          d
        );
      }),
      (this.checkSpace = async (a) => {
        if (!a.knowledgeBaseId) return;
        const l =
          await this.userSpaceService.checkShareKnowledgeHasSpaceByMediaType(
            a.knowledgeBaseId,
            a.type,
            a.fileSize,
          );
        if (l === Se.NoSpace)
          return (
            this.logger.info(`当前知识库显示剩余空间不足：${l}`, Pn.tag),
            new xe("当前知识库剩余空间不足")
          );
        if (l === Se.Error)
          return (
            this.logger.error(`当前知识库查询容量失败：${l}`, Pn.tag),
            new xe("上传失败，请稍后重试")
          );
      });
  }
  createInitialFileMedia(e, t) {
    const {
      type: r,
      contentType: s = "",
      fileTitle: n,
      fileSize: i,
      mediaFrom: o,
      originalMediaId: a,
      knowledgeDestType: l,
      knowledgeBaseId: c,
      folderId: u,
      currentPath: d,
    } = t;
    return this.fileMediaRepo.addFileMedia({
      id: e,
      mediaId: "",
      mediaType: r,
      status: Y.Init,
      knowledgeBaseId: c,
      folderId: u,
      extraInfo: {
        contentType: s,
        createTime: Date.now(),
        fileName: n,
        fileSize: i,
        mediaFrom: o,
        originalMediaId: a,
        knowledgeDestType: l,
        currentPath: d,
      },
    });
  }
  handleUploadStatus(e, t) {
    return t.pipe(
      to(({ status: r, progress: s }) => {
        switch (r) {
          case ge.Waiting:
          case ge.Paused: {
            this.updateMediaUseCase.execute(e, { status: i0[r] });
            return;
          }
          case ge.Uploading: {
            this.updateMediaUseCase.execute(e, {
              status: Y.Uploading,
              extraInfo: { progress: s },
            });
            return;
          }
          case ge.Error: {
            this.updateMediaUseCase.execute(e, {
              status: Y.UploadError,
              extraInfo: { progress: 0 },
            });
            return;
          }
          case ge.Finish: {
            this.updateMediaUseCase.execute(e, { status: Y.WaitParse });
            return;
          }
        }
      }),
    );
  }
};
Pn.tag = "AddUploadMediaUseCase";
Pn = vA(
  [
    S(),
    zr(0, g(vt)),
    zr(1, g(_s)),
    zr(2, g(Hl)),
    zr(3, g(Yn)),
    zr(4, g(gg)),
    zr(5, g(Jp)),
    zr(6, g(ce)),
  ],
  Pn,
);
var wA = Object.defineProperty,
  mA = Object.getOwnPropertyDescriptor,
  SA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? mA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && wA(t, r, n), n;
  },
  qr = (e, t) => (r, s) => t(r, s, e);
let Dn = class {
  constructor(e, t, r, s, n, i, o) {
    (this.importFileMediaRepository = e),
      (this.uploadManagerService = t),
      (this.userSpaceService = r),
      (this.updateMediaUseCase = s),
      (this.uploadApi = n),
      (this.mediaService = i),
      (this.logger = o),
      (this.execute = (a, { fileId: l, file: c, extraInfo: u }) => (
        this.createInitialFileMedia(a, l, u),
        this.uploadManagerService.addUploadTask(l, async () =>
          this.createUploadTask(a, l, u, c),
        ),
        this.handleUploadStatus(
          l,
          this.uploadManagerService.getUploadStatusObservable(l),
        )
      )),
      (this.createUploadTask = async (a, l, c, u) => {
        const d = new Ne(),
          f = {
            uploadObserver: d.asObservable(),
            cancelUpload: () => this.uploadApi.cancelUpload(),
            pauseUpload: () => this.uploadApi.pauseUpload(),
            resumeUpload: () => this.uploadApi.resumeUpload(),
          };
        if (a === Ki.KnowledgeBase) {
          const E = await this.checkSpace(c);
          if (E instanceof xe)
            return (
              d.error(E.message),
              this.importFileMediaRepository.updateImportFileMedia(l, {
                extraInfo: { errorReason: E.message },
              }),
              null
            );
        }
        const h = await this.mediaService.createFileMedia(c);
        if (!(h != null && h.mediaId) || !h) return d.error("上传失败"), null;
        const { filePath: p } = c,
          { mediaId: _, credentials: w } = h,
          { cosKey: m } = w;
        return (
          this.importFileMediaRepository.updateImportFileMedia(l, {
            mediaId: _,
            extraInfo: { cosKey: m },
          }),
          this.uploadApi.uploadFile({
            filePath: p,
            file: u,
            credentials: w,
            onProgress: (E) => {
              d.next({ type: Gs.Progress, data: E });
            },
            onCompleted: () => {
              d.complete();
            },
            onError: (E) => {
              d.error(E);
            },
          }),
          f
        );
      }),
      (this.checkSpace = async (a) => {
        const l =
          await this.userSpaceService.checkShareKnowledgeHasSpaceByMediaType(
            a.knowledgeBaseId,
            a.type,
            a.fileSize,
          );
        if (l === Se.NoSpace)
          return (
            this.logger.info(`当前知识库显示剩余空间不足：${l}`, Dn.tag),
            new xe("当前知识库剩余空间不足")
          );
        if (l === Se.Error)
          return (
            this.logger.error(`当前知识库查询容量失败：${l}`, Dn.tag),
            new xe("上传失败，请稍后重试")
          );
      });
  }
  createInitialFileMedia(e, t, r) {
    const {
      type: s,
      contentType: n = "",
      fileTitle: i,
      fileSize: o,
      originalMediaId: a,
      knowledgeDestType: l,
      knowledgeBaseId: c,
      folderId: u,
    } = r;
    return this.importFileMediaRepository.addImportFileMedia({
      id: t,
      mediaId: "",
      mediaType: s,
      mediaDest: e,
      status: it.Init,
      extraInfo: {
        contentType: n,
        createTime: Date.now(),
        fileName: i,
        fileSize: o,
        knowledgeBaseId: c,
        folderId: u,
        originalMediaId: a,
        knowledgeDestType: l,
      },
    });
  }
  handleUploadStatus(e, t) {
    return t.pipe(
      to(({ status: r, progress: s }) => {
        switch (r) {
          case ge.Uploading: {
            this.importFileMediaRepository.updateImportFileMedia(e, {
              status: it.Uploading,
              extraInfo: { progress: s },
            });
            return;
          }
          case ge.Error: {
            this.importFileMediaRepository.updateImportFileMedia(e, {
              status: it.UploadError,
              extraInfo: { progress: 0 },
            });
            return;
          }
          case ge.Finish: {
            this.importFileMediaRepository.updateImportFileMedia(e, {
              status: it.UploadFinish,
            });
            return;
          }
        }
      }),
    );
  }
};
Dn.tag = "AddUploadImportFileMediaUseCase";
Dn = SA(
  [
    S(),
    qr(0, g(tn)),
    qr(1, g(_s)),
    qr(2, g(Hl)),
    qr(3, g(Yn)),
    qr(4, g(gg)),
    qr(5, g(Jp)),
    qr(6, g(ce)),
  ],
  Dn,
);
var yA = Object.defineProperty,
  EA = Object.getOwnPropertyDescriptor,
  bA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? EA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && yA(t, r, n), n;
  },
  IA = (e, t) => (r, s) => t(r, s, e);
let fd = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e, t, r) {
    const s = await this.knowledgeService.addKnowledge({
      mediaType: T.WeChatArticle,
      title: r,
      webInfo: { sourcePath: e },
      knowledgeBaseId: t,
    });
    return s || new xe("加入知识库失败");
  }
};
fd = bA([S(), IA(0, g(Mt))], fd);
var AA = Object.defineProperty,
  OA = Object.getOwnPropertyDescriptor,
  PA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? OA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && AA(t, r, n), n;
  },
  DA = (e, t) => (r, s) => t(r, s, e);
let gd = class {
  constructor(e) {
    this.knowledgeService = e;
  }
  async execute(e, t, r) {
    const s = await this.knowledgeService.addKnowledge({
      mediaType: T.Web,
      title: r,
      webInfo: { sourcePath: e },
      knowledgeBaseId: t,
    });
    return s || new xe("加入知识库失败");
  }
};
gd = PA([S(), DA(0, g(Mt))], gd);
var TA = Object.defineProperty,
  CA = Object.getOwnPropertyDescriptor,
  xA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? CA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && TA(t, r, n), n;
  },
  pd = (e, t) => (r, s) => t(r, s, e);
let _d = class {
  constructor(e, t) {
    (this.fileMediaRepo = e),
      (this.uploadManagerService = t),
      (this.execute = (r) => {
        this.fileMediaRepo.removeFileMedia(r),
          this.uploadManagerService.cancelUpload(r);
      });
  }
};
_d = xA([S(), pd(0, g(vt)), pd(1, g(_s))], _d);
var RA = Object.defineProperty,
  MA = Object.getOwnPropertyDescriptor,
  LA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? MA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && RA(t, r, n), n;
  },
  vd = (e, t) => (r, s) => t(r, s, e);
let wd = class {
  constructor(e, t) {
    (this.fileMediaRepo = e),
      (this.uploadManagerService = t),
      (this.execute = (r) => {
        this.fileMediaRepo.updateFileMedia(r, { status: Y.UploadPause }),
          this.uploadManagerService.pauseUpload(r);
      });
  }
};
wd = LA([S(), vd(0, g(vt)), vd(1, g(_s))], wd);
var $A = Object.defineProperty,
  KA = Object.getOwnPropertyDescriptor,
  BA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? KA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && $A(t, r, n), n;
  },
  md = (e, t) => (r, s) => t(r, s, e);
let Sd = class {
  constructor(e, t) {
    (this.fileMediaRepo = e),
      (this.uploadManagerService = t),
      (this.execute = (r) => {
        this.fileMediaRepo.updateFileMedia(r, { status: Y.Uploading }),
          this.uploadManagerService.retryUpload(r);
      });
  }
};
Sd = BA([S(), md(0, g(vt)), md(1, g(_s))], Sd);
var UA = Object.defineProperty,
  NA = Object.getOwnPropertyDescriptor,
  FA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? NA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && UA(t, r, n), n;
  },
  yd = (e, t) => (r, s) => t(r, s, e);
let Ed = class {
  constructor(e, t) {
    (this.importFileMediaRepository = e),
      (this.uploadManagerService = t),
      (this.execute = (r) => {
        this.importFileMediaRepository.updateImportFileMedia(r, {
          status: it.Uploading,
        }),
          this.uploadManagerService.retryUpload(r);
      });
  }
};
Ed = FA([S(), yd(0, g(tn)), yd(1, g(_s))], Ed);
var kA = Object.defineProperty,
  jA = Object.getOwnPropertyDescriptor,
  GA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? jA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && kA(t, r, n), n;
  },
  bd = (e, t) => (r, s) => t(r, s, e);
let Id = class {
  constructor(e, t) {
    (this.fileMediaRepo = e),
      (this.uploadManagerService = t),
      (this.execute = (r) => {
        this.fileMediaRepo.updateFileMedia(r, { status: Y.Uploading }),
          this.uploadManagerService.resumeUpload(r);
      });
  }
};
Id = GA([S(), bd(0, g(vt)), bd(1, g(_s))], Id);
var WA = Object.defineProperty,
  VA = Object.getOwnPropertyDescriptor,
  HA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? VA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && WA(t, r, n), n;
  },
  zA = (e, t) => (r, s) => t(r, s, e);
let Ad = class {
  constructor(e) {
    (this.fileKnowledgeTransformService = e),
      (this.execute = (t) => this.fileKnowledgeTransformService.toKnowledge(t));
  }
};
Ad = HA([S(), zA(0, g(rn))], Ad);
var qA = Object.defineProperty,
  JA = Object.getOwnPropertyDescriptor,
  YA = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? JA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && qA(t, r, n), n;
  },
  QA = (e, t) => (r, s) => t(r, s, e);
let Od = class {
  constructor(e) {
    (this.fileMediaRepo = e),
      (this.execute = (t, r) => {
        this.fileMediaRepo.updateFileMedia(t, r);
      });
  }
};
Od = YA([S(), QA(0, g(vt))], Od);
var XA = Object.defineProperty,
  ZA = Object.getOwnPropertyDescriptor,
  eO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ZA(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && XA(t, r, n), n;
  },
  tO = (e, t) => (r, s) => t(r, s, e);
let Pd = class {
  constructor(e) {
    (this.fileKnowledgeTransformService = e),
      (this.execute = (t) => this.fileKnowledgeTransformService.toKnowledge(t));
  }
};
Pd = eO([S(), tO(0, g(rn))], Pd);
var rO = Object.defineProperty,
  sO = Object.getOwnPropertyDescriptor,
  nO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? sO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && rO(t, r, n), n;
  },
  Dd = (e, t) => (r, s) => t(r, s, e);
let Td = class {
  constructor(e, t) {
    (this.fileMediaRepo = e),
      (this.convertFileMediaToKnowledgeMediaUseCase = t),
      (this.execute = (r) => {
        const s = this.fileMediaRepo.getFileMedia(r);
        if (s) return this.convertFileMediaToKnowledgeMediaUseCase.execute(s);
      });
  }
};
Td = nO([S(), Dd(0, g(vt)), Dd(1, g(dA))], Td);
var iO = Object.defineProperty,
  oO = Object.getOwnPropertyDescriptor,
  aO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? oO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && iO(t, r, n), n;
  },
  Jo = (e, t) => (r, s) => t(r, s, e);
let Cd = class {
  constructor(e, t, r) {
    (this.convertFileIdToKnowledgeMediaUseCase = e),
      (this.knowledgeService = t),
      (this.updateMediaUseCase = r);
  }
  async execute(e, t = !0) {
    const r = this.convertFileIdToKnowledgeMediaUseCase.execute(e);
    if (!r) return new xe("加入知识库失败");
    const {
        mediaId: s = "",
        mediaType: n = T.Unknown,
        fileName: i,
        fileSize: o,
        cosKey: a,
        password: l,
        knowledgeBaseId: c,
        folderId: u,
      } = r,
      d = await this.knowledgeService.addKnowledge({
        mediaId: s,
        mediaType: n,
        fileInfo: { fileSize: o, cosKey: a, password: l },
        knowledgeBaseId: c,
        folderId: u,
        title: i,
        needParse: t,
      });
    if (!d)
      return (
        this.updateMediaUseCase.execute(e, { status: Y.UploadError }),
        new xe("加入知识库失败")
      );
    this.updateMediaUseCase.execute(e, { mediaId: d });
  }
};
Cd = aO([S(), Jo(0, g(rc)), Jo(1, g(Mt)), Jo(2, g(Yn))], Cd);
var lO = Object.defineProperty,
  cO = Object.getOwnPropertyDescriptor,
  uO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? cO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && lO(t, r, n), n;
  },
  dO = (e, t) => (r, s) => t(r, s, e);
let xd = class {
  constructor(e) {
    (this.fileKnowledgeTransformService = e),
      (this.execute = (t) =>
        this.fileKnowledgeTransformService.toKnowledgeMediaFromFileMedia(t));
  }
};
xd = uO([S(), dO(0, g(rn))], xd);
var hO = Object.defineProperty,
  fO = Object.getOwnPropertyDescriptor,
  gO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? fO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && hO(t, r, n), n;
  },
  pO = (e, t) => (r, s) => t(r, s, e);
let Rd = class {
  constructor(e) {
    (this.fileMediaRepo = e),
      (this.execute = (t) => this.fileMediaRepo.validateFileInfo(t));
  }
};
Rd = gO([S(), pO(0, g(vt))], Rd);
var _O = Object.defineProperty,
  vO = Object.getOwnPropertyDescriptor,
  wO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? vO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && _O(t, r, n), n;
  },
  mO = (e, t) => (r, s) => t(r, s, e);
let Md = class {
  constructor(e) {
    (this.importFileMediaRepository = e),
      (this.execute = (t) =>
        this.importFileMediaRepository.validateImportFileInfo(t));
  }
};
Md = wO([S(), mO(0, g(tn))], Md);
var SO = Object.defineProperty,
  yO = Object.getOwnPropertyDescriptor,
  EO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? yO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && SO(t, r, n), n;
  },
  on = (e, t) => (r, s) => t(r, s, e);
let Ld = class {
  constructor(e, t, r, s, n) {
    (this.fileMediaRepo = e),
      (this.convertFileIdToKnowledgeMediaUseCase = t),
      (this.addKnowledgeByFileIdUseCase = r),
      (this.replaceKnowledgeUseByFileIdUseCase = s),
      (this.logger = n),
      (this.tag = "FinishUploadFileUseCase"),
      (this.replaceKnowledge = async (i) =>
        this.replaceKnowledgeUseByFileIdUseCase.execute(i)),
      (this.addKnowledge = async (i) => {
        const o = await this.addKnowledgeByFileIdUseCase.execute(i);
        return o instanceof xe
          ? (this.logger.error(
              `加入知识库失败, err: ${o.message}, file media: ${JSON.stringify(this.fileMediaRepo.getFileMedia(i))}`,
              this.tag,
            ),
            null)
          : this.convertFileIdToKnowledgeMediaUseCase.execute(i) || null;
      });
  }
  async execute(e) {
    var s, n;
    const t =
      (n =
        (s = this.fileMediaRepo.getFileMedia(e)) == null
          ? void 0
          : s.extraInfo) == null
        ? void 0
        : n.knowledgeDestType;
    let r;
    return (
      t === ro.ReplaceKnowledge
        ? (r = await this.replaceKnowledge(e))
        : (r = await this.addKnowledge(e)),
      r ? (this.fileMediaRepo.removeFileMedia(e), r) : null
    );
  }
};
Ld = EO(
  [S(), on(0, g(vt)), on(1, g(rc)), on(2, g(uA)), on(3, g(gA)), on(4, g(ce))],
  Ld,
);
var bO = Object.defineProperty,
  IO = Object.getOwnPropertyDescriptor,
  AO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? IO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && bO(t, r, n), n;
  },
  OO = (e, t) => (r, s) => t(r, s, e);
let $d = class {
  constructor(e) {
    (this.fileKnowledgeTransformService = e),
      (this.execute = (t) =>
        this.fileKnowledgeTransformService.toKnowledgeMedia(t));
  }
};
$d = AO([S(), OO(0, g(rn))], $d);
var PO = Object.defineProperty,
  DO = Object.getOwnPropertyDescriptor,
  TO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? DO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && PO(t, r, n), n;
  },
  CO = (e, t) => (r, s) => t(r, s, e);
let Kd = class {
  constructor(e) {
    (this.fileKnowledgeTransformService = e),
      (this.execute = (t, r) =>
        this.fileKnowledgeTransformService.toKnowledgeFromUrl(t, r));
  }
};
Kd = TO([S(), CO(0, g(rn))], Kd);
var xO = Object.defineProperty,
  RO = Object.getOwnPropertyDescriptor,
  MO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? RO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && xO(t, r, n), n;
  },
  LO = (e, t) => (r, s) => t(r, s, e);
let Bd = class {
  constructor(e) {
    (this.fileMediaRepo = e),
      (this.execute = (t) => this.fileMediaRepo.getFileMedia(t));
  }
};
Bd = MO([S(), LO(0, g(vt))], Bd);
var $O = Object.defineProperty,
  KO = Object.getOwnPropertyDescriptor,
  BO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? KO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && $O(t, r, n), n;
  },
  UO = (e, t) => (r, s) => t(r, s, e);
let Ud = class {
  constructor(e) {
    (this.importFileMediaRepository = e),
      (this.execute = (t) =>
        this.importFileMediaRepository.getImportFileMedia(t));
  }
};
Ud = BO([S(), UO(0, g(tn))], Ud);
var NO = Object.defineProperty,
  FO = Object.getOwnPropertyDescriptor,
  kO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? FO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && NO(t, r, n), n;
  },
  Nd = (e, t) => (r, s) => t(r, s, e);
let $s = class {
  constructor(e, t) {
    (this.knowledgeService = e), (this.logger = t);
  }
  async execute(e, t, r) {
    const s = e.map((o) => ({
      name: o.extraInfo.fileTitle,
      mediaType: o.extraInfo.type,
    }));
    this.logger.info(
      `当前知识库检查重名：${t}, 检查重名个数：${s.length}`,
      $s.key,
    );
    const n = await this.knowledgeService.checkRepeatedNames({
      params: s,
      knowledgeBaseId: t,
      folderId: r,
    });
    if (!n || typeof n != "object" || !Object.keys(n).length)
      return (
        this.logger.error(
          `当前知识库检查重名失败 ${JSON.stringify(n)}`,
          $s.key,
        ),
        { unique: e, duplicate: [] }
      );
    const i = e.reduce(
      (o, a) => {
        const l = a.extraInfo.fileTitle,
          { isRepeated: c = !1, mediaId: u = "" } =
            (n == null ? void 0 : n[l]) || {};
        return c && u
          ? {
              ...o,
              duplicate: [
                ...o.duplicate,
                { ...a, extraInfo: { ...a.extraInfo, originalMediaId: u } },
              ],
            }
          : { ...o, unique: [...o.unique, a] };
      },
      { unique: [], duplicate: [] },
    );
    return (
      this.logger.info(
        `当前知识库检查重名：${t}, 不重复个数个数：${i.unique.length}, 重复个数：${i.duplicate.length}`,
        $s.key,
      ),
      i
    );
  }
};
$s.key = "CheckDuplicatedFilesNameUseCase";
$s = kO([S(), Nd(0, g(Mt)), Nd(1, g(ce))], $s);
var jO = Object.defineProperty,
  GO = Object.getOwnPropertyDescriptor,
  WO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? GO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && jO(t, r, n), n;
  },
  Fd = (e, t) => (r, s) => t(r, s, e);
let kd = class {
  constructor(e, t) {
    (this.fileMediaRepo = e), (this.knowledgeService = t);
  }
  async execute(e) {
    const t = this.fileMediaRepo.getFileMedia(e);
    if (!t) return null;
    const {
        mediaType: r,
        extraInfo: s = {},
        knowledgeBaseId: n,
        mediaId: i,
        folderId: o,
      } = t,
      {
        cosKey: a = "",
        fileName: l = "",
        fileSize: c = 0,
        contentType: u = "",
        password: d = "",
        progress: f = 0,
        originalMediaId: h = "",
      } = s,
      p = await this.knowledgeService.replaceKnowledge({
        originMediaId: h,
        knowledgeBaseId: n,
        folderId: o,
        replaceInfo: {
          mediaId: i,
          mediaType: r,
          fileInfo: { contentType: u, cosKey: a, fileName: l, fileSize: c },
        },
      });
    if (!p) return null;
    const { status: _ } = p;
    return {
      mediaId: i,
      mediaType: r,
      cosKey: a,
      fileId: e,
      fileName: l,
      fileSize: c,
      status: _,
      knowledgeBaseId: n,
      originalMediaId: h,
      knowledgeDestType: ro.ReplaceKnowledge,
      password: d,
      progress: f,
      folderId: o,
    };
  }
};
kd = WO([S(), Fd(0, g(vt)), Fd(1, g(Mt))], kd);
var VO = Object.defineProperty,
  HO = Object.getOwnPropertyDescriptor,
  zO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? HO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && VO(t, r, n), n;
  },
  jd = (e, t) => (r, s) => t(r, s, e);
let Gd = class {
  constructor(e, t) {
    (this.fileMediaRepo = e), (this.logger = t);
  }
  execute(e) {
    return e.filter(({ extraInfo: t }) => {
      const r = !this.fileMediaRepo.someFileMedia(
        ({ mediaType: s, extraInfo: n, folderId: i }) =>
          (n == null ? void 0 : n.fileName) === t.fileTitle &&
          s === t.type &&
          i === t.folderId,
      );
      return (
        r &&
          this.logger.info(
            `检测到用相同文件：uploading: ${JSON.stringify(t)}`,
            "FilterUploadingFileInfoUseCase",
          ),
        r
      );
    });
  }
};
Gd = zO([S(), jd(0, g(vt)), jd(1, g(ce))], Gd);
var qO = Object.defineProperty,
  JO = Object.getOwnPropertyDescriptor,
  YO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? JO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && qO(t, r, n), n;
  },
  ys = (e, t) => (r, s) => t(r, s, e);
let Wd = class {
  constructor(e, t, r, s, n) {
    (this.fileMediaRepo = e),
      (this.parseManagerService = t),
      (this.parseApiService = r),
      (this.parseConfig = s),
      (this.updatMediaUseCase = n),
      (this.createParseTask = (i) => {
        const o = new Ne(),
          a = { parseObserver: o.asObservable() },
          {
            mediaId: l = "",
            mediaType: c,
            fileSize: u,
            fileName: d,
            knowledgeBaseId: f,
          } = i,
          { url: h, method: p = "POST", headers: _ } = this.parseConfig;
        return (
          this.parseApiService.parseFile({
            url: h,
            method: p,
            header: _,
            data: {
              mediaId: l,
              mediaType: c,
              indexStorageType: Qs.INDEX_STORAGE_TYPE_LONG_TERM,
              mediaRawSize: Number(u),
              title: d,
              knowledgeBaseId: f,
            },
            onProgress: (w) => {
              o.next({ type: fs.Progress, data: w });
            },
            onCompleted: () => {
              o.complete();
            },
            onError: (w) => {
              o.error(w);
            },
          }),
          a
        );
      });
  }
  execute(e) {
    const { fileId: t = "" } = e;
    this.createInitialFileMedia(e);
    const r = this.parseManagerService.addParseTask(t, () =>
      this.createParseTask(e),
    );
    return this.handleUploadStatus(t, r);
  }
  createInitialFileMedia(e) {
    const {
      mediaType: t,
      fileSize: r,
      fileId: s,
      mediaId: n,
      fileName: i,
      knowledgeBaseId: o,
      folderId: a,
    } = e;
    return this.fileMediaRepo.addFileMedia({
      id: s,
      mediaId: n,
      mediaType: t,
      status: Y.WaitParse,
      knowledgeBaseId: o,
      folderId: a,
      extraInfo: {
        contentType: "",
        createTime: Date.now(),
        fileName: i,
        fileSize: r,
      },
    });
  }
  handleUploadStatus(e, t) {
    return t.pipe(
      to(({ status: r, progress: s }) => {
        switch (r) {
          case je.Waiting:
            this.updatMediaUseCase.execute(e, {
              status: Y.WaitParse,
              extraInfo: { progress: 0 },
            });
            return;
          case je.Parsing: {
            this.updatMediaUseCase.execute(e, {
              status: Y.Parsing,
              extraInfo: { progress: s },
            });
            return;
          }
          case je.Finish: {
            this.updatMediaUseCase.execute(e, {
              status: Y.Finish,
              extraInfo: { progress: 1 },
            });
            return;
          }
          case je.Error: {
            this.updatMediaUseCase.execute(e, {
              status: Y.ParsingError,
              extraInfo: { progress: 0 },
            });
            return;
          }
        }
      }),
    );
  }
};
Wd = YO(
  [
    S(),
    ys(0, g(vt)),
    ys(1, g(qp)),
    ys(2, g(uo)),
    ys(3, g(tc)),
    ys(3, up(L_, !1)),
    ys(4, g(Yn)),
  ],
  Wd,
);
var QO = Object.defineProperty,
  XO = Object.getOwnPropertyDescriptor,
  ZO = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? XO(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && QO(t, r, n), n;
  },
  Jr = (e, t) => (r, s) => t(r, s, e);
let Vd = class {
  constructor(e, t, r, s, n, i) {
    (this.fileMediaRepo = e),
      (this.parseManagerService = t),
      (this.parseApiService = r),
      (this.parseConfig = s),
      (this.updatMediaUseCase = n),
      (this.convertFileIdToKnowledgeMediaUseCase = i),
      (this.createParseTask = (o) => {
        const a = new Ne(),
          l = { parseObserver: a.asObservable() },
          {
            mediaId: c = "",
            cosKey: u,
            mediaType: d,
            fileSize: f,
            fileName: h,
          } = o,
          { url: p, method: _ = "POST", headers: w } = this.parseConfig;
        return (
          this.parseApiService.parseFile({
            url: p,
            method: _,
            header: w,
            data: {
              mediaId: c,
              mediaType: d,
              indexStorageType: Qs.Temporary,
              mediaRawSize: Number(f),
              title: h,
              rawBasicInfo: u,
            },
            onProgress: (m) => {
              a.next({ type: fs.Progress, data: m });
            },
            onCompleted: () => {
              a.complete();
            },
            onError: (m) => {
              a.error(m);
            },
          }),
          l
        );
      });
  }
  execute(e) {
    const { fileId: t = "" } = e;
    this.createInitialFileMedia(e);
    const r = this.parseManagerService.addParseTask(t, () =>
      this.createParseTask(e),
    );
    return this.handleUploadStatus(t, r);
  }
  createInitialFileMedia(e) {
    const {
      mediaType: t,
      fileSize: r,
      fileId: s,
      mediaId: n,
      fileName: i,
      knowledgeBaseId: o,
    } = e;
    return this.fileMediaRepo.addFileMedia({
      id: s,
      mediaId: n,
      mediaType: t,
      status: Y.WaitParse,
      knowledgeBaseId: o,
      extraInfo: {
        contentType: "",
        createTime: Date.now(),
        fileName: i,
        fileSize: r,
      },
    });
  }
  handleUploadStatus(e, t) {
    return t.pipe(
      to(({ status: r, progress: s }) => {
        switch (r) {
          case je.Waiting:
            this.updatMediaUseCase.execute(e, {
              status: Y.WaitParse,
              extraInfo: { progress: 0 },
            });
            return;
          case je.Parsing: {
            this.updatMediaUseCase.execute(e, {
              status: Y.Parsing,
              extraInfo: { progress: s },
            });
            return;
          }
          case je.Finish: {
            this.updatMediaUseCase.execute(e, {
              status: Y.Finish,
              extraInfo: { progress: 1 },
            });
            return;
          }
          case je.Error: {
            this.updatMediaUseCase.execute(e, {
              status: Y.ParsingError,
              extraInfo: { progress: 0 },
            });
            return;
          }
        }
      }),
    );
  }
};
Vd = ZO(
  [
    S(),
    Jr(0, g(vt)),
    Jr(1, g(qp)),
    Jr(2, g(uo)),
    Jr(3, g(tc)),
    Jr(3, up(L_, !0)),
    Jr(4, g(Yn)),
    Jr(5, g(rc)),
  ],
  Vd,
);
var eP = Object.defineProperty,
  tP = Object.getOwnPropertyDescriptor,
  rP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? tP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && eP(t, r, n), n;
  },
  _i = (e, t) => (r, s) => t(r, s, e);
let Hd = class {
  constructor(e, t, r, s) {
    (this.importFileMediaRepository = e),
      (this.getImportFileMediaUseCase = t),
      (this.knowledgeService = r),
      (this.parseApiService = s),
      (this.addKnowledge = async (n, i) => {
        const { mediaId: o = "", mediaType: a = T.Unknown, extraInfo: l } = i,
          {
            fileName: c = "",
            fileSize: u = 0,
            cosKey: d,
            knowledgeBaseId: f = "",
            folderId: h = "",
          } = l || {},
          p = await this.knowledgeService.addKnowledge({
            mediaId: o,
            mediaType: a,
            fileInfo: { fileSize: u, cosKey: d },
            knowledgeBaseId: f,
            folderId: h,
            title: c,
            needParse: !0,
          });
        if (!(p != null && p.mediaId))
          return (
            this.importFileMediaRepository.updateImportFileMedia(n, {
              status: it.ParseError,
            }),
            new xe("加入知识库失败")
          );
        this.importFileMediaRepository.updateImportFileMedia(n, {
          mediaId: p.mediaId,
          status: it.Parsing,
          extraInfo: { progress: 0 },
        });
      }),
      (this.replaceKnowledge = async (n, i) => {
        const { mediaId: o = "", mediaType: a = T.Unknown, extraInfo: l } = i,
          {
            fileName: c = "",
            fileSize: u = 0,
            cosKey: d,
            knowledgeBaseId: f = "",
            folderId: h = "",
            contentType: p = "",
            originalMediaId: _ = "",
          } = l || {},
          w = await this.knowledgeService.replaceKnowledge({
            replaceInfo: {
              mediaId: o,
              fileInfo: {
                fileSize: u,
                cosKey: d,
                fileName: c,
                contentType: p,
                lastModifiedTime: 0,
              },
              mediaType: a,
            },
            originMediaId: _,
            knowledgeBaseId: f,
            folderId: h,
          });
        if (!(w != null && w.mediaId))
          return (
            this.importFileMediaRepository.updateImportFileMedia(n, {
              status: it.ParseError,
            }),
            new xe("加入知识库失败")
          );
        this.importFileMediaRepository.updateImportFileMedia(n, {
          mediaId: w.mediaId,
          status: it.Parsing,
          extraInfo: { progress: 0 },
        });
      });
  }
  async execute(e) {
    const t = this.getImportFileMediaUseCase.execute(e);
    if (t)
      switch (t.mediaDest) {
        case Ki.Qa:
          return this.addParseQaMedia(e, t);
        case Ki.KnowledgeBase:
          return this.addParseKnowledgeMedia(e, t);
      }
  }
  async addParseKnowledgeMedia(e, t) {
    const { extraInfo: r } = t,
      { knowledgeDestType: s, originalMediaId: n } = r || {};
    return s === ro.ReplaceKnowledge && n
      ? this.replaceKnowledge(e, t)
      : this.addKnowledge(e, t);
  }
  async addParseQaMedia(e, t) {
    const { mediaId: r = "", mediaType: s = T.Unknown, extraInfo: n } = t,
      { fileName: i = "", fileSize: o, cosKey: a } = n || {};
    if (
      !(await this.parseApiService.emitParseFile({
        mediaId: r,
        mediaType: s,
        indexStorageType: Qs.Temporary,
        mediaRawSize: Number(o),
        title: i,
        rawBasicInfo: a,
      }))
    )
      return (
        this.importFileMediaRepository.updateImportFileMedia(e, {
          status: it.ParseError,
        }),
        new xe("发起解析失败")
      );
    this.importFileMediaRepository.updateImportFileMedia(e, {
      status: it.Parsing,
      extraInfo: { progress: 0 },
    });
  }
};
Hd = rP([S(), _i(0, g(tn)), _i(1, g(cA)), _i(2, g(mr)), _i(3, g(uo))], Hd);
var sP = Object.defineProperty,
  nP = Object.getOwnPropertyDescriptor,
  iP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? nP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && sP(t, r, n), n;
  },
  Yo = (e, t) => (r, s) => t(r, s, e);
let Tn = class {
  constructor(e, t, r) {
    (this.queryMediaProgressService = e),
      (this.importFileMediaRepository = t),
      (this.logger = r);
  }
  async execute(e, t) {
    var s;
    if (!e.length) return;
    this.logger.info(`找到解析中任务：${e.join(", ")}`, Tn.tag),
      (s = this.batchQueryAbortController) == null || s.abort();
    const { connection: r } = await this.queryMediaProgressService.query(e, {
      handleParseState: (n) => {
        this.logger.info(`收到解析状态事件：${JSON.stringify(n)}`, Tn.tag),
          n.forEach(({ mediaID: i, state: o }) => {
            const a = this.importFileMediaRepository.getFileIdByMediaId(i);
            this.importFileMediaRepository.updateImportFileMedia(a, {
              status: this.mediaStateToImportFileItemStatus(o),
            }),
              t(a);
          });
      },
      handleProgress: (n) => {
        n.forEach(({ mediaID: i, percent: o }) => {
          const a = this.importFileMediaRepository.getFileIdByMediaId(i);
          this.importFileMediaRepository.updateImportFileMedia(a, {
            status: it.Parsing,
            extraInfo: { progress: o },
          }),
            t(a);
        });
      },
      timeout: gr.SSE * 5,
    });
    this.batchQueryAbortController = r;
  }
  mediaStateToImportFileItemStatus(e) {
    switch (e) {
      case rt.MediaInit:
      case rt.MediaParsing:
        return it.Parsing;
      case rt.MediaParseSuccess:
        return it.ParseFinish;
      case rt.MediaParseError:
        return it.Error;
    }
  }
};
Tn.tag = "BatchCheckImportFileParsingProgressUseCase";
Tn = iP([S(), Yo(0, g(Vl)), Yo(1, g(tn)), Yo(2, g(ce))], Tn);
var oP = Object.defineProperty,
  aP = Object.getOwnPropertyDescriptor,
  lP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? aP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && oP(t, r, n), n;
  },
  zd = (e, t) => (r, s) => t(r, s, e);
let qd = class {
  constructor(e, t) {
    (this.addParseMediaUseCase = e), (this.fileKnowledgeTransformService = t);
  }
  execute(e) {
    return e
      .filter((s) => s.status === Y.Init)
      .map((s) => {
        const n = this.fileKnowledgeTransformService.toKnowledgeMedia(s);
        return {
          parserObservable: this.addParseMediaUseCase.execute(n),
          fileId: s.fileId || "",
        };
      });
  }
};
qd = lP([S(), zd(0, g(lA)), zd(1, g(rn))], qd);
var cP = Object.defineProperty,
  uP = Object.getOwnPropertyDescriptor,
  $_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? uP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && cP(t, r, n), n;
  },
  Jd = (e, t) => (r, s) => t(r, s, e);
let qa = class {
  constructor(e, t) {
    (this.intelligentAssistantHttpService = e), (this.logger = t);
  }
  async execute(e) {
    const t = await this.intelligentAssistantHttpService.getQaPermissions({
      knowledgeId: e,
    });
    return (
      this.logger.info(
        `GetQaPermissionUseCase, knowledgeBaseId: ${e}, hasQaPermission: ${t == null ? void 0 : t.hasQaPermission}`,
      ),
      !!(t != null && t.hasQaPermission)
    );
  }
};
$_([q({ fallbackValue: !0 })], qa.prototype, "execute", 1);
qa = $_([S(), Jd(0, g(Iy)), Jd(1, g(ce))], qa);
const dP = Symbol.for("GET_QA_PERMISSION_USE_CASE"),
  hP = Symbol.for("INIT_ADDABLE_KNOWLEDGE_BASE_LIST_USE_CASE"),
  fP = Symbol.for("LOAD_NEXT_ADDABLE_KNOWLEDGE_BASE_LIST_USE_CASE"),
  gP = Symbol.for("ADD_KNOWLEDGE_TO_KNOWLEDGE_BASE_USE_CASE"),
  pP = Symbol.for("DEL_KNOWLEDGE_FROM_KNOWLEDGE_BASE_USE_CASE"),
  _P = Symbol.for("UPLOAD_KNOWLEDGE_USE_CASE"),
  vP = Symbol.for("VALIDATE_FILE_USE_CASE"),
  wP = Symbol.for("REPLACE_FILE_KNOWLEDGE_TO_KNOWLEDGE_BASE_USE_CASE");
var mP = Object.defineProperty,
  SP = Object.getOwnPropertyDescriptor,
  yP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? SP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && mP(t, r, n), n;
  },
  Yd = (e, t) => (r, s) => t(r, s, e);
let Qd = class {
  constructor(e, t) {
    (this.repo = e), (this.addableKnowledgeBaseService = t);
  }
  async execute(e, t) {
    const { mediaType: r, key: s, fileName: n, fileSize: i } = e;
    this.repo.reset(),
      this.repo.updateAddableKnowledgeBaseList({
        knowledgeKey: s,
        mediaType: r,
        fileName: n,
        fileSize: i,
      });
    const o = await this.addableKnowledgeBaseService.getAddableKnowledgeList(
      { ...e, cursor: "" },
      t,
    );
    if (!o) return null;
    const { list: a } = o;
    return this.repo.appendAddableKnowledgeBaseList(a), o;
  }
};
Qd = yP([S(), Yd(0, g(Wp)), Yd(1, g(sn))], Qd);
var EP = Object.defineProperty,
  bP = Object.getOwnPropertyDescriptor,
  IP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? bP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && EP(t, r, n), n;
  },
  Qo = (e, t) => (r, s) => t(r, s, e);
let Xd = class {
  constructor(e, t, r) {
    (this.repo = e), (this.addableKnowledgeBaseService = t), (this.logger = r);
  }
  async execute(e) {
    const {
      knowledgeKey: t,
      mediaType: r,
      fileName: s,
      fileSize: n,
    } = this.repo.getCurrentRepo();
    this.logger.info(
      `加载下一页知识库列表：${JSON.stringify({ knowledgeKey: t, mediaType: r, fileName: s, fileSize: n, cursor: e })}`,
      "LoadNextAddableKnowledgeBaseListUseCase",
    );
    const i = await this.addableKnowledgeBaseService.getAddableKnowledgeList(
      { key: t, cursor: e, mediaType: r, fileName: s, fileSize: n },
      Ui.Active,
    );
    if (!i) return null;
    const { list: o, isEnd: a, nextCursor: l } = i;
    return {
      list: this.repo.appendAddableKnowledgeBaseList(o),
      isEnd: a,
      nextCursor: l,
    };
  }
};
Xd = IP([S(), Qo(0, g(Wp)), Qo(1, g(sn)), Qo(2, g(ce))], Xd);
var Jt = ((e) => (
    (e.UserSpaceShortage = "当前知识库剩余空间不足"),
    (e.CollectFail = "加入知识库失败"),
    (e.UnsupportedCollect = "当前资源类型不支持加入知识库"),
    e
  ))(Jt || {}),
  AP = Object.defineProperty,
  OP = Object.getOwnPropertyDescriptor,
  PP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? OP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && AP(t, r, n), n;
  },
  DP = (e, t) => (r, s) => t(r, s, e);
let Zd = class {
  constructor(e) {
    this.addableKnowledgeBaseService = e;
  }
  async execute(e) {
    const { knowledgeBaseId: t = "", replaceInfo: r } = e,
      { fileInfo: s, mediaType: n } = r || {},
      { fileSize: i } = s || {};
    if (n === T.Unknown) return new te(Jt.UnsupportedCollect);
    const o =
      await this.addableKnowledgeBaseService.checkShareKnowledgeHasSpaceByMediaType(
        t,
        n,
        i,
      );
    if (o !== Se.HasSpace)
      return new te(o === Se.NoSpace ? Jt.UserSpaceShortage : Jt.CollectFail);
    const a = await this.addableKnowledgeBaseService.replaceKnowledge(e);
    return a != null && a.mediaId ? null : new te(Jt.CollectFail);
  }
};
Zd = PP([S(), DP(0, g(sn))], Zd);
var TP = Object.defineProperty,
  CP = Object.getOwnPropertyDescriptor,
  xP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? CP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && TP(t, r, n), n;
  },
  RP = (e, t) => (r, s) => t(r, s, e);
let eh = class {
  constructor(e) {
    this.addableKnowledgeBaseService = e;
  }
  execute(e, t) {
    return this.addableKnowledgeBaseService.removeKnowledgeFromKnowledgeBase(
      e,
      t,
    );
  }
};
eh = xP([S(), RP(0, g(sn))], eh);
var MP = Object.defineProperty,
  LP = Object.getOwnPropertyDescriptor,
  $P = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? LP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && MP(t, r, n), n;
  },
  th = (e, t) => (r, s) => t(r, s, e);
let rh = class {
  constructor(e, t) {
    (this.addableKnowledgeBaseService = e), (this.uploadService = t);
  }
  async execute(e) {
    const { file: t, extraInfo: r } = e,
      {
        type: s,
        knowledgeBaseId: n,
        fileSize: i,
        fileTitle: o,
        lastModifiedTime: a,
        contentType: l = "",
      } = r;
    if (!t) return new te(gt.CreateMediaError);
    if (i === 0) return new te(gt.ZeroSizeFile);
    if (i >= Jw) return new te(gt.OversizeFile);
    const c =
      await this.addableKnowledgeBaseService.checkShareKnowledgeHasSpaceByMediaType(
        n,
        s,
        i,
      );
    if (c !== Se.HasSpace)
      return new te(
        c === Se.NoSpace ? gt.UserSpaceShortage : gt.UserSpaceError,
      );
    const u = {
        fileName: o,
        mediaType: s,
        lastModifiedTime: a,
        contentType: l,
        fileSize: i,
      },
      d = await this.addableKnowledgeBaseService.createFileMedia({
        ...u,
        knowledgeBaseId: n,
      });
    return d
      ? {
          uploader: this.uploadService.uploadByCustomConfig(t, d),
          uploadConfig: d,
          fileInfo: u,
        }
      : new te(gt.CreateMediaError);
  }
};
rh = $P([S(), th(0, g(sn)), th(1, g(fg))], rh);
var KP = Object.defineProperty,
  BP = Object.getOwnPropertyDescriptor,
  UP = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? BP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && KP(t, r, n), n;
  },
  NP = (e, t) => (r, s) => t(r, s, e);
let sh = class {
  constructor(e) {
    this.addableKnowledgeBaseService = e;
  }
  async execute(e) {
    const {
        mediaType: t = T.Unknown,
        knowledgeBaseId: r = "",
        fileInfo: s,
      } = e,
      { fileSize: n = 1 / 0 } = s || {};
    if (t === T.Unknown) return new te(Jt.UnsupportedCollect);
    const i =
      await this.addableKnowledgeBaseService.checkShareKnowledgeHasSpaceByMediaType(
        r,
        t,
        n,
      );
    return i !== Se.HasSpace
      ? new te(i === Se.NoSpace ? Jt.UserSpaceShortage : Jt.CollectFail)
      : (await this.addableKnowledgeBaseService.addKnowledgeToKnowledgeBase(e))
        ? null
        : new te(Jt.CollectFail);
  }
};
sh = UP([S(), NP(0, g(sn))], sh);
var FP = Object.defineProperty,
  kP = Object.getOwnPropertyDescriptor,
  K_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? kP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && FP(t, r, n), n;
  },
  jP = (e, t) => (r, s) => t(r, s, e);
let Ja = class {
  constructor(e) {
    this.knowledgeMatrixManageService = e;
  }
  async execute(e) {
    return await this.knowledgeMatrixManageService.getPublishedKnowledgeBaseList(
      e,
    );
  }
};
K_([q({ fallbackValue: null })], Ja.prototype, "execute", 1);
Ja = K_([S(), jP(0, g(ho))], Ja);
var GP = Object.defineProperty,
  WP = Object.getOwnPropertyDescriptor,
  B_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? WP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && GP(t, r, n), n;
  },
  VP = (e, t) => (r, s) => t(r, s, e);
let Ya = class {
  constructor(e) {
    this.knowledgeMatrixManageService = e;
  }
  execute(e) {
    return this.knowledgeMatrixManageService.getHomePage(e);
  }
};
B_([q({ fallbackValue: null })], Ya.prototype, "execute", 1);
Ya = B_([S(), VP(0, g(ho))], Ya);
var HP = Object.defineProperty,
  zP = Object.getOwnPropertyDescriptor,
  U_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? zP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && HP(t, r, n), n;
  },
  qP = (e, t) => (r, s) => t(r, s, e);
let Qa = class {
  constructor(e) {
    this.knowledgeMatrixManageService = e;
  }
  execute(e) {
    return this.knowledgeMatrixManageService.getDiscoveryKnowledgeDataOverview(
      e,
    );
  }
};
U_([q({ fallbackValue: null })], Qa.prototype, "execute", 1);
Qa = U_([S(), qP(0, g(ho))], Qa);
var JP = Object.defineProperty,
  YP = Object.getOwnPropertyDescriptor,
  N_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? YP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && JP(t, r, n), n;
  },
  QP = (e, t) => (r, s) => t(r, s, e);
let Xa = class {
  constructor(e) {
    this.knowledgeMatrixManageService = e;
  }
  execute(e) {
    return this.knowledgeMatrixManageService.getDiscoveryKnowledgeDataVariationTrend(
      e,
    );
  }
};
N_([q({ fallbackValue: null })], Xa.prototype, "execute", 1);
Xa = N_([S(), QP(0, g(ho))], Xa);
var XP = Object.defineProperty,
  ZP = Object.getOwnPropertyDescriptor,
  eD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ZP(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && XP(t, r, n), n;
  },
  tD = (e, t) => (r, s) => t(r, s, e);
let nh = class {
  constructor(e) {
    (this.registerKnowledgeMatrixService = e),
      (this.execute = async (t) =>
        this.registerKnowledgeMatrixService.activateKnowledgeMatrix(t));
  }
};
nh = eD([S(), tD(0, g(fo))], nh);
var rD = Object.defineProperty,
  sD = Object.getOwnPropertyDescriptor,
  nD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? sD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && rD(t, r, n), n;
  },
  iD = (e, t) => (r, s) => t(r, s, e);
let ih = class {
  constructor(e) {
    (this.registerKnowledgeMatrixService = e),
      (this.execute = (t) =>
        this.registerKnowledgeMatrixService.preregisterKnowledgeMatrix(t));
  }
};
ih = nD([S(), iD(0, g(fo))], ih);
var oD = Object.defineProperty,
  aD = Object.getOwnPropertyDescriptor,
  lD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? aD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && oD(t, r, n), n;
  },
  cD = (e, t) => (r, s) => t(r, s, e);
let oh = class {
  constructor(e) {
    (this.registerKnowledgeMatrixService = e),
      (this.execute = async (t) =>
        this.registerKnowledgeMatrixService.sendVerifyCode(t));
  }
};
oh = lD([S(), cD(0, g(fo))], oh);
var uD = Object.defineProperty,
  dD = Object.getOwnPropertyDescriptor,
  hD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? dD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && uD(t, r, n), n;
  },
  fD = (e, t) => (r, s) => t(r, s, e);
let ah = class {
  constructor(e) {
    (this.registerKnowledgeMatrixService = e),
      (this.execute = async (t) =>
        this.registerKnowledgeMatrixService.updateKnowledgeMatrixInfo(t));
  }
};
ah = hD([S(), fD(0, g(fo))], ah);
const gD = Symbol.for("GET_PUBLISHED_KNOWLEDGE_BASE_LIST_USECASE"),
  pD = Symbol.for("GET_KNOWLEDGE_MATRIX_HOME_PAGE_USECASE"),
  _D = Symbol.for("GET_KNOWLEDGE_MATRIX_TREND_CHART_DATA_USECASE"),
  vD = Symbol.for("GET_KNOWLEDGE_MATRIX_OVERVIEW_USECASE"),
  wD = Symbol.for("ACTIVATE_KNOWLEDGE_MATRIX_USECASE"),
  mD = Symbol.for("VERIFY_ACCOUNT_INFO_USECASE"),
  SD = Symbol.for("SEND_VERIFY_CODE_USE_CASE"),
  yD = Symbol.for("UPDATE_KNOWLEDGE_MATRIX_INFO_USECASE"),
  ED = Symbol.for("DELETE_KNOWLEDGE_TAG_USECASE"),
  bD = Symbol.for("RENAME_KNOWLEDGE_TAG_USECASE"),
  ID = Symbol.for("LOAD_KNOWLEDGE_TAG_USECASE");
var AD = Object.defineProperty,
  OD = Object.getOwnPropertyDescriptor,
  F_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? OD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && AD(t, r, n), n;
  },
  PD = (e, t) => (r, s) => t(r, s, e);
let Za = class {
  constructor(e) {
    this.knowledgeTagService = e;
  }
  async execute(e, t) {
    return await this.knowledgeTagService.delKnowledgeTags({
      knowledgeBaseId: e,
      tags: t,
    });
  }
};
F_([q({ fallbackValue: !1 })], Za.prototype, "execute", 1);
Za = F_([S(), PD(0, g(Wl))], Za);
var DD = Object.defineProperty,
  TD = Object.getOwnPropertyDescriptor,
  k_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? TD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && DD(t, r, n), n;
  },
  CD = (e, t) => (r, s) => t(r, s, e);
let el = class {
  constructor(e) {
    this.knowledgeTagService = e;
  }
  async execute({ knowledgeBaseId: e, originTag: t, newTag: r }) {
    return await this.knowledgeTagService.renameKnowledgeTag({
      knowledgeBaseId: e,
      originTag: t,
      newTag: r,
    });
  }
};
k_([q({ fallbackValue: !1 })], el.prototype, "execute", 1);
el = k_([S(), CD(0, g(Wl))], el);
var xD = Object.defineProperty,
  RD = Object.getOwnPropertyDescriptor,
  j_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? RD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && xD(t, r, n), n;
  },
  MD = (e, t) => (r, s) => t(r, s, e);
let tl = class {
  constructor(e) {
    this.knowledgeTagService = e;
  }
  async execute({ knowledgeBaseId: e, cursor: t, limit: r }) {
    return await this.knowledgeTagService.getKnowledgeTags({
      knowledgeBaseId: e,
      cursor: t,
      limit: r,
    });
  }
};
j_([q({ fallbackValue: !1 })], tl.prototype, "execute", 1);
tl = j_([S(), MD(0, g(Wl))], tl);
var LD = Object.defineProperty,
  $D = Object.getOwnPropertyDescriptor,
  G_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? $D(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && LD(t, r, n), n;
  },
  KD = (e, t) => (r, s) => t(r, s, e);
let rl = class {
  constructor(e) {
    this.folderListService = e;
  }
  async execute(e) {
    const t = await this.folderListService.getFolderList(e);
    return t || null;
  }
};
G_([q({ fallbackValue: null })], rl.prototype, "execute", 1);
rl = G_([S(), KD(0, g(a0))], rl);
const BD = Symbol.for("GET_FOLDER_LIST_USECASE"),
  UD = Symbol.for("KNOWLEDGE_BASE_STORE"),
  W_ = Symbol.for("KNOWLEDGE_BASE_REFRESH_ON"),
  Qn = Symbol.for("KNOWLEDGE_BASE_LIST_STORE"),
  V_ = Symbol.for("PUBLISHED_KNOWLEDGE_BASE_LIST_STORE"),
  ND = Symbol.for("ADDABLE_KNOWLEDGE_BASE_LIST_STORE"),
  sc = Symbol.for("KNOWLEDGE_MATRIX_HOME_PAGE_STORE");
var FD = Object.defineProperty,
  kD = Object.getOwnPropertyDescriptor,
  jD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? kD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && FD(t, r, n), n;
  },
  wt = (e, t) => (r, s) => t(r, s, e);
let lh = class {
  constructor(e, t, r, s, n, i, o, a, l, c, u, d) {
    var f;
    (this.store = e),
      (this.getKnowledgeBaseListGroupUseCase = t),
      (this.loadMoreKnowledgeBaseListUseCase = r),
      (this.addKnowledgeBaseToGroupUseCase = s),
      (this.getMyKnowledgeBaseUseCase = n),
      (this.updateKnowledgeBaseInGroupUseCase = i),
      (this.deleteKnowledgeBaseFromGroupUseCase = o),
      (this.getKnowledgeBaseByIdUseCase = a),
      (this.setKnowledgeListUsecase = l),
      (this.logger = c),
      (this.toast = u),
      (this.onKnowledgeBaseRefresh = d),
      (this.tag = "KnowledgeBaseListPresenter"),
      (this.load = async ({
        shareId: h = "",
        knowledgeBaseId: p,
        myKnowledgeBaseId: _,
      }) => {
        var R, ie;
        const w = this.store.getState().shareId,
          m = h || w;
        this.logger.info(
          `load params: shareId: ${h}, shareIdFromStore: ${w}, ${m ? "share" : "homepage"} list`,
          "KnowledgeBaseListPresenter.load",
        );
        const E = await this.getKnowledgeBaseListGroupUseCase.execute(_);
        if (
          (E ||
            (this.logger.error("知识库请求失败", this.tag),
            this.store.setLoadStatus(be.Error)),
          E instanceof te)
        ) {
          this.toast.error(E.message || "未知错误"),
            this.store.setLoadStatus(be.Error);
          return;
        }
        const { list: D, pageLimit: j, knowledgeListInfo: V } = E;
        if (
          (this.logger.info(`知识库列表：${JSON.stringify(D)}`, this.tag),
          !D.length)
        ) {
          this.logger.error("知识库列表为空", this.tag),
            this.store.setLoadStatus(be.Error);
          return;
        }
        if (
          (V && _ && this.setKnowledgeListUsecase.execute(_, _, V),
          this.store.setPageSize(j),
          !this.store.getState().focusKnowledgeBaseId)
        ) {
          let x = "";
          m ||
            (x =
              p ||
              (((ie = (R = D[0].list) == null ? void 0 : R[0]) == null
                ? void 0
                : ie.id) ??
                "")),
            x &&
              !m &&
              (this.logger.info(
                `首屏设置的knowledgeBaseId: ${x}`,
                "KnowledgeBaseListPresenter.load",
              ),
              this.store.setFocusKnowledgeBaseId(x));
        }
        return (
          this.store.updateGroupList(D), this.store.setLoadStatus(be.Success), E
        );
      }),
      (this.loadMore = async (h, p = 10) => {
        const _ = await this.loadMoreKnowledgeBaseListUseCase.execute(h, p);
        if (!(_ != null && _.length)) {
          this.logger.error("拉取知识库列表为空", this.tag);
          return;
        }
        this.store.updateGroupList(_);
      }),
      (this.switchShareId = (h) => {
        this.store.setShareId(h);
      }),
      (this.switchFocusKnowledgeBaseId = (h) => {
        this.logger.info(
          `切换知识库： ${this.store.getState().focusKnowledgeBaseId} -> ${h}`,
          this.tag,
        ),
          this.store.setFocusKnowledgeBaseId(h);
      }),
      (this.addKnowledgeBaseToGroup = (h, p, _ = !0) => {
        const w = this.addKnowledgeBaseToGroupUseCase.execute(h, p);
        this.logger.info(
          `知识库加入列表： ${JSON.stringify(p)}， type: ${h}`,
          this.tag,
        ),
          w &&
            (this.store.updateGroupList(w),
            _ && this.store.setFocusKnowledgeBaseId(p.id));
      }),
      (this.updateKnowledgeBaseInGroup = (h, p) => {
        this.logger.info(
          `更新知识库： ${JSON.stringify(p)}， type: ${h}`,
          this.tag,
        );
        const _ = this.updateKnowledgeBaseInGroupUseCase.execute(h, p);
        _ && this.store.updateGroupList(_);
      }),
      (this.deleteKnowledgeBaseFromGroup = (h, p) => {
        this.logger.info(
          `删除知识库： ${JSON.stringify(p)}， type: ${h}`,
          this.tag,
        );
        const _ = this.deleteKnowledgeBaseFromGroupUseCase.execute(h, p);
        if (!_) return;
        const w = this.getMyKnowledgeBaseId();
        this.store.updateGroupList(_), this.store.setFocusKnowledgeBaseId(w);
      }),
      (this.deleteKnowledgeBaseByIdFromGroup = (h) => {
        const p = this.getKnowledgeBaseByIdFromStore(h);
        if (!p) return;
        const _ = this.deleteKnowledgeBaseFromGroupUseCase.execute(p.type, p);
        if (_) {
          if (this.store.getState().focusKnowledgeBaseId === h) {
            const w = this.getMyKnowledgeBaseId();
            this.store.setFocusKnowledgeBaseId(w);
          }
          this.store.updateGroupList(_);
        }
      }),
      (this.getMyKnowledgeBase = () =>
        this.getMyKnowledgeBaseUseCase.execute()),
      (this.getMyKnowledgeBaseId = () => {
        var h;
        return ((h = this.getMyKnowledgeBase()) == null ? void 0 : h.id) || "";
      }),
      (this.getMyKnowledgeBaseName = () => {
        var h;
        return (
          ((h = this.getMyKnowledgeBase()) == null
            ? void 0
            : h.basicInfo.name) || ""
        );
      }),
      (this.resetToMyKnowledgeBase = () => {
        const h = this.getMyKnowledgeBaseUseCase.execute();
        h &&
          this.store.getState().focusKnowledgeBaseId !==
            (h == null ? void 0 : h.id) &&
          (this.logger.info(
            `切换到个人知识库: ${h == null ? void 0 : h.id}`,
            "ResetToMyKnowledgeBase",
          ),
          this.store.setFocusKnowledgeBaseId(h.id));
      }),
      (this.getKnowledgeBaseById = async (h) =>
        (await this.getKnowledgeBaseByIdUseCase.execute(h)) || null),
      (this.getKnowledgeBaseByIdFromStore = (h) => {
        const { groupList: p } = this.store.getState();
        return (
          p
            .map((w) => w.list)
            .flat()
            .find((w) => w.id === h) || null
        );
      }),
      (this.refreshKnowledgeBase = async (h) => {
        const p = await this.getKnowledgeBaseById(h);
        p && this.updateKnowledgeBaseInGroup(p.type, p);
      }),
      (this.getFocusKnowledgeBase = () => {
        const { focusKnowledgeBaseId: h } = this.store.getState();
        return this.getKnowledgeBaseByIdFromStore(h);
      }),
      (this.getIsPrivateKnowledgeBase = () => {
        var w;
        const h = this.getFocusKnowledgeBase();
        if (!h) return !1;
        const { userPermissionInfo: p } = h,
          { roleType: _ } = p || {};
        return _ === ye.Admin || _ === ye.Creator
          ? !1
          : !!(
              h.type !== Br.Mine &&
              (w = h.permissionInfo) != null &&
              w[vn.ForbidMemberAccessContent]
            );
      }),
      (f = this.onKnowledgeBaseRefresh) == null ||
        f.call(this, this.refreshKnowledgeBase);
  }
  get useStore() {
    return this.store.useStore;
  }
};
lh = jD(
  [
    S(),
    wt(0, g(Qn)),
    wt(1, g(GE)),
    wt(2, g(WE)),
    wt(3, g(Vp)),
    wt(4, g(ql)),
    wt(5, g(Hp)),
    wt(6, g(VE)),
    wt(7, g(Xl)),
    wt(8, g(o1)),
    wt(9, g(ce)),
    wt(10, g(so)),
    wt(11, g(W_)),
    wt(11, Vn()),
  ],
  lh,
);
const GD = {
  id: "",
  type: Br.Unknown,
  basicInfo: {
    name: "",
    coverUrl: "",
    description: "",
    recommendedQuestions: [],
    size: 0,
    creator: { nickname: "", avatarUrl: "" },
    coverAuditStatus: Ol.FieldAuditStatusUndefined,
    hasDeleted: !1,
  },
  permissionInfo: {},
  memberInfo: {},
  userPermissionInfo: {},
};
var WD = Object.defineProperty,
  VD = Object.getOwnPropertyDescriptor,
  HD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? VD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && WD(t, r, n), n;
  },
  Kt = (e, t) => (r, s) => t(r, s, e);
let ch = class {
  constructor(e, t, r, s, n, i, o, a, l, c) {
    (this.store = e),
      (this.knowledgeBaseListStore = t),
      (this.createKnowledgeBaseUseCase = r),
      (this.getKnowledgeBaseByIdUseCase = s),
      (this.updateBasicInfoUseCase = n),
      (this.addKnowledgeBaseToGroupUseCase = i),
      (this.updateKnowledgeBaseInGroupUseCase = o),
      (this.deleteKnowledgeBaseUseCase = a),
      (this.logger = l),
      (this.knowledgeBaseNotificationService = c),
      (this.getKnowledgeBase = async (u) => {
        const d = await this.getKnowledgeBaseByIdUseCase.execute(u);
        d && this.store.setState({ ...d });
      }),
      (this.createKnowledgeBase = async (u) => {
        var f, h;
        this.logger.info(`知识库创建请求：${JSON.stringify(u)}`);
        const d = await this.createKnowledgeBaseUseCase.execute(u);
        return (
          d instanceof te ||
            (this.store.setState({ ...d }),
            this.addKnowledgeBaseToGroup(d.type, d),
            (h =
              (f = this.knowledgeBaseNotificationService) == null
                ? void 0
                : f.addKnowledgeBase) == null || h.call(f, d)),
          d
        );
      }),
      (this.updateBasicInfo = async (u, d) => {
        const { id: f, type: h, basicInfo: p } = d,
          _ = Object.keys(u)
            .map((x) => Yw[x])
            .filter((x) => x !== void 0),
          w = { id: f, type: h, fields: _, ...u };
        this.logger.info(`知识库更新请求：${JSON.stringify(w)}`);
        const m = await this.updateBasicInfoUseCase.execute(w);
        if (m instanceof te) return m;
        const {
            name: E,
            description: D,
            coverUrl: j,
            coverAuditStatus: V,
            recommendedQuestions: R,
          } = m.basicInfo,
          ie = {
            ...d,
            basicInfo: {
              ...p,
              name: E,
              description: D,
              coverUrl: j,
              coverAuditStatus: V,
              recommendedQuestions: R,
            },
          };
        return (
          this.store.setState({ ...ie }),
          this.updateKnowledgeBaseInGroup(ie.type, ie),
          m
        );
      }),
      (this.deleteKnowledgeBase = async (u) => {
        const d = await this.deleteKnowledgeBaseUseCase.execute(u);
        return (
          this.logger.info(`删除知识库结果 ${d}`, "DeleteKnowledgeBaseStatus"),
          d
        );
      }),
      (this.updateKnowledgeBaseInGroup = (u, d) => {
        const f = this.updateKnowledgeBaseInGroupUseCase.execute(u, d);
        f &&
          (this.knowledgeBaseListStore.updateGroupList([...f]),
          this.knowledgeBaseListStore.setFocusKnowledgeBaseId(d.id));
      }),
      (this.addKnowledgeBaseToGroup = (u, d) => {
        const f = this.addKnowledgeBaseToGroupUseCase.execute(u, d);
        f &&
          (this.knowledgeBaseListStore.updateGroupList(f),
          this.knowledgeBaseListStore.setFocusKnowledgeBaseId(d.id));
      });
  }
  get useStore() {
    return this.store;
  }
};
ch = HD(
  [
    S(),
    Kt(0, g(UD)),
    Kt(1, g(Qn)),
    Kt(2, g(R0)),
    Kt(3, g(Xl)),
    Kt(4, g(L0)),
    Kt(5, g(Vp)),
    Kt(6, g(Hp)),
    Kt(7, g(K0)),
    Kt(8, g(ce)),
    Kt(9, Vn()),
    Kt(9, g(rm)),
  ],
  ch,
);
const zD = Symbol.for("KNOWLEDGE_BASE_MEMBER_STORE"),
  qD = {
    memberList: [],
    applyList: [],
    memberTotalCount: 0,
    memberTotalLimit: 0,
    applyTotalCount: 0,
  };
var JD = Object.defineProperty,
  YD = Object.getOwnPropertyDescriptor,
  QD = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? YD(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && JD(t, r, n), n;
  },
  Zt = (e, t) => (r, s) => t(r, s, e);
let uh = class {
  constructor(e, t, r, s, n, i, o, a, l, c) {
    (this.store = e),
      (this.reportService = t),
      (this.getKnowledgeBaseMemberByIdUseCase = r),
      (this.getKnowledgeBaseApplyByIdUseCase = s),
      (this.deleteKnowledgeBaseMemberByIdUseCase = n),
      (this.changeKnowledgeBaseMemberRoleByIdUseCase = i),
      (this.reviewKnowledgeBaseApplyByIdUseCase = o),
      (this.joinKnowledgeBaseUseCase = a),
      (this.leaveKnowledgeBaseUseCase = l),
      (this.logger = c),
      (this.key = "KnowledgeBaseMemberPresenter"),
      (this.lastMemberKnowledgeId = ""),
      (this.lastApplyKnowledgeId = ""),
      (this.currentMemberListCursor = 0),
      (this.currentApplyListCursor = 0),
      (this.memberListIsEnd = !1),
      (this.applyListIsEnd = !1),
      (this.numberLimit = 20),
      (this.resetStore = async () => {
        (this.lastMemberKnowledgeId = ""),
          (this.lastApplyKnowledgeId = ""),
          (this.currentMemberListCursor = 0),
          (this.currentApplyListCursor = 0),
          (this.memberListIsEnd = !1),
          (this.applyListIsEnd = !1),
          (this.numberLimit = 20),
          this.store.setState({ ...qD });
      }),
      (this.getFirstScreenKnowledgeBaseMember = async (u) => {
        this.resetMemberState(), await this.fetchKnowledgeBaseMembers(u);
      }),
      (this.loadMoreKnowledgeBaseMember = async (u) => {
        await this.fetchKnowledgeBaseMembers(u);
      }),
      (this.getFirstScreenKnowledgeBaseApply = async (u) => {
        this.resetApplyListState(), await this.fetchKnowledgeBaseApply(u);
      }),
      (this.loadMoreKnowledgeBaseApply = async (u) => {
        await this.fetchKnowledgeBaseApply(u);
      }),
      (this.deleteMember = async (u) => {
        const d = await this.deleteKnowledgeBaseMemberByIdUseCase.execute(u);
        if (
          (this.logger.info(Ue(u), `${this.key}.deleteKnowledgeBaseMember`),
          d === At.Success)
        ) {
          const { memberList: h, memberTotalCount: p } = this.store.getState(),
            [_] = u.memberIds || [];
          this.store.setState({
            memberList: h.filter((w) => w.uid !== _),
            memberTotalCount: p - 1,
          });
        }
        let f;
        return (
          d === At.Success
            ? (this.reportService.report(tt.MemberManageSuc, {
                knowledge_base_id: u.knowledgeBaseId,
                manage_type: St.RemoveMember,
              }),
              (f = { type: Ir.success, content: "已成功移除成员" }))
            : (this.reportService.report(tt.MemberManageFail, {
                knowledge_base_id: u.knowledgeBaseId,
                manage_type: St.RemoveMember,
                error_code: Is.Other,
              }),
              (f = { type: Ir.error, content: "移除失败，请稍后再试" })),
          f
        );
      }),
      (this.changeRole = async (u) => {
        const d =
          await this.changeKnowledgeBaseMemberRoleByIdUseCase.execute(u);
        this.logger.info(Ue(u), `${this.key}.changeKnowledgeBaseRole`);
        const { roleType: f, memberIds: h = [], knowledgeBaseId: p } = u || {};
        if (d.code === At.Success) {
          const { memberList: w } = this.store.getState(),
            [m] = h || [];
          this.store.setState({
            memberList: w.map((E) =>
              E.uid === m ? { ...E, roleType: f } : { ...E },
            ),
          });
        }
        let _;
        return (
          d.code === At.Success
            ? (this.reportService.report(tt.MemberManageSuc, {
                knowledge_base_id: p,
                manage_type: f === ye.User ? St.RemoveAdmin : St.AddAdmin,
              }),
              (_ = {
                type: Ir.success,
                content: `已成功设置为${f === ye.Admin ? "管理员" : "成员"}`,
              }))
            : (this.reportService.report(tt.MemberManageFail, {
                knowledge_base_id: p,
                manage_type: f === ye.User ? St.RemoveAdmin : St.AddAdmin,
                error_code:
                  d.code === At.ExceedMemberAdminCountLimit
                    ? Is.ExceedAdminLimit
                    : Is.Other,
              }),
              (_ = {
                type: Ir.error,
                content: d.msg || "修改用户权限失败，请稍后再试",
              })),
          _
        );
      }),
      (this.reviewApply = async (u) => {
        const d = await this.reviewKnowledgeBaseApplyByIdUseCase.execute(u);
        this.logger.info(Ue(u), `${this.key}.reviewKnowledgeBaseApply`);
        const { processAll: f, isReject: h, knowledgeBaseId: p } = u || {};
        if (d === At.Success) {
          const [w] = u.memberIds,
            { applyList: m, applyTotalCount: E } = this.store.getState();
          f
            ? this.store.setState({
                applyList: m.map((D) => ({
                  ...D,
                  applyStatus: h ? As.Reject : As.Agree,
                })),
                applyTotalCount: 0,
              })
            : this.store.setState({
                applyList: m.map((D) =>
                  D.uid === w
                    ? { ...D, applyStatus: h ? As.Reject : As.Agree }
                    : { ...D },
                ),
                applyTotalCount: E - 1,
              }),
            (this.memberListIsEnd = !1),
            (this.applyListIsEnd = !1),
            (this.currentMemberListCursor = 0),
            (this.currentApplyListCursor = 0),
            this.getFirstScreenKnowledgeBaseMember(p),
            this.getFirstScreenKnowledgeBaseApply(p);
        }
        let _;
        return (
          d === At.Success
            ? (this.reportService.report(tt.MemberManageSuc, {
                knowledge_base_id: p,
                manage_type: h ? St.RejectMemberApply : St.PassMemberApply,
              }),
              (_ = {
                type: Ir.success,
                content: h ? "已拒绝该用户加入" : "该成员已加入",
              }))
            : d === At.ExceedMemberCountLimit
              ? (this.reportService.report(tt.MemberManageFail, {
                  knowledge_base_id: p,
                  manage_type: h ? St.RejectMemberApply : St.PassMemberApply,
                  error_code: Is.ExceedMemberLimit,
                }),
                (_ = {
                  type: Ir.error,
                  content: "人数已达上限，请移除部分成员后再添加新成员",
                }))
              : (this.reportService.report(tt.MemberManageFail, {
                  knowledge_base_id: p,
                  manage_type: h ? St.RejectMemberApply : St.PassMemberApply,
                  error_code: Is.Other,
                }),
                (_ = {
                  type: Ir.error,
                  content: `${h ? "拒绝" : "同意"}失败，请稍后再试`,
                })),
          _
        );
      }),
      (this.joinKnowledgeBase = async (u, d) => {
        const f = await this.joinKnowledgeBaseUseCase.execute(u);
        return (
          this.logger.info(
            `加入知识库是否需要审批 ${f.needReview}`,
            `${this.key}.JoinKnowledgeBaseStatus`,
          ),
          f.code === At.Success &&
            d &&
            this.store.setState({ memberTotalCount: d }),
          f
        );
      }),
      (this.leaveKnowledgeBase = async (u) => {
        const d = await this.leaveKnowledgeBaseUseCase.execute(u);
        return (
          this.logger.info(
            `退出知识库是否成功 ${d}`,
            `${this.key}.LeaveKnowledgeBaseStatus`,
          ),
          d
        );
      }),
      (this.fetchKnowledgeBaseMembers = async (u) => {
        if (this.memberListIsEnd && u === this.lastMemberKnowledgeId) return;
        this.lastMemberKnowledgeId = u;
        const d = await this.getKnowledgeBaseMemberByIdUseCase.execute({
            knowledgeBaseId: u,
            start: this.currentMemberListCursor,
            limit: this.numberLimit,
          }),
          {
            memberList: f = [],
            memberTotalCount: h = 0,
            memberTotalLimit: p = 0,
          } = d || {};
        this.store.setState({
          memberList: [...this.store.getState().memberList, ...f].filter(
            (_, w, m) => w === m.findIndex((E) => E.uid === _.uid),
          ),
          memberTotalCount: h,
          memberTotalLimit: p,
        }),
          (this.currentMemberListCursor += f.length),
          (this.memberListIsEnd = f.length < this.numberLimit);
      }),
      (this.fetchKnowledgeBaseApply = async (u) => {
        if (this.applyListIsEnd && u === this.lastApplyKnowledgeId) return;
        this.lastApplyKnowledgeId = u;
        const d = await this.getKnowledgeBaseApplyByIdUseCase.execute({
            knowledgeBaseId: u,
            start: this.currentApplyListCursor,
            limit: this.numberLimit,
          }),
          { applyList: f = [], applyTotalCount: h = 0 } = d || {},
          p = f.map((_) => ({ ..._, applyStatus: As.waitCheck }));
        this.store.setState({
          applyList: [...this.store.getState().applyList, ...p].filter(
            (_, w, m) => w === m.findIndex((E) => E.uid === _.uid),
          ),
          applyTotalCount: h,
        }),
          (this.currentApplyListCursor =
            this.currentApplyListCursor + f.length),
          (this.applyListIsEnd = f.length < this.numberLimit);
      }),
      (this.resetMemberState = () => {
        (this.lastMemberKnowledgeId = ""),
          (this.currentMemberListCursor = 0),
          (this.memberListIsEnd = !1);
      }),
      (this.resetApplyListState = () => {
        (this.lastApplyKnowledgeId = ""),
          (this.currentApplyListCursor = 0),
          (this.applyListIsEnd = !1);
      });
  }
  get useStore() {
    return this.store;
  }
};
uh = QD(
  [
    S(),
    Zt(0, g(zD)),
    Zt(1, g(wr)),
    Zt(2, g(YI)),
    Zt(3, g(QI)),
    Zt(4, g(XI)),
    Zt(5, g(ZI)),
    Zt(6, g(eA)),
    Zt(7, g(tA)),
    Zt(8, g(rA)),
    Zt(9, g(ce)),
  ],
  uh,
);
const XD = Symbol.for("KNOWLEDGE_BASE_SHARE_STORE");
({
  ...GD,
  permissionInfo:
    (vn.ForbidMemberAccessContent + "",
    vn.RequiresApprovalForJoin + "",
    vn.AccessStatus + "",
    pg.Public),
});
var ZD = Object.defineProperty,
  eT = Object.getOwnPropertyDescriptor,
  tT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? eT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ZD(t, r, n), n;
  },
  an = (e, t) => (r, s) => t(r, s, e);
let dh = class {
  constructor(e, t, r, s, n) {
    (this.store = e),
      (this.updatePermissionInfoUseCase = t),
      (this.getKnowledgeBaseByIdUseCase = r),
      (this.GetKnowledgeBaseInfoFromShareIdUseCase = s),
      (this.getKnowledgeBaseShareInfoUseCase = n),
      (this.loadPermissionInfo = async (i) => {
        const o = await this.getKnowledgeBaseByIdUseCase.execute(i);
        o && this.store.setState({ knowledgeBaseInfo: o });
      }),
      (this.updatePermissionInfo = async (i, o) => {
        const { knowledgeBaseInfo: a } = this.store.getState(),
          { id: l, type: c, permissionInfo: u } = a,
          d = { id: l, type: c, ...u, ...i },
          f = await this.updatePermissionInfoUseCase.execute(d, o);
        return (
          f.data &&
            this.store.setState({
              knowledgeBaseInfo: {
                ...a,
                permissionInfo: { ...u, ...(f.data.permissionInfo || {}) },
              },
            }),
          f
        );
      }),
      (this.getKnowledgeBaseInfoFromShareId = async (i, o, a) =>
        await this.GetKnowledgeBaseInfoFromShareIdUseCase.execute(i, o, a)),
      (this.getShareInfo = async (i) => {
        const {
            knowledgeBaseInfo: { id: o },
          } = this.store.getState(),
          a = await this.getKnowledgeBaseShareInfoUseCase.execute(i || o);
        return a ? (this.store.setState({ shareInfo: a }), a) : null;
      });
  }
  get useStore() {
    return this.store;
  }
};
dh = tT(
  [S(), an(0, g(XD)), an(1, g(M0)), an(2, g(Xl)), an(3, g(d_)), an(4, g(cb))],
  dh,
);
const rT = Symbol.for("KNOWLEDGE_BASE_REPORT_STORE"),
  sT = {
    knowledgeBaseId: "",
    mediaId: "",
    extraInfo: { userInput: "", optionId: "" },
  };
var nT = Object.defineProperty,
  iT = Object.getOwnPropertyDescriptor,
  oT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? iT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && nT(t, r, n), n;
  },
  ln = (e, t) => (r, s) => t(r, s, e);
let hh = class {
  constructor(e, t, r, s, n) {
    (this.store = e),
      (this.getSecurityReportOptionsUsecase = t),
      (this.reportKnowledgeBaseUsecase = r),
      (this.reportMediaUsecase = s),
      (this.sendPersonalDataUsecase = n),
      (this.clearReportInfo = () => {
        this.store.setState({ reportInfo: sT });
      }),
      (this.getOptions = async () => {
        const i = await this.getSecurityReportOptionsUsecase.execute();
        this.store.setState({ options: i });
      }),
      (this.setReportMediaId = (i) => {
        const { reportInfo: o } = this.store.getState();
        this.store.setState({ reportInfo: { ...o, mediaId: i } });
      }),
      (this.setReportKnowledgeBaseId = (i) => {
        const { reportInfo: o } = this.store.getState();
        this.store.setState({ reportInfo: { ...o, knowledgeBaseId: i } });
      }),
      (this.setOptionId = (i) => {
        const { reportInfo: o } = this.store.getState();
        this.store.setState({
          reportInfo: { ...o, extraInfo: { ...o.extraInfo, optionId: i } },
        });
      }),
      (this.setUserInput = (i) => {
        const { reportInfo: o } = this.store.getState();
        this.store.setState({
          reportInfo: { ...o, extraInfo: { ...o.extraInfo, userInput: i } },
        });
      }),
      (this.reportKnowledgeBase = async () => {
        const { reportInfo: i } = this.store.getState();
        return await this.reportKnowledgeBaseUsecase.execute(
          i.knowledgeBaseId,
          i.extraInfo,
          ua.UserReport,
        );
      }),
      (this.reportMedia = async () => {
        const { reportInfo: i } = this.store.getState();
        return await this.reportMediaUsecase.execute(
          i.mediaId,
          i.knowledgeBaseId,
          i.extraInfo,
          ua.UserReport,
        );
      }),
      (this.sendPersonalData = async (i) =>
        await this.sendPersonalDataUsecase.execute(i));
  }
  get useStore() {
    return this.store;
  }
};
hh = oT(
  [S(), ln(0, g(rT)), ln(1, g(pI)), ln(2, g(_I)), ln(3, g(vI)), ln(4, g(mI))],
  hh,
);
const aT = Symbol.for("QA_PERMISSION_STORE");
var lT = Object.defineProperty,
  cT = Object.getOwnPropertyDescriptor,
  uT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? cT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && lT(t, r, n), n;
  },
  fh = (e, t) => (r, s) => t(r, s, e);
let gh = class {
  constructor(e, t) {
    (this.store = e),
      (this.getQaPermissionUseCase = t),
      (this.getAndUpdateQaPermission = async (r) => {
        const s = await this.getQaPermissionUseCase.execute(r);
        this.updateQaPermission(s);
      }),
      (this.updateQaPermission = (r) => {
        this.store.getState().hasQaPermission !== r &&
          this.store.setState({ hasQaPermission: r });
      });
  }
  get useStore() {
    return this.store;
  }
};
gh = uT([S(), fh(0, g(aT)), fh(1, g(dP))], gh);
const dT = Symbol.for("KNOWLEDGE_BASE_APPEAL_STORE"),
  hT = {
    source: 0,
    mediaId: "",
    knowledgebaseId: "",
    appealExtraInfo: { userInput: "" },
  };
var fT = Object.defineProperty,
  gT = Object.getOwnPropertyDescriptor,
  pT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? gT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && fT(t, r, n), n;
  },
  ph = (e, t) => (r, s) => t(r, s, e);
let _h = class {
  constructor(e, t) {
    (this.store = e),
      (this.appealKnowledgeUsecase = t),
      (this.clearAppealInfo = () => {
        this.store.setState({ appealInfo: hT });
      }),
      (this.setAppealMediaInfo = (r, s) => {
        const { appealInfo: n } = this.store.getState();
        this.store.setState({
          appealInfo: { ...n, mediaId: r, knowledgebaseId: s },
        });
      }),
      (this.setUserInput = (r) => {
        const { appealInfo: s } = this.store.getState();
        this.store.setState({
          appealInfo: { ...s, appealExtraInfo: { userInput: r } },
        });
      }),
      (this.appealMedia = async () => {
        const { appealInfo: r } = this.store.getState();
        return await this.appealKnowledgeUsecase.execute(r);
      });
  }
  get useStore() {
    return this.store;
  }
};
_h = pT([S(), ph(0, g(dT)), ph(1, g(wI))], _h);
var _T = Object.defineProperty,
  vT = Object.getOwnPropertyDescriptor,
  wT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? vT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && _T(t, r, n), n;
  },
  Tt = (e, t) => (r, s) => t(r, s, e);
let Ze = class {
  constructor(e, t, r, s, n, i, o, a, l, c, u, d) {
    (this.store = e),
      (this.initAddableKnowledgeBaseListUseCase = t),
      (this.loadNextAddableKnowledgeBaseListUseCase = r),
      (this.addKnowledgeToKnowledgeBaseUseCase = s),
      (this.delKnowledgeFromKnowledgeBaseUseCase = n),
      (this.checkDuplicatedFilesNamesUseCase = i),
      (this.updateDuplicatedFileInfoUseCase = o),
      (this.replaceFileKnowledgeToKnowledgeBaseUseCase = a),
      (this.uploadKnowledgeUseCase = l),
      (this.validFileUseCase = c),
      (this.dialogService = u),
      (this.logger = d),
      (this.cursor = ""),
      (this.loadFirstPage = async (f, h) => {
        const { status: p } = this.store.getState();
        if ([ht.Loading].includes(p)) return;
        (this.cursor = ""),
          this.store.updateAddableKnowledgeBaseList({ status: ht.Loading }),
          this.logger.info(
            `知识库列表加载首屏，当前params: ${JSON.stringify(f)}`,
            Ze.tag,
          );
        const _ = await this.initAddableKnowledgeBaseListUseCase.execute(f, h);
        if (!_) {
          this.logger.error(
            `知识库列表加载首屏失败：${JSON.stringify(f)}`,
            Ze.tag,
          ),
            this.store.updateAddableKnowledgeBaseList({ status: ht.Error });
          return;
        }
        const { isEnd: w, list: m, nextCursor: E } = _;
        this.logger.info(
          `知识库列表加载首屏成功: ${JSON.stringify({ isEnd: w, nextCursor: E })}`,
          Ze.tag,
        ),
          (this.cursor = E),
          this.store.updateAddableKnowledgeBaseList({
            list: m,
            status: w ? ht.End : ht.Ready,
          });
      }),
      (this.loadNextPage = async () => {
        const { status: f } = this.store.getState();
        if ([ht.End, ht.Error, ht.Loading].includes(f)) return;
        this.store.updateAddableKnowledgeBaseList({ status: ht.Loading });
        const h = await this.loadNextAddableKnowledgeBaseListUseCase.execute(
          this.cursor,
        );
        if (!h) {
          this.store.updateAddableKnowledgeBaseList({ status: ht.Error });
          return;
        }
        const { isEnd: p, list: _, nextCursor: w } = h;
        this.logger.info(
          `知识库列表加载下一屏成功: ${JSON.stringify({ isEnd: p, nextCursor: w })}`,
          Ze.tag,
        ),
          (this.cursor = w),
          this.store.updateAddableKnowledgeBaseList({
            list: _,
            status: p ? ht.End : ht.Ready,
          });
      }),
      (this.addKnowledge = async (f) => {
        if (!f.knowledgeBaseId)
          return (
            this.logger.error(
              `添加知识但是没带知识库id:  ${JSON.stringify(f)}`,
            ),
            new te(Jt.CollectFail)
          );
        const h = await this.addKnowledgeToKnowledgeBaseUseCase.execute(f);
        return h instanceof te
          ? (this.logger.error(
              `添加知识库失败:  ${h.message}, params: ${JSON.stringify(f)}`,
              Ze.tag,
            ),
            h)
          : (this.logger.info(
              `添加知识库成功 ${JSON.stringify({ ...f, rawExtInfo: void 0 })}`,
              Ze.tag,
            ),
            this.store.updateKnowledgeBaseStatus(f.knowledgeBaseId, {
              isAdded: !0,
              addedMediaId: f.mediaId,
            }),
            null);
      }),
      (this.replaceFileKnowledge = async (f) => {
        if (!f.knowledgeBaseId)
          return (
            this.logger.error(
              `添加知识但是没带知识库id:  ${JSON.stringify(f)}`,
            ),
            new te(Jt.CollectFail)
          );
        const h =
          await this.replaceFileKnowledgeToKnowledgeBaseUseCase.execute(f);
        return h instanceof te
          ? (this.logger.error(
              `替换知识失败:  ${h.message}, params: ${JSON.stringify(f)}`,
              Ze.tag,
            ),
            h)
          : (this.logger.info(
              `替换知识成功 ${JSON.stringify({ ...f })}`,
              Ze.tag,
            ),
            this.store.updateKnowledgeBaseStatus(f.knowledgeBaseId, {
              isAdded: !0,
              addedMediaId: f.replaceInfo.mediaId,
            }),
            null);
      }),
      (this.delKnowledge = async (f, h) => {
        const p = await this.delKnowledgeFromKnowledgeBaseUseCase.execute(f, h);
        return p
          ? (this.logger.info(
              `移除知识库成功: ${JSON.stringify({ mediaId: f, knowledgeBaseId: h })}`,
              Ze.tag,
            ),
            this.store.updateKnowledgeBaseStatus(h, { isAdded: !p }),
            p)
          : (this.logger.error(
              `移除知识库失败 mediaId: ${f}, knowledgeBaseId: ${h}`,
            ),
            !1);
      }),
      (this.startUpload = async (f) => {
        const { file: h, knowledgeBaseId: p, url: _ } = f,
          w = p,
          m = Pg(_, "media_title") || h.name,
          E = s0(h, p, w, { fileTitle: m });
        this.logger.info(`准备开始上传文件：${JSON.stringify(E)}`, Ze.tag);
        const D = this.validFileUseCase.execute(E.extraInfo);
        if (D instanceof te)
          return (
            this.logger.error(
              `上传知识库失败:  ${D.message}, params: ${JSON.stringify(f)}`,
              Ze.tag,
            ),
            D
          );
        const { duplicate: j } =
          await this.checkDuplicatedFilesNamesUseCase.execute([E], p, w);
        let V = E;
        if (j.length > 0) {
          this.logger.info(
            `发现重名文件 ${j.length} 个，等待用户选择结果`,
            Ze.tag,
          );
          const B = await this.dialogService.openDuplicateFilesDialog(
            j.map((C) => ({
              name: C.extraInfo.fileTitle,
              id: C.fileId,
              mediaType: C.extraInfo.type,
            })),
          );
          if (
            (this.logger.info(`用户选择重名结果：${B}`, Ze.tag),
            B === yn.Cancel)
          )
            return new te(gt.UserCancel);
          V = this.updateDuplicatedFileInfoUseCase.execute(j[0], B);
        }
        const R = await this.uploadKnowledgeUseCase.execute(V);
        if (R instanceof te)
          return (
            this.logger.error(
              `上传知识库失败:  ${R.message}, params: ${JSON.stringify(f)}`,
              Ze.tag,
            ),
            R
          );
        const { fileInfo: ie, uploadConfig: x, uploader: k } = R,
          { originalMediaId: H, knowledgeDestType: F } = V.extraInfo,
          ve = k.uploadObserver.pipe(kw(1), ug({ resetOnRefCountZero: !1 }));
        return {
          fileInfo: { ...ie, originalMediaId: H, knowledgeDestType: F },
          uploadConfig: x,
          uploader: { ...k, uploadObserver: ve },
        };
      });
  }
};
Ze.tag = "AddableKnowledgeBaseListPresenter";
Ze = wT(
  [
    S(),
    Tt(0, g(ND)),
    Tt(1, g(hP)),
    Tt(2, g(fP)),
    Tt(3, g(gP)),
    Tt(4, g(pP)),
    Tt(5, g(hA)),
    Tt(6, g(fA)),
    Tt(7, g(wP)),
    Tt(8, g(_P)),
    Tt(9, g(vP)),
    Tt(10, g(Xp)),
    Tt(11, g(ce)),
  ],
  Ze,
);
const H_ = Symbol.for("SEARCH_KNOWLEDGE_LIST_STORE_FACTORY");
var mT = Object.defineProperty,
  ST = Object.getOwnPropertyDescriptor,
  yT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ST(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && mT(t, r, n), n;
  },
  vi = (e, t) => (r, s) => t(r, s, e);
let vh = class {
  constructor(e, t, r, s) {
    (this.knowledgeBaseListStore = e),
      (this.getStore = t),
      (this.searchKnowledgeFromListUseCase = r),
      (this.logger = s),
      (this.pageCount = 20),
      (this.key = "SearchKnowledgeListPresenter"),
      (this.search = async () => {
        const {
            keyword: n,
            tag: i,
            knowledgeBaseId: o,
            searchTags: a,
          } = this.searchKnowLedgeListStore.getState(),
          { focusKnowledgeBaseId: l } = this.knowledgeBaseListStore.getState();
        this.logger.info(
          `发起搜索, knowledgeBaseId=${o}, params: ${JSON.stringify({ pageCount: this.pageCount, keyword: n, tag: vs(i), searchTags: JSON.stringify(a) })}`,
          `${this.key}.searchStart`,
        ),
          this.searchKnowLedgeListStore.setLoadStatus(be.Loading);
        const c = await this.searchKnowledgeFromList({
          cursor: "",
          pageSize: this.pageCount,
          query: n,
          tag: vs(i),
          knowledgeBaseId: o,
          comparedKnowledgeBaseId: l,
          searchTags: a.map((p) => vs(p)),
        });
        if (!c) {
          this.logger.error(
            `搜索失败, knowledgeBaseId=${o}`,
            `${this.key}.searchFailed`,
          ),
            this.searchKnowLedgeListStore.setLoadStatus(be.Error);
          return;
        }
        this.logger.info(
          `搜索成功, knowledgeBaseId=${o}`,
          `${this.key}.searchSucc`,
        );
        const { isEnd: u, list: d, cursor: f } = c,
          { tags: h = [] } = c;
        this.searchKnowLedgeListStore.setLoadStatus(be.Success),
          this.searchKnowLedgeListStore.resetSearchResult(),
          this.searchKnowLedgeListStore.appendSearchResult({
            isEnd: u,
            list: d,
            cursor: f,
            tags: h,
          });
      }),
      (this.searchMore = async () => {
        const {
          isEnd: n,
          cursor: i,
          keyword: o,
          tag: a,
          knowledgeBaseId: l,
          searchTags: c,
        } = this.searchKnowLedgeListStore.getState();
        if (n) return;
        const { focusKnowledgeBaseId: u } =
          this.knowledgeBaseListStore.useStore.getState();
        this.logger.info(
          `发起搜索更多, knowledgeBaseId=${l}, params: ${JSON.stringify({ pageCount: this.pageCount, keyword: o, tag: vs(a), searchTags: JSON.stringify(c) })}`,
          `${this.key}.searchMoreStart`,
        );
        const d = await this.searchKnowledgeFromList({
          cursor: i,
          pageSize: this.pageCount,
          query: o,
          tag: vs(a),
          knowledgeBaseId: l,
          comparedKnowledgeBaseId: u,
          searchTags: c.map((w) => vs(w)),
        });
        if (!d) {
          this.logger.error(
            `搜索更多失败, knowledgeBaseId=${l}`,
            `${this.key}.searchMoreFailed`,
          );
          return;
        }
        this.logger.info(
          `搜索更多成功, knowledgeBaseId=${l}`,
          `${this.key}.searchMoreSucc`,
        );
        const { isEnd: f, list: h, cursor: p } = d,
          { tags: _ = [] } = d;
        this.searchKnowLedgeListStore.appendSearchResult({
          isEnd: f,
          list: h,
          cursor: p,
          tags: _,
        });
      }),
      (this.reset = () => {
        this.searchKnowLedgeListStore.resetInput(),
          this.searchKnowLedgeListStore.resetSearchResult();
      }),
      (this.resetResult = () => {
        this.searchKnowLedgeListStore.resetSearchResult();
      }),
      (this.deleteSearchResult = (n) => {
        this.searchKnowLedgeListStore.deleteSearchResult(n);
      }),
      (this.updateSearchResultTags = (n) => {
        this.searchKnowLedgeListStore.updateSearchResults(
          n.map(({ mediaId: i, tags: o }) => ({
            mediaId: i,
            tags: o.map((a) => ({ tag: a, highlightTag: "" })),
          })),
        );
      });
  }
  init(e) {
    this.key = e;
  }
  get searchKnowLedgeListStore() {
    return this.getStore(this.key);
  }
  get useStore() {
    return this.searchKnowLedgeListStore.useStore();
  }
  async searchKnowledgeFromList(e) {
    const {
        cursor: t,
        pageSize: r,
        query: s,
        tag: n,
        knowledgeBaseId: i,
        comparedKnowledgeBaseId: o,
        searchTags: a,
      } = e,
      { searchId: l } = this.searchKnowLedgeListStore.getState();
    if (l) return null;
    const c = bn();
    this.searchKnowLedgeListStore.setSearchId(c);
    const u = await this.searchKnowledgeFromListUseCase.execute({
      cursor: t,
      pageSize: r,
      query: s,
      tag: n,
      knowledgeBaseId: i,
      comparedKnowledgeBaseId: o,
      policy: this.policy,
      searchTags: a,
    });
    return this.searchKnowLedgeListStore.getState().searchId !== c
      ? null
      : (this.searchKnowLedgeListStore.setSearchId(""), u);
  }
  get policy() {
    return this.key === Pl.ImportDialog
      ? ca.KnowledgeImportSearchPolicy
      : ca.DefaultSearchPolicy;
  }
};
vh = yT([S(), vi(0, g(Qn)), vi(1, g(H_)), vi(2, g(a1)), vi(3, g(ce))], vh);
wg.Keyword, Dl.Default, be.Loading;
const ET = Symbol.for("IMPORT_DIALOG_STORE");
var bT = Object.defineProperty,
  IT = Object.getOwnPropertyDescriptor,
  AT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? IT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && bT(t, r, n), n;
  },
  OT = (e, t) => (r, s) => t(r, s, e);
let wh = class {
  constructor(e) {
    (this.store = e),
      (this.closeImportDialog = () => {
        this.store.setState({ isDialogVisible: !1 });
      }),
      (this.openImportDialog = () => {
        this.store.setState({ isDialogVisible: !0 });
      });
  }
  get useStore() {
    return this.store;
  }
};
wh = AT([S(), OT(0, g(ET))], wh);
const PT = Symbol.for("SHARE_KNOWLEDGE_LIST_STORE");
var DT = Object.defineProperty,
  TT = Object.getOwnPropertyDescriptor,
  Qt = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? TT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && DT(t, r, n), n;
  },
  CT = (e, t) => (r, s) => t(r, s, e);
let Rt = class {
  constructor(e) {
    this.shareKnowledgeService = e;
  }
  async getKnowledgeList(e) {
    const {
        cursor: t,
        pageSize: r,
        knowledgeBaseId: s,
        needDefaultCover: n = !0,
        tags: i,
        sortType: o,
        comparedKnowledgeBaseId: a,
        folderId: l,
      } = e,
      c = {
        cursor: t,
        limit: r,
        knowledgeBaseId: s,
        needDefaultCover: n,
        filters:
          i != null && i.length
            ? [{ filterType: Al.TagsFilterType, tagsFilter: { tags: i } }]
            : void 0,
        sortType: o,
        comparedKnowledgeBaseId: a,
        folderId: l,
      },
      u = await this.shareKnowledgeService.getKnowledgeList(c);
    if (!u || u.knowledgeBaseStatus === se.Error)
      throw new Error(
        "[KnowledgeServiceImpl.getKnowledgeList] getKnowledgeList failed",
      );
    return this.formatKnowledgeListData(u);
  }
  async deleteKnowledge(e) {
    return this.shareKnowledgeService.delKnowledge(e);
  }
  async copyKnowledge(e) {
    return this.shareKnowledgeService.copyKnowledge(e);
  }
  async addKnowledge(e) {
    const t = await this.shareKnowledgeService.addKnowledge(e);
    return t != null && t.mediaId ? t.mediaId : "";
  }
  async getKnowledge(e) {
    return await this.shareKnowledgeService.getKnowledge(e);
  }
  async renameKnowledge(e) {
    const t = await this.shareKnowledgeService.renameKnowledge(e);
    return t instanceof te ? t : !0;
  }
  async getUnauthorizedOrUnLoginKnowledge() {
    const e = await this.shareKnowledgeService.getNoLoginKnowledgeList({
      cursor: "",
      limit: 10,
    });
    if (!e)
      throw new Error(
        "[KnowledgeServiceImpl.getKnowledgeList] getNoLoginKnowledgeList failed",
      );
    return this.formatKnowledgeListData(e);
  }
  updateTags(e) {
    return this.shareKnowledgeService.updateTags(e);
  }
  batchUpdateTags(e) {
    return this.shareKnowledgeService.batchUpdateTags(e);
  }
  async checkRepeatedNames(e) {
    return (await this.shareKnowledgeService.checkRepeatedName(e)).reduce(
      (r, s) => {
        const { name: n, isRepeated: i, mediaId: o } = s;
        return { ...r, [n]: { isRepeated: i, mediaId: o } };
      },
      {},
    );
  }
  async replaceKnowledge(e) {
    return this.shareKnowledgeService.replaceKnowledge(e);
  }
  formatKnowledgeListData(e) {
    const {
      nextCursor: t,
      isEnd: r,
      knowledgeList: s,
      totalSize: n,
      knowledgeBaseInfo: i,
      userPermissionInfo: o,
      currentPath: a,
    } = e;
    return {
      isEnd: r,
      cursor: t,
      list: s,
      totalSize: n,
      knowledgeBaseInfo: i,
      userPermissionInfo: o,
      currentPath: a,
    };
  }
};
Qt([q({ fallbackValue: null })], Rt.prototype, "getKnowledgeList", 1);
Qt([q({ fallbackValue: null })], Rt.prototype, "deleteKnowledge", 1);
Qt([q({ fallbackValue: null })], Rt.prototype, "copyKnowledge", 1);
Qt([q({ fallbackValue: null })], Rt.prototype, "addKnowledge", 1);
Qt([q({ fallbackValue: null })], Rt.prototype, "getKnowledge", 1);
Qt([q({ fallbackValue: !1 })], Rt.prototype, "renameKnowledge", 1);
Qt(
  [q({ fallbackValue: null })],
  Rt.prototype,
  "getUnauthorizedOrUnLoginKnowledge",
  1,
);
Qt([q({ fallbackValue: null })], Rt.prototype, "batchUpdateTags", 1);
Qt([q({ fallbackValue: [] })], Rt.prototype, "checkRepeatedNames", 1);
Qt([q({ fallbackValue: !1 })], Rt.prototype, "replaceKnowledge", 1);
Rt = Qt([S(), CT(0, g(mr))], Rt);
var xT = Object.defineProperty,
  RT = Object.getOwnPropertyDescriptor,
  MT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? RT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && xT(t, r, n), n;
  },
  LT = (e, t) => (r, s) => t(r, s, e);
let mh = class {
  constructor(e) {
    this.uploadService = e;
  }
  async upload(e) {
    return new Promise((t) => {
      const { uploadObserver: r } = this.uploadService.upload(e),
        s = r.subscribe({
          next: ({ type: n, data: i }) => {
            n === Gs.Completed && (t(i.cosUrl || i.cosKey), s.unsubscribe());
          },
          error: () => {
            t("");
          },
        });
    });
  }
};
mh = MT([S(), LT(0, g(fg))], mh);
var $T = Object.defineProperty,
  KT = Object.getOwnPropertyDescriptor,
  z_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? KT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && $T(t, r, n), n;
  },
  BT = (e, t) => (r, s) => t(r, s, e);
let sl = class {
  constructor(e) {
    this.shareKnowledgeService = e;
  }
  async searchKnowledgeList(e) {
    const t = await this.shareKnowledgeService.searchKnowledge(e);
    if (!t)
      throw new Error(
        "[SearchKnowledgeListServiceImpl.searchKnowledgeList] searchKnowledge failed",
      );
    return t;
  }
};
z_([q({ fallbackValue: null })], sl.prototype, "searchKnowledgeList", 1);
sl = z_([S(), BT(0, g(mr))], sl);
var UT = Object.defineProperty,
  NT = Object.getOwnPropertyDescriptor,
  FT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? NT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && UT(t, r, n), n;
  },
  kT = (e, t) => (r, s) => t(r, s, e);
let Sh = class {
  constructor(e) {
    this.shareKnowledgeBaseService = e;
  }
  getList(e) {
    return this.shareKnowledgeBaseService.getList({ params: e });
  }
  getHomePageData(e) {
    return this.shareKnowledgeBaseService.getHomePageData(e || {});
  }
};
Sh = FT([S(), kT(0, g(Rp))], Sh);
var jT = Object.defineProperty,
  GT = Object.getOwnPropertyDescriptor,
  WT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? GT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && jT(t, r, n), n;
  },
  VT = (e, t) => (r, s) => t(r, s, e);
let yh = class {
  constructor(e) {
    this.shareKnowledgeBaseService = e;
  }
  create(e) {
    var t, r;
    return this.shareKnowledgeBaseService.create({
      ...e,
      name: (t = e.name) == null ? void 0 : t.trim(),
      description: (r = e.description) == null ? void 0 : r.trim(),
    });
  }
  get(e) {
    return this.shareKnowledgeBaseService.getKnowledgeBase(e);
  }
  updateBasicInfo(e) {
    var t, r;
    return this.shareKnowledgeBaseService.updateBasicInfo({
      ...e,
      name: (t = e.name) == null ? void 0 : t.trim(),
      description: (r = e.description) == null ? void 0 : r.trim(),
    });
  }
  updatePermissionInfo(e) {
    return this.shareKnowledgeBaseService.updatePermissionInfo(e);
  }
  deleteKnowledgeBase(e) {
    return this.shareKnowledgeBaseService.deleteKnowledgeBase(e);
  }
};
yh = WT([S(), VT(0, g(Rp))], yh);
var HT = Object.defineProperty,
  zT = Object.getOwnPropertyDescriptor,
  qT = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? zT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && HT(t, r, n), n;
  },
  JT = (e, t) => (r, s) => t(r, s, e);
let Eh = class {
  constructor(e) {
    this.shareKnowledgeMemberService = e;
  }
  getMemberList(e) {
    return this.shareKnowledgeMemberService.getMemberList(e);
  }
  getApplyList(e) {
    return this.shareKnowledgeMemberService.getApplyList(e);
  }
  deleteMemberById(e) {
    return this.shareKnowledgeMemberService.deleteMember(e);
  }
  changeRoleById(e) {
    return this.shareKnowledgeMemberService.changeRole(e);
  }
  reviewApplyById(e) {
    return this.shareKnowledgeMemberService.reviewApply(e);
  }
  joinKnowledgeBase(e) {
    return this.shareKnowledgeMemberService.joinKnowledge({
      knowledgeBaseId: e,
    });
  }
  leaveKnowledgeBase(e) {
    return this.shareKnowledgeMemberService.leaveKnowledge({
      knowledgeBaseId: e,
    });
  }
};
Eh = qT([S(), JT(0, g(Sy))], Eh);
var YT = Object.defineProperty,
  QT = Object.getOwnPropertyDescriptor,
  Xn = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? QT(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && YT(t, r, n), n;
  },
  XT = (e, t) => (r, s) => t(r, s, e);
let zs = class {
  constructor(e) {
    this.securityReportService = e;
  }
  getOptions() {
    return this.securityReportService.getReportOptions({});
  }
  async reportKnowledgeBase(e) {
    return await this.securityReportService.reportKnowledgeBase(e);
  }
  async reportKnowledge(e) {
    return await this.securityReportService.reportKnowledge(e);
  }
  async appealKnowledge(e) {
    return await this.securityReportService.appealKnowledge(e);
  }
  async sendPersonalData(e) {
    return await this.securityReportService.sendPersonalData(e);
  }
};
Xn([q({ fallbackValue: null })], zs.prototype, "reportKnowledgeBase", 1);
Xn([q({ fallbackValue: null })], zs.prototype, "reportKnowledge", 1);
Xn([q({ fallbackValue: null })], zs.prototype, "appealKnowledge", 1);
Xn([q({ fallbackValue: null })], zs.prototype, "sendPersonalData", 1);
zs = Xn([S(), XT(0, g(yy))], zs);
var ZT = Object.defineProperty,
  eC = Object.getOwnPropertyDescriptor,
  tC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? eC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ZT(t, r, n), n;
  },
  rC = (e, t) => (r, s) => t(r, s, e);
let bh = class {
  constructor(e) {
    this.shareKnowledgeShareService = e;
  }
  async getKnowledgeBaseInfoFromShareId(e) {
    const t = await this.shareKnowledgeShareService.getShareInfo(e);
    return t instanceof te
      ? t
      : {
          knowledgeBaseInfo: t.knowledgeBaseInfo,
          isInApplyList: t.isInApplyList,
          list: t.knowledgeList,
          isEnd: t.isEnd,
          totalSize: t.totalSize,
          cursor: t.nextCursor,
        };
  }
  async generateShareInfo(e) {
    const t = await this.shareKnowledgeShareService.generateShareInfo({
      knowledgeId: e,
    });
    return t instanceof te
      ? { shareId: "", shareUrl: "" }
      : { shareId: t.shareId, shareUrl: t.shareUrl };
  }
  async getAppletJumpInfo(e) {
    var r, s, n, i, o, a;
    const t = await this.shareKnowledgeShareService.getAppletJumpInfo(e);
    return t instanceof te
      ? {
          appletJumpToken: {
            officalAccountAppid: "",
            noncestr: "",
            timestamp: 0,
            signature: "",
            appletAppid: "",
          },
          appletJumpUrl: { url: "" },
        }
      : {
          appletJumpToken: {
            officalAccountAppid:
              (r = t.appletJumpToken) == null ? void 0 : r.officalAccountAppid,
            noncestr: (s = t.appletJumpToken) == null ? void 0 : s.noncestr,
            timestamp: (n = t.appletJumpToken) == null ? void 0 : n.ts,
            signature: (i = t.appletJumpToken) == null ? void 0 : i.signature,
            appletAppid:
              (o = t.appletJumpToken) == null ? void 0 : o.appletOriginId,
          },
          appletJumpUrl: {
            url: (a = t.appletJumpUrl) == null ? void 0 : a.url,
          },
        };
  }
};
bh = tC([S(), rC(0, g(Ey))], bh);
var sC = Object.defineProperty,
  nC = Object.getOwnPropertyDescriptor,
  iC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? nC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && sC(t, r, n), n;
  },
  oC = (e, t) => (r, s) => t(r, s, e);
let Ih = class {
  constructor(e) {
    (this.fileManagerService = e),
      (this.createFileMedia = (t) => {
        const {
          type: r,
          fileSize: s,
          fileTitle: n,
          knowledgeBaseId: i,
          contentType: o,
        } = t;
        return this.fileManagerService.createMedia({
          mediaType: r,
          fileSize: s,
          fileName: n,
          knowledgeBaseId: i,
          contentType: o,
        });
      });
  }
};
Ih = iC([S(), oC(0, g(Dp))], Ih);
var aC = Object.defineProperty,
  lC = Object.getOwnPropertyDescriptor,
  cC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? lC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && aC(t, r, n), n;
  },
  Ah = (e, t) => (r, s) => t(r, s, e);
let Oh = class {
  constructor(e = 5) {
    (this.maxRunningSize = e),
      (this.uploadStatusSubject = new Ne()),
      (this.tasks = []),
      (this.runningTasks = new Set()),
      (this.fsm = new Ne()),
      (this.getRemindSpace = () =>
        Cg(
          this.maxRunningSize - this.runningTasks.size,
          0,
          this.maxRunningSize,
        )),
      (this.isTaskRunning = (t) => this.runningTasks.has(t)),
      (this.updateTask = (t, r) => {
        const s = this.getTaskIndex(t);
        s !== -1 && (this.tasks[s] = { ...this.tasks[s], ...r, id: t });
      }),
      (this.onReady = () => {
        const t = this.getRemindSpace();
        if (t === 0) return;
        this.tasks
          .filter((s) => s.status === ge.Waiting && !this.isTaskRunning(s.id))
          .slice(0, t)
          .forEach(({ id: s }) => {
            this.startUpload(s);
          });
      }),
      (this.bootstrapFsm = () => {
        this.fsm.pipe(Fw((t) => cg(500).pipe(Gn(() => t)))).subscribe((t) => {
          switch (t) {
            case "ready": {
              this.onReady();
              return;
            }
          }
        });
      }),
      (this.removeTask = (t) => {
        const r = this.getTaskIndex(t),
          s = this.tasks[r];
        r === -1 || !s || this.tasks.splice(r, 1);
      }),
      (this.getTaskIndex = (t) => this.tasks.findIndex((r) => r.id === t)),
      (this.getTask = (t) => {
        const r = this.getTaskIndex(t);
        if (r !== -1) return this.tasks[r];
      }),
      (this.handleErrorMessage = (t) =>
        typeof t == "string"
          ? t
          : t instanceof Error
            ? t.message
            : typeof t == "object"
              ? JSON.stringify(t)
              : String(t)),
      this.bootstrapFsm();
  }
  getUploadStatusObservable(e) {
    return this.uploadStatusSubject.pipe(Gr(({ id: t }) => t === e));
  }
  addUploadTask(e, t) {
    this.tasks.some((r) => r.id === e) ||
      (this.uploadStatusSubject.next({ id: e, status: ge.Waiting }),
      this.tasks.push({ id: e, executable: t, status: ge.Waiting }),
      this.fsm.next("ready"));
  }
  pauseUpload(e) {
    var r;
    this.runningTasks.delete(e);
    const t = this.getTask(e);
    t &&
      ((r = t == null ? void 0 : t.uploader) == null || r.pauseUpload(),
      this.updateTask(e, { status: ge.Paused }),
      this.uploadStatusSubject.next({ id: e, status: ge.Paused }),
      this.fsm.next("ready"));
  }
  cancelUpload(e) {
    var r;
    this.runningTasks.delete(e);
    const t = this.getTask(e);
    t &&
      ((r = t == null ? void 0 : t.uploader) == null || r.cancelUpload(),
      this.removeTask(e),
      this.uploadStatusSubject.next({ id: e, status: ge.Cancel }),
      this.fsm.next("ready"));
  }
  resumeUpload(e) {
    var s;
    if (this.getRemindSpace() === 0) {
      const n = xc(this.runningTasks, 0);
      n && this.pauseUpload(n);
    }
    this.runningTasks.add(e);
    const r = this.getTask(e);
    (s = r == null ? void 0 : r.uploader) == null || s.resumeUpload(),
      this.updateTask(e, { status: ge.Uploading }),
      this.uploadStatusSubject.next({ id: e, status: ge.Uploading });
  }
  retryUpload(e) {
    if (this.getRemindSpace() === 0) {
      const r = xc(this.runningTasks, 0);
      r && this.pauseUpload(r);
    }
    this.startUpload(e);
  }
  finishUploadTask(e) {
    this.uploadStatusSubject.next({ id: e, status: ge.Finish }),
      this.runningTasks.delete(e),
      this.removeTask(e);
  }
  async startUpload(e) {
    const t = this.tasks.find((s) => s.id === e);
    if (!t || t.status === ge.Uploading) return;
    this.runningTasks.add(e),
      this.updateTask(e, { status: ge.Uploading }),
      this.uploadStatusSubject.next({
        id: e,
        status: ge.Uploading,
        progress: 0,
      });
    const r = await t.executable();
    if (!r) {
      this.runningTasks.delete(e),
        this.updateTask(e, { status: ge.Error }),
        this.uploadStatusSubject.next({ id: e, status: ge.Error });
      return;
    }
    this.updateTask(e, { uploader: r }),
      r.uploadObserver.subscribe({
        next: ({ type: s, data: n }) => {
          switch (s) {
            case Gs.Progress: {
              const { percent: i } = n;
              this.uploadStatusSubject.next({
                id: e,
                status: ge.Uploading,
                progress: i,
              });
              return;
            }
            case Gs.Completed: {
              this.finishUploadTask(e);
              return;
            }
          }
        },
        complete: () => {
          this.finishUploadTask(e), this.fsm.next("ready");
        },
        error: (s) => {
          this.uploadStatusSubject.next({
            id: e,
            status: ge.Error,
            errMsg: this.handleErrorMessage(s),
          }),
            this.updateTask(e, { status: ge.Error }),
            this.runningTasks.delete(e),
            this.fsm.next("ready");
        },
      });
  }
};
Oh = cC([S(), Ah(0, g(qw)), Ah(0, Vn())], Oh);
var uC = Object.defineProperty,
  dC = Object.getOwnPropertyDescriptor,
  hC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? dC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && uC(t, r, n), n;
  };
let Cn = class {
  constructor() {
    (this.parseStatusSubject = new Ne()),
      (this.tasks = []),
      (this.runningTasks = new Set()),
      (this.fsm = new Ne()),
      (this.getRemindSpace = () =>
        Cg(Cn.maxRunningSize - this.runningTasks.size, 0, Cn.maxRunningSize)),
      (this.isTaskRunning = (e) => this.runningTasks.has(e)),
      (this.updateTask = (e, t) => {
        const r = this.getTaskIndex(e);
        r !== -1 && (this.tasks[r] = { ...this.tasks[r], ...t, id: e });
      }),
      (this.onReady = () => {
        const e = this.getRemindSpace();
        if (e === 0) return;
        this.tasks
          .filter((r) => r.status === je.Waiting && !this.isTaskRunning(r.id))
          .slice(0, e)
          .forEach(({ id: r }) => {
            this.startUpload(r);
          });
      }),
      (this.bootstrapFsm = () => {
        this.fsm.subscribe((e) => {
          switch (e) {
            case "Ready": {
              this.onReady();
              return;
            }
          }
        });
      }),
      (this.removeTask = (e) => {
        const t = this.getTaskIndex(e),
          r = this.tasks[t];
        t === -1 || !r || this.tasks.splice(t, 1);
      }),
      (this.getTaskIndex = (e) => this.tasks.findIndex((t) => t.id === e)),
      this.bootstrapFsm();
  }
  getParseTask(e) {
    return this.parseStatusSubject.pipe(Gr(({ id: t }) => t === e));
  }
  addParseTask(e, t) {
    return this.tasks.some((r) => r.id === e)
      ? this.getParseTask(e)
      : (this.parseStatusSubject.next({ id: e, status: je.Waiting }),
        this.tasks.push({ id: e, executable: t, status: je.Waiting }),
        this.fsm.next("Ready"),
        this.getParseTask(e));
  }
  finishUploadTask(e) {
    this.parseStatusSubject.next({ id: e, status: je.Finish }),
      this.runningTasks.delete(e),
      this.removeTask(e);
  }
  async startUpload(e) {
    const t = this.tasks.find((s) => s.id === e);
    if (!t || t.status === je.Parsing) return;
    this.updateTask(e, { status: je.Parsing });
    const r = await t.executable();
    this.runningTasks.add(e),
      this.updateTask(e, { parser: r }),
      this.parseStatusSubject.next({ id: e, status: je.Parsing, progress: 0 }),
      r.parseObserver.subscribe({
        next: ({ type: s, data: n }) => {
          switch (s) {
            case fs.Progress: {
              const { percent: i } = n;
              this.parseStatusSubject.next({
                id: e,
                status: je.Parsing,
                progress: i,
              });
              return;
            }
            case fs.Completed: {
              this.finishUploadTask(e);
              return;
            }
          }
        },
        complete: () => {
          this.finishUploadTask(e), this.fsm.next("Ready");
        },
        error: () => {
          this.parseStatusSubject.next({ id: e, status: je.Error, errMsg: "" }),
            this.updateTask(e, { status: je.Error }),
            this.fsm.next("Ready");
        },
      });
  }
};
Cn.maxRunningSize = 2;
Cn = hC([S()], Cn);
var fC = Object.defineProperty,
  gC = Object.getOwnPropertyDescriptor,
  pC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? gC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && fC(t, r, n), n;
  },
  wi = (e, t) => (r, s) => t(r, s, e);
let xn = class {
  constructor(e, t, r, s) {
    (this.cookieService = e),
      (this.logger = t),
      (this.sseService = r),
      (this.parseRouterHttpService = s),
      (this.abortController = null);
  }
  async parseFile(e) {
    const {
      url: t,
      method: r = "POST",
      header: s,
      data: n,
      onError: i,
      onCompleted: o,
      onProgress: a,
    } = e;
    this.logger.info(
      `Parse file for media id: ${n.mediaId}, mediaType: ${n.mediaType}`,
      xn.tag,
    );
    const l = await this.cookieService.getCookie();
    this.logger.info(`Parse SSE cookie: ${JSON.stringify(l)}`, xn.tag);
    const { observer: c, connection: u } = this.sseService.send({
      url: t,
      method: r,
      header: s,
      cookie: l,
      body: Ue(Pp(e.data)),
      jsonEvents: ["PROGRESS", "COMPLETE"],
      timeout: gr.SSE,
    });
    this.abortController = u;
    const d = c.subscribe({
      next: ({ eventName: f, data: h }) => {
        switch (f) {
          case "PROGRESS":
            a == null || a(Xs(h));
            break;
          case "COMPLETE":
            o == null || o({ code: h.code, msg: h.msg });
            break;
          case "FRONTEND_FINNISH":
            if (h.code === 0)
              return o == null ? void 0 : o({ code: h.code, msg: "" });
            i == null || i(new Error("解析失败"));
            break;
        }
      },
      complete: () => {
        d.unsubscribe(), u.abort();
      },
    });
  }
  cancelParse() {
    var e, t, r;
    (t = (e = this.abortController) == null ? void 0 : e.abort) == null ||
      t.call(e),
      (r = this.onCancel) == null || r.call(this, new Error("用户取消解析"));
  }
  async emitParseFile(e) {
    const { mediaId: t, indexStorageType: r, rawExtInfo: s } = e;
    return !!(await this.parseRouterHttpService.parseMedia({
      mediaId: t,
      indexStorageType: r,
      rawExtInfo: s,
    }));
  }
};
xn.tag = "ParserServiceImpl";
xn = pC([S(), wi(0, g(Rg)), wi(1, g(ce)), wi(2, g(Lg)), wi(3, g(LE))], xn);
var _C = Object.defineProperty,
  vC = Object.getOwnPropertyDescriptor,
  wC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? vC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && _C(t, r, n), n;
  },
  mC = (e, t) => (r, s) => t(r, s, e);
let Ph = class {
  constructor(e) {
    this.parseApi = e;
  }
  parse(e) {
    return {
      parseObserver: new ut((r) => {
        this.parseApi.parseFile({
          data: e,
          onProgress: (s) => {
            r.next({ type: fs.Progress, data: s });
          },
          onCompleted: (s) => {
            r.next({ type: fs.Completed, data: s }), r.complete();
          },
          onError: (s) => {
            r.error(s ?? new Error("parse error"));
          },
        });
      }),
      cancelParse: () => this.parseApi.cancelParse(),
    };
  }
};
Ph = wC([S(), mC(0, g(uo))], Ph);
var SC = Object.defineProperty,
  yC = Object.getOwnPropertyDescriptor,
  EC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? yC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && SC(t, r, n), n;
  },
  Dh = (e, t) => (r, s) => t(r, s, e);
let Th = class {
  constructor(e, t) {
    (this.urlParamsService = e), (this.openKnowledgeService = t);
  }
  open({ mediaId: e = "" }) {
    const { knowledgeBaseId: t = "" } =
      this.urlParamsService.getURLParams() || {};
    this.openKnowledgeService.openKnowledgeMedia({
      mediaId: e,
      knowledgeBaseId: t,
    });
  }
};
Th = EC([S(), Dh(0, g(go)), Dh(1, g(by))], Th);
var bC = Object.defineProperty,
  IC = Object.getOwnPropertyDescriptor,
  AC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? IC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && bC(t, r, n), n;
  },
  mi = (e, t) => (r, s) => t(r, s, e);
let Ch = class {
  constructor(t, r, s, n) {
    (this.shareKnowledgeService = t),
      (this.readerService = r),
      (this.userSpaceManager = s),
      (this.fileManager = n),
      (this.getAddableKnowledgeList = async (i, o) => {
        const { mediaType: a, cursor: l, limit: c } = i,
          u = {
            limit: c || 20,
            cursor: l,
            mediaType: a,
            supportTypes: [Br.Mine, Br.Created, Br.Joined],
          },
          d = await this.readerService.getAddableKnowledgeBaseList(
            { ...u, ...this.getKnowledgeKeyInfo(i) },
            o,
          );
        if (!d) return null;
        const {
          addableKnowledgeBaseList: f = [],
          nextCursor: h = "",
          isEnd: p = !0,
        } = d;
        return { isEnd: p, nextCursor: h, list: f };
      }),
      (this.addKnowledgeToKnowledgeBase = async (i) => {
        const o = await this.shareKnowledgeService.addKnowledge({
          needParse: !0,
          ...i,
        });
        return o != null && o.mediaId ? !!o.mediaId : !1;
      }),
      (this.removeKnowledgeFromKnowledgeBase = async (i, o) => {
        const { success: a } = await this.shareKnowledgeService.delKnowledge({
          mediaIds: [i],
          knowledgeBaseId: o,
        });
        return a.includes(i);
      }),
      (this.checkShareKnowledgeHasSpaceByMediaType = (i, o, a) =>
        this.userSpaceManager.checkShareKnowledgeHasSpaceByMediaType(i, o, a)),
      (this.createFileMedia = (i) => this.fileManager.createMedia(i)),
      (this.getKnowledgeKeyInfo = (i) => {
        const { key: o, mediaType: a, fileName: l = "", fileSize: c = 0 } = i;
        switch (a) {
          case T.Note:
            return { noteInfo: { noteId: o } };
          case T.AISession:
            return { sessionInfo: { parentSessionId: o } };
          case T.MarkDown:
          case T.PPT:
          case T.PDF:
          case T.Word:
          case T.Image:
            return { fileDesc: { name: l, fileSize: c } };
          default:
            return { webInfo: { sourcePath: o } };
        }
      });
  }
  async checkRepeatedNames(t) {
    return (await this.shareKnowledgeService.checkRepeatedName(t)).reduce(
      (s, n) => {
        const { name: i, isRepeated: o, mediaId: a } = n;
        return { ...s, [i]: { isRepeated: o, mediaId: a } };
      },
      {},
    );
  }
  async replaceKnowledge(t) {
    return this.shareKnowledgeService.replaceKnowledge(t);
  }
};
Ch = AC([S(), mi(0, g(mr)), mi(1, g(Gl)), mi(2, g(Hl)), mi(3, g(Dp))], Ch);
var OC = Object.defineProperty,
  PC = Object.getOwnPropertyDescriptor,
  DC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? PC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && OC(t, r, n), n;
  },
  TC = (e, t) => (r, s) => t(r, s, e);
let xh = class {
  constructor(e) {
    (this.channel = e),
      (this.addKnowledgeBase = (t) => {
        this.channel.postMessage({
          action: Bi.AddKnowledgeBase,
          knowledgeBase: t,
        });
      }),
      (this.delKnowledgeBase = (t) => {
        this.channel.postMessage({
          action: Bi.DelKnowledgeBase,
          knowledgeBaseId: t,
        });
      });
  }
};
xh = DC([TC(0, g(em))], xh);
var CC = Object.defineProperty,
  xC = Object.getOwnPropertyDescriptor,
  RC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? xC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && CC(t, r, n), n;
  },
  Si = (e, t) => (r, s) => t(r, s, e);
const MC = [];
let Rh = class {
  constructor(e = new Ne(), t, r) {
    (this.subject = e),
      (this.channel = t),
      (this.logger = r),
      (this.tag = "KnowledgeListEventBusImpl"),
      (this.addKnowledge = (s, n) => {
        this.postMessage({
          eventName: "AddKnowledge",
          data: { knowledge: n, knowledgeBaseId: s },
        });
      }),
      (this.listenAddKnowledge = (s) =>
        this.onMessage("AddKnowledge", ({ knowledge: n, knowledgeBaseId: i }) =>
          s(i, n),
        )),
      (this.replaceKnowledge = (s, n, i) => {
        this.postMessage({
          eventName: "ReplaceKnowledge",
          data: { knowledge: i, knowledgeBaseId: s, originalMediaId: n },
        });
      }),
      (this.listenReplaceKnowledge = (s) =>
        this.onMessage(
          "ReplaceKnowledge",
          ({ knowledge: n, knowledgeBaseId: i, originalMediaId: o }) =>
            s(i, o, n),
        )),
      (this.transportKnowledge = (s) => {
        this.postMessage({ eventName: "TransportKnowledge", data: s });
      }),
      (this.listenTransportKnowledge = (s) =>
        this.onMessage("TransportKnowledge", (n) => s(n))),
      (this.deleteKnowLedge = (s) => {
        this.postMessage({
          eventName: "DeleteKnowLedge",
          data: { selectedKnowledge: s },
        });
      }),
      (this.listenDeleteKnowLedge = (s) =>
        this.onMessage("DeleteKnowLedge", (n) => s(n.selectedKnowledge))),
      (this.createFolder = (s, n, i) => {
        this.postMessage({
          eventName: "CreateFolder",
          data: { knowledgeBaseId: s, parentFolderId: n, newFolder: i },
        });
      }),
      (this.listenCreateFolder = (s) =>
        this.onMessage(
          "CreateFolder",
          ({ knowledgeBaseId: n, parentFolderId: i, newFolder: o }) =>
            s(n, i, o),
        )),
      (this.moveFolder = (s) => {
        this.postMessage({ eventName: "MoveFolder", data: s });
      }),
      (this.listenMoveFolder = (s) =>
        this.onMessage("MoveFolder", (n) => s(n))),
      (this.renameFolder = (s) => {
        this.postMessage({ eventName: "RenameFolder", data: s });
      }),
      (this.listenRenameFolder = (s) =>
        this.onMessage("RenameFolder", (n) => s(n))),
      (this.tagsManageUpdate = (s) => {
        this.postMessage({
          eventName: "TagsManageUpdate",
          data: { knowledgeBaseId: s },
        });
      }),
      (this.listenTagsManageUpdate = (s) =>
        this.onMessage("TagsManageUpdate", (n) => s(n.knowledgeBaseId))),
      (this.versionUpdate = (s) => {
        this.postMessage({ eventName: "VersionUpdate", data: s });
      }),
      (this.listenVersionUpdate = (s) =>
        this.onMessage("VersionUpdate", (n) => s(n)));
  }
  postMessage(e) {
    this.logger.info(`触发更新通知：${JSON.stringify(e)}`, this.tag),
      this.subject.next(e),
      MC.includes(e.eventName) || this.channel.postMessage(e);
  }
  onMessage(e, t) {
    const r = ({ eventName: i, data: o }) => {
        i === e &&
          (this.logger.info(
            `接受到更新通知：${i}， data: ${JSON.stringify(o)}`,
            this.tag,
          ),
          t(o));
      },
      s = this.subject.asObservable().subscribe(r),
      n = ({ data: i }) => r(i);
    return (
      this.channel.addEventListener("message", n),
      () => {
        s.unsubscribe(), this.channel.removeEventListener("message", n);
      }
    );
  }
};
Rh = RC([S(), Si(0, Vn()), Si(0, g(Qp)), Si(1, g(tm)), Si(2, g(ce))], Rh);
var LC = Object.defineProperty,
  $C = Object.getOwnPropertyDescriptor,
  Zn = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? $C(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && LC(t, r, n), n;
  },
  KC = (e, t) => (r, s) => t(r, s, e);
let qs = class {
  constructor(e) {
    this.knowledgeMatrixManageHttpService = e;
  }
  async getHomePage(e) {
    const t = await this.knowledgeMatrixManageHttpService.getHomePage({
      knowledgeMatrixId: e,
    });
    if (t instanceof te) return this.handleErrorResponse(t);
    const {
      discoverKnowledgeInfo: r = {},
      knowledgeDataOverview: s,
      knowledgeMatrixExtra: n,
      knowledgeMatrixInfo: i,
    } = t;
    return {
      data: {
        knowledgeMatrixInfo: i,
        knowledgeDataOverview: s,
        knowledgeBaseListInfo: this.formatKnowledgeBaseListInfo(r),
        knowledgeMatrixExtra: n,
      },
      status: Ct.Success,
    };
  }
  async getPublishedKnowledgeBaseList(e) {
    const t =
      await this.knowledgeMatrixManageHttpService.getDiscoveryKnowledgeList(e);
    if (t instanceof te) return this.handleErrorResponse(t);
    const { isVisitor: r = !0, discoveryKnowledgeInfo: s = {} } = t;
    return {
      data: {
        knowledgeBaseListInfo: this.formatKnowledgeBaseListInfo(s),
        isVisitor: r,
      },
      status: Ct.Success,
    };
  }
  async getDiscoveryKnowledgeDataVariationTrend(e) {
    const t =
      await this.knowledgeMatrixManageHttpService.getDiscoveryKnowledgeDataVariationTrend(
        e,
      );
    if (t instanceof te) return this.handleErrorResponse(t);
    const { deicoveryKnowledgeVariationTrendData: r } = t;
    return { data: r, status: Ct.Success };
  }
  async getDiscoveryKnowledgeDataOverview(e) {
    const t =
      await this.knowledgeMatrixManageHttpService.getDiscoveryKnowledgeDataOverview(
        e,
      );
    if (t instanceof te) return this.handleErrorResponse(t);
    const { knowledgeDataOverview: r } = t;
    return { data: r, status: Ct.Success };
  }
  async isKnowledgeMatrixExist() {
    const e =
      await this.knowledgeMatrixManageHttpService.isKnowledgeMatrixExist({});
    if (e instanceof te) return { exist: !1, knowledgeMatrixId: "" };
    const { exist: t = !1, knowledgeMatrixId: r = "" } = e;
    return { exist: t, knowledgeMatrixId: r };
  }
  formatKnowledgeBaseListInfo(e) {
    return {
      list: (e == null ? void 0 : e.results) || [],
      isEnd: (e == null ? void 0 : e.isEnd) || !1,
      nextCursor: (e == null ? void 0 : e.nextCursor) || "",
    };
  }
  handleErrorResponse(e) {
    switch (e.code) {
      case De.ErrCodeKnowledgeMatrixIdNotExist:
        return { data: null, status: Ct.AccountNotExist };
      case De.ErrCodeServerExecFail:
        return { data: null, status: Ct.Error };
      default:
        return { data: null, status: Ct.Error };
    }
  }
};
Zn([q({ fallbackValue: null })], qs.prototype, "getHomePage", 1);
Zn(
  [q({ fallbackValue: null })],
  qs.prototype,
  "getPublishedKnowledgeBaseList",
  1,
);
Zn(
  [q({ fallbackValue: null })],
  qs.prototype,
  "getDiscoveryKnowledgeDataVariationTrend",
  1,
);
Zn(
  [q({ fallbackValue: null })],
  qs.prototype,
  "getDiscoveryKnowledgeDataOverview",
  1,
);
qs = Zn([S(), KC(0, g($E))], qs);
var BC = Object.defineProperty,
  UC = Object.getOwnPropertyDescriptor,
  NC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? UC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && BC(t, r, n), n;
  },
  Mh = (e, t) => (r, s) => t(r, s, e);
let Rn = class {
  constructor(e, t) {
    (this.accountWritterService = e),
      (this.logger = t),
      (this.preregisterKnowledgeMatrix = async (r) => {
        const { nickName: s, avatarCosKey: n } = r,
          i = await this.accountWritterService.preregisterKnowledgeMatrix({
            nickName: s,
            avatar: n,
          });
        if (i instanceof te) return this.handleError(i, "Preregister");
        const { knowledgeMatrixId: o = "" } = i;
        return o
          ? { knowledgeMatrixId: o, code: De.Success }
          : {
              knowledgeMatrixId: "",
              code: De.InvalidResp,
              msg: "操作失败，请修改或稍后重试",
            };
      }),
      (this.sendVerifyCode = async (r) => {
        const { callingCode: s, phone: n, knowledgeMatrixId: i } = r,
          o = await this.accountWritterService.sendVerifyCode({
            countryCode: String(s),
            phone: n,
            knowledgeMatrixId: i,
            type: 0,
          });
        return o instanceof te
          ? this.handleError(o, "SendVerifyCode")
          : { knowledgeMatrixId: i, code: De.Success };
      }),
      (this.activateKnowledgeMatrix = async (r) => {
        const { callingCode: s, phone: n, knowledgeMatrixId: i, code: o } = r,
          a = await this.accountWritterService.activateKnowledgeMatrix({
            countryCode: String(s),
            phone: n,
            knowledgeMatrixId: i,
            code: o,
          });
        if (a instanceof te)
          return this.handleError(a, "ActivateKnowledgeMatrix");
        const { knowledgeMatrixId: l = "" } = a;
        return { knowledgeMatrixId: l, code: De.Success };
      }),
      (this.updateKnowledgeMatrixInfo = async (r) => {
        const s = await this.accountWritterService.updateKnowledgeMatrixInfo(r);
        if (s instanceof te) {
          this.logger.info(
            `当前请求失败：${JSON.stringify(s)}`,
            `${Rn.key}.UpdateKnowledgeMatrixInfo`,
          );
          const { message: n, code: i = De.Success } = s;
          return { errReason: da.Error, msg: n, code: i };
        }
        return { errReason: da.None, data: s, code: De.Success };
      }),
      (this.handleError = (r, s) => {
        this.logger.info(
          `当前请求失败：${JSON.stringify(r)}`,
          `${Rn.key}.${s}`,
        );
        const { code: n, message: i } = r;
        return { knowledgeMatrixId: "", code: n, msg: i };
      });
  }
};
Rn.key = "RegisterKnowledgeMatrixServiceImpl";
Rn = NC([S(), Mh(0, g(KE)), Mh(1, g(ce))], Rn);
var FC = Object.defineProperty,
  kC = Object.getOwnPropertyDescriptor,
  q_ = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? kC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && FC(t, r, n), n;
  },
  jC = (e, t) => (r, s) => t(r, s, e);
let nl = class {
  constructor(e) {
    this.readerService = e;
  }
  async getFolderList(e) {
    const t = await this.readerService.getFolderList(e);
    return t
      ? {
          nextCursor: t.nextCursor ?? "",
          folderList: this.formatFolderInfoListToFileTreeNodeList(
            t.folderList ?? [],
          ),
          isEnd: t.isEnd ?? !1,
          folderNumber: ki(t.totalSize, 0),
        }
      : null;
  }
  formatFolderInfoListToFileTreeNodeList(e) {
    return e.map((t) => {
      const r = ki(t.folderNumber, 0);
      return Jl({
        id: t.folderId ?? "",
        name: t.name ?? "",
        folderNumber: r,
        childrenIsEnd: r === 0,
      });
    });
  }
};
q_([q({ fallbackValue: null })], nl.prototype, "getFolderList", 1);
nl = q_([S(), jC(0, g(Gl))], nl);
var GC = Object.defineProperty,
  WC = Object.getOwnPropertyDescriptor,
  VC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? WC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && GC(t, r, n), n;
  },
  Lh = (e, t) => (r, s) => t(r, s, e);
let $h = class {
  constructor(e = new Ne()) {
    (this.subject = e),
      (this.enterFolder = (t) => {
        this.subject.next({ eventName: "EnterFolder", data: t });
      }),
      (this.listenEnterFolder = (t) => this.createHandler("EnterFolder", t)),
      (this.createHandler = (t, r) => {
        const s = this.subject
          .asObservable()
          .subscribe(({ eventName: n, data: i }) => {
            t === n && r(i);
          });
        return () => {
          s.unsubscribe();
        };
      });
  }
};
$h = VC([Lh(0, Vn()), Lh(0, g(Qp))], $h);
var HC = Object.defineProperty,
  zC = Object.getOwnPropertyDescriptor,
  qC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? zC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && HC(t, r, n), n;
  };
let Kh = class {
  constructor() {
    this.knowledgeBaseMap = new Map();
  }
  getById(e) {
    const t = this.knowledgeBaseMap.get(e);
    return t || null;
  }
  getAll() {
    return Array.from(this.knowledgeBaseMap.values());
  }
  add(e) {
    return this.knowledgeBaseMap.set(e.id, e), e;
  }
  delete(e) {
    return this.knowledgeBaseMap.delete(e);
  }
  update(e, t) {
    const r = this.knowledgeBaseMap.get(e);
    if (!r) return null;
    const s = { ...r, ...t };
    return this.knowledgeBaseMap.set(e, s), s;
  }
};
Kh = qC([S()], Kh);
var JC = Object.defineProperty,
  YC = Object.getOwnPropertyDescriptor,
  QC = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? YC(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && JC(t, r, n), n;
  };
let Bh = class {
  constructor() {
    this.groupList = [];
  }
  getAll() {
    return this.groupList;
  }
  getByType(e) {
    const t = this.groupList.find((r) => r.type === e);
    return t || null;
  }
  append(e, t) {
    const r = this.groupList.find((s) => s.type === e);
    return r ? (r.list.some((s) => s.id === t.id) || r.list.push(t), r) : null;
  }
  unshift(e, t) {
    const r = this.groupList.find((n) => n.type === e);
    return !r || r.list.find((n) => n.id === t.id)
      ? null
      : (r.list.unshift(t), r);
  }
  update(e, t) {
    const r = this.groupList.find((o) => o.type === e);
    if (!r) return null;
    const s = r.list.findIndex((o) => o.id === t.id);
    if (s === -1) return null;
    const i = { ...r.list[s], ...t };
    return r.list.splice(s, 1, i), r;
  }
  updateGroupByType(e, t) {
    const r = this.groupList.findIndex((n) => n.type === e);
    if (r === -1) return null;
    const s = [
      ...this.groupList.slice(0, r),
      t,
      ...this.groupList.slice(r + 1),
    ];
    return (this.groupList = s), t;
  }
  delete(e, t) {
    const r = this.groupList.find((n) => n.type === e);
    if (!r) return null;
    const s = r.list.findIndex((n) => n.id === t.id);
    return s === -1 ? null : (r.list.splice(s, 1), r);
  }
  updateGroups(e) {
    return (this.groupList = e), this.groupList;
  }
  setGroups(e) {
    return (this.groupList = [...e]), this.groupList;
  }
};
Bh = QC([S()], Bh);
const Es =
    typeof performance == "object" &&
    performance &&
    typeof performance.now == "function"
      ? performance
      : Date,
  J_ = new Set(),
  il = typeof process == "object" && process ? process : {},
  Y_ = (e, t, r, s) => {
    typeof il.emitWarning == "function"
      ? il.emitWarning(e, t, r, s)
      : console.error(`[${r}] ${t}: ${e}`);
  };
let zi = globalThis.AbortController,
  Uh = globalThis.AbortSignal;
var bf;
if (typeof zi > "u") {
  (Uh = class {
    constructor() {
      $(this, "onabort");
      $(this, "_onabort", []);
      $(this, "reason");
      $(this, "aborted", !1);
    }
    addEventListener(s, n) {
      this._onabort.push(n);
    }
  }),
    (zi = class {
      constructor() {
        $(this, "signal", new Uh());
        t();
      }
      abort(s) {
        var n, i;
        if (!this.signal.aborted) {
          (this.signal.reason = s), (this.signal.aborted = !0);
          for (const o of this.signal._onabort) o(s);
          (i = (n = this.signal).onabort) == null || i.call(n, s);
        }
      }
    });
  let e =
    ((bf = il.env) == null ? void 0 : bf.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const t = () => {
    e &&
      ((e = !1),
      Y_(
        "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
        "NO_ABORT_CONTROLLER",
        "ENOTSUP",
        t,
      ));
  };
}
const XC = (e) => !J_.has(e),
  Or = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e),
  Q_ = (e) =>
    Or(e)
      ? e <= Math.pow(2, 8)
        ? Uint8Array
        : e <= Math.pow(2, 16)
          ? Uint16Array
          : e <= Math.pow(2, 32)
            ? Uint32Array
            : e <= Number.MAX_SAFE_INTEGER
              ? Ci
              : null
      : null;
class Ci extends Array {
  constructor(t) {
    super(t), this.fill(0);
  }
}
var Bs;
const es = class es {
  constructor(t, r) {
    $(this, "heap");
    $(this, "length");
    if (!v(es, Bs))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    (this.heap = new r(t)), (this.length = 0);
  }
  static create(t) {
    const r = Q_(t);
    if (!r) return [];
    Z(es, Bs, !0);
    const s = new es(t, r);
    return Z(es, Bs, !1), s;
  }
  push(t) {
    this.heap[this.length++] = t;
  }
  pop() {
    return this.heap[--this.length];
  }
};
(Bs = new WeakMap()), ae(es, Bs, !1);
let ol = es;
var If,
  Af,
  Ut,
  yt,
  Nt,
  Ft,
  Us,
  Ns,
  ke,
  kt,
  Be,
  Pe,
  oe,
  lt,
  Et,
  st,
  He,
  jt,
  ze,
  Gt,
  Wt,
  bt,
  Vt,
  Mr,
  ct,
  N,
  ll,
  is,
  dr,
  Nn,
  It,
  X_,
  os,
  Fs,
  Fn,
  Pr,
  Dr,
  cl,
  xi,
  Ri,
  Oe,
  ul,
  _n,
  Tr,
  dl;
const lc = class lc {
  constructor(t) {
    ae(this, N);
    ae(this, Ut);
    ae(this, yt);
    ae(this, Nt);
    ae(this, Ft);
    ae(this, Us);
    ae(this, Ns);
    $(this, "ttl");
    $(this, "ttlResolution");
    $(this, "ttlAutopurge");
    $(this, "updateAgeOnGet");
    $(this, "updateAgeOnHas");
    $(this, "allowStale");
    $(this, "noDisposeOnSet");
    $(this, "noUpdateTTL");
    $(this, "maxEntrySize");
    $(this, "sizeCalculation");
    $(this, "noDeleteOnFetchRejection");
    $(this, "noDeleteOnStaleGet");
    $(this, "allowStaleOnFetchAbort");
    $(this, "allowStaleOnFetchRejection");
    $(this, "ignoreFetchAbort");
    ae(this, ke);
    ae(this, kt);
    ae(this, Be);
    ae(this, Pe);
    ae(this, oe);
    ae(this, lt);
    ae(this, Et);
    ae(this, st);
    ae(this, He);
    ae(this, jt);
    ae(this, ze);
    ae(this, Gt);
    ae(this, Wt);
    ae(this, bt);
    ae(this, Vt);
    ae(this, Mr);
    ae(this, ct);
    ae(this, is, () => {});
    ae(this, dr, () => {});
    ae(this, Nn, () => {});
    ae(this, It, () => !1);
    ae(this, os, (t) => {});
    ae(this, Fs, (t, r, s) => {});
    ae(this, Fn, (t, r, s, n) => {
      if (s || n)
        throw new TypeError(
          "cannot set size without setting maxSize or maxEntrySize on cache",
        );
      return 0;
    });
    $(this, If, "LRUCache");
    const {
      max: r = 0,
      ttl: s,
      ttlResolution: n = 1,
      ttlAutopurge: i,
      updateAgeOnGet: o,
      updateAgeOnHas: a,
      allowStale: l,
      dispose: c,
      disposeAfter: u,
      noDisposeOnSet: d,
      noUpdateTTL: f,
      maxSize: h = 0,
      maxEntrySize: p = 0,
      sizeCalculation: _,
      fetchMethod: w,
      memoMethod: m,
      noDeleteOnFetchRejection: E,
      noDeleteOnStaleGet: D,
      allowStaleOnFetchRejection: j,
      allowStaleOnFetchAbort: V,
      ignoreFetchAbort: R,
    } = t;
    if (r !== 0 && !Or(r))
      throw new TypeError("max option must be a nonnegative integer");
    const ie = r ? Q_(r) : Array;
    if (!ie) throw new Error("invalid max value: " + r);
    if (
      (Z(this, Ut, r),
      Z(this, yt, h),
      (this.maxEntrySize = p || v(this, yt)),
      (this.sizeCalculation = _),
      this.sizeCalculation)
    ) {
      if (!v(this, yt) && !this.maxEntrySize)
        throw new TypeError(
          "cannot set sizeCalculation without setting maxSize or maxEntrySize",
        );
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (m !== void 0 && typeof m != "function")
      throw new TypeError("memoMethod must be a function if defined");
    if ((Z(this, Ns, m), w !== void 0 && typeof w != "function"))
      throw new TypeError("fetchMethod must be a function if specified");
    if (
      (Z(this, Us, w),
      Z(this, Mr, !!w),
      Z(this, Be, new Map()),
      Z(this, Pe, new Array(r).fill(void 0)),
      Z(this, oe, new Array(r).fill(void 0)),
      Z(this, lt, new ie(r)),
      Z(this, Et, new ie(r)),
      Z(this, st, 0),
      Z(this, He, 0),
      Z(this, jt, ol.create(r)),
      Z(this, ke, 0),
      Z(this, kt, 0),
      typeof c == "function" && Z(this, Nt, c),
      typeof u == "function"
        ? (Z(this, Ft, u), Z(this, ze, []))
        : (Z(this, Ft, void 0), Z(this, ze, void 0)),
      Z(this, Vt, !!v(this, Nt)),
      Z(this, ct, !!v(this, Ft)),
      (this.noDisposeOnSet = !!d),
      (this.noUpdateTTL = !!f),
      (this.noDeleteOnFetchRejection = !!E),
      (this.allowStaleOnFetchRejection = !!j),
      (this.allowStaleOnFetchAbort = !!V),
      (this.ignoreFetchAbort = !!R),
      this.maxEntrySize !== 0)
    ) {
      if (v(this, yt) !== 0 && !Or(v(this, yt)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!Or(this.maxEntrySize))
        throw new TypeError(
          "maxEntrySize must be a positive integer if specified",
        );
      J(this, N, X_).call(this);
    }
    if (
      ((this.allowStale = !!l),
      (this.noDeleteOnStaleGet = !!D),
      (this.updateAgeOnGet = !!o),
      (this.updateAgeOnHas = !!a),
      (this.ttlResolution = Or(n) || n === 0 ? n : 1),
      (this.ttlAutopurge = !!i),
      (this.ttl = s || 0),
      this.ttl)
    ) {
      if (!Or(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      J(this, N, ll).call(this);
    }
    if (v(this, Ut) === 0 && this.ttl === 0 && v(this, yt) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !v(this, Ut) && !v(this, yt)) {
      const x = "LRU_CACHE_UNBOUNDED";
      XC(x) &&
        (J_.add(x),
        Y_(
          "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
          "UnboundedCacheWarning",
          x,
          lc,
        ));
    }
  }
  static unsafeExposeInternals(t) {
    return {
      starts: v(t, Wt),
      ttls: v(t, bt),
      sizes: v(t, Gt),
      keyMap: v(t, Be),
      keyList: v(t, Pe),
      valList: v(t, oe),
      next: v(t, lt),
      prev: v(t, Et),
      get head() {
        return v(t, st);
      },
      get tail() {
        return v(t, He);
      },
      free: v(t, jt),
      isBackgroundFetch: (r) => {
        var s;
        return J((s = t), N, Oe).call(s, r);
      },
      backgroundFetch: (r, s, n, i) => {
        var o;
        return J((o = t), N, Ri).call(o, r, s, n, i);
      },
      moveToTail: (r) => {
        var s;
        return J((s = t), N, _n).call(s, r);
      },
      indexes: (r) => {
        var s;
        return J((s = t), N, Pr).call(s, r);
      },
      rindexes: (r) => {
        var s;
        return J((s = t), N, Dr).call(s, r);
      },
      isStale: (r) => {
        var s;
        return v((s = t), It).call(s, r);
      },
    };
  }
  get max() {
    return v(this, Ut);
  }
  get maxSize() {
    return v(this, yt);
  }
  get calculatedSize() {
    return v(this, kt);
  }
  get size() {
    return v(this, ke);
  }
  get fetchMethod() {
    return v(this, Us);
  }
  get memoMethod() {
    return v(this, Ns);
  }
  get dispose() {
    return v(this, Nt);
  }
  get disposeAfter() {
    return v(this, Ft);
  }
  getRemainingTTL(t) {
    return v(this, Be).has(t) ? 1 / 0 : 0;
  }
  *entries() {
    for (const t of J(this, N, Pr).call(this))
      v(this, oe)[t] !== void 0 &&
        v(this, Pe)[t] !== void 0 &&
        !J(this, N, Oe).call(this, v(this, oe)[t]) &&
        (yield [v(this, Pe)[t], v(this, oe)[t]]);
  }
  *rentries() {
    for (const t of J(this, N, Dr).call(this))
      v(this, oe)[t] !== void 0 &&
        v(this, Pe)[t] !== void 0 &&
        !J(this, N, Oe).call(this, v(this, oe)[t]) &&
        (yield [v(this, Pe)[t], v(this, oe)[t]]);
  }
  *keys() {
    for (const t of J(this, N, Pr).call(this)) {
      const r = v(this, Pe)[t];
      r !== void 0 && !J(this, N, Oe).call(this, v(this, oe)[t]) && (yield r);
    }
  }
  *rkeys() {
    for (const t of J(this, N, Dr).call(this)) {
      const r = v(this, Pe)[t];
      r !== void 0 && !J(this, N, Oe).call(this, v(this, oe)[t]) && (yield r);
    }
  }
  *values() {
    for (const t of J(this, N, Pr).call(this))
      v(this, oe)[t] !== void 0 &&
        !J(this, N, Oe).call(this, v(this, oe)[t]) &&
        (yield v(this, oe)[t]);
  }
  *rvalues() {
    for (const t of J(this, N, Dr).call(this))
      v(this, oe)[t] !== void 0 &&
        !J(this, N, Oe).call(this, v(this, oe)[t]) &&
        (yield v(this, oe)[t]);
  }
  [((Af = Symbol.iterator), (If = Symbol.toStringTag), Af)]() {
    return this.entries();
  }
  find(t, r = {}) {
    for (const s of J(this, N, Pr).call(this)) {
      const n = v(this, oe)[s],
        i = J(this, N, Oe).call(this, n) ? n.__staleWhileFetching : n;
      if (i !== void 0 && t(i, v(this, Pe)[s], this))
        return this.get(v(this, Pe)[s], r);
    }
  }
  forEach(t, r = this) {
    for (const s of J(this, N, Pr).call(this)) {
      const n = v(this, oe)[s],
        i = J(this, N, Oe).call(this, n) ? n.__staleWhileFetching : n;
      i !== void 0 && t.call(r, i, v(this, Pe)[s], this);
    }
  }
  rforEach(t, r = this) {
    for (const s of J(this, N, Dr).call(this)) {
      const n = v(this, oe)[s],
        i = J(this, N, Oe).call(this, n) ? n.__staleWhileFetching : n;
      i !== void 0 && t.call(r, i, v(this, Pe)[s], this);
    }
  }
  purgeStale() {
    let t = !1;
    for (const r of J(this, N, Dr).call(this, { allowStale: !0 }))
      v(this, It).call(this, r) &&
        (J(this, N, Tr).call(this, v(this, Pe)[r], "expire"), (t = !0));
    return t;
  }
  info(t) {
    const r = v(this, Be).get(t);
    if (r === void 0) return;
    const s = v(this, oe)[r],
      n = J(this, N, Oe).call(this, s) ? s.__staleWhileFetching : s;
    if (n === void 0) return;
    const i = { value: n };
    if (v(this, bt) && v(this, Wt)) {
      const o = v(this, bt)[r],
        a = v(this, Wt)[r];
      if (o && a) {
        const l = o - (Es.now() - a);
        (i.ttl = l), (i.start = Date.now());
      }
    }
    return v(this, Gt) && (i.size = v(this, Gt)[r]), i;
  }
  dump() {
    const t = [];
    for (const r of J(this, N, Pr).call(this, { allowStale: !0 })) {
      const s = v(this, Pe)[r],
        n = v(this, oe)[r],
        i = J(this, N, Oe).call(this, n) ? n.__staleWhileFetching : n;
      if (i === void 0 || s === void 0) continue;
      const o = { value: i };
      if (v(this, bt) && v(this, Wt)) {
        o.ttl = v(this, bt)[r];
        const a = Es.now() - v(this, Wt)[r];
        o.start = Math.floor(Date.now() - a);
      }
      v(this, Gt) && (o.size = v(this, Gt)[r]), t.unshift([s, o]);
    }
    return t;
  }
  load(t) {
    this.clear();
    for (const [r, s] of t) {
      if (s.start) {
        const n = Date.now() - s.start;
        s.start = Es.now() - n;
      }
      this.set(r, s.value, s);
    }
  }
  set(t, r, s = {}) {
    var f, h, p, _, w;
    if (r === void 0) return this.delete(t), this;
    const {
      ttl: n = this.ttl,
      start: i,
      noDisposeOnSet: o = this.noDisposeOnSet,
      sizeCalculation: a = this.sizeCalculation,
      status: l,
    } = s;
    let { noUpdateTTL: c = this.noUpdateTTL } = s;
    const u = v(this, Fn).call(this, t, r, s.size || 0, a);
    if (this.maxEntrySize && u > this.maxEntrySize)
      return (
        l && ((l.set = "miss"), (l.maxEntrySizeExceeded = !0)),
        J(this, N, Tr).call(this, t, "set"),
        this
      );
    let d = v(this, ke) === 0 ? void 0 : v(this, Be).get(t);
    if (d === void 0)
      (d =
        v(this, ke) === 0
          ? v(this, He)
          : v(this, jt).length !== 0
            ? v(this, jt).pop()
            : v(this, ke) === v(this, Ut)
              ? J(this, N, xi).call(this, !1)
              : v(this, ke)),
        (v(this, Pe)[d] = t),
        (v(this, oe)[d] = r),
        v(this, Be).set(t, d),
        (v(this, lt)[v(this, He)] = d),
        (v(this, Et)[d] = v(this, He)),
        Z(this, He, d),
        ei(this, ke)._++,
        v(this, Fs).call(this, d, u, l),
        l && (l.set = "add"),
        (c = !1);
    else {
      J(this, N, _n).call(this, d);
      const m = v(this, oe)[d];
      if (r !== m) {
        if (v(this, Mr) && J(this, N, Oe).call(this, m)) {
          m.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: E } = m;
          E !== void 0 &&
            !o &&
            (v(this, Vt) &&
              ((f = v(this, Nt)) == null || f.call(this, E, t, "set")),
            v(this, ct) &&
              ((h = v(this, ze)) == null || h.push([E, t, "set"])));
        } else
          o ||
            (v(this, Vt) &&
              ((p = v(this, Nt)) == null || p.call(this, m, t, "set")),
            v(this, ct) &&
              ((_ = v(this, ze)) == null || _.push([m, t, "set"])));
        if (
          (v(this, os).call(this, d),
          v(this, Fs).call(this, d, u, l),
          (v(this, oe)[d] = r),
          l)
        ) {
          l.set = "replace";
          const E =
            m && J(this, N, Oe).call(this, m) ? m.__staleWhileFetching : m;
          E !== void 0 && (l.oldValue = E);
        }
      } else l && (l.set = "update");
    }
    if (
      (n !== 0 && !v(this, bt) && J(this, N, ll).call(this),
      v(this, bt) &&
        (c || v(this, Nn).call(this, d, n, i),
        l && v(this, dr).call(this, l, d)),
      !o && v(this, ct) && v(this, ze))
    ) {
      const m = v(this, ze);
      let E;
      for (; (E = m == null ? void 0 : m.shift()); )
        (w = v(this, Ft)) == null || w.call(this, ...E);
    }
    return this;
  }
  pop() {
    var t;
    try {
      for (; v(this, ke); ) {
        const r = v(this, oe)[v(this, st)];
        if ((J(this, N, xi).call(this, !0), J(this, N, Oe).call(this, r))) {
          if (r.__staleWhileFetching) return r.__staleWhileFetching;
        } else if (r !== void 0) return r;
      }
    } finally {
      if (v(this, ct) && v(this, ze)) {
        const r = v(this, ze);
        let s;
        for (; (s = r == null ? void 0 : r.shift()); )
          (t = v(this, Ft)) == null || t.call(this, ...s);
      }
    }
  }
  has(t, r = {}) {
    const { updateAgeOnHas: s = this.updateAgeOnHas, status: n } = r,
      i = v(this, Be).get(t);
    if (i !== void 0) {
      const o = v(this, oe)[i];
      if (J(this, N, Oe).call(this, o) && o.__staleWhileFetching === void 0)
        return !1;
      if (v(this, It).call(this, i))
        n && ((n.has = "stale"), v(this, dr).call(this, n, i));
      else
        return (
          s && v(this, is).call(this, i),
          n && ((n.has = "hit"), v(this, dr).call(this, n, i)),
          !0
        );
    } else n && (n.has = "miss");
    return !1;
  }
  peek(t, r = {}) {
    const { allowStale: s = this.allowStale } = r,
      n = v(this, Be).get(t);
    if (n === void 0 || (!s && v(this, It).call(this, n))) return;
    const i = v(this, oe)[n];
    return J(this, N, Oe).call(this, i) ? i.__staleWhileFetching : i;
  }
  async fetch(t, r = {}) {
    const {
      allowStale: s = this.allowStale,
      updateAgeOnGet: n = this.updateAgeOnGet,
      noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
      ttl: o = this.ttl,
      noDisposeOnSet: a = this.noDisposeOnSet,
      size: l = 0,
      sizeCalculation: c = this.sizeCalculation,
      noUpdateTTL: u = this.noUpdateTTL,
      noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: h = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: p = this.allowStaleOnFetchAbort,
      context: _,
      forceRefresh: w = !1,
      status: m,
      signal: E,
    } = r;
    if (!v(this, Mr))
      return (
        m && (m.fetch = "get"),
        this.get(t, {
          allowStale: s,
          updateAgeOnGet: n,
          noDeleteOnStaleGet: i,
          status: m,
        })
      );
    const D = {
      allowStale: s,
      updateAgeOnGet: n,
      noDeleteOnStaleGet: i,
      ttl: o,
      noDisposeOnSet: a,
      size: l,
      sizeCalculation: c,
      noUpdateTTL: u,
      noDeleteOnFetchRejection: d,
      allowStaleOnFetchRejection: f,
      allowStaleOnFetchAbort: p,
      ignoreFetchAbort: h,
      status: m,
      signal: E,
    };
    let j = v(this, Be).get(t);
    if (j === void 0) {
      m && (m.fetch = "miss");
      const V = J(this, N, Ri).call(this, t, j, D, _);
      return (V.__returned = V);
    } else {
      const V = v(this, oe)[j];
      if (J(this, N, Oe).call(this, V)) {
        const H = s && V.__staleWhileFetching !== void 0;
        return (
          m && ((m.fetch = "inflight"), H && (m.returnedStale = !0)),
          H ? V.__staleWhileFetching : (V.__returned = V)
        );
      }
      const R = v(this, It).call(this, j);
      if (!w && !R)
        return (
          m && (m.fetch = "hit"),
          J(this, N, _n).call(this, j),
          n && v(this, is).call(this, j),
          m && v(this, dr).call(this, m, j),
          V
        );
      const ie = J(this, N, Ri).call(this, t, j, D, _),
        k = ie.__staleWhileFetching !== void 0 && s;
      return (
        m &&
          ((m.fetch = R ? "stale" : "refresh"),
          k && R && (m.returnedStale = !0)),
        k ? ie.__staleWhileFetching : (ie.__returned = ie)
      );
    }
  }
  async forceFetch(t, r = {}) {
    const s = await this.fetch(t, r);
    if (s === void 0) throw new Error("fetch() returned undefined");
    return s;
  }
  memo(t, r = {}) {
    const s = v(this, Ns);
    if (!s) throw new Error("no memoMethod provided to constructor");
    const { context: n, forceRefresh: i, ...o } = r,
      a = this.get(t, o);
    if (!i && a !== void 0) return a;
    const l = s(t, a, { options: o, context: n });
    return this.set(t, l, o), l;
  }
  get(t, r = {}) {
    const {
        allowStale: s = this.allowStale,
        updateAgeOnGet: n = this.updateAgeOnGet,
        noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
        status: o,
      } = r,
      a = v(this, Be).get(t);
    if (a !== void 0) {
      const l = v(this, oe)[a],
        c = J(this, N, Oe).call(this, l);
      return (
        o && v(this, dr).call(this, o, a),
        v(this, It).call(this, a)
          ? (o && (o.get = "stale"),
            c
              ? (o &&
                  s &&
                  l.__staleWhileFetching !== void 0 &&
                  (o.returnedStale = !0),
                s ? l.__staleWhileFetching : void 0)
              : (i || J(this, N, Tr).call(this, t, "expire"),
                o && s && (o.returnedStale = !0),
                s ? l : void 0))
          : (o && (o.get = "hit"),
            c
              ? l.__staleWhileFetching
              : (J(this, N, _n).call(this, a),
                n && v(this, is).call(this, a),
                l))
      );
    } else o && (o.get = "miss");
  }
  delete(t) {
    return J(this, N, Tr).call(this, t, "delete");
  }
  clear() {
    return J(this, N, dl).call(this, "delete");
  }
};
(Ut = new WeakMap()),
  (yt = new WeakMap()),
  (Nt = new WeakMap()),
  (Ft = new WeakMap()),
  (Us = new WeakMap()),
  (Ns = new WeakMap()),
  (ke = new WeakMap()),
  (kt = new WeakMap()),
  (Be = new WeakMap()),
  (Pe = new WeakMap()),
  (oe = new WeakMap()),
  (lt = new WeakMap()),
  (Et = new WeakMap()),
  (st = new WeakMap()),
  (He = new WeakMap()),
  (jt = new WeakMap()),
  (ze = new WeakMap()),
  (Gt = new WeakMap()),
  (Wt = new WeakMap()),
  (bt = new WeakMap()),
  (Vt = new WeakMap()),
  (Mr = new WeakMap()),
  (ct = new WeakMap()),
  (N = new WeakSet()),
  (ll = function () {
    const t = new Ci(v(this, Ut)),
      r = new Ci(v(this, Ut));
    Z(this, bt, t),
      Z(this, Wt, r),
      Z(this, Nn, (i, o, a = Es.now()) => {
        if (
          ((r[i] = o !== 0 ? a : 0), (t[i] = o), o !== 0 && this.ttlAutopurge)
        ) {
          const l = setTimeout(() => {
            v(this, It).call(this, i) &&
              J(this, N, Tr).call(this, v(this, Pe)[i], "expire");
          }, o + 1);
          l.unref && l.unref();
        }
      }),
      Z(this, is, (i) => {
        r[i] = t[i] !== 0 ? Es.now() : 0;
      }),
      Z(this, dr, (i, o) => {
        if (t[o]) {
          const a = t[o],
            l = r[o];
          if (!a || !l) return;
          (i.ttl = a), (i.start = l), (i.now = s || n());
          const c = i.now - l;
          i.remainingTTL = a - c;
        }
      });
    let s = 0;
    const n = () => {
      const i = Es.now();
      if (this.ttlResolution > 0) {
        s = i;
        const o = setTimeout(() => (s = 0), this.ttlResolution);
        o.unref && o.unref();
      }
      return i;
    };
    (this.getRemainingTTL = (i) => {
      const o = v(this, Be).get(i);
      if (o === void 0) return 0;
      const a = t[o],
        l = r[o];
      if (!a || !l) return 1 / 0;
      const c = (s || n()) - l;
      return a - c;
    }),
      Z(this, It, (i) => {
        const o = r[i],
          a = t[i];
        return !!a && !!o && (s || n()) - o > a;
      });
  }),
  (is = new WeakMap()),
  (dr = new WeakMap()),
  (Nn = new WeakMap()),
  (It = new WeakMap()),
  (X_ = function () {
    const t = new Ci(v(this, Ut));
    Z(this, kt, 0),
      Z(this, Gt, t),
      Z(this, os, (r) => {
        Z(this, kt, v(this, kt) - t[r]), (t[r] = 0);
      }),
      Z(this, Fn, (r, s, n, i) => {
        if (J(this, N, Oe).call(this, s)) return 0;
        if (!Or(n))
          if (i) {
            if (typeof i != "function")
              throw new TypeError("sizeCalculation must be a function");
            if (((n = i(s, r)), !Or(n)))
              throw new TypeError(
                "sizeCalculation return invalid (expect positive integer)",
              );
          } else
            throw new TypeError(
              "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.",
            );
        return n;
      }),
      Z(this, Fs, (r, s, n) => {
        if (((t[r] = s), v(this, yt))) {
          const i = v(this, yt) - t[r];
          for (; v(this, kt) > i; ) J(this, N, xi).call(this, !0);
        }
        Z(this, kt, v(this, kt) + t[r]),
          n && ((n.entrySize = s), (n.totalCalculatedSize = v(this, kt)));
      });
  }),
  (os = new WeakMap()),
  (Fs = new WeakMap()),
  (Fn = new WeakMap()),
  (Pr = function* ({ allowStale: t = this.allowStale } = {}) {
    if (v(this, ke))
      for (
        let r = v(this, He);
        !(
          !J(this, N, cl).call(this, r) ||
          ((t || !v(this, It).call(this, r)) && (yield r), r === v(this, st))
        );

      )
        r = v(this, Et)[r];
  }),
  (Dr = function* ({ allowStale: t = this.allowStale } = {}) {
    if (v(this, ke))
      for (
        let r = v(this, st);
        !(
          !J(this, N, cl).call(this, r) ||
          ((t || !v(this, It).call(this, r)) && (yield r), r === v(this, He))
        );

      )
        r = v(this, lt)[r];
  }),
  (cl = function (t) {
    return t !== void 0 && v(this, Be).get(v(this, Pe)[t]) === t;
  }),
  (xi = function (t) {
    var i, o;
    const r = v(this, st),
      s = v(this, Pe)[r],
      n = v(this, oe)[r];
    return (
      v(this, Mr) && J(this, N, Oe).call(this, n)
        ? n.__abortController.abort(new Error("evicted"))
        : (v(this, Vt) || v(this, ct)) &&
          (v(this, Vt) &&
            ((i = v(this, Nt)) == null || i.call(this, n, s, "evict")),
          v(this, ct) &&
            ((o = v(this, ze)) == null || o.push([n, s, "evict"]))),
      v(this, os).call(this, r),
      t &&
        ((v(this, Pe)[r] = void 0),
        (v(this, oe)[r] = void 0),
        v(this, jt).push(r)),
      v(this, ke) === 1
        ? (Z(this, st, Z(this, He, 0)), (v(this, jt).length = 0))
        : Z(this, st, v(this, lt)[r]),
      v(this, Be).delete(s),
      ei(this, ke)._--,
      r
    );
  }),
  (Ri = function (t, r, s, n) {
    const i = r === void 0 ? void 0 : v(this, oe)[r];
    if (J(this, N, Oe).call(this, i)) return i;
    const o = new zi(),
      { signal: a } = s;
    a == null ||
      a.addEventListener("abort", () => o.abort(a.reason), {
        signal: o.signal,
      });
    const l = { signal: o.signal, options: s, context: n },
      c = (_, w = !1) => {
        const { aborted: m } = o.signal,
          E = s.ignoreFetchAbort && _ !== void 0;
        if (
          (s.status &&
            (m && !w
              ? ((s.status.fetchAborted = !0),
                (s.status.fetchError = o.signal.reason),
                E && (s.status.fetchAbortIgnored = !0))
              : (s.status.fetchResolved = !0)),
          m && !E && !w)
        )
          return d(o.signal.reason);
        const D = h;
        return (
          v(this, oe)[r] === h &&
            (_ === void 0
              ? D.__staleWhileFetching
                ? (v(this, oe)[r] = D.__staleWhileFetching)
                : J(this, N, Tr).call(this, t, "fetch")
              : (s.status && (s.status.fetchUpdated = !0),
                this.set(t, _, l.options))),
          _
        );
      },
      u = (_) => (
        s.status && ((s.status.fetchRejected = !0), (s.status.fetchError = _)),
        d(_)
      ),
      d = (_) => {
        const { aborted: w } = o.signal,
          m = w && s.allowStaleOnFetchAbort,
          E = m || s.allowStaleOnFetchRejection,
          D = E || s.noDeleteOnFetchRejection,
          j = h;
        if (
          (v(this, oe)[r] === h &&
            (!D || j.__staleWhileFetching === void 0
              ? J(this, N, Tr).call(this, t, "fetch")
              : m || (v(this, oe)[r] = j.__staleWhileFetching)),
          E)
        )
          return (
            s.status &&
              j.__staleWhileFetching !== void 0 &&
              (s.status.returnedStale = !0),
            j.__staleWhileFetching
          );
        if (j.__returned === j) throw _;
      },
      f = (_, w) => {
        var E;
        const m = (E = v(this, Us)) == null ? void 0 : E.call(this, t, i, l);
        m &&
          m instanceof Promise &&
          m.then((D) => _(D === void 0 ? void 0 : D), w),
          o.signal.addEventListener("abort", () => {
            (!s.ignoreFetchAbort || s.allowStaleOnFetchAbort) &&
              (_(void 0), s.allowStaleOnFetchAbort && (_ = (D) => c(D, !0)));
          });
      };
    s.status && (s.status.fetchDispatched = !0);
    const h = new Promise(f).then(c, u),
      p = Object.assign(h, {
        __abortController: o,
        __staleWhileFetching: i,
        __returned: void 0,
      });
    return (
      r === void 0
        ? (this.set(t, p, { ...l.options, status: void 0 }),
          (r = v(this, Be).get(t)))
        : (v(this, oe)[r] = p),
      p
    );
  }),
  (Oe = function (t) {
    if (!v(this, Mr)) return !1;
    const r = t;
    return (
      !!r &&
      r instanceof Promise &&
      r.hasOwnProperty("__staleWhileFetching") &&
      r.__abortController instanceof zi
    );
  }),
  (ul = function (t, r) {
    (v(this, Et)[r] = t), (v(this, lt)[t] = r);
  }),
  (_n = function (t) {
    t !== v(this, He) &&
      (t === v(this, st)
        ? Z(this, st, v(this, lt)[t])
        : J(this, N, ul).call(this, v(this, Et)[t], v(this, lt)[t]),
      J(this, N, ul).call(this, v(this, He), t),
      Z(this, He, t));
  }),
  (Tr = function (t, r) {
    var n, i, o, a;
    let s = !1;
    if (v(this, ke) !== 0) {
      const l = v(this, Be).get(t);
      if (l !== void 0)
        if (((s = !0), v(this, ke) === 1)) J(this, N, dl).call(this, r);
        else {
          v(this, os).call(this, l);
          const c = v(this, oe)[l];
          if (
            (J(this, N, Oe).call(this, c)
              ? c.__abortController.abort(new Error("deleted"))
              : (v(this, Vt) || v(this, ct)) &&
                (v(this, Vt) &&
                  ((n = v(this, Nt)) == null || n.call(this, c, t, r)),
                v(this, ct) &&
                  ((i = v(this, ze)) == null || i.push([c, t, r]))),
            v(this, Be).delete(t),
            (v(this, Pe)[l] = void 0),
            (v(this, oe)[l] = void 0),
            l === v(this, He))
          )
            Z(this, He, v(this, Et)[l]);
          else if (l === v(this, st)) Z(this, st, v(this, lt)[l]);
          else {
            const u = v(this, Et)[l];
            v(this, lt)[u] = v(this, lt)[l];
            const d = v(this, lt)[l];
            v(this, Et)[d] = v(this, Et)[l];
          }
          ei(this, ke)._--, v(this, jt).push(l);
        }
    }
    if (v(this, ct) && (o = v(this, ze)) != null && o.length) {
      const l = v(this, ze);
      let c;
      for (; (c = l == null ? void 0 : l.shift()); )
        (a = v(this, Ft)) == null || a.call(this, ...c);
    }
    return s;
  }),
  (dl = function (t) {
    var r, s, n;
    for (const i of J(this, N, Dr).call(this, { allowStale: !0 })) {
      const o = v(this, oe)[i];
      if (J(this, N, Oe).call(this, o))
        o.__abortController.abort(new Error("deleted"));
      else {
        const a = v(this, Pe)[i];
        v(this, Vt) && ((r = v(this, Nt)) == null || r.call(this, o, a, t)),
          v(this, ct) && ((s = v(this, ze)) == null || s.push([o, a, t]));
      }
    }
    if (
      (v(this, Be).clear(),
      v(this, oe).fill(void 0),
      v(this, Pe).fill(void 0),
      v(this, bt) && v(this, Wt) && (v(this, bt).fill(0), v(this, Wt).fill(0)),
      v(this, Gt) && v(this, Gt).fill(0),
      Z(this, st, 0),
      Z(this, He, 0),
      (v(this, jt).length = 0),
      Z(this, kt, 0),
      Z(this, ke, 0),
      v(this, ct) && v(this, ze))
    ) {
      const i = v(this, ze);
      let o;
      for (; (o = i == null ? void 0 : i.shift()); )
        (n = v(this, Ft)) == null || n.call(this, ...o);
    }
  });
let al = lc;
var ZC = Object.defineProperty,
  ex = Object.getOwnPropertyDescriptor,
  tx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ex(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ZC(t, r, n), n;
  };
let Nh = class {
  constructor() {
    (this.knowledgeMap = new Map()),
      (this.getKnowledgeListInfoCache = (e, t) => {
        const r = this.getFolderCache(e);
        return r ? r.get(t) : void 0;
      });
  }
  update(e, t, r) {
    const s = this.getKnowledgeListInfo(e, t);
    if (!s) return;
    const n = { ...s, ...r };
    return this.set(e, t, n);
  }
  getKnowledgeListById(e, t) {
    const r = this.getFolderCache(e);
    return (r && r.get(t)) || null;
  }
  getKnowledgeListInfo(e, t) {
    const r = this.getFolderCache(e);
    return r ? r.get(t) : void 0;
  }
  getKnowledgeById(e, t, r) {
    const s = this.getFolderCache(e);
    if (!s) return null;
    const n = s.get(t);
    return (n && n.list.find((i) => i.mediaId === r)) || null;
  }
  set(e, t, r) {
    let s = this.getFolderCache(e);
    return s || (s = this.createFolderCache(e)), s.set(t, r), r;
  }
  addKnowledge(e, t, r, s = "push") {
    const n = this.getFolderCache(e);
    if (!n) return [];
    const i = n.get(t);
    if (!i) return null;
    const o = r.filter(
        ({ mediaId: c }) => !i.list.find(({ mediaId: u }) => u === c),
      ),
      a = s === "push" ? [...i.list, ...o] : [...o, ...i.list],
      l = { ...i, list: a };
    return n.set(t, l), l.list;
  }
  deleteKnowledge(e, t, r) {
    const s = this.getFolderCache(e);
    if (!s) return [];
    const n = s.get(t);
    if (!n) return [];
    const i = n.list.filter((a) => !r.includes(a.mediaId)),
      o = { ...n, list: i };
    return s.set(t, o), o.list;
  }
  updateKnowledge(e, t, r) {
    const s = this.getFolderCache(e);
    if (!s) return [];
    const n = s.get(t);
    if (!n) return [];
    const i = n.list.map((a) => {
        const l = r.find((c) => c.mediaId === a.mediaId);
        return l ? { ...a, ...l } : a;
      }),
      o = { ...n, list: i };
    return s.set(t, o), o.list || null;
  }
  prependKnowledgeListInfo(e, t, r) {
    const s = this.getKnowledgeListInfoCache(e, t);
    if (!s) return;
    const n = s.list,
      i = r.list,
      o = { ...s, ...r, list: [...n, ...i] };
    this.getFolderCache(e).set(t, o);
  }
  createFolderCache(e) {
    const t = new al({ max: 30 });
    return this.knowledgeMap.set(e, t), t;
  }
  getFolderCache(e) {
    return this.knowledgeMap.get(e);
  }
};
Nh = tx([S()], Nh);
var rx = Object.defineProperty,
  sx = Object.getOwnPropertyDescriptor,
  nx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? sx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && rx(t, r, n), n;
  };
let Fh = class {
  constructor() {
    (this.knowledgeBaseMemberMap = new Map()),
      (this.knowledgeBaseApplyMap = new Map());
  }
  addApplyList(e, t) {
    return this.knowledgeBaseApplyMap.set(e, t), t;
  }
  addMemberList(e, t) {
    return this.knowledgeBaseMemberMap.set(e, t), t;
  }
  deleteMemberById(e) {
    var o;
    const { knowledgeBaseId: t, memberIds: r } = e,
      [s] = r,
      n = this.knowledgeBaseMemberMap.get(t),
      i = {
        memberList:
          (o = n == null ? void 0 : n.memberList) == null
            ? void 0
            : o.filter((a) => a.uid !== s),
        memberTotalCount: (n == null ? void 0 : n.memberTotalCount) - 1,
        memberTotalLimit: n == null ? void 0 : n.memberTotalLimit,
      };
    this.knowledgeBaseMemberMap.set(t, i);
  }
  changeRoleById(e) {
    var a;
    const { roleType: t, knowledgeBaseId: r, memberIds: s } = e,
      [n] = s,
      i = this.knowledgeBaseMemberMap.get(r),
      o = {
        memberList:
          (a = i == null ? void 0 : i.memberList) == null
            ? void 0
            : a.map((l) => (l.uid === n ? { ...l, roleType: t } : { ...l })),
        memberTotalCount: i == null ? void 0 : i.memberTotalCount,
        memberTotalLimit: i == null ? void 0 : i.memberTotalLimit,
      };
    this.knowledgeBaseMemberMap.set(r, o);
  }
  reviewApplyById(e) {
    var a;
    const { knowledgeBaseId: t, processAll: r, memberIds: s } = e,
      [n] = s,
      i = this.knowledgeBaseApplyMap.get(t);
    let o;
    r
      ? (o = { applyList: [], applyTotalCount: 0 })
      : (o = {
          applyList:
            (a = i == null ? void 0 : i.applyList) == null
              ? void 0
              : a.filter((l) => l.uid !== n),
          applyTotalCount: (i == null ? void 0 : i.applyTotalCount) - 1,
        }),
      this.knowledgeBaseApplyMap.set(t, o);
  }
};
Fh = nx([S()], Fh);
var ix = Object.defineProperty,
  ox = Object.getOwnPropertyDescriptor,
  ax = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ox(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && ix(t, r, n), n;
  };
let kh = class {
  constructor() {
    this.reportOptions = [];
  }
  getOptions() {
    return this.reportOptions;
  }
  updateOptions(e) {
    return (this.reportOptions = e), e;
  }
};
kh = ax([S()], kh);
var lx = Object.defineProperty,
  cx = Object.getOwnPropertyDescriptor,
  ux = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? cx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && lx(t, r, n), n;
  },
  Xo = (e, t) => (r, s) => t(r, s, e);
let jh = class {
  constructor(e, t, r) {
    (this.supportMediaTypes = e),
      (this.maxUploadFileSize = t),
      (this.maxUploadImageSize = r),
      (this.dataMap = {}),
      (this.addFileMedia = (s) => {
        this.dataMap[s.id] = s;
      }),
      (this.addFileMedias = (s) => {
        s.forEach((n) => {
          this.dataMap[n.id] = n;
        });
      }),
      (this.getFileMedia = (s) => this.dataMap[s] || null),
      (this.updateFileMedia = (s, n) => {
        const i = this.dataMap[s];
        i &&
          (this.dataMap[s] = {
            ...i,
            ...n,
            extraInfo: { ...i.extraInfo, ...n.extraInfo },
          });
      }),
      (this.removeFileMedia = (s) => {
        delete this.dataMap[s];
      }),
      (this.filterFileMedia = (s) => Object.values(this.dataMap).filter(s)),
      (this.validateFileInfo = (s) =>
        this.supportMediaTypes.includes(s.type)
          ? !s.fileSize || s.fileSize <= 0
            ? zt.ZeroSizeFile
            : s.fileSize > this.maxUploadFileSize ||
                (s.type === T.Image && s.fileSize > this.maxUploadImageSize)
              ? zt.OversizeFile
              : zt.None
          : zt.InvalidMediaType),
      (this.someFileMedia = (s) => Object.values(this.dataMap).some(s));
  }
};
jh = ux([S(), Xo(0, g(kp)), Xo(1, g(jp)), Xo(2, g(Gp))], jh);
const Gh = { list: [], mediaType: T.Unknown, knowledgeKey: "" };
class AL {
  constructor() {
    (this.data = Gh),
      (this.getCurrentRepo = () => this.data),
      (this.updateAddableKnowledgeBaseList = (t) => {
        this.data = { ...this.data, ...t };
      }),
      (this.appendAddableKnowledgeBaseList = (t) => {
        const r = [...this.data.list, ...t];
        return this.updateAddableKnowledgeBaseList({ list: r }), r;
      }),
      (this.reset = () => {
        this.updateAddableKnowledgeBaseList(Gh);
      });
  }
}
var dx = Object.defineProperty,
  hx = Object.getOwnPropertyDescriptor,
  fx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? hx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && dx(t, r, n), n;
  },
  Zo = (e, t) => (r, s) => t(r, s, e);
let Wh = class {
  constructor(e, t, r) {
    (this.supportMediaTypes = e),
      (this.maxUploadFileSize = t),
      (this.maxUploadImageSize = r),
      (this.dataMap = {}),
      (this.addImportFileMedia = (s) => {
        this.dataMap[s.id] = s;
      }),
      (this.addImportFileMedias = (s) => {
        s.forEach((n) => {
          this.dataMap[n.id] = n;
        });
      }),
      (this.getImportFileMedia = (s) => this.dataMap[s] || null),
      (this.getFileIdByMediaId = (s) => {
        const n = Object.values(this.dataMap).filter((i) => i.mediaId === s)[0];
        return n ? n.id : "";
      }),
      (this.updateImportFileMedia = (s, n) => {
        const i = this.dataMap[s];
        i &&
          (this.dataMap[s] = {
            ...i,
            ...n,
            extraInfo: { ...i.extraInfo, ...n.extraInfo },
          });
      }),
      (this.removeImportFileMedia = (s) => {
        delete this.dataMap[s];
      }),
      (this.filterImportFileMedia = (s) =>
        Object.values(this.dataMap).filter(s)),
      (this.validateImportFileInfo = (s) =>
        this.supportMediaTypes.includes(s.type)
          ? !s.fileSize || s.fileSize <= 0
            ? zt.ZeroSizeFile
            : s.fileSize > this.maxUploadFileSize ||
                (s.type === T.Image && s.fileSize > this.maxUploadImageSize)
              ? zt.OversizeFile
              : zt.None
          : zt.InvalidMediaType);
  }
};
Wh = fx([S(), Zo(0, g(kp)), Zo(1, g(jp)), Zo(2, g(Gp))], Wh);
const gx = "";
be.Loading;
const px = { list: [], status: ht.Ready },
  _x = () => iE(() => ({ ...px }));
class OL {
  constructor() {
    (this.store = _x()),
      (this.updateAddableKnowledgeBaseList = (t) => {
        this.store.setState(t);
      }),
      (this.updateKnowledgeBaseStatus = (t, r) => {
        const { list: s } = this.store.getState(),
          n = s.findIndex((o) => o.id === t);
        if (n === -1) return;
        const i = [...s];
        i.splice(n, 1, { ...i[n], ...r }), this.store.setState({ list: i });
      });
  }
  get getState() {
    return this.store.getState;
  }
  get useStore() {
    return this.store;
  }
}
const vx = Symbol.for("SHARE_KNOWLEDGE_LIST_STORE_FACTORY");
Sg.CertificationTypeUnuse, be.Loading;
const wx = Symbol.for("ID_KNOWLEDGE_MANAGEMENT_STORE");
Ts.Init, qe.Unknown;
var Z_ = ((e) => ((e.Before = "before"), (e.After = "after"), e))(Z_ || {});
const mx = (e, t, r) => {
    if (e.length === 0 || t < 0 || t >= e.length) return -1;
    for (let s = t; s >= 0; s -= 1) if (r(e[s], s, e)) return s;
    return -1;
  },
  Sx = (e, t, r) => {
    if (e.length === 0 || t < 0 || t >= e.length) return -1;
    for (let s = t; s < e.length; s += 1) if (r(e[s], s, e)) return s;
    return -1;
  },
  yx = (e, t, r) => {
    const s = mx(e, t, r),
      n = Sx(e, t, r);
    if (s === -1) return n;
    if (n === -1) return s;
    const i = t - s,
      o = n - t;
    return i <= o ? s : n;
  },
  Ex = "CLEAR_SHARE_ID_IN_URL";
var bx = Object.defineProperty,
  Ix = Object.getOwnPropertyDescriptor,
  nc = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Ix(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && bx(t, r, n), n;
  },
  we = (e, t) => (r, s) => t(r, s, e);
const Vh = "temp-folder";
let qi = class {
  constructor(
    e,
    t,
    r,
    s,
    n,
    i,
    o,
    a,
    l,
    c,
    u,
    d,
    f,
    h,
    p,
    _,
    w,
    m,
    E,
    D,
    j,
    V,
    R,
    ie,
    x,
    k,
    H,
    F,
    ve,
  ) {
    (this.notifyTagsUpdate = e),
      (this.getStore = t),
      (this.knowledgeBaseListStore = r),
      (this.getKnowledgeListUseCase = s),
      (this.getInitKnowledgeListUseCaseForFolder = n),
      (this.getNextKnowledgeListUseCaseForFolder = i),
      (this.createFolderUseCase = o),
      (this.updateKnowledgeUsecase = a),
      (this.renameKnowledgeUseCase = l),
      (this.addKnowledgeToListUsecase = c),
      (this.addKnowledgeBaseUsecase = u),
      (this.addParseTaskUseCase = d),
      (this.batchCheckParsingProgressUseCase = f),
      (this.updateKnowledgeBaseUsecase = h),
      (this.updateKnowledgeTagsUseCase = p),
      (this.batchUpdateKnowledgeTagsUseCase = _),
      (this.deleteKnowledgeListUseCase = w),
      (this.removeKnowledgeFromList = m),
      (this.getKnowledgeBaseInfoFromShareIdUseCase = E),
      (this.getKnowledgeUseCase = D),
      (this.onKnowledgeBaseRefresh = j),
      (this.clearShareState = V),
      (this.getKnowledgeBaseDisplayInfoUseCase = R),
      (this.updateKnowledgeListInfoUseCase = ie),
      (this.knowledgeListEventBus = x),
      (this.updateUserSpace = k),
      (this.alertService = H),
      (this.toast = F),
      (this.logger = ve),
      (this.key = "ShareKnowledgeListPresenter"),
      (this.pageSize = 20),
      (this.id = ""),
      (this.idType = ft.Unknown),
      (this.baseInfoUpdateSubject = new Ne()),
      (this.restartParseTask = async (B, C = this.currentFolderId) => {
        this.updateKnowledge([{ mediaId: B, status: Y.WaitParse }], C),
          this.addParseTask(C);
      }),
      (this.createTempFolder = () => {
        const B = `${Vh}-${bn()}`;
        return (
          this.store.setTempInitFolder({
            key: B,
            mediaId: B,
            status: Y.Init,
            title: `未命名文件夹_${ym(Date.now(), "YYMMDDHHmmss")}`,
            mediaType: T.Folder,
            updateTime: 0,
            createTime: 0,
            sourceUrl: "",
            fileSize: 0,
            lastModifyTime: 0,
            lastOpenTime: 0,
            tags: [],
            folderId: this.currentFolderId,
            mediaData: {
              sessionId: void 0,
              noteId: void 0,
              parseProgress: void 0,
            },
          }),
          B
        );
      }),
      (this.finishCreateFolder = async (B, C, I) => {
        const A = await this.createFolderUseCase.execute({
          knowledgeBaseId: this.id,
          folderId: I,
          title: C,
        });
        if (I === this.currentFolderId) {
          if (A instanceof te)
            switch (A.code) {
              case De.ErrCodeFolderNumberLimit:
              case De.ErrCodeFolderDepthLimit:
                return (
                  this.alertService.showAlert(A.message, "top"),
                  this.store.setTempInitFolder(void 0),
                  A
                );
              default:
                return this.toast.error(A.message), A;
            }
          return (
            this.store.replaceTempInitFolder(A),
            this.toast.success("创建文件夹成功"),
            this.clearRenamingMediaId(),
            this.knowledgeListEventBus.createFolder(this.id, I, A),
            A
          );
        }
      }),
      (this.enterFolder = async (B, C = []) => {
        this.updateCurrentFolder(B, C), this.initForNormal(B);
      }),
      (this.toggleSelected = (B, C) => {
        this.store.toggleSelected(B, C);
      }),
      (this.shiftSelect = (B) => {
        const { knowledgeList: C, selected: I } = this.store.getState(),
          A = C.map(lm),
          M = yx(A, B, (re) => I.some((ee) => ee.mediaId === re.mediaId)),
          L = M !== -1 ? M : 0;
        this.selectByRange(L, B, A);
      }),
      (this.removeAllSelected = () => {
        this.store.removeAllSelected();
      }),
      (this.selectByRange = (...B) => {
        this.store.selectByRange(...B);
      }),
      (this.selectOneItem = (B) => {
        this.store.selectOneItem(B);
      }),
      (this.updateGridLane = (B) => this.store.updateGridLane(B)),
      (this.updateCurrentFolder = (B, C = []) => {
        this.store.updateCurrentFolder(B, C);
      }),
      (this.initForShare = async (B) => {
        this.store.setState({ knowledgeBaseStatus: se.Loading });
        const C = await this.getKnowledgeBaseInfoFromShareIdUseCase.execute(
          "",
          this.pageSize,
          B,
        );
        if (C instanceof te || !(C != null && C.knowledgeBaseInfo)) {
          this.logger.error(
            `拉取知识库信息失败, id=${B}`,
            `${this.key}.initEmptyBaseInfo`,
          ),
            this.store.setState({ knowledgeBaseStatus: se.Error });
          return;
        }
        const {
            list: I,
            knowledgeBaseInfo: A,
            totalSize: M,
            isInApplyList: L,
            isEnd: re,
            cursor: ee,
          } = C,
          { userPermissionInfo: pe = {}, id: W } = A,
          me = this.addKnowledgeBaseUsecase.execute(A);
        this.logger.info(
          `拉取知识库信息成功, id:${B}, 拉取列表长度: ${I.length}, knowledgeBaseInfo: ${JSON.stringify(A)}`,
          `${this.key}.initResult`,
        ),
          pe.roleType !== ye.Visitor &&
            (this.clearShareState(),
            this.knowledgeBaseListStore.setFocusKnowledgeBaseId(W)),
          this.store.setState({
            knowledgeBaseStatus: re ? se.End : se.Ready,
            knowledgeBase: me,
            knowledgeList: I || [],
            cursor: ee,
            totalSize: M,
            isInApplyList: L,
          }),
          this.setKnowledgeBaseStateInfo();
      }),
      (this.updateKnowledgeFromRemoteByMediaId = async (B, C) => {
        const I = await this.getKnowledgeUseCase.execute(B, this.id);
        I && this.updateKnowledge([I], C);
      }),
      (this.addParseTask = (B) => {
        var I;
        (I = this.parsingSubscription) == null || I.unsubscribe();
        const C = this.addParseTaskUseCase.execute(this.id, B);
        this.parsingSubscription = C.subscribe(({ updateKnowledge: A }) => {
          if (A.status)
            switch (A.status) {
              case Y.Finish: {
                this.updateKnowledgeFromRemoteByMediaId(A.mediaId, B);
                return;
              }
              default:
                this.updateKnowledge([A], B), this.checkParsingProgress(B);
            }
        });
      }),
      (this.checkParsingProgress = async (B) => {
        var M;
        const { focusKnowledgeBaseId: C } =
            this.knowledgeBaseListStore.getState(),
          { currentFolderId: I } = this.store.getState();
        if (this.id !== C) return;
        (M = this.batchQueryParsingSubscription) == null || M.unsubscribe();
        const A = this.batchCheckParsingProgressUseCase.execute(this.id, I);
        this.batchQueryParsingSubscription = A.subscribe(
          ({ updateKnowledge: L }) => {
            if (L.status)
              switch (L.status) {
                case Y.Finish: {
                  this.updateKnowledgeFromRemoteByMediaId(L.mediaId, B);
                  return;
                }
                default:
                  this.updateKnowledge([L], B);
              }
          },
        );
      }),
      (this.prependKnowledge = (B) => {
        this.store
          .getState()
          .knowledgeList.some((C) => C.mediaId === B.mediaId) ||
          this.store.setState((C) => ({
            ...C,
            knowledgeList: [B, ...C.knowledgeList],
          }));
      }),
      (this.isTempFolder = (B) => B.startsWith(Vh)),
      this.baseInfoUpdateSubject
        .asObservable()
        .pipe(Il(2e3, bl, { leading: !0, trailing: !0 }))
        .subscribe((B) => {
          this.logger.info(
            `知识库基础信息变更, scene: ${B}`,
            `${this.key}.baseInfoUpdateSubject`,
          ),
            this.refreshKnowledgeBasic();
        }),
      this.onKnowledgeBaseRefresh((B) => {
        !this.id ||
          B !== this.id ||
          this.baseInfoUpdateSubject.next("UploadAndParse");
      }),
      this.knowledgeListEventBus.listenAddKnowledge((B, C) => {
        if (B !== this.id) return;
        const { folderId: I = "" } = C,
          A = this.addKnowledgeToListUsecase.execute(
            this.id,
            I,
            [C],
            "unshift",
          );
        this.currentFolderId === I &&
          (A && this.store.setState({ knowledgeList: A }),
          this.baseInfoUpdateSubject.next("UploadAndParse"),
          this.updateUserSpace(),
          this.checkParsingProgress(I));
      }),
      this.knowledgeListEventBus.listenReplaceKnowledge((B, C, I) => {
        if (B !== this.id) return;
        const { folderId: A } = I;
        this.removeKnowledgeFromList.execute(this.id, A, [C]);
        const M = this.addKnowledgeToListUsecase.execute(
          this.id,
          A,
          [I],
          "unshift",
        );
        this.currentFolderId === A &&
          (M && this.store.setState({ knowledgeList: M }),
          this.baseInfoUpdateSubject.next("UploadAndParse"),
          this.updateUserSpace(),
          this.checkParsingProgress(A));
      }),
      this.knowledgeListEventBus.listenTransportKnowledge(
        ({ srcKnowledgeBaseId: B }) => {
          if (B !== this.id) return;
          const { currentFolderId: C } = this.store.getState();
          this.initForNormal(C);
        },
      );
  }
  get useStore() {
    return this.store.useStore;
  }
  async init(e, t = ft.Unknown, r = !1) {
    if (!e) return !1;
    this.logger.info(
      `开始初始化知识库, id=${e}, type=${t}`,
      `${this.key}.initStart`,
    ),
      (this.id = e),
      (this.idType = t);
    const s = this.idType === ft.ShareId;
    return (
      this.store.setState({ currentFolderId: this.id }),
      s ? this.initForShare(e) : this.initForNormal(this.id, r)
    );
  }
  async loadNextPage() {
    const { currentFolderId: e } = this.store.getState(),
      {
        cursor: t,
        knowledgeBaseStatus: r,
        sortType: s,
      } = this.store.getState();
    if (!t || r === se.End || r === se.Loading) return !1;
    this.store.setState({ knowledgeBaseStatus: se.Loading });
    const n = this.idType === ft.ShareId,
      i = n || s !== js.DefaultSortType;
    this.logger.info(
      `开始拉取下一页, params: ${JSON.stringify({ cursor: t, id: this.id, sortType: s })}`,
      `${this.key}.loadNextPage`,
    );
    const o = n
        ? await this.getKnowledgeBaseInfoFromShareIdUseCase.execute(
            t,
            this.pageSize,
            this.id,
          )
        : await this.getNextKnowledgeListUseCaseForFolder.execute({
            cursor: t,
            knowledgeBaseId: this.id,
            sortType: s,
            needDefaultCover: this.idType !== ft.MineKnowledgeBaseId,
            folderId: e,
            skipCache: i,
          }),
      { currentFolderId: a } = this.store.getState();
    if (e !== a) return !1;
    if (
      (this.store.setState({ knowledgeBaseStatus: se.Ready }),
      o instanceof te || !o)
    )
      return (
        this.logger.error(
          `拉取分页失败, id: ${this.id}`,
          `${this.key}.loadNextPageFailed`,
        ),
        !1
      );
    const { knowledgeList: l } = this.store.getState(),
      { list: c, cursor: u, isEnd: d, knowledgeBaseInfo: f, totalSize: h } = o,
      p = [...l, ...c];
    if (f) {
      const _ = this.addKnowledgeBaseUsecase.execute(f);
      this.store.setState({ knowledgeBase: _ }),
        this.setKnowledgeBaseStateInfo();
    }
    return (
      this.logger.info(
        `拉取知识库信息成功, id:${this.id}, 拉取结果: ${JSON.stringify({ length: c.length, newCursor: u, isEnd: d })}, 当前列表长度: ${ha(p) ? "null" : p.length}`,
        `${this.key}.loadNextPageResult`,
      ),
      p
        ? (!n &&
            p.length > 0 &&
            this.checkParsingProgress(this.currentFolderId),
          this.store.setState({
            knowledgeList: p,
            cursor: u,
            knowledgeBaseStatus: d ? se.End : se.Ready,
            totalSize: h,
          }),
          !0)
        : !1
    );
  }
  setKnowledgeBaseStateInfo() {
    const { knowledgeBase: e, isInApplyList: t } = this.store.getState(),
      { knowledgeBasePageStatusText: r, knowledgeBasePageStatus: s } =
        this.getKnowledgeBaseDisplayInfoUseCase.execute(e, t);
    this.store.setState({
      knowledgeBasePageStatus: s,
      knowledgeBasePageStatusText: r,
    });
  }
  async refreshKnowledgeBase(e = !1) {
    const { knowledgeBaseStatus: t, currentFolderId: r } =
      this.store.getState();
    if (t === se.Loading) return;
    this.store.setState({ isRefreshing: !0 }),
      this.idType === ft.ShareId
        ? await this.initForShare(this.id)
        : await this.initForNormal(r, e),
      this.store.setState({ isRefreshing: !1 });
  }
  async refreshKnowledgeBasic() {
    var o;
    const e = this.idType === ft.ShareId;
    this.logger.info(
      `开始刷新知识库基础信息, id:${this.id}`,
      `${this.key}.refreshKnowledgeBasicStart`,
    );
    const t = e
      ? await this.getKnowledgeBaseInfoFromShareIdUseCase.execute(
          "",
          1,
          this.id,
        )
      : await this.getKnowledgeListUseCase.execute({
          cursor: "",
          pageSize: 1,
          knowledgeBaseId: this.id,
          needDefaultCover: this.idType !== ft.MineKnowledgeBaseId,
        });
    if (t instanceof te || !(t != null && t.knowledgeBaseInfo))
      return (
        this.logger.error(
          `刷新知识库基础信息失败, id:${this.id}`,
          `${this.key}.refreshKnowledgeBasicFailed`,
        ),
        null
      );
    const { knowledgeBaseInfo: r, totalSize: s } = t,
      n = this.updateKnowledgeBaseUsecase.execute(this.id, r);
    if (!n) return null;
    const i =
      ((o = n.userPermissionInfo) == null ? void 0 : o.roleType) || ye.Visitor;
    return (
      yu(i).canEdit && this.updateUserSpace(),
      this.logger.info(
        `刷新知识库基础信息成功, id:${this.id}, totalSize: ${s}`,
        `${this.key}.refreshKnowledgeBasicSucc`,
      ),
      this.store.setState({ knowledgeBase: n, ...(s ? { totalSize: s } : {}) }),
      n
    );
  }
  editKnowledgeBasicInfo(e) {
    const t = this.store.getState().knowledgeBase,
      {
        name: r,
        description: s,
        coverUrl: n,
        coverAuditStatus: i,
        recommendedQuestions: o,
      } = e.basicInfo;
    this.logger.info(
      `编辑知识库基础信息, basicInfo: ${JSON.stringify({ name: r, description: s, coverUrl: n, coverAuditStatus: i, recommendedQuestions: o })}`,
      `${this.key}.editKnowledgeBasicInfo`,
    );
    const a = {
      ...t,
      basicInfo: {
        ...t.basicInfo,
        name: r,
        description: s,
        coverUrl: n,
        coverAuditStatus: i,
        recommendedQuestions: o,
      },
    };
    this.updateKnowledgeListInfoUseCase.execute(this.id, this.id, {
      knowledgeBaseInfo: a,
    }),
      this.store.setState({ knowledgeBase: a });
  }
  editKnowledgeRoleInfo(e) {
    const t = this.store.getState().knowledgeBase;
    this.logger.info(
      `编辑知识库权限信息, roleType:${e}`,
      `${this.key}.editKnowledgeRoleInfo`,
    );
    const r = {
      ...t,
      userPermissionInfo: { ...t.userPermissionInfo, roleType: e },
    };
    this.updateKnowledgeListInfoUseCase.execute(this.id, this.id, {
      knowledgeBaseInfo: r,
    }),
      this.store.setState({ knowledgeBase: r });
  }
  editKnowledgeBaseApplyStatus({
    isInApplyList: e,
    permissionInfo: t,
    knowledgeBasePageStatusText: r,
  }) {
    const s = this.store.getState().knowledgeBase;
    this.logger.info(
      `编辑知识库申请信息, params: ${JSON.stringify({ isInApplyList: e, permissionInfo: t, knowledgeBasePageStatusText: r })}`,
      `${this.key}.editKnowledgeBaseApplyStatus`,
    );
    const n = { ...s, permissionInfo: t };
    this.updateKnowledgeListInfoUseCase.execute(this.id, this.id, {
      knowledgeBaseInfo: n,
    }),
      this.store.setState({
        isInApplyList: e,
        knowledgeBasePageStatusText: r,
        knowledgeBase: n,
      }),
      this.setKnowledgeBaseStateInfo();
  }
  editKnowledgeMemberInfo(e) {
    const t = this.store.getState().knowledgeBase,
      { memberCount: r } = e.memberInfo,
      s = { ...t, memberInfo: { ...t.memberInfo, memberCount: r } };
    this.updateKnowledgeListInfoUseCase.execute(this.id, this.id, {
      knowledgeBaseInfo: s,
    }),
      this.store.setState({ knowledgeBase: s });
  }
  editKnowledgeBasePermissionInfo(e) {
    const t = this.store.getState().knowledgeBase,
      r = {
        ...t,
        permissionInfo: { ...t.permissionInfo, ...e.permissionInfo },
      };
    this.updateKnowledgeListInfoUseCase.execute(this.id, this.id, {
      knowledgeBaseInfo: r,
    }),
      this.store.setState({ knowledgeBase: r });
  }
  updateKnowledge(e, t) {
    e.length &&
      (this.updateKnowledgeUsecase.execute(this.id, t, e),
      t === this.currentFolderId &&
        e.forEach((r) => {
          this.store.updateKnowledgeInStore(r);
        }));
  }
  setRenamingMediaId(e) {
    this.store.setState((t) => ({ ...t, renamingMediaId: e }));
  }
  clearRenamingMediaId() {
    this.store.setState((e) => ({ ...e, renamingMediaId: "" }));
  }
  async renameKnowledge(e) {
    const { title: t, mediaId: r, folderId: s, mediaType: n } = e,
      i = await this.renameKnowledgeUseCase.execute(e);
    return i instanceof te
      ? (this.logger.error(
          `重命名知识名称错误${i.message}, id:${this.id}, folderId: ${s}`,
          `${this.key}.renameKnowledgeFailed`,
        ),
        s === this.currentFolderId &&
          this.toast.error(i.message || "重命名失败"),
        !1)
      : i
        ? (this.logger.info(
            `重命名知识名称成功, id:${this.id}, folderId: ${s}, title:${e.title}`,
            `${this.key}.renameKnowledgeSucc`,
          ),
          this.clearRenamingMediaId(),
          this.updateKnowledge([i], s),
          n === T.Folder &&
            this.knowledgeListEventBus.renameFolder({
              folderId: r,
              knowledgeBaseId: this.id,
              parentFolderId: s,
              newFolderName: t,
            }),
          s === this.currentFolderId && this.toast.success("重命名成功"),
          !0)
        : (s === this.currentFolderId && this.toast.error("重命名失败"), !1);
  }
  pushTempKnowledgeList(e) {
    const t = this.addKnowledgeToListUsecase.execute(
      this.id,
      this.id,
      e,
      "unshift",
    );
    return t ? (this.store.setState({ knowledgeList: t }), t) : [];
  }
  async editTags(e, t) {
    const r = [...new Set(t)];
    this.logger.info(
      `开始编辑标签, mediaId:${e},  tags:${JSON.stringify(t)}`,
      `${this.key}.editTagsStart`,
    );
    const s = await this.updateKnowledgeTagsUseCase.execute({
      knowledgeBaseId: this.id,
      tags: r,
      mediaId: e,
    });
    return (
      s
        ? (this.logger.info(
            `编辑标签成功, mediaId:${e}`,
            `${this.key}.editTagsSucc`,
          ),
          this.updateKnowledge(
            [
              {
                mediaId: e,
                tags: r.map((n) => ({ tag: n, highlightTag: "" })),
              },
            ],
            this.currentFolderId,
          ),
          this.notifyTagsUpdate({ id: this.id }),
          this.knowledgeListEventBus.tagsManageUpdate(this.id))
        : this.logger.error(
            `编辑标签失败, mediaId:${e}`,
            `${this.key}.editTagsFailed`,
          ),
      s
    );
  }
  async batchEditTags(e, t) {
    this.logger.info(
      `开始批量添加标签, params:${JSON.stringify({ mediaIds: e, tags: t })}`,
      `${this.key}.batchEditTagsStart`,
    );
    const { success: r, fail: s } =
      await this.batchUpdateKnowledgeTagsUseCase.execute({
        knowledgeBaseId: this.id,
        tags: t,
        mediaIds: e,
      });
    if (r.length > 0) {
      this.logger.info(
        `批量添加标签成功, mediaIds:${JSON.stringify(r)}`,
        `${this.key}.batchEditTagsSucc`,
      );
      const { knowledgeList: i } = this.store.getState();
      this.updateKnowledge(
        e.map((o) => {
          var c;
          const a =
              ((c = i.find((u) => u.mediaId === o)) == null
                ? void 0
                : c.tags) || [],
            l = [...new Set([...a.map((u) => u.tag), ...t])];
          return {
            mediaId: o,
            tags: l.map((u) => ({ tag: u, highlightTag: "" })),
          };
        }),
        this.currentFolderId,
      ),
        this.notifyTagsUpdate({ id: this.id }),
        this.knowledgeListEventBus.tagsManageUpdate(this.id);
    } else
      this.logger.error(
        `批量添加标签失败, mediaIds:${JSON.stringify(e)}`,
        `${this.key}.batchEditTagsFailed`,
      );
    return { success: r, fail: s };
  }
  async deleteKnowledgeList(e) {
    this.logger.info(
      `开始批量删除内容, mediaIds:${JSON.stringify(e)}`,
      `${this.key}.deleteKnowledgeListStart`,
    );
    const { positive: t, negative: r } = bm(e, (i) =>
      this.isTempFolder(i.mediaId),
    );
    if ((t.length > 0 && this.store.setTempInitFolder(void 0), !r.length))
      return { success: [], fail: [] };
    const { success: s, fail: n } =
      await this.deleteKnowledgeListUseCase.execute(this.id, r);
    return (
      s.length > 0 &&
        (this.logger.info(
          `批量删除内容成功, mediaIds:${JSON.stringify(s)}`,
          `${this.key}.deleteKnowledgeListSucc`,
        ),
        this.store.removeKnowledge(s),
        this.baseInfoUpdateSubject.next("Delete"),
        this.notifyTagsUpdate({ id: this.id }),
        this.knowledgeListEventBus.tagsManageUpdate(this.id),
        this.updateUserSpace(),
        this.knowledgeListEventBus.deleteKnowLedge(
          r.filter((i) => s.some((o) => o === i.mediaId)),
        )),
      n.length > 0 &&
        this.logger.info(
          `批量删除内容失败, selectedKnowledge :${JSON.stringify(e)}`,
          `${this.key}.deleteKnowledgeListFailed`,
        ),
      { success: s, fail: n }
    );
  }
  async setKnowledgeListOrder(e) {
    const { sortType: t, currentFolderId: r } = this.store.getState();
    if (t !== e) {
      this.store.setState({
        sortType: e,
        knowledgeBaseStatus: se.Loading,
        knowledgeList: [],
        cursor: "",
      });
      for await (const s of this.getInitKnowledgeListUseCaseForFolder.execute({
        knowledgeBaseId: this.id,
        folderId: r,
        sortType: e,
        skipCache: e !== js.DefaultSortType,
        needDefaultCover: this.idType !== ft.MineKnowledgeBaseId,
      })) {
        const { currentFolderId: n } = this.store.getState();
        if (r !== n) return;
        if (s instanceof te) {
          this.store.setState({ knowledgeBaseStatus: se.Error });
          return;
        }
        const { list: i, cursor: o, isEnd: a, totalSize: l } = s;
        this.store.setState({
          knowledgeList: i,
          cursor: o,
          knowledgeBaseStatus: a ? se.End : se.Ready,
          totalSize: l,
        });
        return;
      }
    }
  }
  async initForNormal(e, t = !1) {
    this.store.setState({ knowledgeBaseStatus: se.Loading });
    const { sortType: r } = this.store.getState();
    for await (const s of this.getInitKnowledgeListUseCaseForFolder.execute({
      knowledgeBaseId: this.id,
      folderId: e,
      sortType: r,
      skipCache: t,
      needDefaultCover: this.idType !== ft.MineKnowledgeBaseId,
    })) {
      const { currentFolderId: n } = this.store.getState();
      if (n !== e) {
        this.logger.info("当前文件夹不一致，静默处理", "initForNormal");
        return;
      }
      if (s instanceof te) {
        this.logger.error(
          `拉取知识列表失败, id=${this.id}，folderId=${e} error: ${JSON.stringify(s)}`,
        ),
          this.store.setFirstPageError(s.message);
        return;
      }
      const {
        list: i,
        knowledgeBaseInfo: o,
        totalSize: a,
        isInApplyList: l,
        isEnd: c,
        cursor: u,
        currentPath: d,
      } = s;
      if (!o) {
        this.logger.error(
          `拉取知识库信息失败, id=${this.id}`,
          `${this.key}.initEmptyBaseInfo`,
        ),
          this.store.setState({ knowledgeBaseStatus: se.Error });
        return;
      }
      const { userPermissionInfo: f = {} } = o,
        h = this.addKnowledgeBaseUsecase.execute(o);
      this.logger.info(
        `拉取知识库信息成功, id:${this.id}, 拉取列表长度: ${i.length}, knowledgeBaseInfo: ${JSON.stringify(o)}`,
        `${this.key}.initResult`,
      );
      const { roleType: p = ye.Visitor } = f;
      yu(p).canEdit && this.updateUserSpace(),
        i.length > 0 && this.checkParsingProgress(e),
        this.store.setState({
          knowledgeBaseStatus: c ? se.End : se.Ready,
          knowledgeBase: h,
          knowledgeList: i || [],
          cursor: u,
          totalSize: a,
          isInApplyList: l,
          currentPath: d,
        }),
        this.setKnowledgeBaseStateInfo();
    }
  }
  get store() {
    return this.getStore(this.id);
  }
  get currentFolderId() {
    return this.store.getState().currentFolderId;
  }
};
nc([q({ fallbackValue: !1 })], qi.prototype, "init", 1);
nc([q({ fallbackValue: !1 })], qi.prototype, "loadNextPage", 1);
qi = nc(
  [
    S(),
    we(0, g(Xw)),
    we(1, g(vx)),
    we(2, g(Qn)),
    we(3, g(v_)),
    we(4, g(Zl)),
    we(5, g(ec)),
    we(6, g(p1)),
    we(7, g(w_)),
    we(8, g(g1)),
    we(9, g(m_)),
    we(10, g(s_)),
    we(11, g(h1)),
    we(12, g(f1)),
    we(13, g($0)),
    we(14, g(c1)),
    we(15, g(u1)),
    we(16, g(r1)),
    we(17, g(d1)),
    we(18, g(d_)),
    we(19, g(i1)),
    we(20, g(W_)),
    we(21, g(Ex)),
    we(22, g(B0)),
    we(23, g(_1)),
    we(24, g(Ql)),
    we(25, g(Zw)),
    we(26, g(Zp)),
    we(27, g(so)),
    we(28, g(ce)),
  ],
  qi,
);
Br.Unknown,
  Ol.FieldAuditStatusUndefined,
  se.Init,
  _g.Normal,
  js.DefaultSortType;
var Ax = Object.defineProperty,
  Ox = Object.getOwnPropertyDescriptor,
  Px = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Ox(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Ax(t, r, n), n;
  },
  Dx = (e, t) => (r, s) => t(r, s, e);
let Hh = class {
  constructor(e) {
    (this.getStore = e),
      (this.key = ""),
      (this.setKeyword = async (t) => {
        this.store.setKeyword(t);
      }),
      (this.setTag = async (t) => {
        this.store.setTag(t);
      }),
      (this.setSearchTags = async (t) => {
        this.store.setSearchTags(t);
      }),
      (this.reset = () => {
        this.store.reset(), this.store.setShowSearchInput(!1);
      });
  }
  init(e) {
    this.key = e;
  }
  get useStore() {
    return this.store.useStore();
  }
  setKnowledgeBase(e) {
    this.store.setKnowledgeBase(e);
  }
  setShowSearchInput(e) {
    this.store.setShowSearchInput(e);
  }
  get store() {
    return this.getStore(this.key);
  }
};
Hh = Px([S(), Dx(0, g(H_))], Hh);
const Tx = Symbol.for("ID_CHOOSE_KNOWLEDGE_DIALOG_STORE");
var Cx = Object.defineProperty,
  xx = Object.getOwnPropertyDescriptor,
  Rx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? xx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Cx(t, r, n), n;
  },
  Mx = (e, t) => (r, s) => t(r, s, e);
let zh = class {
  constructor(e) {
    (this.store = e),
      (this.closeChooseKnowledgeDialog = (t) => {
        const r = this.store.getState().sceneAndDialogMap;
        this.store.setState({
          sceneAndDialogMap: { ...r, [t]: { ...r[t], isDialogVisible: !1 } },
        });
      }),
      (this.openChooseKnowledgeDialog = (t) => {
        const r = this.store.getState().sceneAndDialogMap;
        this.store.setState({
          sceneAndDialogMap: { ...r, [t]: { ...r[t], isDialogVisible: !0 } },
        });
      }),
      (this.setChooseKnowledgeDialogConfirm = (t, r) => {
        const s = this.store.getState().sceneAndDialogMap;
        this.store.setState({
          sceneAndDialogMap: { ...s, [t]: { ...s[t], onConfirm: r } },
        });
      }),
      (this.setImportLimit = (t, r) => {
        const s = this.store.getState().sceneAndDialogMap;
        this.store.setState({
          sceneAndDialogMap: { ...s, [t]: { ...s[t], importLimit: r } },
        });
      });
  }
  get useStore() {
    return this.store;
  }
};
zh = Rx([S(), Mx(0, g(Tx))], zh);
const bs = () => ({
  isDialogVisible: !1,
  importLimit: cm,
  onConfirm: () => {},
});
Ot.Homepage + "",
  bs(),
  Ot.HomeDocument + "",
  bs(),
  Ot.HomeEssay + "",
  bs(),
  Ot.HomeTranslation + "",
  bs(),
  Ot.AiChat + "",
  bs(),
  Ot.NoteChatInput + "",
  bs();
const Lx = Symbol.for("KNOWLEDGE_BASE_SELECTOR_STORE_FACTORY");
var $x = Object.defineProperty,
  Kx = Object.getOwnPropertyDescriptor,
  Bx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Kx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && $x(t, r, n), n;
  },
  qh = (e, t) => (r, s) => t(r, s, e);
let Jh = class {
  constructor(e, t) {
    (this.getStore = e),
      (this.logger = t),
      (this.key = "KnowledgeBaseSelectorPresenter"),
      (this.uniqueId = ""),
      (this.setSelectedKnowledgeBase = (r) => {
        this.logger.info(`set selected knowledge base to ${r}`, this.logKey),
          this.knowledgeBaseSelectorStore.setSelectedKnowledgeBase(r);
      }),
      (this.setSelectAll = (r) => {
        this.logger.info(`set select all to ${r}`, this.logKey),
          this.knowledgeBaseSelectorStore.setSelectAll(r);
      });
  }
  init(e) {
    this.uniqueId = e;
  }
  get knowledgeBaseSelectorStore() {
    return this.getStore(this.key);
  }
  get useStore() {
    return this.knowledgeBaseSelectorStore.useStore();
  }
  get logKey() {
    return `${this.uniqueId} ${this.key}`;
  }
};
Jh = Bx([S(), qh(0, g(Lx)), qh(1, g(ce))], Jh);
var Ux = Object.defineProperty,
  Nx = Object.getOwnPropertyDescriptor,
  Fx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Nx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Ux(t, r, n), n;
  },
  yi = (e, t) => (r, s) => t(r, s, e);
let Yh = class {
  constructor(e, t, r, s) {
    (this.store = e),
      (this.knowledgeMatrixStore = t),
      (this.getPublishedKnowledgeBaseListUseCase = r),
      (this.logger = s),
      (this.tag = "PublishedKnowledgeBaseListPresenter"),
      (this.pageSize = 10),
      (this.load = async () => {
        const {
            knowledgeMatrixInfo: { knowledgeMatrixId: n },
          } = this.knowledgeMatrixStore.getState(),
          { isLoading: i } = this.store.getState();
        if (i) return;
        this.store.setState({ isLoading: !0 });
        const o = await this.getPublishedKnowledgeBaseListUseCase.execute({
          knowledgeMatrixId: n,
          cursor: "",
          limit: this.pageSize,
        });
        if (
          (this.store.setState({ isLoading: !1 }),
          !this.handleResponseStatus(o) || !o.data)
        )
          return;
        const {
          knowledgeBaseListInfo: { list: a, isEnd: l, nextCursor: c },
          isVisitor: u,
        } = o.data;
        this.store.setState({ list: a, isEnd: l, cursor: c, isVisitor: u });
      }),
      (this.loadMore = async () => {
        const {
            knowledgeMatrixInfo: { knowledgeMatrixId: n },
          } = this.knowledgeMatrixStore.getState(),
          { cursor: i, isLoading: o, isEnd: a } = this.store.getState();
        if (o || !i || a) return;
        this.store.setState({ isLoading: !0 });
        const l = await this.getPublishedKnowledgeBaseListUseCase.execute({
          knowledgeMatrixId: n,
          cursor: i,
          limit: this.pageSize,
        });
        if (
          (this.store.setState({ isLoading: !1 }),
          !this.handleResponseStatus(l) || !l.data)
        )
          return;
        const {
          knowledgeBaseListInfo: { list: c, isEnd: u, nextCursor: d },
          isVisitor: f,
        } = l.data;
        this.store.setState({
          list: [...this.store.getState().list, ...c],
          isEnd: u,
          cursor: d,
          isVisitor: f,
        });
      });
  }
  get useStore() {
    return this.store;
  }
  handleResponseStatus(e) {
    return e.status === Ct.AccountNotExist
      ? (this.logger.error("知识号不存在", this.tag), !1)
      : e.status === Ct.Error
        ? (this.logger.error("获取知识号知识库列表失败", this.tag), !1)
        : !0;
  }
};
Yh = Fx([S(), yi(0, g(V_)), yi(1, g(sc)), yi(2, g(gD)), yi(3, g(ce))], Yh);
var kx = Object.defineProperty,
  jx = Object.getOwnPropertyDescriptor,
  Gx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? jx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && kx(t, r, n), n;
  },
  cn = (e, t) => (r, s) => t(r, s, e);
let Qh = class {
  constructor(e, t, r, s, n) {
    (this.knowledgeBaseListStore = e),
      (this.store = t),
      (this.getKnowledgeMatrixHomePageUseCase = r),
      (this.reportService = s),
      (this.logger = n),
      (this.tag = "KnowledgeMatrixHomePagePresenter"),
      (this.getHomePage = async (i) => {
        var f;
        const o = await this.getKnowledgeMatrixHomePageUseCase.execute(i);
        if (o.status === Ct.AccountNotExist) {
          this.store.setState({ accountExist: !1, loadStatus: be.Success }),
            this.logger.error("知识号不存在", this.tag);
          return;
        }
        if (o.status === Ct.Error || !o.data) {
          this.store.setState({ loadStatus: be.Error }),
            this.logger.error("首页接口错误", this.tag);
          return;
        }
        const {
            knowledgeMatrixInfo: a,
            knowledgeDataOverview: l,
            knowledgeBaseListInfo: c,
            knowledgeMatrixExtra: u,
          } = o.data,
          d = u.isVisitor ? qt.VisitorExpo : qt.Expo;
        this.reportService.report(d, { knowledge_matrix_id: i }),
          this.knowledgeBaseListStore.setState({
            ...c,
            cursor: c.nextCursor,
            isVisitor: u.isVisitor,
          }),
          this.store.setState({
            knowledgeMatrixInfo: a,
            knowledgeDataOverview: l,
            knowledgeMatrixExtra: u,
            modifiableTimes:
              ((f = u.modifiableTimesData) == null
                ? void 0
                : f.modifiableTimes) || 0,
            accountExist: !0,
            loadStatus: be.Success,
          });
      }),
      (this.setNeedRegistrationStatus = () => {
        const { knowledgeMatrixExtra: i } = this.store.getState();
        this.store.setState({
          loadStatus: be.Success,
          accountExist: !1,
          knowledgeMatrixExtra: { ...i, isVisitor: !1 },
        });
      });
  }
  get useStore() {
    return this.store;
  }
};
Qh = Gx(
  [S(), cn(0, g(V_)), cn(1, g(sc)), cn(2, g(pD)), cn(3, g(wr)), cn(4, g(ce))],
  Qh,
);
var Wx = Object.defineProperty,
  Vx = Object.getOwnPropertyDescriptor,
  Hx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Vx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Wx(t, r, n), n;
  },
  un = (e, t) => (r, s) => t(r, s, e);
const Xh = "编辑失败";
let Zh = class {
  constructor(e, t, r, s, n) {
    (this.store = e),
      (this.uploadKnowledgeBaseCoverUseCase = t),
      (this.updateKnowledgeMatrixInfoUseCase = r),
      (this.urlParamsService = s),
      (this.reportService = n),
      (this.updateNickName = async (i) => {
        const { knowledgeMatrixId: o } = this.urlParamsService.getURLParams();
        if (!i) return "用户名不能为空";
        if (!o) return Xh;
        const a = await this.updateKnowledgeMatrixInfoUseCase.execute({
            knowledgeMatrixId: o,
            nickName: i,
            fields: ["nick_name"],
            avatar: "",
          }),
          { msg: l, data: c = {}, code: u } = a || {};
        if (l)
          return (
            this.reportService.report(qt.ModifyNicknameFail, {
              reason: u,
              knowledge_matrix_id: o,
            }),
            l
          );
        const { nickName: d = "", modifiableTimes: f = 0 } = c;
        if (!d)
          return (
            this.reportService.report(qt.ModifyNicknameFail, {
              reason: u,
              knowledge_matrix_id: o,
            }),
            Xh
          );
        this.reportService.report(qt.ModifyNicknameSuc, {
          knowledge_matrix_id: o,
        });
        const { knowledgeMatrixInfo: h } = this.store.getState();
        return (
          this.store.setState({
            modifiableTimes: f,
            knowledgeMatrixInfo: { ...h, nickName: d },
          }),
          ""
        );
      }),
      (this.updateAvatar = async (i) => {
        const { knowledgeMatrixId: o } = this.urlParamsService.getURLParams();
        if (!o) return !1;
        const a = await this.updateKnowledgeMatrixInfoUseCase.execute({
            knowledgeMatrixId: o,
            nickName: "",
            fields: ["avatar"],
            avatar: i,
          }),
          { data: l = {}, code: c } = a || {},
          { avatar: u = "", modifiableTimes: d = 0 } = l || {};
        if (!u)
          return (
            this.reportService.report(qt.ModifyAvatarFail, {
              reason: c,
              knowledge_matrix_id: o,
            }),
            !1
          );
        this.reportService.report(qt.ModifyAvatarSuc, {
          knowledge_matrix_id: o,
        });
        const { knowledgeMatrixInfo: f } = this.store.getState();
        return (
          this.store.setState({
            modifiableTimes: d,
            knowledgeMatrixInfo: { ...f, avatar: u },
          }),
          !0
        );
      }),
      (this.uploadCover = (i) =>
        this.uploadKnowledgeBaseCoverUseCase.execute(i));
  }
  get useStore() {
    return this.store;
  }
};
Zh = Hx(
  [S(), un(0, g(sc)), un(1, g(n_)), un(2, g(yD)), un(3, g(go)), un(4, g(wr))],
  Zh,
);
const zx = Symbol("TREND_KNOWLEDGE_MATRIX_TREND_CHART_STORE");
var qx = Object.defineProperty,
  Jx = Object.getOwnPropertyDescriptor,
  Yx = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Jx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && qx(t, r, n), n;
  },
  ea = (e, t) => (r, s) => t(r, s, e);
let ef = class {
  constructor(e, t, r) {
    (this.trendChartStore = e),
      (this.getKnowledgeMatrixTrendChartDataUseCase = t),
      (this.urlParamsService = r),
      (this.knowledgeBaseId = ""),
      (this.updateKnowledgeBaseId = (s, n) => {
        (this.knowledgeBaseId = s),
          this.trendChartStore.resetState({ metricType: n }),
          this.loadChartData();
      }),
      (this.updateMetricType = (s) => {
        const { metricType: n } = this.trendChartStore.getState();
        n !== s &&
          (this.trendChartStore.setState({ metricType: s }),
          this.loadChartData());
      }),
      (this.updateStartTime = (s) => {
        this.trendChartStore.setState({ startTime: s });
      }),
      (this.updateEndTime = (s) => {
        this.trendChartStore.setState({ endTime: s });
      }),
      (this.loadChartData = async () => {
        var l, c;
        const {
            startTime: s,
            endTime: n,
            metricType: i,
          } = this.trendChartStore.getState(),
          { knowledgeMatrixId: o = "" } = this.urlParamsService.getURLParams();
        this.trendChartStore.setState({ loadingStatus: be.Loading });
        const { data: a } =
          (await this.getKnowledgeMatrixTrendChartDataUseCase.execute({
            knowledgeBaseId: this.knowledgeBaseId,
            knowledgeMatrixId: o,
            startTime: s,
            endTime: n,
            metricType: [i],
          })) || {};
        if (
          !(
            (c =
              (l = a == null ? void 0 : a[0]) == null
                ? void 0
                : l.seriesData) != null && c.length
          )
        ) {
          this.trendChartStore.setState({ loadingStatus: be.Error });
          return;
        }
        this.trendChartStore.setState({
          chartData: a[0],
          loadingStatus: be.Success,
        });
      });
  }
  get useStore() {
    return this.trendChartStore.useStore();
  }
};
ef = Yx([S(), ea(0, g(zx)), ea(1, g(_D)), ea(2, g(go))], ef);
const Qx = Symbol("KNOWLEDGE_MATRIX_DATA_OVERVIEW_STORE");
var Xx = Object.defineProperty,
  Zx = Object.getOwnPropertyDescriptor,
  eR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? Zx(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && Xx(t, r, n), n;
  },
  ta = (e, t) => (r, s) => t(r, s, e);
let tf = class {
  constructor(e, t, r) {
    (this.knowledgeMatrixDataOverviewStore = e),
      (this.getKnowledgeMatrixOverviewUseCase = t),
      (this.urlParamsService = r),
      (this.knowledgeBaseId = ""),
      (this.updateKnowledgeBaseId = (s) => {
        (this.knowledgeBaseId = s),
          this.knowledgeMatrixDataOverviewStore.setState({
            loadStatus: be.Loading,
            knowledgeDataOverview: null,
          }),
          this.requestOverviewData();
      }),
      (this.requestOverviewData = async () => {
        const { knowledgeMatrixId: s = "" } =
          this.urlParamsService.getURLParams();
        this.knowledgeMatrixDataOverviewStore.setState({
          loadStatus: be.Loading,
        });
        const { data: n } =
          (await this.getKnowledgeMatrixOverviewUseCase.execute({
            knowledgeBaseId: this.knowledgeBaseId,
            knowledgeMatrixId: s,
          })) || {};
        if (!n) {
          this.knowledgeMatrixDataOverviewStore.setState({
            loadStatus: be.Error,
          });
          return;
        }
        this.knowledgeMatrixDataOverviewStore.setState({
          knowledgeDataOverview: n,
          loadStatus: be.Success,
        });
      });
  }
  get useStore() {
    return this.knowledgeMatrixDataOverviewStore;
  }
};
tf = eR([S(), ta(0, g(Qx)), ta(1, g(vD)), ta(2, g(go))], tf);
be.Loading;
var tR = Object.defineProperty,
  rR = Object.getOwnPropertyDescriptor,
  sR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? rR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && tR(t, r, n), n;
  },
  Yr = (e, t) => (r, s) => t(r, s, e);
let rf = class {
  constructor(e, t, r, s, n, i, o) {
    (this.activateKnowledgeMatrixUseCase = e),
      (this.verifyAccountInfoUseCase = t),
      (this.sendVerifyCodeUseCase = r),
      (this.uploadKnowledgeBaseCoverUseCase = s),
      (this.knowledgeMatrixDialog = n),
      (this.reportService = i),
      (this.logger = o),
      (this.startRegisterKnowledgeMatrix = async (a) => {
        this.reportService.report(qt.Register, { scene: a }),
          this.logger.info(
            `用户开始注册知识号，来源：${a}`,
            "StartRegisterKnowledgeMatrix",
          );
        const { action: l, data: c } =
          await this.knowledgeMatrixDialog.openRegisterKnowledgeMatrixDialog();
        if (l !== Ag.Submit) {
          this.logger.info(
            `用户取消注册知识号，来源：${a}`,
            "StartRegisterKnowledgeMatrix",
          );
          return;
        }
        const { knowledgeMatrixId: u } = c;
        return (
          this.logger.info(
            `用户完成注册知识号，来源：${a}，knowledgeMatrixId: ${u}`,
            "StartRegisterKnowledgeMatrix",
          ),
          u &&
            this.reportService.report(qt.RegisterSuc, {
              scene: a,
              knowledge_matrix_id: u,
            }),
          u
        );
      }),
      (this.verifyAccountInfo = (a) =>
        this.verifyAccountInfoUseCase.execute(a)),
      (this.sendPhoneVerifyCode = (a) => {
        const { knowledgeMatrixId: l } = a;
        return (
          this.logger.info(
            `用户发送验证码，knowledgeMatrixId: ${l}`,
            "StartRegisterKnowledgeMatrix",
          ),
          this.sendVerifyCodeUseCase.execute(a)
        );
      }),
      (this.activateKnowledgeMatrix = (a) => {
        const { knowledgeMatrixId: l } = a;
        return (
          this.reportService.report(qt.VerifyPhoneNumber, {
            knowledge_matrix_id: l,
          }),
          this.activateKnowledgeMatrixUseCase.execute(a)
        );
      }),
      (this.startUpload = (a) =>
        this.uploadKnowledgeBaseCoverUseCase.execute(a));
  }
};
rf = sR(
  [
    S(),
    Yr(0, g(wD)),
    Yr(1, g(mD)),
    Yr(2, g(SD)),
    Yr(3, g(n_)),
    Yr(4, g(c0)),
    Yr(5, g(wr)),
    Yr(6, g(ce)),
  ],
  rf,
);
const nR = Symbol.for("KNOWLEDGE_BASE_BROWSER_STORE"),
  ev = (e, t) => {
    if (Object.is(e, t)) return !0;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof RegExp && t instanceof RegExp)
      return e.toString() === t.toString();
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    const r = Reflect.ownKeys(e),
      s = Reflect.ownKeys(t);
    if (r.length !== s.length) return !1;
    for (let n = 0; n < r.length; n++)
      if (!Reflect.has(t, r[n]) || !ev(e[r[n]], t[r[n]])) return !1;
    return !0;
  };
var iR = Object.defineProperty,
  oR = Object.getOwnPropertyDescriptor,
  aR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? oR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && iR(t, r, n), n;
  },
  lR = (e, t) => (r, s) => t(r, s, e);
let sf = class {
  constructor(e) {
    (this.store = e),
      (this.initBrowserHistory = (t) => {
        const r = { mode: Cl.Browse, context: { ...t, fullPath: [t] } };
        this.store.init(r);
      }),
      (this.hasNext = () => {
        const { history: t, currentIndex: r } = this.store.getState();
        return r < t.length - 1;
      }),
      (this.hasPrevious = () => {
        const { history: t, currentIndex: r } = this.store.getState();
        return r > 0 && t.length > 1;
      }),
      (this.backward = () => {
        this.store.backward();
      }),
      (this.forward = () => {
        this.store.forward();
      }),
      (this.appendHistoryNode = (t, r) => {
        var i;
        const { currentNode: s } = this.store.getState(),
          n = {
            context: {
              ...t,
              fullPath: ((i = s.context) == null ? void 0 : i.fullPath) || [],
            },
            mode: r,
          };
        if (!this.isSameFolder(s, n)) {
          if (this.isContinuousSearchNode(s, n)) {
            if ((this.store.updateCurrentNode(n), this.isEmptySearchNode(n))) {
              this.store.popNode();
              return;
            }
            return;
          }
          this.store.appendNewNode(n);
        }
      }),
      (this.updateFullPath = (t) => {
        this.store.updateFullPath(t);
      }),
      (this.isNodeEqual = (t, r) => {
        if (!t || !r || t.mode !== r.mode) return !1;
        const { fullPath: s, ...n } = t.context || {},
          { fullPath: i, ...o } = r.context || {};
        if (!ev(n, o)) return !1;
        const a = s || [],
          l = i || [];
        return a.length !== l.length
          ? !1
          : a.every(
              (c, u) => c.folderId === l[u].folderId && c.name === l[u].name,
            );
      }),
      (this.isSameFolder = (t, r) =>
        Cc(t) && Cc(r)
          ? !t.context || !r.context
            ? !1
            : t.context.folderId === r.context.folderId
          : !1),
      (this.isContinuousSearchNode = (t, r) =>
        !t.context || !r.context ? !1 : Io(t) && Io(r)),
      (this.isEmptySearchNode = (t) => {
        if (!Io(t) || !t.context) return !1;
        const { keyword: r, tag: s } = t.context;
        return r === "" && s === "";
      });
  }
  get useStore() {
    return this.store.useStore();
  }
};
sf = aR([S(), lR(0, g(nR))], sf);
Cl.Browse, Og.AppendNewNode;
const cR = Symbol.for("SELECT_IMPORT_KNOWLEDGE_STORE_FACTORY");
var uR = Object.defineProperty,
  dR = Object.getOwnPropertyDescriptor,
  hR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? dR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && uR(t, r, n), n;
  },
  Ei = (e, t) => (r, s) => t(r, s, e);
let nf = class {
  constructor(e, t, r, s) {
    (this.knowledgeBaseListStore = e),
      (this.getStore = t),
      (this.copyKnowledgeFromMineUseCase = r),
      (this.logger = s),
      (this.key = ""),
      (this.tag = "SelectAndImportKnowledgePresenter"),
      (this.select = (n) => {
        this.selectKnowledgeStore.select(n);
      }),
      (this.toggleKnowledgeSelect = (n, i) => {
        this.selectKnowledgeStore.toggleKnowledgeSelect(n, i);
      }),
      (this.importKnowledge = async () => {
        const { focusKnowledgeBaseId: n } =
            this.knowledgeBaseListStore.useStore.getState(),
          i = this.selectKnowledgeStore.selectedKnowledgeIds,
          o = await this.copyKnowledgeFromMineUseCase.execute(i, n);
        return o && this.logger.info(`导入${i.length}条知识成功`, this.tag), o;
      }),
      (this.reset = () => {
        this.selectKnowledgeStore.resetSelection();
      }),
      (this.setSelectionByRange = (n, i, o, a = 1 / 0) =>
        this.selectKnowledgeStore.setSelectionByRange(n, i, o, a));
  }
  init(e) {
    this.key = e;
  }
  get selectKnowledgeStore() {
    return this.getStore(this.key);
  }
  get useStore() {
    return this.selectKnowledgeStore.useStore();
  }
};
nf = hR([S(), Ei(0, g(Qn)), Ei(1, g(cR)), Ei(2, g(l1)), Ei(3, g(ce))], nf);
Dl.Default;
const fR = Symbol.for("KNOWLEDGE_TAG_STORE");
var gR = Object.defineProperty,
  pR = Object.getOwnPropertyDescriptor,
  _R = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? pR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && gR(t, r, n), n;
  },
  Qr = (e, t) => (r, s) => t(r, s, e);
const ra = "KnowledgeTagPresenter",
  of = 50;
let af = class {
  constructor(e, t, r, s, n, i, o) {
    (this.store = e),
      (this.deleteKnowledgeTagUseCase = t),
      (this.renameKnowledgeTagUseCase = r),
      (this.loadKnowledgeTagUseCase = s),
      (this.knowledgeListEventBus = n),
      (this.toast = i),
      (this.logger = o),
      (this.id = ""),
      (this.deleteTags = async (a) => {
        const l = await this.deleteKnowledgeTagUseCase.execute(this.id, [a]);
        return l instanceof te
          ? (this.toast.error(
              (l == null ? void 0 : l.message) || "标签删除失败",
            ),
            !1)
          : l
            ? (this.store.setState({
                tagsList: this.store.getState().tagsList.filter((c) => c !== a),
              }),
              this.toast.success("标签删除成功"),
              !0)
            : (this.toast.error("标签删除失败"), !1);
      }),
      (this.renameTags = async (a, l) => {
        const c = await this.renameKnowledgeTagUseCase.execute({
          knowledgeBaseId: this.id,
          originTag: a,
          newTag: l,
        });
        return c instanceof te
          ? (this.toast.error(
              (c == null ? void 0 : c.message) ||
                "标签编辑失败，请重新编辑内容",
            ),
            !1)
          : c
            ? (this.store.setState({
                tagsList: this.store
                  .getState()
                  .tagsList.map((u) => (u === a ? l : u)),
              }),
              this.toast.success("标签编辑成功"),
              !0)
            : (this.toast.error("标签编辑失败，请重新编辑内容"), !1);
      }),
      (this.loadTags = async () => {
        const { isEnd: a, nextCursor: l, tagsList: c } = this.store.getState();
        if (a) return;
        this.store.setState({ loadStatus: be.Loading });
        const u = await this.loadKnowledgeTagUseCase.execute({
          knowledgeBaseId: this.id,
          cursor: l,
          limit: of,
        });
        if (!u) {
          this.store.setState({ loadStatus: be.Error });
          return;
        }
        const { isEnd: d, nextCursor: f, tagsList: h = [] } = u;
        this.store.setState({
          isEnd: d,
          nextCursor: f,
          tagsList: [...c, ...h],
        });
      }),
      this.knowledgeListEventBus.listenTagsManageUpdate((a) => {
        a === this.id && this.init(this.id);
      });
  }
  async init(e) {
    if (!e) return !1;
    (this.id = e),
      this.logger.info(`初始化知识库标签, id=${e}`, `${ra}.initStart`);
    const t = await this.loadKnowledgeTagUseCase.execute({
      knowledgeBaseId: this.id,
      cursor: "",
      limit: of,
    });
    if (!t)
      return (
        this.logger.info(`初始化知识库标签失败, id=${e}`, `${ra}.initEnd`), !1
      );
    const { isEnd: r, nextCursor: s, tagsList: n = [] } = t;
    return (
      this.store.setState({ isEnd: r, nextCursor: s, tagsList: [...n] }),
      this.logger.info(
        `知识库标签信息, id=${e}, tagsNum=${n == null ? void 0 : n.length}, nextCursor=${s}, isEnd=${r}`,
        `${ra}.initEnd`,
      ),
      !0
    );
  }
  get useStore() {
    return this.store;
  }
};
af = _R(
  [
    S(),
    Qr(0, g(fR)),
    Qr(1, g(ED)),
    Qr(2, g(bD)),
    Qr(3, g(ID)),
    Qr(4, g(Ql)),
    Qr(5, g(so)),
    Qr(6, g(ce)),
  ],
  af,
);
be.Success;
var vR = Object.defineProperty,
  wR = Object.getOwnPropertyDescriptor,
  mR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? wR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && vR(t, r, n), n;
  },
  er = (e, t) => (r, s) => t(r, s, e);
const SR = { [yn.KeepAll]: En.Save, [yn.ReplaceAll]: En.Replace };
let lf = class {
  constructor(e, t, r, s, n, i, o, a, l, c) {
    (this.store = e),
      (this.transportKnowledgeUseCase = t),
      (this.getInitKnowledgeListUseCaseForFolder = r),
      (this.getNextKnowledgeListUseCaseForFolder = s),
      (this.knowledgeDialogService = n),
      (this.knowledgeAlertService = i),
      (this.knowledgeListEventBus = o),
      (this.toast = a),
      (this.reporter = l),
      (this.logger = c),
      (this.tag = "KnowledgeManagementPresenter"),
      (this.reset = () => {
        const { transportStatus: u } = this.getState();
        u !== qe.Finish && this.abortTransport();
      }),
      (this.setSelectedFolder = (u) => {
        const { selectedFolderId: d } = this.getState();
        this.store.setSelectedFolderId(d === u.folderId ? "" : u.folderId);
      }),
      (this.changeCurFolder = (u, d) => {
        const { curFolderId: f } = this.getState();
        f !== d &&
          (this.store.setSelectedFolderId(""),
          this.store.changeCurFolder(d ?? u));
      }),
      (this.initList = (u, d) => {
        this.store.initCurFolderInfo({
          folderId: u,
          name: d,
          canCreateFolder: !0,
          fileNumber: 0,
        });
      }),
      (this.getNextList = async (u, d) => {
        const { cursor: f, listStatus: h } = this.getState();
        if (h !== Ts.Normal) return;
        this.store.setListStatus(Ts.Loading);
        const p = await this.getNextKnowledgeListUseCaseForFolder.execute({
            knowledgeBaseId: u,
            folderId: d,
            cursor: f,
          }),
          { list: _, curFolderId: w } = this.getState();
        if (w !== d) return;
        if (p instanceof te) {
          this.logger.error(
            `${this.tag} getNextList, id=${u}, error: ${JSON.stringify(p)}`,
          ),
            this.toast.error(p.message);
          return;
        }
        const { list: m = [] } = p;
        this.logger.info(
          `getNextList knowledgeBaseId: ${u} folderId: ${d} cursor: ${f} nextList: ${JSON.stringify(m)}`,
          `${this.tag}.getNextList`,
        ),
          this.store.setFolderList(p.cursor, p.isEnd, [..._, ...m]);
      }),
      (this.transportKnowledge = async (
        u,
        {
          srcKnowledgeBaseId: d,
          dstKnowledgeBaseId: f,
          mediaIds: h,
          action: p = En.Default,
        },
        _,
        w,
      ) => {
        this.store.setState({ transportStatus: qe.Processing });
        const m = {
          srcKnowledgeBaseId: d,
          dstKnowledgeBaseId: f,
          dstFolderId: this.getState().curFolderId ?? f,
          mediaIds: h,
          action: p,
        };
        p === En.Default &&
          this.reporter.report(tt.KnowledgeFileMoveClick, {
            source_knowledge_base_id: d,
            source_folder_id: w,
            target_knowledge_base_id: f,
            target_folder_id: m.dstFolderId,
            media_ids: h.join(","),
          });
        const E = await this.transportKnowledgeUseCase.execute(u, m);
        if (!E) {
          this.knowledgeAlertService.showAlert(
            "操作失败，请修改或稍后重试",
            "center",
          ),
            this.store.setState({ transportStatus: qe.Error }),
            this.logger.error(
              `transportKnowledge params: ${JSON.stringify(m)} error: result is false`,
              `${this.tag}.transportKnowledge`,
            );
          return;
        }
        const { observer: D, connection: j } = E;
        this.abortController = j;
        const V = D.subscribe({
          next: (R) => {
            const { transportStatus: ie } = R,
              x = {
                event: R,
                operateType: u,
                params: m,
                selectedFolders: _,
                selectedParentFolderId: w,
              };
            switch (ie) {
              case qe.Conflict:
                this.handleTransportConflict(x);
                break;
              case qe.Error:
                this.handleTransportError(x);
                break;
              case qe.Processing:
                this.handleTransportProgress(x);
                break;
              case qe.Finish:
                this.handleTransportFinish(x);
                break;
            }
            ie !== qe.Processing && V.unsubscribe();
          },
          error: (R) => {
            this.store.setState({ transportStatus: qe.Error }),
              this.knowledgeAlertService.showAlert(R.message, "center"),
              this.logger.error(
                `transportKnowledge params: ${JSON.stringify(m)} error: ${JSON.stringify(R)}`,
                `${this.tag}.transportKnowledge`,
              );
          },
        });
      }),
      (this.abortTransport = () => {
        var u;
        (u = this.abortController) == null || u.abort();
      }),
      (this.getList = async (u, d) => {
        const { listStatus: f } = this.getState();
        if (f === Ts.Init) {
          this.store.setListStatus(Ts.Loading);
          for await (const h of this.getInitKnowledgeListUseCaseForFolder.execute(
            { knowledgeBaseId: u, folderId: d },
          )) {
            const { curFolderId: p } = this.getState();
            if (p !== d) return;
            if (h instanceof te) {
              this.logger.error(
                `getList knowledgeBaseId: ${u} folderId: ${d} error: ${JSON.stringify(h)}`,
                `${this.tag}.getList`,
              ),
                this.toast.error(h.message);
              return;
            }
            const { list: _, currentPath: w, isEnd: m, cursor: E } = h;
            this.store.setFolderList(E, m, _),
              this.store.setCurrentPath(w),
              this.logger.info(
                `getList knowledgeBaseId: ${u} folderId: ${d} list: ${JSON.stringify(_)}`,
                `${this.tag}.getList`,
              );
          }
        }
      }),
      (this.notifyTransportFinish = (u, d, f = [], h) => {
        const {
          srcKnowledgeBaseId: p,
          dstKnowledgeBaseId: _,
          dstFolderId: w,
        } = u;
        this.knowledgeListEventBus.transportKnowledge(
          { srcKnowledgeBaseId: p, dstKnowledgeBaseId: _, dstFolderId: w },
          d,
        );
        const m = f.filter((E) => d.some((D) => D.mediaId === E.mediaId));
        m.length > 0 &&
          this.knowledgeListEventBus.moveFolder({
            knowledgeBaseId: p,
            parentFolderId: h,
            targetKnowledgeBaseId: _,
            targetFolderId: w,
            movedFolders: m,
          });
      }),
      (this.reportTransportSucc = (u, d, f, h, p) => {
        this.reporter.report(tt.KnowledgeFileMoveSuc, {
          source_knowledge_base_id: u,
          source_folder_id: d,
          target_knowledge_base_id: f,
          target_folder_id: h,
          media_ids: p,
        });
      }),
      (this.handleTransportConflict = async (u) => {
        this.store.setState({ transportStatus: qe.Conflict });
        const {
            event: d,
            operateType: f,
            params: h,
            selectedFolders: p,
            selectedParentFolderId: _,
          } = u,
          { duplicatedFiles: w = [], errorMsg: m, moveResult: E = [] } = d;
        this.logger.info(
          `handleTransportConflict params: ${JSON.stringify(h)} duplicatedFiles:${JSON.stringify(w)}`,
          `${this.tag}.handleTransportConflict`,
        );
        const D = await this.knowledgeDialogService.openDuplicateFilesDialog(
          w,
          m,
        );
        if (D === yn.Cancel) {
          this.handleTransportFinish(u);
          return;
        }
        if ((E == null ? void 0 : E.length) > 0) {
          const {
            srcKnowledgeBaseId: j,
            dstKnowledgeBaseId: V,
            dstFolderId: R,
          } = h;
          this.reportTransportSucc(
            j,
            _,
            V,
            R,
            E.map(({ mediaId: ie }) => ie).join(","),
          );
        }
        this.transportKnowledge(
          f,
          {
            ...h,
            mediaIds: w.flatMap(({ srcMediaIds: j = [] }) => j),
            action: SR[D],
          },
          p,
          _,
        );
      }),
      (this.handleTransportError = (u) => {
        const {
            event: d,
            params: f,
            selectedFolders: h,
            selectedParentFolderId: p,
          } = u,
          { errorMsg: _ = "操作失败，请修改或稍后重试", moveResult: w = [] } =
            d;
        this.knowledgeAlertService.showAlert(_, "center"),
          this.store.setState({ transportStatus: qe.Error }),
          this.logger.error(
            `handleTransportError params: ${f} error: ${_}`,
            `${this.tag}.handleTransportError`,
          ),
          this.notifyTransportFinish(f, w, h, p);
      }),
      (this.handleTransportProgress = ({ event: u }) => {
        u.progress && this.store.setProgress(u.progress);
      }),
      (this.handleTransportFinish = (u) => {
        this.abortTransport(),
          this.store.setState({ transportStatus: qe.Finish });
        const {
            event: d,
            operateType: f,
            params: h,
            selectedFolders: p,
            selectedParentFolderId: _,
          } = u,
          { moveResult: w = [] } = d,
          m = w.filter(({ retCode: E }) => !E);
        if (m.length > 0) {
          this.toast.success(`${Hw[f]}成功`),
            this.notifyTransportFinish(h, m, p, _);
          const {
            srcKnowledgeBaseId: E,
            dstKnowledgeBaseId: D,
            dstFolderId: j,
          } = h;
          this.reportTransportSucc(
            E,
            _,
            D,
            j,
            w.map(({ mediaId: V }) => V).join(","),
          );
        }
        this.logger.info(
          `handleTransportFinish params: ${h} moveResult: ${JSON.stringify(w)}`,
          `${this.tag}.handleTransportFinish`,
        );
      });
  }
  get getState() {
    return this.store.getState;
  }
};
lf = mR(
  [
    S(),
    er(0, g(wx)),
    er(1, g(uI)),
    er(2, g(Zl)),
    er(3, g(ec)),
    er(4, g(Xp)),
    er(5, g(Zp)),
    er(6, g(Ql)),
    er(7, g(so)),
    er(8, g(wr)),
    er(9, g(ce)),
  ],
  lf,
);
var yR = Object.defineProperty,
  ER = Object.getOwnPropertyDescriptor,
  bR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ER(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && yR(t, r, n), n;
  },
  Xr = (e, t) => (r, s) => t(r, s, e);
let cf = class {
  constructor(e, t, r, s, n, i, o) {
    (this.getInitKnowledgeListUseCaseForFolder = e),
      (this.getNextKnowledgeListUseCaseForFolder = t),
      (this.store = r),
      (this.addKnowledgeToListUsecase = s),
      (this.updateKnowledgeUsecase = n),
      (this.addKnowledgeBaseUsecase = i),
      (this.logger = o),
      (this.key = "KnowledgeFolderListPresenter"),
      (this.pageSize = 20),
      (this.id = ""),
      (this.compareKnowledgeBaseId = ""),
      (this.idType = ft.Unknown),
      (this.init = async (a, l = "") => {
        if (!a) return !1;
        this.logger.info(
          `开始初始化知识库, id=${a} comparedKnowledgeBaseId=${l}`,
          `${this.key}.initStart`,
        ),
          (this.id = a),
          (this.compareKnowledgeBaseId = l),
          this.store.setState({ currentFolderId: this.id, knowledgeList: [] }),
          this.store.setState({ knowledgeBaseStatus: se.Loading });
        const { sortType: c } = this.store.getState();
        for await (const u of this.getInitKnowledgeListUseCaseForFolder.execute(
          {
            knowledgeBaseId: this.id,
            comparedKnowledgeBaseId: l,
            folderId: this.id,
            sortType: c,
            skipCache: !0,
          },
        )) {
          const { currentFolderId: d } = this.store.getState();
          if (this.id !== d) return;
          if (u instanceof te) {
            this.logger.error(
              `拉取知识列表失败, id=${this.id}，error: ${JSON.stringify(u)}`,
            ),
              this.store.setState({ knowledgeBaseStatus: se.Error });
            return;
          }
          const {
            list: f,
            knowledgeBaseInfo: h,
            totalSize: p,
            isInApplyList: _,
            isEnd: w,
            cursor: m,
            currentPath: E,
          } = u;
          if (!h) {
            this.logger.error(
              `拉取知识库信息失败, id=${this.id}`,
              `${this.key}.initEmptyBaseInfo`,
            ),
              this.store.setState({ knowledgeBaseStatus: se.Error });
            return;
          }
          const D = this.addKnowledgeBaseUsecase.execute(h);
          this.logger.info(
            `拉取知识库信息成功, id:${this.id}, 拉取列表长度: ${f.length}, knowledgeBaseInfo: ${JSON.stringify(h)}`,
            `${this.key}.initResult`,
          ),
            this.store.setState({
              knowledgeBaseStatus: w ? se.End : se.Ready,
              knowledgeBase: D,
              knowledgeList: f || [],
              cursor: m,
              totalSize: p,
              isInApplyList: _,
              currentPath: E,
              isEnd: w,
            });
        }
      }),
      (this.getKnowledgeListWithFolder = async (a) => {
        this.store.setState({
          currentFolderId: a,
          cursor: "",
          knowledgeList: [],
          knowledgeBaseStatus: se.Loading,
        });
        const { sortType: l } = this.store.getState();
        for await (const c of this.getInitKnowledgeListUseCaseForFolder.execute(
          {
            knowledgeBaseId: this.id,
            sortType: l,
            needDefaultCover: this.idType !== ft.MineKnowledgeBaseId,
            folderId: a,
            comparedKnowledgeBaseId: this.compareKnowledgeBaseId,
            skipCache: !0,
          },
        )) {
          const { currentFolderId: u } = this.store.getState();
          if (a !== u) return;
          if (
            (this.store.setState({ knowledgeBaseStatus: se.Ready }),
            c instanceof te || !c)
          ) {
            this.logger.error(
              `拉取文件夹内容失败, folderId: ${a}`,
              `${this.key}.getKnowledgeListWithFolder`,
            );
            return;
          }
          const {
            list: d,
            cursor: f,
            isEnd: h,
            knowledgeBaseInfo: p,
            totalSize: _,
            currentPath: w,
          } = c;
          if (p) {
            const m = this.addKnowledgeBaseUsecase.execute(p);
            this.store.setState({ knowledgeBase: m });
          }
          if (
            (this.logger.info(
              `拉取文件夹信息成功, folderId: ${a}, 拉取结果: ${JSON.stringify({ length: d.length, newCursor: f, isEnd: h, currentPath: w })}, 当前列表长度: ${ha(d) ? "null" : d.length}`,
              `${this.key}.getKnowledgeListWithFolder`,
            ),
            d)
          ) {
            this.store.setState({
              knowledgeList: d,
              cursor: f,
              knowledgeBaseStatus: h ? se.End : se.Ready,
              totalSize: _,
              isEnd: h,
              currentPath: w,
            });
            return;
          }
        }
      }),
      (this.loadNextPage = async () => {
        const { currentFolderId: a } = this.store.getState(),
          {
            cursor: l,
            knowledgeBaseStatus: c,
            sortType: u,
          } = this.store.getState();
        if (!l || c === se.End || c === se.Loading) return !1;
        this.store.setState({ knowledgeBaseStatus: se.Loading }),
          this.logger.info(
            `开始拉取下一页, params: ${JSON.stringify({ cursor: l, id: this.id, sortType: u })}`,
            `${this.key}.loadNextPage`,
          );
        const d = await this.getNextKnowledgeListUseCaseForFolder.execute({
            cursor: l,
            knowledgeBaseId: this.id,
            sortType: u,
            needDefaultCover: this.idType !== ft.MineKnowledgeBaseId,
            folderId: a,
            comparedKnowledgeBaseId: this.compareKnowledgeBaseId,
            skipCache: !0,
          }),
          { currentFolderId: f } = this.store.getState();
        if (a !== f) return !1;
        if (
          (this.store.setState({ knowledgeBaseStatus: se.Ready }),
          d instanceof te || !d)
        )
          return (
            this.logger.error(
              `拉取分页失败, id: ${this.id}`,
              `${this.key}.loadNextPageFailed`,
            ),
            !1
          );
        const {
          list: h,
          cursor: p,
          isEnd: _,
          knowledgeBaseInfo: w,
          totalSize: m,
          currentPath: E,
        } = d;
        if (w) {
          const D = this.addKnowledgeBaseUsecase.execute(w);
          this.store.setState({ knowledgeBase: D });
        }
        return (
          this.logger.info(
            `拉取知识库信息成功, id:${this.id}, 拉取结果: ${JSON.stringify({ length: h.length, newCursor: p, isEnd: _, currentPath: E })}, 当前列表长度: ${ha(h) ? "null" : h.length}`,
            `${this.key}.loadNextPageResult`,
          ),
          h
            ? (this.store.setState({
                knowledgeList: [...this.store.getState().knowledgeList, ...h],
                cursor: p,
                knowledgeBaseStatus: _ ? se.End : se.Ready,
                totalSize: m,
                isEnd: _,
                currentPath: E,
              }),
              !0)
            : !1
        );
      }),
      (this.enterFolder = (a) => {
        this.switchFolder(a), this.init(a);
      }),
      (this.switchFolder = (a) => {
        this.store.setState({
          currentFolderId: a,
          knowledgeList: [],
          knowledgeBaseStatus: se.Ready,
        });
      });
  }
  get useStore() {
    return this.store.useStore;
  }
};
cf = bR(
  [
    S(),
    Xr(0, g(Zl)),
    Xr(1, g(ec)),
    Xr(2, g(PT)),
    Xr(3, g(m_)),
    Xr(4, g(w_)),
    Xr(5, g(s_)),
    Xr(6, g(ce)),
  ],
  cf,
);
const IR = Symbol.for("FOLDER_LIST_STORE");
var AR = Object.defineProperty,
  OR = Object.getOwnPropertyDescriptor,
  PR = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? OR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && AR(t, r, n), n;
  },
  sa = (e, t) => (r, s) => t(r, s, e);
const DR = 10;
let uf = class {
  constructor(e, t, r) {
    (this.store = e),
      (this.getFolderListUseCase = t),
      (this.logger = r),
      (this.tag = "FolderListPresenter"),
      (this.init = (s) => {
        this.logger.info(`初始化树根节点：${Ue(s)}`, this.tag),
          this.store.init(Jl(s));
      }),
      (this.refreshFolderNode = async (s, n, i) => {
        const { folderId: o, name: a } = i;
        this.logger.info(
          `刷新文件夹节点：${Ue({ knowledgeBaseId: s, parentFolderId: n, folderInfo: i })}`,
          this.tag,
        );
        const l = await this.getFolderListUseCase.execute({
          cursor: "",
          knowledgeBaseId: s,
          folderId: o,
          limit: DR,
        });
        if (!l) return;
        const { folderList: c, folderNumber: u, isEnd: d, nextCursor: f } = l;
        this.store.replaceNode(
          {
            id: o,
            nodeType: Ni.Folder,
            name: a,
            isLeaf: c.length === 0,
            children: c,
            folderNumber: ot(u, 0),
            childrenIsEnd: d,
            cursor: f,
          },
          n,
        );
      }),
      (this.loadMore = async (s, n, i = 10) => {
        const o = this.store.getTreeNodeById(n);
        if (!o) return;
        const { cursor: a = "", children: l = [] } = o,
          c = await this.getFolderListUseCase.execute({
            cursor: a,
            knowledgeBaseId: s,
            folderId: n,
            limit: i,
          });
        this.logger.info(
          `加载更多文件夹：${Ue({ knowledgeBaseId: s, folderId: n, pageSize: i, res: c })}`,
          this.tag,
        ),
          c &&
            (this.store.updateNodeInfo(n, {
              folderNumber: c.folderNumber,
              childrenIsEnd: c.isEnd,
              cursor: c.nextCursor,
            }),
            this.store.addFileTreeNode({
              parentFolderId: n,
              newFileFolderNodes: c.folderList ?? [],
              needUpdateMap: !0,
              insertInfo: {
                index: l.filter((u) => u.nodeType !== Ni.LoadMore).length - 1,
                position: Z_.After,
              },
            }));
      }),
      (this.setFocusFolderId = (s) => {
        this.logger.info(`通过文件树进入文件夹：${Ue(s)}`, this.tag),
          this.store.setFocusFolderId(s);
      }),
      (this.createFolder = (s, n) => {
        this.logger.info(
          `右键创建文件夹：${Ue({ parentFolderId: s, newFileFolderNodes: n })}`,
          this.tag,
        ),
          this.store.createFileTreeNode(s, n);
      }),
      (this.removeFolders = (s) => {
        this.logger.info(`右键删除文件夹：${Ue(s)}`, this.tag),
          this.store.removeFileTreeNode(s);
      }),
      (this.renameFolder = (s, n) => {
        const i = this.store.getTreeNodeById(s);
        this.logger.info(
          `右键重命名文件夹：${Ue({ folderId: s, newName: n })}`,
          this.tag,
        ),
          i && ((i.name = n), this.store.updateFileTree());
      }),
      (this.moveFolders = (s, n, i) => {
        this.logger.info(
          `右键移动文件夹：${Ue({ targetFolders: s, sourceFolderId: n, distinationFolderId: i })}`,
          this.tag,
        ),
          this.store.moveFileTreeNode(s, n, i);
      });
  }
};
uf = PR([S(), sa(0, g(IR)), sa(1, g(BD)), sa(2, g(ce))], uf);
var tv = { exports: {} };
(function (e, t) {
  (function (r, s) {
    e.exports = s(Fr);
  })(typeof self < "u" ? self : fr, (r) =>
    (() => {
      var s = {
          896: (a, l, c) => {
            Object.defineProperty(l, "__esModule", { value: !0 }),
              (l.useAllInjections =
                l.useOptionalInjection =
                l.useInjection =
                l.useContainer =
                  void 0);
            var u = c(12),
              d = c(799);
            function f(h) {
              var p,
                _,
                w = (0, u.useContext)(d.InversifyReactContext);
              if (!w)
                throw new Error(
                  "Cannot find Inversify container on React Context. `Provider` component is missing in component tree.",
                );
              return h
                ? ((p = function () {
                    return h(w);
                  }),
                  (_ = (0, u.useRef)()).current || (_.current = { v: p() }),
                  _.current.v)
                : w;
            }
            (l.useContainer = f),
              (l.useInjection = function (h) {
                return f(function (p) {
                  return p.get(h);
                });
              }),
              (l.useOptionalInjection = function (h, p) {
                return (
                  p === void 0 && (p = function () {}),
                  f(function (_) {
                    return _.isBound(h) ? _.get(h) : p(_);
                  })
                );
              }),
              (l.useAllInjections = function (h) {
                return f(function (p) {
                  return p.getAll(h);
                });
              });
          },
          799: (a, l, c) => {
            Object.defineProperty(l, "__esModule", { value: !0 }),
              (l.getInstanceAdministration =
                l.getClassAdministration =
                l.createProperty =
                l.ensureAcceptContext =
                l.AdministrationKey =
                l.InversifyReactContext =
                  void 0);
            var u = (0, c(12).createContext)(void 0);
            (l.InversifyReactContext = u),
              (u.displayName = "InversifyReactContext");
            var d = "contextType",
              f = "~$inversify-react";
            function h(_) {
              var w = _[f];
              return (
                w ||
                  ((w = { accepts: !1 }),
                  Object.defineProperty(_, f, {
                    enumerable: !1,
                    writable: !1,
                    value: w,
                  })),
                w
              );
            }
            function p(_) {
              var w = _[f];
              if (!w) {
                var m = _.context;
                if (!m)
                  throw new Error(
                    "Cannot use resolve services without any providers in component tree.",
                  );
                (w = { container: m, properties: {} }),
                  Object.defineProperty(_, f, {
                    enumerable: !1,
                    writable: !1,
                    value: w,
                  });
              }
              return w;
            }
            (l.AdministrationKey = f),
              (l.getClassAdministration = h),
              (l.getInstanceAdministration = p),
              (l.ensureAcceptContext = function (_) {
                var w = h(_);
                if (!w.accepts) {
                  var m = _.contextType,
                    E = _.displayName || _.name;
                  if (m)
                    throw new Error(
                      `inversify-react cannot configure React context.
` +
                        "Component `"
                          .concat(E, "` already has `")
                          .concat(d, ": ")
                          .concat(
                            m.displayName || "<anonymous context>",
                            "` defined.\n",
                          ) +
                        `@see inversify-react/test/resolve.tsx#limitations for more info and workarounds
`,
                    );
                  Object.defineProperty(_, d, {
                    enumerable: !0,
                    get: function () {
                      return u;
                    },
                    set: function (D) {
                      if (D !== u)
                        throw new Error(
                          "Cannot change `"
                            .concat(d, "` of `")
                            .concat(E, "` component.\n") +
                            `Looks like you are using inversify-react decorators, which have already patched this component and use own context to deliver IoC container.
@see inversify-react/test/resolve.tsx#limitations for more info and workarounds
`,
                        );
                    },
                  }),
                    (w.accepts = !0);
                }
              }),
              (l.createProperty = function (_, w, m, E) {
                Object.defineProperty(_, w, {
                  enumerable: !0,
                  get: function () {
                    var j = p(this),
                      V = j.properties[w];
                    if (!V) {
                      var R,
                        ie = j.container;
                      (R = E.isAll
                        ? E.isOptional && !ie.isBound(m)
                          ? []
                          : ie.getAll(m)
                        : E.isOptional
                          ? ie.isBound(m)
                            ? ie.get(m)
                            : E.defaultValue
                          : ie.get(m)),
                        (V = j.properties[w] =
                          function () {
                            return R;
                          });
                    }
                    return V();
                  },
                });
                var D = Object.getOwnPropertyDescriptor(_, w);
                if (!D) throw new Error("Failed to define property");
                return D;
              });
          },
          21: (a, l, c) => {
            Object.defineProperty(l, "__esModule", { value: !0 }),
              (l.Provider = void 0);
            var u = c(12),
              d = c(12),
              f = c(799),
              h = function (p) {
                var _ = p.children,
                  w = p.container,
                  m = p.standalone,
                  E = m !== void 0 && m,
                  D = (0, d.useState)(w)[0];
                if ("resolve" in w && w !== D)
                  throw new Error(
                    "Changing `container` prop (swapping container in runtime) is not supported.\nIf you're rendering Provider in some list, try adding `key={container.id}` to the Provider.\nMore info on React lists:\nhttps://reactjs.org/docs/lists-and-keys.html#keys\nhttps://reactjs.org/docs/reconciliation.html#recursing-on-children",
                  );
                var j = (0, d.useState)(E)[0];
                if (E !== j)
                  throw new Error(
                    "Changing `standalone` prop is not supported.",
                  );
                var V = (0, d.useContext)(f.InversifyReactContext);
                return (
                  (0, d.useState)(function () {
                    if (!j && V) {
                      if (V === D)
                        throw new Error(
                          "Provider has found a parent container (on surrounding React Context), yet somehow it's the same as container specified in props. It doesn't make sense.\nPerhaps you meant to configure Provider as `standalone={true}`?",
                        );
                      if (D.parent && D.parent !== V)
                        throw new Error(
                          "Ambiguous containers hierarchy.\nProvider has found a parent for specified `container`, but it already has a different parent.\nLearn more at https://github.com/Kukkimonsuta/inversify-react/blob/v0.5.0/src/provider.tsx",
                        );
                      D.parent = V;
                    }
                  }),
                  u.createElement(
                    f.InversifyReactContext.Provider,
                    { value: D },
                    _,
                  )
                );
              };
            (l.Provider = h), (l.default = h);
          },
          704: (a, l, c) => {
            Object.defineProperty(l, "__esModule", { value: !0 }),
              (l.resolve = void 0);
            var u = c(799);
            function d(p, _, w, m) {
              return (
                (0, u.ensureAcceptContext)(p.constructor),
                (0, u.createProperty)(p, _, w, m)
              );
            }
            function f(p, _) {
              if (!_)
                throw new Error(
                  "Decorator `resolve` failed to resolve property name",
                );
              if (!Reflect || !Reflect.getMetadata)
                throw new Error(
                  "Decorator `resolve` without specifying service identifier requires `reflect-metadata`",
                );
              var w = Reflect.getMetadata("design:type", p, _);
              if (!w)
                throw new Error(
                  "Failed to discover property type, is `emitDecoratorMetadata` enabled?",
                );
              return w;
            }
            var h = function (p, _, w) {
              if (_ !== void 0) return d(p, _, f(p, _), {});
              var m = p;
              if (!m) throw new Error("Invalid property type.");
              return function (E, D, j) {
                return d(E, D, m, {});
              };
            };
            (l.resolve = h),
              (h.optional = function () {
                for (var p = [], _ = 0; _ < arguments.length; _++)
                  p[_] = arguments[_];
                if (typeof p[1] == "string" && p.length === 3) {
                  var w = p[0],
                    m = p[1];
                  return p[2], d(w, m, f(w, m), { isOptional: !0 });
                }
                var E = p[0],
                  D = p[1];
                return function (j, V, R) {
                  return d(j, V, E, { isOptional: !0, defaultValue: D });
                };
              }),
              (h.all = function () {
                for (var p = [], _ = 0; _ < arguments.length; _++)
                  p[_] = arguments[_];
                if (typeof p[1] == "string" && p.length === 3) {
                  var w = p[0],
                    m = p[1];
                  return p[2], d(w, m, f(w, m), { isAll: !0 });
                }
                var E = p[0];
                return function (D, j, V) {
                  return d(D, j, E, { isAll: !0 });
                };
              }),
              (h.optional.all = function () {
                for (var p = [], _ = 0; _ < arguments.length; _++)
                  p[_] = arguments[_];
                if (typeof p[1] == "string" && p.length === 3) {
                  var w = p[0],
                    m = p[1];
                  return p[2], d(w, m, f(w, m), { isAll: !0 });
                }
                var E = p[0];
                return function (D, j, V) {
                  return d(D, j, E, { isAll: !0, isOptional: !0 });
                };
              }),
              (l.default = h);
          },
          12: (a) => {
            a.exports = r;
          },
        },
        n = {};
      function i(a) {
        var l = n[a];
        if (l !== void 0) return l.exports;
        var c = (n[a] = { exports: {} });
        return s[a](c, c.exports, i), c.exports;
      }
      var o = {};
      return (
        (() => {
          var a = o;
          Object.defineProperty(a, "__esModule", { value: !0 }),
            (a.useOptionalInjection =
              a.useInjection =
              a.useContainer =
              a.useAllInjections =
              a.Provider =
              a.resolve =
                void 0);
          var l = i(704);
          Object.defineProperty(a, "resolve", {
            enumerable: !0,
            get: function () {
              return l.resolve;
            },
          });
          var c = i(21);
          Object.defineProperty(a, "Provider", {
            enumerable: !0,
            get: function () {
              return c.Provider;
            },
          });
          var u = i(896);
          Object.defineProperty(a, "useAllInjections", {
            enumerable: !0,
            get: function () {
              return u.useAllInjections;
            },
          }),
            Object.defineProperty(a, "useContainer", {
              enumerable: !0,
              get: function () {
                return u.useContainer;
              },
            }),
            Object.defineProperty(a, "useInjection", {
              enumerable: !0,
              get: function () {
                return u.useInjection;
              },
            }),
            Object.defineProperty(a, "useOptionalInjection", {
              enumerable: !0,
              get: function () {
                return u.useOptionalInjection;
              },
            });
        })(),
        o
      );
    })(),
  );
})(tv);
var PL = tv.exports;
Pl.ImportDialog;
vg.HomePage;
var rv = { exports: {} },
  sv = { exports: {} };
(function () {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    t = {
      rotl: function (r, s) {
        return (r << s) | (r >>> (32 - s));
      },
      rotr: function (r, s) {
        return (r << (32 - s)) | (r >>> s);
      },
      endian: function (r) {
        if (r.constructor == Number)
          return (t.rotl(r, 8) & 16711935) | (t.rotl(r, 24) & 4278255360);
        for (var s = 0; s < r.length; s++) r[s] = t.endian(r[s]);
        return r;
      },
      randomBytes: function (r) {
        for (var s = []; r > 0; r--) s.push(Math.floor(Math.random() * 256));
        return s;
      },
      bytesToWords: function (r) {
        for (var s = [], n = 0, i = 0; n < r.length; n++, i += 8)
          s[i >>> 5] |= r[n] << (24 - (i % 32));
        return s;
      },
      wordsToBytes: function (r) {
        for (var s = [], n = 0; n < r.length * 32; n += 8)
          s.push((r[n >>> 5] >>> (24 - (n % 32))) & 255);
        return s;
      },
      bytesToHex: function (r) {
        for (var s = [], n = 0; n < r.length; n++)
          s.push((r[n] >>> 4).toString(16)), s.push((r[n] & 15).toString(16));
        return s.join("");
      },
      hexToBytes: function (r) {
        for (var s = [], n = 0; n < r.length; n += 2)
          s.push(parseInt(r.substr(n, 2), 16));
        return s;
      },
      bytesToBase64: function (r) {
        for (var s = [], n = 0; n < r.length; n += 3)
          for (
            var i = (r[n] << 16) | (r[n + 1] << 8) | r[n + 2], o = 0;
            o < 4;
            o++
          )
            n * 8 + o * 6 <= r.length * 8
              ? s.push(e.charAt((i >>> (6 * (3 - o))) & 63))
              : s.push("=");
        return s.join("");
      },
      base64ToBytes: function (r) {
        r = r.replace(/[^A-Z0-9+\/]/gi, "");
        for (var s = [], n = 0, i = 0; n < r.length; i = ++n % 4)
          i != 0 &&
            s.push(
              ((e.indexOf(r.charAt(n - 1)) & (Math.pow(2, -2 * i + 8) - 1)) <<
                (i * 2)) |
                (e.indexOf(r.charAt(n)) >>> (6 - i * 2)),
            );
        return s;
      },
    };
  sv.exports = t;
})();
var TR = sv.exports,
  hl = {
    utf8: {
      stringToBytes: function (e) {
        return hl.bin.stringToBytes(unescape(encodeURIComponent(e)));
      },
      bytesToString: function (e) {
        return decodeURIComponent(escape(hl.bin.bytesToString(e)));
      },
    },
    bin: {
      stringToBytes: function (e) {
        for (var t = [], r = 0; r < e.length; r++)
          t.push(e.charCodeAt(r) & 255);
        return t;
      },
      bytesToString: function (e) {
        for (var t = [], r = 0; r < e.length; r++)
          t.push(String.fromCharCode(e[r]));
        return t.join("");
      },
    },
  },
  df = hl;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var CR = function (e) {
  return e != null && (nv(e) || xR(e) || !!e._isBuffer);
};
function nv(e) {
  return (
    !!e.constructor &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function xR(e) {
  return (
    typeof e.readFloatLE == "function" &&
    typeof e.slice == "function" &&
    nv(e.slice(0, 0))
  );
}
(function () {
  var e = TR,
    t = df.utf8,
    r = CR,
    s = df.bin,
    n = function (i, o) {
      i.constructor == String
        ? o && o.encoding === "binary"
          ? (i = s.stringToBytes(i))
          : (i = t.stringToBytes(i))
        : r(i)
          ? (i = Array.prototype.slice.call(i, 0))
          : !Array.isArray(i) &&
            i.constructor !== Uint8Array &&
            (i = i.toString());
      for (
        var a = e.bytesToWords(i),
          l = i.length * 8,
          c = 1732584193,
          u = -271733879,
          d = -1732584194,
          f = 271733878,
          h = 0;
        h < a.length;
        h++
      )
        a[h] =
          (((a[h] << 8) | (a[h] >>> 24)) & 16711935) |
          (((a[h] << 24) | (a[h] >>> 8)) & 4278255360);
      (a[l >>> 5] |= 128 << l % 32), (a[(((l + 64) >>> 9) << 4) + 14] = l);
      for (
        var p = n._ff, _ = n._gg, w = n._hh, m = n._ii, h = 0;
        h < a.length;
        h += 16
      ) {
        var E = c,
          D = u,
          j = d,
          V = f;
        (c = p(c, u, d, f, a[h + 0], 7, -680876936)),
          (f = p(f, c, u, d, a[h + 1], 12, -389564586)),
          (d = p(d, f, c, u, a[h + 2], 17, 606105819)),
          (u = p(u, d, f, c, a[h + 3], 22, -1044525330)),
          (c = p(c, u, d, f, a[h + 4], 7, -176418897)),
          (f = p(f, c, u, d, a[h + 5], 12, 1200080426)),
          (d = p(d, f, c, u, a[h + 6], 17, -1473231341)),
          (u = p(u, d, f, c, a[h + 7], 22, -45705983)),
          (c = p(c, u, d, f, a[h + 8], 7, 1770035416)),
          (f = p(f, c, u, d, a[h + 9], 12, -1958414417)),
          (d = p(d, f, c, u, a[h + 10], 17, -42063)),
          (u = p(u, d, f, c, a[h + 11], 22, -1990404162)),
          (c = p(c, u, d, f, a[h + 12], 7, 1804603682)),
          (f = p(f, c, u, d, a[h + 13], 12, -40341101)),
          (d = p(d, f, c, u, a[h + 14], 17, -1502002290)),
          (u = p(u, d, f, c, a[h + 15], 22, 1236535329)),
          (c = _(c, u, d, f, a[h + 1], 5, -165796510)),
          (f = _(f, c, u, d, a[h + 6], 9, -1069501632)),
          (d = _(d, f, c, u, a[h + 11], 14, 643717713)),
          (u = _(u, d, f, c, a[h + 0], 20, -373897302)),
          (c = _(c, u, d, f, a[h + 5], 5, -701558691)),
          (f = _(f, c, u, d, a[h + 10], 9, 38016083)),
          (d = _(d, f, c, u, a[h + 15], 14, -660478335)),
          (u = _(u, d, f, c, a[h + 4], 20, -405537848)),
          (c = _(c, u, d, f, a[h + 9], 5, 568446438)),
          (f = _(f, c, u, d, a[h + 14], 9, -1019803690)),
          (d = _(d, f, c, u, a[h + 3], 14, -187363961)),
          (u = _(u, d, f, c, a[h + 8], 20, 1163531501)),
          (c = _(c, u, d, f, a[h + 13], 5, -1444681467)),
          (f = _(f, c, u, d, a[h + 2], 9, -51403784)),
          (d = _(d, f, c, u, a[h + 7], 14, 1735328473)),
          (u = _(u, d, f, c, a[h + 12], 20, -1926607734)),
          (c = w(c, u, d, f, a[h + 5], 4, -378558)),
          (f = w(f, c, u, d, a[h + 8], 11, -2022574463)),
          (d = w(d, f, c, u, a[h + 11], 16, 1839030562)),
          (u = w(u, d, f, c, a[h + 14], 23, -35309556)),
          (c = w(c, u, d, f, a[h + 1], 4, -1530992060)),
          (f = w(f, c, u, d, a[h + 4], 11, 1272893353)),
          (d = w(d, f, c, u, a[h + 7], 16, -155497632)),
          (u = w(u, d, f, c, a[h + 10], 23, -1094730640)),
          (c = w(c, u, d, f, a[h + 13], 4, 681279174)),
          (f = w(f, c, u, d, a[h + 0], 11, -358537222)),
          (d = w(d, f, c, u, a[h + 3], 16, -722521979)),
          (u = w(u, d, f, c, a[h + 6], 23, 76029189)),
          (c = w(c, u, d, f, a[h + 9], 4, -640364487)),
          (f = w(f, c, u, d, a[h + 12], 11, -421815835)),
          (d = w(d, f, c, u, a[h + 15], 16, 530742520)),
          (u = w(u, d, f, c, a[h + 2], 23, -995338651)),
          (c = m(c, u, d, f, a[h + 0], 6, -198630844)),
          (f = m(f, c, u, d, a[h + 7], 10, 1126891415)),
          (d = m(d, f, c, u, a[h + 14], 15, -1416354905)),
          (u = m(u, d, f, c, a[h + 5], 21, -57434055)),
          (c = m(c, u, d, f, a[h + 12], 6, 1700485571)),
          (f = m(f, c, u, d, a[h + 3], 10, -1894986606)),
          (d = m(d, f, c, u, a[h + 10], 15, -1051523)),
          (u = m(u, d, f, c, a[h + 1], 21, -2054922799)),
          (c = m(c, u, d, f, a[h + 8], 6, 1873313359)),
          (f = m(f, c, u, d, a[h + 15], 10, -30611744)),
          (d = m(d, f, c, u, a[h + 6], 15, -1560198380)),
          (u = m(u, d, f, c, a[h + 13], 21, 1309151649)),
          (c = m(c, u, d, f, a[h + 4], 6, -145523070)),
          (f = m(f, c, u, d, a[h + 11], 10, -1120210379)),
          (d = m(d, f, c, u, a[h + 2], 15, 718787259)),
          (u = m(u, d, f, c, a[h + 9], 21, -343485551)),
          (c = (c + E) >>> 0),
          (u = (u + D) >>> 0),
          (d = (d + j) >>> 0),
          (f = (f + V) >>> 0);
      }
      return e.endian([c, u, d, f]);
    };
  (n._ff = function (i, o, a, l, c, u, d) {
    var f = i + ((o & a) | (~o & l)) + (c >>> 0) + d;
    return ((f << u) | (f >>> (32 - u))) + o;
  }),
    (n._gg = function (i, o, a, l, c, u, d) {
      var f = i + ((o & l) | (a & ~l)) + (c >>> 0) + d;
      return ((f << u) | (f >>> (32 - u))) + o;
    }),
    (n._hh = function (i, o, a, l, c, u, d) {
      var f = i + (o ^ a ^ l) + (c >>> 0) + d;
      return ((f << u) | (f >>> (32 - u))) + o;
    }),
    (n._ii = function (i, o, a, l, c, u, d) {
      var f = i + (a ^ (o | ~l)) + (c >>> 0) + d;
      return ((f << u) | (f >>> (32 - u))) + o;
    }),
    (n._blocksize = 16),
    (n._digestsize = 16),
    (rv.exports = function (i, o) {
      if (i == null) throw new Error("Illegal argument " + i);
      var a = e.wordsToBytes(n(i, o));
      return o && o.asBytes
        ? a
        : o && o.asString
          ? s.bytesToString(a)
          : e.bytesToHex(a);
    });
})();
var RR = rv.exports;
const DL = gs(RR);
var ic = { exports: {} };
const MR = (e) =>
    typeof crypto < "u" && typeof crypto.getRandomValues == "function"
      ? () => {
          const t = crypto.getRandomValues(new Uint8Array(1))[0];
          return (t >= e ? t % e : t).toString(e);
        }
      : () => Math.floor(Math.random() * e).toString(e),
  iv = (e = 7, t = !1) => Array.from({ length: e }, MR(t ? 16 : 36)).join("");
ic.exports = iv;
ic.exports.default = iv;
var LR = ic.exports;
const Ji = gs(LR);
var $R = () => `uid::${Ji(7)}`,
  ov = (e, t = ["endpointName", "fingerprint"]) =>
    typeof e == "object" && e !== null && t.every((r) => r in e),
  TL = (e) => {
    if (!ov(e)) throw new TypeError("Invalid connection args");
    return JSON.stringify(e);
  },
  KR = (e) => {
    try {
      const t = JSON.parse(e);
      return ov(t) ? t : null;
    } catch {
      return null;
    }
  },
  BR = () => {
    let e = [];
    return {
      add: (...t) => {
        e = [...e, ...t];
      },
      remove: (t) => {
        e =
          typeof t == "string"
            ? e.filter((r) => r.message.transactionId !== t)
            : e.filter((r) => !t.includes(r));
      },
      entries: () => e,
    };
  },
  dn = class {
    static toBackground(e, t) {
      return e.postMessage(t);
    }
    static toExtensionContext(e, t) {
      return e.postMessage(t);
    }
  },
  UR = Object.defineProperty,
  NR = Object.defineProperties,
  FR = Object.getOwnPropertyDescriptors,
  hf = Object.getOwnPropertySymbols,
  kR = Object.prototype.hasOwnProperty,
  jR = Object.prototype.propertyIsEnumerable,
  ff = (e, t, r) =>
    t in e
      ? UR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  xr = (e, t) => {
    for (var r in t || (t = {})) kR.call(t, r) && ff(e, r, t[r]);
    if (hf) for (var r of hf(t)) jR.call(t, r) && ff(e, r, t[r]);
    return e;
  },
  oc = (e, t) => NR(e, FR(t)),
  GR =
    /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/,
  ac = (e) => {
    const [, t, r, s] = e.match(GR) || [];
    return { context: t, tabId: +r, frameId: s ? +s : void 0 };
  },
  Mi = ({ context: e, tabId: t, frameId: r }) =>
    ["background", "popup", "options"].includes(e)
      ? e
      : `${e}@${t}${r ? `.${r}` : ""}`;
const WR = [
    { property: "name", enumerable: !1 },
    { property: "message", enumerable: !1 },
    { property: "stack", enumerable: !1 },
    { property: "code", enumerable: !0 },
  ],
  fl = Symbol(".toJSON was called"),
  VR = (e) => {
    e[fl] = !0;
    const t = e.toJSON();
    return delete e[fl], t;
  },
  av = ({
    from: e,
    seen: t,
    to_: r,
    forceEnumerable: s,
    maxDepth: n,
    depth: i,
  }) => {
    const o = r || (Array.isArray(e) ? [] : {});
    if ((t.push(e), i >= n)) return o;
    if (typeof e.toJSON == "function" && e[fl] !== !0) return VR(e);
    for (const [a, l] of Object.entries(e)) {
      if (typeof Buffer == "function" && Buffer.isBuffer(l)) {
        o[a] = "[object Buffer]";
        continue;
      }
      if (l !== null && typeof l == "object" && typeof l.pipe == "function") {
        o[a] = "[object Stream]";
        continue;
      }
      if (typeof l != "function") {
        if (!l || typeof l != "object") {
          o[a] = l;
          continue;
        }
        if (!t.includes(e[a])) {
          i++,
            (o[a] = av({
              from: e[a],
              seen: [...t],
              forceEnumerable: s,
              maxDepth: n,
              depth: i,
            }));
          continue;
        }
        o[a] = "[Circular]";
      }
    }
    for (const { property: a, enumerable: l } of WR)
      typeof e[a] == "string" &&
        Object.defineProperty(o, a, {
          value: e[a],
          enumerable: s ? !0 : l,
          configurable: !0,
          writable: !0,
        });
    return o;
  };
function HR(e, t = {}) {
  const { maxDepth: r = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null
    ? av({ from: e, seen: [], forceEnumerable: !0, maxDepth: r, depth: 0 })
    : typeof e == "function"
      ? `[Function: ${e.name || "anonymous"}]`
      : e;
}
let lv = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((r) => r(...t));
  },
  on(e, t) {
    return (
      (this.events[e] = this.events[e] || []).push(t),
      () => (this.events[e] = (this.events[e] || []).filter((r) => r !== t))
    );
  },
});
var zR = (e, t, r) => {
    const s = Ji(),
      n = new Map(),
      i = new Map(),
      o = (a) => {
        if (
          a.destination.context === e &&
          !a.destination.frameId &&
          !a.destination.tabId
        ) {
          r == null || r(a);
          const { transactionId: l, messageID: c, messageType: u } = a,
            d = () => {
              const h = n.get(l);
              if (h) {
                const { err: p, data: _ } = a;
                if (p) {
                  const w = p,
                    m = self[w.name],
                    E = new (typeof m == "function" ? m : Error)(w.message);
                  for (const D in w) E[D] = w[D];
                  h.reject(E);
                } else h.resolve(_);
                n.delete(l);
              }
            },
            f = async () => {
              let h,
                p,
                _ = !1;
              try {
                const w = i.get(c);
                if (typeof w == "function")
                  h = await w({
                    sender: a.origin,
                    id: c,
                    data: a.data,
                    timestamp: a.timestamp,
                  });
                else
                  throw (
                    ((_ = !0),
                    new Error(
                      `[webext-bridge] No handler registered in '${e}' to accept messages with id '${c}'`,
                    ))
                  );
              } catch (w) {
                p = w;
              } finally {
                if (
                  (p && (a.err = HR(p)),
                  o(
                    oc(xr({}, a), {
                      messageType: "reply",
                      data: h,
                      origin: { context: e, tabId: null },
                      destination: a.origin,
                      hops: [],
                    }),
                  ),
                  p && !_)
                )
                  throw h;
              }
            };
          switch (u) {
            case "reply":
              return d();
            case "message":
              return f();
          }
        }
        return a.hops.push(`${e}::${s}`), t(a);
      };
    return {
      handleMessage: o,
      endTransaction: (a) => {
        const l = n.get(a);
        l == null || l.reject("Transaction was ended before it could complete"),
          n.delete(a);
      },
      sendMessage: (a, l, c = "background") => {
        const u = typeof c == "string" ? ac(c) : c,
          d = "Bridge#sendMessage ->";
        if (!u.context)
          throw new TypeError(
            `${d} Destination must be any one of known destinations`,
          );
        return new Promise((f, h) => {
          const p = {
            messageID: a,
            data: l,
            destination: u,
            messageType: "message",
            transactionId: Ji(),
            origin: { context: e, tabId: null },
            hops: [],
            timestamp: Date.now(),
          };
          n.set(p.transactionId, { resolve: f, reject: h });
          try {
            o(p);
          } catch (_) {
            n.delete(p.transactionId), h(_);
          }
        });
      },
      onMessage: (a, l) => (i.set(a, l), () => i.delete(a)),
    };
  },
  Ds = class {
    constructor(e, t) {
      (this.endpointRuntime = e),
        (this.streamInfo = t),
        (this.emitter = lv()),
        (this.isClosed = !1),
        (this.handleStreamClose = () => {
          this.isClosed ||
            ((this.isClosed = !0),
            this.emitter.emit("closed", !0),
            (this.emitter.events = {}));
        }),
        Ds.initDone ||
          (e.onMessage("__crx_bridge_stream_transfer__", (r) => {
            const { streamId: s, streamTransfer: n, action: i } = r.data,
              o = Ds.openStreams.get(s);
            o &&
              !o.isClosed &&
              (i === "transfer" && o.emitter.emit("message", n),
              i === "close" &&
                (Ds.openStreams.delete(s), o.handleStreamClose()));
          }),
          (Ds.initDone = !0)),
        Ds.openStreams.set(this.streamInfo.streamId, this);
    }
    get info() {
      return this.streamInfo;
    }
    send(e) {
      if (this.isClosed)
        throw new Error(
          "Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status",
        );
      this.endpointRuntime.sendMessage(
        "__crx_bridge_stream_transfer__",
        {
          streamId: this.streamInfo.streamId,
          streamTransfer: e,
          action: "transfer",
        },
        this.streamInfo.endpoint,
      );
    }
    close(e) {
      e && this.send(e),
        this.handleStreamClose(),
        this.endpointRuntime.sendMessage(
          "__crx_bridge_stream_transfer__",
          {
            streamId: this.streamInfo.streamId,
            streamTransfer: null,
            action: "close",
          },
          this.streamInfo.endpoint,
        );
    }
    onMessage(e) {
      return this.getDisposable("message", e);
    }
    onClose(e) {
      return this.getDisposable("closed", e);
    }
    getDisposable(e, t) {
      const r = this.emitter.on(e, t);
      return Object.assign(r, { dispose: r, close: r });
    }
  },
  Yi = Ds;
Yi.initDone = !1;
Yi.openStreams = new Map();
var qR = (e) => {
    const t = new Map(),
      r = new Map(),
      s = lv();
    e.onMessage(
      "__crx_bridge_stream_open__",
      (o) =>
        new Promise((a) => {
          const { sender: l, data: c } = o,
            { channel: u } = c;
          let d = !1,
            f = () => {};
          const h = () => {
            const p = r.get(u);
            typeof p == "function"
              ? (p(new Yi(e, oc(xr({}, c), { endpoint: l }))), d && f(), a(!0))
              : d || ((d = !0), (f = s.on("did-change-stream-callbacks", h)));
          };
          h();
        }),
    );
    async function n(o, a) {
      if (t.has(o))
        throw new Error(
          "webext-bridge: A Stream is already open at this channel",
        );
      const l = typeof a == "string" ? ac(a) : a,
        c = { streamId: Ji(), channel: o, endpoint: l },
        u = new Yi(e, c);
      return (
        u.onClose(() => t.delete(o)),
        await e.sendMessage("__crx_bridge_stream_open__", c, l),
        t.set(o, u),
        u
      );
    }
    function i(o, a) {
      if (r.has(o))
        throw new Error(
          "webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication",
        );
      r.set(o, a), s.emit("did-change-stream-callbacks");
    }
    return { openStream: n, onOpenStreamChannel: i };
  },
  cv = { exports: {} };
(function (e, t) {
  (function (r, s) {
    s(e);
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : fr,
    function (r) {
      if (
        typeof globalThis != "object" ||
        typeof chrome != "object" ||
        !chrome ||
        !chrome.runtime ||
        !chrome.runtime.id
      )
        throw new Error(
          "This script should only be loaded in a browser extension.",
        );
      if (
        typeof globalThis.browser > "u" ||
        Object.getPrototypeOf(globalThis.browser) !== Object.prototype
      ) {
        const s = "The message port closed before a response was received.",
          n =
            "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
          i = (o) => {
            const a = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(a).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class l extends WeakMap {
              constructor(k, H = void 0) {
                super(H), (this.createItem = k);
              }
              get(k) {
                return (
                  this.has(k) || this.set(k, this.createItem(k)), super.get(k)
                );
              }
            }
            const c = (x) =>
                x && typeof x == "object" && typeof x.then == "function",
              u =
                (x, k) =>
                (...H) => {
                  o.runtime.lastError
                    ? x.reject(new Error(o.runtime.lastError.message))
                    : k.singleCallbackArg ||
                        (H.length <= 1 && k.singleCallbackArg !== !1)
                      ? x.resolve(H[0])
                      : x.resolve(H);
                },
              d = (x) => (x == 1 ? "argument" : "arguments"),
              f = (x, k) =>
                function (F, ...ve) {
                  if (ve.length < k.minArgs)
                    throw new Error(
                      `Expected at least ${k.minArgs} ${d(k.minArgs)} for ${x}(), got ${ve.length}`,
                    );
                  if (ve.length > k.maxArgs)
                    throw new Error(
                      `Expected at most ${k.maxArgs} ${d(k.maxArgs)} for ${x}(), got ${ve.length}`,
                    );
                  return new Promise((B, C) => {
                    if (k.fallbackToNoCallback)
                      try {
                        F[x](...ve, u({ resolve: B, reject: C }, k));
                      } catch (I) {
                        console.warn(
                          `${x} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          I,
                        ),
                          F[x](...ve),
                          (k.fallbackToNoCallback = !1),
                          (k.noCallback = !0),
                          B();
                      }
                    else
                      k.noCallback
                        ? (F[x](...ve), B())
                        : F[x](...ve, u({ resolve: B, reject: C }, k));
                  });
                },
              h = (x, k, H) =>
                new Proxy(k, {
                  apply(F, ve, B) {
                    return H.call(ve, x, ...B);
                  },
                });
            let p = Function.call.bind(Object.prototype.hasOwnProperty);
            const _ = (x, k = {}, H = {}) => {
                let F = Object.create(null),
                  ve = {
                    has(C, I) {
                      return I in x || I in F;
                    },
                    get(C, I, A) {
                      if (I in F) return F[I];
                      if (!(I in x)) return;
                      let M = x[I];
                      if (typeof M == "function")
                        if (typeof k[I] == "function") M = h(x, x[I], k[I]);
                        else if (p(H, I)) {
                          let L = f(I, H[I]);
                          M = h(x, x[I], L);
                        } else M = M.bind(x);
                      else if (
                        typeof M == "object" &&
                        M !== null &&
                        (p(k, I) || p(H, I))
                      )
                        M = _(M, k[I], H[I]);
                      else if (p(H, "*")) M = _(M, k[I], H["*"]);
                      else
                        return (
                          Object.defineProperty(F, I, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return x[I];
                            },
                            set(L) {
                              x[I] = L;
                            },
                          }),
                          M
                        );
                      return (F[I] = M), M;
                    },
                    set(C, I, A, M) {
                      return I in F ? (F[I] = A) : (x[I] = A), !0;
                    },
                    defineProperty(C, I, A) {
                      return Reflect.defineProperty(F, I, A);
                    },
                    deleteProperty(C, I) {
                      return Reflect.deleteProperty(F, I);
                    },
                  },
                  B = Object.create(x);
                return new Proxy(B, ve);
              },
              w = (x) => ({
                addListener(k, H, ...F) {
                  k.addListener(x.get(H), ...F);
                },
                hasListener(k, H) {
                  return k.hasListener(x.get(H));
                },
                removeListener(k, H) {
                  k.removeListener(x.get(H));
                },
              }),
              m = new l((x) =>
                typeof x != "function"
                  ? x
                  : function (H) {
                      const F = _(
                        H,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      x(F);
                    },
              );
            let E = !1;
            const D = new l((x) =>
                typeof x != "function"
                  ? x
                  : function (H, F, ve) {
                      let B = !1,
                        C,
                        I = new Promise((re) => {
                          C = function (ee) {
                            E || (console.warn(n, new Error().stack), (E = !0)),
                              (B = !0),
                              re(ee);
                          };
                        }),
                        A;
                      try {
                        A = x(H, F, C);
                      } catch (re) {
                        A = Promise.reject(re);
                      }
                      const M = A !== !0 && c(A);
                      if (A !== !0 && !M && !B) return !1;
                      const L = (re) => {
                        re.then(
                          (ee) => {
                            ve(ee);
                          },
                          (ee) => {
                            let pe;
                            ee &&
                            (ee instanceof Error ||
                              typeof ee.message == "string")
                              ? (pe = ee.message)
                              : (pe = "An unexpected error occurred"),
                              ve({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: pe,
                              });
                          },
                        ).catch((ee) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            ee,
                          );
                        });
                      };
                      return L(M ? A : I), !0;
                    },
              ),
              j = ({ reject: x, resolve: k }, H) => {
                o.runtime.lastError
                  ? o.runtime.lastError.message === s
                    ? k()
                    : x(new Error(o.runtime.lastError.message))
                  : H && H.__mozWebExtensionPolyfillReject__
                    ? x(new Error(H.message))
                    : k(H);
              },
              V = (x, k, H, ...F) => {
                if (F.length < k.minArgs)
                  throw new Error(
                    `Expected at least ${k.minArgs} ${d(k.minArgs)} for ${x}(), got ${F.length}`,
                  );
                if (F.length > k.maxArgs)
                  throw new Error(
                    `Expected at most ${k.maxArgs} ${d(k.maxArgs)} for ${x}(), got ${F.length}`,
                  );
                return new Promise((ve, B) => {
                  const C = j.bind(null, { resolve: ve, reject: B });
                  F.push(C), H.sendMessage(...F);
                });
              },
              R = {
                devtools: { network: { onRequestFinished: w(m) } },
                runtime: {
                  onMessage: w(D),
                  onMessageExternal: w(D),
                  sendMessage: V.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: V.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              ie = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (a.privacy = {
                network: { "*": ie },
                services: { "*": ie },
                websites: { "*": ie },
              }),
              _(o, R, a)
            );
          };
        r.exports = i(chrome);
      } else r.exports = globalThis.browser;
    },
  );
})(cv);
var JR = cv.exports;
const YR = gs(JR);
var mn = BR(),
  Pt = new Map(),
  xs = new Map(),
  Qi = new Map(),
  uv = (e, t) => (
    xs.set(e, (xs.get(e) || new Set()).add(t)),
    () => {
      const r = xs.get(e);
      r != null &&
        r.delete(t) &&
        (r == null ? void 0 : r.size) === 0 &&
        xs.delete(e);
    }
  ),
  dv = (e, t) => {
    Qi.set(e, (Qi.get(e) || new Set()).add(t));
  },
  ss = (e) => ({
    withFingerprint: (t) => {
      const r = (n) => ({ and: () => n }),
        s = {
          aboutIncomingMessage: (n) => {
            const i = Pt.get(e);
            return (
              dn.toExtensionContext(i.port, { status: "incoming", message: n }),
              r(s)
            );
          },
          aboutSuccessfulDelivery: (n) => {
            const i = Pt.get(e);
            return (
              dn.toExtensionContext(i.port, {
                status: "delivered",
                receipt: n,
              }),
              r(s)
            );
          },
          aboutMessageUndeliverability: (n, i) => {
            const o = Pt.get(e);
            return (
              (o == null ? void 0 : o.fingerprint) === t &&
                dn.toExtensionContext(o.port, {
                  status: "undeliverable",
                  resolvedDestination: n,
                  message: i,
                }),
              r(s)
            );
          },
          whenDeliverableTo: (n) => {
            const i = () => {
              const o = Pt.get(e);
              if ((o == null ? void 0 : o.fingerprint) === t && Pt.has(n))
                return (
                  dn.toExtensionContext(o.port, {
                    status: "deliverable",
                    deliverableTo: n,
                  }),
                  !0
                );
            };
            if (!i()) {
              const o = uv(n, i);
              dv(t, o);
            }
            return r(s);
          },
          aboutSessionEnded: (n) => {
            const i = Pt.get(e);
            return (
              (i == null ? void 0 : i.fingerprint) === t &&
                dn.toExtensionContext(i.port, {
                  status: "terminated",
                  fingerprint: n,
                }),
              r(s)
            );
          },
        };
      return s;
    },
  }),
  QR = $R(),
  Xi = zR(
    "background",
    (e) => {
      var t;
      if (
        e.origin.context === "background" &&
        ["content-script", "devtools "].includes(e.destination.context) &&
        !e.destination.tabId
      )
        throw new TypeError(
          "When sending messages from background page, use @tabId syntax to target specific tab",
        );
      const r = Mi(
          xr(
            xr({}, e.origin),
            e.origin.context === "window" && { context: "content-script" },
          ),
        ),
        s = Mi(
          oc(
            xr(
              xr({}, e.destination),
              e.destination.context === "window" && {
                context: "content-script",
              },
            ),
            { tabId: e.destination.tabId || e.origin.tabId },
          ),
        );
      (e.destination.tabId = null), (e.destination.frameId = null);
      const n = () => Pt.get(s),
        i = () => Pt.get(r),
        o = () => {
          var a;
          ss(s).withFingerprint(n().fingerprint).aboutIncomingMessage(e);
          const l = {
            message: e,
            to: n().fingerprint,
            from: {
              endpointId: r,
              fingerprint: (a = i()) == null ? void 0 : a.fingerprint,
            },
          };
          e.messageType === "message" && mn.add(l),
            e.messageType === "reply" && mn.remove(e.messageID),
            i() &&
              ss(r).withFingerprint(i().fingerprint).aboutSuccessfulDelivery(l);
        };
      (t = n()) != null && t.port
        ? o()
        : e.messageType === "message" &&
          (e.origin.context === "background"
            ? uv(s, o)
            : i() &&
              ss(r)
                .withFingerprint(i().fingerprint)
                .aboutMessageUndeliverability(s, e)
                .and()
                .whenDeliverableTo(s));
    },
    (e) => {
      const t = Mi(
          xr(
            xr({}, e.origin),
            e.origin.context === "window" && { context: "content-script" },
          ),
        ),
        r = Pt.get(t),
        s = {
          message: e,
          to: QR,
          from: { endpointId: t, fingerprint: r.fingerprint },
        };
      ss(t).withFingerprint(r.fingerprint).aboutSuccessfulDelivery(s);
    },
  );
YR.runtime.onConnect.addListener((e) => {
  var t;
  const r = KR(e.name);
  if (!r) return;
  r.endpointName ||
    (r.endpointName = Mi({
      context: "content-script",
      tabId: e.sender.tab.id,
      frameId: e.sender.frameId,
    }));
  const { tabId: s, frameId: n } = ac(r.endpointName);
  Pt.set(r.endpointName, { fingerprint: r.fingerprint, port: e }),
    (t = xs.get(r.endpointName)) == null || t.forEach((i) => i()),
    xs.delete(r.endpointName),
    dv(r.fingerprint, () => {
      const i = mn.entries().filter((o) => o.to === r.fingerprint);
      mn.remove(i),
        i.forEach((o) => {
          o.from.endpointId === "background"
            ? Xi.endTransaction(o.message.transactionId)
            : ss(o.from.endpointId)
                .withFingerprint(o.from.fingerprint)
                .aboutSessionEnded(r.fingerprint);
        });
    }),
    e.onDisconnect.addListener(() => {
      var i, o;
      ((i = Pt.get(r.endpointName)) == null ? void 0 : i.fingerprint) ===
        r.fingerprint && Pt.delete(r.endpointName),
        (o = Qi.get(r.fingerprint)) == null || o.forEach((a) => a()),
        Qi.delete(r.fingerprint);
    }),
    e.onMessage.addListener((i) => {
      var o, a;
      if (i.type === "sync") {
        const l = [...Pt.values()].map((u) => u.fingerprint),
          c = i.pendingResponses.filter((u) => l.includes(u.to));
        mn.add(...c),
          i.pendingResponses
            .filter((u) => !l.includes(u.to))
            .forEach((u) =>
              ss(r.endpointName)
                .withFingerprint(r.fingerprint)
                .aboutSessionEnded(u.to),
            ),
          i.pendingDeliveries.forEach((u) =>
            ss(r.endpointName)
              .withFingerprint(r.fingerprint)
              .whenDeliverableTo(u),
          );
        return;
      }
      i.type === "deliver" &&
        (a = (o = i.message) == null ? void 0 : o.origin) != null &&
        a.context &&
        ((i.message.origin.tabId = s),
        (i.message.origin.frameId = n),
        Xi.handleMessage(i.message));
    });
});
var { sendMessage: CL, onMessage: xL } = Xi;
qR(Xi);
const RL = 1e3;
T.Image, T.PDF, T.Word, T.Web, T.WeChatArticle, T.MarkDown, T.PPT;
Ge.Collected + "", Ge.NoCollected + "", Ge.Uploading + "", Ge.Error + "";
const hv = { progress: 0, status: ge.Waiting },
  ML = Fr.createContext({ uploadState: hv, updateUploadState: () => {} }),
  LL = () => {
    const [e, t] = Fr.useState(hv),
      r = Fr.useCallback((s) => {
        t((n) => ({ ...n, ...s }));
      }, []);
    return { uploadState: e, updateUploadState: r };
  };
var XR = Object.defineProperty,
  ZR = Object.getOwnPropertyDescriptor,
  eM = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? ZR(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && XR(t, r, n), n;
  },
  tM = (e, t) => (r, s) => t(r, s, e);
let gf = class {
  constructor(e) {
    (this.sendMessage = e),
      (this.getAddableKnowledgeList = (t, r) =>
        this.sendMessage(
          Ar.GetAddableKnowledgeBaseList,
          { params: t, fetchManner: r },
          "background",
        )),
      (this.addKnowledgeToKnowledgeBase = (t) =>
        this.sendMessage(Ar.AddKnowledge, t, "background")),
      (this.removeKnowledgeFromKnowledgeBase = (t, r) =>
        this.sendMessage(
          Ar.DelKnowledge,
          { mediaId: t, knowledgeBaseId: r },
          "background",
        )),
      (this.checkShareKnowledgeHasSpaceByMediaType = (t, r, s) =>
        this.sendMessage(
          Ar.CheckShareKnowledgeHasSpaceByMediaType,
          { knowledgeBaseId: t, mediaType: r, size: s },
          "background",
        )),
      (this.createFileMedia = (t) =>
        this.sendMessage(Ar.CreateFileMedia, { ...t }, "background")),
      (this.checkRepeatedNames = (t) =>
        this.sendMessage(Ar.CheckRepeatedName, { ...t }, "background")),
      (this.replaceKnowledge = (t) =>
        this.sendMessage(Ar.ReplaceKnowledge, { ...t }, "background"));
  }
};
gf = eM([S(), tM(0, g(co))], gf);
var rM = Object.defineProperty,
  sM = Object.getOwnPropertyDescriptor,
  nM = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? sM(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && rM(t, r, n), n;
  },
  iM = (e, t) => (r, s) => t(r, s, e);
let pf = class {
  constructor(e) {
    (this.sendMessage = e),
      (this.info = (t, r) => {
        this.sendMessage(Hs.LoggerInfo, { message: t, key: r }, "background");
      }),
      (this.error = (t, r) => {
        this.sendMessage(
          Hs.LoggerError,
          { error: typeof t == "string" ? t : JSON.stringify(t), key: r },
          "background",
        );
      }),
      (this.reportEvent = () => {}),
      (this.reportTime = () => {});
  }
};
pf = nM([S(), iM(0, g(co))], pf);
var oM = Object.defineProperty,
  aM = Object.getOwnPropertyDescriptor,
  lM = (e, t, r, s) => {
    for (
      var n = s > 1 ? void 0 : s ? aM(t, r) : t, i = e.length - 1, o;
      i >= 0;
      i--
    )
      (o = e[i]) && (n = (s ? o(t, r, n) : o(n)) || n);
    return s && n && oM(t, r, n), n;
  },
  cM = (e, t) => (r, s) => t(r, s, e);
let _f = class {
  constructor(e) {
    (this.sendMessage = e),
      (this.report = (t, r) => {
        this.sendMessage(Hs.Report, { action: t, data: r }, "background");
      });
  }
};
_f = lM([S(), cM(0, g(co))], _f);
var sr = ((e) => ((e.userInfo = "userInfo"), e))(sr || {}),
  Rr = ((e) => (
    (e.Login = "login"),
    (e.Logout = "logout"),
    (e.GetAccountInfo = "getAccountInfo"),
    (e.RefreshToken = "refreshToken"),
    (e.CloseLoginDialog = "closeLoginDialog"),
    (e.VerifyWxCode = "verifyWxCode"),
    (e.OnLoginClose = "onLoginClose"),
    e
  ))(Rr || {}),
  Zi = ((e) => (
    (e.ShowLoginPanel = "showLoginPanel"),
    (e.HideLoginPanel = "hideLoginPanel"),
    (e.LogoutInWeb = "LogoutInWeb"),
    e
  ))(Zi || {});
const Mn = () =>
    Xs({
      code: 0,
      id_type: "",
      is_newer: !1,
      refresh_token: "",
      refresh_token_valid_time: "",
      token: "",
      token_type: 14,
      token_valid_time: "",
      user_id: "",
    }),
  uM = "wx0d63f5de059f1d52",
  dM = "https://ima.qq.com",
  hM = async (e) => {
    console.log("[DEBUG] hM: Starting WeChat verification with code:", e);
    console.log("[DEBUG] hM: Target URL:", `${dM}/cgi-bin/auth_login/login`);
    console.log("[DEBUG] hM: WeChat App ID:", uM);
    
    try {
      const clientInfo = await vM();
      console.log("[DEBUG] hM: Client info:", JSON.stringify(clientInfo));
      
      const requestBody = {
        client_info: { ...clientInfo },
        account_type: 2,
        code: e,
        auth_appid: uM,
      };
      console.log("[DEBUG] hM: Request body:", JSON.stringify(requestBody));
      
      const t = await fetch(`${dM}/cgi-bin/auth_login/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      
      console.log("[DEBUG] hM: Response status:", t.status);
      console.log("[DEBUG] hM: Response ok:", t.ok);
      console.log("[DEBUG] hM: Response headers:", JSON.stringify([...t.headers.entries()]));
      
      if (!t.ok) {
        const errorText = await t.text();
        console.error("[DEBUG] hM: HTTP error response body:", errorText);
        throw new Error(`HTTP error! status: ${t.status}, body: ${errorText}`);
      }
      
      const r = await t.json();
      console.log("[DEBUG] hM: Raw API response:", JSON.stringify(r));
      
      const processedResult = Xs(r);
      console.log("[DEBUG] hM: Processed result:", JSON.stringify(processedResult));
      
      return processedResult;
    } catch (error) {
      console.error("[DEBUG] hM: Exception occurred:", error);
      console.error("[DEBUG] hM: Error stack:", error.stack);
      
      const fallbackResult = Mn();
      console.log("[DEBUG] hM: Returning fallback result:", JSON.stringify(fallbackResult));
      
      return fallbackResult;
    }
  },
  fM = async () => {
    console.log("[DEBUG] fM: Starting logout API call");
    
    const t = (await chrome.storage.local.get(sr.userInfo))[sr.userInfo];
    console.log("[DEBUG] fM: Current stored user info:", JSON.stringify(t));
    
    const { userId: r, refreshToken: s } = t || {};
    console.log("[DEBUG] fM: User ID:", r);
    console.log("[DEBUG] fM: Has refresh token:", !!s);
    
    if (!r || !s) {
      console.log("[DEBUG] fM: Missing userId or refreshToken, returning null");
      return null;
    }
    
    const requestBody = {
      user_id: r,
      fresh_token: s,
      token_type: 2,
      session_id: "",
      logout_type: 0,
    };
    console.log("[DEBUG] fM: Logout request body:", JSON.stringify(requestBody));
    
    const n = await fetch("https://ima.qq.com/auth_login/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    
    console.log("[DEBUG] fM: Logout response status:", n.status);
    console.log("[DEBUG] fM: Logout response ok:", n.ok);
    
    if (!n.ok) {
      const errorText = await n.text();
      console.error("[DEBUG] fM: Logout failed, response body:", errorText);
      throw new Error(`HTTP error! status: ${n.status}`);
    }
    
    const result = await n.json();
    console.log("[DEBUG] fM: Logout API response:", JSON.stringify(result));
    
    return result;
  },
  gM = async () => {
    console.log("[DEBUG] gM: Starting token refresh");
    
    const t = (await chrome.storage.local.get(sr.userInfo))[sr.userInfo];
    console.log("[DEBUG] gM: Current stored user info:", JSON.stringify(t));
    
    const { userId: r, refreshToken: s } = t || {};
    console.log("[DEBUG] gM: User ID:", r);
    console.log("[DEBUG] gM: Has refresh token:", !!s);
    
    if (!r || !s) {
      console.log("[DEBUG] gM: Missing userId or refreshToken, returning null");
      return null;
    }
    
    const requestBody = { user_id: r, refresh_token: s };
    console.log("[DEBUG] gM: Refresh request body:", JSON.stringify(requestBody));
    
    const n = await fetch("https://ima.qq.com/cgi-bin/auth_login/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    
    console.log("[DEBUG] gM: Refresh response status:", n.status);
    console.log("[DEBUG] gM: Refresh response ok:", n.ok);
    
    if (!n.ok) {
      const errorText = await n.text();
      console.error("[DEBUG] gM: Refresh failed, response body:", errorText);
      throw new Error(`HTTP error! status: ${n.status}`);
    }
    
    const i = await n.json();
    console.log("[DEBUG] gM: Raw refresh response:", JSON.stringify(i));
    
    const o = Xs(i);
    console.log("[DEBUG] gM: Processed refresh response:", JSON.stringify(o));
    
    if (o.userId && o.token) {
      const a = { ...t, ...o };
      console.log("[DEBUG] gM: Updating stored user info:", JSON.stringify(a));
      
      await chrome.storage.local.set({ [sr.userInfo]: a });
      console.log("[DEBUG] gM: Successfully updated storage");
      
      return a;
    }
    
    console.log("[DEBUG] gM: Refresh response missing userId or token, returning default");
    return Mn();
  },
  gl = (e) =>
    new Promise((t) => {
      chrome.windows.getAll({ populate: !0 }, (r) => {
        let s = 0;
        r.forEach((n) => {
          var i;
          (i = n.tabs) == null ||
            i.forEach((o) => {
              o.id &&
                chrome.tabs.sendMessage(o.id, e, () => {
                  (s = s + 1), s === r.length && t(t);
                });
            });
        });
      });
    }),
  bi = ({ data: e, code: t = 0, msg: r = "" }) => ({
    data: JSON.stringify(e),
    code: t,
    msg: r,
  }),
  pM = async () => {
    const e = await chrome.storage.local.get("guid");
    if (e != null && e.guid) return e == null ? void 0 : e.guid;
    const t = fv(32);
    return chrome.storage.local.set({ guid: t }), t;
  },
  _M = async () => {
    const e = await chrome.storage.local.get("qm36");
    if (e != null && e.guid) return e == null ? void 0 : e.guid;
    const t = fv(36);
    return chrome.storage.local.set({ qm36: t }), t;
  },
  fv = (e) => {
    const t = "0123456789abcdefghijklmnopqrstuvwxyz";
    let r = "";
    for (let s = 0; s < e; s++) r += t[Math.floor(Math.random() * 36)];
    return r;
  };
let na;
const vM = async () => {
    console.log("[DEBUG] vM: Creating client info");
    
    if (!na) {
      console.log("[DEBUG] vM: Client info not cached, generating new");
      
      const e = navigator.userAgent;
      const t = await pM();
      const r = await _M();
      
      console.log("[DEBUG] vM: Extension ID:", chrome.runtime.id);
      console.log("[DEBUG] vM: User Agent:", e);
      console.log("[DEBUG] vM: GUID:", t);
      console.log("[DEBUG] vM: QIMEI36:", r);
      
      na = {
        extId: chrome.runtime.id,
        platform: 4,
        deviceId: r,
        qua: e,
        guid: t,
        qimei36: r,
      };
      
      console.log("[DEBUG] vM: Generated client info:", JSON.stringify(na));
    } else {
      console.log("[DEBUG] vM: Using cached client info:", JSON.stringify(na));
    }
    
    return na;
  },
  $L = () => {
    chrome.runtime.onMessageExternal.addListener((e, t, r) => {
      try {
        console.log("[MSG] Background: External message received:", e?.action, "from:", t?.url || "unknown");
        
        if ((e == null ? void 0 : e.action) === "verifyWxCode") {
          console.log("[MSG] Background: Processing verifyWxCode, code:", e?.params?.wxCode);
          
          return (
            hM(e == null ? void 0 : e.params.wxCode).then((s) => {
              console.log("[MSG] Background: WeChat verification result - userId:", !!s.userId, "token:", !!s.token);
              
              if (s.userId && s.token) {
                console.log("[MSG] Background: Storing user info in storage");
                chrome.storage.local.set({ [sr.userInfo]: s });
              }
              
              r(s);
            }).catch((error) => {
              console.error("[MSG] Background: WeChat verification failed:", error.message);
              r({ code: -1, msg: "WeChat verification failed", data: null });
            }),
            !0
          );
        }
        if ((e == null ? void 0 : e.action) === Rr.CloseLoginDialog)
          return (
            gl({ action: "hideLoginPanel" }).then(() => {
              r == null || r();
            }),
            !0
          );
      } catch (s) {
        console.warn("initLoginForWebpage onMessageExternal error", s);
      }
    }),
      chrome.runtime.onMessage.addListener((e, t, r) => {
        try {
          console.log("[DEBUG] Background: Runtime message received:", JSON.stringify(e));
          console.log("[DEBUG] Background: Message action:", e?.action);
          
          if ((e == null ? void 0 : e.action) === Zi.LogoutInWeb)
            return (
              gv().then((s) => {
                s && r();
              }),
              !0
            );
          
          // Handle getAccountInfo and getDeviceInfo messages from content script
          if ((e == null ? void 0 : e.action) === "getAccountInfo") {
            console.log("[DEBUG] Background: Routing getAccountInfo to wM function");
            wM({ action: Rr.GetAccountInfo, callback: (response) => {
              console.log("[DEBUG] Background: wM response for getAccountInfo:", JSON.stringify(response));
              r(response);
            }});
            return true;
          }
          
          if ((e == null ? void 0 : e.action) === "getDeviceInfo") {
            console.log("[DEBUG] Background: Routing getDeviceInfo to wM function");
            wM({ action: Tl.GetDeviceInfo, callback: (response) => {
              console.log("[DEBUG] Background: wM response for getDeviceInfo:", JSON.stringify(response));
              r(response);
            }});
            return true;
          }
          
          if ((e == null ? void 0 : e.action) === "login") {
            console.log("[DEBUG] Background: Routing login to wM function");
            wM({ action: Rr.Login, callback: (response) => {
              console.log("[DEBUG] Background: wM response for login:", JSON.stringify(response));
              r(response);
            }});
            return true;
          }
          
          if ((e == null ? void 0 : e.action) === "closeLoginDialog") {
            console.log("[DEBUG] Background: Routing closeLoginDialog to wM function");
            wM({ action: Rr.CloseLoginDialog, callback: (response) => {
              console.log("[DEBUG] Background: wM response for closeLoginDialog:", JSON.stringify(response));
              r(response);
            }});
            return true;
          }
          
          // Handle internal verifyWxCode messages (Firefox workaround)
          if ((e == null ? void 0 : e.action) === "verifyWxCode") {
            console.log("[DEBUG] Background: Internal verifyWxCode received:", e?.params?.wxCode);
            
            hM(e?.params?.wxCode).then((s) => {
              console.log("[DEBUG] Background: Internal WeChat verification result - userId:", !!s.userId, "token:", !!s.token);
              
              if (s.userId && s.token) {
                console.log("[DEBUG] Background: Storing user info from internal verification");
                chrome.storage.local.set({ [sr.userInfo]: s });
              }
              
              r(s);
            }).catch((error) => {
              console.error("[DEBUG] Background: Internal WeChat verification failed:", error);
              r({ code: -1, msg: "Internal WeChat verification failed", data: null });
            });
            
            return true;
          }
          
        } catch (s) {
          console.warn("initLoginForWebpage onMessage error", s);
        }
      });
  },
  KL = (e) => {
    const t = (r) => {
      (r == null ? void 0 : r.action) === Rr.OnLoginClose && e();
    };
    return (
      chrome.runtime.onMessage.addListener(t),
      () => {
        chrome.runtime.onMessage.removeListener(t);
      }
    );
  },
  BL = (e) => {
    const t = (r, s) => {
      s === "local" &&
        r.userInfo &&
        e(r.userInfo.oldValue || Mn(), r.userInfo.newValue || Mn());
    };
    return (
      chrome.storage.onChanged.addListener(t),
      () => {
        chrome.storage.onChanged.removeListener(t);
      }
    );
  },
  UL = async ({ action: e, timeout: t = 5e3 }) => {
    let r;
    try {
      return new Promise((s) => {
        (r = setTimeout(() => {
          s({ code: In.Timeout, msg: "接口执行超时", data: null });
        }, t)),
          wM({
            action: e,
            callback: (n) => {
              clearTimeout(r), s(n);
            },
          });
      });
    } catch (s) {
      return (
        clearTimeout(r),
        { code: In.FrontendException, msg: `执行异常: ${Ue(s)}`, data: null }
      );
    }
  },
  wM = async ({ action: e, callback: t }) => {
    switch (e) {
      case Rr.Login: {
        gl({ action: Zi.ShowLoginPanel }).then(() => {
          t == null || t(bi({ data: {} }));
        });
        break;
      }
      case Rr.Logout: {
        gv().then((r) => {
          r && (t == null || t());
        });
        break;
      }
      case Rr.GetAccountInfo: {
        console.log("[DEBUG] GetAccountInfo: Retrieving user info from storage");
        console.log("[DEBUG] GetAccountInfo: Storage key:", sr.userInfo);
        console.log("[DEBUG] GetAccountInfo: Using chrome.storage API");
        console.log("[DEBUG] GetAccountInfo: browser.storage available:", !!globalThis.browser?.storage);
        console.log("[DEBUG] GetAccountInfo: chrome.storage available:", !!globalThis.chrome?.storage);
        
        // Try Firefox's native browser.storage.local API if available
        let r;
        if (globalThis.browser?.storage?.local) {
          console.log("[DEBUG] GetAccountInfo: Using browser.storage.local.get");
          r = await globalThis.browser.storage.local.get(sr.userInfo);
          console.log("[DEBUG] GetAccountInfo: browser.storage result:", JSON.stringify(r));
        } else {
          console.log("[DEBUG] GetAccountInfo: Using chrome.storage.local.get");
          r = await chrome.storage.local.get(sr.userInfo);
          console.log("[DEBUG] GetAccountInfo: chrome.storage result:", JSON.stringify(r));
        }
        
        const userInfo = (r == null ? void 0 : r[sr.userInfo]) || Mn();
        console.log("[DEBUG] GetAccountInfo: Final user info:", JSON.stringify(userInfo));
        
        t == null || t(bi({ data: userInfo }));
        break;
      }
      case Rr.RefreshToken: {
        const r = await gM();
        t == null || t(bi({ data: r }));
        break;
      }
      case Rr.CloseLoginDialog: {
        gl({ action: Zi.HideLoginPanel }).then(() => {
          t == null || t(bi({ data: {} }));
        });
        break;
      }
    }
  },
  gv = async () => {
    console.log("[DEBUG] gv: Starting logout process");
    
    return fM().then((e) => {
      console.log("[DEBUG] gv: Logout API response:", JSON.stringify(e));
      
      if (e.code === 0) {
        console.log("[DEBUG] gv: Logout successful, removing user info from storage");
        chrome.storage.local.remove(sr.userInfo);
        console.log("[DEBUG] gv: Storage cleared, returning true");
        return true;
      } else {
        console.log("[DEBUG] gv: Logout failed, code:", e.code);
        return false;
      }
    });
  },
  mM = "1.0.8",
  NL = { version: mM };
export {
  CM as $,
  ht as A,
  wr as B,
  AM as C,
  yn as D,
  Pg as E,
  Ui as F,
  or as G,
  tt as H,
  ce as I,
  Hs as J,
  S as K,
  LL as L,
  Jw as M,
  ML as N,
  $R as O,
  nt as P,
  dn as Q,
  te as R,
  YR as S,
  TL as T,
  gt as U,
  BR as V,
  zR as W,
  qR as X,
  g as Y,
  ut as Z,
  RM as _,
  ro as a,
  Am as a$,
  xM as a0,
  gg as a1,
  gL as a2,
  pa as a3,
  Vi as a4,
  fg as a5,
  hP as a6,
  Qd as a7,
  fP as a8,
  Xd as a9,
  sL as aA,
  Om as aB,
  su as aC,
  uy as aD,
  UL as aE,
  BL as aF,
  KL as aG,
  Mg as aH,
  Xe as aI,
  vM as aJ,
  Zi as aK,
  NL as aL,
  KM as aM,
  Fi as aN,
  Pp as aO,
  De as aP,
  Xs as aQ,
  q as aR,
  BM as aS,
  ZM as aT,
  eL as aU,
  Tl as aV,
  Rc as aW,
  qM as aX,
  la as aY,
  zw as aZ,
  gr as a_,
  gP as aa,
  sh as ab,
  pP as ac,
  eh as ad,
  wP as ae,
  Zd as af,
  vP as ag,
  hA as ah,
  $s as ai,
  fA as aj,
  Mt as ak,
  gf as al,
  Xp as am,
  _P as an,
  rh as ao,
  Ze as ap,
  OL as aq,
  sn as ar,
  Wp as as,
  AL as at,
  pf as au,
  JM as av,
  mu as aw,
  _L as ax,
  tL as ay,
  rL as az,
  ym as b,
  Vn as b0,
  nL as b1,
  iL as b2,
  aL as b3,
  Kr as b4,
  mt as b5,
  se as b6,
  oL as b7,
  DM as b8,
  Gl as b9,
  Tp as bA,
  $M as bB,
  UM as bC,
  Qw as bD,
  hs as bE,
  ZS as bF,
  Dp as bG,
  wL as bH,
  Ty as bI,
  Hl as bJ,
  tr as bK,
  CL as bL,
  Ls as bM,
  Ch as bN,
  mr as bO,
  $L as bP,
  EM as bQ,
  bM as bR,
  IM as bS,
  Gw as bT,
  Ge as bU,
  dy as ba,
  Eg as bb,
  sy as bc,
  NM as bd,
  zM as be,
  Rg as bf,
  lL as bg,
  TM as bh,
  fs as bi,
  tc as bj,
  mL as bk,
  xL as bl,
  WM as bm,
  sm as bn,
  DL as bo,
  RL as bp,
  Ar as bq,
  PM as br,
  Bi as bs,
  cL as bt,
  uL as bu,
  dL as bv,
  UE as bw,
  hL as bx,
  fL as by,
  FM as bz,
  fr as c,
  OM as d,
  Gr as e,
  Ys as f,
  gs as g,
  Gs as h,
  VM as i,
  ge as j,
  jv as k,
  yM as l,
  T as m,
  LM as n,
  GM as o,
  HM as p,
  MM as q,
  Fr as r,
  Ue as s,
  Br as t,
  PL as u,
  ND as v,
  co as w,
  vL as x,
  pL as y,
  BE as z,
};
