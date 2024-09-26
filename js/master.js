// 寫法一 -----------------------------------------------
// let isMobile;

// if($(window).width() <= 480) {
//     isMobile = true;
// }else {
//     isMobile = false
// }

// console.log(isMobile);


// 寫法二 -----------------------------------------------
// console.log($(window).width() <= 480);
const isMobile = $(window).width() <= 480;
// console.log(isMobile);

const $grid = $('#Grid')

// ----------------------------------------------------

function setGrid() {
    if (isMobile === true) {
        $grid.addClass('grid-2 gap-small')
    } else {
        $grid.addClass('grid-3 gap-medium')
    }
}
// 補充:
// = 賦值
// == 判斷是否相同
// === 判斷是否相同 (包含型別)


function setScroll() {
    if (isMobile) {
        $(window).scroll(function () {
            if ($(this).scrollTop() === 0) {
                $('#Nav').removeClass('nav-active')
            } else {
                $('#Nav').addClass('nav-active')
            };
        })
    }
}

// ---------------------------------------------

function setInit() {
    setGrid();
}
function setEvent() {
    setScroll()
}

const $anchors = $('[data-fancybox]');
$anchors.fancybox();


// init --------------------------------------------------------------
setInit();


// event -------------------------------------------------------------
setEvent()