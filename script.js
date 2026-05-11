$(document).ready(function () {

  $(".formation-btn").click(function () {

    $(this).next(".formation-panel").slideToggle();

  });

  $(".progress").each(function () {

    $(this).animate({

      width: $(this).attr("data-width")

    }, 1500);

  });

  $("#contact-form").submit(function (e) {

    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {

      $("#result").css("color", "red");
      $("#result").text("Veuillez remplir tous les champs.");

    } else {

      $("#result").css("color", "green");
      $("#result").text("Message envoyé avec succès !");
    }

  });

});