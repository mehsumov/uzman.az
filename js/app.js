$(function () {
  // Burger Menu
  $(".burger-icon").click(function () {
    $(".nav-mobile").slideToggle();
    $(".nav-top").toggleClass("fixed");
    $("body").toggleClass("noScroll");
  });
  // Consultation modal
  let radioBox = document.querySelectorAll('#pills-one input[type="radio"');
  let constTopic = document.querySelectorAll("#pills-two input");
  let constForm = document.querySelectorAll("#pills-three .form-control");
  let contunieFirst = document.querySelector("#pills-one .contunie");
  let contunieSecond = document.querySelector("#pills-two .contunie");
  let contunieThird = document.querySelector("#pills-three .contunie");
  let backSecond = document.querySelector("#pills-two .back");
  let backThird = document.querySelector("#pills-three .back");
  let pillsOne = document.querySelector("#pills-one");
  let pillsTwo = document.querySelector("#pills-two");
  let pillsThree = document.querySelector("#pills-three");
  let pillsOneTab = document.querySelector("#pills-one-tab");
  let pillsTwoTab = document.querySelector("#pills-two-tab");
  let pillsThreeTab = document.querySelector("#pills-three-tab");
  let progLoading = document.querySelector(".prog-loading");

  radioBox.forEach((item) => {
    item.addEventListener("change", function () {
      contunieFirst.classList.remove("disabled");
    });
  });

  constTopic.forEach((item) => {
    item.addEventListener("change", function (e) {
      let chechked = document.querySelector("#pills-two input:checked");

      if (chechked) {
        contunieSecond.classList.remove("disabled");
      } else {
        contunieSecond.classList.add("disabled");
      }
    });
  });

  constForm.forEach((item) => {
    item.addEventListener("keyup", function () {
      let inputs = document.querySelectorAll("#pills-three .form-control");

      if (
        inputs[0].value !== "" &&
        inputs[1].value !== "" &&
        inputs[2].value !== "" &&
        inputs[3].value !== ""
      ) {
        let submitBtn = document.querySelector("#pills-three .contunie");
        if (submitBtn.classList.contains("disabled")) {
          submitBtn.classList.remove("disabled");
        }
      } else {
        let submitBtn = document.querySelector("#pills-three .contunie");
        if (!submitBtn.classList.contains("disabled")) {
          submitBtn.classList.add("disabled");
        }
      }
    });
  });

  contunieFirst.addEventListener("click", function (e) {
    pillsOneTab.classList.remove("active");
    pillsTwoTab.classList.add("active");
    pillsOne.classList.remove("show", "active");
    pillsTwo.classList.add("show", "active");
    progLoading.style.width = "50%";
    pillsOneTab.classList.add("preActive");

    e.preventDefault();
  });
  contunieSecond.addEventListener("click", function (e) {
    pillsTwoTab.classList.remove("active");
    pillsThreeTab.classList.add("active");
    pillsTwo.classList.remove("show", "active");
    pillsThree.classList.add("show", "active");
    if (screen.width > 576) {
      progLoading.style.width = "80%";
    } else {
      progLoading.style.width = "90%";
    }

    pillsTwoTab.classList.add("preActive");
    e.preventDefault();
  });
  contunieThird.addEventListener("click", function (e) {
    progLoading.style.width = "100%";
    e.preventDefault();
  });
  backSecond.addEventListener("click", function (e) {
    pillsTwoTab.classList.remove("active");
    pillsOneTab.classList.add("active");
    pillsTwo.classList.remove("show", "active");
    pillsOne.classList.add("show", "active");
    progLoading.style.width = "21%";
    pillsOneTab.classList.remove("preActive");
    e.preventDefault();
  });
  backThird.addEventListener("click", function (e) {
    pillsThreeTab.classList.remove("active");
    pillsTwoTab.classList.add("active");
    pillsThree.classList.remove("show", "active");
    pillsTwo.classList.add("show", "active");
    progLoading.style.width = "50%";
    pillsTwoTab.classList.remove("preActive");
    e.preventDefault();
  });

  // Blog
  $(".like-icon").click(function (event) {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    event.preventDefault();
  });

  $(".dislike-icon").click(function (event) {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    event.preventDefault();
  });

  // Question
  $(".quest-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    arrows: false,
    draggable: false,
    autoplay: true,
    slidesToShow: 5,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    touchMove: false,
  });
  let slide = document.querySelectorAll(".invisible");

  const removeInvisible = (index) => {
    slide[index].classList.remove("invisible");
  };
  let index = -1;
  setInterval(() => {
    if (index <= 6) {
      index++;
      removeInvisible(index);
    }
  }, 3450);

  // Dark mode
  let darkBtn = document.querySelector(".dark-mode");
  let body = document.querySelector("body");
  let localDark = localStorage.getItem("dark");
  const setDarkMode = () => {
    if (localDark === "true") {
      document.querySelector("body").classList.add("dark");
    }
  };

  setDarkMode();
  if (localDark === "true") {
    document.querySelector(".nav-top .dark span").innerHTML = "Açıq rejim";
  }

  if (localDark === null) {
    localStorage.setItem("dark", false);
  }
  darkBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("dark", false);
      document.querySelector(".nav-top .dark span").innerHTML = "Tünd rejim";
    } else {
      body.classList.add("dark");
      localStorage.setItem("dark", true);
      document.querySelector(".nav-top .dark span").innerHTML = "Açıq rejim";
    }
  });
});
