// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  // reference
//   !!!! https://electronjs.org/apps/playback
// https://www.npmjs.com/package/electron-stream
// https://www.youtube.com/watch?v=gcCqfIPriqY
// https://vimeo.com/147357638
// https://github.com/mafintosh/playback
// !!!!!!!!
// https://pusher.com/tutorials/video-call-electron-part-1
// !!!!https://ithelp.ithome.com.tw/articles/10210809
// https://medium.com/@kf99916/html5-%E7%A5%9E%E5%A5%87%E7%9A%84-object-url-%E4%B8%8D%E7%94%A8%E5%BE%8C%E7%AB%AF-%E5%89%8D%E7%AB%AF%E4%BE%BF%E8%83%BD%E7%94%A2%E7%94%9F%E7%8D%B2%E5%8F%96%E6%8C%87%E5%AE%9A%E7%89%A9%E4%BB%B6%E7%9A%84%E7%B6%B2%E5%9D%80-6df283d58505

  // navigator.getUserMedia({video: true, audio: true },
  //   (stream) => {
  //       console.log(stream)
  //   },
  //   (err) => {
  //       console.log(err)
  //   }
  // )

  console.log(process)
  // replaceText('log', Object.keys(process) + '\r\n');
  replaceText('log', process.arch + '\r\n');
  // console.log(`construction:  ${process.arch}`);
})
