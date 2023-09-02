//boxes = sessionStorage.getItem("boxes");
group = sessionStorage.getItem("group");
lesson = sessionStorage.getItem("lesson");


//console.log(boxes);
//console.log(group);
//console.log(lesson);


my_lessonString = "hsk" + group[0] + "_lesson" + lesson;
//console.log(lessonString);


hsk1_lesson1 = {
    "(singular) you": ["你", "nǐ"],
    "good, fine": ["好", "hǎo"],
    "(polite) you": ["您", "nín"],
    "(plural) you": ["你们", "nǐmen"],
    "to be sorry": ["对不起", "duìbuqǐ"],
    "it doesn't matter": ["没关系", "méiguānxi"],
}

hsk1_lesson2 = {
    "to thank": ["谢谢", "xièxie"],
    "no, not": ["不", "bù"],
    "you're welcome": ["不客气", "bú kèqi"],
    "see you around": ["再见", "zàijiàn"],
}

hsk1_lesson3 = {
    "to call/be called": ["叫", "jiào"],
    "what": ["什么", "shénme"],
    "name": ["名字", "míngzi"],
    "I, me": ["我", "wǒ"],
    "to be": ["是", "shì"],
    "teacher": ["老师", "lǎoshī"],
    "question particle": ["吗", "ma"],
    "student": ["学生", "xuésheng"],
    "human, person": ["人", "rén"],
}

hsk1_lesson4 = {
    "she, her": ["她", "tā"],
    "who, whom": ["谁", "shéi"],
    "attribute particle": ["的", "de"],
    "Chinese (language)": ["汉语", "hànyǔ"],
    "which": ["哪", "nǎ"],
    "country, nation": ["国", "guó"],
    "particle at end of question": ["呢", "ne"],
    "he, him": ["他", "tā"],
    "classmate": ["同学", "tóngxué"],
    "friend": ["朋友", "péngyou"],
}

hsk1_lesson5 = {
    "family": ["家", "jiā"],
    "to have, there be": ["有", "yǒu"],
    "m. family members": ["口", "kǒu"],
    "daughter": ["女儿", "nü'ér"],
    "how many": ["几", "jǐ"],
    "year (of age)": ["岁", "suì"],
    "pron. indicating change": ["了", "le"],
    "this year": ["今年", "jīnnián"],
    "adverb: degree/extent": ["多", "duō"],
    "(of age) old": ["大", "dà"],
}

hsk1_lesson6 = {
    "can, to be able to": ["会", "huì"],
    "to speak, to say": ["说", "shuō"],
    "mother": ["妈妈", "māma"],
    "dish, cuisine": ["菜", "cài"],
    "very, quite": ["很", "hěn"],
    "delicious, tasty": ["好吃", "hǎochī"],
    "to make, to produce": ["做", "zuò"],
    "to write": ["写", "xiě"],
    "Chinese character": ["汉字", "hànzì"],
    "character, word": ["字", "zì"],
    "how": ["怎么", "zěnme"],
    "to read": ["读", "dú"],
}

hsk1_lesson7 = {
	"please": ["请", "qǐng"],
    "to ask": ["问", "wèn"],
    "today": ["今天", "jīntiān"],
    "day of month": ["号", "hào"],
    "month": ["月", "yuè"],
    "week": ["星期", "xīngqī"],
    "yesterday": ["昨天", "zuótiān"],
    "tomorrow": ["明天", "míngtiān"],
    "go to": ["去", "qù"],
    "school": ["学校", "xuéxiào"],
    "to look at/watch/read": ["看", "kàn"],
    "book": ["书", "shū"],
}

hsk1_lesson8 = {
    "want, would like": ["想", "xiǎng"],
    "to drink": ["喝", "hē"],
    "tea": ["茶", "chá"],
    "to eat": ["吃", "chī"],
    "cooked rice": ["米饭", "mǐfàn"],
    "afternoon": ["下午", "xiàwǔ"],
    "shop, store": ["商店", "shāngdiàn"],
    "to buy, to purchase": ["买", "mǎi"],
    "general measure word": ["个", "gè"],
    "cup, glass": ["杯子", "bēizi"],
    "this": ["这", "zhè"],
    "how many/much": ["多少", "duōshao"],
    "money": ["钱", "qián"],
    "m. unit of money": ["快", "kuài"],
    "that": ["那", "nà"],
}

hsk1_lesson9 = {
    "small/little": ["小", "xiǎo"],
    "cat": ["猫", "māo"],
    "to be in/on/at": ["在", "zài"],
    "there": ["那儿", "nàr"],
    "dog": ["狗", "gǒu"],
    "chair": ["椅子", "yǐzi"],
    "under/below": ["下面", "xiàmiàn"],
    "in/on/at": ["在", "zài"],
    "where": ["哪儿", "nǎr"],
    "to work, job": ["工作", "gōngzuò"],
    "son": ["儿子", "érzi"],
    "hospital": ["医院", "yīyuàn"],
    "doctor": ["医生", "yīshēng"],
    "father": ["爸爸", "bàba"],
}

hsk1_lesson10 = {
    "desk, table": ["桌子", "zhuōzi"],
    "up, above": ["上", "shang"],
    "computer": ["电脑", "diànnǎo"],
    "and": ["和", "hé"],
    "m. for books": ["本", "běn"],
    "inner/inside": ["里", "li"],
    "front": ["前面", "qiánmiàn"],
    "back": ["后面", "hòumiàn"],
    "here": ["这儿", "zhèr"],
    "there is not": ["没有", "méiyǒu"],
    "can, may": ["能", "néng"],
    "to sit/be seated": ["坐", "zuò"],
}

hsk1_lesson11 = {
    "now": ["现在","xiànzài"],
    "o'clock": ["点","diǎn"],
    "minute": ["分","fēn"],
    "noon": ["中午","zhōngwǔ"],
    "to eat a meal": ["吃饭","chī fàn"],
    "time, moment": ["时候","shíhou"],
    "to come/go back/return": ["回","huí"],
    "we, us": ["我们","wǒmen"],
    "film, movie": ["电影","diànyǐng"],
    "to live/stay": ["住","zhù"],
    "before/earlier": ["前","qián"],
}

hsk1_lesson12 = {
    "weather": ["天气","tiānqì"],
    "how": ["怎么样","zěnmeyàng"],
    "too, excessively": ["太","tài"],
    "hot": ["热","rè"],
    "cold": ["冷","lěng"],
    "to rain": ["下雨","xiàyǔ"],
    "miss, young lady": ["小姐","xiǎojiě"],
    "to come": ["来","lái"],
    "body": ["身体","shēntǐ"],
    "to like, to love": ["爱","ài"],
    "m. some, a few": ["些","xiē"],
    "fruit": ["水果","shuǐguǒ"],
    "water": ["水","shuǐ"],
}

hsk1_lesson13 = {
    "hello, hey": ["喂","wèi"],
    "also, too": ["也","yě"],
    "to study/learn": ["学习","xuéxí"],
    "morning, before noon": ["上午","shàngwǔ"],
    "to sleep": ["睡觉","shuìjiào"],
    "television": ["电视","diànshì"],
    "to like, to be fond of": ["喜欢","xǐhuan"],
    "prep. to": ["给","gěi"],
    "to make a phone call": ["打电话","dǎ diànhuà"],
    "part. suggestion/request/command": ["吧","ba"],
}

hsk1_lesson14 = {
    "thing/stuff": ["东西","dōngxi"],
    "m. a few/little": ["一点儿","yìdiǎnr"],
    "apple": ["苹果","píngguǒ"],
    "to see": ["看见","kànjiàn"],
    "Mr/sir": ["先生","xiānsheng"],
    "to drive": ["开","kāi"],
    "car, vehicle": ["车","chē"],
    "to come back": ["回来","huílai"],
    "minute": ["分钟","fēnzhōng"],
    "after, afterwards, later": ["后","hòu"],
    "clothes": ["衣服","yīfu"],
    "beautiful": ["漂亮","piàoliang"],
    "part. confirmation": ["啊","a"],
    "little/few": ["少","shǎo"],
    "these": ["这些","zhèxiē"],
    "both/all": ["都","dōu "],
}

hsk1_lesson15 = {
    "to meet/know": ["认识","rènshi"],
    "year": ["年","nián"],
    "college/university": ["大学","dàxué"],
    "hotel/restaurant": ["饭店","fàndiàn"],
    "taxi, cab": ["出租车","chūzūchē"],
    "together": ["一起","yìqǐ"],
    "glad/happy": ["高兴","gāoxìng"],
    "to listen": ["听","tīng"],
    "airplane": ["飞机","fēijī"],
}


hsk2_lesson1 = {
    "to travel": ["旅游","lǚyóu"],
    "to think/feel": ["觉得","juéde"],
    "most": ["最","zuì"],
    "why": ["为什么","wèi shénme"],
    "also, too": ["也","yě"],
    "sport, to work out": ["运动","yùndòng"],
    "to play football": ["踢足球","tīzúqiú"],
    "together": ["一起","yìqǐ"],
    "to want to/would like to": ["要","yào"],
    "new": ["新","xīn"],
    "it": ["它","tā"],
    "eye": ["眼睛","yǎnjing"],
}

hsk2_lesson2 = {
    "to be sick": ["生病","shēngbìng"],
    "every, each": ["每","měi"],
    "morning": ["早上","zǎoshang"],
    "to run/jog": ["跑步","pǎobù"],
    "to get up": ["起床","qǐ chuáng"],
    "medicine": ["药","yào"],
    "body": ["身体","shēntǐ"],
    "to come/go out": ["出","chū"],
    "tall": ["高","gāo"],
    "meter": ["米","mǐ"],
    "to know": ["知道","zhīdào"],
    "to have a rest": ["休息","xiūxi"],
    "busy": ["忙","máng"],
    "time": ["时间","shíjiān"],
}

hsk2_lesson3 = {
    "watch": ["手表","shǒubiǎo"],
    "thousand": ["千","qiān"],
    "newspaper": ["报纸","bàozhǐ"],
    "to send/deliver": ["送","sòng"],
    "num.-m. indicates attempt": ["一下","yíxià"],
    "milk": ["牛奶","niúnǎi"],
    "room": ["房间","fángjiān"],
    "husband": ["丈夫","zhàngfu"],
    "beside": ["旁边","pángbiān"],
    "really": ["真","zhēn"],
    "pink": ["粉色","fěnsè"],
    "color": ["颜色","yánsè"],
    "left side": ["左边","zuǒbian"],
    "red": ["红色","hóng"],
}

hsk2_lesson4 = {
    "birthday": ["生日","shēngrì"],
    "happy": ["快乐","kuàilè"],
    "to, for": ["给","gěi"],
    "to receive/take/accept": ["接","jiē"],
    "evening, night": ["晚上","wǎnshang"],
    "to ask": ["问","wèn"],
    "very, extremely": ["非常","fēicháng"],
    "to begin/start": ["开始","kāishǐ"],
    "already": ["已经","yǐjīng"],
    "long": ["长","cháng"],
    "two": ["两","liǎng"],
    "to help": ["帮","bāng"],
    "to introduce/recommend": ["介绍","jièshào"],
}

hsk2_lesson5 = {
    "outside": ["外面","wàimiàn"],
    "to intend/plan": ["准备","zhǔnbèi"],
    "adv. conclusion/resolution": ["就","jiù"],
    "fish": ["鱼","yú"],
    "part. suggestion/request/command": ["吧","ba"],
    "m. clothes": ["件","jiàn"],
    "possibly/fairly/rather": ["还","hái"],
    "not bad": ["可以","kěyǐ"],
    "pretty good": ["不错","búcuò"],
    "test, exam": ["考试","kǎoshì"],
    "meaning": ["意思","yìsi"],
    "coffee": ["咖啡","kāfēi"],
    "prep. to/for": ["对","duì"],
    "afterwards/later": ["以后","yǐhòu"],
}

hsk2_lesson6 = {
    "door, gate": ["门","mén"],
    "outer, outside": ["外","wài"],
    "bike": ["自行车","zìxíngchē"],
    "mutton": ["羊肉","yángròu"],
    "delicious": ["好吃","hǎochī"],
    "noodles": ["面条","miàntiáo"],
    "to play basketball": ["打篮球","dǎlánqiú"],
    "because/since": ["因为","yīnwèi"],
    "so/therefore": ["所以","suǒyǐ"],
    "to swim": ["游泳","yòuyǒng"],
    "often/frequently": ["经常","jīngcháng"],
    "kilogram": ["公斤","gōngjīn"],
    "elder sister": ["姐姐","jiějie"],
}

hsk2_lesson7 = {
    "classroom": ["教室","jiàoshì"],
    "airport": ["机场","jīchǎng"],
    "road/path/way": ["鲁","lù"],
    "to be away from": ["离","lí"],
    "company, firm": ["公司","gōngsī"],
    "far, distant": ["元","yuǎn"],
    "bus": ["公共汽车","gōnggòng qìchē"],
    "hour": ["小时","xiǎoshí"],
    "slow": ["慢","màn"],
    "quick/fast": ["快","kuài"],
    "to pass (time)": ["过","guò"],
    "to walk": ["走","zǒu"],
    "to arrive/reach": ["到","dào"],
}

hsk2_lesson8 = {
    "again, once more": ["再","zài"],
    "to let/allow": ["让","ràng"],
    "to tell": ["告诉","gàosù"],
    "to wait/await": ["等","děng"],
    "to look for": ["找","zhǎo"],
    "thing/matter/affair ": ["事情","shìqing"],
    "attendant, waiter/waitress": ["服务员","fúwùyuàn"],
    "white": ["白","bái"],
    "black": ["黑","hēi"],
    "expensive": ["贵","guì"],
}

hsk2_lesson9 = {
    "wrong, incorrect": ["错","cuò"],
    "from": ["从","cóng"],
    "to dance": ["跳舞","tiào wǔ"],
    "first": ["第一","dì yī"],
    "to hope/wish": ["希望","xīwàng"],
    "question, problem": ["问题","wèntí"],
    "to welcome": ["欢迎","huānyíng"],
    "to work/do a job": ["上班","shàng bān"],
    "to understand/know": ["懂","dǒng"],
    "to finish/end": ["完","wán"],
    "question/problem": ["题","tí"],
}

hsk2_lesson10 = {
    "class/lesson": ["课","kè"],
    "to help/assis/aid": ["帮助","bāngzhù"],
    "don't": ["别","bié"],
    "elder brother": ["哥哥","gēge"],
    "egg": ["鸡蛋","jīdàn"],
    "watermelon": ["西瓜","xīguā"],
    "in the process of": ["正在","zhèngzài"],
    "cell phone": ["手机","shǒujī"],
    "to wash/bathe": ["洗","xǐ"],
}

hsk2_lesson11 = {
    "to sing": ["唱歌","chàng gē"],
    "man/male": ["男","nán"],
    "woman/female": ["女","nǚ"],
    "child/kid": ["孩子","háizi"],
    "right side": ["右边","yòubian"],
    "than": ["比","bǐ"],
    "cheap": ["便宜","piányi"],
    "to speak/say/talk": ["说话","shuō huà"],
    "maybe/perhaps/probably": ["可能","kěnéng"],
    "last year": ["去年","qùnián"],
    "family name/surname": ["姓","xìng"],
}

hsk2_lesson12 = {
    "part. complement of result": ["得","de"],
    "wife": ["妻子","qīzi"],
    "snow": ["雪","xuě"],
    "zero": ["零","líng"],
    "degree": ["度","dù"],
    "to wear/put on": ["穿","chuān"],
    "to enter, to come/go in": ["进","jìn"],
    "younger brother": ["弟弟","dìdi"],
    "near, close": ["近","jìn"],
}

hsk2_lesson13 = {
    "part. indicates state": ["着","zhe"],
    "hand": ["手","shǒu"],
    "to hold/take/bring": ["拿","ná"],
    "pencil": ["铅笔","qiānbǐ"],
    "class/grade/team": ["班","bān"],
    "to grow/develop": ["长","zhǎng"],
    "to smile/laugh": ["笑","xiào"],
    "hotel": ["宾馆","bīnguǎn"],
    "straight/all along": ["一直","yìzhí"],
    "to, towards": ["往","wǎng"],
    "crossing/crossroads": ["路口","lùkǒu"],
}

hsk2_lesson14 = {
    "interesting, fun": ["有意思","yǒu yìsi"],
    "but/still/yet": ["但是","dànshì"],
    "althogh, though": ["虽然","suīrán"],
    "m. time": ["次","cì"],
    "to play, to have fun": ["玩儿","wánr"],
    "sunny/clear": ["晴","qíng"],
    "hundred": ["百","bǎi"],
}

hsk2_lesson15 = {
    "day/date": ["日","rì"],
    "New Year": ["新年","xīnnián"],
    "ticket": ["票","piào"],
    "railway station": ["火车站","huǒchēzhàn"],
    "all, everybody": ["大家","dàjiā"],
    "adv. more": ["更","gèng"],
    "younger sister": ["妹妹","mèimei"],
    "cloudy": ["阴","yīn"],
}


hsk3_lesson1 = {
    "weekend": ["周末", "zhōumò"],
    "plan": ["打算","dǎsuàn"],
    "particle_a": ["啊","a"],
    "with": ["跟", "gēn"],
    "always": ["一直", "yìzhí"],
    "game": ["游戏","yóuxì"],
    "homework": ["作业","zuòyè"],
    "worried": ["着急","zháojí"],
    "review": ["复习","fùxí"],
    "south": ["南方","nánfāng"],
    "north": ["北方","běifāng"],
    "bread": ["面包","miànbāo"],
    "bring": ["带","dài"],
    "map": ["地图","dìtú"],
    "carry": ["搬","bān"]
}

hsk3_lesson2 = {
    "leg": ["腿","tuì"],
    "hurt/painful":["疼","téng"],
    "foot":["脚","jiǎo"],
    "tree":["树","shù"],
    "easy":["容易","róngyì"],
    "difficult":["难","nán"],
    "mrs.":["太太","tàitài"],
    "secretary":["秘书","mìshū"],
    "manager":["经理","jīnglǐ"],
    "office":["办公室","bàngōngshì"],
    "m.vehicles":["辆","liàng"],
    "building":["楼","lóu"],
    "take/fetch":["拿","ná"],
    "m.things_with_handle":["把","bǎ"],
    "umbrella":["伞","sǎn"],
    "fat":["胖","pàng"],
    "actually":["其实","qíshí"],
    "thin":["瘦","shòu"],
}

hsk3_lesson3 = {
    "or":["还是","háishi"],
    "to_climb_a_mountain":["爬山","páshān"],
    "careful":["小心","xiǎoxīn"],
    "m.dress/pant":["条","tiáo"],
    "pants":["裤子","kùzi"],
    "remember":["记得","jìde"],
    "shirt":["衬衫","chènshān"],
    "m.money":["元","yuán"],
    "fresh":["新鲜","xīnxiān"],
    "sweet":["甜","tián"],
    "only":["只","zhǐ"],
    "to_put/place":["放","fàng"],
    "drink/beverage":["饮料","yǐnliào"],
    "or":["或者","huòzhě"],
    "comfortable":["舒服","shūfu"],
    "flower":["花","huā"],
    "green":["绿","lǜ"],
}

hsk3_lesson4 = {
    "match/competition":["比赛","bǐsài"],
    "photo":["照片","zhàopiàn"],
    "grade":["年级","niánjí"],
    "and":["又","yòu"],
    "smart":["聪明","cōngming"],
    "warm/enthusiastic":["热情","rèqíng"],
    "hard-working":["努力","nǔlì"],
    "always":["总是","zǒngshì"],
    "to_answer":["回答","huídá"],
    "to_stand":["站","zhàn"],
    "hungry":["饿","è"],
    "supermarket":["超市","chāoshì"],
    "cake":["蛋糕","dàngāo"],
    "young":["年轻","niánqīng"],
    "serious/earnest":["认真","rènzhēn"],
    "customer/guest":["客人","kèrén"],
}

hsk3_lesson5  = {
    "to_have_a_fever":["发烧","fāshāo"],
    "for":["为","wèi"],
    "to_take_care_of":["照顾","zhàogù"],
    "need":["用","yòng"],
    "catch_a cold":["感冒","gǎnmào"],
    "season":["季节","jìjié"],
    "of coruse":["当然","dāngrán"],
    "spring":["春天","chūntiān"],
    "grass":["草","cǎo"],
    "summer":["夏天","xiàtiān"],
    "dress/skirt":["裙子","qúnzi"],
    "lately/recently":["最近","zuìjìn"],
    "more/to a greater degree":["越","yuè"],
}

hsk3_lesson6  = {
    "glasses":["眼镜","yǎnjìng"],
    "suddenly":["突然","tūrán"],
    "to leave/part with":["离开","líkāi"],
    "clear/distinct":["清楚","qīngchu"],
    "just now":["刚才","gāngcái"],
    "to help":["帮忙","bāngmáng"],
    "extraordinarily":["特别","tèbié"],
    "explain":["讲","jiǎng"],
    "clear":["明白","míngbai"],
    "to do physical exercise":["锻炼","duànliàn"],
    "music":["音乐","yīnyuè"],
    "park":["公园","gōngyuán"],
    "to chat":["聊天","liáotiān"],
    "to fall asleep":["睡着","shuìzháo"],
    "even more":["更","gèng"],
}

hsk3_lesson7  = {
    "colleague":["同事","tóngshì"],
    "before, ago":["以前","yǐqián"],
    "bank":["银行","yínháng"],
    "for a long time/long":["久","jiǔ"],
    "to be interested in":["感兴趣","gǎnxìngqù"],
    "to marry/to get married":["结婚","jiéhūn"],
    "to welcome":["欢迎","huānyíng"],
    "to be late":["迟到","chídào"],
    "half":["半","bàn"],
    "to meet sb, to pick sb up":["接","jiē"],
    "quarter":["刻","kè"],
    "fall short of":["差","chà"],
}

hsk3_lesson8  = {
    "again":["又","yòu"],
    "to be satisfied":["满意","mǎnyì"],
    "elevator":["电梯","diàntī"],
    "m. used for floors":["层","céng"],
    "to be afraid/scared":["害怕","hàipà"],
    "panda":["熊猫","xióngmāo"],
    "to meet":["见面","jiànmiàn"],
    "quiet":["安静","ānjìng"],
    "coke":["可乐","kělè"],
    "a moment":["一会儿","yíhuìr"],
    "immediately/at once":["马上","mǎshàng"],
    "bathroom/restroom":["洗手间","xǐshǒujiān"],
    "old":["老","lǎo"],
    "almost":["几乎","jīhū"],
    "to change":["变化","biànhuà"],
    "healthy":["健康","jiànkāng"],
    "important":["重要","zhòngyào"],
}

hsk3_lesson9  = {
    "Chinese language":["中文","zhōngwén"],
    "class":["班","bān"],
    "same as":["一样","yíyàng"],
    "the last one":["最后","zuìhòu"],
    "to rest assured":["放心","fàngxīn"],
    "certainly/definitely":["一定","yídìng"],
    "to worry":["担心","dānxīn"],
    "fairly/rather":["比较","bǐjiào"],
    "to know":["了解","liǎojiě"],
    "first, in advance":["先","xiān"],
    "middle":["中间","zhōngjiān"],
    "to participate":["参加","cānjiā"],
    "influence":["影响","yǐngxiǎng"],
}

hsk3_lesson10  = {
    "height/stature":["个子","gèzi"],
    "short":["矮","ǎi"],
    "history":["历史","lìshǐ"],
    "P.E/sports":["体育","tǐyù"],
    "maths":["数学","shùxué"],
    "convenient":["方便","fāngbiàn"],
    "bicycle":["自行车","zìxíngchē"],
    "to ride":["骑","qí"],
    "old/used":["旧","jiù"],
    "to change/substitute":["换","huàn"],
    "place":["地方","dìfang"],
    "intermediary/agent":["中介","zhōngjiè"],
    "main":["主要","zhǔyào"],
    "environment":["环境","huánjìng"],
    "nearby":["附近","fùjìn"],
}

hsk3_lesson11  = {
    "library":["图书馆","túshūguǎn"],
    "to borrow/lend":["借","jiè"],
    "dictionary":["词典","cídiǎn"],
    "to return":["还","huán"],
    "lamp":["灯","dēng"],
    "meeting/conference":["会议","huìyì"],
    "to end/finish":["结束","jiéshù"],
    "to forget":["忘记","wàngjì"],
    "air conditioner":["空调","kōngtiáo"],
    "to turn off/close":["关","guān"],
    "subway":["地铁","dìtiě"],
    "m. pair":["双","shuāng"],
    "chopsticks":["筷子","kuāizi"],
    "beer":["啤酒","píjiǔ"],
    "mouthful":["口","kǒu"],
    "bottle":["瓶子","píngzi"],
    "notebook, laptop":["笔记本(电脑)","bǐjìběn(diànnǎo)"],
    "e-mail":["电子邮件","diànzǐyóujiàn"],
    "to be used to/habit":["习惯","xíguàn"],
}

hsk3_lesson12  = {
	"sun":["太阳","tàiyáng"],
    "west":["西","xī"],
    "angry":["生气","shēngqì"],
    "luggage/suitcase":["行李箱","xínglixiāng"],
    "self":["自己","zìjǐ"],
    "bag/sack":["包","bāo"],
    "to discover":["发现","fāxiàn"],
    "passport":["护照","hùzhào"],
    "to take off (aircraft)":["起飞","qǐfēi"],
    "driver":["司机","sījī"],
    "to teach":["教","jiāo"],
    "to draw, painting":["画","huà"],
    "to need":["需要","xūyào"],
    "blackboard":["黑板","hēibǎn"],
}

hsk3_lesson13  = {
	"finally":["终于","zhōngyú"],
    "grandfather":["爷爷","yéye"],
    "gift/present":["礼物","lǐwù"],
    "grandmother":["奶奶","nǎinai"],
    "to come across/run into":["遇到","yùdào"],
    "taking place at the same time":["一边","yìbiān"],
    "past":["过去","guòqù"],
    "general/usual":["一般","yìbān"],
    "would like to":["愿意","yuànyì"],
    "to rise":["起来","qǐlai"],
    "should":["应该","yīnggāi"],
    "life":["生活","shēnghuó"],
    "headmaster":["校长","xiàozhǎng"],
    "broken/ruined":["坏","huài"],
    "often":["经常","jīngcháng"],
}

hsk3_lesson14  = {
    "to clean/sweep":["打扫","dǎsǎo"],
    "clean":["干净","gānjìng"],
    "then/after that":["然后","ránhòu"],
    "refrigerator":["冰箱","bīngxiāng"],
    "to take a bath/shower":["洗澡","xǐzǎo"],
    "programme":["节目","jiémù"],
    "moon":["月亮","yuèliang"],
    "to be like":["像","xiàng"],
    "plate":["盘子","pánzi"],
    "to be windy":["刮风","guāfēng"],
    "uncle":["叔叔","shūshu"],
    "aunt":["阿姨","āyí"],
    "story":["故事","gùshì"],
    "sound,voice":["声音","shēngyīn"],
    "menu":["菜单","càidān"],
    "simple":["简单","jiǎndān"],
    "banana":["香蕉","xiāngjiāo"],
}

hsk3_lesson15  = {
    "to study abroad":["留学","liú xué"],
    "level, standard":["水平","shuǐpíng"],
    "to improve":["提高","tígāo"],
    "exercise":["练习","liànxí"],
    "complete":["完成","wán chéng"],
    "sentence":["句子","jùzi"],
    "the rest":["其他","qítā"],
    "to send":["发","fā"],
    "requirement":["要求","yāoqiú"],
    "to pay attention to":["注意","zhùyì"],
    "to surf the Internet":["上网","shàng wǎng"],
    "other than":["除了","chúle"],
    "news":["新闻","xīnwén"],
    "to spend":["花","huā"],
    "extremely":["及(了)","jí(le)"],
    "festival":["节日","jiérì"],
    "to hold (a meeting/event)":["举行","jǔxíng"],
    "world":["世界","shìjiè"],
    "street":["街道","jiēdào"],
    "each":["各","gè"],
    "culture":["文化","wénhuà"],
}

hsk3_lesson16  = {
    "city":["城市","chéngshì"],
    "if/in case":["如果","rúguǒ"],
    "to think/believe":["认为","rènwéi"],
    "leather shoes":["皮鞋","píxié"],
    "hat/cap":["帽子","màozi"],
    "to grow/develop":["张","zhǎng"],
    "lovely/adorable":["可爱","kě`ài"],
    "metre":["米","mǐ"],
    "kilogramme":["公斤","gōngjīn"],
    "nose":["鼻子","bízi"],
    "hair":["头发","tóufa"],
    "to check/examine":["检查","jiǎnchá"],
    "to brush the teeth":["刷牙","shuā yá"],
    "relationship":["关系","guānxì"],
    "other people":["别人","biérén"],
    "word/expression":["词语","cíyǔ"],
}

hsk3_lesson17  = {
    "to ask for leave":["请假","qǐngjià"],
    "in total":["一共","yígòng"],
    "neighbour":["邻居","línjū"],
    "later/afterwards":["后来","hòulái"],
    "hobby/interest":["爱好","àihào"],
    "way/approach":["办法","bànfǎ"],
    "full (having eaten full)":["饱","bǎo"],
    "for the sake of":["为了","wèile"],
    "to decide":["决定","juédìng"],
    "to choose":["选择","xuǎnzé"],
    "winter":["冬(天)","dōng(tiān)"],
    "must":["必须","bìxū"],
    "according to/based on":["根据","gēnjù"],
    "condition/situation":["情况","qíngkuàng"],
    "mouth":["口","kǒu"],
    "thirsty":["渴","kě"],
}

hsk3_lesson18  = {
    "towards":["向","xiàng"],
    "ten thousand":["万","wàn"],
    "m. for certain animals":["只","zhī"],
    "mouth":["嘴","zuǐ"],
    "animal":["动物","dòngwù"],
    "m. sections of periods":["段","duàn"],
    "not only... but also":["不但...而且","búdàn...ěrqiě"],
    "famous":["有名","yǒumíng"],
    "to agree":["同意","tóngyì"],
    "to believe":["相信","xiāngxìn"],
    "about regarding":["关于","guānyú"],
    "opportunity":["机会","jīhuì"],
    "country/nation":["国家","guójiā"],
    "kind/type":["种","zhǒng"],
    "feature":["特点","tèdiǎn"],
    "strange/odd":["奇怪","qíguài"],
    "particle, connects adverbial and verb":["地","de"],
}

hsk3_lesson19  = {
    "ear":["耳朵","ěrduo"],
    "face":["脸","liǎn"],
    "short":["短","duǎn"],
    "horse":["马","mǎ"],
    "m. for flat objects (photo, paper)":["张","zhāng"],
    "m. respectful for people":["位","wèi"],
    "blue":["蓝","lán"],
    "autumn/fall":["秋(天)","qiū(tiān)"],
    "to spend/to pass":["过","guò"],
    "bird":["鸟","niǎo"],
    "to cry":["哭","kū"],
    "Yellow River":["黄河","huánghé"],
    "boat/ship":["船","chuán"],
    "to pass by":["经过","jīngguò"],
}

hsk3_lesson20  = {
    "camera":["照相机","zhàoxiàngjī"],
    "prep. for passive voice":["被","bèi"],
    "sad":["难过","nánguò"],
    "east":["东","dōng"],
    "credit card":["信用卡","xìnyòngkǎ"],
    "to care for/be interested in":["关心","guānxīn"],
    "only...(that/can)":["只有...才","zhǐyǒu...cái"],
    "grade/performance/achievement":["成绩","chéngjì"],
    "bowl":["碗","wǎn"],
    "to distinguish":["分","fēn"],
    "to solve":["解决","jiějué"],
    "to try":["试","shì"],
    "really/truly":["真正","zhēnzhèng"],
    "very/to a great extent":["多么","duōme"],
}

//console.log(window[lessonString]);
//console.log(typeof(hsk3_lesson20));
lessonLength = Object.keys(window[my_lessonString]).length;

numArray = [];


for (let i = 0; i < lessonLength; i++){
    numArray[i] = i;
}

//console.log(numArray);
//console.log(Object.keys(hsk3_lesson7)[1]);

shuffledNumArray = shuffle(numArray);
//console.log(shuffledNumArray);
$(".mainbox").append(`<div id='btm' class='basecard' style='width:30vw'>BACK TO MAIN</div>`);
$(".mainbox").append(`<div id='back' class='basecard'>BACK</div>`);
$(".mainbox").append(`<div id='showall' class='basecard'>SHOW ALL</div>`);

$('#btm').on("click", function(){
    window.location.href = "index.html";
})

$('#back').on("click", function(){
    window.location.href = "test.html"
})

$('#showall').on("click", function(){
    for (let i = 0; i < lessonLength; i++) {
        $(`#a${i}`).css("color", "rgb(167, 160, 160)");
        $(`#b${i}`).css("color", "rgb(167, 160, 160)");
        $(`#c${i}`).css("color", "rgb(167, 160, 160)");
    }
})

for (let i = 0; i < lessonLength; i++) {
    currentKey = Object.keys(window[my_lessonString])[shuffledNumArray[i]]
    $(".mainbox").append(`<div id=a${i} class="basecard">${currentKey}</div>`);
    $(".mainbox").append(`<div id=b${i} class="basecard">${window[my_lessonString][currentKey][0]}</div>`);
    $(".mainbox").append(`<div id=c${i} class="basecard">${window[my_lessonString][currentKey][1]}</div>`);
}

$('.basecard').on("click", function(){
    $(this).css("color", "rgb(167, 160, 160)");
})

for (let i = 0; i < lessonLength; i++) {
    $(`#a${i}`).css("width", "30vw");
}

for (let i = 0; i < lessonLength; i++) {
    $(`#a${i}`).css("color", "rgb(24, 23, 23)");
    $(`#b${i}`).css("color", "rgb(24, 23, 23)");
    $(`#c${i}`).css("color", "rgb(24, 23, 23)");
}

let mode=''

switch(group[2]){
    case '1':
        mode = 'b';
        break;
    case '2':
        mode = 'c';
        break;
    case '3':
        mode = 'a';
        break;
}

for (let i = 0; i < lessonLength; i++) {
    $(`#${mode}${i}`).css("color", "rgb(167, 160, 160)");
}

height = Number(lessonLength) * 10 + 15
$("#secondmenu").css("min-height", `${height}vh`);



function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
//shuffle(hsk3_lesson20);

