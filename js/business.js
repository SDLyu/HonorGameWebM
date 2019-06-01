var isNormal = true;
var isLeft = true;
var type = ['normal', 'large', 'small'];

_('left').addEventListener('click', () => {
    if (isNormal) {
        isLeft = true;
        StatusChange('left', 1);
        $('.leftInsideImg').show();
        $('.contentR').css('display', 'none');
        StatusChange('right', 2);
        $('.contentL .tablinks').css('pointer-events', 'visible');
    } else {
        if (!isLeft) {
            StatusChange('left', 0);
            $('.rightInsideImg').css('display', 'none');
            $('#security').css('display', 'none');
            $('#API').css('display', 'none');
            $('#allS').css('display', 'none');
            $('#fast').css('display', 'none');
            $('#mail').css('display', 'none');
            $('.tab a').removeClass('active');
            StatusChange('right', 0);
            $('.contentL').css('display', 'block');
            $('.contentR .tablinks').css('pointer-events', 'none');
        }
    }
});

_('right').addEventListener('click', () => {
    if (isNormal) {
        isLeft = false;
        StatusChange('right', 1);
        $('.rightInsideImg').show();
        StatusChange('left', 2);
        $('.contentL').css('display', 'none');
        $('.contentR .tablinks').css('pointer-events', 'visible');
    } else {
        if (isLeft) {
            StatusChange('left', 0);
            $('.leftInsideImg').css('display', 'none');
            $('.contentR').css('display', 'block');
            $('#all').css('display', 'none');
            $('#HTML').css('display', 'none');
            $('#fire').css('display', 'none');
            $('#cheat').css('display', 'none');
            $('#beauty').css('display', 'none');
            $('#coperate').css('background-image', '');
            $('.tab a').removeClass('active');
            $('.contentL .tablinks').css('pointer-events', 'none');
            StatusChange('right', 0);
        }
    }
});

function StatusChange(selector, index) {
    for (var i = 0; i < type.length; i++) {
        if (i == index) {
            _(selector).classList.add(type[i]);
        } else {
            _(selector).classList.remove(type[i]);
        }
        isNormal = index == 0 ? true : false;
    }
}

function _(selector) {
    return document.getElementById(selector);
}
