# TRAINING

## I. Ngày 1: Component state props

```js
return (
  <tbody>
    {data.map((item, idx) => (
      <TableRow key={idx} ten={item.ten} ho={item.ho} email={item.email} stt={item.stt}></TableRow>
    ))}
  </tbody>
);
```

## II. Ngày 3: Sửa bài tập và học về hook effect

```js
// 1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc [] và thực hiện hàm trong cặp () => {}
useEffect(() => {
  if (listData?.[0]) {
    console.log("DEBUG IN USE EFFECT --> :", listData);
  }
}, [listData]);

// 2. Gọi API lấy dữ liệu ban đầu cho component này
useEffect(() => {
  console.log("DEBUG --> GOI KHI KHOI TAO 1 LAN DUY NHAT");
}, []);
```
