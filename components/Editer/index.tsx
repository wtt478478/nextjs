import { Editor } from '@tinymce/tinymce-react';

import { useRef } from 'react';

export default function Editer() {
  const editorRef:any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current?.getContent());
    }
  };
  const html =`<div class="content">
            <p style="text-indent:2em;">
	2022年7月31日国家统计局服务业调查中心和中国物流与采购联合会发布了中国采购经理指数。对此，国家统计局服务业调查中心高级统计师赵庆河进行了解读。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	7月份，制造业采购经理指数为49.0%，比上月下降1.2个百分点，位于临界点以下；非制造业商务活动指数和综合PMI产出指数分别为53.8%和52.5%，比上月下降0.9和1.6个百分点，连续两个月位于扩张区间。总体上看，我国经济景气水平有所回落，恢复基础尚需稳固。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<strong>一、制造业采购经理指数降至收缩区间</strong>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	7月份，受传统生产淡季、市场需求释放不足、高耗能行业景气度走低等因素影响，制造业PMI降至49.0%。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;" align="center">
	<img src="https://fenweiweb.blob.core.chinacloudapi.cn/web/20220801/20220801092747_40896.png" alt="煤炭,煤炭价格,焦煤,焦炭,动力煤,焦炭价格,无烟煤,焦煤价格" title="" width="550" height="370" align="">
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	（一）部分行业保持恢复态势。调查的21个行业中，有10个行业PMI位于扩张区间，其中农副食品加工、食品及酒饮料精制茶、专用设备、汽车、铁路船舶航空航天设备等行业PMI高于52.0%，连续两个月保持扩张，产需持续恢复。纺织、石油煤炭及其他燃料加工、黑色金属冶炼及压延加工等高耗能行业PMI继续位于收缩区间，明显低于制造业总体水平，是本月PMI回落的主要因素之一。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	（二）价格指数明显回落。受石油、煤炭、铁矿石等国际大宗商品价格波动等因素影响，主要原材料购进价格指数和出厂价格指数分别为40.4%和40.1%，比上月下降11.6和6.2个百分点。其中，黑色金属冶炼及压延加工业两个价格指数在调查行业中最低，原材料采购价格和产品出厂价格显著回落。由于价格水平大幅波动，部分企业观望情绪加重，采购意愿减弱，本月采购量指数为48.9%，比上月下降2.2个百分点。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	（三）生产经营活动预期指数位于扩张区间。近期我国经济发展的内外部环境更趋复杂严峻，企业生产经营持续承压，市场预期受到一定影响，生产经营活动预期指数为52.0%，比上月下降3.2个百分点，继续位于扩张区间。从行业情况看，农副食品加工、专用设备、汽车、铁路船舶航空航天设备等行业生产经营活动预期指数位于59.0%以上较高景气区间，行业市场预期总体稳定；而纺织业、石油煤炭及其他燃料加工业和黑色金属冶炼及压延加工业均连续4个月位于收缩区间，相关企业对行业发展前景信心不足。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	本月制造业供需在6月份快速释放后有所回落，生产指数和新订单指数分别为49.8%和48.5%，比上月下降3.0和1.9个百分点，均位于收缩区间。调查结果显示，反映市场需求不足的企业占比连续4个月上升，本月超过五成，市场需求不足是当前制造业企业面临的主要困难，制造业发展恢复基础尚需稳固。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<strong>二、非制造业商务活动指数继续扩张</strong>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	7月份，非制造业商务活动指数为53.8%，低于上月0.9个百分点，非制造业连续两个月恢复性增长。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;" align="center">
	<img src="https://fenweiweb.blob.core.chinacloudapi.cn/web/20220801/20220801092807_23368.png" alt="煤炭,煤炭价格,焦煤,焦炭,动力煤,焦炭价格,无烟煤,焦煤价格" title="" width="550" height="284" align="">
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	（一）服务业延续恢复态势。7月份，服务业商务活动指数为52.8%，比上月回落1.5个百分点，继续保持在扩张区间，表明在一系列稳增长促消费政策措施带动下，服务业持续恢复。调查的21个行业中，有16个行业商务活动指数位于扩张区间，其中航空运输、住宿、餐饮、生态保护及公共设施管理等行业高于60.0%，前期受抑制的消费需求持续释放，相关行业业务量继续较快恢复。同时，保险、租赁及商务服务、居民服务等行业商务活动指数均有所回落，且位于收缩区间，行业市场活跃度偏弱。从市场预期看，业务活动预期指数为58.8%，继续位于较高景气区间，调查的全部行业业务活动预期指数均连续两个月位于临界点以上，服务业企业信心普遍回升。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	（二）建筑业扩张加快。建筑业商务活动指数为59.2%，高于上月2.6个百分点，建筑业生产活动有所加快。从行业情况看，土木工程建筑业商务活动指数、新订单指数和从业人员指数分别为58.1%、51.8%和51.9%，比上月上升0.2、1.6和1.0个百分点，表明基础设施项目建设加快推进，市场需求有所回升，企业用工继续增加，行业有望保持平稳增长。
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	<strong>三、综合PMI产出指数扩张有所放缓</strong>
</p>
<p style="text-indent:2em;">
	<br>
</p>
<p style="text-indent:2em;">
	7月份，综合PMI产出指数为52.5%，低于上月1.6个百分点，表明我国企业生产经营活动总体继续扩张，但步伐有所放缓。构成综合PMI产出指数的制造业生产指数和非制造业商务活动指数分别为49.8%和53.8%。
</p>
<p style="text-indent:2em;">
	<br>
</p>
                        <p style=" line-height: 50px;">
                <img style="width:42%;float:right;" src="/home/images/newimgs/erweima.png" alt="煤炭,煤炭价格,焦煤,焦炭,动力煤,焦炭价格,无烟煤,焦煤价格">
                                <span>
                    （编辑：武文馨&nbsp;&nbsp;审校：张艳）                </span><br>
                <span style=" padding-top: 11px;">
                                            <i> 如有任何疑问，请联系我们<a href="mailto:news@fwenergy.com">news@fwenergy.com</a>或致电0351-4728541。</i>
                                        </span>
                <!-- JiaThis Button BEGIN -->
                
                    <script type="text/javascript">
            window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
        </script>
    <!-- JiaThis Button END -->
        </p>
</div>`
  return (
    <>
      <Editor
        apiKey='q12lf1144npha0kl9tomffinjexvefo53mmkxg66g5w90why'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={html}
        init={{
          language: 'zh_CN',
          plugins: ' preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap  pagebreak nonbreaking anchor insertdatetime advlist lists wordcount  help emoticons autosave   autoresize formatpainter ',
          toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
    styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
    table image media charmap emoticons  pagebreak insertdatetime  preview | fullscreen |  lineheight formatpainter',
          height: 650, //编辑器高度
          min_height: 400,
          fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
          font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
          link_list: [
            { title: '预置链接1', value: 'http://www.tinymce.com' },
            { title: '预置链接2', value: 'http://tinymce.ax-z.cn' }
          ],
          image_list: [
            { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
            { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
          ],
          image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' }
          ],
          importcss_append: true,
          toolbar_sticky: true,
          autosave_ask_before_unload: false,
          file_picker_callback: function (callback, value, meta) {
            if (meta.filetype === 'file') {
              callback('https://www.baidu.com/img/bd_logo1.png', { text: 'My text' });
            }
            if (meta.filetype === 'image') {
              callback('https://www.baidu.com/img/bd_logo1.png', { alt: 'My alt text' });
            }
            if (meta.filetype === 'media') {
              callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.baidu.com/img/bd_logo1.png' });
            }
          },
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  )
}