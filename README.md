# ReduxDemo
cấu trúc project
- src
  --  component/header  
  --  action
  --  navigation
  --  reducers
  --  sagas
  --  screens
      --  Home
      --  Detail
  -- store.js

project sửu dụng redux/ redux-saga để sử lý việc call API, và một số tính năng:
  Pull to refresh: tải lại page/ cập nhật data theo API
  footer LoreMore: tải thêm data khi kéo hết trang
  Detail: hiện thị chi tiết
  Search: tìm kiếm theo thông tin object, tích hợp cả Pull to refresh và loadMore
  button move to top: trở về đầu trang
  
Ngoài việc sử dụng redux/ redux-saga thì còn dùng các core component của react để blunde giao diện
và sử dụng các useState, useEffect linh hoạt
  
