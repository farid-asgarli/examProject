// feather.replace();
$(document).ready(function () {
  accordionAppend();

  function accordionAppend() {
    var mainParentDiv = $("#parentAccord");
    var departments = ["Hüquq", "Marketinq", "Investisiya"];

    for (var i = 2; i < 13; i++) {
      var parentDiv = $(
        '<div class="accordion-item"><h2 class="accordion-header" id="parentHeading-' +
          i +
          '"><button class="accordion-button collapsed border-0 parentButton"type="button" data-bs-toggle="collapse"data-bs-target="#parentCollapse-' +
          i +
          '" aria-expanded="false"aria-controls="parentCollapse-' +
          i +
          '">Struktur ' +
          i +
          '<div class="badges"><span class="badge  customBadge">2222</span><span class="badge  customBadge">2222</span><span class="badge  customBadge">2222</span><span class="badge  customBadge">2222</span></div></button></h2><div id="parentCollapse-' +
          i +
          '" class="accordion-collapse collapse"aria-labelledby="parentHeading-' +
          i +
          '" data-bs-parent="#parentAccord"><div class="accordion-body"><div class="accordion accordion-flush" id="middleAccord-' +
          i +
          '"></div></div></div></div>'
      );

      mainParentDiv.append(parentDiv);

      var mainMiddlediv = $("#middleAccord-" + i + "");

      for (var j = 0; j < departments.length; j++) {
        var middleDiv = $(
          '<div class="accordion-item"><h2 class="accordion-header" id="middleHeading-' +
            j +
            '"><button class="accordion-button collapsed border-0 middleButton" type="button" data-bs-toggle="collapse" data-bs-target="#middleCollapse-' +
            j +
            '" aria-expanded="false" aria-controls="middleCollapse-' +
            j +
            '">' +
            departments[j] +
            '<div class="badges"><span class="badge customBadge">2222</span><span class="badge customBadge">2222</span></div></button></h2><div id="middleCollapse-' +
            j +
            '" class="accordion-collapse collapse" aria-labelledby="middleHeading-' +
            j +
            '" data-bs-parent="#middleAccord-' +
            i +
            '"><div class="accordion-body"><span class="d-block">-Strateji</span><span class="d-block">-Strateji</span><span class="d-block">-Strateji</span></div></div></div>'
        );

        middleDiv.appendTo(mainMiddlediv);
      }
    }
  }
  $("#currentUser").css({
    left:
      ($(".hierarchyContainer").width() - $("#currentUser").width() - 100) / 2,
  });

  function removeElement(element) {
    $(element).parent().parent().parent().remove();
  }

  function collapseHierarchy(top, left, buttonId) {
    var leftPrimaryDiv = $(
      '<div style="top:' +
        top +
        "px;left:" +
        left +
        'px" class="hierarchyProfile"><div class="profContainer"><div class="profImage"><a href="javascript:;"  id="' +
        buttonId +
        '" ><img class="avatarImg" src="img/avatar.jpg" alt=""></a><span class="statusNumber">3A</span></div><div class="profTitle"><h3>Toghrul Rajab</h3><p>toghrulrajab@gmail.com</p><div class="badges"><span class="badge customBadge">2222</span><span class="badge customBadge">2222</span><span class="badge customBadge">2222</span><span class="badge customBadge">2222</span></div></div></div><div class="profInfo d-flex justify-content-center mt-3"><table><tr><th>Struktur</th><th>Vəzifə</th></tr><tr><td>Marketinq</td><td>Direktor</td></tr></table></div><div class="profButtons mt-2"><a href="details.html" class="btn btn-outline-primary"><i class="far fa-eye"></i></i>Bax</a><button  type="button" class="btn btn-outline-primary"><i class="far fa-envelope"></i>Mail At</button></div></div>'
    );
    $(".hierarchyContainer").append(leftPrimaryDiv);
  }

  $("#callPrimary").click(function () {
    $("#currentUser").addClass("dashedLine");

    if (!$("#callSecondaryLeft").length) {
      collapseHierarchy(
        $("#currentUser").height() * 2 - 100,
        200,
        "callSecondaryLeft"
      );
      collapseHierarchy(
        $("#currentUser").height() * 2 - 100,
        $(".hierarchyContainer").width() - $("#currentUser").width() - 300,
        "callSecondaryRight"
      );
    } else {
      removeElement("#callSecondaryLeft");
      removeElement("#callSecondaryRight");
      removeElement("#callOptionalLeft");
      removeElement("#callOptionalRight");

      $("#currentUser").removeClass("dashedLine");
    }
  });

  $(".hierarchyContainer").on("click", "#callSecondaryLeft", function () {
    {
      if (!$("#callOptionalLeft").length) {
        collapseHierarchy(
          $("#currentUser").height() * 3,
          200,
          "callOptionalLeft"
        );
      } else {
        removeElement("#callOptionalLeft");
      }
    }
  });
  $(".hierarchyContainer").on("click", "#callSecondaryRight", function () {
    {
      if (!$("#callOptionalRight").length) {
        collapseHierarchy(
          $("#currentUser").height() * 3,
          $(".hierarchyContainer").width() - $("#currentUser").width() - 290,
          "callOptionalRight"
        );
      } else {
        removeElement("#callOptionalRight");
      }
    }
  });
});
