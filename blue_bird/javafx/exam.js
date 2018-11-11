function examFun() {
    let examList = $("div.sec.post");
    if (examList.length < 1) return;
    if (location.href.indexOf('tiku.kgc.cn/testing/paper/solutions/') != -1) return;
    createLoading();
    $('body').append(`
        <div style="cursor: pointer; position: fixed;top: 140px;text-align: center;z-index: 888888888;width: 100%;" onclick="$(this).remove()">
            <h1 style="font-size: 30px;color: red;">红框内为答案，需手动选择！</h1>
        </div>`);
    examList.each(function (i, dom) {
        let src = $(dom).find('div.sec2.grays img').attr("src");
        let topicId = src.substr(src.lastIndexOf("/") + 1, src.lastIndexOf("_") - src.lastIndexOf("/") - 1);
        let data = app.getAnswerById(+topicId);
        data = JSON.parse(data);
        if (data && data.answers) {
            let li = `<li data="1" class="" style="border:1px red solid">`;
            for (let j = 0; j < data.answers.length; j++) {
                let item = data.answers[j];
                li += `
                <pre>
                    <img style="vertical-align:middle" src="http://tiku.kgc.cn:80/testing/cdn/getImage?relativePath=${item.answer}"/>
                </pre>
                `;
                if (j !== data.answers.length - 1) {
                    li += `<hr/>`;
                }
            }
            li += `</li>`;
            $(dom).find('ul.sec2.grays').append(li);
        }
    });
    removeLoading();
}

examFun();
