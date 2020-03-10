# public-utils
通用工具类

## dependencies:

## Apis：
### 1. toggleMaskHandler
    @params boolean

### 2. wxShare
    @params {
        title='',
        desc='',
        link='',
        imgUrl='',
        hideOptMenu=false,
    }

## Example
import wechatShareApi from '@/utils/wxShareComponent'; 

wechatShareApi.toggleMaskHandler(false)
wechatShareApi.wxShare({
    title: '标题',
    desc: '描述',
    link: 'baidu.com',
    imgUrl:'https://m.ytbxjj.com/spcare-public/static-files/hz/share.png', // 默认这张图，一样的话可以不传
    hideOptMenu: false,
})