// animation
let _inner_text_header = ["Academic Programs:", "Extracurricular Activities", "Student Support", "Technology", "College Counseling"];
let _inner_text_desc = ["Our academic programs provide rigorous coursework that is designed to challenge and inspire students. Our dedicated faculty work hard to ensure that students are well-prepared for college and beyond, and we offer a range of courses in the arts, sciences, humanities, and social sciences.", " Our extracurricular activities provide opportunities for students to explore their interests, develop their talents, and make new friends. From sports teams to music groups to community service clubs, there is something for everyone at our school.", "We recognize that students may face challenges both inside and outside the classroom, and we are committed to providing them with the support they need to succeed. Our guidance counselors, learning specialists, and other staff members are available to provide academic and emotional support as needed.", " We believe that technology can be a powerful tool for learning, and we provide our students with access to cutting-edge tools and resources. From state-of-the-art computer labs to interactive smart boards in classrooms, we are constantly innovating to enhance the learning experience.", "We are committed to helping our students achieve their goals, and we provide comprehensive college counseling services to help them navigate the often complex college application process. Our experienced counselors work with students to identify potential colleges, write compelling essays, and prepare for interviews."];
let _img_path = ["../img/bg1.jpg", "../img/imgs/school_front12.jpg", "../img/imgs/school_front10.jpg", "../img/imgs/school_front8.jpg", "../img/imgs/school_front3.JPG"];

let count = 2;
// let _hero_child = document.querySelector(".hero").children;
let _left_hero = document.querySelector(".left-hero");
let _right_hero = document.querySelector(".right-hero");

let _left_hero_child = _left_hero.children;
let _right_hero_child = _right_hero.children;

let _left_hero_div = _left_hero_child[1];
let _right_hero_div = _right_hero_child[1];

let _left_hero_img = _left_hero_child[0];
let _right_hero_img = _right_hero_child[0];

let _left_header = _left_hero_child[1].children[0];
let _right_header = _right_hero_child[1].children[0];

let _left_para = _left_hero_child[1].children[1];
let _right_para = _right_hero_child[1].children[1];


// update the contents to new values
let update = function () {
    _left_hero = document.querySelector(".left-hero");
    _right_hero = document.querySelector(".right-hero");
    _left_hero_child = _left_hero.children;
    _right_hero_child = _right_hero.children;
    _left_hero_img = _left_hero_child[0];
    _right_hero_img = _right_hero_child[0];
    _left_header = _left_hero_child[1].children[0];
    _right_header = _right_hero_child[1].children[0];
    _left_para = _left_hero_child[1].children[1];
    _right_para = _right_hero_child[1].children[1];
    _right_hero_div = _right_hero_child[1];
    _left_hero_div = _left_hero_child[1];
};

let _slide = function () {
    _left_hero.classList.add("left");
    _right_hero.classList.add("left");
}

let _remove = function () {
    _left_hero.classList.remove("left");
    _right_hero.classList.remove("left");
}

let _content_update = function () {
    if (count > 4) {
        count = 0;
    }
    // the content has slided now change their position and content
    _left_hero.classList.add("hide");
    _right_hero.classList.replace("right-hero", "left-hero");
    _left_hero.classList.replace("left-hero", "right-hero");

    _remove();

    // change only the content of the new right-hero i.e left-hero then update
    _left_hero_img.src = _img_path[count];
    _left_header.innerText = _inner_text_header[count];
    _left_para.innerText = _inner_text_desc[count];

    _left_hero.classList.remove("hide");
    count++;
    update();
};


let _text_over_trans_rem = function () {
    let _to_trans = _left_hero_div;
    _to_trans.classList.replace("show", "disappear");
    setTimeout(_text_over_trans_add, 3000);
};

let _text_over_trans_add = function () {
    let _to_trans = _left_hero_div;
    _to_trans.classList.contains("disappear")? _to_trans.classList.replace("disappear", "show"): _to_trans.classList.add("show");
    setTimeout(_text_over_trans_rem, 13500);
};

setTimeout(_text_over_trans_add, 1000);
setInterval(_slide, 15000);
setInterval(_content_update, 16000);

