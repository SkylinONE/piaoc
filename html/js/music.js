const doc = document;

// 歌曲信息数组
const songsList = [
    {
        id: 'xxx-01',
        title: '打上火花',
        author: 'Daoko、米津玄師',
        path: './music/sound/打上花火.mp3',
        bgPath: './music/img/打上花火.jpg',
        time: 0
    },
    {
        id: 'xxx-02',
        title: 'Fool For You',
        author: 'Kastra',
        path: './music/sound/Fool For.mp3',
        bgPath: './music/img/Fool For.jpg',
        time: 0
    },
    {
        id: 'xxx-03',
        title: '爱人错过',
        author: '告五人',
        path: './music/sound/爱人错过.mp3',
        bgPath: './music/img/爱人错过.jpg',
        time: 0
    },
    {
        id: 'xxx-04',
        title: 'Love Story',
        author: 'Taylor Swift',
        path: './music/sound/Love Story.mp3',
        bgPath: './music/img/Love Story.jpg',
        time: 0
    },
    {
        id: 'xxx-05',
        title: 'see you again',
        author: 'Wiz Khalifa /Charlie Puth',
        path: './music/sound/seeyouagain.mp3',
        bgPath: './music/img/seeyouagain.jpg',
        time: 0
    },
    {
        id: 'xxx-06',
        title: 'Head in the clound',
        author: 'Hayd',
        path: './music/sound/Head in the clound.mp3',
        bgPath: './music/img/Head in the clound.jpg',
        time: 0
    },
    {
        id: 'xxx-07',
        title: '僕が死のうと思ったのは',
        author: 'なかしま みか',
        path: './music/sound/僕が死のうと思ったのは.mp3',
        bgPath: './music/img/僕が死のうと思ったのは.jpg',
        time: 0
    },
];

// 获取DOM元素
const audio = doc.querySelector('#audio'); //播放器
const bgImg = doc.querySelector('#big-img'); //插图
const controls = doc.querySelector('#controls'); //按钮区域
const title = doc.querySelector('#title'); //歌曲名
const author = doc.querySelector('#author'); //作者
const playBtn = doc.querySelector('#play'); //播放按钮
const voiceBtn = doc.querySelector('#voice'); //声音开关

// 当前播放歌曲
let curSongIndex = 0;
// 是否播放
let isPlay = false;

// 初始化
function init() {
    render(songsList[curSongIndex]);
}

// 按钮事件
controls.addEventListener('click', e => {
    switch (e.target?.id) {
        case 'list':// 歌曲列表
            // TODO
            break;
        case 'voice': //声音开关
            voiceControl();
            break;
        case 'pre': // 上一首
            preSong();
            break;
        case 'play': //播放/暂停
            togglePlay();
            break;
        case 'next': //下一首
            nextSong();
            break;
        case 'mode'://播放模式
            // TODO
            break;
        default:
            break;
    }
});

//渲染歌曲方法
function render(song) {
    title.innerHTML = song.title;
    author.innerHTML = song.author;
    bgImg.src = song.bgPath;
    audio.volume = 1; //音量:0-1
    audio.src = song.path;//音乐资源路径
}

// 播放/暂停
function togglePlay() {
    if (!isPlay) {
        // 播放,图标切换
        songPlay();
    } else {
        //  暂停,图标切换
        songPause();
    }
}

// 播放
function songPlay() {
    isPlay = true;
    playBtn.classList.add('icon-zanting');
    playBtn.classList.remove('icon-24gf-play');
    audio.play();
}

// 暂停
function songPause() {
    isPlay = false;
    playBtn.classList.remove('icon-zanting');
    playBtn.classList.add('icon-24gf-play');
    audio.pause();
}

// 上一首
function preSong() {
    if (curSongIndex > 0) {
        curSongIndex--;
        render(songsList[curSongIndex]);
        songPlay();
    } else {
        curSongIndex = songsList.length - 1;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

// 下一首
function nextSong() {
    if (curSongIndex < songsList.length - 1) {
        curSongIndex++;
        render(songsList[curSongIndex]);
        songPlay();
    } else {
        curSongIndex = 0;
        render(songsList[curSongIndex]);
        songPlay();
    }
}

// 声音开关
function voiceControl() {
    if (audio.volume > 0) {
        voiceoOff();
    } else {
        voiceOn();
    }
}

// 声音开
function voiceOn() {
    audio.volume = 1;
    voiceBtn.classList.remove('icon-jingyin');
    voiceBtn.classList.add('icon-shengyin_shiti');
}

//声音关
function voiceoOff() {
    audio.volume = 0;
    voiceBtn.classList.add('icon-jingyin');
    voiceBtn.classList.remove('icon-shengyin_shiti');
}
init();


