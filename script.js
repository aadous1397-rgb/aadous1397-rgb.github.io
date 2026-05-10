$(document).ready(function () {

  let skillsDone = false;

  function revealSections() {
    $(".reveal").each(function () {
      let sectionTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > sectionTop + 80) {
        $(this).addClass("active");
      }
    });
  }

  function animateSkills() {
    let skillsTop = $(".skills-section").offset().top;
    let windowBottom = $(window).scrollTop() + $(window).height();

    if (!skillsDone && windowBottom > skillsTop + 80) {
      $(".progress").each(function () {
        let w = $(this).data("width");
        $(this).animate({ width: w }, 1600);
      });

      skillsDone = true;
    }
  }

  $(".formation-btn").click(function () {
    $(this).next(".formation-panel").slideToggle();
  });

  revealSections();
  animateSkills();

  $(window).scroll(function () {
    revealSections();
    animateSkills();
  });

  $("#form").submit(function (e) {
    e.preventDefault();

    let nom = $("#nom").val().trim();
    let email = $("#email").val().trim();
    let msg = $("#msg").val().trim();

    if (nom === "" || email === "" || msg === "") {
      $("#result").text("❌ Veuillez remplir tous les champs").css("color", "red");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      $("#result").text("❌ Email invalide").css("color", "red");
      return;
    }

    $("#result")
      .text("✔ Message envoyé avec succès")
      .css("color", "green")
      .hide()
      .fadeIn(600);

    $("#form")[0].reset();
  });

});