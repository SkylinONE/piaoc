// 1.获取所有的box
let boxList = document.querySelectorAll('.box')

// 2.监听滚动

window.addEventListener('scroll', scrollLoad)


// 3.滚动加载函数
function scrollLoad() {

    // 1.定义 一个 目标值
    let taggerValue = window.innerHeight * 0.8 //760

    //2.获取每一个box 距离浏览器顶部的值
    boxList.forEach(box => {
        let boxTop = box.getBoundingClientRect().top
        console.log(boxTop);

        if (boxTop <= taggerValue - 100) {
            box.classList.add('show-center')
        } else {
            box.classList.remove('show-center')
        }
    })

}