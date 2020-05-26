let files = []; 

function importAll(r) {
    r.keys().forEach((s, i) => {
        files[i] = r(s);
    });
}

importAll(require.context('../assets/', true, /\.css|\.js|\.less|\.ts$/));
importAll(require.context('../blocks/', true, /(\.less|\.js|\.ts)$/));