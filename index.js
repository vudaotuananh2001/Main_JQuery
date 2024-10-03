var personList = [{
    'firtName': "eeeeeee",
    'lastName': 'xxxxxxxx',
    "birtDay": '13/9/2022',
    "email": 'aaa@gmail.com'
},
{
    'firtName': "hahahah",
    'lastName': 'kakakakak',
    "birtDay": '13/9/2027',
    "email": 'zazazaza@gmail.com'
}];
jQuery(document).ready(function () {
    console.log('Load trang thành công');
    let person = {
        'firtName': "eeeeeee",
        'lastName': 'xxxxxxxx',
        "birtDay": '13/9/2022',
        "email": 'aaa@gmail.com'
    };

    // object json
    jQuery('#resultJson').html(
        "firt name  :    " + person.firtName + "   last name : " + person.lastName + "    birt day : " + person.birtDay + "    email :" + person.email
    );

    var list = '';
    $.each($(personList), function (i, item) {
        list += "firt name  :    " + item.firtName + "   last name : " + item.lastName + "    birt day : " + item.birtDay + "    email :" + item.email
    });
    console.log(list);

    // array object json
    jQuery('#resultJsonArr').html(list);
});

jQuery('#bnt2').click(function () {
    const styleBtn = jQuery('#bnt2');
    if (styleBtn.length > 0) {
        console.log("id tồn tại");
    }
    styleBtn.css({
        'background-color': 'black',
        'color': 'white',
        'border': '1px solid red'
    });
});

$('table tr').each(function () {

});

// set - get giá trị thuộc tính Element
// gián giá trị thuộc tính
jQuery('#bnt-span').click(function () {
    jQuery('#text-span').text('Demo set value vào button khi click')
});

jQuery('#bnt-span2').click(function () {
    console.log('Get value :' + jQuery('#text-span').text());
    console.log(jQuery('#div1').html());
});

jQuery('#bnt-span3').click(function () {
    $('#text-span').css({
        'backgroundColor': "rgb(255, 255, 153)",
        'font-weight': 'bold',
        'color': 'red'
    })
});

// type radio

jQuery('#btnSubmit').click(function () {
    var rdoCheck = jQuery('input[type="radio"]:checked');
    if (rdoCheck.length > 0) {
        $('#result').text(rdoCheck.length + "radio selected");
    }
    else {
        $('#result').text("no radio checked");
    }
});

// type checkbox 
jQuery('#btnSubmit2').click(function () {
    var rdoCheck = jQuery('input[type="checkbox"]:checked');
    if (rdoCheck.length > 0) {
        $('#result2').text(rdoCheck.length + "checkbox selected : ");
        rdoCheck.each(function () {
            $('#result2').append($(this).val() + "<br>");
        })
    }
    else {
        $('#result2').text("no radio checked");
    }
});

// selected
jQuery('#btnSubmit3').click(function () {
    var selected = $('#skill option:selected');
    if (selected.length > 0) {
        $('#selected-div').html('Language : ' + selected.val() + '. Name : ' + selected.text());
    }
});

// each
// cách 1
// jQuery('li').each(function () {
//       alert($(this).text());
// });

// cách 2
jQuery('li').each(function (index, element) {
    if ($(this).text() == 'Gia Lai') {
        $(this).css('color', 'red');
    }
});

$('#chuyenDoi').click(function () {
    // chuyển 1 mảng thành 1 chuỗi
    console.log("chuyển đổi JSON sang String");
    console.log(personList);
    $('#div2').html(JSON.stringify(personList));
    // chuyển 1 chuỗi thành 1 mảng object
    console.log("chuyển đổi String sang JSON");
    var content = $('#div2').html();
    var objectJson = JSON.parse(content);
    console.log(objectJson);
});

$('#btnPrepend').click(function () {
    $('section').prepend('<b>Bão Yagi Kỷ Lục </b>');
    $('section').append('<b>Quá kinh khủng </b>');
});

$('#btnPrependTo').click(function () {
    $('<b>Bão Yagi Kỷ Lục </b>').prependTo('section');
    $('<b>Không tưởng tượng được </b>').appendTo('section');
});

// insert , before , after
$('#btnInserBefore').click(function () {
    $('<h4> Ínert Before </h4>').insertBefore('p');
    $('<h4> Ínert Before </h4>').insertAfter('p');
});

$('#after').click(function () {
    $('p').after('<h4>After</h4>');
    $('p').before('<h4>Before</h4>')
});

$('#btnAddClass').click(function () {
    $('h1').addClass('color');
});

$('#btnRemoveClass').click(function () {
    $('h1').removeClass('color');
});

$('#btnToogeClass').click(function () {
    $('h1').toggleClass('color');
});

$('#btnGetAllUlLi').click(function () {
    alert($('li').map(function (index, element) {
        return $(element).text();
    }).get().join(" - "));
});