function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = false;

    //отрисовка доски
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            block = document.createElement('div');
            if (flag) 
                block.className = 'black block';
            else
                block.className = 'white block';

            mainBlock.appendChild(block);
            flag = !flag;
        }
        flag = !flag;
    }

    let blocksDiv = document.querySelector('div.main-block');
    let blocks = blocksDiv.childNodes;
    console.dir(blocks);        

    for (let i = 1; i < blocks.length; i++) {
        let block = blocks[i];
        block.onclick = function(){
            block.className = block.className.replace(/blue /, '');
            clearColor();
            block.className = `blue ${block.className}`;
            toGreen();


            function toGreen(){
                let clickIn = document.getElementsByClassName('blue');
                let green = /green /;
                if (clickIn[0] !== undefined) {
                    if (i > 17 && (i-1) % 8 > 0) {
                        blocks[i-17].className = `green ${blocks[i-17].className}`;
                    };
                    if (i > 16 && (i-1) % 8 < 7) {
                        blocks[i-15].className = `green ${blocks[i-15].className}`;
                    };
                    if (i > 10 && (i-1) % 8 > 1) {
                        blocks[i-10].className = `green ${blocks[i-10].className}`;
                    };
                    if (i > 7 && (i-1) % 8 < 6) {
                        blocks[i-6].className = `green ${blocks[i-6].className}`;
                    };
                    if (i < 59 && (i-1) % 8 > 1) {
                        blocks[i+6].className = `green ${blocks[i+6].className}`;
                    };
                    if (i < 55 && (i-1) % 8 < 6) {
                        blocks[i+10].className = `green ${blocks[i+10].className}`;
                    };
                    if (i < 49 && (i-1) % 8 > 0) {
                        blocks[i+15].className = `green ${blocks[i+15].className}`;
                    };
                    if (i < 49 && (i-1) % 8 < 7) {
                        blocks[i+17].className = `green ${blocks[i+17].className}`;
                    };
                };                    
                console.log(clickIn[0]);
            }

            //сброс цвета
            function clearColor() {
            for (let j = 1; j < blocks.length; j++) {
                    blocks[j].className = blocks[j].className.replace(/green /, '');
                    blocks[j].className = blocks[j].className.replace(/blue /, '');
                }
            }


        };
    }
}

drawChess();
