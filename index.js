const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
let router = express.Router();
global.Name;
let points = 0;
// initialization
let app = express();
let port = process.env.PORT || 5000;


// question, images,and point data
let questions =
    [
        {
            id: '1',
            que: 'choose profession',
            optimg: {
                img1: {
                    imgsrc: '/images/q1(opt1).jpg',
                    imgpt: 5
                },
                img2: {
                    imgsrc: '/images/q1(opt2).jpg',
                    imgpt: 15
                },
                img3: {
                    imgsrc: '/images/q1(opt3).png',
                    imgpt: 10
                }
            },
            progress: 0
        },
        {
            id: '2',
            que: 'choose game',
            optimg: {
                img1: {
                    imgsrc: '/images/q2(opt1).jpg',
                    imgpt: 5
                },
                img2: {
                    imgsrc: '/images/q2(opt2).jpg',
                    imgpt: 10
                },
                img3: {
                    imgsrc: '/images/q2(opt3).jpg',
                    imgpt: 15
                }
            },
            progress: 10,
        },
        {
            id: '3',
            que: 'choose hairstyle',
            optimg: {
                img1: {
                    imgsrc: '/images/q3(opt1).jpg',
                    imgpt: 10
                },
                img2: {
                    imgsrc: '/images/q3(opt2).jpg',
                    imgpt: 15
                },
                img3: {
                    imgsrc: '/images/q3(opt3).jpg',
                    imgpt: 5
                }
            },
            progress: 20
        },
        {
            id: '4',
            que: 'favourite shoes',
            optimg: {
                img1: {
                    imgsrc: '/images/q4(opt1).jpg',
                    imgpt: 5
                },
                img2: {
                    imgsrc: '/images/q4(opt2).jpg',
                    imgpt: 15
                },
                img3: {
                    imgsrc: '/images/q4(opt3).jpg',
                    imgpt: 10
                }
            },
            progress: 30
        },
        {
            id: '5',
            que: 'dream house',
            optimg: {
                img1: {
                    imgsrc: '/images/q5(opt1).jpg',
                    imgpt: 10
                },
                img2: {
                    imgsrc: '/images/q5(opt2).jpg',
                    imgpt: 15
                },
                img3: {
                    imgsrc: '/images/q5(opt3).jpg',
                    imgpt: 5
                }
            },
            progress: 40
        },
        {
            id: '6',
            que: 'choose your favourite jeans',
            optimg: {
                img1: {
                    imgsrc: '/images/q6(opt1).jpg',
                    imgpt: 15
                },
                img2: {
                    imgsrc: '/images/q6(opt2).jpg',
                    imgpt: 10
                },
                img3: {
                    imgsrc: '/images/q6(opt3).jpg',
                    imgpt: 5
                }
            },
            progress: 50
        },
        {
            id: '7',
            que: 'dream car',
            optimg: {
                img1: {
                    imgsrc: '/images/q7(opt1).jpg',
                    imgpt: 10
                },
                img2: {
                    imgsrc: '/images/q7(opt2).jpg',
                    imgpt: 15
                },
                img3: {
                    imgsrc: '/images/q7(opt3).jpg',
                    imgpt: 5
                }
            },
            progress: 60
        },
        {
            id: '8',
            que: 'choose movie',
            optimg: {
                img1: {
                    imgsrc: '/images/q8(opt1).jpg',
                    imgpt: 15
                },
                img2: {
                    imgsrc: '/images/q8(opt2).jpg',
                    imgpt: 10
                },
                img3: {
                    imgsrc: '/images/q8(opt3).jpg',
                    imgpt: 5
                }
            },
            progress: 70
        },
        {
            id: '9',
            que: 'choose suit',
            optimg: {
                img1: {
                    imgsrc: '/images/q9(opt1).jpg',
                    imgpt: 5
                },
                img2: {
                    imgsrc: '/images/q9(opt2).jpg',
                    imgpt: 15
                },
                img3: {
                    imgsrc: '/images/q9(opt3).jpg',
                    imgpt: 10
                }
            },
            progress: 80
        },
        {
            id: '10',
            que: 'choose your favourite actor',
            optimg: {
                img1: {
                    imgsrc: '/images/q10(opt1).jpg',
                    imgpt: 10
                },
                img2: {
                    imgsrc: '/images/q10(opt2).jpg',
                    imgpt: 5
                },
                img3: {
                    imgsrc: '/images/q10(opt3).jpg',
                    imgpt: 15
                }
            },
            progress: 90
        }
    ];

// result data
let result = [
    {
        Result: 'The Shy Guy!',
        img: '/images/R1.jpg',
        description: 'You are thoughtful, good hearted and altruistic. You have a generous soul who can bring only good into this world.'
    },
    {
        Result: 'The Romantic Guy!',
        img: '/images/R2.jpg',
        description: 'You are committed, loving and outgoing. You have an open heart ready to find the right partner with whom to enjoy life.'
    },
    {
        Result: 'The Musculine Guy!',
        img: '/images/R3.jpg',
        description: 'You are good-natured, chrming and brave. You have powerful spirit meant to find your true path and your own truth.'
    },
    {
        Result: 'The Fun Guy!',
        img: '/images/R4.jpg',
        description: 'You are open-minded, optimistic and friendly. You have a keen spirit looking to experience as much as life has to offer.'
    },
    {
        Result: 'The Smart Guy!',
        img: '/images/R5.jpg',
        description: 'You are level-headed, driven and strong. You have a daring spirit meant to dominate the playground and chase your goals.'
    }
];



const urlencoded = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use(express.static('public'));


//routes
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/que1', urlencoded, (req, res) => {
    res.render('que1', { qn: questions[0].id, que: questions[0].que, img1: questions[0].optimg.img1.imgsrc, img2: questions[0].optimg.img2.imgsrc, img3: questions[0].optimg.img3.imgsrc, pt1: questions[0].optimg.img1.imgpt, pt2: questions[0].optimg.img2.imgpt, pt3: questions[0].optimg.img3.imgpt,prg: questions[0].progress });
    global.Name = req.body.name;
    console.log(Name);

});
app.get('/que2', urlencoded, (req, res) => {
    res.render('que2', { qn: questions[1].id, que: questions[1].que, img1: questions[1].optimg.img1.imgsrc, img2: questions[1].optimg.img2.imgsrc, img3: questions[1].optimg.img3.imgsrc, pt1: questions[1].optimg.img1.imgpt, pt2: questions[1].optimg.img2.imgpt, pt3: questions[1].optimg.img3.imgpt,prg: questions[1].progress });


});
app.get('/que3', urlencoded, (req, res) => {
    res.render('que3', { qn: questions[2].id, que: questions[2].que, img1: questions[2].optimg.img1.imgsrc, img2: questions[2].optimg.img2.imgsrc, img3: questions[2].optimg.img3.imgsrc, pt1: questions[2].optimg.img1.imgpt, pt2: questions[2].optimg.img2.imgpt, pt3: questions[2].optimg.img3.imgpt,prg: questions[2].progress });
    Name = req.body.name;

});
app.get('/que4', urlencoded, (req, res) => {
    res.render('que4', { qn: questions[3].id, que: questions[3].que, img1: questions[3].optimg.img1.imgsrc, img2: questions[3].optimg.img2.imgsrc, img3: questions[3].optimg.img3.imgsrc, pt1: questions[3].optimg.img1.imgpt, pt2: questions[3].optimg.img2.imgpt, pt3: questions[3].optimg.img3.imgpt,prg: questions[3].progress });
    Name = req.body.name;

});

app.get('/que5', urlencoded, (req, res) => {
    res.render('que5', { qn: questions[4].id, que: questions[4].que, img1: questions[4].optimg.img1.imgsrc, img2: questions[4].optimg.img2.imgsrc, img3: questions[4].optimg.img3.imgsrc, pt1: questions[4].optimg.img1.imgpt, pt2: questions[4].optimg.img2.imgpt, pt3: questions[4].optimg.img3.imgpt,prg: questions[4].progress });
    Name = req.body.name;


});
app.get('/que6', urlencoded, (req, res) => {
    res.render('que6', { qn: questions[5].id, que: questions[5].que, img1: questions[5].optimg.img1.imgsrc, img2: questions[5].optimg.img2.imgsrc, img3: questions[5].optimg.img3.imgsrc, pt1: questions[5].optimg.img1.imgpt, pt2: questions[5].optimg.img2.imgpt, pt3: questions[5].optimg.img3.imgpt,prg: questions[5].progress });
    Name = req.body.name;


});
app.get('/que7', urlencoded, (req, res) => {
    res.render('que7', { qn: questions[6].id, que: questions[6].que, img1: questions[6].optimg.img1.imgsrc, img2: questions[6].optimg.img2.imgsrc, img3: questions[6].optimg.img3.imgsrc, pt1: questions[6].optimg.img1.imgpt, pt2: questions[6].optimg.img2.imgpt, pt3: questions[6].optimg.img3.imgpt, prg: questions[6].progress });
    Name = req.body.name;

});
app.get('/que8', urlencoded, (req, res) => {
    res.render('que8', { qn: questions[7].id, que: questions[7].que, img1: questions[7].optimg.img1.imgsrc, img2: questions[7].optimg.img2.imgsrc, img3: questions[7].optimg.img3.imgsrc, pt1: questions[7].optimg.img1.imgpt, pt2: questions[7].optimg.img2.imgpt, pt3: questions[7].optimg.img3.imgpt,prg: questions[7].progress });
    Name = req.body.name;

});
app.get('/que9', urlencoded, (req, res) => {
    res.render('que9', { qn: questions[8].id, que: questions[8].que, img1: questions[8].optimg.img1.imgsrc, img2: questions[8].optimg.img2.imgsrc, img3: questions[8].optimg.img3.imgsrc, pt1: questions[8].optimg.img1.imgpt, pt2: questions[8].optimg.img2.imgpt, pt3: questions[8].optimg.img3.imgpt,prg: questions[8].progress });
    Name = req.body.name;

});
app.get('/que10', urlencoded, (req, res) => {
    res.render('que10', { qn: questions[9].id, que: questions[9].que, img1: questions[9].optimg.img1.imgsrc, img2: questions[9].optimg.img2.imgsrc, img3: questions[9].optimg.img3.imgsrc, pt1: questions[9].optimg.img1.imgpt, pt2: questions[9].optimg.img2.imgpt, pt3: questions[9].optimg.img3.imgpt, prg: questions[9].progress });
    Name = req.body.name;

});

app.post('/que2', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/que3', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/que4', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/que5', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/que6', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/que7', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
});

app.post('/que8', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/que9', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});

app.post('/que10', urlencoded, (req, res) => {
    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});
app.post('/result', urlencoded, (req, res) => {
    Name = req.body;
    console.log(Name);

    let string_points = req.body.value;
    let toNum = parseInt(string_points, 10);
    points = points + toNum;
    console.log(toNum);
});


app.get('/result', urlencoded, (req, res, ) => {
    let Name = global.Name;
    if (points >= 30 && points <= 70) {
        res.render('result', { ans: result[0].Result, img: result[0].img, des: result[0].description, });
    }
    if (points >= 75 && points <= 90) {
        res.render('result', { ans: result[1].Result, img: result[1].img, des: result[1].description, });

    }
    if (points >= 95 && points <= 110) {
        res.render('result', { ans: result[2].Result, img: result[2].img, des: result[2].description, });

    }
    if (points >= 115 && points <= 130) {
        res.render('result', { ans: result[3].Result, img: result[3].img, des: result[3].description, });

    }
    if (points >= 135 && points <= 500) {
        res.render('result', { ans: result[4].Result, img: result[4].img, des: result[4].description, });

    }


    console.log(points);
});








// intializing server 
app.listen(port, () => {
    console.log(`server is listening at port:${port}`);
});

