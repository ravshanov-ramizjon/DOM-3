const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.onmouseenter = () => {
        box.classList.add('active');
    };

    box.onclick = () => {
        if (box.classList.contains('item')) {
            box.classList.remove('item');
        } else {
            box.classList.add('item');
        }
    };
});
