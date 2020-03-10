import registerWechat from '@/services/wechat';

const w = window;
const d = document;

const toggleMaskHandler = (maskShow=false) => {
  const dbody = d.querySelector('body');
  const mask = d.createElement('div');
  let flag = maskShow;
  mask.addEventListener('touchend', ()=>{ mask.style.display = 'none' })
  let showflag = flag ? 'block' : 'none';
  mask.setAttribute('style', `
                               width: 100vw;
                               height: 100vh;
                               background-color: rgba(0,0,0,0.5);
                               position: absolute;
                               left: 0;
                               top: 0;
                               overflow: hidden;
                               display: ${showflag};
                             `)
  mask.innerHTML = `<div style="
                            width: 100%;
                            height: 180px;
                            padding: 9px 19px 0 0;
                            text-align: right;
                    ">
                      <img src='https://m.ytbxjj.com/spcare-public/static-files/hz/shareTips.png'
                           style="
                             height: 100%;
                           "
                      />
                    </div>`
  dbody.appendChild(mask)
}

const wxShare = ({
  title='',
  desc='',
  link='',
  imgUrl='https://m.ytbxjj.com/spcare-public/static-files/hz/share.png',
  hideOptMenu=false,
}) => {
  registerWechat &&
    registerWechat({
      // 分享参数
      shareOpt: {
        title: title,
        desc: desc,
        link: link, // 分享链接
        imgUrl: imgUrl //ICON_SHARE_WECHAT, // 分享图标
      },
      hideOptMenu: hideOptMenu,
    });
}

const wechatShareApi = {
  wxShare: wxShare,
  toggleMaskHandler: toggleMaskHandler,
};

export default wechatShareApi;
