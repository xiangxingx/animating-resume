function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css) // 引入prism
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      console.log(fn)
      fn && fn.call()
    }
  }, 10);
}


var result = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size:16px;
}
#code{
  border: 1px solid black;
  padding: 16px;
}

/* 代码高亮 */
.token.property{
  color: #905;
}
.token.selector{
  color: #690;
}
.token.punctuation{
  color: #999;
}
.token.function{
  color: #DD4A68;
}

/* 3D效果 */
#code{
  transform: rotate(360deg);
}

/* 需要一张白纸,介绍一下自己 */
#code{
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%
}
#paper{
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;
  background:#ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
#paper > .content{
background: white;
height: 100%;
width: 100%;
}
`

var result2 = ''

var md = `# 标题一
# 标题一
# 标题一
# 标题一
`

writeCode('', result, () => {
  createPaper(() => {
    console.log('paper准备好了')
    writeCode(result, result2, () => {
      writeMarkdown(md,()=>{})
    })
  })
})

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 10);
}