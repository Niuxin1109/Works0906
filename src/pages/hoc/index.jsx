import React from 'react'
import Masonry from 'masonry-layout' // 瀑布流
import imagesLoaded from 'imagesloaded' // 监听图片加载
import InfiniteScroll from 'react-infinite-scroller'
import axios from 'axios'
import './styles.less'

const images = [
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2458227883,4095122505&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1761250919,1896060533&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852083094,372235004&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2944705163,3932100810&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3104686528,572431609&fm=26&gp=0.jpg',
]

// columnWidth: 200,
// itemSelector: '.grid-item' // 要布局的网格元素
// gutter: 10 // 网格间水平方向边距，垂直方向边距使用css的margin-bottom设置
// percentPosition: true // 使用columnWidth对应元素的百分比尺寸
// stamp:'.grid-stamp' // 网格中的固定元素，不会因重新布局改变位置，移动元素填充到固定元素下方
// fitWidth: true // 设置网格容器宽度等于网格宽度，这样配合css的auto margin实现居中显示
// originLeft: true // 默认true网格左对齐，设为false变为右对齐
// originTop: true // 默认true网格对齐顶部，设为false对齐底部
// containerStyle: { position: 'relative' } // 设置容器样式
// transitionDuration: '0.8s' // 改变位置或变为显示后，重布局变换的持续时间，时间格式为css的时间格式
// stagger: '0.03s' // 重布局时网格并不是一起变换的，排在后面的网格比前一个延迟开始，该项设置延迟时间  
// resize:  false // 改变窗口大小将不会影响布局
// initLayout: true // 初始化布局，设未true可手动初试化布局

export default class Hoc extends React.Component {
  state = {
    data: images,
    hasMore: true,
  }

  // 节点加载完成
  componentDidMount () {
    this.waterfallFlow()
  }

  waterfallFlow = () => {
    const elLoad = imagesLoaded('.pages-hoc')
    elLoad.on('always', () => {
      const el = document.querySelector('.pages-hoc')
      new Masonry(el, {
        itemSelector: '.img',
        columnWidth: '.img',  // 自适应
        fitWidth: true, // 设置网格容器宽度等于网格宽度
        gutter: 20, // 每一列宽度
      })
    })
  }

  loadMoreData = () => {
    const { data } = this.state
    axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage')
      .then(() => {
        this.setState({
          data: [...data, ...images],
        }, () => {
          this.waterfallFlow()
        })
      })
  }

  render () {
    const { data, hasMore } = this.state

    return (
      <div className="box">
        <InfiniteScroll
          initialLoad={false} // 不让它进入直接加载
          loadMore={this.loadMoreData}  // 监听的ajax请求
          hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow={false}
        >
          <div className="pages-hoc">
            {
              data.map((img, key) => {
                return (
                  <div className="img" key={key}>
                    <img src={img} />
                  </div>
                )
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

