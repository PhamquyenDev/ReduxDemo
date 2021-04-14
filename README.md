# ReduxDemo
cấu trúc project
.
*	├── node_modules            # chức thư viện bên thứ 3 cài bằng lệnh npm install.
*	├── src                     # mã nguồn của dự án.
*	│   ├── components          # chứa các component dùng chung.
*	│   ├── navigations         # chứa cấu hình để điều hướng giữa các màn hình.
*	│   ├── screens             # chứa các màn hình.
*	│   ├── actions             # chứa các hàm action redux.
*	│   ├── reducers            # chứa các hàm reducers làm thay đổi state.
*	│   ├── sagas               # chứa các hàm generator saga fn.
*	│   ├── store.js            # gộp các redux/ redux-saga, reducer thành một store cho cả project.
*	├── App.js                  # root component.
*	├── package.json            # cấu hình thư viện bên thứ 3. VD: số version 
*	└── ...

project sửu dụng redux/ redux-saga để sử lý việc call API, và một số tính năng:
  1.	Pull to refresh: tải lại page/ cập nhật data theo API
  1.	footer LoreMore: tải thêm data khi kéo hết trang
  1.	Detail: hiện thị chi tiết
  1.	Search: tìm kiếm theo thông tin object, tích hợp cả Pull to refresh và loadMore
  1.	button move to top: trở về đầu trang
  
Ngoài việc sử dụng redux/ redux-saga thì còn dùng các core component của react để blunde giao diện
và sử dụng các useState, useEffect linh hoạt
  
