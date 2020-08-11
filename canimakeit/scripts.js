$(function () {
    $.getJSON('decisionTree.json', function (data) {
        var i = 0;
        $("#question").text(data.question)
        data.sublevel.forEach(element => {
            $("#decisionTree").append("<h1 id=\"heading" + i + "\" class=\"answer\">" + element.selectionContent + "</h1>")
            i++
        });
        var tempData = data;

        $(".answer").click(function () {
            var currentId = $(this).attr("id").slice(-1);
            tempData = tempData.sublevel[currentId]
            $("#question").text(tempData.question)
            console.log("You answered the question!");
            $(".answer").css("display", "none");

            var i = 0;
            $(".answer").each(function (i) {
                if (tempData != undefined) {
                    if (tempData.recommendedProgrammingLanguage != undefined) {
                        $("#language").text(tempData.recommendedProgrammingLanguage)
                    }
                    else if (tempData.chooseYourLanguage != undefined){
                        $("#question").text("Choose one of these programming languages")
                        $("#language").text(tempData.chooseYourLanguage.join())
                    }
                    else if (tempData.sublevel[i] != undefined) {
                        $(this).text(tempData.sublevel[i].selectionContent)
                        $(this).css("display", "block")
                    }
                }
                i++
            });
        })
    });
});