function createStart(i) {
    var $input = `<div id='a${i}' class='lesson'>Lesson ${i}</div>`
    return $input;
}

for (let i = 1; i <= 20; i++) {
    $(".play").append(createStart(i))
    j = 27 + ((i - 1) % 4) * 12
    k = 40 + Math.floor((i - 1) / 4) * 10
    $(`#a${i}`).css('left', `${j}%`).css('top', `${k}%`)
}

/*const lessonElements = {};

for (let i = 1; i <= 20; i++){
    const className = `.lesson${i}`;
    lessonElements[className] = $(className);
}*/



lesson1 = {
    "weekend": ["周末", "zhōumò"],
    "plan": ["打算", "dǎsuàn"],
    "particle_a": ["啊", "a"],
    "with": ["跟", "gēn"],
    "always": ["一直", "yìzhí"],
    "game": ["游戏", "yóuxì"],
    "homework": ["作业", "zuòyè"],
    "worried": ["着急", "zháojí"],
    "review": ["复习", "fùxí"],
    "south": ["南方", "nánfāng"],
    "north": ["北方", "běifāng"],
    "bread": ["面包", "miànbāo"],
    "bring": ["带", "dài"],
    "map": ["地图", "dìtú"],
    "carry": ["搬", "bān"]
}

lesson2 = {
    "leg": ["腿", "tuì"],
    "hurt/painful": ["疼", "téng"],
    "foot": ["脚", "jiǎo"],
    "tree": ["树", "shù"],
    "easy": ["容易", "róngyì"],
    "difficult": ["难", "nán"],
    "mrs.": ["太太", "tàitài"],
    "secretary": ["秘书", "mìshū"],
    "manager": ["经理", "jīnglǐ"],
    "office": ["办公室", "bàngōngshì"],
    "m.vehicles": ["辆", "liàng"],
    "building": ["楼", "lóu"],
    "take/fetch": ["拿", "ná"],
    "m.things_with_handle": ["把", "bǎ"],
    "umbrella": ["伞", "sǎn"],
    "fat": ["胖", "pàng"],
    "actually": ["其实", "qíshí"],
    "thin": ["瘦", "shòu"],
}

lesson3 = {
    "or": ["还是", "háishi"],
    "to_climb_a_mountain": ["爬山", "páshān"],
    "careful": ["小心", "xiǎoxīn"],
    "m.dress/pant": ["条", "tiáo"],
    "pants": ["裤子", "kùzi"],
    "remember": ["记得", "jìde"],
    "shirt": ["衬衫", "chènshān"],
    "m.money": ["元", "yuán"],
    "fresh": ["新鲜", "xīnxiān"],
    "sweet": ["甜", "tián"],
    "only": ["只", "zhǐ"],
    "to_put/place": ["放", "fàng"],
    "drink/beverage": ["饮料", "yǐnliào"],
    "or": ["或者", "huòzhě"],
    "comfortable": ["舒服", "shūfu"],
    "flower": ["花", "huā"],
    "green": ["绿", "lǜ"],
}

lesson4 = {
    "match/competition": ["比赛", "bǐsài"],
    "photo": ["照片", "zhàopiàn"],
    "grade": ["年级", "niánjí"],
    "and": ["又", "yòu"],
    "smart": ["聪明", "cōngming"],
    "warm/enthusiastic": ["热情", "rèqíng"],
    "hard-working": ["努力", "nǔlì"],
    "always": ["总是", "zǒngshì"],
    "to_answer": ["回答", "huídá"],
    "to_stand": ["站", "zhàn"],
    "hungry": ["饿", "è"],
    "supermarket": ["超市", "chāoshì"],
    "cake": ["蛋糕", "dàngāo"],
    "young": ["年轻", "niánqīng"],
    "serious/earnest": ["认真", "rènzhēn"],
    "customer/guest": ["客人", "kèrén"],
}

lesson5 = {
    "to_have_a_fever": ["发烧", "fāshāo"],
    "for": ["为", "wèi"],
    "to_take_care_of": ["照顾", "zhàogù"],
    "need": ["用", "yòng"],
    "catch_a cold": ["感冒", "gǎnmào"],
    "season": ["季节", "jìjié"],
    "of coruse": ["当然", "dāngrán"],
    "spring": ["春天", "chūntiān"],
    "grass": ["草", "cǎo"],
    "summer": ["夏天", "xiàtiān"],
    "dress/skirt": ["裙子", "qúnzi"],
    "lately/recently": ["最近", "zuìjìn"],
    "more/to a greater degree": ["越", "yuè"],
}

lesson6 = {
    "glasses": ["眼镜", "yǎnjìng"],
    "suddenly": ["突然", "tūrán"],
    "to leave/part with": ["离开", "líkāi"],
    "clear/distinct": ["清楚", "qīngchu"],
    "just now": ["刚才", "gāngcái"],
    "to help": ["帮忙", "bāngmáng"],
    "extraordinarily": ["特别", "tèbié"],
    "explain": ["讲", "jiǎng"],
    "clear": ["明白", "míngbai"],
    "to do physical exercise": ["锻炼", "duànliàn"],
    "music": ["音乐", "yīnyuè"],
    "park": ["公园", "gōngyuán"],
    "to chat": ["聊天", "liáotiān"],
    "to fall asleep": ["睡着", "shuìzháo"],
    "even more": ["更", "gèng"],
}

lesson7 = {
    "colleague": ["同事", "tóngshì"],
    "before, ago": ["以前", "yǐqián"],
    "bank": ["银行", "yínháng"],
    "for a long time/long": ["久", "jiǔ"],
    "to be interested in": ["感兴趣", "gǎnxìngqù"],
    "to marry/to get married": ["结婚", "jiéhūn"],
    "to welcome": ["欢迎", "huānyíng"],
    "to be late": ["迟到", "chídào"],
    "half": ["半", "bàn"],
    "to meet sb, to pick sb up": ["接", "jiē"],
    "quarter": ["刻", "kè"],
    "fall short of": ["差", "chà"],
}

lesson8 = {
    "again": ["又", "yòu"],
    "to be satisfied": ["满意", "mǎnyì"],
    "elevator": ["电梯", "diàntī"],
    "m. used for floors": ["层", "céng"],
    "to be afraid/scared": ["害怕", "hàipà"],
    "panda": ["熊猫", "xióngmāo"],
    "to meet": ["见面", "jiànmiàn"],
    "quiet": ["安静", "ānjìng"],
    "coke": ["可乐", "kělè"],
    "a moment": ["一会儿", "yíhuìr"],
    "immediately/at once": ["马上", "mǎshàng"],
    "bathroom/restroom": ["洗手间", "xǐshǒujiān"],
    "old": ["老", "lǎo"],
    "almost": ["几乎", "jīhū"],
    "to change": ["变化", "biànhuà"],
    "healthy": ["健康", "jiànkāng"],
    "important": ["重要", "zhòngyào"],
}

lesson9 = {
    "Chinese language": ["中文", "zhōngwén"],
    "class": ["班", "bān"],
    "same as": ["一样", "yíyàng"],
    "the last one": ["最后", "zuìhòu"],
    "to rest assured": ["放心", "fàngxīn"],
    "certainly/definitely": ["一定", "yídìng"],
    "to worry": ["担心", "dānxīn"],
    "fairly/rather": ["比较", "bǐjiào"],
    "to know": ["了解", "liǎojiě"],
    "first, in advance": ["先", "xiān"],
    "middle": ["中间", "zhōngjiān"],
    "to participate": ["参加", "cānjiā"],
    "influence": ["影响", "yǐngxiǎng"],
}

lesson10 = {
    "height/stature": ["个子", "gèzi"],
    "short": ["矮", "ǎi"],
    "history": ["历史", "lìshǐ"],
    "P.E/sports": ["体育", "tǐyù"],
    "maths": ["数学", "shùxué"],
    "convenient": ["方便", "fāngbiàn"],
    "bicycle": ["自行车", "zìxíngchē"],
    "to ride": ["骑", "qí"],
    "old/used": ["旧", "jiù"],
    "to change/substitute": ["换", "huàn"],
    "place": ["地方", "dìfang"],
    "intermediary/agent": ["中介", "zhōngjiè"],
    "main": ["主要", "zhǔyào"],
    "environment": ["环境", "huánjìng"],
    "nearby": ["附近", "fùjìn"],
}

lesson11 = {
    "library": ["图书馆", "túshūguǎn"],
    "to borrow/lend": ["借", "jiè"],
    "dictionary": ["词典", "cídiǎn"],
    "to return": ["还", "huán"],
    "lamp": ["灯", "dēng"],
    "meeting/conference": ["会议", "huìyì"],
    "to end/finish": ["结束", "jiéshù"],
    "to forget": ["忘记", "wàngjì"],
    "air conditioner": ["空调", "kōngtiáo"],
    "to turn off/close": ["关", "guān"],
    "subway": ["地铁", "dìtiě"],
    "m. pair": ["双", "shuāng"],
    "chopsticks": ["筷子", "kuāizi"],
    "beer": ["啤酒", "píjiǔ"],
    "mouthful": ["口", "kǒu"],
    "bottle": ["瓶子", "píngzi"],
    "notebook, laptop": ["笔记本(电脑)", "bǐjìběn(diànnǎo)"],
    "e-mail": ["电子邮件", "diànzǐyóujiàn"],
    "to be used to/habit": ["习惯", "xíguàn"],
}

lesson12 = {
    "sun": ["太阳", "tàiyáng"],
    "west": ["西", "xī"],
    "angry": ["生气", "shēngqì"],
    "luggage/suitcase": ["行李箱", "xínglixiāng"],
    "self": ["自己", "zìjǐ"],
    "bag/sack": ["包", "bāo"],
    "to discover": ["发现", "fāxiàn"],
    "passport": ["护照", "hùzhào"],
    "to take off (aircraft)": ["起飞", "qǐfēi"],
    "driver": ["司机", "sījī"],
    "to teach": ["教", "jiāo"],
    "to draw, painting": ["画", "huà"],
    "to need": ["需要", "xūyào"],
    "blackboard": ["黑板", "hēibǎn"],
}

lesson13 = {
    "finally": ["终于", "zhōngyú"],
    "grandfather": ["爷爷", "yéye"],
    "gift/present": ["礼物", "lǐwù"],
    "grandmother": ["奶奶", "nǎinai"],
    "to come across/run into": ["遇到", "yùdào"],
    "taking place at the same time": ["一边", "yìbiān"],
    "past": ["过去", "guòqù"],
    "general/usual": ["一般", "yìbān"],
    "would like to": ["愿意", "yuànyì"],
    "to rise": ["起来", "qǐlai"],
    "should": ["应该", "yīnggāi"],
    "life": ["生活", "shēnghuó"],
    "headmaster": ["校长", "xiàozhǎng"],
    "broken/ruined": ["坏", "huài"],
    "often": ["经常", "jīngcháng"],
}

lesson14 = {
    "to clean/sweep": ["打扫", "dǎsǎo"],
    "clean": ["干净", "gānjìng"],
    "then/after that": ["然后", "ránhòu"],
    "refrigerator": ["冰箱", "bīngxiāng"],
    "to take a bath/shower": ["洗澡", "xǐzǎo"],
    "programme": ["节目", "jiémù"],
    "moon": ["月亮", "yuèliang"],
    "to be like": ["像", "xiàng"],
    "plate": ["盘子", "pánzi"],
    "to be windy": ["刮风", "guāfēng"],
    "uncle": ["叔叔", "shūshu"],
    "aunt": ["阿姨", "āyí"],
    "story": ["故事", "gùshì"],
    "sound,voice": ["声音", "shēngyīn"],
    "menu": ["菜单", "càidān"],
    "simple": ["简单", "jiǎndān"],
    "banana": ["香蕉", "xiāngjiāo"],
}

lesson15 = {
    "to study abroad": ["留学", "liú xué"],
    "level, standard": ["水平", "shuǐpíng"],
    "to improve": ["提高", "tígāo"],
    "exercise": ["练习", "liànxí"],
    "complete": ["完成", "wán chéng"],
    "sentence": ["句子", "jùzi"],
    "the rest": ["其他", "qítā"],
    "to send": ["发", "fā"],
    "requirement": ["要求", "yāoqiú"],
    "to pay attention to": ["注意", "zhùyì"],
    "to surf the Internet": ["上网", "shàng wǎng"],
    "other than": ["除了", "chúle"],
    "news": ["新闻", "xīnwén"],
    "to spend": ["花", "huā"],
    "extremely": ["及(了)", "jí(le)"],
    "festival": ["节日", "jiérì"],
    "to hold (a meeting/event)": ["举行", "jǔxíng"],
    "world": ["世界", "shìjiè"],
    "street": ["街道", "jiēdào"],
    "each": ["各", "gè"],
    "culture": ["文化", "wénhuà"],
}

lesson16 = {
    "city": ["城市", "chéngshì"],
    "if/in case": ["如果", "rúguǒ"],
    "to think/believe": ["认为", "rènwéi"],
    "leather shoes": ["皮鞋", "píxié"],
    "hat/cap": ["帽子", "màozi"],
    "to grow/develop": ["张", "zhǎng"],
    "lovely/adorable": ["可爱", "kě`ài"],
    "metre": ["米", "mǐ"],
    "kilogramme": ["公斤", "gōngjīn"],
    "nose": ["鼻子", "bízi"],
    "hair": ["头发", "tóufa"],
    "to check/examine": ["检查", "jiǎnchá"],
    "to brush the teeth": ["刷牙", "shuā yá"],
    "relationship": ["关系", "guānxì"],
    "other people": ["别人", "biérén"],
    "word/expression": ["词语", "cíyǔ"],
}

lesson17 = {
    "to ask for leave": ["请假", "qǐngjià"],
    "in total": ["一共", "yígòng"],
    "neighbour": ["邻居", "línjū"],
    "later/afterwards": ["后来", "hòulái"],
    "hobby/interest": ["爱好", "àihào"],
    "way/approach": ["办法", "bànfǎ"],
    "full (having eaten full)": ["饱", "bǎo"],
    "for the sake of": ["为了", "wèile"],
    "to decide": ["决定", "juédìng"],
    "to choose": ["选择", "xuǎnzé"],
    "winter": ["冬(天)", "dōng(tiān)"],
    "must": ["必须", "bìxū"],
    "according to/based on": ["根据", "gēnjù"],
    "condition/situation": ["情况", "qíngkuàng"],
    "mouth": ["口", "kǒu"],
    "thirsty": ["渴", "kě"],
}

lesson18 = {
    "towards": ["向", "xiàng"],
    "ten thousand": ["万", "wàn"],
    "m. for certain animals": ["只", "zhī"],
    "mouth": ["嘴", "zuǐ"],
    "animal": ["动物", "dòngwù"],
    "m. sections of periods": ["段", "duàn"],
    "not only... but also": ["不但...而且", "búdàn...ěrqiě"],
    "famous": ["有名", "yǒumíng"],
    "to agree": ["同意", "tóngyì"],
    "to believe": ["相信", "xiāngxìn"],
    "about regarding": ["关于", "guānyú"],
    "opportunity": ["机会", "jīhuì"],
    "country/nation": ["国家", "guójiā"],
    "kind/type": ["种", "zhǒng"],
    "feature": ["特点", "tèdiǎn"],
    "strange/odd": ["奇怪", "qíguài"],
    "particle, connects adverbial and verb": ["地", "de"],
}

lesson19 = {
    "ear": ["耳朵", "ěrduo"],
    "face": ["脸", "liǎn"],
    "short": ["短", "duǎn"],
    "horse": ["马", "mǎ"],
    "m. for flat objects (photo, paper)": ["张", "zhāng"],
    "m. respectful for people": ["位", "wèi"],
    "blue": ["蓝", "lán"],
    "autumn/fall": ["秋(天)", "qiū(tiān)"],
    "to spend/to pass": ["过", "guò"],
    "bird": ["鸟", "niǎo"],
    "to cry": ["哭", "kū"],
    "Yellow River": ["黄河", "huánghé"],
    "boat/ship": ["船", "chuán"],
    "to pass by": ["经过", "jīngguò"],
}

lesson20 = {
    "camera": ["照相机", "zhàoxiàngjī"],
    "prep. for passive voice": ["被", "bèi"],
    "sad": ["难过", "nánguò"],
    "east": ["东", "dōng"],
    "credit card": ["信用卡", "xìnyòngkǎ"],
    "to care for/be interested in": ["关心", "guānxīn"],
    "only...(that/can)": ["只有...才", "zhǐyǒu...cái"],
    "grade/performance/achievement": ["成绩", "chéngjì"],
    "bowl": ["碗", "wǎn"],
    "to distinguish": ["分", "fēn"],
    "to solve": ["解决", "jiějué"],
    "to try": ["试", "shì"],
    "really/truly": ["真正", "zhēnzhèng"],
    "very/to a great extent": ["多么", "duōme"],
}


for (let i = 1; i <= 20; i++) {
    $(`#a${i}`).on("click", function () {
        $("body").append("<div class='board'></div>")

        const lessonDictionary = window[`lesson${i}`];
        let j = 0;
        $(".board").append("<div class=show>Show</div>")
        for (const [key, value] of Object.entries(lessonDictionary)) {
            $(".board").append(`<div class=card id=1${j}>${key}</div><div class=cerd id=2${j}>${value[0]}</div><div class=cord>${value[1]}</div>`);
            /*$(`#1${j}`).on("click", function(){
                $(`#1${j}`).css("font-size","23px");
                console.log("test");
            })
            j++;*/
            $(".show").on("click", function () {
                $(".cerd").removeAttr("font-size").css("font-size", "23px");
                $(".cord").removeAttr("font-size").css("font-size", "23px");
            })
            /*$(".cord").on("click", function(){
                $(".cord").removeAttr("font-size").css("font-size","23px");
            })*/
        }
    })
}


/*$(".cord").on("click", function () {
    console.log('hello')
})*/

/*$(".board").on("click", ".cord", function() {
    console.log("test");
})*/










