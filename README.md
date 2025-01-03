# Các lệnh làm việc cơ bản với Git

1. `git init`: Khởi tạo một thư mục làm việc với git (Chạy 1 lần đầu tiên)
2. `git add FILE_NAME` hoặc `git add .`: Thêm file vào vùng Git *area staging*.
3. `git status`: Kiểm tra các file trong project được quản lý bởi Github.
4. `git commit -m "thông điệp"`: 
5. `git branch -M main`: Lệnh này để đổi tên nhánh mặc định thành nhánh *main*
6. `git branch`: Kiểm tra đang ở nhánh nào
7. `git remote add origin LINK`: Lệnh này để kết nối local repository với remote repository.
8. `git remote -v`: Kiểm tra link remote
9. `git push -u origin main`: Đẩy thay đổi lên Git remote repository. (Chỉ lần đầu tiên thôi)
10. Từ lần 2: `git push`.


## Lặp lại các lệnh:

```
git add .
git commit -m "Message"
git push
```