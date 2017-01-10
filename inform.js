var Inform = function () {
};
var p = Inform.prototype;

p.show = function (msg, type) {
    var that = this;
    $('.inform').remove();
    if (typeof type == 'undefined') {
        type = 'info';
    }
    var id = 'inform_' + Math.random().toString(36).substring(2);
    var $tpl = '<div class="inform inform-' + type + '" id="' + id + '">' + msg + '</div>';
    $('body').append($tpl);
    this.delayOpen("#" + id);
    this.delayHide("#" + id);
    $(document).on("click", "#" + id, function () {
        that.hide("#" + id);
    });
};

p.hide = function (id) {
    $(id).removeClass('open');
    setTimeout(function () {
        $(id).remove()
    }, 500);
};

p.delayOpen = function (id) {
    setTimeout(function () {
        $(id).addClass('open');
    }, 100);
};

p.delayHide = function (id) {
    var that = this;
    setTimeout(function () {
        that.hide(id);
    }, 7000);
};

inform = new Inform();
