window.onload = function () {
    canvas = document.getElementById("canvas");
    const fruits = document.getElementById("fruits")
    ctx = canvas.getContext('2d');
    document.addEventListener("keydown", function (e) {
        switch (e.key) {
            case "ArrowRight":
                velX = 1;
                velY = 0;
                break;
            case "ArrowLeft":
                velX = -1;
                velY = 0;
                break;
            case "ArrowDown":
                velX = 0;
                velY = 1;
                break;
            case "ArrowUp":
                velX = 0;
                velY = -1;
                break;

        }

    })

    function intervalo(interval) { setInterval(jogo, interval) };
    intervalo(100);
}

snake = [];
positionX = 10;
positionY = 10;
velX = 0;
velY = 0;
grid = 20;
tam = 0;
pxX = Math.random().toFixed(1) * grid;
pxY = Math.random().toFixed(1) * grid;
if (pxX == 20) {
    pxX = 19;
}
if (pxY == 20) {
    pxY = 19;
}


function jogo() {
    positionX += velX;
    positionY += velY;
    if (positionX < 0) {
        positionX = grid;
    }
    if (positionX > grid) {
        positionX = 0;
    }
    if (positionY < 0) {
        positionY = grid;
    }
    if (positionY > grid) {
        positionY = 0;
    }
    fruits.innerHTML = tam;

    ctx.fillStyle = "#6B2D96";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snake.push({ x: positionX, y: positionY })
    ctx.fillStyle = "#66E39B"
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * grid - 20, snake[i].y * grid - 20, grid - 1, grid - 1);
    }

    while (snake.length > tam) {
        snake.shift()
    }
    //console.log("X's:" + pxX + " " + positionX)
    //console.log("Y's:" + pxY + " " + positionY)
    if (positionX - 1 == pxX && positionY - 1 == pxY) {
        tam += 1;
        pxX = Math.random().toFixed(1) * grid;
        pxY = Math.random().toFixed(1) * grid;
        if (pxX == 20) {
            pxX = 19;
        }
        if (pxY == 20) {
            pxY = 19;
        }
    }


    function hasDuplicate(array) {
        var valueArr = array.map(function (item) { return (item.x + "|" + item.y) });
        let isDuplicate = arr => arr.some((item, index) => arr.indexOf(item) !== index);
        return isDuplicate(valueArr);
    }
    let gameOver = hasDuplicate(snake)
    if (gameOver == true) {
        document.getElementById('gameover').style.display = 'flex';
        function parada() { velX = 0; velY = 0; }
        setInterval(parada, 0)
    }
    //console.log(snake[0].y, snake[1].y);

    ctx.fillStyle = "#E3AE4F"
    ctx.fillRect(pxX * grid, pxY * grid, grid - 1, grid - 1)
}




