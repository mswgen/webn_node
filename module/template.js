module.exports = {
    html: function (title, list, body, control) {
        return `
        <!doctype html>
        <html>
        <head>
        <link href="style.css" rel="stylesheet">
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${control}
            ${body}
        </body>
        </html>
        `;
    },
    list: function (filelist) {
        var list = '<ol>';
        var i = 0;
        while (i < filelist.length) {
            if (!filelist[i].startsWith('.') && filelist[i] != 'Welcome') {
                list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            }
            i = i + 1;
        }
        list = list + '</ol>';
        return list;
    }
};