<template>
  <div class="BScrollwrap">
    <div class="bscrollChild">
      <div class="categoryDetail">
        <div>{{msgName.name}}</div>
        <div>{{msgName.frontName}}</div>
      </div>

      <slot :data="list.value"></slot>

      <p class="bsUp">{{msgUp}}</p>
      <p class="bsDown">{{msgDown}}</p>
    </div>
  </div>
</template>


<script>
/**
 * @props {
 *   list: {
 *     query?: {[key:string]:any}, 查询条件
 *     limit?: number, 每次查询的数量 默认10
 *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
 *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
 *     loadMoreDispatch?: string loadMore 查询的store dispacthName
 *     value: Array<{[key:string]:any}> 查询结果
 *   }
 * }
 */
import BScroll from "better-scroll";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    msgName: {
      default: ()=>{return {}}
    },
    list: {
      type: Object,
      default: ()=>{
        return {
          query: {},
          limit: 10,
          count: 1000,
          refreshDispatch: 'category/pullRefresh',
          loadMoreDispatch: 'category/loadMore',
          value: [1,2,3,4,5,6,7,8,9,10]
        }
      }
    }
  },
  data() {
    return {
      BsDate: {
        up: "释放刷新...",
        upend: "刷新中...",
        down: "释放加载...",
        downEnd: "上拉加载..."
      },
      msgDown: '',
      msgUp: ''
    };
  },
  methods: {
    // ...mapActions.call({
    //   pullRefresh:  this.list.refreshDispatch,
    //   loadMore: this.list.loadMoreDispatch
    // }),
    async pullRefresh(payload){
      await this.$store.dispatch(this.list.refreshDispatch, payload);
    },
    async loadMore(payload){
      await this.$store.dispatch(this.list.loadMoreDispatch, payload);
    },
    scrollUp(e) {
      let maxH = Math.abs(this.Bs.maxScrollY),
        h = Math.abs(e.y);
      // console.log(maxH,'最大高度',h,'当前高度')
      if (h > maxH + 100) {
        this.isFlag = true;
        this.msgDown = this.BsDate.down;
      } else {
        this.isFlag = false;
        this.msgDown = this.BsDate.downEnd;
      }
      if (e.y > 70) {
        this.msgUp = this.BsDate.up;
      } else {
        this.msgUp = this.BsDate.upend;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.Bs) {
        this.Bs = new BScroll(".BScrollwrap", {
          scrollY: true,
          click: true,
          probeType: 3,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          pullDownRefresh: {
            threshold: 70,
            stop: 45,
          },
          pullUpLoad: {
            threshold: -45
          }
        });
        this.Bs.on("scroll", this.scrollUp);
        this.Bs.on("scrollEnd", this.scrollEnd);
        // 监听下拉刷新事件
        this.Bs.on("pullingDown", async ()=>{
          await this.pullRefresh();
          console.log('网络请求结束')
          this.Bs.finishPullDown()
        })

        // 监听上拉刷新事件
        this.Bs.on("pullingUp", async ()=>{
          await this.loadMore({page: list.page+1});
          this.Bs.finishPullUp()
        })
      } else {
        this.Bs.refresh();
      }
    });
  }
};
</script>
<style scoped lang="scss">
.BScrollwrap {
  flex: 1;
  height: 100%;
  margin-top: 0.45rem;
  overflow: hidden;
  .bscrollChild {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    .categoryDetail {
      padding: 0.1rem 0;
      div:nth-of-type(1) {
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
      }
      div:nth-of-type(2) {
        color: #666;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.14rem;
        text-align: center;
      }
    }
    .asd {
      width: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: center;
    }
    .bsUp {
      position: absolute;
      top: -0.45rem;
      left: 0;
      width: 100%;
      height: 0.45rem;
      color: red;
      text-align: center;
      line-height: 0.45rem;
      background: #ccc;
      color: #333;
    }
    .bsDown {
      position: absolute;
      bottom: -0.45rem;
      left: 0;
      height: 0.45rem;
      width: 100%;
      color: red;
      text-align: center;
      line-height: 0.45rem;
      background: #ccc;
      color: #333;
    }
    .cateWrap {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    .catebox {
      display: flex;
      flex-wrap: wrap;
      .cateGoryItem {
        width: 50%;
        text-align: center;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        background: white;
        img {
          width: 100%;
          height: auto;
        }
        p {
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.12rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        overflow: hidden;
      }
    }

    .cateGoryItemss {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      p {
        font-size: 0.14rem;
        height: 0.3rem;
        line-height: 0.3rem;
      }
    }
    .clerbootom {
      border-bottom: 0;
    }
    .cateGoryItemss {
      border-bottom: 0;
    }
  }
  .item{
    height: 1rem;
  }
}
</style>
