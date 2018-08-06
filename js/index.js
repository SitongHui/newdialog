class Dialog {
    constructor(id, options){
        this.locationEle = document.getElementById(id);
        this.options = options;

        this.renderHtml();
        this.bindEvent();
    }

    renderHtml(){
        this.dialogEle = document.createElement('div');
        this.dialogEle.innerHTML =
            `          <div class="dialog">
                <div class="title">
                    <span>${this.options.title || 'title'}</span>
                    <i class="closeBtn">×</i>
                </div>
                <div class="content">
                    <span>${this.options.content || 'content'}</span>
                </div>
           </div> `
    }

    bindEvent(){
        var closeBtnEle = this.dialogEle.querySelector('.closeBtn');
        closeBtnEle.addEventListener('click', () => {
            this.close();
        }, false);
    }

    show() {
        this.options.beforeOpen && this.options.beforeOpen();

        if(this.locationEle.innerHTML){
            this.dialogEle.style.display = 'block';
        }else{
            this.locationEle.appendChild(this.dialogEle);
        }
    }
    close(){
        this.dialogEle.style.display = 'none';
    }
    destroy(){
        this.locationEle.removeChild(this.dialogEle);
    }
}

window.onload = function () {
        var dialog1 = new Dialog('dialog1', {title: 'This is a title', content: 'This is a content',
            beforeOpen: () => {alert('beforeOpen')}
        });
        var openBtnEle = document.querySelector('.openBtn');
        openBtnEle.addEventListener('click', () => {
            dialog1.show();
        }, false);

        var dialog2 = new Dialog('dialog2', {title: 'This is second title', content: 'This is second content'});
        dialog2.show();
        setTimeout(() => {
            dialog2.destroy();
        },2000);
    }