// 1.获取所有的box
let boxList = document.querySelectorAll('.rollbox')

// 2.监听滚动

window.addEventListener('scroll', scrollLoad)


// 3.滚动加载函数
function scrollLoad() {

    // 1.定义 一个 目标值
    let taggerValue = window.innerHeight * 0.8 //760

    //2.获取每一个rollbox 距离浏览器顶部的值
    boxList.forEach(rollbox => {
        let boxTop = rollbox.getBoundingClientRect().top
        console.log(boxTop);

        if (boxTop <= taggerValue - 100){
            rollbox.classList.add('show-center')
        }else{
            rollbox.classList.remove('show-center')
        }
    })

}