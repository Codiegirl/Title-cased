function titleCase(str){
    var words = str.toLowerCase().split(" ");
    for (var i=0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase + words[i].slice(1);
    }
    return words.join(" ");
}
titleCase("I'm a little tea pot");