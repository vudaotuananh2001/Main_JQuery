ready : khi đã tải trang xong
nhúng thư viện CDN : hệ thống máy chủ phân tán, hỗ trọ caching của trình duyệt, tải xuống song song,...
=> hầu hết js được sử  dụng theo các id ( các selector )

- các thao tác với element qua tên thẻ
    + đếm số thể hiện có qua tên thẻ jQuery('tên thẻ html').length

.html : lấy ra thôg tin các thẻ html

*  các toán tử
    toán tử so sánh = : name ='value'
    toán tử so sánh không bằng != : name = 'value'
    toán tử so sánh chứa name *= 'value'
    toán tử so sánh chứa từ name~= 'value' trước theo sau là dấu cách
    toán tử so sách tiền tố bởi name|= 'value' theo sau là dấu -
    toán tử so sácg bắt đầu bởi năm ^= 'value'
    toán tử so sách kết thúc bởi name $= 'value'

* get - set giá trị thuộc tính của Element
    các phương thức 
        - text () : gán hoặc lấy nội dung thuần văn bản từ phần tử
            nếu text('content') : chứa content thì đó là phương thức set, cong không có là get
        - html (): gán hoặc lấy nội dung của HTML từ phần tử
        - val()  : gán haowcj lấy giá trị các trường (value) : chỉ set - get đối với các trường input thông tin

* làm việc với radio box và checkbox
    - làm việc với phần chọn ở các thẻ input  kiểu checkbox và radioBox  bằng các checked (lựa chọn) 
* làm việc với select
 - ở đây làm về phần chọn ở các thẻ  select - option bằng các selected (lựa chọn)

 * each()
    sử dụng vòng lặp each
    cách ngắt vòng lặp
    vòng lặp ngầm định
    tối ưu khi sử dụng each
    gọi các method liên tục

* JSON
 - Khái niệm JSON (JavaScript Object Notation) là 1 định dạng nhỏ dùng để truyền tải dữ liệu, dễ dàng sử dụng và có thể thay thế XML, lưu với dạng key - value
 - Mảng  JSON : chứa các thông tin kiểu object 
 - JSON nhiều cấp: 

* chuyển đổi qua lại giữa JSON, .NET Object và String
    - sang string : sử dụng stringify để chuyển đổi 1 list sang 1 chuỗi string
    - chuyển từ string sang list : sử dụng JSON.parse() để ép chuỗi string sang dạng JSON

* prepend và append
    - prepend : thêm mới 1 nội dung nào đó vào phần đầu tiên của nội dung mỗi element thoả mãn selector
    - append : thêm 1 nội dung vào cuối nội dung mỗi element thoả mãn selector

*after  bà before : các phương thức thêm phần tử HTML vào trước hoặc sau phần tử selector
    after : có 2 phương thức
        - after và insertAfter : nội dung insert ở trước đích đến ở sau
    before : có 2 phương thức 
        - before và insertBefore : nội dung insert ở sau đích đến trước

* thao tác CSS Class
    - hasClass : trả về true nếu phần tử chưa chứa Class được chỉ ra, ngược lại là false 
    - addClass : thêm mới 1 hoặc nhiều class vào phần tử . để add nhiều class sẽ cách nhau dấu cách\
    - removeClass : xoá 1 hay nhiều class trong 1 selector. Để xoá tất cả class trong phần tửu thì không chỉ ra tên
    - toogeClass : nếu phần tửu có class chỉ định sẽ remove còn ngưỢc lại không có sẽ add.

* cách sử dụng map()
    - phương thức map () ; về cơ bản giống vòng lặp each()  cũng dùng để lặp qua các phần tử trong DOM
    - Khi bạn muốn tạo 1 array hay 1 chuỗi tring dựa trên các phần tử  DOM thì dùng map() tốt hơn là each()
    - tốt hơn về hiệu suất và code ngắn hơn

* Change 
    - sự kiện change xảy ra khi 1 giá trị của element bị thay đổi
    - các sự kiện thường sử dụng event này : input, Textarea, Select
    - radio button và checkbox phát sinh sự kiện sớm nhất khi người dùng click chọn trong các phần tử khác thì phải đợi khi lost focus