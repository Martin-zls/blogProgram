/**
 * Created by Win7 on 2016/2/17.
 */
module.exports = function(){

    function Doc(doc){
        var self = this;
        self.doc = doc;
    }

    //格式化文档
    Doc.prototype.out = function(){
        var self = this;

        //格式化文档中的时间
        for(var i= 0,len=self.doc.length;i<len;i++){
            var postdate = new Date(self.doc[i].time);
            var time = {
                date: postdate,
                year: postdate.getFullYear(),
                month: postdate.getFullYear() + "-" + (postdate.getMonth() + 1),
                day: postdate.getFullYear() + "-" + (postdate.getMonth() + 1) + "-" + postdate.getDate(),
                minute: postdate.getFullYear() + "-" + (postdate.getMonth() + 1) + "-" + postdate.getDate() + " " +
                postdate.getHours() + ":" + (postdate.getMinutes() < 10 ? '0' + postdate.getMinutes() : postdate.getMinutes())
            };
            self.doc[i].time = time;
        }

        return self.doc;
    }

    return Doc;
}