$(function(){
    $('#btn').on('click', function () {
        var fangshi = $('#fangshi').val();
        var xiaoqu = $('#xiaoqu').val();
        var loudong = $('#loudong').val();
        var name = $('#name').val();
        var tph = $('#tph').val();
        var fanghao = $('#fanghao').val();
        var danyuan = $('#danyuan').val();
        var louceng = $('#louceng').val();
        var mianji = $('#mianji').val();
        var tingshi = $('#tingshi').val();
        var chaoxiang = $('#chaoxiang').val();
        var zujin = $('#zujin').val();
        var time = $('#time').val();
        var miaoshu = $('#miaoshu').val();
        var tingshi = $('#tingshi').val();
        var weituofang = $('#weituofang').val();
        var chuzu = $('#chuzu').val();

        $.post(
            "http://ej.1peng.com.cn/index.php/admin/house/addHouse",
            { lease_type=fangshi,
            community_code=xiaoqu,
            building_code=loudong,
            owner_name=name,
            owner_tel=tph,
            rooms=fanghao,
            unit=danyuan,
            floor=louceng,
            area=mianji,
            living=tingshi,
            orientation=chaoxiang,
            rent=zujin,
            enter_time=time,
            desc=miaoshu,
            living=tingshi,
            entrust=weituofang
             },
            function (data) {
                var data1 = JSON.parse(data)
                  $('#fangsi').html(data1.result.community_code)
                  $('#xiaoqu').html(data1.result.lease_type)
                  $('#loudong').html(data1.result.building_code)
                  $('#name').html(data1.result.owner_name)
           
            }
        );
    })
})