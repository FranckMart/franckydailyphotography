$largeur_fenetre = $(window).width();
$hauteur_fenetre = $(window).height();



$("#content_header").hover(function () {
    // $(".logo").toggle();
    $(".logo").css("text-align", "right")
    $(".logo").css("padding", "10%")
    $(".content_nav").toggle()


})

if (($largeur_fenetre <= 480) || ($largeur_fenetre >= 768 && $largeur_fenetre <= 1024)) {
    $("#logo_text").click(function () {

                if ($(this).is(':checked')) {

                    if ($largeur_fenetre <= 480) {
                        $("#content_header").css("z-index", "10")
                        $("#content_header").css("clip-path", "circle(90% at 100 0%)")
                        $("#content_header").css("background-color", "rgb(230, 139, 21)")
                        $("#content_header").css("width", "42%")
                        $("#content_header").css("height", "160px")
                        $("#content_header").css("transition", "all 600ms ease-in")
                        $(".logo").css("text-align", "center")
                        $(".logo").css("padding", "0")
                        $(".content_nav").toggle()

                    }

                    if ($largeur_fenetre >= 768 && $largeur_fenetre <= 1024) {

                        $("#content_header").css("z-index", "10")
                        $("#content_header").css("clip-path", "circle(90% at 100 0%)")
                        $("#content_header").css("background-color", "rgb(230, 139, 21)")
                        $("#content_header").css("width", "33%")
                        $("#content_header").css("height", "257px")
                        $("#content_header").css("transition", "all 600ms ease-in")
                        $(".logo").css("text-align", "right")
                        $(".logo").css("right", "30%")
                        $(".logo").css("top", "5%")
                        $(".content_nav").toggle()


                    }

                    $(window).on("orientationchange", function (event) {


                        if (event.orientation == 'landscape') {
                            if ($largeur_fenetre >= 768 && $largeur_fenetre <= 1024) {
                                $("#content_header").css("z-index", "10")
                                $("#content_header").css("clip-path", "circle(90% at 100 0%)")
                                $("#content_header").css("background-color", "rgb(230, 139, 21)")
                                $("#content_header").css("width", "22%")
                                $("#content_header").css("height", "230px")
                                $("#content_header").css("transition", "all 600ms ease-in")
                                $(".logo").css("text-align", "right")
                                $(".logo").css("right", "30%")
                                $(".logo").css("top", "5%")
                                $(".content_nav").toggle()
                            }
                        }

                    })

                } else {
                    if ($largeur_fenetre <= 480) {
                        $("#content_header").css("z-index", "10")
                        $("#content_header").css("clip-path", "circle(100% at 100 0%)")
                        $("#content_header").css("background-color", "#e72727")
                        $("#content_header").css("width", "26%")
                        $("#content_header").css("height", "95px")
                        $("#content_header").css("transition", "all 600ms ease-in")
                        $(".logo").css("text-align", "center")
                        $(".logo").css("padding", "0")
                        $(".content_nav").css("display", "none")

                    }
                    $(window).on("orientationchange", function (event) {


                                if (event.orientation == 'landscape') {
                                    if ($largeur_fenetre >= 768 && $largeur_fenetre <= 1024) {
                                        $("#content_header").css("z-index", "10")
                                        $("#content_header").css("clip-path", "circle(90% at 100 0%)")
                                        $("#content_header").css("background-color", "rgb(230, 139, 21)")
                                        $("#content_header").css("width", "10%")
                                        $("#content_header").css("height", "90px")
                                        $("#content_header").css("transition", "all 600ms ease-in")
                                        $(".logo").css("text-align", "right")
                                        $(".logo").css("right", "30%")
                                        $(".logo").css("top", "5%")
                                        $(".content_nav").toggle()
                                    }
                                }
                            })
                            $("#content_header").css("z-index", "10")
                            $("#content_header").css("clip-path", "circle(90% at 100 0%)")
                            $("#content_header").css("background-color", "#e72727")
                            $("#content_header").css("width", "10%")
                            $("#content_header").css("height", "75px")
                            $("#content_header").css("transition", "all 600ms ease-in")
                            $(".logo").css("text-align", "right")
                            $(".logo").css("right", "30%")
                            $(".logo").css("top", "5%")
                            $(".content_nav").css("display", "none")
                        }
                    })
                }
                    